type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-3xl bg-white border border-gray-200 shadow-sm p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
}