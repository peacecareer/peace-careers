import Container from "@/components/ui/Container";

export default function TermsPage() {
  return (
    <main className="bg-white py-24">
      <Container className="max-w-4xl">

        <h1 className="text-5xl font-extrabold text-gray-900">
          Terms & Conditions
        </h1>

        <p className="mt-4 text-gray-500">
          Last Updated: July 2026
        </p>

        <div className="mt-12 space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-yellow-600">
              1. Acceptance of Terms
            </h2>

            <p className="mt-4 leading-8 text-gray-700">
              By accessing or using the Peace Careers website and services,
              you agree to be bound by these Terms & Conditions. If you do not
              agree, please discontinue using our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-600">
              2. Our Services
            </h2>

            <p className="mt-4 leading-8 text-gray-700">
              Peace Careers provides recruitment services, executive search,
              ATS resume writing, LinkedIn optimization, career coaching,
              interview preparation, and HR consulting for employers and
              professionals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-600">
              3. Client Responsibilities
            </h2>

            <p className="mt-4 leading-8 text-gray-700">
              Clients are responsible for providing accurate and truthful
              information. Peace Careers is not responsible for delays or
              outcomes resulting from incomplete or inaccurate information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-600">
              4. Payments
            </h2>

            <p className="mt-4 leading-8 text-gray-700">
              Payment terms are agreed before work begins. Certain services
              may require full or partial payment in advance. Fees are
              communicated clearly before engagement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-600">
              5. Refund Policy
            </h2>

            <p className="mt-4 leading-8 text-gray-700">
              Due to the professional nature of our services, completed work
              is generally non-refundable. However, we are committed to
              addressing reasonable concerns and providing revisions where
              applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-600">
              6. Intellectual Property
            </h2>

            <p className="mt-4 leading-8 text-gray-700">
              All website content, branding, graphics, text, and materials are
              the property of Peace Careers unless otherwise stated and may
              not be copied or reproduced without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-600">
              7. Limitation of Liability
            </h2>

            <p className="mt-4 leading-8 text-gray-700">
              Peace Careers provides professional guidance and recruitment
              support but cannot guarantee employment, interviews, hiring
              decisions, or business outcomes, as these depend on external
              factors beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-600">
              8. Changes to These Terms
            </h2>

            <p className="mt-4 leading-8 text-gray-700">
              We reserve the right to update these Terms & Conditions at any
              time. Changes become effective immediately upon publication on
              this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-600">
              9. Contact Us
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