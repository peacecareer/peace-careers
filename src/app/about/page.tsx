import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import AboutHero from "@/components/sections/AboutHero";
import Mission from "@/components/sections/Mission";
import CoreValues from "@/components/sections/CoreValues";
import WhyUs from "@/components/sections/WhyUs";
import Timeline from "@/components/sections/Timeline";
import Leadership from "@/components/sections/Leadership";
import CTA from "@/components/sections/CTA";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <AboutHero />
        <Mission />
         <CoreValues />
          <WhyUs />
           <Timeline />
            <Leadership />
            <CTA />
      </main>

      <Footer />
    </>
  );
}