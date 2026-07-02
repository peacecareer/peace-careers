import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function FeaturedJobs() {
  const jobs = [
    {
      title: "Senior Product Manager",
      location: "Toronto, Canada",
      salary: "$120k - $150k",
      type: "Full-Time",
      remote: "Hybrid",
    },
    {
      title: "Software Engineer",
      location: "Berlin, Germany",
      salary: "$95k - $135k",
      type: "Full-Time",
      remote: "Remote",
    },
    {
      title: "Financial Analyst",
      location: "London, UK",
      salary: "$80k - $110k",
      type: "Full-Time",
      remote: "On-site",
    },
    {
      title: "HR Business Partner",
      location: "Dubai, UAE",
      salary: "$90k - $120k",
      type: "Full-Time",
      remote: "Hybrid",
    },
    {
      title: "Project Manager",
      location: "New York, USA",
      salary: "$110k - $145k",
      type: "Full-Time",
      remote: "Remote",
    },
    {
      title: "Data Scientist",
      location: "Amsterdam, Netherlands",
      salary: "$130k - $170k",
      type: "Full-Time",
      remote: "Hybrid",
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] font-bold text-yellow-600">
            Featured Opportunities
          </p>

          <h2 className="mt-5 text-5xl font-extrabold text-gray-900">
            Discover Your Next Career Move
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 leading-8">
            Browse a selection of premium international opportunities across
            multiple industries.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {jobs.map((job, index) => (

            <Card key={index}>

              <h3 className="text-2xl font-bold text-gray-900">
                {job.title}
              </h3>

              <p className="mt-4 text-gray-600">
                📍 {job.location}
              </p>

              <p className="mt-2 font-semibold text-yellow-600">
                {job.salary}
              </p>

              <div className="mt-6 flex gap-3 flex-wrap">

                <span className="rounded-full bg-gray-100 px-4 py-2 text-sm">
                  {job.type}
                </span>

                <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm text-yellow-700">
                  {job.remote}
                </span>

              </div>

              <div className="mt-8">
                <Button>Apply Now</Button>
              </div>

            </Card>

          ))}

        </div>

      </div>
    </section>
  );
}