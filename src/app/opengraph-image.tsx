import { ImageResponse } from "next/og";
import { site, work } from "@/data/portfolio";

export const dynamic = "force-static";
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "78px 90px", background: "#faf9f6", color: "#363833", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, color: "#73766e" }}><span>{new URL(site.url).host}</span><span>{site.location}</span></div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 94 }}><div style={{ display: "flex", fontSize: 62, letterSpacing: -3 }}>Hey, I’m {site.firstName}<span style={{ color: "#697d5c" }}>.</span></div><div style={{ marginTop: 25, fontSize: 30, color: "#73766e" }}>{site.tagline}</div></div>
      <div style={{ display: "flex", borderTop: "1px solid #e5e5dd", paddingTop: 24, marginTop: "auto", fontSize: 19, color: "#73766e" }}>{work.map(entry => entry.name).join(" · ")}</div>
    </div>, size,
  );
}
