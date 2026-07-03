import FadeIn from "./FadeIn";

type StatCardProps = {
  number: string;
  label: string;
  delay?: number;
};

export default function StatCard({
  number,
  label,
  delay = 0,
}: StatCardProps) {
  return (
    <FadeIn delay={delay}>

      <div className="rounded-3xl border border-white/10 bg-white/10 p-10 text-center backdrop-blur-md transition duration-300 hover:bg-white/20">

        <h3 className="text-5xl font-extrabold text-yellow-400">

          {number}

        </h3>

        <p className="mt-4 text-gray-200">

          {label}

        </p>

      </div>

    </FadeIn>
  );
}