import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/icon.svg"
              alt="歯医者.com"
              width={28}
              height={28}
              className="rounded-md"
            />
            <span className="text-xl font-bold text-gray-900">歯医者.com</span>
          </Link>
          <nav className="flex items-center gap-1">
            <Link
              href="/clinic/search"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md transition"
            >
              歯医者を探す
            </Link>
            <Link
              href="/articles"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md transition"
            >
              コラム
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md transition"
            >
              このサイトについて
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
