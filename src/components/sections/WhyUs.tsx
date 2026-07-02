import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

export default function WhyUs() {
  const reasons = [
    {
      title: "Global Recruitment Expertise",
      description:
        "We connect employers with highly qualified professionals across multiple countries and industries.",
    },
    {
      title: "Career Growth Specialists",
      description:
        "We help professionals improve their resumes, LinkedIn profiles, interview performance, and long-term career strategy.",
    },
    {
      title: "Executive Search",
      description:
        "Our executive recruitment process identifies leaders capable of driving business growth and transformation.",
    },
    {
      title: "Personalized Solutions",
      description:
        "Every employer and every professional receives a customized strategy based on their unique goals.",
    },
    {
      title: "Trusted Partnerships",
      description:
        "We focus on building lasting relationships rather than delivering one-time recruitment services.",
    },
    {
      title: "Results That Matter",
      description:
        "Our success is measured by successful hires, career advancement, and long-term client satisfaction.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <Container>

        <FadeIn>
          <SectionHeading
            badge="Why Choose Peace Careers"
            title="Recruitment Built Around People, Performance, and Results"
            description="We combine recruitment expertise with career development strategies to create successful outcomes for employers and professionals alike."
          />
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {reasons.map((reason, index) => (

            <FadeIn
              key={reason.title}
              delay={index * 0.12}
            >

              <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-xl">

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 text-xl font-black">
                  ✓
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {reason.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {reason.description}
                </p>

              </div>

            </FadeIn>

          ))}

        </div>

      </Container>
    </section>
  );
}