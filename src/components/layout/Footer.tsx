import Container from "@/components/ui/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">

      <Container className="py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-extrabold text-white">
              Peace
              <span className="text-yellow-500"> Careers</span>
            </h2>

            <p className="mt-6 leading-8">
              Helping employers recruit exceptional talent while empowering
              professionals to build successful international careers.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3">

              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/employers">Employers</Link></li>
              <li><Link href="/job-seekers">Job Seekers</Link></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Services
            </h3>

            <ul className="mt-6 space-y-3">

              <li>Executive Recruitment</li>
              <li>Career Coaching</li>
              <li>Resume Writing</li>
              <li>HR Consulting</li>
              <li>LinkedIn Optimization</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Contact
            </h3>

            <ul className="mt-6 space-y-4">

              <li>📧 info@peacecareers.com</li>

              <li>📞 +234 XXX XXX XXXX</li>

              <li>
                Lagos, Nigeria
              </li>

              <li>
                Mon – Fri
                <br />
                9:00 AM – 6:00 PM
              </li>

            </ul>

          </div>

        </div>

      </Container>

      <div className="border-t border-gray-800">

        <Container className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">

          <p className="text-sm">
            © 2026 Peace Careers. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <Link href="/">
              Privacy Policy
            </Link>

            <Link href="/">
              Terms
            </Link>

          </div>

        </Container>

      </div>

    </footer>
  );
}