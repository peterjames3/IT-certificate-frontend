import Hero from "@/components/itil-exam/main-hero";

import HireSomeone from "@/components/itil-exam/hire-someone";
import VendorMatrixTable from "@/components/itil-exam/vendor-matrix-table";
import ItilSEOContent from "@/components/itil-exam/itil-seo-content";
import WhyChooseUs from "@/components/itil-exam/why-choose-us";
import TestimonialsSection from "@/components/Testimonial/testimonials-section";
import ItilFAQSection from "@/components/faq/itil-page-faq";
import ItilExamFAQSchema from "./_schema";
import CourseCategories from "@/components/itil-exam/itil-cert-overview";
export const metadata = {
  title: "Take My ITIL Exam: Expert PeopleCert Certification Assistance",
  description:
    "Secure your passing score across all key ITIL v4 paths from ITIL 4 Foundation to Managing Professional streams. Learn how our discrete technical assessment execution helps you clear PeopleCert proctoring checks seamlessly.",
  openGraph: {
    title: "Hire Verified Specialists for ITIL v4 Certification Success",
    description:
      "Pass your ITIL service management, strategy, or high-velocity IT exams safely. Our managed technical environments handle complex PeopleCert proctoring frameworks with zero profile risk and discrete verification.",
    url: "https://testhelpnow.com/pay-someone-to-take-itil-exam-for-me",
    siteName: "TestHelpNow",
    locale: "en_US",
    type: "website",
  },
};

export default async function ItilHomePage() {
  return (
    <>
      <ItilExamFAQSchema />
      <Hero />
      <CourseCategories />
      
      <HireSomeone />
      <ItilSEOContent />
      <VendorMatrixTable />
      <WhyChooseUs />
      <TestimonialsSection />
      <ItilFAQSection />
    </>
  );
}