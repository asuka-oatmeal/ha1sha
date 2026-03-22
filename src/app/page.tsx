import { getAllArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import ClinicSearchBox from "@/components/ClinicSearchBox";
import Link from "next/link";
import { prefectures, regions } from "@/lib/prefectures";

export default function Home() {
  const articles = getAllArticles().slice(0, 6);

  return (
    <>
      {/* Hero + Clinic Search */}
      <section className="bg-gradient-to-b from-accent to-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            あなたに合った
            <span className="text-primary">歯医者</span>
            が見つかる
          </h1>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
            全国の歯科医院を検索して、口コミ・評判をチェック。
            あなたにぴったりの歯医者を見つけましょう。
          </p>
          <ClinicSearchBox />
        </div>
      </section>

      {/* Area search */}
      <section className="max-w-6xl mx-auto px-4 -mt-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          エリアから歯医者を探す
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {regions.map((region) => (
            <div
              key={region}
              className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-sm transition-shadow"
            >
              <p className="font-medium text-gray-800 mb-3">{region}</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {prefectures
                  .filter((p) => p.region === region)
                  .map((p) => (
                    <Link
                      key={p.code}
                      href={`/clinic/search?pref=${encodeURIComponent(p.name)}`}
                      className="text-xs text-gray-500 hover:text-primary transition"
                    >
                      {p.name}
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular specialties */}
      <section className="max-w-6xl mx-auto px-4 mt-12">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          診療科目から探す
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "🦷", label: "一般歯科", q: "一般歯科" },
            { icon: "👶", label: "小児歯科", q: "小児歯科" },
            { icon: "✨", label: "審美歯科", q: "審美歯科" },
            { icon: "🔧", label: "インプラント", q: "インプラント" },
            { icon: "😁", label: "矯正歯科", q: "矯正歯科" },
            { icon: "🪥", label: "予防歯科", q: "予防歯科" },
            { icon: "💎", label: "ホワイトニング", q: "ホワイトニング" },
            { icon: "🏥", label: "口腔外科", q: "口腔外科" },
          ].map((item) => (
            <Link
              key={item.q}
              href={`/clinic/search?q=${encodeURIComponent(item.q)}`}
              className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-shadow"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm font-medium text-gray-700">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg font-bold text-gray-900">
            歯医者選びに役立つ記事
          </h2>
          <Link
            href="/articles"
            className="text-sm text-primary font-medium hover:underline"
          >
            すべての記事 →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
    </>
  );
}
