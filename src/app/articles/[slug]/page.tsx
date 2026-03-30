import { getArticle, getAllArticleSlugs } from "@/lib/articles";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import ArticleEyecatch from "@/components/ArticleEyecatch";

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
        className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition mb-8"
      >
        ← 記事一覧に戻る
      </Link>

      <article>
        <header className="mb-10">
          <ArticleEyecatch
            title={article.title}
            category={article.category}
            size="hero"
          />
          <div className="mt-6">
            <span className="inline-block text-xs font-medium text-primary bg-primary-light px-2.5 py-1 rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-3">
              {article.description}
            </p>
            <time className="text-xs text-gray-400">{article.date}</time>
          </div>
        </header>

        <div
          className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-100 prose-a:text-primary prose-li:marker:text-primary prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>

      {/* Bottom CTA */}
      <div className="mt-16 p-8 bg-primary-light rounded-2xl text-center">
        <p className="text-lg font-bold text-gray-900 mb-2">
          他の記事も読んでみませんか？
        </p>
        <p className="text-sm text-gray-500 mb-4">
          歯医者選びに役立つ情報をまとめています
        </p>
        <Link
          href="/articles"
          className="inline-block bg-primary text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-primary-dark transition"
        >
          記事一覧を見る
        </Link>
      </div>
    </div>
  );
}
