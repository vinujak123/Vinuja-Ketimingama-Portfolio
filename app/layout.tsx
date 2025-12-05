import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LayoutShell } from "@/components/layout-shell";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Vinuja Ketimingama — Full-Stack Developer Portfolio",
  description:
    "Full-stack developer focused on front-end and full-stack development. I build responsive, user-centered interfaces and full-stack systems.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-bg text-slate-100 antialiased",
          sora.variable,
          inter.variable,
          jetbrains.variable
        )}
      >
        <div className="noise-overlay" />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
