import BlurFade from "@/components/magicui/blur-fade";
import { allPosts } from "content-collections";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, FileText } from "lucide-react";

// Static docs (HTML) hosted under /blogs/docs/ for easy link-sharing.
// Add new entries here as you drop more files into public/blogs/docs/.
const DOCS = [
  {
    title: "OSVI — Chat Agent v1",
    href: "/blogs/docs/osvi-chat-agent-v1.html",
    description: "Internship doc — chat agent prototype walkthrough.",
  },
];

export const metadata: Metadata = {
  title: "Blogs",
  description: "Thoughts on AI agents, developer tooling, and building.",
  openGraph: {
    title: "Blogs",
    description: "Thoughts on AI agents, developer tooling, and building.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs",
    description: "Thoughts on AI agents, developer tooling, and building.",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function BlogsPage() {
  const sortedPosts = [...allPosts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <section id="blog">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          Blogs{" "}
          <span className="ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm">
            {sortedPosts.length} posts
          </span>
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          My thoughts on AI agents, developer tooling, and building.
        </p>
      </BlurFade>

      {DOCS.length > 0 && (
        <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
          <div className="mb-10 border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="size-4 text-muted-foreground" />
              <h2 className="text-sm font-semibold tracking-tight">Docs</h2>
              <span className="text-xs text-muted-foreground">
                shareable links
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {DOCS.map((doc) => (
                <a
                  key={doc.href}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2 text-sm hover:bg-accent/40 -mx-2 px-2 py-1.5 rounded-md transition-colors"
                >
                  <ChevronRight className="size-4 mt-0.5 text-muted-foreground shrink-0" />
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="font-medium group-hover:text-foreground transition-colors">
                      {doc.title}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {doc.description}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </BlurFade>
      )}

      {sortedPosts.length > 0 ? (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col gap-5">
            {sortedPosts.map((post, id) => {
              const slug = post._meta.path.replace(/\.mdx$/, "");
              const indexNumber = id + 1;
              return (
                <BlurFade delay={BLUR_FADE_DELAY * 3 + id * 0.05} key={slug}>
                  <Link
                    className="flex items-start gap-x-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    href={`/blogs/${slug}`}
                  >
                    <span className="text-xs font-mono tabular-nums font-medium mt-[5px]">
                      {String(indexNumber).padStart(2, "0")}.
                    </span>
                    <div className="flex flex-col gap-y-2 flex-1">
                      <p className="tracking-tight text-lg font-medium">
                        <span className="group-hover:text-foreground transition-colors">
                          {post.title}
                          <ChevronRight
                            className="ml-1 inline-block size-4 stroke-3 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                            aria-hidden
                          />
                        </span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {post.publishedAt}
                      </p>
                    </div>
                  </Link>
                </BlurFade>
              );
            })}
          </div>
        </BlurFade>
      ) : (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col items-center justify-center py-12 px-4 border border-border rounded-xl">
            <p className="text-muted-foreground text-center">
              No blog posts yet. Check back soon!
            </p>
          </div>
        </BlurFade>
      )}
    </section>
  );
}
