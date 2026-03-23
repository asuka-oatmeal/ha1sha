export default function SectionHeader({
  label,
  title,
  center = false,
}: {
  label: string;
  title: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <p className="text-[13px] font-[var(--font-serif)] tracking-[0.1em] text-primary mb-2">
        {label}
      </p>
      <h2 className="text-[22px] md:text-[28px] font-bold text-text-primary leading-[1.4] tracking-[0.02em]">
        {title}
      </h2>
    </div>
  );
}
