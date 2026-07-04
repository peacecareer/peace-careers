import Container from "@/components/ui/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">

      <Container className="py-24">

        <div className="grid gap-16 lg:grid-cols-4">

          <div>

            <h2 className="text-4xl font-extrabold text-white">
              Peace
              <span className="text-yellow-500"> Careers</span>
            </h2>

            <p className="mt-6 leading-8">
              Connecting exceptional talent with outstanding opportunities through recruitment, executive search, ATS resume writing, career coaching, and HR consulting.
            </p>

            <div className="mt-8 flex gap-3">

              <div className="rounded-xl bg-yellow-500 px-4 py-2 font-bold text-black">
                Recruitment
              </div>

              <div className="rounded-xl bg-white/10 px-4 py-2">
                Career Coaching
              </div>

            </div>

          </div>

          <div>

            <h3 className="text-xl font-bold text-white">
              Company
            </h3>

            <ul className="mt-6 space-y-4">

              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/resources">Resources</Link></li>
              <li><Link href="/contact">Contact</Link></li>

            </ul>

          </div>

          <div>

            <h3 className="text-xl font-bold text-white">
              Services
            </h3>

            <ul className="mt-6 space-y-4">

              <li>Executive Recruitment</li>
              <li>ATS Resume Writing</li>
              <li>LinkedIn Optimization</li>
              <li>Career Coaching</li>
              <li>HR Consulting</li>

            </ul>

          </div>

          <div>

            <h3 className="text-xl font-bold text-white">
  Contact
</h3>

<ul className="mt-6 space-y-4">

  <li>📧 info@peacecareersglobal.com</li>

  <li>📞 +1 (581) 895 - 4725 </li>

  <li>📍 Worldwide </li>

  <li>🕒 Mon – Sat | 9:00 AM – 6:00 PM</li>

</ul>

          </div>

        </div>

      </Container>

      <div className="border-t border-white/10">

        <Container className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">

          <p className="text-sm">
            © {new Date().getFullYear()} Peace Careers. All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link href="/privacy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms & Conditions
            </Link>

          </div>

        </Container>

      </div>

    </footer>
  );
}