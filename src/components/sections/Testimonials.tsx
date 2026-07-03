import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Senior Project Manager",
    company: "Technology Industry",
    quote:
      "Peace Careers completely transformed my resume and LinkedIn profile. Within weeks, I secured interviews with international employers.",
  },
  {
    name: "David Williams",
    role: "HR Director",
    company: "Manufacturing Company",
    quote:
      "Their recruitment process was professional, efficient, and delivered exceptional candidates for our leadership positions.",
  },
  {
    name: "Amina Yusuf",
    role: "Finance Professional",
    company: "Financial Services",
    quote:
      "The career coaching and ATS resume service helped me secure an opportunity I had been pursuing for years.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-28">
      <Container>

        <FadeIn>
          <SectionHeading
            badge="Testimonials"
            title="Success Stories From Our Clients"
            description="Helping employers hire exceptional talent while empowering professionals to achieve career success."
          />
        </FadeIn>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (

            <FadeIn
              key={item.name}
              delay={index * 0.15}
            >

              <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-xl">

                <div className="text-yellow-500 text-xl">
                  ★★★★★
                </div>

                <p className="mt-6 leading-8 text-gray-600 italic">
                  "{item.quote}"
                </p>

                <div className="mt-8 border-t pt-6">

                  <h3 className="font-bold text-xl">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    {item.role}
                  </p>

                  <p className="text-yellow-600 font-semibold">
                    {item.company}
                  </p>

                </div>

              </div>

            </FadeIn>

          ))}

        </div>

      </Container>
    </section>
  );
}