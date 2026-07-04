import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-stone-50 to-yellow-50">

      {/* Decorative Background */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-yellow-200/20 blur-3xl"></div>
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-yellow-400/20 blur-3xl"></div>

      <Container className="relative grid items-center gap-10 pt-6 pb-16 lg:grid-cols-2">

        {/* LEFT SIDE */}

        <FadeIn>
          <div>

            <div className="inline-flex items-center rounded-full border border-yellow-500 bg-yellow-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-700">
              Global Recruitment • Career Coaching • HR Consulting
            </div>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">

              Building
              <br />

              <span className="text-yellow-600">
                Global Careers.
              </span>

              <br />

              Hiring
              <br />

              <span className="text-yellow-600">
                Exceptional Talent.
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-xl leading-9 text-gray-600">

              Peace Careers delivers premium recruitment, executive search,
              ATS resume writing, LinkedIn optimization, career coaching,
              and HR consulting to help organizations build exceptional teams
              while empowering professionals to achieve international success.

            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Button href="/employers">
  Hire Top Talent
</Button>

<Button href="/contact">
  Book Consultation
</Button>

            </div>

           {/* PREMIUM SERVICE CARDS */}

<div className="mt-14 grid gap-6 sm:grid-cols-3">

  <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-xl">

    <div className="mb-5 flex h-14 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-3xl">
      📄
    </div>

    <h3 className="text-lg font-bold text-gray-900">
      ATS Resume Writing
    </h3>

    <p className="mt-3 text-sm leading-7 text-gray-600">
      Professionally written resumes designed to pass Applicant Tracking Systems.
    </p>

  </div>

  <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-xl">

    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-3xl">
      🌍
    </div>

    <h3 className="text-lg font-bold text-gray-900">
      Global Recruitment
    </h3>

    <p className="mt-3 text-sm leading-7 text-gray-600">
      Connecting employers with exceptional professionals across international markets.
    </p>

  </div>

  <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-xl">

    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-3xl">
      🎯
    </div>

    <h3 className="text-lg font-bold text-gray-900">
      Career Coaching
    </h3>

    <p className="mt-3 text-sm leading-7 text-gray-600">
      Personalized coaching that helps professionals secure better career opportunities.
    </p>

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
  className="h-[620px] w-full rounded-[40px] object-cover shadow-2xl"
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