import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-6">
      <div className="max-w-xl text-center">

        <p className="text-lg font-semibold uppercase tracking-[0.3em] text-yellow-600">
          Error 404
        </p>

        <h1 className="mt-6 text-6xl font-extrabold text-gray-900">
          Page Not Found
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-10">
          <Button href="/">
            Back to Home
          </Button>
        </div>

      </div>
    </main>
  );
}