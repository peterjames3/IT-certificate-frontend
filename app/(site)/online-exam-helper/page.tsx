import Hero from "@/components/online-helper/main-hero";
//import VendorMatrixGrid from "@/components/online-exam-help/vendor-matrix-grid";
import HireSomeone from "@/components/online-helper/hire-someone";
//import VendorMatrixTable from "@/components/online-exam-help/vendor-matrix-table";
import OnlineExamHelpContent from "@/components/online-helper/online-helper-seo";
import PortalsSection from "@/components/ui/portal-section";
import TestimonialsSection from "@/components/Testimonial/testimonials-section";
//import OnlineExamFAQSection from "@/components/faq/online-exam-help-faq";
import OnlineExamHelpSchema from "./_schema";

export const metadata = {
  title: "Online Exam Help: Professional Exam Takers & Proxy Services | Guaranteed Results",
  description:
    "Get expert online exam help for academic, certification, and standardized tests. Secure proxy services for ProctorU, Examity, Proctorio, Pearson VUE & more. 98% success rate with 500+ verified subject experts. Pay someone to take my online exam with full privacy safeguards.",
  openGraph: {
    title: "Online Exam Help: Hire Verified Experts to Pass Any Proctored Test",
    description:
      "Struggling with online exams? Our professional exam takers handle ProctorU, Examity, Canvas, Blackboard & all major platforms. Guaranteed scores, 24/7 support, complete anonymity.",
    url: "https://testhelpnow.com/online-exam-helper",
    siteName: "TestHelpNow",
    locale: "en_US",
    type: "website",
  },
};

export default async function OnlineExamHelpPage() {
  return (
    <>
      <OnlineExamHelpSchema />
      <Hero />
      {/* <VendorMatrixGrid /> */}
      <HireSomeone />
      <OnlineExamHelpContent />
      {/* <VendorMatrixTable />
      <WhyChooseUs /> */}
      <PortalsSection />
      <TestimonialsSection />
      {/* <OnlineExamFAQSection /> */}
    </>
  );
}