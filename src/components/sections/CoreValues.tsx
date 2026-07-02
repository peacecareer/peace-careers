import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/ui/FadeIn";

export default function CoreValues() {
  const values = [
    {
      title: "Integrity",
      description:
        "We build lasting relationships through honesty, transparency, and professionalism.",
    },
    {
      title: "Excellence",
      description:
        "We strive to deliver exceptional recruitment and career solutions that exceed expectations.",
    },
    {
      title: "Innovation",
      description:
        "We continuously improve our processes by embracing modern recruitment and career technologies.",
    },
    {
      title: "Partnership",
      description:
        "We work alongside employers and professionals to achieve long-term success together.",
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <Container>

        <FadeIn>
          <SectionHeading
            badge="Our Core Values"
            title="The Principles That Guide Everything We Do"
            description="Our values shape every decision we make and every relationship we build with employers, candidates, and partners."
          />
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {values.map((value, index) => (

            <FadeIn
              key={value.title}
              delay={index * 0.15}
            >

              <Card>

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-2xl font-black text-black">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {value.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {value.description}
                </p>

              </Card>

            </FadeIn>

          ))}

        </div>

      </Container>
    </section>
  );
}