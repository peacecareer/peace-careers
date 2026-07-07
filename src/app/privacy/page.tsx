import Container from "@/components/ui/Container";

export default function PrivacyPage() {
  return (
    <main className="bg-white py-24">
      <Container className="max-w-4xl">

        <h1 className="text-5xl font-extrabold text-gray-900">
          Privacy Policy
        </h1>

        <p className="mt-4 text-gray-500">
          Last Updated: July 2026
        </p>

        <div className="mt-12 space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-yellow-600">
              1. Introduction
            </h2>

            <p className="mt-4 leading-8 text-gray-700">
              Peace Careers is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our
              recruitment, career coaching, ATS resume writing, executive
              search, LinkedIn optimization, and HR consulting services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-600">
              2. Information We Collect
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 text-gray-700">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Resume/CV Information</li>
              <li>Employment History</li>
              <li>Career Preferences</li>
              <li>Messages submitted through our contact forms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-600">
              3. How We Use Your Information
            </h2>

            <p className="mt-4 leading-8 text-gray-700">
              We use your information to provide recruitment services,
              communicate with you, improve our services, deliver career
              coaching, prepare professional resumes, connect candidates with
              employers, respond to enquiries, and comply with legal
              obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-600">
              4. Data Security
            </h2>

            <p className="mt-4 leading-8 text-gray-700">
              We implement reasonable technical and organizational safeguards
              to protect your personal information. While no online system is
              completely secure, we strive to protect your data using
              industry-recognized practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-600">
              5. Third-Party Services
            </h2>

            <p className="mt-4 leading-8 text-gray-700">
              Our website may use trusted third-party providers such as
              Web3Forms for contact form submissions and other tools to improve
              user experience. These providers may process information in
              accordance with their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-600">
              6. Your Rights
            </h2>

            <p className="mt-4 leading-8 text-gray-700">
              You may request access to, correction of, or deletion of your
              personal information by contacting us using the details provided
              below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-600">
              7. Contact Us
            </h2>

            <p className="mt-4 leading-8 text-gray-700">
              Peace Careers<br />
              Email: info@peacecareersglobal.com<br />
              Phone: +234 810 899 4952
            </p>
          </section>

        </div>

      </Container>
    </main>
  );
}