import type { Metadata } from "next";
import { site } from "@/data/portfolio";
import { withBasePath } from "./site-path";

const socialImage = {
  url: `${site.url}${withBasePath("/social-card.png")}`,
  width: 1200,
  height: 630,
  type: "image/png",
  alt: `${site.name}. ${site.tagline}`,
};

export function socialMetadata(title: string, description: string, path: string): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      title, description,
      url: `${site.url}${withBasePath(path)}`,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      title, description,
      card: "summary_large_image",
      creator: `@${site.handle}`,
      images: [socialImage],
    },
  };
}

export const siteMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  authors: [{ name: site.name, url: `${site.url}${withBasePath("/")}` }],
  creator: site.name,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  icons: {
    icon: [
      { url: withBasePath("/favicon.ico"), type: "image/x-icon", sizes: "16x16 32x32 48x48 96x96 256x256" },
      { url: withBasePath("/favicons/favicon-96.png"), type: "image/png", sizes: "96x96" },
      { url: withBasePath("/icon.svg"), type: "image/svg+xml", sizes: "any" },
    ],
    apple: [{ url: withBasePath("/apple-icon.png"), sizes: "180x180", type: "image/png" }],
  },
  ...socialMetadata(site.title, site.description, "/"),
};
