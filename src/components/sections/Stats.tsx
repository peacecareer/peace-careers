export default function Stats() {
  const stats = [
    {
      number: "500+",
      title: "Professionals Guided",
    },
    {
      number: "30+",
      title: "Industries Served",
    },
    {
      number: "95%",
      title: "Client Satisfaction",
    },
    {
      number: "Global",
      title: "International Reach",
    },
  ];

  return (
    <section className="bg-gray-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-yellow-500 font-bold">
            Success Metrics
          </p>

          <h2 className="mt-5 text-5xl font-extrabold">
            Delivering Measurable Results
          </h2>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Peace Careers partners with employers and professionals to
            create long-term recruitment and career success.
          </p>

        </div>

        <div className="grid gap-8 mt-20 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-gray-700 bg-gray-800 p-10 text-center hover:border-yellow-500 transition"
            >

              <h3 className="text-5xl font-extrabold text-yellow-500">
                {item.number}
              </h3>

              <p className="mt-5 text-lg text-gray-300">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}