import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

export default function Timeline() {
  const milestones = [
    {
      year: "2026",
      title: "Peace Careers Founded",
      description:
        "Established with the vision of helping professionals and employers achieve greater success through recruitment and career development.",
    },
    {
      year: "2027",
      title: "International Expansion",
      description:
        "Expanded recruitment and career services to professionals and organizations across multiple international markets.",
    },
    {
      year: "2028",
      title: "500+ Professionals Supported",
      description:
        "Reached a major milestone by helping hundreds of professionals advance their careers and assisting employers with quality hires.",
    },
    {
      year: "Future",
      title: "Global Leadership",
      description:
        "Our vision is to become one of Africa's leading global recruitment and career consulting firms.",
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <Container>

        <FadeIn>
          <SectionHeading
            badge="Our Journey"
            title="Growing With Purpose"
            description="Every milestone reflects our commitment to creating opportunities, building careers, and helping organizations thrive."
          />
        </FadeIn>

        <div className="relative mx-auto mt-20 max-w-4xl">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 h-full w-1 bg-yellow-500"></div>

          <div className="space-y-16">

            {milestones.map((item, index) => (

              <FadeIn
                key={item.year}
                delay={index * 0.15}
              >

                <div className="relative flex gap-8">

                  {/* Circle */}

                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 font-bold text-black shadow-lg">
                    {index + 1}
                  </div>

                  {/* Content */}

                  <div className="flex-1 rounded-3xl bg-white p-8 shadow-sm">

                    <p className="font-bold uppercase tracking-[0.3em] text-yellow-600">
                      {item.year}
                    </p>

                    <h3 className="mt-3 text-3xl font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-8 text-gray-600">
                      {item.description}
                    </p>

                  </div>

                </div>

              </FadeIn>

            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}