import type { MetadataRoute } from "next";
import { site } from "@/data/portfolio";
import { basePath, withBasePath } from "@/lib/site-path";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: withBasePath("/"),
      disallow: basePath ? [withBasePath("/docs/osvi/")] : ["/docs/osvi/", "/new/docs/osvi/"],
    },
    sitemap: `${site.url}${withBasePath("/sitemap.xml")}`,
  };
}
