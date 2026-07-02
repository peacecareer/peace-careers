import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
export default function Services() {
  const services = [
    {
      title: "Recruitment",
      description:
        "Helping companies hire exceptional professionals across multiple industries.",
    },
    {
      title: "Career Coaching",
      description:
        "Guiding professionals toward better careers, promotions, and international opportunities.",
    },
    {
      title: "HR Consulting",
      description:
        "Strategic HR solutions that improve hiring, retention, and organizational performance.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <Container>

        <SectionHeading
  badge="Our Services"
  title="Helping Employers and Professionals Succeed"
  description="From executive recruitment to career coaching, we provide premium services designed to help organizations and professionals achieve long-term success."
/>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-gray-200 p-10 shadow-sm hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-5">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-8">
                {service.description}
              </p>

              <button className="mt-8 text-yellow-600 font-semibold">
                Learn More →
              </button>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}