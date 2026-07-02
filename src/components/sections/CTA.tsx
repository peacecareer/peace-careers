import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-black via-gray-900 to-yellow-600 py-28">
      <Container>

        <div className="mx-auto max-w-5xl text-center">

          <p className="uppercase tracking-[0.35em] font-bold text-yellow-300">
            Ready To Get Started?
          </p>

          <h2 className="mt-6 text-5xl font-extrabold leading-tight text-white">
            Build Your Global Career Or Hire Exceptional Talent Today
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200">
            Whether you're searching for your next opportunity or looking to
            recruit outstanding professionals, Peace Careers is ready to help
            you succeed.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Button>
              Book Consultation
            </Button>

            <Button variant="secondary">
              Contact Us
            </Button>

          </div>

        </div>

      </Container>
    </section>
  );
}