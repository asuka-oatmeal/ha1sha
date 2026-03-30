export type CategoryStyle = {
  gradient: string;
  iconBg: string;
  accent: string;
};

const styles: Record<string, CategoryStyle> = {
  虫歯: {
    gradient: "from-blue-50 to-cyan-50",
    iconBg: "bg-blue-100",
    accent: "#3B82F6",
  },
  歯周病: {
    gradient: "from-rose-50 to-pink-50",
    iconBg: "bg-rose-100",
    accent: "#F43F5E",
  },
  矯正歯科: {
    gradient: "from-purple-50 to-violet-50",
    iconBg: "bg-purple-100",
    accent: "#8B5CF6",
  },
  "ホワイトニング・審美": {
    gradient: "from-amber-50 to-yellow-50",
    iconBg: "bg-amber-100",
    accent: "#F59E0B",
  },
  インプラント: {
    gradient: "from-sky-50 to-blue-50",
    iconBg: "bg-sky-100",
    accent: "#0EA5E9",
  },
  "入れ歯・ブリッジ": {
    gradient: "from-teal-50 to-emerald-50",
    iconBg: "bg-teal-100",
    accent: "#14B8A6",
  },
  小児歯科: {
    gradient: "from-pink-50 to-rose-50",
    iconBg: "bg-pink-100",
    accent: "#EC4899",
  },
  "親知らず・口腔外科": {
    gradient: "from-red-50 to-orange-50",
    iconBg: "bg-red-100",
    accent: "#EF4444",
  },
  "詰め物・被せ物": {
    gradient: "from-indigo-50 to-blue-50",
    iconBg: "bg-indigo-100",
    accent: "#6366F1",
  },
  "予防・セルフケア": {
    gradient: "from-green-50 to-emerald-50",
    iconBg: "bg-green-100",
    accent: "#22C55E",
  },
  "費用・保険・制度": {
    gradient: "from-yellow-50 to-amber-50",
    iconBg: "bg-yellow-100",
    accent: "#EAB308",
  },
  歯医者の選び方: {
    gradient: "from-cyan-50 to-sky-50",
    iconBg: "bg-cyan-100",
    accent: "#06B6D4",
  },
  はじめての歯医者: {
    gradient: "from-emerald-50 to-teal-50",
    iconBg: "bg-emerald-100",
    accent: "#10B981",
  },
  歯の豆知識: {
    gradient: "from-orange-50 to-yellow-50",
    iconBg: "bg-orange-100",
    accent: "#F97316",
  },
};

const defaultStyle: CategoryStyle = {
  gradient: "from-gray-50 to-slate-50",
  iconBg: "bg-gray-100",
  accent: "#6B7280",
};

export function getCategoryStyle(categoryName: string): CategoryStyle {
  return styles[categoryName] ?? defaultStyle;
}

export function getCategoryIcon(categoryName: string): string {
  const icons: Record<string, string> = {
    虫歯: "🦷",
    歯周病: "🩸",
    矯正歯科: "😁",
    "ホワイトニング・審美": "✨",
    インプラント: "🔩",
    "入れ歯・ブリッジ": "🦷",
    小児歯科: "👶",
    "親知らず・口腔外科": "🏥",
    "詰め物・被せ物": "🪥",
    "予防・セルフケア": "🛡️",
    "費用・保険・制度": "💰",
    歯医者の選び方: "🔍",
    はじめての歯医者: "📋",
    歯の豆知識: "💡",
  };
  return icons[categoryName] ?? "🦷";
}
