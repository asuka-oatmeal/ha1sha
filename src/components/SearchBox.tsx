"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const popularKeywords = [
  "虫歯治療",
  "インプラント",
  "歯医者 選び方",
  "費用 保険適用",
  "ホワイトニング",
  "歯周病",
  "定期検診",
  "歯医者 怖い",
  "矯正",
  "親知らず",
];

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(q: string) {
    const searchQuery = q.trim();
    if (!searchQuery) return;
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Search input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(query);
        }}
        className="relative"
      >
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="キーワードで記事を探す"
          className="w-full pl-12 pr-24 py-4 bg-white border border-gray-200 rounded-full text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-primary-dark transition"
        >
          検索
        </button>
      </form>

      {/* Popular keywords */}
      <div className="mt-4">
        <p className="text-xs font-medium text-gray-500 mb-2">
          注目キーワード
        </p>
        <div className="flex flex-wrap gap-2">
          {popularKeywords.map((keyword) => (
            <button
              key={keyword}
              onClick={() => handleSearch(keyword)}
              className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-full hover:border-primary hover:text-primary transition"
            >
              {keyword}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
