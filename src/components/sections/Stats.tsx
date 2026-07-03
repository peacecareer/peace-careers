import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

const stats = [
  {
    number: "500+",
    label: "Professionals Supported",
  },
  {
    number: "30+",
    label: "Industries Served",
  },
  {
    number: "20+",
    label: "Countries Reached",
  },
  {
    number: "98%",
    label: "Client Satisfaction",
  },
];

export default function Stats() {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-yellow-700 py-28 text-white">

      <Container>

        <FadeIn>

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-semibold uppercase tracking-[0.35em] text-yellow-400">
              Our Impact
            </p>

            <h2 className="mt-6 text-5xl font-extrabold">
              Delivering Results
              <br />
              That Matter.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Peace Careers has helped employers build stronger teams while
              empowering professionals to secure rewarding careers across
              multiple industries and international markets.
            </p>

          </div>

        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (

            <FadeIn
              key={item.label}
              delay={index * 0.15}
            >

              <div className="rounded-3xl border border-white/10 bg-white/10 p-10 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/20">

                <h3 className="text-5xl font-extrabold text-yellow-400">

                  {item.number}

                </h3>

                <p className="mt-5 text-lg text-gray-200">

                  {item.label}

                </p>

              </div>

            </FadeIn>

          ))}

        </div>

      </Container>

    </section>
  );
}