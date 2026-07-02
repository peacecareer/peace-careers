import {
  BriefcaseBusiness,
  GraduationCap,
  Users,
} from "lucide-react";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const services = [
  {
    title: "Executive Recruitment",
    description:
      "We help organizations recruit exceptional professionals, executives, and leaders across multiple industries.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Career Coaching",
    description:
      "Personalized coaching to help professionals achieve promotions, career transitions, and international opportunities.",
    icon: GraduationCap,
  },
  {
    title: "HR Consulting",
    description:
      "Strategic HR consulting designed to improve recruitment, employee performance, and organizational growth.",
    icon: Users,
  },
];

export default function Services() {
  return (
    <section className="bg-white py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            badge="Our Services"
            title="Helping Employers and Professionals Succeed"
            description="Comprehensive recruitment and career solutions designed to help businesses hire exceptional talent while empowering professionals to build successful careers."
          />
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <FadeIn
                key={service.title}
                delay={index * 0.15}
              >
                <div className="group rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-yellow-500 hover:shadow-2xl">

                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition">
                    <Icon size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-600">
                    {service.description}
                  </p>

                  <button className="mt-8 font-semibold text-yellow-600 transition hover:text-black">
                    Learn More →
                  </button>

                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-16 text-center">
            <Button>
              View All Services
            </Button>
          </div>
        </FadeIn>

      </Container>
    </section>
  );
}