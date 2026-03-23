import { getAllArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import ClinicSearchBox from "@/components/ClinicSearchBox";
import Link from "next/link";
import { prefectures } from "@/lib/prefectures";

const regionGroups = [
  {
    name: "北海道・東北",
    prefs: ["北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県"],
  },
  {
    name: "関東",
    prefs: ["東京都", "神奈川県", "千葉県", "埼玉県", "茨城県", "栃木県", "群馬県"],
  },
  {
    name: "北陸・甲信越",
    prefs: ["新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県"],
  },
  {
    name: "東海",
    prefs: ["愛知県", "静岡県", "岐阜県", "三重県"],
  },
  {
    name: "近畿",
    prefs: ["大阪府", "兵庫県", "京都府", "滋賀県", "奈良県", "和歌山県"],
  },
  {
    name: "中国",
    prefs: ["鳥取県", "島根県", "岡山県", "広島県", "山口県"],
  },
  {
    name: "四国",
    prefs: ["徳島県", "香川県", "愛媛県", "高知県"],
  },
  {
    name: "九州・沖縄",
    prefs: ["福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"],
  },
];

const specialties = [
  { icon: "🦷", label: "一般歯科" },
  { icon: "👶", label: "小児歯科" },
  { icon: "😁", label: "矯正歯科" },
  { icon: "✨", label: "審美歯科" },
  { icon: "🔧", label: "インプラント" },
  { icon: "🏥", label: "口腔外科" },
  { icon: "🪥", label: "予防歯科" },
  { icon: "💎", label: "ホワイトニング" },
  { icon: "🩺", label: "歯周病治療" },
  { icon: "😰", label: "歯科恐怖症対応" },
  { icon: "🌙", label: "夜間診療" },
  { icon: "🅿️", label: "駐車場あり" },
];

export default function Home() {
  const articles = getAllArticles().slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4 pt-12 pb-16 md:pt-16 md:pb-20">
          <p className="text-2xl md:text-4xl font-bold leading-tight mb-1">
            あなたに合った歯医者が見つかる、
          </p>
          <p className="text-3xl md:text-5xl font-bold text-primary mb-8">
            歯医者.com。
          </p>
          <ClinicSearchBox />
        </div>
      </section>

      {/* Two column: Area + Specialty */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Area */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              エリアから歯医者を探す
              <span className="text-sm font-normal text-gray-400 ml-2">
                Location
              </span>
            </h2>
            <div className="mt-6 space-y-5">
              {regionGroups.map((group) => (
                <div key={group.name}>
                  <p className="inline-block text-sm font-bold text-gray-800 bg-gray-100 px-2 py-0.5 rounded mb-2">
                    {group.name}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {group.prefs.map((pref) => (
                      <Link
                        key={pref}
                        href={`/clinic/search?pref=${encodeURIComponent(pref)}`}
                        className="text-sm text-primary hover:underline"
                      >
                        {pref.replace(/県|府|都/, "")}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Specialty */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              診療科目から歯医者を探す
              <span className="text-sm font-normal text-gray-400 ml-2">
                Field
              </span>
            </h2>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {specialties.map((item) => (
                <Link
                  key={item.label}
                  href={`/clinic/search?q=${encodeURIComponent(item.label)}`}
                  className="flex flex-col items-center justify-center gap-2 bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md hover:border-primary/30 transition"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              コラム
              <span className="text-sm font-normal text-gray-400 ml-2">
                Column
              </span>
            </h2>
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
        </div>
      </section>
    </>
  );
}
