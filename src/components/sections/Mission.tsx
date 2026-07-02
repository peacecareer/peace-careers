import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export default function Mission() {
  return (
    <section className="bg-white py-24">
      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <FadeIn>

            <div>

              <p className="font-bold uppercase tracking-[0.35em] text-yellow-600">
                Our Mission
              </p>

              <h2 className="mt-6 text-5xl font-extrabold text-gray-900">
                Helping Great People Build Great Careers
              </h2>

              <p className="mt-8 leading-8 text-lg text-gray-600">
                Peace Careers was founded with one clear purpose:
                connecting exceptional professionals with organizations
                that value talent, leadership, and long-term growth.
              </p>

              <p className="mt-6 leading-8 text-lg text-gray-600">
                We believe recruitment is more than filling vacancies.
                It is about creating opportunities, strengthening
                businesses, and helping individuals reach their highest
                potential.
              </p>

            </div>

          </FadeIn>

          {/* Right */}

          <FadeIn delay={0.2}>

            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-3xl bg-gray-50 p-8 shadow-sm">

                <h3 className="text-5xl font-black text-yellow-600">
                  500+
                </h3>

                <p className="mt-3 text-gray-600">
                  Professionals Supported
                </p>

              </div>

              <div className="rounded-3xl bg-gray-50 p-8 shadow-sm">

                <h3 className="text-5xl font-black text-yellow-600">
                  30+
                </h3>

                <p className="mt-3 text-gray-600">
                  Industries Served
                </p>

              </div>

              <div className="rounded-3xl bg-gray-50 p-8 shadow-sm">

                <h3 className="text-5xl font-black text-yellow-600">
                  20+
                </h3>

                <p className="mt-3 text-gray-600">
                  Countries Reached
                </p>

              </div>

              <div className="rounded-3xl bg-gray-50 p-8 shadow-sm">

                <h3 className="text-5xl font-black text-yellow-600">
                  98%
                </h3>

                <p className="mt-3 text-gray-600">
                  Client Satisfaction
                </p>

              </div>

            </div>

          </FadeIn>

        </div>

      </Container>
    </section>
  );
}