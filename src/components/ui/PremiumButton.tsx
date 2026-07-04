import FadeIn from "./FadeIn";

type PremiumCardProps = {
  children: React.ReactNode;
  delay?: number;
};

export default function PremiumCard({
  children,
  delay = 0,
}: PremiumCardProps) {
  return (
    <FadeIn delay={delay}>
      <div className="group rounded-[32px] border border-gray-200 bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-yellow-500 hover:shadow-2xl">

        {children}

      </div>
    </FadeIn>
  );
}