import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import ReviewSection from "./ReviewSection";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const { data: clinic } = await supabase
    .from("clinics")
    .select("name, prefecture, city")
    .eq("id", id)
    .single();

  if (!clinic) return {};

  return {
    title: `${clinic.name}の口コミ・評判`,
    description: `${clinic.prefecture}${clinic.city}の${clinic.name}の口コミ・評判・診療情報をご紹介。`,
  };
}

function StarDisplay({ rating }: { rating: number }) {
  return (
    <span className="text-yellow-400 text-xl">
      {"★".repeat(Math.round(rating))}
      {"☆".repeat(5 - Math.round(rating))}
      <span className="text-gray-700 font-bold ml-2 text-2xl">
        {rating.toFixed(1)}
      </span>
    </span>
  );
}

export default async function ClinicDetailPage({ params }: Props) {
  const { id } = await params;

  const { data: clinic } = await supabase
    .from("clinics")
    .select("*")
    .eq("id", id)
    .single();

  if (!clinic) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/clinic/search"
        className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition mb-8"
      >
        ← 検索に戻る
      </Link>

      {/* Clinic info */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {clinic.name}
            </h1>
            <p className="text-gray-500">
              {clinic.prefecture}
              {clinic.city} {clinic.address}
            </p>
          </div>
          <div className="shrink-0">
            <StarDisplay rating={clinic.rating} />
            <p className="text-sm text-gray-400 mt-1">
              口コミ {clinic.review_count}件
            </p>
          </div>
        </div>

        {/* Details grid */}
        <div className="grid gap-4 sm:grid-cols-2 border-t border-gray-100 pt-6">
          {clinic.phone && (
            <div>
              <p className="text-xs font-medium text-gray-400 mb-1">電話番号</p>
              <p className="text-gray-800">{clinic.phone}</p>
            </div>
          )}
          {clinic.hours && (
            <div>
              <p className="text-xs font-medium text-gray-400 mb-1">
                診療時間
              </p>
              <p className="text-gray-800">{clinic.hours}</p>
            </div>
          )}
          {clinic.closed_days && (
            <div>
              <p className="text-xs font-medium text-gray-400 mb-1">休診日</p>
              <p className="text-gray-800">{clinic.closed_days}</p>
            </div>
          )}
          {clinic.website && (
            <div>
              <p className="text-xs font-medium text-gray-400 mb-1">
                ウェブサイト
              </p>
              <a
                href={clinic.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                公式サイトを開く
              </a>
            </div>
          )}
        </div>

        {/* Specialties */}
        {clinic.specialties && clinic.specialties.length > 0 && (
          <div className="border-t border-gray-100 pt-6 mt-6">
            <p className="text-xs font-medium text-gray-400 mb-2">診療科目</p>
            <div className="flex flex-wrap gap-2">
              {clinic.specialties.map((s: string) => (
                <span
                  key={s}
                  className="text-sm bg-primary-light text-primary px-3 py-1 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Reviews */}
      <ReviewSection clinicId={id} />
    </div>
  );
}
