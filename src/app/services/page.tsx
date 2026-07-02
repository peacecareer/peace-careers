import ServicesHero from "@/components/sections/ServicesHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import RecruitmentProcess from "@/components/sections/RecruitmentProcess";
import Industries from "@/components/sections/Industries";
import Consultation from "@/components/sections/Consultation";
export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <RecruitmentProcess  />
      <Industries />
      <Consultation />
    </main>
  );
}