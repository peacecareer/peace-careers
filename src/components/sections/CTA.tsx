import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-black via-gray-900 to-yellow-700 py-28 text-white">

      <Container>

        <FadeIn>

          <div className="mx-auto max-w-4xl text-center">

            <p className="font-semibold uppercase tracking-[0.35em] text-yellow-400">
              Ready To Take The Next Step?
            </p>

            <h2 className="mt-6 text-5xl font-extrabold leading-tight">

              Whether You're Hiring
              <br />
              Or Looking For Your Next Opportunity,
              <br />
              We're Ready To Help.

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-300">

              Partner with Peace Careers for premium recruitment,
              executive search, ATS resume writing, LinkedIn optimization,
              career coaching, and HR consulting.

            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-6">

              <Button>
                Hire Top Talent
              </Button>

              <Button variant="secondary">
                Book Career Consultation
              </Button>

            </div>

          </div>

        </FadeIn>

      </Container>

    </section>
  );
}