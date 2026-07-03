import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your hiring or career objectives through a detailed consultation.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We develop a personalized recruitment or career advancement strategy.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Our experts execute the plan using proven recruitment and career development methods.",
  },
  {
    number: "04",
    title: "Success",
    description:
      "We provide continuous support to ensure long-term hiring and career success.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-24">
      <Container>

        <FadeIn>
          <SectionHeading
            badge="Our Process"
            title="A Proven Process That Delivers Results"
            description="A structured approach that helps employers hire confidently and professionals grow successfully."
          />
        </FadeIn>

        <div className="mt-20 grid gap-8 lg:grid-cols-4">

          {steps.map((step, index) => (
            <FadeIn
              key={step.number}
              delay={index * 0.15}
            >

              <div className="relative rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-xl">

                <div className="absolute -top-5 left-8 rounded-full bg-yellow-500 px-5 py-2 text-lg font-bold text-black">
                  {step.number}
                </div>

                <h3 className="mt-8 text-2xl font-bold">
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