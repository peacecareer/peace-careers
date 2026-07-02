import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

const stats = [
  {
    number: "500+",
    label: "Professionals Placed",
  },
  {
    number: "120+",
    label: "Partner Companies",
  },
  {
    number: "95%",
    label: "Client Satisfaction",
  },
  {
    number: "30+",
    label: "Industries Served",
  },
];

export default function EmployerStats() {
  return (
    <section className="bg-black py-24 text-white">
      <Container>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <div className="text-center">

                <h2 className="text-6xl font-extrabold text-yellow-400">
                  {stat.number}
                </h2>

                <p className="mt-4 text-lg text-gray-300">
                  {stat.label}
                </p>

              </div>
            </FadeIn>
          ))}

        </div>

      </Container>
    </section>
  );
}