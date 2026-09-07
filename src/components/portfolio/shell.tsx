"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/data/portfolio";

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const reducedMotion = useReducedMotion() ?? false;
  const reveal = {
    initial: reducedMotion ? false : { opacity: 0, filter: "blur(2px)", y: 3 },
    animate: { opacity: 1, filter: "blur(0px)", y: 0 },
    transition: { duration: .34, ease: [0.2, 0, 0, 1] as const },
  };
  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <motion.header className="site-header" {...reveal}>
        <Link href="/" aria-label={`${site.firstName}, home`} className="wordmark">{site.handle}<span>.dev</span></Link>
        <nav aria-label="Main navigation">
          <Link href="/#work">work</Link>
          <Link href="/#elsewhere">elsewhere</Link>
          <button type="button" className="theme-toggle" aria-label="Toggle light and dark theme" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
            <Sun className="sun-icon" size={16} aria-hidden />
            <Moon className="moon-icon" size={15} aria-hidden />
          </button>
        </nav>
      </motion.header>
      <div id="main-content" className={pathname === "/" ? "home-wrapper" : "inner-page"}>{children}</div>
    </div>
  );
}
