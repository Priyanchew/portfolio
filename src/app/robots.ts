import type { MetadataRoute } from "next";
import { site } from "@/data/portfolio";
import { withBasePath } from "@/lib/site-path";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: withBasePath("/"), disallow: withBasePath("/docs/osvi/") },
    sitemap: `${site.url}${withBasePath("/sitemap.xml")}`,
  };
}
