export default function WhyChoose() {
  const features = [
    {
      title: "Global Recruitment",
      description:
        "Connecting employers with exceptional professionals across international markets.",
      icon: "🌍",
    },
    {
      title: "Executive Career Coaching",
      description:
        "Helping professionals secure interviews, promotions, and long-term career growth.",
      icon: "🎯",
    },
    {
      title: "ATS Resume Experts",
      description:
        "Modern resumes designed to pass Applicant Tracking Systems and impress recruiters.",
      icon: "📄",
    },
    {
      title: "HR Consulting",
      description:
        "Strategic workforce solutions that improve hiring, retention, and organizational performance.",
      icon: "🤝",
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-600">
            Why Peace Careers
          </p>

          <h2 className="mt-6 text-5xl font-extrabold text-gray-900">
            Why Professionals and Employers Choose Us
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            We combine recruitment expertise, career development, and
            strategic HR consulting to deliver measurable results for
            employers and ambitious professionals.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 text-5xl">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}