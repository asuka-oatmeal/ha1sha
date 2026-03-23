import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  Stethoscope, Baby, SmilePlus, Sparkles,
  Wrench, Hospital, HeartPulse, ShieldCheck,
  Brush, HeartHandshake, Moon, ParkingCircle,
} from "lucide-react";

const specialties = [
  { icon: Stethoscope, label: "一般歯科" },
  { icon: Baby, label: "小児歯科" },
  { icon: SmilePlus, label: "矯正歯科" },
  { icon: Sparkles, label: "審美歯科" },
  { icon: Wrench, label: "インプラント" },
  { icon: Hospital, label: "口腔外科" },
  { icon: Brush, label: "予防歯科" },
  { icon: HeartPulse, label: "ホワイトニング" },
  { icon: ShieldCheck, label: "歯周病治療" },
  { icon: HeartHandshake, label: "歯科恐怖症対応" },
  { icon: Moon, label: "夜間診療" },
  { icon: ParkingCircle, label: "駐車場あり" },
];

export default function FieldSearchSection() {
  return (
    <section className="bg-bg-gray">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20">
        <SectionHeader label="Field" title="診療科目から歯医者を探す" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {specialties.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={`/clinic/search?q=${encodeURIComponent(item.label)}`}
                className="flex flex-col items-center justify-center gap-3 bg-white border border-border rounded-[12px] p-6 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <Icon size={40} strokeWidth={1.5} className="text-primary" />
                <span className="text-[15px] font-semibold text-text-primary text-center">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
