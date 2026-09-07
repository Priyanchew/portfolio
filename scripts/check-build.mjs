import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { createDecipheriv, pbkdf2Sync, randomBytes } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const accessKey = randomBytes(32).toString("hex");
const env = { ...process.env, OSVI_DOCS_ACCESS_KEY: accessKey };
const basePath = env.NEXT_PUBLIC_BASE_PATH || "";

// This build is for validation only. Production uses the existing deployment key.
for (const script of ["node_modules/next/dist/bin/next", "scripts/protect-osvi-docs.mjs"]) {
  const args = [path.join(root, script)];
  if (script.endsWith("/next")) args.push("build");
  const result = spawnSync(process.execPath, args, { cwd: root, env, stdio: "inherit" });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}

for (const file of ["index.html", "blogs/index.html", "docs/index.html", "docs/osvi/index.html", "404.html", "robots.txt", "sitemap.xml", "icon.svg", "opengraph-image", "CNAME", ".nojekyll"]) {
  assert.ok(fs.existsSync(path.join(root, "out", file)), `Missing export: ${file}`);
}

// Catch links or assets that accidentally escape /new, and references to missing files.
const exportDir = path.join(root, "out");
function verifyLocalReference(reference, file) {
  if (!reference.startsWith("/") || reference.startsWith("//")) return;
  const pathname = decodeURIComponent(new URL(reference.replaceAll("&amp;", "&"), "https://example.invalid").pathname);
  assert.ok(pathname.startsWith(`${basePath}/`), `Unprefixed reference in ${file}: ${pathname}`);
  const relativePath = pathname.slice(basePath.length + 1);
  const target = path.join(exportDir, relativePath);
  assert.ok(fs.existsSync(target), `Missing target in ${file}: ${pathname}`);
  if (fs.statSync(target).isDirectory()) {
    assert.ok(fs.existsSync(path.join(target, "index.html")), `Missing route in ${file}: ${pathname}`);
  }
}

for (const file of fs.readdirSync(exportDir, { recursive: true })) {
  if (!/\.(html|css)$/.test(file)) continue;
  const content = fs.readFileSync(path.join(exportDir, file), "utf8");
  const pattern = file.endsWith(".html") ? /\b(?:src|href)="(\/[^\"]*)"/g : /url\(["']?(\/[^\s)'";]+)["']?\)/g;
  for (const match of content.matchAll(pattern)) verifyLocalReference(match[1], file);
}
for (const [file, route] of [["index.html", "/"], ["blogs/index.html", "/blogs/"]]) {
  const html = fs.readFileSync(path.join(exportDir, file), "utf8");
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  assert.ok(canonical, `Missing canonical URL in ${file}`);
  assert.equal(new URL(canonical[1]).pathname, `${basePath}${route}`);
  for (const name of ["og:image", "twitter:image"]) {
    const image = html.match(new RegExp(`<meta (?:property|name)="${name}" content="([^"]+)"`));
    assert.ok(image, `Missing ${name} in ${file}`);
    assert.equal(new URL(image[1]).pathname, `${basePath}/opengraph-image`);
  }
}

// Verify the exported documents contain encrypted payloads that round-trip to the source.
const sourceDir = path.join(root, "public/docs/osvi");
const files = fs.existsSync(sourceDir) ? fs.readdirSync(sourceDir).filter(file => file.endsWith(".html")) : [];
for (const file of files) {
  const source = fs.readFileSync(path.join(sourceDir, file), "utf8");
  const exported = fs.readFileSync(path.join(root, "out/docs/osvi", file), "utf8");
  const match = exported.match(/const payload = (\{[^\n]+\});/);
  assert.ok(match, `Missing encrypted payload: ${file}`);
  assert.ok(exported !== source, `Unprotected document export: ${file}`);
  const payload = JSON.parse(match[1]);
  const key = pbkdf2Sync(accessKey, Buffer.from(payload.salt, "base64"), payload.iterations, 32, "sha256");
  const packed = Buffer.from(payload.data, "base64");
  const decipher = createDecipheriv("aes-256-gcm", key, Buffer.from(payload.iv, "base64"));
  decipher.setAuthTag(packed.subarray(-16));
  const decoded = Buffer.concat([decipher.update(packed.subarray(0, -16)), decipher.final()]);
  assert.ok(decoded.toString("utf8") === source, `Document round-trip failed: ${file}`);
}

console.log(`Static export verified at ${basePath || "/"}, including local links, assets, canonical URLs, and ${files.length} encrypted document(s). The temporary validation key was not saved.`);
