import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import {
  FileText,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "ATS Resume Guides",
    description:
      "Learn how to create ATS-friendly resumes that pass applicant tracking systems and attract recruiters.",
  },
  {
    icon: Briefcase,
    title: "Interview Success",
    description:
      "Master interview preparation with proven strategies, common questions, and confidence-building techniques.",
  },
  {
    icon: GraduationCap,
    title: "Career Growth Toolkit",
    description:
      "Access career planning guides, LinkedIn optimization tips, job search strategies, and professional development resources.",
  },
];

export default function ResourceCategories() {
  return (
    <section className="bg-white py-24">
      <Container>

        <FadeIn>
          <SectionHeading
            badge="Career Library"
            title="Everything You Need To Advance Your Career"
            description="Explore practical resources created to help professionals stand out, secure interviews, and grow their careers."
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {resources.map((resource, index) => {
            const Icon = resource.icon;

            return (
              <FadeIn key={resource.title} delay={index * 0.15}>

                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-xl">

                  <div className="mb-6 inline-flex rounded-2xl bg-yellow-100 p-4">
                    <Icon className="h-8 w-8 text-yellow-600" />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {resource.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-600">
                    {resource.description}
                  </p>

                </div>

              </FadeIn>
            );
          })}

        </div>

      </Container>
    </section>
  );
}