"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function PortfolioShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <Link href="/" aria-label="Priyanshu, home" className="wordmark">priyanchew<span>.dev</span></Link>
        <nav aria-label="Main navigation">
          <Link href="/#work">work</Link>
          <Link href="/#elsewhere">elsewhere</Link>
          <button type="button" className="theme-toggle" aria-label="Toggle light and dark theme" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
            <Sun className="sun-icon" size={16} aria-hidden />
            <Moon className="moon-icon" size={15} aria-hidden />
          </button>
        </nav>
      </header>
      <div id="main-content" className={pathname === "/" ? "home-wrapper" : "inner-page"}>{children}</div>
    </div>
  );
}
