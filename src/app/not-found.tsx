import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <p className="not-found-code">404</p>
      <h1>Nothing here, yet.</h1>
      <p>This page may have moved, or the link took a wrong turn.</p>
      <Link href="/"><ArrowLeft size={14} aria-hidden /> Back to the portfolio</Link>
    </main>
  );
}
