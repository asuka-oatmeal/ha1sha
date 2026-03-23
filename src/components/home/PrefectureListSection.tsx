import Link from "next/link";

const groups = [
  { name: "北海道・東北", prefs: ["北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県"] },
  { name: "関東", prefs: ["東京都", "神奈川県", "千葉県", "埼玉県", "茨城県", "栃木県", "群馬県"] },
  { name: "北陸・甲信越", prefs: ["新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県"] },
  { name: "東海", prefs: ["愛知県", "静岡県", "岐阜県", "三重県"] },
  { name: "近畿", prefs: ["大阪府", "兵庫県", "京都府", "滋賀県", "奈良県", "和歌山県"] },
  { name: "中国", prefs: ["鳥取県", "島根県", "岡山県", "広島県", "山口県"] },
  { name: "四国", prefs: ["徳島県", "香川県", "愛媛県", "高知県"] },
  { name: "九州・沖縄", prefs: ["福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"] },
];

export default function PrefectureListSection() {
  return (
    <section className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((group) => (
            <div key={group.name}>
              <p className="text-[16px] font-semibold text-primary mb-3">
                {group.name}
              </p>
              <div className="flex flex-wrap gap-x-3 gap-y-1">
                {group.prefs.map((pref) => (
                  <Link
                    key={pref}
                    href={`/clinic/search?pref=${encodeURIComponent(pref)}`}
                    className="text-[14px] text-text-primary hover:text-primary hover:underline transition-colors duration-200 py-1"
                  >
                    {pref}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
