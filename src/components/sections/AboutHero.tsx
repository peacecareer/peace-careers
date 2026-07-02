import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-stone-50 to-yellow-50 py-28">
      <Container className="grid items-center gap-20 lg:grid-cols-2">

        {/* Left */}

        <FadeIn>
          <div>

            <p className="inline-flex rounded-full border border-yellow-500 bg-yellow-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-700">
              About Peace Careers
            </p>

            <h1 className="mt-8 text-6xl font-extrabold leading-tight text-gray-900">
              Connecting
              <span className="text-yellow-600"> Exceptional Talent </span>
              With Global Opportunities.
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-gray-600">
              Peace Careers is a premium recruitment and career consulting
              company helping organizations recruit world-class professionals
              while empowering ambitious individuals to achieve international
              career success.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Button>
                Our Services
              </Button>

              <Button variant="secondary">
                Contact Us
              </Button>
            </div>

          </div>
        </FadeIn>

        {/* Right */}

        <FadeIn delay={0.2}>
          <div className="rounded-[40px] bg-gradient-to-br from-black via-gray-900 to-yellow-600 p-12 shadow-2xl">

            <div className="rounded-3xl bg-white p-10">

              <p className="font-bold uppercase tracking-[0.3em] text-yellow-600">
                Since 2026
              </p>

              <h2 className="mt-6 text-4xl font-bold text-gray-900">
                Building Careers.
              </h2>

              <div className="mt-8 space-y-5 text-gray-600">

                <p>✓ Executive Recruitment</p>

                <p>✓ International Hiring</p>

                <p>✓ Career Coaching</p>

                <p>✓ HR Consulting</p>

                <p>✓ Resume & LinkedIn Optimization</p>

              </div>

              <div className="mt-10 rounded-2xl bg-black p-6 text-white">

                <h3 className="text-lg font-bold">
                  Our Vision
                </h3>

                <p className="mt-3 leading-7 text-gray-300">
                  To become Africa's most trusted global recruitment and
                  career development partner.
                </p>

              </div>

            </div>

          </div>
        </FadeIn>

      </Container>
    </section>
  );
}