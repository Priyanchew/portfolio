import type { Metadata } from "next";
import OsviClient from "./osvi-client";

export const metadata: Metadata = {
  title: "OSVI — Private",
  description: "Private docs.",
  robots: { index: false, follow: false },
};

export default function OsviPage() {
  return <OsviClient />;
}
