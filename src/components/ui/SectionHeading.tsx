type SectionHeadingProps = {
  badge: string;
  title: string;
  description: string;
  centered?: boolean;
};

export default function SectionHeading({
  badge,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-16 ${
        centered ? "text-center mx-auto max-w-3xl" : ""
      }`}
    >
      <p className="uppercase tracking-[0.35em] font-bold text-yellow-600">
        {badge}
      </p>

      <h2 className="mt-5 text-5xl font-extrabold text-gray-900 leading-tight">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        {description}
      </p>
    </div>
  );
}