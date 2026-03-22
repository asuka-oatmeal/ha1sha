import { getAllArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import type { Metadata } from "next";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { q } = await searchParams;
  return {
    title: q ? `「${q}」の検索結果` : "検索",
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";

  const allArticles = getAllArticles();
  const results = query
    ? allArticles.filter(
        (a) =>
          a.title.includes(query) ||
          a.description.includes(query) ||
          a.category.includes(query)
      )
    : [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        {query ? `「${query}」の検索結果` : "検索"}
      </h1>
      {query && (
        <p className="text-sm text-gray-500 mb-8">
          {results.length}件の記事が見つかりました
        </p>
      )}

      {results.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : query ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg mb-2">該当する記事が見つかりませんでした</p>
          <p className="text-sm">別のキーワードで検索してみてください</p>
        </div>
      ) : null}
    </div>
  );
}
