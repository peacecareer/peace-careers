import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

const reasons = [
  "Experienced recruitment specialists",
  "Access to qualified candidates",
  "Reduced hiring time",
  "Industry-specific recruitment",
  "Rigorous candidate screening",
  "Long-term hiring support",
];

export default function WhyHireUs() {
  return (
    <section className="bg-white py-24">
      <Container>

        <SectionHeading
          badge="Why Choose Us"
          title="A Recruitment Partner You Can Trust"
          description="We combine recruitment expertise with a deep understanding of business needs to help employers hire with confidence."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {reasons.map((reason, index) => (
            <FadeIn key={reason} delay={index * 0.1}>
              <div className="rounded-2xl border border-gray-200 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg">
                <h3 className="text-xl font-semibold">
                  ✓ {reason}
                </h3>
              </div>
            </FadeIn>
          ))}

        </div>

      </Container>
    </section>
  );
}