import type { SanityDocument } from "@sanity/client";
import Hero from "@/components/comptia-exam/main-hero";
import VendorMatrixGrid from "@/components/comptia-exam/vendor-matrix-grid";
import HireSomeone from "@/components/comptia-exam/hire-someone";
import ComptiaSEOContent from "@/components/comptia-exam/comptia-seo-content";
import HowOurProctoredProcessWork from "@/components/comptia-exam/how-our-proctored-process-work";
import WhyChooseUs from "@/components/comptia-exam/why-choose-us";
import TestimonialsSection from "@/components/Testimonial/testimonials-section";
import CompTIAFAQSection from "@/components/faq/comptia-page-faq";
import { sanityFetch } from "@/sanity/lib/server-fetch";
import { allcomptiaExamServicePagesQuery } from "@/sanity/lib/queries";
import ExamWeSupport from "@/components/comptia-exam/exam-we-support";
import CompTIAExamFAQSchema from "./_schema";
export const metadata = {
  title: "Take My CompTIA Exam - Expert Certification Assistance | TestHelpNow",
  description:
    "Secure your passing score across all 19 CompTIA paths, from A+ and Network+ to Security+ and CySA+. Learn how our discrete technical assessment execution helps you clear OnVUE checks seamlessly.",
  openGraph: {
    title: "Hire Verified Specialists for CompTIA Certification Success",
    description:
      "Pass your CompTIA core series or advanced security exams safely. Our managed technical environments handle performance-based questions (PBQs) with zero profile risk and discrete verification.",
    url: "https://testhelpnow.com/pay-someone-to-take-comptia-exam-for-me",
    siteName: "TestHelpNow",
    locale: "en_US",
    type: "website",
  },
};
export default async function CompTIAHomePage() {
  const compTIAExams = await sanityFetch<SanityDocument[]>({
    query: allcomptiaExamServicePagesQuery,
  });
  
  return (
    <>
      <CompTIAExamFAQSchema />
      <Hero />
      <VendorMatrixGrid />
      <HireSomeone />
      <ComptiaSEOContent />
      <HowOurProctoredProcessWork />
      <ExamWeSupport compTIAExams={compTIAExams} />
      <WhyChooseUs />
      <TestimonialsSection />
      <CompTIAFAQSection />
    </>
  );
}
