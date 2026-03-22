"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { supabase, type Clinic } from "@/lib/supabase";
import { prefectures, regions } from "@/lib/prefectures";
import Link from "next/link";

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-yellow-400 text-sm">
      {"★".repeat(Math.round(rating))}
      {"☆".repeat(5 - Math.round(rating))}
      <span className="text-gray-500 ml-1">{rating.toFixed(1)}</span>
    </span>
  );
}

export default function ClinicSearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [prefecture, setPrefecture] = useState(
    searchParams.get("pref") ?? ""
  );
  const [city, setCity] = useState(searchParams.get("city") ?? "");
  const [keyword, setKeyword] = useState(searchParams.get("q") ?? "");
  const [clinics, setClinics] = useState<Clinic[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  async function handleSearch(prefOverride?: string) {
    setLoading(true);
    setSearched(true);

    const searchPref = prefOverride ?? prefecture;

    let query = supabase
      .from("clinics")
      .select("*")
      .order("rating", { ascending: false })
      .limit(50);

    if (searchPref) query = query.eq("prefecture", searchPref);
    if (city) query = query.ilike("city", `%${city}%`);
    if (keyword)
      query = query.or(
        `name.ilike.%${keyword}%,address.ilike.%${keyword}%,specialties.cs.{${keyword}}`
      );

    const { data, error } = await query;
    if (!error && data) setClinics(data as Clinic[]);
    setLoading(false);

    const params = new URLSearchParams();
    if (searchPref) params.set("pref", searchPref);
    if (city) params.set("city", city);
    if (keyword) params.set("q", keyword);
    router.replace(`/clinic/search?${params.toString()}`, { scroll: false });
  }

  useEffect(() => {
    if (searchParams.get("pref") || searchParams.get("q")) {
      handleSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        歯医者を探す
      </h1>

      {/* Search form */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-10">
        <div className="grid gap-4 md:grid-cols-4">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              都道府県
            </label>
            <select
              value={prefecture}
              onChange={(e) => setPrefecture(e.target.value)}
              className="w-full px-3 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            >
              <option value="">すべて</option>
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
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              市区町村
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="例：渋谷区"
              className="w-full px-3 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              キーワード
            </label>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="医院名・診療科目"
              className="w-full px-3 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={() => handleSearch()}
              disabled={loading}
              className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-primary-dark transition disabled:opacity-50"
            >
              {loading ? "検索中..." : "検索する"}
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      {loading ? (
        <div className="text-center py-20 text-gray-400">検索中...</div>
      ) : searched && clinics.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg mb-2">該当する歯科医院が見つかりませんでした</p>
          <p className="text-sm">条件を変えて検索してみてください</p>
        </div>
      ) : (
        <div className="space-y-4">
          {searched && (
            <p className="text-sm text-gray-500 mb-4">
              {clinics.length}件の歯科医院が見つかりました
            </p>
          )}
          {clinics.map((clinic) => (
            <Link
              key={clinic.id}
              href={`/clinic/${clinic.id}`}
              className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-gray-900 mb-1">
                    {clinic.name}
                  </h2>
                  <p className="text-sm text-gray-500 mb-2">
                    {clinic.prefecture}
                    {clinic.city} {clinic.address}
                  </p>
                  {clinic.specialties && clinic.specialties.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {clinic.specialties.map((s) => (
                        <span
                          key={s}
                          className="text-xs bg-primary-light text-primary px-2 py-0.5 rounded-full"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                  {clinic.hours && (
                    <p className="text-xs text-gray-400">
                      診療時間：{clinic.hours}
                    </p>
                  )}
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <StarRating rating={clinic.rating} />
                  <span className="text-xs text-gray-400">
                    口コミ {clinic.review_count}件
                  </span>
                  {clinic.phone && (
                    <span className="text-sm text-gray-600">
                      {clinic.phone}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Area quick links */}
      {!searched && (
        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            エリアから探す
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {regions.map((region) => (
              <div
                key={region}
                className="bg-white border border-gray-200 rounded-xl p-5"
              >
                <p className="font-medium text-gray-800 mb-3">{region}</p>
                <div className="flex flex-wrap gap-2">
                  {prefectures
                    .filter((p) => p.region === region)
                    .map((p) => (
                      <button
                        key={p.code}
                        onClick={() => {
                          setPrefecture(p.name);
                          handleSearch(p.name);
                        }}
                        className="text-xs text-gray-600 hover:text-primary transition"
                      >
                        {p.name}
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
