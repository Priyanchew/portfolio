import BlurFade from "@/components/magicui/blur-fade";
import { allPosts } from "content-collections";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { DATA } from "@/data/resume";

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
  const localPosts = [...allPosts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });
  const externalPosts = [...DATA.blogs];
  const postCount = localPosts.length + externalPosts.length;

  return (
    <section id="blog">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          Blogs{" "}
          <span className="ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm">
            {postCount} {postCount === 1 ? "post" : "posts"}
          </span>
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Published writing across Medium and this site.
        </p>
      </BlurFade>

      {postCount > 0 ? (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col gap-5">
            {externalPosts.map((post, id) => (
              <BlurFade
                delay={BLUR_FADE_DELAY * 3 + id * 0.05}
                key={post.href}
              >
                <Link
                  className="flex items-start gap-x-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-xs font-mono tabular-nums font-medium mt-[5px]">
                    {String(id + 1).padStart(2, "0")}.
                  </span>
                  <div className="flex flex-col gap-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="tracking-tight text-lg font-medium">
                        <span className="group-hover:text-foreground transition-colors">
                          {post.title}
                          <ArrowUpRight
                            className="ml-1 inline-block size-4 stroke-2 text-muted-foreground opacity-0 -translate-y-1 translate-x-0 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-y-0 group-hover:translate-x-0.5"
                            aria-hidden
                          />
                        </span>
                      </p>
                      <span className="bg-card border border-border rounded-md px-2 py-0.5 text-muted-foreground text-xs">
                        {post.source}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {post.summary}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {post.publishedAt} · {post.readTime}
                    </p>
                  </div>
                </Link>
              </BlurFade>
            ))}

            {localPosts.map((post, id) => {
              const slug = post._meta.path.replace(/\.mdx$/, "");
              const indexNumber = externalPosts.length + id + 1;
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
                        {post.publishedAt} · Portfolio
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
