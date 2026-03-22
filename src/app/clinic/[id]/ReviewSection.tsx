"use client";

import { useState, useEffect } from "react";
import { supabase, type Review } from "@/lib/supabase";

function StarInput({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          className={`text-2xl ${
            star <= value ? "text-yellow-400" : "text-gray-300"
          } hover:text-yellow-400 transition`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

export default function ReviewSection({ clinicId }: { clinicId: string }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form state
  const [rating, setRating] = useState(5);
  const [authorName, setAuthorName] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [visitDate, setVisitDate] = useState("");

  useEffect(() => {
    async function fetchReviews() {
      const { data } = await supabase
        .from("reviews")
        .select("*")
        .eq("clinic_id", clinicId)
        .order("created_at", { ascending: false });
      if (data) setReviews(data as Review[]);
    }
    fetchReviews();
  }, [clinicId, submitted]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    const { error } = await supabase.from("reviews").insert({
      clinic_id: clinicId,
      author_name: authorName || "匿名",
      rating,
      title,
      body,
      visit_date: visitDate || null,
    });

    if (!error) {
      setSubmitted(true);
      setShowForm(false);
      setRating(5);
      setAuthorName("");
      setTitle("");
      setBody("");
      setVisitDate("");
    }
    setSubmitting(false);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">
          口コミ・評判（{reviews.length}件）
        </h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-primary-dark transition"
        >
          口コミを書く
        </button>
      </div>

      {/* Review form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-accent border border-gray-200 rounded-2xl p-6 mb-8 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              評価 <span className="text-red-500">*</span>
            </label>
            <StarInput value={rating} onChange={setRating} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ニックネーム
              </label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="匿名"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                来院時期
              </label>
              <input
                type="month"
                value={visitDate}
                onChange={(e) => setVisitDate(e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              タイトル <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="一言でまとめると"
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              口コミ内容 <span className="text-red-500">*</span>
            </label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              rows={4}
              placeholder="治療の感想、スタッフの対応、院内の雰囲気など"
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-vertical"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="bg-primary text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-primary-dark transition disabled:opacity-50"
            >
              {submitting ? "送信中..." : "投稿する"}
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="text-sm text-gray-500 hover:text-gray-700 transition"
            >
              キャンセル
            </button>
          </div>
        </form>
      )}

      {submitted && (
        <div className="bg-green-50 text-green-700 text-sm px-4 py-3 rounded-lg mb-6">
          口コミを投稿しました。ありがとうございます！
        </div>
      )}

      {/* Review list */}
      {reviews.length > 0 ? (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-yellow-400 text-sm mb-1">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </p>
                  <p className="font-bold text-gray-900">{review.title}</p>
                </div>
                <div className="text-right text-xs text-gray-400 shrink-0">
                  <p>{review.author_name}</p>
                  {review.visit_date && <p>来院：{review.visit_date}</p>}
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">
                {review.body}
              </p>
              <p className="text-xs text-gray-400 mt-3">
                {new Date(review.created_at).toLocaleDateString("ja-JP")}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-400 bg-white border border-gray-200 rounded-xl">
          <p className="text-lg mb-1">まだ口コミがありません</p>
          <p className="text-sm">最初の口コミを投稿してみませんか？</p>
        </div>
      )}
    </div>
  );
}
