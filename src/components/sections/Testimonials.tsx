import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

const testimonials = [
  {
    name: "Resume Writing Client",
    role: "Career Transition",
    company: "Verified Client",
    quote:
      "The ATS resume was professionally written, easy to read, and significantly improved my confidence during my job search.",
  },
  {
    name: "Recruitment Client",
    role: "Hiring Manager",
    company: "Verified Client",
    quote:
      "The recruitment process was organized, responsive, and focused on finding candidates that matched our requirements.",
  },
  {
    name: "Career Coaching Client",
    role: "Job Seeker",
    company: "Verified Client",
    quote:
      "The career coaching sessions helped me improve my interview preparation, personal branding, and overall job search strategy.",
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