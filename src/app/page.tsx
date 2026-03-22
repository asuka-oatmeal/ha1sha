import { getAllArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import SearchBox from "@/components/SearchBox";
import Link from "next/link";

export default function Home() {
  const articles = getAllArticles();

  return (
    <>
      {/* Hero + Search */}
      <section className="bg-gradient-to-b from-accent to-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            あなたに合った
            <span className="text-primary">歯医者</span>
            が見つかる
          </h1>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
            選び方のポイントから治療の種類、費用の目安まで。
            歯医者選びに必要な情報をわかりやすくお届けします。
          </p>
          <SearchBox />
        </div>
      </section>

      {/* Featured categories */}
      <section className="max-w-6xl mx-auto px-4 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "🔍", label: "歯医者の選び方", href: "/category/choosing" },
            { icon: "💊", label: "治療ガイド", href: "/category/treatment" },
            { icon: "💰", label: "費用・保険", href: "/category/cost" },
            { icon: "🪥", label: "予防・ケア", href: "/category/prevention" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-2 bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="text-sm font-medium text-gray-700">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest articles */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">今注目の記事</h2>
          <Link
            href="/articles"
            className="text-sm text-primary font-medium hover:underline"
          >
            すべての記事 →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
