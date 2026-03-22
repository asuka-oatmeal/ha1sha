import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-white mb-2">歯医者.com</p>
            <p className="text-sm leading-relaxed max-w-xs">
              あなたに合った歯医者が見つかる。
              全国の歯科医院の検索・口コミサイト。
            </p>
          </div>
          {/* Links */}
          <div className="flex gap-12">
            <div>
              <p className="text-sm font-medium text-gray-300 mb-3">サービス</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/clinic/search" className="hover:text-white transition">
                    歯医者を探す
                  </Link>
                </li>
                <li>
                  <Link href="/articles" className="hover:text-white transition">
                    コラム
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-300 mb-3">サイト情報</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    このサイトについて
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition">
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition">
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800 text-xs text-center">
          &copy; {new Date().getFullYear()} 歯医者.com All rights reserved.
        </div>
      </div>
    </footer>
  );
}
