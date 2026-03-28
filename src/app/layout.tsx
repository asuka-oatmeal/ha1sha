import type { Metadata } from "next";
import Script from "next/script";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ha1sha.com"),
  title: {
    default: "歯医者.com | 歯医者選びの完全ガイド",
    template: "%s | 歯医者.com",
  },
  description:
    "歯医者選びで失敗しないための情報サイト。全国の歯科医院を検索し、口コミ・評判をチェックできます。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "歯医者.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${notoSerifJP.variable} ${notoSansJP.className}`}
    >
      <body className="min-h-screen flex flex-col bg-white text-text-primary">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <Script
          defer
          src="https://umami-murex-one-27.vercel.app/script.js"
          data-website-id="2692e76f-876b-4ce4-bc83-9eafda5408c7"
        />
      </body>
    </html>
  );
}
