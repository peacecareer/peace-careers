import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

const stats = [
  {
    number: "500+",
    label: "Professionals Supported",
  },
  {
    number: "150+",
    label: "Companies Served",
  },
  {
    number: "30+",
    label: "Industries",
  },
  {
    number: "20+",
    label: "Countries Reached",
  },
];

export default function Stats() {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-yellow-700 py-24 text-white">
      <Container>

        <FadeIn>
          <div className="text-center">

            <p className="font-semibold uppercase tracking-[0.35em] text-yellow-400">
              Our Impact
            </p>

            <h2 className="mt-6 text-5xl font-extrabold">
              Numbers That Speak For Themselves
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
              We help organizations hire exceptional talent and empower
              professionals to secure life-changing career opportunities.
            </p>

          </div>
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.15}>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-10 text-center backdrop-blur transition duration-300 hover:bg-white/20">

                <h3 className="text-6xl font-extrabold text-yellow-400">
                  {stat.number}
                </h3>

                <p className="mt-5 text-lg text-gray-200">
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