import ContactHero from "@/components/sections/ContactHero";
import ContactInfo from "@/components/sections/ContactInfo";
import ContactForm from "@/components/sections/ContactForm";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ success?: string }>;
}) {
  const params = await searchParams;
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      {params.success === "true" && (
  <div className="mx-auto mb-8 max-w-3xl rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
    <h3 className="text-xl font-bold text-green-700">
      ✅ Message Sent Successfully
    </h3>

    <p className="mt-2 text-green-600">
      Thank you for contacting Peace Careers. We'll get back to you as soon as possible.
    </p>
  </div>
)}
      <ContactForm />
      <FAQ />
      <CTA />
    </main>
  );
}