import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";

export default function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
    >
      <span className="inline-block text-xs font-medium text-teal-700 bg-teal-50 px-2 py-1 rounded mb-3">
        {article.category}
      </span>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
      <p className="text-sm text-gray-600 line-clamp-2">
        {article.description}
      </p>
      <time className="block text-xs text-gray-400 mt-3">{article.date}</time>
    </Link>
  );
}
