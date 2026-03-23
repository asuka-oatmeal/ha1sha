import HeroSection from "@/components/home/HeroSection";
import AreaSearchSection from "@/components/home/AreaSearchSection";
import FieldSearchSection from "@/components/home/FieldSearchSection";
import FlowSection from "@/components/home/FlowSection";
import ColumnSection from "@/components/home/ColumnSection";
import PrefectureListSection from "@/components/home/PrefectureListSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AreaSearchSection />
      <FieldSearchSection />
      <FlowSection />
      <ColumnSection />
      <PrefectureListSection />
    </>
  );
}
