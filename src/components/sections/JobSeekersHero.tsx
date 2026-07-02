import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function JobSeekersHero() {
  return (
    <section className="bg-gradient-to-br from-white via-stone-50 to-yellow-50 py-28">
      <Container className="grid gap-16 lg:grid-cols-2 items-center">

        <FadeIn>
          <div>

            <p className="inline-flex rounded-full border border-yellow-500 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-700">
              Job Seekers
            </p>

            <h1 className="mt-8 text-6xl font-extrabold leading-tight">
              Build The Career
              <span className="text-yellow-600"> You Deserve.</span>
            </h1>

            <p className="mt-8 text-xl leading-9 text-gray-600">
              We help ambitious professionals secure interviews,
              improve their resumes, optimize LinkedIn profiles,
              and access international career opportunities.
            </p>

            <div className="mt-10 flex gap-5">

              <Button>
                Book Career Consultation
              </Button>

              <Button variant="secondary">
                Explore Services
              </Button>

            </div>

          </div>
        </FadeIn>

        <FadeIn delay={0.2}>

          <div className="rounded-[40px] bg-gradient-to-br from-black via-gray-900 to-yellow-600 p-12">

            <div className="rounded-3xl bg-white p-10">

              <h2 className="text-3xl font-bold">
                Career Services
              </h2>

              <div className="mt-8 space-y-5">

                <p>✓ ATS Resume Writing</p>

                <p>✓ LinkedIn Optimization</p>

                <p>✓ Career Coaching</p>

                <p>✓ Reverse Recruiting</p>

                <p>✓ Interview Preparation</p>

                <p>✓ Executive Branding</p>

              </div>

            </div>

          </div>

        </FadeIn>

      </Container>
    </section>
  );
}