
import ResourcesHero from "@/components/sections/ResourcesHero";
import ResourceCategories from "@/components/sections/ResourceCategories";
import FeaturedArticles from "@/components/sections/FeaturedArticles";
import DownloadCenter from "@/components/sections/DownloadCenter";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function ResourcesPage() {
  return (
    <main>
      <ResourcesHero />
      <ResourceCategories />
      <FeaturedArticles />
      <DownloadCenter />
      <FAQ />
      <CTA />
    </main>
  );
}