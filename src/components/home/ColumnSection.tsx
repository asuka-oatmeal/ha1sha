import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";

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
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group block bg-white border border-border rounded-[12px] overflow-hidden hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="aspect-[16/9] bg-primary-light flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1A6B9C" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C9 2 7 4 6 6c-1 2-1.5 5-1 8 .5 3 1.5 6 2.5 8.5.5 1.2 1.2 2.5 2 2.5.6 0 1.2-.8 1.8-2.5.6-1.7 1-4 1.7-4s1.1 2.3 1.7 4c.6 1.7 1.2 2.5 1.8 2.5.8 0 1.5-1.3 2-2.5 1-2.5 2-5.5 2.5-8.5.5-3 0-6-1-8-1-2-3-4-6-4z"/>
                </svg>
              </div>
              <div className="p-5">
                <div className="mb-3">
                  <Badge>{article.category}</Badge>
                </div>
                <h3 className="text-[16px] font-semibold text-text-primary leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-200 mb-2">
                  {article.title}
                </h3>
                <time className="text-[13px] text-text-tertiary">
                  {article.date}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
