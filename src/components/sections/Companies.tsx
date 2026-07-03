import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

const companies = [
  "/logos/googlee.jpg",
  "/logos/microsoftt.jpg",
  "/logos/amazon.png",
  "/logos/meta.png",
  "/logos/teslaa.jpg",
];

export default function Companies() {
  return (
    <section className="bg-stone-50 py-24">
      <Container>

        <FadeIn>
          <SectionHeading
            badge="Trusted Brands"
            title="Professionals Working With Global Companies"
            description="Our clients and candidates have pursued opportunities with some of the world's leading organizations."
          />
        </FadeIn>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">

          {companies.map((logo, index) => (
            <FadeIn key={logo} delay={index * 0.1}>

              <div className="flex h-36 items-center justify-center rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                <Image
                  src={logo}
                  alt="Company Logo"
                  width={140}
                  height={70}
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