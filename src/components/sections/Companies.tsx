import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Companies() {
  const companies = [
    { name: "Google", logo: "/logos/google.jpg" },
    { name: "Microsoft", logo: "/logos/microsoft.jpg" },
    { name: "Amazon", logo: "/logos/amazon.png" },
    { name: "Meta", logo: "/logos/meta.png" },
    { name: "Tesla", logo: "/logos/tesla.jpg" },
    { name: "Deloitte", logo: "/logos/deloitte.png" },
    { name: "PwC", logo: "/logos/pwc.png" },
    { name: "KPMG", logo: "/logos/kpmg.png" },
  ];

  return (
    <section className="border-y border-gray-200 bg-white py-24">
      <Container>

        <p className="text-center uppercase tracking-[0.35em] font-bold text-yellow-600">
          Trusted By
        </p>

        <h2 className="mt-5 text-center text-5xl font-extrabold text-gray-900">
          Companies We Recruit For
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-gray-600">
          Our recruitment specialists help professionals connect with some of
          the world's most respected organizations.
        </p>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">

          {companies.map((company) => (

            <div
              key={company.name}
              className="flex h-32 items-center justify-center rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-xl"
            >

              <Image
                src={company.logo}
                alt={company.name}
                width={150}
                height={60}
                className="h-12 w-auto object-contain"
              />

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}