import type { Metadata } from "next";
import { getOsviDocs } from "./get-osvi-docs";
import OsviClient from "./osvi-client";

export const metadata: Metadata = {
  title: "Osvi AI private docs",
  description: "Private docs.",
  robots: { index: false, follow: false },
};

export default function OsviPage() {
  const docs = getOsviDocs();
  return <OsviClient docs={docs} />;
}
