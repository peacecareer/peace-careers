import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function EmployersHero() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-gray-900 to-yellow-700 py-28 text-white">
      <Container className="grid items-center gap-16 lg:grid-cols-2">

        <FadeIn>
          <div>

            <p className="inline-flex rounded-full border border-yellow-400 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300">
              Employers
            </p>

            <h1 className="mt-8 text-6xl font-extrabold leading-tight">
              Hire Exceptional Talent
              <span className="text-yellow-400"> With Confidence.</span>
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-gray-300">
              Peace Careers helps organizations recruit highly qualified
              professionals through a structured recruitment process that
              delivers quality, speed, and long-term success.
            </p>

            <div className="mt-10 flex gap-5">
              <Button>Book Consultation</Button>
              <Button variant="secondary">Talk To Our Team</Button>
            </div>

          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="rounded-[40px] bg-white p-10 text-gray-900 shadow-2xl">

            <h2 className="text-3xl font-bold">
              Why Employers Choose Peace Careers
            </h2>

            <ul className="mt-8 space-y-5">

              <li>✓ Executive Search</li>
              <li>✓ Global Talent Network</li>
              <li>✓ Faster Hiring</li>
              <li>✓ Candidate Screening</li>
              <li>✓ HR Advisory</li>
              <li>✓ Long-Term Recruitment Partner</li>

            </ul>

          </div>
        </FadeIn>

      </Container>
    </section>
  );
}