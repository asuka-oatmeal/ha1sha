import SectionHeader from "@/components/ui/SectionHeader";
import { Search, ClipboardList, MapPin, MessageSquare } from "lucide-react";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "歯医者を探す",
    desc: "お住まいの地域や受けたい治療の種類から、あなたに合った歯医者を検索できます。",
  },
  {
    icon: ClipboardList,
    num: "02",
    title: "詳細情報を確認",
    desc: "診療時間、アクセス、口コミなどの詳細情報を確認。複数の歯医者を比較検討できます。",
  },
  {
    icon: MapPin,
    num: "03",
    title: "予約・来院する",
    desc: "気になる歯医者が見つかったら、電話やWebで予約。初診時の持ち物も事前に確認しましょう。",
  },
  {
    icon: MessageSquare,
    num: "04",
    title: "口コミを投稿",
    desc: "受診後は口コミを投稿して、他の方の歯医者選びに役立てましょう。",
  },
];

export default function FlowSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20">
        <SectionHeader
          label="Flow"
          title="歯医者探し・受診の流れ"
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="relative text-center">
                {/* Arrow between steps (PC only) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 text-border text-2xl">
                    →
                  </div>
                )}

                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary-light mb-5">
                  <Icon size={40} strokeWidth={1.5} className="text-primary" />
                </div>

                <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white text-xs font-bold mb-3">
                  {step.num}
                </div>

                <h3 className="text-[18px] font-semibold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-[14px] text-text-secondary leading-[1.8]">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
