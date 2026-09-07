import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const docsDir = path.join(process.cwd(), "public", "docs", "osvi");
const outDir = path.join(process.cwd(), "out", "docs", "osvi");
const accessKey = process.env.OSVI_DOCS_ACCESS_KEY;
const iterations = 250_000;

function b64(buffer) {
  return Buffer.from(buffer).toString("base64");
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function pickMeta(html, name) {
  const esc = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const nameFirst = new RegExp(
    `<meta\\s+[^>]*name=["']${esc}["'][^>]*content=["']([^"']*)["']`,
    "i",
  );
  const contentFirst = new RegExp(
    `<meta\\s+[^>]*content=["']([^"']*)["'][^>]*name=["']${esc}["']`,
    "i",
  );
  return html.match(nameFirst)?.[1] ?? html.match(contentFirst)?.[1] ?? null;
}

function pickTitle(html, file) {
  const title = pickMeta(html, "osvi-doc-title") ?? html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1];
  if (title) return title.replace(/&amp;/g, "&").trim();

  return file
    .replace(/\.html$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function encryptHtml(html) {
  const salt = crypto.randomBytes(16);
  const iv = crypto.randomBytes(12);
  const key = crypto.pbkdf2Sync(accessKey, salt, iterations, 32, "sha256");
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  const encrypted = Buffer.concat([cipher.update(html, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();

  return {
    salt: b64(salt),
    iv: b64(iv),
    data: b64(Buffer.concat([encrypted, tag])),
  };
}

function protectedPage({ title, payload }) {
  const safeTitle = escapeHtml(title);
  const payloadJson = JSON.stringify({ ...payload, iterations });

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>Private Osvi AI Document</title>
<style>
  :root { color-scheme: dark light; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
  body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #0a0a0a; color: #fafafa; }
  main { width: min(420px, calc(100vw - 32px)); border: 1px solid #2b2b2b; border-radius: 18px; padding: 28px; background: #111; box-shadow: 0 20px 80px rgba(0,0,0,.35); }
  h1 { margin: 0 0 8px; font-size: 22px; letter-spacing: -.02em; }
  p { margin: 0 0 20px; color: #a1a1aa; line-height: 1.5; font-size: 14px; }
  form { display: grid; gap: 10px; }
  input, button { border-radius: 10px; border: 1px solid #333; padding: 11px 12px; font: inherit; }
  input { background: #0a0a0a; color: #fafafa; }
  button { cursor: pointer; border-color: #fafafa; background: #fafafa; color: #0a0a0a; font-weight: 600; }
  .error { min-height: 18px; color: #fca5a5; font-size: 13px; }
  iframe { position: fixed; inset: 0; width: 100vw; height: 100vh; border: 0; background: white; }
</style>
</head>
<body>
<main id="gate">
  <h1>Private Osvi AI Document</h1>
  <p>${safeTitle}</p>
  <form id="form">
    <input id="key" type="password" placeholder="Access key" autocomplete="off" autofocus>
    <button type="submit">Unlock</button>
    <div class="error" id="error"></div>
  </form>
</main>
<script>
const payload = ${payloadJson};
const SESSION_KEY = "osvi_doc_key";

function bytesFromBase64(value) {
  return Uint8Array.from(atob(value), (char) => char.charCodeAt(0));
}

async function decrypt(keyText) {
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(keyText),
    "PBKDF2",
    false,
    ["deriveKey"],
  );
  const key = await crypto.subtle.deriveKey(
    { name: "PBKDF2", salt: bytesFromBase64(payload.salt), iterations: payload.iterations, hash: "SHA-256" },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"],
  );
  const packed = bytesFromBase64(payload.data);
  const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: bytesFromBase64(payload.iv) }, key, packed);
  return new TextDecoder().decode(plain);
}

function showDoc(html) {
  document.getElementById("gate")?.remove();
  const iframe = document.createElement("iframe");
  iframe.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms allow-popups");
  iframe.srcdoc = html;
  document.body.appendChild(iframe);
}

async function tryUnlock(keyText, persist) {
  const html = await decrypt(keyText);
  if (persist) sessionStorage.setItem(SESSION_KEY, keyText);
  showDoc(html);
}

const cached = sessionStorage.getItem(SESSION_KEY);
if (cached) tryUnlock(cached, false).catch(() => sessionStorage.removeItem(SESSION_KEY));

document.getElementById("form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const input = document.getElementById("key");
  const error = document.getElementById("error");
  error.textContent = "";
  try {
    await tryUnlock(input.value.trim(), true);
  } catch {
    error.textContent = "Incorrect access key.";
  }
});
</script>
</body>
</html>`;
}

if (!fs.existsSync(docsDir)) process.exit(0);

const files = fs.readdirSync(docsDir).filter((file) => file.toLowerCase().endsWith(".html"));
if (files.length > 0 && !accessKey) {
  throw new Error("OSVI_DOCS_ACCESS_KEY is required to protect public/docs/osvi/*.html in production builds.");
}

fs.mkdirSync(outDir, { recursive: true });

for (const file of files) {
  const source = path.join(docsDir, file);
  const html = fs.readFileSync(source, "utf8");
  const payload = encryptHtml(html);
  const title = pickTitle(html, file);
  fs.writeFileSync(path.join(outDir, file), protectedPage({ title, payload }));
}

console.log(`Protected ${files.length} Osvi doc${files.length === 1 ? "" : "s"}.`);
