import { getAllArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import ClinicSearchBox from "@/components/ClinicSearchBox";
import Link from "next/link";
import { prefectures, regions } from "@/lib/prefectures";

export default function Home() {
  const articles = getAllArticles().slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="bg-accent">
        <div className="max-w-6xl mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-28">
          <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-3">
            あなたに合った歯医者が見つかる。
          </h1>
          <p className="text-center text-lg md:text-xl text-primary font-bold mb-10">
            歯医者.com
          </p>
          <ClinicSearchBox />
        </div>
      </section>

      {/* Specialties */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          お悩み・診療科目から探す
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: "🦷", label: "一般歯科", color: "bg-blue-50 text-blue-600" },
            { icon: "👶", label: "小児歯科", color: "bg-pink-50 text-pink-600" },
            { icon: "😁", label: "矯正歯科", color: "bg-purple-50 text-purple-600" },
            { icon: "✨", label: "審美歯科", color: "bg-amber-50 text-amber-600" },
            { icon: "🔧", label: "インプラント", color: "bg-sky-50 text-sky-600" },
            { icon: "🏥", label: "口腔外科", color: "bg-red-50 text-red-600" },
            { icon: "🪥", label: "予防歯科", color: "bg-green-50 text-green-600" },
            { icon: "💎", label: "ホワイトニング", color: "bg-indigo-50 text-indigo-600" },
          ].map((item) => (
            <Link
              key={item.label}
              href={`/clinic/search?q=${encodeURIComponent(item.label)}`}
              className="flex items-center gap-3 bg-white border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <span
                className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${item.color}`}
              >
                {item.icon}
              </span>
              <span className="text-sm font-medium text-gray-800">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Area */}
      <section className="bg-accent">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            エリアから探す
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {regions.map((region) => (
              <div
                key={region}
                className="bg-white rounded-lg border border-gray-100 p-5"
              >
                <p className="text-sm font-bold text-gray-800 mb-3 pb-2 border-b border-gray-100">
                  {region}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {prefectures
                    .filter((p) => p.region === region)
                    .map((p) => (
                      <Link
                        key={p.code}
                        href={`/clinic/search?pref=${encodeURIComponent(p.name)}`}
                        className="text-sm text-primary hover:underline"
                      >
                        {p.name}
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">コラム</h2>
          <Link
            href="/articles"
            className="text-sm text-primary font-medium hover:underline"
          >
            すべてのコラム →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
