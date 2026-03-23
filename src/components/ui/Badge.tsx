export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[13px] font-medium text-primary bg-primary-light px-3 py-1 rounded-[20px]">
      {children}
    </span>
  );
}
