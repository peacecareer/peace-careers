import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

const jobs = [
  {
    title: "Senior Software Engineer",
    location: "Remote",
    type: "Full-Time",
  },
  {
    title: "HR Business Partner",
    location: "United Kingdom",
    type: "Full-Time",
  },
  {
    title: "Project Manager",
    location: "Canada",
    type: "Hybrid",
  },
  {
    title: "Financial Analyst",
    location: "United States",
    type: "Remote",
  },
];

export default function FeaturedJobs() {
  return (
    <section className="bg-white py-24">
      <Container>

        <FadeIn>
          <SectionHeading
            badge="Featured Jobs"
            title="Explore Exciting Career Opportunities"
            description="Discover premium opportunities with employers hiring across international markets."
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {jobs.map((job, index) => (
            <FadeIn key={job.title} delay={index * 0.1}>

              <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-xl">

                <div className="flex items-center justify-between">

                  <h3 className="text-2xl font-bold">
                    {job.title}
                  </h3>

                  <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
                    {job.type}
                  </span>

                </div>

                <p className="mt-5 text-gray-600">
                  📍 {job.location}
                </p>

                <button className="mt-8 rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-yellow-600">
                  Apply Now
                </button>

              </div>

            </FadeIn>
          ))}

        </div>

      </Container>
    </section>
  );
}