import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We understand your hiring goals, business needs, or career objectives before recommending the best solution.",
  },
  {
    number: "02",
    title: "Strategy & Search",
    description:
      "Our team develops a recruitment or career strategy and begins sourcing or planning for success.",
  },
  {
    number: "03",
    title: "Evaluation",
    description:
      "Candidates are carefully assessed while professionals receive personalized guidance and optimization.",
  },
  {
    number: "04",
    title: "Success",
    description:
      "We support successful placements, onboarding, career advancement, and long-term partnerships.",
  },
];

export default function RecruitmentProcess() {
  return (
    <section className="bg-stone-50 py-24">
      <Container>

        <SectionHeading
          badge="Our Process"
          title="How We Deliver Results"
          description="A proven recruitment and consulting process designed to produce exceptional outcomes."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.15}>

              <div className="relative rounded-3xl bg-white p-10 shadow-sm border border-gray-200 hover:shadow-xl transition">

                <div className="absolute -top-6 left-8 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 text-xl font-bold text-black shadow-lg">
                  {step.number}
                </div>

                <h3 className="mt-10 text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {step.description}
                </p>

              </div>

            </FadeIn>
          ))}

        </div>

      </Container>
    </section>
  );
}