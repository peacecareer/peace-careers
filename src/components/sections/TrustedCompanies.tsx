import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";

const companies = [
  "/logos/google.jpg",
  "/logos/microsoft.jpg",
  "/logos/amazon.png",
  "/logos/meta.png",
  "/logos/deloitte.png",
  "/logos/kpmg.png",
  "/logos/pwc.png",
  "/logos/tesla.jpg",
];

export default function TrustedCompanies() {
  return (
    <section className="bg-white py-24">
      <Container>

        <SectionHeading
          badge="Trusted Worldwide"
          title="Connecting Talent With Leading Organizations"
          description="We help employers recruit exceptional professionals across a wide range of industries."
        />

        <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4">

          {companies.map((logo, index) => (
            <FadeIn key={logo} delay={index * 0.08}>
              <div className="flex h-28 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-lg">

                <Image
                  src={logo}
                  alt="Company Logo"
                  width={130}
                  height={60}
                  className="object-contain"
                />

              </div>
            </FadeIn>
          ))}

        </div>

      </Container>
    </section>
  );
}