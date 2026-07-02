import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-stone-50 to-yellow-50">

      {/* Decorative Background */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-yellow-200/20 blur-3xl"></div>
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-yellow-400/20 blur-3xl"></div>

      <Container className="relative grid items-center gap-20 py-28 lg:grid-cols-2">

        {/* LEFT SIDE */}

        <FadeIn>
          <div><object data="" type=""></object>

            <div className="inline-flex items-center rounded-full border border-yellow-500 bg-yellow-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-700">
              Global Recruitment • Career Coaching • HR Consulting
            </div>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">

              Helping Employers
              <br />

              <span className="text-yellow-600">
                Hire Better.
              </span>

              <br />

              Helping Professionals
              <br />

              <span className="text-yellow-600">
                Get Hired.
              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-600">

              Peace Careers delivers premium recruitment, executive search,
              ATS resume writing, LinkedIn optimization, career coaching,
              and HR consulting to help organizations build exceptional teams
              while empowering professionals to achieve international success.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Button>
                Hire Top Talent
              </Button>

              <Button variant="secondary">
                Book Career Consultation
              </Button>

            </div>

            {/* TRUST BADGES */}

            <div className="mt-12 grid grid-cols-1 gap-4 text-gray-700 sm:grid-cols-3">

              <div className="rounded-xl bg-white p-4 shadow-sm border">
                ✅ ATS Resume Experts
              </div>

              <div className="rounded-xl bg-white p-4 shadow-sm border">
                ✅ Global Recruitment
              </div>

              <div className="rounded-xl bg-white p-4 shadow-sm border">
                ✅ Career Coaching
              </div>

            </div>

          </div>
        </FadeIn>

        {/* RIGHT SIDE */}

        <FadeIn delay={0.2}>

          <div className="rounded-[40px] bg-gradient-to-br from-black via-gray-900 to-yellow-600 p-12 shadow-2xl">

            <div className="rounded-3xl bg-white p-10">

              <p className="font-bold uppercase tracking-[0.3em] text-yellow-600">
                Peace Careers
              </p>

              <h2 className="mt-6 text-4xl font-bold text-gray-900">
                Your Career.
                <br />
                Our Expertise.
              </h2>

              <div className="mt-8 space-y-5 text-gray-700">

                <div>✓ Executive Recruitment</div>

                <div>✓ ATS Resume Writing</div>

                <div>✓ LinkedIn Optimization</div>

                <div>✓ Career Coaching</div>

                <div>✓ International Hiring</div>

                <div>✓ HR Consulting</div>

              </div>

              <div className="mt-10 rounded-2xl bg-black p-6 text-white">

                <h3 className="text-lg font-bold">
                  Our Mission
                </h3>

                <p className="mt-3 leading-7 text-gray-300">
                  Helping organizations recruit exceptional talent while
                  empowering professionals to build rewarding careers
                  around the world.
                </p>

              </div>

            </div>

          </div>

        </FadeIn>

      </Container>

    </section>
  );
}