import type { MetadataRoute } from "next";
import { site } from "@/data/portfolio";
import { withBasePath } from "@/lib/site-path";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.handle,
    description: site.description,
    id: withBasePath("/"),
    start_url: withBasePath("/"),
    scope: withBasePath("/"),
    display: "browser",
    background_color: "#faf9f6",
    theme_color: "#faf9f6",
    icons: [192, 512].map(size => ({
      src: withBasePath(`/favicons/icon-${size}.png`),
      sizes: `${size}x${size}`,
      type: "image/png",
      purpose: "any",
    })),
  };
}
