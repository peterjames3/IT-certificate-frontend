import type { SanityDocument } from "@sanity/client";
import { sanityFetch } from "@/sanity/lib/server-fetch";
import Hero from "@/components/isaca-exam/main-hero";
import VendorMatrixGrid from "@/components/isaca-exam/vendor-matrix-grid";
import HireSomeone from "@/components/isaca-exam/hire-someone";
import VendorMatrixTable from "@/components/isaca-exam/vendor-matrix-table";
import ISACASEOContent from "@/components/isaca-exam/isaca-seo-content";
import WhyChooseUs from "@/components/isaca-exam/why-choose-us";
import TestimonialsSection from "@/components/Testimonial/testimonials-section";
import ISACAFAQSection from "@/components/faq/isaca-page-faq";
import ISACAExamFAQSchema from "./_schema";
import { isacaExamsQuery } from "@/sanity/lib/queries";
import ISACACertificationOverview from "@/components/isaca-exam/isaca-cert-overview"

export const metadata = {
  title: "Take My Proctored ISACA Exam - Professional Exam Takers",
  description:
    "Pay someone to take your CISA, CISM, CRISC, CGEIT or CDPSE exam. Our professional exam takers use secure proxy services to pass your ISACA certification with guaranteed results.",
  alternates: {
    canonical: "https://testhelpnow.com/pay-someone-to-take-isaca-exam-for-me",
  },
  openGraph: {
    type: "website",
    url: "https://testhelpnow.com/pay-someone-to-take-isaca-exam-for-me",
    title: "Take My ISACA Exam - Professional Exam Takers",
    description:
      "Pay someone to take your CISA, CISM, CRISC, CGEIT or CDPSE exam. Our professional exam takers use secure proxy services to pass your ISACA certification with guaranteed results.",
    siteName: "TestHelpNow",
    locale: "en_US",
    images: ["/og/isaca-exam-help.png"],
  },
  keywords: [
    "take my ISACA exam",
    "pay someone to take CISA exam",
    "CISM exam taker",
    "CRISC certification help",
    "ISACA proxy services",
    "professional exam takers",
    "CGEIT exam help",
    "CDPSE certification",
  ],
};

export default async function ISACAHomePage() {
  const isacaExams = await sanityFetch<SanityDocument[]>({
    query: isacaExamsQuery,
  });

  const examData =
    isacaExams?.map((exam: SanityDocument) => ({
      code: exam.code,
      track: exam.track,
      role: exam.role,
      focus: exam.focus,
      slug: exam.slug,
    })) || [];

  console.log(isacaExams.length);
  return (
    <>
      <ISACAExamFAQSchema />
      <Hero />
      <VendorMatrixGrid />
      <ISACACertificationOverview />
      <HireSomeone />
      <ISACASEOContent />
      <VendorMatrixTable exams={examData} provider="isaca" />
      <WhyChooseUs />
      <TestimonialsSection />
      <ISACAFAQSection />
    </>
  );
}
