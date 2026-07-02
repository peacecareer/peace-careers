import FadeIn from "./FadeIn";
import { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
};

export default function FeatureCard({
  title,
  description,
  icon,
  delay = 0,
}: FeatureCardProps) {

  const Icon = icon;

  return (
    <FadeIn delay={delay}>
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        <div className="mb-6">
          <Icon
            size={48}
            className="text-yellow-500"
          />
        </div>

        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-5 leading-8 text-gray-600">
          {description}
        </p>

      </div>
    </FadeIn>
  );
}