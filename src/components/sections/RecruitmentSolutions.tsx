import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { recruitmentSolutions } from "@/data/recruitmentSolutions";

export default function RecruitmentSolutions() {
  return (
    <section className="bg-stone-50 py-24">
      <Container>

        <SectionHeading
          badge="Recruitment Solutions"
          title="Comprehensive Hiring Services"
          description="We provide tailored recruitment and workforce solutions designed to help organizations attract, hire, and retain exceptional talent."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {recruitmentSolutions.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.08}>
              <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                <div className="mb-6 text-5xl">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
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