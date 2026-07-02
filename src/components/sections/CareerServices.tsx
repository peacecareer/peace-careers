import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";

import {
  FileText,
  BriefcaseBusiness,
  Search,
  GraduationCap,
  Users,
  Globe,
} from "lucide-react";

const services = [
  {
    title: "ATS Resume Writing",
    description:
      "Professionally written resumes designed to pass Applicant Tracking Systems and impress recruiters.",
    icon: FileText,
  },
  {
    title: "Executive Resume",
    description:
      "Premium resumes for executives, directors, vice presidents, and C-level leaders.",
    icon: BriefcaseBusiness,
  },
 {
  title: "LinkedIn Optimization",
  description:
    "Transform your LinkedIn profile into a recruiter magnet.",
  icon: Globe,
},
  {
    title: "Reverse Recruiting",
    description:
      "We actively search and apply for suitable opportunities on your behalf.",
    icon: Search,
  },
  {
    title: "Interview Coaching",
    description:
      "Personalized interview preparation to help you stand out.",
    icon: GraduationCap,
  },
  {
    title: "Career Coaching",
    description:
      "One-on-one guidance to help you achieve long-term career success.",
    icon: Users,
  },
];

export default function CareerServices() {
  return (
    <section className="bg-white py-24">
      <Container>

        <SectionHeading
          badge="Career Services"
          title="Everything You Need To Land Your Next Opportunity"
          description="Our premium career services help professionals secure interviews, receive offers, and accelerate their careers."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FeatureCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 0.1}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}