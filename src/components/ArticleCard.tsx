import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";

export default function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
    >
      {/* Thumbnail */}
      <div className="aspect-[16/9] bg-accent flex items-center justify-center">
        <span className="text-4xl">🦷</span>
      </div>
      {/* Content */}
      <div className="p-4">
        <span className="inline-block text-xs font-medium text-primary bg-primary-light px-2 py-0.5 rounded mb-2">
          {article.category}
        </span>
        <h3 className="text-sm font-bold text-gray-900 mb-1.5 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
          {article.title}
        </h3>
        <time className="text-xs text-gray-400">{article.date}</time>
      </div>
    </Link>
  );
}
