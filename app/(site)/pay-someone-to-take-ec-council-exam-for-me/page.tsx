import type { SanityDocument } from "@sanity/client";
import { sanityFetch } from "@/sanity/lib/server-fetch";
import Hero from "@/components/eccouncil-exam/main-hero";

import HireSomeone from "@/components/eccouncil-exam/hire-someone";
import VendorMatrixTable from "@/components/eccouncil-exam/vendor-matrix-table";
import ECCouncilSEOContent from "@/components/eccouncil-exam/eccouncil-seo-content";
import WhyChooseUs from "@/components/eccouncil-exam/why-choose-us";
import TestimonialsSection from "@/components/Testimonial/testimonials-section";
import ECCouncilFAQSection from "@/components/faq/eccouncil-page-faq";
import ECCouncilExamFAQSchema from "./_schema";
import { eccouncilExamsQuery } from "@/sanity/lib/queries";
import ECCouncilCertificationOverview from "@/components/eccouncil-exam/eccouncil-cert-overview";

export const metadata = {
  title: "Take My Proctored EC-Council Exam - Professional Exam Takers",
  description:
    "Pay someone to take your CEH, ECSA, CHFI, CND, CCISO or LPT exam. Our professional ethical hacking exam takers use secure proxy services to pass your EC-Council certification with guaranteed results.",
  alternates: {
    canonical:
      "https://testhelpnow.com/pay-someone-to-take-eccouncil-exam-for-me",
  },
  openGraph: {
    type: "website",
    url: "https://testhelpnow.com/pay-someone-to-take-eccouncil-exam-for-me",
    title: "Take My EC-Council Exam - Professional Exam Takers",
    description:
      "Pay someone to take your CEH, ECSA, CHFI, CND, CCISO or LPT exam. Our professional ethical hacking exam takers use secure proxy services to pass your EC-Council certification with guaranteed results.",
    siteName: "TestHelpNow",
    locale: "en_US",
    images: ["/og/eccouncil-exam-help.png"],
  },
  keywords: [
    "take my EC-Council exam",
    "pay someone to take CEH exam",
    "CEH exam taker",
    "ECSA certification help",
    "EC-Council proxy services",
    "professional exam takers",
    "CHFI exam help",
    "CND certification",
    "CCISO exam assistance",
    "LPT exam taker",
    "ethical hacking exam support",
    "pay someone to take my CEH exam",
    "CEH exam proxy service",
    "EC-Council certification help",
    "take my ECSA exam",
    "CHFI exam taker service",
    "CND certification support",
    "CCISO exam help online",
    "LPT certification assistance",
    "professional CEH exam takers",
    "EC-Council exam proxy",
    "certified ethical hacker exam help",
    "EC-Council exam assistance",
    "online proctored EC-Council exam",
    "EC-Council test taker",
    "cybersecurity certification help",
    "penetration testing exam support",
    "ethical hacking certification help",
    "EC-Council exam success",
    "guaranteed EC-Council exam pass",
  ],
};

export default async function ECCouncilHomePage() {
  const eccouncilExams = await sanityFetch<SanityDocument[]>({
    query: eccouncilExamsQuery,
  });

  const examData =
    eccouncilExams?.map((exam: SanityDocument) => ({
      code: exam.code,
      track: exam.track,
      role: exam.role,
      focus: exam.focus,
      slug: exam.slug,
    })) || [];

  console.log(eccouncilExams.length);
  return (
    <>
      <ECCouncilExamFAQSchema />
      <Hero />

      <ECCouncilCertificationOverview />
      <HireSomeone />
      <ECCouncilSEOContent />
      <VendorMatrixTable exams={examData} provider="eccouncil" />
      <WhyChooseUs />
      <TestimonialsSection />
      <ECCouncilFAQSection />
    </>
  );
}
