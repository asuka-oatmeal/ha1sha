import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import SectionHeader from "@/components/ui/SectionHeader";
import ArticleCard from "@/components/ArticleCard";

export default function ColumnSection() {
  const articles = getAllArticles().slice(0, 6);

  return (
    <section className="bg-bg-gray">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-12">
          <SectionHeader label="Column" title="コラム" />
          <Link
            href="/articles"
            className="text-sm text-primary font-medium hover:underline transition-colors duration-200 mb-12"
          >
            すべてのコラム →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
