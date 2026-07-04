import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import {
  Download,
  FileText,
  ClipboardCheck,
} from "lucide-react";

const downloads = [
  {
    icon: FileText,
    title: "ATS Resume Checklist",
    description:
      "Download a practical checklist to ensure your resume is optimized for Applicant Tracking Systems before applying for jobs.",
  },
  {
    icon: ClipboardCheck,
    title: "Interview Preparation Checklist",
    description:
      "A step-by-step interview preparation guide to help you build confidence and perform at your best.",
  },
  {
    icon: Download,
    title: "Career Planning Workbook",
    description:
      "Plan your career goals, job search strategy, and professional development with this structured workbook.",
  },
];

export default function DownloadCenter() {
  return (
    <section className="bg-white py-24">
      <Container>

        <FadeIn>
          <SectionHeading
            badge="Career Tools"
            title="Free Career Tools & Templates"
            description="Practical resources designed to help you prepare for interviews, improve your resume, and advance your career."
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {downloads.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn
                key={item.title}
                delay={index * 0.15}
              >
                <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-xl">

                  <div className="mb-6 inline-flex rounded-2xl bg-yellow-100 p-4">
                    <Icon className="h-8 w-8 text-yellow-600" />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-600">
                    {item.description}
                  </p>

                  <button className="mt-8 rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-black">
                    Coming Soon
                  </button>

                </div>
              </FadeIn>
            );
          })}

        </div>

      </Container>
    </section>
  );
}