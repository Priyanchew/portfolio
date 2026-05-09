import fs from "node:fs";
import path from "node:path";

/** Populated at build time from public/docs/osvi/*.html — do not import from client components. */
export type OsviDocEntry = {
  href: string;
  title: string;
  description: string;
};

const OSVI_DIR = path.join(process.cwd(), "public", "docs", "osvi");

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function pickMeta(html: string, name: string): string | null {
  const esc = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const nameFirst = new RegExp(
    `<meta\\s+[^>]*name=["']${esc}["'][^>]*content=["']([^"']*)["']`,
    "i",
  );
  const contentFirst = new RegExp(
    `<meta\\s+[^>]*content=["']([^"']*)["'][^>]*name=["']${esc}["']`,
    "i",
  );
  const m = html.match(nameFirst) ?? html.match(contentFirst);
  return m?.[1] != null ? decodeEntities(m[1]) : null;
}

function pickTitle(html: string): string | null {
  const m = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  return m?.[1] != null ? decodeEntities(m[1].trim()) : null;
}

function titleFromFilename(file: string): string {
  return file
    .replace(/\.html$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function getOsviDocs(): OsviDocEntry[] {
  if (!fs.existsSync(OSVI_DIR)) return [];

  const files = fs
    .readdirSync(OSVI_DIR)
    .filter((f) => f.toLowerCase().endsWith(".html"));

  const entries: OsviDocEntry[] = [];

  for (const file of files) {
    const abs = path.join(OSVI_DIR, file);
    const html = fs.readFileSync(abs, "utf8");

    const osviTitle = pickMeta(html, "osvi-doc-title");
    const osviDesc = pickMeta(html, "osvi-doc-description");
    const hasOsviListingMeta = osviTitle != null || osviDesc != null;

    const title =
      osviTitle ?? pickTitle(html) ?? titleFromFilename(file);

    const description = hasOsviListingMeta
      ? (osviDesc ?? pickMeta(html, "description") ?? "").trim()
      : "";

    entries.push({
      href: `/docs/osvi/${file}`,
      title,
      description,
    });
  }

  entries.sort((a, b) =>
    a.title.localeCompare(b.title, undefined, { sensitivity: "base" }),
  );

  return entries;
}
