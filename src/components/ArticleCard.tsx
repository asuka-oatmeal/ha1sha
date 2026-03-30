import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";
import ArticleEyecatch from "@/components/ArticleEyecatch";

export default function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block bg-white border border-border rounded-[12px] overflow-hidden hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200"
    >
      <ArticleEyecatch title={article.title} category={article.category} />
      <div className="p-5">
        <h3 className="text-[16px] font-semibold text-text-primary leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-200 mb-2">
          {article.title}
        </h3>
        <time className="text-[13px] text-text-tertiary">{article.date}</time>
      </div>
    </Link>
  );
}
