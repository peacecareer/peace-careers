import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import {
  Award,
  Globe,
  Users,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Industry Expertise",
    description:
      "Experienced recruitment and career specialists delivering premium talent solutions.",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description:
      "Connecting professionals and employers across international markets.",
  },
  {
    icon: Users,
    title: "Personalized Support",
    description:
      "Every client receives tailored recruitment and career guidance.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Process",
    description:
      "Transparent, professional, and results-driven recruitment methodology.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-stone-50 py-24">
      <Container>

        <FadeIn>
          <SectionHeading
            badge="Why Choose Peace Careers"
            title="Your Trusted Recruitment & Career Partner"
            description="We combine recruitment expertise, career coaching, and HR consulting to deliver outstanding results for employers and professionals."
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <FadeIn key={feature.title} delay={index * 0.15}>

                <div className="rounded-3xl bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                  <div className="mb-6 inline-flex rounded-2xl bg-yellow-100 p-4">
                    <Icon className="h-8 w-8 text-yellow-600" />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-600">
                    {feature.description}
                  </p>

                </div>

              </FadeIn>
            );
          })}

        </div>

      </Container>
    </section>
  );
}