"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ChevronRight, FileText, Lock } from "lucide-react";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import { withBasePath } from "@/lib/site-path";

const AUTH_KEY = "osvi_auth";
const AUTH_VALUE = "authenticated_v1";

// Public docs are visible to everyone. Add new entries here as you write more.
const PUBLIC_DOCS: Array<{
  title: string;
  href: string;
  description: string;
}> = [
  // (none yet)
];

const BLUR_FADE_DELAY = 0.04;

function subscribeAuth() {
  return () => undefined;
}

function getOsviAuthSnapshot() {
  try {
    return localStorage.getItem(AUTH_KEY) === AUTH_VALUE;
  } catch {
    return false;
  }
}

export default function DocsClient() {
  const showOsvi = useSyncExternalStore(
    subscribeAuth,
    getOsviAuthSnapshot,
    () => false
  );
  const totalCount = PUBLIC_DOCS.length + (showOsvi ? 1 : 0);
  const isEmpty = PUBLIC_DOCS.length === 0 && !showOsvi;

  return (
    <section id="docs">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          Docs{" "}
          <span className="ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm">
            {totalCount} {totalCount === 1 ? "entry" : "entries"}
          </span>
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Write-ups, specs, and shareable docs.
        </p>
      </BlurFade>

      {!isEmpty && (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col gap-2">
            {PUBLIC_DOCS.map((doc) => (
              <a
                key={doc.href}
                href={withBasePath(doc.href)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 border border-border rounded-xl p-4 hover:bg-accent/40 transition-colors"
              >
                <FileText className="size-4 mt-0.5 text-muted-foreground shrink-0" />
                <div className="flex flex-col gap-1 min-w-0 flex-1">
                  <span className="font-medium group-hover:text-foreground transition-colors">
                    {doc.title}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {doc.description}
                  </span>
                </div>
                <ChevronRight className="size-4 mt-0.5 text-muted-foreground opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 shrink-0" />
              </a>
            ))}

            {showOsvi && (
              <Link
                href="/docs/osvi"
                className="group flex items-start gap-3 border border-border rounded-xl p-4 hover:bg-accent/40 transition-colors"
              >
                <Lock className="size-4 mt-0.5 text-muted-foreground shrink-0" />
                <div className="flex flex-col gap-1 min-w-0 flex-1">
                  <span className="font-medium group-hover:text-foreground transition-colors">
                    OSVI
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Internal docs and write-ups from my work at OSVI.
                  </span>
                </div>
                <ChevronRight className="size-4 mt-0.5 text-muted-foreground opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 shrink-0" />
              </Link>
            )}
          </div>
        </BlurFade>
      )}

      {isEmpty && (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col items-center justify-center py-12 px-4 border border-border rounded-xl">
            <p className="text-muted-foreground text-center">
              No docs yet. Check back soon!
            </p>
          </div>
        </BlurFade>
      )}
    </section>
  );
}
