import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { site, writing } from "@/data/portfolio";
import { withBasePath } from "@/lib/site-path";

export const metadata: Metadata = {
  title: "Writing",
  description: "One article so far, on security for AI agents.",
  alternates: { canonical: `${site.url}${withBasePath("/blogs/")}` },
};

export default function BlogsPage() {
  return (
    <main className="writing-page">
      <h1>Once, I wrote</h1>
      <p className="page-intro">One article so far, on security for AI agents.</p>
      <div className="writing-archive">
        {writing.map(post => (
          <article key={post.href}>
            <h2><a href={post.href} target="_blank" rel="noreferrer">{post.title} <ArrowUpRight size={16} aria-hidden /></a></h2>
            <p>{post.summary}</p>
            <p className="writing-meta">{post.source} · {post.publishedAt} · {post.readTime}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
