import JobSeekersHero from "@/components/sections/JobSeekersHero";
import CareerServices from "@/components/sections/CareerServices";
import ResumePackages from "@/components/sections/ResumePackages";
import CTA from "@/components/sections/CTA";

export default function JobSeekersPage() {
  return (
    <main>
      <JobSeekersHero />
      <CareerServices />
      <ResumePackages />
      <CTA />
    </main>
  );
}