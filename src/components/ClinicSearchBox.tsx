"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ClinicSearchBox() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  function handleSearch() {
    const q = keyword.trim();
    if (q) {
      router.push(`/clinic/search?q=${encodeURIComponent(q)}`);
    } else {
      router.push("/clinic/search");
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
      className="w-full max-w-2xl mx-auto relative"
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
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="エリア・医院名・診療科目で検索"
        className="w-full pl-12 pr-24 py-4 bg-white border border-gray-200 rounded-full text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-primary-dark transition"
      >
        検索
      </button>
    </form>
  );
}
