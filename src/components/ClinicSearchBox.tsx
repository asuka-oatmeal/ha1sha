"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { prefectures, regions } from "@/lib/prefectures";

const specialties = [
  "すべての診療科目",
  "一般歯科",
  "小児歯科",
  "矯正歯科",
  "審美歯科",
  "インプラント",
  "口腔外科",
  "歯周病治療",
  "予防歯科",
  "ホワイトニング",
];

export default function ClinicSearchBox() {
  const [prefecture, setPrefecture] = useState("");
  const [specialty, setSpecialty] = useState("");
  const router = useRouter();

  function handleSearch() {
    const params = new URLSearchParams();
    if (prefecture) params.set("pref", prefecture);
    if (specialty && specialty !== "すべての診療科目")
      params.set("q", specialty);
    router.push(`/clinic/search?${params.toString()}`);
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Prefecture */}
        <div className="flex-1 relative">
          <select
            value={prefecture}
            onChange={(e) => setPrefecture(e.target.value)}
            className="w-full px-4 py-4 bg-white border border-gray-300 rounded-lg text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          >
            <option value="">エリアを選ぶ</option>
            {regions.map((region) => (
              <optgroup key={region} label={region}>
                {prefectures
                  .filter((p) => p.region === region)
                  .map((p) => (
                    <option key={p.code} value={p.name}>
                      {p.name}
                    </option>
                  ))}
              </optgroup>
            ))}
          </select>
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Specialty */}
        <div className="flex-1 relative">
          <select
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="w-full px-4 py-4 bg-white border border-gray-300 rounded-lg text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          >
            <option value="">診療科目を選ぶ</option>
            {specialties.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {/* Search button */}
        <button
          onClick={handleSearch}
          className="bg-primary text-white font-medium px-8 py-4 rounded-lg hover:bg-primary-dark transition shrink-0"
        >
          検索する
        </button>
      </div>
    </div>
  );
}
