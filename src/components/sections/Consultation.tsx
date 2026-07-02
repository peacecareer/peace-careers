import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function Consultation() {
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-yellow-600 py-24 text-white">
      <Container>

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <FadeIn>
            <div>

              <p className="font-bold uppercase tracking-[0.35em] text-yellow-300">
                Free Consultation
              </p>

              <h2 className="mt-6 text-5xl font-extrabold">
                Let's Build Your Success Together
              </h2>

              <p className="mt-8 text-xl leading-9 text-gray-300">
                Whether you're hiring top professionals or advancing your career,
                our experts are ready to help you achieve exceptional results.
              </p>

            </div>
          </FadeIn>

          <FadeIn delay={0.2}>

            <div className="rounded-3xl bg-white p-10 text-gray-900 shadow-2xl">

              <h3 className="text-3xl font-bold">
                Why Book a Consultation?
              </h3>

              <ul className="mt-8 space-y-4">

                <li>✓ Personalized recruitment strategy</li>
                <li>✓ Career assessment</li>
                <li>✓ Resume review</li>
                <li>✓ HR advisory</li>
                <li>✓ International opportunities</li>

              </ul>

              <div className="mt-10">
                <Button>
                  Schedule Consultation
                </Button>
              </div>

            </div>

          </FadeIn>

        </div>

      </Container>
    </section>
  );
}