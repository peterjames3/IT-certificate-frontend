import Hero from "@/components/comptia-exam/main-hero";
import VendorMatrixGrid from "@/components/comptia-exam/vendor-matrix-grid";
import HireSomeone from "@/components/comptia-exam/hire-someone";
import ComptiaSEOContent from "@/components/comptia-exam/comptia-seo-content";
import HowOurProctoredProcessWork from "@/components/comptia-exam/how-our-proctored-process-work";
import WhyChooseUs from "@/components/comptia-exam/why-choose-us";
import TestimonialsSection from "@/components/Testimonial/testimonials-section";
import  CompTIAFAQSection from "@/components/faq/comptia-page-faq";
import { sanityFetch } from "@/sanity/lib/server-fetch";

import CompTIAExamFAQSchema from "./_schema";
export const metadata = {
  title:
    "How It Works - Pay Someone to Take My IT  Certification Exam | TestHelpNow",
  description:
    "Get your AWS, Azure, or CompTIA certification Exam Help in 3 steps. Learn how our secure IT exam proxy service works with discrete guest checkout and zero account registration.",
  openGraph: {
    title: "How It Works - 3 Steps to Secure IT Certification Help",
    description:
      "Pass your IT exams safely. See how our anonymous proxy service manages strict proctoring platforms with zero user registration and discrete payment links.",
    url: "https://testhelpnow.com/how-it-works",
    siteName: "TestHelpNow",
    locale: "en_US",
    type: "website",
  },
};
export default function CompTIAHomePage() {
  return (
    <>
      <CompTIAExamFAQSchema />
      <Hero />
      <VendorMatrixGrid />
      <HireSomeone />
      <ComptiaSEOContent />
      <HowOurProctoredProcessWork />
      <WhyChooseUs />
      <TestimonialsSection />
      <CompTIAFAQSection />
    </>
  );
}
