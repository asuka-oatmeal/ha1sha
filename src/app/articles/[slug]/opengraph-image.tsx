import { ImageResponse } from "next/og";
import { getArticle, getAllArticleSlugs } from "@/lib/articles";
import { getCategoryIcon } from "@/lib/category-styles";

export const alt = "記事のアイキャッチ画像";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const accentColors: Record<string, string> = {
  虫歯: "#3B82F6",
  歯周病: "#F43F5E",
  矯正歯科: "#8B5CF6",
  "ホワイトニング・審美": "#F59E0B",
  インプラント: "#0EA5E9",
  "入れ歯・ブリッジ": "#14B8A6",
  小児歯科: "#EC4899",
  "親知らず・口腔外科": "#EF4444",
  "詰め物・被せ物": "#6366F1",
  "予防・セルフケア": "#22C55E",
  "費用・保険・制度": "#EAB308",
  歯医者の選び方: "#06B6D4",
  はじめての歯医者: "#10B981",
  歯の豆知識: "#F97316",
};

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);

  const title = article?.title ?? "歯医者.com";
  const category = article?.category ?? "";
  const icon = getCategoryIcon(category);
  const accent = accentColors[category] ?? "#1A6B9C";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          background: `linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)`,
          fontFamily: "sans-serif",
        }}
      >
        {/* Decorative circle */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: accent,
            opacity: 0.08,
          }}
        />

        {/* Category badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 12,
              background: `${accent}20`,
              fontSize: 32,
            }}
          >
            {icon}
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: accent,
              padding: "6px 16px",
              borderRadius: 20,
              background: `${accent}15`,
            }}
          >
            {category}
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#1a1a1a",
            lineHeight: 1.3,
            maxWidth: 900,
          }}
        >
          {title}
        </div>

        {/* Site name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#1A6B9C",
            }}
          >
            歯医者.com
          </div>
          <div
            style={{
              width: 900,
              height: 4,
              background: `linear-gradient(90deg, ${accent}, transparent)`,
              borderRadius: 2,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
