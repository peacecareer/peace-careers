import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

export default function Leadership() {
  return (
    <section className="bg-white py-24">
      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Side */}

          <FadeIn>

            <div className="overflow-hidden rounded-[40px] shadow-2xl">

  <Image
    src="/images/peace.png"
    alt="Peace Olulakin"
    width={700}
    height={850}
    className="h-full w-full object-cover"
    priority
  />

</div>

          </FadeIn>

          {/* Right Side */}

          <FadeIn delay={0.2}>

            <div>

              <p className="font-bold uppercase tracking-[0.35em] text-yellow-600">
                Founder & Leadership
              </p>

              <h2 className="mt-6 text-5xl font-extrabold text-gray-900 leading-tight">
                Leading With Vision, Integrity & Excellence
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                Peace Careers was founded with a simple belief:
                every talented professional deserves access to meaningful
                opportunities, and every employer deserves access to exceptional talent.
              </p>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our leadership is committed to delivering ethical recruitment,
                strategic career coaching, executive search, and long-term
                partnerships that create measurable impact.
              </p>

              <div className="mt-8 border-l-4 border-yellow-500 pl-6">
  <h3 className="text-2xl font-bold text-gray-900">
    Peace Olulakin
  </h3>

  <p className="mt-1 text-lg font-medium text-yellow-600">
    Founder & CEO, Peace Careers
  </p>
</div>

              <div className="mt-10 rounded-3xl border border-yellow-300 bg-yellow-50 p-8">

                <h3 className="text-2xl font-bold text-gray-900">
                  Leadership Philosophy
                </h3>

                <p className="mt-4 leading-8 text-gray-700">
                  "Our mission is to connect exceptional talent with outstanding opportunities while helping professionals build meaningful, lasting careers."
                </p>

              </div>

              <div className="mt-10">
                <Button>
                  Connect With Us
                </Button>
              </div>

            </div>

          </FadeIn>

        </div>

      </Container>
    </section>
  );
}