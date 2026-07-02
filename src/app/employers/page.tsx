import EmployersHero from "@/components/sections/EmployersHero";
import WhyHireUs from "@/components/sections/WhyHireUs";
import RecruitmentSolutions from "@/components/sections/RecruitmentSolutions";
import Industries from "@/components/sections/Industries";
import RecruitmentProcess from "@/components/sections/RecruitmentProcess";
import CTA from "@/components/sections/CTA";
import EmployerStats from "@/components/sections/EmployerStats";
import TrustedCompanies from "@/components/sections/TrustedCompanies";

export default function EmployersPage() {
  return (
    <main>

  <EmployersHero />

  <TrustedCompanies />

  <WhyHireUs />

  <EmployerStats />

  <RecruitmentSolutions />

  <Industries />

  <RecruitmentProcess />

  <CTA />

</main>
  );
}