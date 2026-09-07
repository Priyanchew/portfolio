import type { MetadataRoute } from "next";
import { site } from "@/data/portfolio";
import { basePath, withBasePath } from "@/lib/site-path";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = basePath ? ["/", "/blogs/"] : ["/", "/blogs/", "/new/", "/new/blogs/"];
  return paths.map(path => ({ url: `${site.url}${withBasePath(path)}` }));
}
