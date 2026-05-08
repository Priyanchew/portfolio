import type { Metadata } from "next";
import DocsClient from "./docs-client";

export const metadata: Metadata = {
  title: "Docs",
  description: "Write-ups, specs, and shareable docs.",
  openGraph: {
    title: "Docs",
    description: "Write-ups, specs, and shareable docs.",
  },
};

export default function DocsPage() {
  return <DocsClient />;
}
