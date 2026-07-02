
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
import Stats from "@/components/sections/Stats";
import Process from "@/components/sections/Process";
import FeaturedJobs from "@/components/sections/FeaturedJobs";
import Testimonials from "@/components/sections/Testimonials";
import Companies from "@/components/sections/Companies";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChoose />
      <Stats />
      <Process />
      <FeaturedJobs />
      <Testimonials />
      <Companies />
      <FAQ />
      <CTA />
    </>
  );
}