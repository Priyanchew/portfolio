import type { MetadataRoute } from "next";
import { site } from "@/data/portfolio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/blogs/"].map(path => ({ url: `${site.url}${path}` }));
}
