import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

import { services } from "@/data/services";
;

export default function ServicesGrid() {
  return (
    <section className="bg-white py-24">
      <Container>

        <SectionHeading
          badge="What We Offer"
          title="Professional Recruitment & Career Services"
          description="We provide premium recruitment and career solutions for employers and professionals around the world."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <div className="rounded-3xl border border-gray-200 p-10 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

                <div className="text-5xl">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {service.description}
                </p>

              </div>
            </FadeIn>
          ))}

        </div>

      </Container>
    </section>
  );
}