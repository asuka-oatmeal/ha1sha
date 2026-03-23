"use client";

import { useRouter } from "next/navigation";

type Region = {
  id: string;
  name: string;
  pref: string;
  d: string;
  color: string;
};

const regions: Region[] = [
  // 北海道
  { id: "hokkaido", name: "北海道", pref: "北海道", d: "M320,30 L370,20 L400,35 L410,70 L395,95 L365,105 L340,95 L325,70 L310,50 Z", color: "#a8d8ea" },
  // 東北
  { id: "tohoku", name: "東北", pref: "宮城県", d: "M340,110 L375,105 L390,120 L385,160 L370,180 L345,175 L335,150 L330,125 Z", color: "#b8e6c8" },
  // 関東
  { id: "kanto", name: "関東", pref: "東京都", d: "M335,180 L370,178 L385,190 L380,215 L365,225 L340,220 L330,200 Z", color: "#f9e79f" },
  // 中部・北陸
  { id: "chubu", name: "中部", pref: "愛知県", d: "M280,155 L335,150 L340,180 L335,215 L310,230 L275,220 L265,190 L270,165 Z", color: "#d5c4a1" },
  // 近畿
  { id: "kinki", name: "近畿", pref: "大阪府", d: "M265,220 L310,230 L315,255 L300,275 L270,270 L255,250 L255,235 Z", color: "#f5b7b1" },
  // 中国
  { id: "chugoku", name: "中国", pref: "広島県", d: "M195,230 L255,225 L260,250 L250,275 L220,280 L195,270 L185,250 Z", color: "#aed6f1" },
  // 四国
  { id: "shikoku", name: "四国", pref: "香川県", d: "M220,285 L265,280 L275,300 L260,315 L230,315 L215,300 Z", color: "#a9dfbf" },
  // 九州・沖縄
  { id: "kyushu", name: "九州", pref: "福岡県", d: "M165,275 L200,270 L215,290 L210,330 L195,350 L170,345 L155,320 L155,290 Z", color: "#d7bde2" },
  // 沖縄
  { id: "okinawa", name: "沖縄", pref: "沖縄県", d: "M130,370 L155,365 L160,380 L150,395 L135,390 Z", color: "#f9e79f" },
];

export default function JapanMap() {
  const router = useRouter();

  function handleClick(pref: string) {
    router.push(`/clinic/search?pref=${encodeURIComponent(pref)}`);
  }

  return (
    <svg viewBox="100 0 340 420" className="w-full max-w-md mx-auto">
      {regions.map((region) => (
        <g
          key={region.id}
          onClick={() => handleClick(region.pref)}
          className="cursor-pointer"
        >
          <path
            d={region.d}
            fill={region.color}
            stroke="#fff"
            strokeWidth="2"
            className="hover:opacity-70 transition-opacity"
          />
          <text
            x={getCenter(region.d).x}
            y={getCenter(region.d).y}
            textAnchor="middle"
            dominantBaseline="central"
            className="text-[10px] font-bold fill-gray-700 pointer-events-none"
          >
            {region.name}
          </text>
        </g>
      ))}
    </svg>
  );
}

function getCenter(d: string): { x: number; y: number } {
  const nums = d.match(/[\d.]+/g)?.map(Number) ?? [];
  let sumX = 0,
    sumY = 0,
    count = 0;
  for (let i = 0; i < nums.length - 1; i += 2) {
    sumX += nums[i];
    sumY += nums[i + 1];
    count++;
  }
  return { x: sumX / count, y: sumY / count };
}
