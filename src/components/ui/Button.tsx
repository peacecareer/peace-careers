type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition duration-300";

  const styles = {
    primary:
      "bg-yellow-500 text-black hover:bg-yellow-400 shadow-lg hover:shadow-yellow-300/30",

    secondary:
      "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}