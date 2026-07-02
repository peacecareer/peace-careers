import {
  ShieldCheck,
  Globe,
  Users,
  Award,
} from "lucide-react";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    title: "Trusted Expertise",
    description:
      "Our experienced recruitment and career consultants deliver professional guidance tailored to every client.",
    icon: ShieldCheck,
  },
  {
    title: "Global Opportunities",
    description:
      "We connect professionals with international career opportunities and help organizations hire worldwide.",
    icon: Globe,
  },
  {
    title: "Personalized Service",
    description:
      "Every employer and job seeker receives customized solutions designed around their unique goals.",
    icon: Users,
  },
  {
    title: "Commitment to Excellence",
    description:
      "We focus on quality, integrity, and long-term relationships that create lasting success.",
    icon: Award,
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-stone-50 py-28">
      <Container>

        <FadeIn>
          <SectionHeading
            badge="Why Choose Us"
            title="Your Trusted Recruitment & Career Partner"
            description="We combine industry expertise, personalized service, and global opportunities to help employers build exceptional teams and professionals achieve outstanding careers."
          />
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <FadeIn
                key={feature.title}
                delay={index * 0.15}
              >
                <div className="group rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-xl">

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600 transition group-hover:bg-yellow-500 group-hover:text-white">

                    <Icon size={32} />

                  </div>

                  <h3 className="text-2xl font-bold text-gray-900">

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