import Hero from "@/components/cisco-ccna-exam/main-hero";
import VendorMatrixGrid from "@/components/cisco-ccna-exam/vendor-matrix-grid";
import HireSomeone from "@/components/cisco-ccna-exam/hire-someone";
import VendorMatrixTable from "@/components/cisco-ccna-exam/vendor-matrix-table";
import CiscoSEOContent from "@/components/cisco-ccna-exam/cisco-cnna-seo-content";
import WhyChooseUs from "@/components/cisco-ccna-exam/why-choose-us";
import TestimonialsSection from "@/components/Testimonial/testimonials-section";
import CiscoFAQSection from "@/components/faq/cisco.page-faq";
import CiscoCCNAExamFAQSchema  from "./_schema";
export const metadata = {
  title: "Take My Cisco CCNA Exam: Expert Network Certification Assistance",
  description:
    "Secure your passing score across all major Cisco CCNA paths from 200-301 CCNA and 200-901 DevNet to 350-401 ENCOR and 300-410 ENARSI. Learn how our discrete technical assessment execution helps you clear Pearson VUE checks seamlessly.",
  openGraph: {
    title: "Hire Verified Specialists for Cisco CCNA Certification Success",
    description:
      "Pass your Cisco network administrator, DevNet, or security exams safely. Our managed technical environments handle complex network simulation scenarios with zero profile risk and discrete verification.",
    url: "https://testhelpnow.com/pay-someone-to-take-cisco-exam-for-me",
    siteName: "TestHelpNow",
    locale: "en_US",
    type: "website",
  },
};

export default async function CiscoCCNAHomePage() {
  return (
    <>
      <CiscoCCNAExamFAQSchema />
      <Hero />
      <VendorMatrixGrid />
      <HireSomeone />
      <CiscoSEOContent />
      <VendorMatrixTable />
      <WhyChooseUs />
      <TestimonialsSection />
      <CiscoFAQSection />
    </>
  );
}
