//import type { SanityDocument } from "@sanity/client";
import Hero from "@/components/azure-exam/main-hero";
import VendorMatrixGrid from "@/components/azure-exam/vendor-matrix-grid";
import HireSomeone from "@/components/azure-exam/hire-someone";
import VendorMatrixTable from "@/components/azure-exam/vendor-matrix-table";
import AzureSEOContent from "@/components/azure-exam/azure-seo-content";

import WhyChooseUs from "@/components/azure-exam/why-choose-us";
import TestimonialsSection from "@/components/Testimonial/testimonials-section";
import AzureFAQSection from "@/components/faq/azure-page-faq";

import AzureExamFAQSchema from "./_schema";

export const metadata = {
  title: "Take My Azure Exam: Expert Microsoft Certification Assistance",
  description:
    "Secure your passing score across all key Microsoft Azure paths from AZ-900 and AZ-104 to AZ-305 and AZ-500. Learn how our discrete technical assessment execution helps you clear Pearson VUE checks seamlessly.",
  openGraph: {
    title: "Hire Verified Specialists for Microsoft Azure Certification Success",
    description:
      "Pass your Azure cloud administrator, architect, or security exams safely. Our managed technical environments handle complex cloud sandbox scenarios with zero profile risk and discrete verification.",
    url: "https://testhelpnow.com/pay-someone-to-take-azure-exam-for-me",
    siteName: "TestHelpNow",
    locale: "en_US",
    type: "website",
  },
};

export default async function AzureHomePage() {

  
  return (
    <>
      <AzureExamFAQSchema />
      <Hero />
      <VendorMatrixGrid />
      <HireSomeone />
      <AzureSEOContent />
      <VendorMatrixTable />
    
      <WhyChooseUs />
      <TestimonialsSection />
      <AzureFAQSection />
    </>
  );
}
