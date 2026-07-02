import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-stone-50 to-yellow-50">
      <Container className="py-24 lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">

        {/* LEFT COLUMN */}
        <div>

          <div className="inline-flex items-center rounded-full border border-yellow-500 bg-yellow-50 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-yellow-700">
            Trusted Recruitment • Career Coaching • HR Consulting
          </div>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-gray-900">
            Build
            <span className="text-yellow-600"> Global Careers </span>
            With Confidence.
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-gray-600">
            Peace Careers helps ambitious professionals secure better
            opportunities while helping employers recruit exceptional talent
            across international markets.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Button>
              Find Talent
            </Button>

            <Button variant="secondary">
              Grow My Career
            </Button>
          </div>

          <div className="mt-14 flex flex-wrap gap-10">

            <div>
              <h2 className="text-4xl font-bold text-gray-900">500+</h2>
              <p className="text-gray-500">
                Professionals Supported
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900">30+</h2>
              <p className="text-gray-500">
                Industries Served
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Global
              </h2>
              <p className="text-gray-500">
                International Clients
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="mt-20 lg:mt-0">

          <div className="rounded-[40px] bg-gradient-to-br from-black via-gray-900 to-yellow-600 p-12 shadow-2xl">

            <div className="rounded-3xl bg-white p-10">

              <p className="font-bold uppercase tracking-widest text-yellow-600">
                Peace Careers
              </p>

              <h2 className="mt-6 text-4xl font-bold text-gray-900">
                Connecting People.
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Recruitment.
                <br />
                Executive Search.
                <br />
                Career Coaching.
                <br />
                HR Consulting.
              </p>

              <div className="mt-10 rounded-2xl bg-black p-6 text-white">

                <p className="text-lg font-semibold">
                  Trusted by professionals seeking international
                  opportunities.
                </p>

              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}