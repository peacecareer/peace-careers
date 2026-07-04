type SectionHeadingProps = {
  badge: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  badge,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex rounded-full border border-yellow-500 bg-yellow-50 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-700">
        {badge}
      </span>

      <h2 className="mt-8 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
        {description}
      </p>

    </div>
  );
} 