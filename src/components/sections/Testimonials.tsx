import Card from "@/components/ui/Card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Product Manager",
      company: "Google",
      quote:
        "Peace Careers helped me secure an executive role in Canada within six weeks. Their guidance was exceptional.",
    },
    {
      name: "Michael Brown",
      role: "HR Director",
      company: "TechNova",
      quote:
        "The recruitment process was seamless. We hired three outstanding professionals through Peace Careers.",
    },
    {
      name: "Amina Yusuf",
      role: "Software Engineer",
      company: "Microsoft",
      quote:
        "Their resume optimization and interview coaching completely changed my career trajectory.",
    },
  ];

  return (
    <section className="bg-gray-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="uppercase tracking-[0.35em] font-bold text-yellow-600">
            Testimonials
          </p>

          <h2 className="mt-5 text-5xl font-extrabold">
            Trusted by Employers & Professionals
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Hear what our clients have to say about working with Peace Careers.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Card key={index}>
              <p className="text-lg leading-8 text-gray-600">
                "{item.quote}"
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-gray-500">
                  {item.role} • {item.company}
                </p>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}