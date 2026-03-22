import { getArticle, getAllArticleSlugs } from "@/lib/articles";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link
        href="/articles"
        className="text-sm text-teal-700 hover:underline mb-6 inline-block"
      >
        ← 記事一覧に戻る
      </Link>

      <article>
        <header className="mb-8">
          <span className="inline-block text-xs font-medium text-teal-700 bg-teal-50 px-2 py-1 rounded mb-3">
            {article.category}
          </span>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            {article.title}
          </h1>
          <time className="text-sm text-gray-500">{article.date}</time>
        </header>

        <div
          className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-a:text-teal-700"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </div>
  );
}
