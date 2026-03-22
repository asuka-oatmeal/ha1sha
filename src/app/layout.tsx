import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ha1sha.com"),
  title: {
    default: "歯医者選びの完全ガイド | ha1sha.com",
    template: "%s | ha1sha.com",
  },
  description:
    "歯医者選びで失敗しないための情報サイト。選び方のポイント、治療の種類、費用の目安まで、歯科に関するあらゆる情報をお届けします。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "ha1sha.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-teal-700">
              ha1sha.com
            </Link>
            <nav className="flex gap-6 text-sm font-medium text-gray-600">
              <Link href="/" className="hover:text-teal-700 transition-colors">
                ホーム
              </Link>
              <Link
                href="/articles"
                className="hover:text-teal-700 transition-colors"
              >
                記事一覧
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-gray-800 text-gray-300 mt-16">
          <div className="max-w-5xl mx-auto px-4 py-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} ha1sha.com</p>
            <p className="mt-1">歯医者選びの完全ガイド</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
