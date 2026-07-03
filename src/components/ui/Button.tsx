import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
};

export default function Button({
  children,
  variant = "primary",
  href,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-yellow-500 text-black shadow-lg hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-yellow-500/30",

    secondary:
      "border border-gray-300 bg-white text-gray-900 hover:-translate-y-1 hover:border-yellow-500 hover:text-yellow-600",
  };

  if (href) {
    return (
      <Link
        href={href}
        className={`${base} ${styles[variant]}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}