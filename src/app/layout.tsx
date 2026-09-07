import { ThemeProvider } from "@/components/theme-provider";
import { PortfolioShell } from "@/components/portfolio/shell";
import { site } from "@/data/portfolio";
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
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { title: site.title, description: site.description, url: site.url, siteName: site.name, locale: "en_US", type: "website" },
  twitter: { title: site.name, description: site.description, card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={cabinet.variable}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <PortfolioShell>{children}</PortfolioShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
