import Link from "next/link";
import JapanMap from "@/components/map/JapanMap";
import {
  Stethoscope, Baby, SmilePlus, Sparkles,
  Wrench, Hospital, HeartPulse, ShieldCheck,
  Brush, HeartHandshake, Moon, ParkingCircle,
} from "lucide-react";

const regionGroups = [
  { name: "北海道・東北", prefs: ["北海道", "青森", "岩手", "宮城", "秋田", "山形", "福島"], color: "#c8d8e8" },
  { name: "関東", prefs: ["東京", "神奈川", "千葉", "埼玉", "茨城", "栃木", "群馬"], color: "#e2dcc8" },
  { name: "東海", prefs: ["愛知", "静岡", "岐阜", "三重"], color: "#c8d8c8" },
  { name: "北陸・甲信越", prefs: ["新潟", "富山", "石川", "福井", "山梨", "長野"], color: "#d0c8e0" },
  { name: "中国", prefs: ["鳥取", "島根", "岡山", "広島", "山口"], color: "#c8d8e8" },
  { name: "近畿", prefs: ["大阪", "兵庫", "京都", "滋賀", "奈良", "和歌山"], color: "#d8d0a8" },
  { name: "四国", prefs: ["徳島", "香川", "愛媛", "高知"], color: "#c8d8c8" },
  { name: "九州・沖縄", prefs: ["福岡", "佐賀", "長崎", "熊本", "大分", "宮崎", "鹿児島", "沖縄"], color: "#d0c8e0" },
];

const specialties = [
  { icon: Stethoscope, label: "一般歯科" },
  { icon: Baby, label: "小児歯科" },
  { icon: SmilePlus, label: "矯正歯科" },
  { icon: Sparkles, label: "審美歯科" },
  { icon: Wrench, label: "インプラント" },
  { icon: Hospital, label: "口腔外科" },
  { icon: Brush, label: "予防歯科" },
  { icon: HeartPulse, label: "ホワイトニング" },
  { icon: ShieldCheck, label: "歯周病治療" },
  { icon: HeartHandshake, label: "歯科恐怖症対応" },
  { icon: Moon, label: "夜間診療" },
  { icon: ParkingCircle, label: "駐車場あり" },
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

export default function AreaAndFieldSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {/* Left: Area */}
          <div>
            <div className="mb-8">
              <h2 className="text-[22px] md:text-[28px] font-bold text-text-primary leading-[1.4] tracking-[0.02em] inline">
                エリアから歯医者を探す
              </h2>
              <span className="text-[13px] font-[var(--font-serif)] tracking-[0.1em] text-text-tertiary ml-3">
                Location
              </span>
            </div>

            {/* Desktop: map with surrounding region blocks */}
            <div className="hidden lg:grid grid-cols-[200px_1fr_200px] gap-4 items-start">
              <div className="space-y-3">
                <RegionBlock group={regionGroups[3]} />
                <RegionBlock group={regionGroups[4]} />
              </div>
              <div className="px-2">
                <JapanMap />
              </div>
              <div className="space-y-3">
                <RegionBlock group={regionGroups[0]} />
                <RegionBlock group={regionGroups[1]} />
                <RegionBlock group={regionGroups[2]} />
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-3 gap-4 mt-4">
              <RegionBlock group={regionGroups[7]} />
              <RegionBlock group={regionGroups[6]} />
              <RegionBlock group={regionGroups[5]} />
            </div>

            {/* Mobile */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3">
              {regionGroups.map((group) => (
                <RegionBlock key={group.name} group={group} />
              ))}
            </div>
          </div>

          {/* Right: Field */}
          <div>
            <div className="mb-8">
              <h2 className="text-[22px] md:text-[28px] font-bold text-text-primary leading-[1.4] tracking-[0.02em] inline">
                診療科目から歯医者を探す
              </h2>
              <span className="text-[13px] font-[var(--font-serif)] tracking-[0.1em] text-text-tertiary ml-3">
                Field
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-3 gap-3">
              {specialties.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={`/clinic/search?q=${encodeURIComponent(item.label)}`}
                    className="flex flex-col items-center justify-center gap-2 bg-white border border-border rounded-[8px] p-5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <Icon size={36} strokeWidth={1.5} className="text-text-primary" />
                    <span className="text-[13px] font-medium text-text-primary text-center">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
