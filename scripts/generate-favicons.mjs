import fs from "node:fs/promises";
import { createRequire } from "node:module";

// Next.js includes sharp; use that installed copy for deterministic SVG exports.
const require = createRequire(import.meta.url);
const sharp = createRequire(require.resolve("next/package.json"))("sharp");
const root = new URL("../", import.meta.url);
const asset = path => new URL(path, root);
const source = await fs.readFile(asset("public/favicons/monogram.svg"));
const png = (svg, size) => sharp(svg, { density: 384 }).resize(size, size).png().toBuffer();

await fs.copyFile(asset("public/favicons/monogram.svg"), asset("src/app/icon.svg"));
for (const size of [16, 32, 48, 96, 192, 512]) {
  await fs.writeFile(asset(`public/favicons/${size < 192 ? "favicon" : "icon"}-${size}.png`), await png(source, size));
}
await fs.writeFile(asset("src/app/apple-icon.png"), await png(source, 180));
for (const name of ["monogram", "coast", "pixel"]) {
  const svg = await fs.readFile(asset(`public/favicons/${name}.svg`));
  await fs.writeFile(asset(`public/favicons/${name}.png`), await png(svg, 256));
}

// ICO directory entries point to complete PNGs, retaining alpha at each size.
const sizes = [16, 32, 48, 96, 256];
const images = await Promise.all(sizes.map(size => png(source, size)));
const header = Buffer.alloc(6 + 16 * images.length);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(images.length, 4);
let offset = header.length;
images.forEach((image, index) => {
  const entry = 6 + 16 * index;
  header[entry] = sizes[index] === 256 ? 0 : sizes[index];
  header[entry + 1] = header[entry];
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(image.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += image.length;
});
await fs.writeFile(asset("src/app/favicon.ico"), Buffer.concat([header, ...images]));

const labels = [["monogram", "01 / p.", "default"], ["coast", "02 / coast", "sea + sound"], ["pixel", "03 / pixel p", "a little Minecraft"]];
const tiles = await Promise.all(labels.map(async ([name, label, caption], index) => {
  const data = (await fs.readFile(asset(`public/favicons/${name}.svg`))).toString("base64");
  const x = 44 + index * 244;
  return `<image href="data:image/svg+xml;base64,${data}" x="${x}" y="62" width="76" height="76"/><image href="data:image/svg+xml;base64,${data}" x="${x + 108}" y="93" width="16" height="16"/><image href="data:image/svg+xml;base64,${data}" x="${x + 147}" y="85" width="32" height="32"/><text x="${x}" y="179" font-size="17" fill="#363833">${label}</text><text x="${x}" y="206" font-size="13" fill="#6b7065">${caption}</text>`;
}));
const preview = `<svg xmlns="http://www.w3.org/2000/svg" width="780" height="250"><rect width="780" height="250" fill="#faf9f6"/><g font-family="sans-serif">${tiles.join("")}</g></svg>`;
await fs.writeFile(asset("docs/favicon-options.png"), await sharp(Buffer.from(preview)).png().toBuffer());
console.log("Created three favicon options and the default SVG, PNG, ICO, and Apple icons.");
