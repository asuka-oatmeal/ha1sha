import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "このサイトについて",
  description:
    "ha1sha.comは、歯医者選びで失敗しないための情報を発信するサイトです。",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        このサイトについて
      </h1>

      <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-a:text-primary">
        <h2>ha1sha.com とは</h2>
        <p>
          ha1sha.comは、<strong>歯医者選びで失敗しないための情報</strong>
          を発信するサイトです。
        </p>
        <p>
          「どの歯医者に行けばいいか分からない」「治療費がいくらかかるか不安」「歯医者が怖い」——
          そんな悩みを持つ方に、信頼できる情報をお届けします。
        </p>

        <h2>提供する情報</h2>
        <ul>
          <li>
            <strong>歯医者の選び方</strong>
            ：チェックすべきポイント、口コミの正しい見方
          </li>
          <li>
            <strong>治療ガイド</strong>
            ：各種治療の流れ、痛み、費用を分かりやすく解説
          </li>
          <li>
            <strong>費用・保険</strong>
            ：保険適用と自費診療の違い、医療費控除の活用法
          </li>
          <li>
            <strong>予防・ケア</strong>
            ：正しい歯磨き、フロスの使い方、定期検診の重要性
          </li>
          <li>
            <strong>はじめての歯医者</strong>
            ：初めて・久しぶりの方、歯科恐怖症の方向けガイド
          </li>
        </ul>

        <h2>大切にしていること</h2>
        <ul>
          <li>正確で分かりやすい情報提供</li>
          <li>読者の不安に寄り添った記事づくり</li>
          <li>特定の医院や製品への偏りのない公平な情報</li>
        </ul>

        <h2>免責事項</h2>
        <p>
          当サイトの情報は一般的な歯科知識の提供を目的としており、個別の診断や治療を代替するものではありません。
          具体的な症状や治療については、必ず歯科医師にご相談ください。
        </p>
      </div>

      <div className="mt-12 p-8 bg-accent rounded-2xl text-center">
        <p className="text-lg font-bold text-gray-900 mb-2">
          記事を読んでみませんか？
        </p>
        <Link
          href="/articles"
          className="inline-block bg-primary text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-primary-dark transition mt-3"
        >
          記事一覧を見る
        </Link>
      </div>
    </div>
  );
}
