import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

const packages = [
  {
    title: "Professional Resume",
    subtitle: "Perfect for job seekers",
    features: [
      "ATS-Optimized Resume",
      "Professional Formatting",
      "Keyword Optimization",
      "1 Revision",
      "3–5 Business Days Delivery",
    ],
  },
  {
    title: "Premium Career Package",
    subtitle: "Most Popular",
    featured: true,
    features: [
      "ATS Resume",
      "Cover Letter",
      "LinkedIn Optimization",
      "2 Revisions",
      "Priority Support",
    ],
  },
  {
    title: "Executive Career Package",
    subtitle: "For Senior Professionals",
    features: [
      "Executive Resume",
      "Executive Cover Letter",
      "LinkedIn Executive Profile",
      "Career Strategy Consultation",
      "Priority Delivery",
    ],
  },
];

export default function ResumePackages() {
  return (
    <section className="bg-stone-50 py-24">
      <Container>

        <FadeIn>
          <SectionHeading
            badge="Career Services"
            title="Choose The Right Resume Package"
            description="Whether you're starting your career or pursuing executive opportunities, we have a package designed to help you stand out."
          />
        </FadeIn>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {packages.map((pkg, index) => (
            <FadeIn
              key={pkg.title}
              delay={index * 0.15}
            >
              <div
                className={`rounded-3xl border p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 ${
                  pkg.featured
                    ? "border-yellow-500 bg-white"
                    : "border-gray-200 bg-white"
                }`}
              >
                {pkg.featured && (
                  <div className="mb-6 inline-block rounded-full bg-yellow-500 px-4 py-2 text-sm font-bold text-black">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-3xl font-bold">
                  {pkg.title}
                </h3>

                <p className="mt-2 text-yellow-600 font-semibold">
                  {pkg.subtitle}
                </p>

                <ul className="mt-8 space-y-4">

                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-yellow-600" />

                      <span>{feature}</span>
                    </li>
                  ))}

                </ul>

                <div className="mt-10">
                  <Button href="/contact">
                    Get Started
                  </Button>
                </div>

              </div>
            </FadeIn>
          ))}

        </div>

      </Container>
    </section>
  );
}