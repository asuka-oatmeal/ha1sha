import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";

export default function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      {/* Thumbnail placeholder */}
      <div className="aspect-[16/9] bg-gradient-to-br from-primary-light to-teal-100 flex items-center justify-center">
        <span className="text-4xl">🦷</span>
      </div>
      {/* Content */}
      <div className="p-5">
        <span className="inline-block text-xs font-medium text-primary bg-primary-light px-2.5 py-1 rounded-full mb-3">
          {article.category}
        </span>
        <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
          {article.description}
        </p>
        <time className="block text-xs text-gray-400 mt-3">{article.date}</time>
      </div>
    </Link>
  );
}
