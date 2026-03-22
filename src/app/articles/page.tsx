import { getAllArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "記事一覧",
  description: "歯医者選びに役立つ記事の一覧です。",
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">記事一覧</h1>
      <p className="text-sm text-gray-500 mb-8">
        歯医者選びに役立つ情報をお届けしています
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
