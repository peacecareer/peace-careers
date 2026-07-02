"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";

const faqs = [
  {
    question: "How does your recruitment process work?",
    answer:
      "We begin by understanding your hiring or career goals, then match candidates or opportunities through our structured recruitment process.",
  },
  {
    question: "Do you recruit internationally?",
    answer:
      "Yes. We help professionals and employers connect across North America, Europe, the Middle East, Africa, and other international markets.",
  },
  {
    question: "Can you improve my resume and LinkedIn profile?",
    answer:
      "Absolutely. Our career experts optimize resumes, LinkedIn profiles, cover letters, and interview preparation to increase interview success.",
  },
  {
    question: "How long does recruitment usually take?",
    answer:
      "Depending on the role, recruitment can take from one week to several weeks. Executive searches generally require additional time.",
  },
  {
    question: "Do you offer career coaching?",
    answer:
      "Yes. We provide one-on-one coaching, interview preparation, salary negotiation guidance, and long-term career planning.",
  },
  {
    question: "How can employers partner with Peace Careers?",
    answer:
      "Simply contact our recruitment team. We'll discuss your hiring needs and create a customized recruitment strategy for your organization.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-28">
      <Container>

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] font-bold text-yellow-600">
            Frequently Asked Questions
          </p>

          <h2 className="mt-5 text-5xl font-extrabold text-gray-900">
            Everything You Need To Know
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 leading-8">
            Answers to the most common questions from employers and
            professionals working with Peace Careers.
          </p>

        </div>

        <div className="mx-auto mt-16 max-w-4xl">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="mb-5 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-7 text-left"
              >

                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`h-6 w-6 transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (

                <div className="px-7 pb-7 text-gray-600 leading-8">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}