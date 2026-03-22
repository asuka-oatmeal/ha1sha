import Link from "next/link";

const footerLinks = [
  {
    title: "コンテンツ",
    links: [
      { name: "歯医者の選び方", href: "/category/choosing" },
      { name: "治療ガイド", href: "/category/treatment" },
      { name: "費用・保険", href: "/category/cost" },
      { name: "予防・ケア", href: "/category/prevention" },
    ],
  },
  {
    title: "サイト情報",
    links: [
      { name: "このサイトについて", href: "/about" },
      { name: "プライバシーポリシー", href: "/privacy" },
      { name: "お問い合わせ", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold text-primary mb-2">歯医者.com</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              歯医者選びで失敗しないための情報サイト。
              あなたに合った歯科医院を見つけるお手伝いをします。
            </p>
          </div>
          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <p className="font-medium text-gray-800 mb-3">{section.title}</p>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-primary transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} 歯医者.com All rights reserved.
        </div>
      </div>
    </footer>
  );
}
