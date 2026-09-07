import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PortfolioShell } from "@/components/portfolio/shell";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./portfolio.css";

const cabinet = localFont({
  src: "../../public/fonts/CabinetGrotesk-Medium.ttf",
  variable: "--font-cabinet",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: { default: "Priyanshu Choudhary — Engineer & builder", template: `%s | ${DATA.name}` },
  description: DATA.description,
  openGraph: { title: "Priyanshu Choudhary — Engineer & builder", description: DATA.description, url: DATA.url, siteName: DATA.name, locale: "en_US", type: "website" },
  twitter: { title: DATA.name, description: DATA.description, card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning><body className={cabinet.variable}><ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}><TooltipProvider delayDuration={0}><PortfolioShell>{children}</PortfolioShell></TooltipProvider></ThemeProvider></body></html>;
}
