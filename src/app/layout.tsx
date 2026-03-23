import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
    "歯医者選びで失敗しないための情報サイト。選び方のポイント、治療の種類、費用の目安まで、歯科に関するあらゆる情報をお届けします。",
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
      <body className="min-h-screen flex flex-col bg-white text-gray-800">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
