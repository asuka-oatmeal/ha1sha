import { Suspense } from "react";
import ClinicSearchContent from "./ClinicSearchContent";

export const dynamic = "force-dynamic";

export default function ClinicSearchPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-6xl mx-auto px-4 py-12 text-center text-gray-400">
          読み込み中...
        </div>
      }
    >
      <ClinicSearchContent />
    </Suspense>
  );
}
