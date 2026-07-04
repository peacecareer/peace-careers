import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Peace Careers | Global Recruitment & Career Coaching",
    template: "%s | Peace Careers",
  },

  description:
    "Peace Careers helps employers recruit exceptional talent and empowers professionals through ATS resume writing, LinkedIn optimization, executive recruitment, HR consulting, and career coaching.",

  keywords: [
    "Recruitment Agency",
    "Executive Recruitment",
    "Career Coaching",
    "ATS Resume Writing",
    "LinkedIn Optimization",
    "HR Consulting",
    "Global Recruitment",
    "Resume Writer",
    "Interview Coaching",
    "Job Search",
  ],

  authors: [
    {
      name: "Peace Careers",
    },
  ],

  creator: "Peace Careers",

  openGraph: {
    title: "Peace Careers",
    description:
      "Global Recruitment, Career Coaching & HR Consulting.",
    siteName: "Peace Careers",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}