import type { Metadata } from "next";
import { site } from "@/data/portfolio";
import { withBasePath } from "./site-path";

export const siteMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { title: site.title, description: site.description, url: `${site.url}${withBasePath("/")}`, siteName: site.name, locale: "en_US", type: "website", images: [{ url: `${site.url}${withBasePath("/opengraph-image")}`, width: 1200, height: 630, alt: `${site.name}. ${site.tagline}` }] },
  twitter: { title: site.name, description: site.description, card: "summary_large_image", images: [`${site.url}${withBasePath("/opengraph-image")}`] },
};
