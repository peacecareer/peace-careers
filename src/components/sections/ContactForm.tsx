"use client";

import Button from "@/components/ui/Button";

export default function ContactForm() {
  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="space-y-6 rounded-3xl border border-gray-200 bg-white p-10 shadow-xl"
    >
      <input
        type="hidden"
        name="access_key"
        value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY}
      />
      <input
  type="hidden"
  name="subject"
  value="New Peace Careers Website Inquiry"
/>

<input
  type="hidden"
  name="from_name"
  value="Peace Careers Website"
/>

<input
  type="hidden"
  name="redirect"
  value="http://localhost:3000/contact?success=true"
/>

      <div>
        <label className="mb-2 block font-semibold">
          Full Name
        </label>

        <input
          name="name"
          type="text"
          placeholder="John Smith"
          className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-yellow-500"
          required
        />
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Email Address
        </label>

        <input
          name="email"
          type="email"
          placeholder="john@email.com"
          className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-yellow-500"
          required
        />
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Phone Number
        </label>

        <input
          name="phone"
          type="tel"
          placeholder="+1 234 567 890"
          className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-yellow-500"
        />
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Service Needed
        </label>

        <select
          name="service"
          className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-yellow-500"
        >
          <option>Recruitment</option>
          <option>Executive Search</option>
          <option>ATS Resume Writing</option>
          <option>Career Coaching</option>
          <option>LinkedIn Optimization</option>
          <option>HR Consulting</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block font-semibold">
          Message
        </label>

        <textarea
          name="message"
          rows={6}
          placeholder="Tell us how we can help..."
          className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-yellow-500"
          required
        />
      </div>

      <Button>
        Send Message
      </Button>
    </form>
  );
}