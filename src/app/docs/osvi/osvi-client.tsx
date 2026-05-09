"use client";

import BlurFade from "@/components/magicui/blur-fade";
import type { OsviDocEntry } from "./get-osvi-docs";
import { ChevronLeft, ChevronRight, FileText, Lock, LogOut } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

// SHA-256 of the access key. The plaintext key is NOT shipped in the bundle.
// To rotate: pick a new key, run
//   node -e "const c=require('crypto'); console.log(c.createHash('sha256').update('YOUR_KEY').digest('hex'))"
// and replace this constant.
const SECRET_HASH =
  "d31dd34628f67178eaec68cd0ca69aac3a2cc632043ec99c682bfc1ce4af4738";

const AUTH_KEY = "osvi_auth";
const AUTH_VALUE = "authenticated_v1";
const DOC_SESSION_KEY = "osvi_doc_key";

const BLUR_FADE_DELAY = 0.04;

async function sha256Hex(input: string): Promise<string> {
  const buf = new TextEncoder().encode(input);
  const hash = await crypto.subtle.digest("SHA-256", buf);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

type AuthState = "checking" | "locked" | "unlocked";

type OsviClientProps = {
  docs: readonly OsviDocEntry[];
};

export default function OsviClient({ docs }: OsviClientProps) {
  const [authState, setAuthState] = useState<AuthState>("checking");
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(AUTH_KEY) === AUTH_VALUE) {
        setAuthState("unlocked");
        return;
      }
    } catch {
      /* localStorage blocked — show the form anyway */
    }
    setAuthState("locked");
  }, []);

  // After unlock, if redirected here from a doc URL, send the user back.
  useEffect(() => {
    if (authState !== "unlocked") return;
    const params = new URLSearchParams(window.location.search);
    const from = params.get("from");
    if (from && from.startsWith("/docs/osvi/")) {
      window.location.replace(from);
    }
  }, [authState]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const hash = await sha256Hex(input.trim());
      if (hash === SECRET_HASH) {
        localStorage.setItem(AUTH_KEY, AUTH_VALUE);
        sessionStorage.setItem(DOC_SESSION_KEY, input.trim());
        setAuthState("unlocked");
        setInput("");
      } else {
        setError("Incorrect access key.");
      }
    } catch {
      setError("Could not validate. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleSignOut() {
    try {
      localStorage.removeItem(AUTH_KEY);
      sessionStorage.removeItem(DOC_SESSION_KEY);
    } catch {
      /* ignore */
    }
    setAuthState("locked");
  }

  if (authState === "checking") {
    return (
      <section id="osvi">
        <div className="text-sm text-muted-foreground">Loading…</div>
      </section>
    );
  }

  if (authState === "locked") {
    return (
      <section id="osvi">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="flex flex-col items-center justify-center py-16 px-4">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="size-5 text-muted-foreground" />
              <h1 className="text-2xl font-semibold tracking-tight">Private</h1>
            </div>
            <p className="text-sm text-muted-foreground mb-8 text-center max-w-md">
              This area is restricted. Enter the access key to continue.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 w-full max-w-sm"
            >
              <input
                type="password"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Access key"
                autoFocus
                autoComplete="off"
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              {error && <p className="text-xs text-destructive">{error}</p>}
              <button
                type="submit"
                disabled={submitting || !input.trim()}
                className="w-full rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Verifying…" : "Unlock"}
              </button>
            </form>
          </div>
        </BlurFade>
      </section>
    );
  }

  return (
    <section id="osvi">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link
          href="/docs"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ChevronLeft className="size-3.5" />
          <span>Back to docs</span>
        </Link>
        <div className="flex items-start justify-between mb-2 gap-4">
          <h1 className="text-2xl font-semibold tracking-tight">
            OSVI{" "}
            <span className="ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm">
              {docs.length} {docs.length === 1 ? "doc" : "docs"}
            </span>
          </h1>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mt-1"
            title="Sign out"
          >
            <LogOut className="size-3.5" />
            <span>Sign out</span>
          </button>
        </div>
        <p className="text-sm text-muted-foreground mb-8">
          Internal docs and write-ups for the OSVI internship.
        </p>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="flex flex-col gap-2">
          {docs.length === 0 && (
            <p className="text-sm text-muted-foreground border border-dashed border-border rounded-xl p-6 text-center">
              No OSVI docs are available yet.
            </p>
          )}
          {docs.map((doc) => (
            <a
              key={doc.href}
              href={doc.href}
              className="group flex items-start gap-3 border border-border rounded-xl p-4 hover:bg-accent/40 transition-colors"
            >
              <FileText className="size-4 mt-0.5 text-muted-foreground shrink-0" />
              <div className="flex flex-col gap-1 min-w-0 flex-1">
                <span className="font-medium group-hover:text-foreground transition-colors">
                  {doc.title}
                </span>
                {doc.description ? (
                  <span className="text-xs text-muted-foreground">
                    {doc.description}
                  </span>
                ) : null}
              </div>
              <ChevronRight className="size-4 mt-0.5 text-muted-foreground opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 shrink-0" />
            </a>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
