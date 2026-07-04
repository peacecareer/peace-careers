"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/95 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <Link
          href="/"
          className="text-3xl font-extrabold tracking-tight"
        >
          Peace
          <span className="text-yellow-600"> Careers</span>
        </Link>

        {/* Desktop Menu */}

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

        <div className="hidden lg:block">
          <Button href="/contact">
            Book Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-xl p-2 lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-8 w-8" />
          ) : (
            <Menu className="h-8 w-8" />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {mobileOpen && (

        <div className="border-t bg-white lg:hidden">

          <nav className="flex flex-col px-6 py-6">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-xl px-4 py-4 text-lg transition ${
                  pathname === link.href
                    ? "bg-yellow-50 font-bold text-yellow-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-6">
              <Button href="/contact">
                Book Consultation
              </Button>
            </div>

          </nav>

        </div>

      )}

    </header>
  );
}