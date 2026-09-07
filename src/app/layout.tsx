import { ThemeProvider } from "@/components/theme-provider";
import { PortfolioShell } from "@/components/portfolio/shell";
import localFont from "next/font/local";
import { siteMetadata } from "@/lib/site-metadata";
import "./globals.css";
import "./portfolio.css";

const cabinet = localFont({
  src: "../../public/fonts/CabinetGrotesk-Medium.ttf",
  variable: "--font-cabinet",
  display: "swap",
});

export const metadata = siteMetadata;

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
