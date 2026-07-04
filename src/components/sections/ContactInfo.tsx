import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="bg-stone-50 py-20">
      <Container>

        <SectionHeading
          badge="Contact Information"
          title="We're Here To Help"
          description="Whether you're hiring exceptional talent or advancing your career, we'd love to hear from you."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl bg-white p-8 shadow-md">
            <Mail className="mb-5 h-10 w-10 text-yellow-600" />
            <h3 className="text-xl font-bold">Email</h3>
            <p className="mt-3 text-gray-600">
              info@peacecareersglobal.com
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-md">
            <Phone className="mb-5 h-10 w-10 text-yellow-600" />
            <h3 className="text-xl font-bold">Phone</h3>
            <p className="mt-3 text-gray-600">
              +1 (581) 895 - 4725
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-md">
            <MapPin className="mb-5 h-10 w-10 text-yellow-600" />
            <h3 className="text-xl font-bold">Location</h3>
            <p className="mt-3 text-gray-600">
              Worldwide
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-md">
            <Clock className="mb-5 h-10 w-10 text-yellow-600" />
            <h3 className="text-xl font-bold">Business Hours</h3>
            <p className="mt-3 text-gray-600">
              Mon – Fri
              <br />
              9:00 AM – 6:00 PM
            </p>
          </div>

        </div>

      </Container>
    </section>
  );
}