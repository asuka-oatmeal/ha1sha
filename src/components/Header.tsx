import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/icon.svg"
                alt="歯医者.com"
                width={28}
                height={28}
                className="rounded-md"
              />
              <span className="text-xl font-bold font-[var(--font-serif)]">
                歯医者.com
              </span>
            </Link>
            <span className="text-xs text-gray-500 hidden sm:block">
              歯医者の検索・口コミサイト
            </span>
          </div>
        </div>
        <nav className="flex gap-1 pb-3 text-sm">
          <Link
            href="/clinic/search"
            className="px-4 py-2 text-gray-300 hover:text-white transition"
          >
            歯医者を探す
          </Link>
          <Link
            href="/articles"
            className="px-4 py-2 text-gray-300 hover:text-white transition"
          >
            コラム
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 text-gray-300 hover:text-white transition"
          >
            このサイトについて
          </Link>
        </nav>
      </div>
    </header>
  );
}
