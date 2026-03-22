import Link from "next/link";
import { categories } from "@/lib/categories";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">ha1sha</span>
            <span className="text-xs text-gray-400 hidden sm:block">
              歯医者選びの完全ガイド
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <Link href="/articles" className="hover:text-primary transition">
              記事一覧
            </Link>
            <Link href="/about" className="hover:text-primary transition">
              このサイトについて
            </Link>
          </nav>
        </div>
        {/* Category navigation */}
        <nav className="flex gap-1 overflow-x-auto pb-2 -mb-px scrollbar-hide">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="shrink-0 px-4 py-2 text-sm font-medium text-gray-600 rounded-full hover:bg-primary-light hover:text-primary transition"
            >
              {cat.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
