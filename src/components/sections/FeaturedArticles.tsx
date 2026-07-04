import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

const articles = [
  {
    title: "10 ATS Resume Mistakes That Cost Candidates Interviews",
    category: "Resume Writing",
    description:
      "Learn the most common ATS resume mistakes and how to avoid them to improve your chances of getting shortlisted.",
  },
  {
    title: "How To Optimize Your LinkedIn Profile For Recruiters",
    category: "LinkedIn",
    description:
      "Discover practical techniques to make your LinkedIn profile more attractive to recruiters and hiring managers.",
  },
  {
    title: "Preparing For Your Next Job Interview",
    category: "Interview Tips",
    description:
      "Build confidence with interview preparation strategies, common questions, and professional communication tips.",
  },
];

export default function FeaturedArticles() {
  return (
    <section className="bg-stone-50 py-24">
      <Container>

        <FadeIn>
          <SectionHeading
            badge="Career Insights"
            title="Latest Career Advice & Expert Articles"
            description="Stay informed with practical career advice, resume writing tips, interview strategies, and recruitment insights from Peace Careers."
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {articles.map((article, index) => (
            <FadeIn
              key={article.title}
              delay={index * 0.15}
            >
              <article className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
                  {article.category}
                </span>

                <h3 className="mt-6 text-2xl font-bold">
                  {article.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {article.description}
                </p>

                <button className="mt-8 font-semibold text-yellow-600 hover:text-yellow-700">
                  Read Article →
                </button>

              </article>
            </FadeIn>
          ))}

        </div>

      </Container>
    </section>
  );
}