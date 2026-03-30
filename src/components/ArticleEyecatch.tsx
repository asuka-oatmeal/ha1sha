import { getCategoryStyle, getCategoryIcon } from "@/lib/category-styles";

type Props = {
  title: string;
  category: string;
  size?: "card" | "hero";
};

export default function ArticleEyecatch({ title, category, size = "card" }: Props) {
  const style = getCategoryStyle(category);
  const icon = getCategoryIcon(category);

  const isHero = size === "hero";
  const iconSize = isHero ? "text-5xl" : "text-3xl";
  const titleSize = isHero
    ? "text-lg md:text-xl font-bold leading-snug"
    : "text-[13px] font-semibold leading-snug";
  const categorySize = isHero ? "text-sm" : "text-[11px]";
  const padding = isHero ? "p-8 md:p-10" : "p-5";

  return (
    <div
      className={`relative w-full bg-gradient-to-br ${style.gradient} ${padding} flex flex-col justify-between overflow-hidden ${
        isHero ? "aspect-[2/1] md:aspect-[3/1] rounded-2xl" : "aspect-[16/9]"
      }`}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-[0.08]"
        style={{ backgroundColor: style.accent }}
      />
      <div
        className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-[0.06]"
        style={{ backgroundColor: style.accent }}
      />

      {/* Category badge */}
      <div className="relative z-10 flex items-center gap-2">
        <span
          className={`inline-flex items-center justify-center w-9 h-9 rounded-lg ${style.iconBg} ${
            isHero ? "w-12 h-12 rounded-xl" : ""
          }`}
        >
          <span className={iconSize}>{icon}</span>
        </span>
        <span
          className={`${categorySize} font-medium px-2 py-0.5 rounded-full`}
          style={{ color: style.accent, backgroundColor: `${style.accent}15` }}
        >
          {category}
        </span>
      </div>

      {/* Title */}
      <p
        className={`relative z-10 ${titleSize} text-gray-800 ${
          isHero ? "max-w-2xl mt-4" : "line-clamp-2 mt-auto"
        }`}
      >
        {title}
      </p>
    </div>
  );
}
