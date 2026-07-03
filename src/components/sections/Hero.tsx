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

  <div className="relative">

    <img
  src="/images/hero.jpg"
  alt="Peace Careers"
  className="h-[700px] w-full rounded-[40px] object-cover shadow-2xl"
/>

    {/* Floating Card */}

    <div className="absolute left-6 top-8 rounded-3xl bg-white/90 p-6 shadow-2xl backdrop-blur">

      <p className="text-sm font-semibold uppercase tracking-widest text-yellow-600">
        Trusted Worldwide
      </p>

      <h3 className="mt-2 text-3xl font-bold">
        500+
      </h3>

      <p className="text-gray-600">
        Professionals Supported
      </p>

    </div>

    {/* Floating Card */}

    <div className="absolute bottom-8 right-6 rounded-3xl bg-black p-6 text-white shadow-2xl">

      <div className="text-yellow-400">
        ★★★★★
      </div>

      <h3 className="mt-3 text-xl font-bold">
        Premium Career Services
      </h3>

      <p className="mt-2 text-gray-300">
        ATS Resume Writing<br />
        Executive Recruitment<br />
        Career Coaching
      </p>

    </div>

  </div>

</FadeIn>

      </Container>

    </section>
  );
}