import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import JapanMap from "@/components/map/JapanMap";

const regionGroups = [
  { name: "北海道・東北", prefs: ["北海道", "青森", "岩手", "宮城", "秋田", "山形", "福島"], color: "#c8d8e8", position: "top-0 right-0" },
  { name: "関東", prefs: ["東京", "神奈川", "千葉", "埼玉", "茨城", "栃木", "群馬"], color: "#e2dcc8", position: "top-[220px] right-0" },
  { name: "東海", prefs: ["愛知", "静岡", "岐阜", "三重"], color: "#c8d8c8", position: "top-[420px] right-0" },
  { name: "北陸・甲信越", prefs: ["新潟", "富山", "石川", "福井", "山梨", "長野"], color: "#d0c8e0", position: "top-0 left-0" },
  { name: "中国", prefs: ["鳥取", "島根", "岡山", "広島", "山口"], color: "#c8d8e8", position: "top-[200px] left-0" },
  { name: "近畿", prefs: ["大阪", "兵庫", "京都", "滋賀", "奈良", "和歌山"], color: "#d8d0a8", position: "bottom-0 right-0" },
  { name: "四国", prefs: ["徳島", "香川", "愛媛", "高知"], color: "#c8d8c8", position: "bottom-0 left-[33%]" },
  { name: "九州・沖縄", prefs: ["福岡", "佐賀", "長崎", "熊本", "大分", "宮崎", "鹿児島", "沖縄"], color: "#d0c8e0", position: "bottom-0 left-0" },
];

function prefToFull(name: string): string {
  const map: Record<string, string> = {
    "北海道": "北海道", "東京": "東京都", "大阪": "大阪府", "京都": "京都府",
  };
  return map[name] ?? name + "県";
}

function RegionBlock({ group }: { group: typeof regionGroups[0] }) {
  return (
    <div className="bg-bg-gray rounded-lg p-4">
      <p className="inline-block text-xs font-bold px-2 py-0.5 rounded mb-3" style={{ backgroundColor: group.color }}>
        {group.name}
      </p>
      <div className="grid grid-cols-3 gap-x-4 gap-y-1.5">
        {group.prefs.map((pref) => (
          <Link
            key={pref}
            href={`/clinic/search?pref=${encodeURIComponent(prefToFull(pref))}`}
            className="text-[15px] text-text-primary hover:text-primary transition-colors duration-200"
          >
            {pref}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function AreaSearchSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20">
        <SectionHeader label="Location" title="エリアから歯医者を探す" />

        {/* Desktop: map with surrounding region blocks */}
        <div className="hidden lg:grid grid-cols-[240px_1fr_240px] gap-6 items-start">
          {/* Left column */}
          <div className="space-y-4 pt-4">
            <RegionBlock group={regionGroups[3]} /> {/* 北陸・甲信越 */}
            <RegionBlock group={regionGroups[4]} /> {/* 中国 */}
          </div>

          {/* Center: Map */}
          <div className="px-4">
            <JapanMap />
          </div>

          {/* Right column */}
          <div className="space-y-4 pt-4">
            <RegionBlock group={regionGroups[0]} /> {/* 北海道・東北 */}
            <RegionBlock group={regionGroups[1]} /> {/* 関東 */}
            <RegionBlock group={regionGroups[2]} /> {/* 東海 */}
          </div>
        </div>

        {/* Bottom row (desktop) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-6">
          <RegionBlock group={regionGroups[7]} /> {/* 九州・沖縄 */}
          <RegionBlock group={regionGroups[6]} /> {/* 四国 */}
          <RegionBlock group={regionGroups[5]} /> {/* 近畿 */}
        </div>

        {/* Mobile: stacked list */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {regionGroups.map((group) => (
            <RegionBlock key={group.name} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
