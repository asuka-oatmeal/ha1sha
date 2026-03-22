export type CategoryInfo = {
  slug: string;
  name: string;
  description: string;
  icon: string;
};

export const categories: CategoryInfo[] = [
  {
    slug: "choosing",
    name: "歯医者の選び方",
    description:
      "失敗しない歯医者の選び方、チェックすべきポイント、口コミの見方などを解説します。",
    icon: "🔍",
  },
  {
    slug: "treatment",
    name: "治療ガイド",
    description:
      "虫歯・歯周病・インプラントなど、各種治療の流れ・費用・痛みについて詳しく解説します。",
    icon: "💊",
  },
  {
    slug: "cost",
    name: "費用・保険",
    description:
      "歯科治療にかかる費用の目安や、保険適用・自費診療の違い、医療費控除について解説します。",
    icon: "💰",
  },
  {
    slug: "prevention",
    name: "予防・ケア",
    description:
      "虫歯・歯周病を防ぐ毎日のケア方法、定期検診の重要性、正しい歯磨きの仕方を紹介します。",
    icon: "🪥",
  },
  {
    slug: "beginner",
    name: "はじめての歯医者",
    description:
      "歯医者に初めて行く方、久しぶりに行く方、歯医者が怖い方のためのガイドです。",
    icon: "🏥",
  },
];

export function getCategoryBySlug(slug: string): CategoryInfo | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryByName(name: string): CategoryInfo | undefined {
  return categories.find((c) => c.name === name);
}
