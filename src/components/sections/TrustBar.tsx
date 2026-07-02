import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export default function TrustBar() {
  return (
    <section className="border-y border-gray-200 bg-white py-12">
      <Container>

        <FadeIn>

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
              Trusted By Professionals Across Multiple Industries
            </p>

            <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">

              <div className="rounded-xl border bg-stone-50 p-6 font-bold">
                Finance
              </div>

              <div className="rounded-xl border bg-stone-50 p-6 font-bold">
                Technology
              </div>

              <div className="rounded-xl border bg-stone-50 p-6 font-bold">
                Healthcare
              </div>

              <div className="rounded-xl border bg-stone-50 p-6 font-bold">
                Engineering
              </div>

              <div className="rounded-xl border bg-stone-50 p-6 font-bold">
                Energy
              </div>

              <div className="rounded-xl border bg-stone-50 p-6 font-bold">
                Consulting
              </div>

            </div>

          </div>

        </FadeIn>

      </Container>
    </section>
  );
}