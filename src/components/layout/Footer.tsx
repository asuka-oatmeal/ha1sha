import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-text-primary text-text-tertiary">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="max-w-xs">
            <p className="text-lg font-bold text-white mb-3">歯医者.com</p>
            <p className="text-sm leading-relaxed">
              あなたに合った歯医者が見つかる。全国の歯科医院の検索・口コミサイト。
            </p>
          </div>
          <div className="flex gap-16">
            <div>
              <p className="text-sm font-semibold text-gray-400 mb-4">
                サービス
              </p>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/clinic/search"
                    className="hover:text-white transition-colors duration-200"
                  >
                    歯医者を探す
                  </Link>
                </li>
                <li>
                  <Link
                    href="/articles"
                    className="hover:text-white transition-colors duration-200"
                  >
                    コラム
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-400 mb-4">
                サイト情報
              </p>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors duration-200"
                  >
                    このサイトについて
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-white transition-colors duration-200"
                  >
                    プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors duration-200"
                  >
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-xs text-center text-gray-500">
          &copy; {new Date().getFullYear()} 歯医者.com All rights reserved.
        </div>
      </div>
    </footer>
  );
}
