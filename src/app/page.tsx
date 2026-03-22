import { getAllArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";

export default function Home() {
  const articles = getAllArticles();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          歯医者選びの完全ガイド
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          あなたに合った歯医者を見つけるための情報を発信しています。
          選び方のポイントから治療の種類、費用の目安まで。
        </p>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">最新の記事</h2>
          <Link
            href="/articles"
            className="text-sm text-teal-700 hover:underline"
          >
            すべての記事を見る →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
