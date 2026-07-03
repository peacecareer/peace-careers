"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Employers", href: "/employers" },
  { name: "Job Seekers", href: "/job-seekers" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/90 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <Link
          href="/"
          className="text-3xl font-extrabold tracking-tight"
        >
          Peace
          <span className="text-yellow-600"> Careers</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">

          {links.map((link) => (

            <Link
              key={link.name}
              href={link.href}
              className={`transition hover:text-yellow-600 ${
                pathname === link.href
                  ? "font-bold text-yellow-600"
                  : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>

          ))}

        </nav>

        <Button>
          Book Consultation
        </Button>

      </div>

    </header>
  );
}