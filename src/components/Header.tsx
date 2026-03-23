import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top bar */}
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
              <span className="text-xl font-bold">歯医者.com</span>
            </Link>
            <span className="text-xs text-gray-400 hidden sm:block">
              歯医者の検索、口コミサイト
            </span>
          </div>
        </div>
        {/* Nav */}
        <nav className="flex gap-1 pb-3">
          <Link
            href="/clinic/search"
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition"
          >
            歯医者を探す
          </Link>
          <Link
            href="/articles"
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition"
          >
            コラム
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition"
          >
            このサイトについて
          </Link>
        </nav>
      </div>
    </header>
  );
}
