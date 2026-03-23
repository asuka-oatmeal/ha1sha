"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { prefectures, regions } from "@/lib/prefectures";
import { Search } from "lucide-react";

const specialtyOptions = [
  "一般歯科", "小児歯科", "矯正歯科", "審美歯科",
  "インプラント", "口腔外科", "歯周病治療", "予防歯科", "ホワイトニング",
];

export default function HeroSection() {
  const [prefecture, setPrefecture] = useState("");
  const [specialty, setSpecialty] = useState("");
  const router = useRouter();

  function handleSearch() {
    const params = new URLSearchParams();
    if (prefecture) params.set("pref", prefecture);
    if (specialty) params.set("q", specialty);
    router.push(`/clinic/search?${params.toString()}`);
  }

  return (
    <section className="bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <p className="text-[20px] md:text-[28px] text-text-primary leading-[1.4] tracking-[0.02em]">
          あなたに合った歯医者が見つかる、
        </p>
        <p className="text-[28px] md:text-[36px] font-bold text-primary leading-[1.4] tracking-[0.02em] mb-10">
          歯医者.com。
        </p>

        {/* Search form */}
        <div className="max-w-3xl">
          <div className="flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden border border-border shadow-sm">
            <div className="flex-1 flex items-center border-b sm:border-b-0 sm:border-r border-border">
              <span className="text-xs text-text-tertiary pl-4 pr-2 shrink-0">
                地域
              </span>
              <select
                value={prefecture}
                onChange={(e) => setPrefecture(e.target.value)}
                className="flex-1 px-2 py-4 text-[15px] text-text-primary bg-transparent appearance-none cursor-pointer focus:outline-none"
              >
                <option value="">エリアを選ぶ</option>
                {regions.map((region) => (
                  <optgroup key={region} label={region}>
                    {prefectures
                      .filter((p) => p.region === region)
                      .map((p) => (
                        <option key={p.code} value={p.name}>{p.name}</option>
                      ))}
                  </optgroup>
                ))}
              </select>
              <svg className="w-4 h-4 text-text-tertiary mr-3 shrink-0 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="flex-1 flex items-center border-b sm:border-b-0 sm:border-r border-border">
              <span className="text-xs text-text-tertiary pl-4 pr-2 shrink-0">
                分野
              </span>
              <select
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className="flex-1 px-2 py-4 text-[15px] text-text-primary bg-transparent appearance-none cursor-pointer focus:outline-none"
              >
                <option value="">診療科目を選ぶ</option>
                {specialtyOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <svg className="w-4 h-4 text-text-tertiary mr-3 shrink-0 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <button
              onClick={handleSearch}
              className="flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 hover:bg-primary-dark transition-colors duration-200"
            >
              <Search size={18} />
              検索する
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
