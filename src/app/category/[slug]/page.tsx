import { getAllArticles } from "@/lib/articles";
import { categories, getCategoryBySlug } from "@/lib/categories";
import ArticleCard from "@/components/ArticleCard";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) notFound();

  const articles = getAllArticles().filter(
    (a) => a.category === category.name
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Category header */}
      <div className="mb-10">
        <span className="text-4xl mb-4 block">{category.icon}</span>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          {category.name}
        </h1>
        <p className="text-gray-500 leading-relaxed max-w-2xl">
          {category.description}
        </p>
      </div>

      {/* Articles */}
      {articles.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg">このカテゴリの記事は準備中です</p>
          <p className="text-sm mt-2">近日公開予定です。お楽しみに！</p>
        </div>
      )}
    </div>
  );
}
