import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

const industries = [
  "Technology",
  "Banking & Finance",
  "Healthcare",
  "Engineering",
  "Manufacturing",
  "Energy",
  "Construction",
  "Telecommunications",
  "Education",
  "Hospitality",
  "Retail & FMCG",
  "Government",
];

export default function Industries() {
  return (
    <section className="bg-white py-24">
      <Container>

        <SectionHeading
          badge="Industries"
          title="Industries We Serve"
          description="We connect employers with exceptional professionals across a wide range of industries and markets."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {industries.map((industry, index) => (
            <FadeIn
              key={industry}
              delay={index * 0.08}
            >
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:bg-white hover:shadow-xl">

                <h3 className="text-xl font-bold text-gray-900">
                  {industry}
                </h3>

              </div>
            </FadeIn>
          ))}

        </div>

      </Container>
    </section>
  );
}