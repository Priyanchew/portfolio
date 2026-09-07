import { PortfolioHome } from "@/components/portfolio/home";
import type { Metadata } from "next";
import { site } from "@/data/portfolio";
import { withBasePath } from "@/lib/site-path";
import { siteMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = {
  alternates: { canonical: `${site.url}${withBasePath("/")}` },
  // Explicit page metadata prevents the file-based image from losing the deployment prefix.
  openGraph: siteMetadata.openGraph,
};

export default function Page() {
  return <PortfolioHome />;
}
