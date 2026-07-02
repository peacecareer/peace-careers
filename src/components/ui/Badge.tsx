 type BadgeProps = {
  children: React.ReactNode;
  color?: "gold" | "gray";
};

export default function Badge({
  children,
  color = "gold",
}: BadgeProps) {
  const styles =
    color === "gold"
      ? "bg-yellow-100 text-yellow-700 border-yellow-300"
      : "bg-gray-100 text-gray-700 border-gray-300";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold ${styles}`}
    >
      {children}
    </span>
  );
}