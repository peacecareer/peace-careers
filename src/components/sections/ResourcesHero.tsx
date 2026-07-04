import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export default function ResourcesHero() {
  return (
    <section className="bg-gradient-to-br from-white via-stone-50 to-yellow-50 py-24">
      <Container>

        <FadeIn>

          <div className="mx-auto max-w-4xl text-center">

            <div className="inline-flex rounded-full border border-yellow-500 bg-yellow-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-700">
              Career Resources
            </div>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
              Resources To Help You Build A
              <span className="text-yellow-600"> Successful Career.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-600">
              Access expert career advice, ATS resume guides, interview
              preparation resources, LinkedIn optimization tips, and practical
              tools designed to help you stand out in today's competitive job
              market.
            </p>

          </div>

        </FadeIn>

      </Container>
    </section>
  );
}