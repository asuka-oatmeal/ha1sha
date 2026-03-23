"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import JapanMap from "@/components/map/JapanMap";

const regionToMapRegion: Record<string, string> = {
  "北海道東北": "tohoku",
  "関東": "kanto",
  "中部": "chubu",
  "近畿": "kinki",
  "中国": "chugoku",
  "四国": "shikoku",
  "九州沖縄": "kyushu",
};

const regionGroups = [
  { name: "北海道東北", prefs: ["北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県"] },
  { name: "関東", prefs: ["東京都", "神奈川県", "千葉県", "埼玉県", "茨城県", "栃木県", "群馬県"] },
  { name: "中部", prefs: ["新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "愛知県", "静岡県", "岐阜県", "三重県"] },
  { name: "近畿", prefs: ["大阪府", "兵庫県", "京都府", "滋賀県", "奈良県", "和歌山県"] },
  { name: "中国", prefs: ["鳥取県", "島根県", "岡山県", "広島県", "山口県"] },
  { name: "四国", prefs: ["徳島県", "香川県", "愛媛県", "高知県"] },
  { name: "九州沖縄", prefs: ["福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"] },
];

export default function AreaSearchSection() {
  const [activeRegion, setActiveRegion] = useState("関東");
  const activeGroup = regionGroups.find((g) => g.name === activeRegion)!;

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20">
        <SectionHeader label="Location" title="エリアから歯医者を探す" />

        {/* Region tabs */}
        <div className="flex gap-1 overflow-x-auto mb-8 border-b border-border">
          {regionGroups.map((group) => (
            <button
              key={group.name}
              onClick={() => setActiveRegion(group.name)}
              className={`shrink-0 px-4 py-3 text-sm font-medium border-b-2 transition-colors duration-200 ${
                activeRegion === group.name
                  ? "text-primary border-primary font-semibold"
                  : "text-text-secondary border-transparent hover:text-primary-dark hover:bg-primary-light"
              }`}
            >
              {group.name}
            </button>
          ))}
        </div>

        {/* Map + Prefecture grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Map (hidden on mobile) */}
          <div className="hidden lg:block">
            <JapanMap activeRegion={regionToMapRegion[activeRegion]} />
          </div>

          {/* Prefecture grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {activeGroup.prefs.map((pref) => (
              <Link
                key={pref}
                href={`/clinic/search?pref=${encodeURIComponent(pref)}`}
                className="text-center py-3 px-3 text-[15px] text-text-primary hover:text-primary hover:bg-primary-light rounded-lg transition-colors duration-200"
              >
                {pref}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
