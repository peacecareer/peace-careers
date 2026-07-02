import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function ServicesHero() {
  return (
    <section className="bg-gradient-to-br from-white via-stone-50 to-yellow-50 py-28">
      <Container className="grid items-center gap-16 lg:grid-cols-2">

        <FadeIn>
          <div>

            <p className="inline-flex rounded-full border border-yellow-500 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-700">
              Our Services
            </p>

            <h1 className="mt-8 text-6xl font-extrabold leading-tight">
              Recruitment Solutions
              <span className="text-yellow-600"> Built For Growth.</span>
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-gray-600">
              From executive recruitment to career coaching and HR consulting,
              Peace Careers helps employers hire exceptional talent while
              empowering professionals to reach the next stage of their careers.
            </p>

            <div className="mt-10 flex gap-5">
              <Button>Book Consultation</Button>
              <Button variant="secondary">Contact Us</Button>
            </div>

          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="rounded-[40px] bg-gradient-to-br from-black via-gray-900 to-yellow-600 p-12">

            <div className="rounded-3xl bg-white p-10">

              <h2 className="text-3xl font-bold">
                What We Deliver
              </h2>

              <div className="mt-8 space-y-5">

                <p>✓ Executive Recruitment</p>

                <p>✓ International Hiring</p>

                <p>✓ Career Coaching</p>

                <p>✓ Resume Writing</p>

                <p>✓ LinkedIn Optimization</p>

                <p>✓ HR Consulting</p>

              </div>

            </div>

          </div>
        </FadeIn>

      </Container>
    </section>
  );
}