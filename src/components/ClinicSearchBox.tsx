"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { prefectures, regions } from "@/lib/prefectures";

const specialtyOptions = [
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
    if (specialty) params.set("q", specialty);
    router.push(`/clinic/search?${params.toString()}`);
  }

  return (
    <div className="w-full max-w-3xl">
      <p className="text-sm text-primary font-medium mb-3 flex items-center gap-1">
        <span className="inline-block bg-primary text-white text-xs px-2 py-0.5 rounded">
          まずはエリアを選択
        </span>
        <span className="text-primary">▼</span>
      </p>
      <div className="flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Area */}
        <div className="flex-1 flex items-center border-b sm:border-b-0 sm:border-r border-gray-200">
          <span className="text-xs text-gray-400 pl-4 pr-2 shrink-0">
            地域
          </span>
          <select
            value={prefecture}
            onChange={(e) => setPrefecture(e.target.value)}
            className="flex-1 px-2 py-4 text-sm text-gray-900 bg-transparent appearance-none cursor-pointer focus:outline-none"
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
            className="w-4 h-4 text-gray-400 mr-3 shrink-0"
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
        <div className="flex-1 flex items-center border-b sm:border-b-0 sm:border-r border-gray-200">
          <span className="text-xs text-gray-400 pl-4 pr-2 shrink-0">
            分野
          </span>
          <select
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="flex-1 px-2 py-4 text-sm text-gray-900 bg-transparent appearance-none cursor-pointer focus:outline-none"
          >
            <option value="">診療科目を選ぶ</option>
            {specialtyOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <svg
            className="w-4 h-4 text-gray-400 mr-3 shrink-0"
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
          className="bg-primary text-white font-bold px-8 py-4 hover:bg-primary-dark transition shrink-0"
        >
          検索する
        </button>
      </div>
    </div>
  );
}
