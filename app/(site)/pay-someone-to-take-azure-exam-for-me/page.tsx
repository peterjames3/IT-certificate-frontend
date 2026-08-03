import type { SanityDocument } from "@sanity/client";
import { sanityFetch } from "@/sanity/lib/server-fetch";
import Hero from "@/components/azure-exam/main-hero";
import VendorMatrixGrid from "@/components/azure-exam/vendor-matrix-grid";
import HireSomeone from "@/components/azure-exam/hire-someone";
import VendorMatrixTable from "@/components/azure-exam/vendor-matrix-table";
import AzureSEOContent from "@/components/azure-exam/azure-seo-content";

import WhyChooseUs from "@/components/azure-exam/why-choose-us";
import TestimonialsSection from "@/components/Testimonial/testimonials-section";
import AzureFAQSection from "@/components/faq/azure-page-faq";
import AzureCertificateOverview from "@/components/azure-exam/azure-cert-overview";
import AzureExamFAQSchema from "./_schema";
import { azureExamsQuery } from "@/sanity/lib/queries";

export const metadata = {
  title: "Take My Proctored Azure Exam - Professional Exam Takers",
  description:
    "Pay someone to take your AZ-900, AZ-104, AZ-305, or other Azure certification exam. Our professional exam takers use secure proxy services to pass your Microsoft Azure certification with guaranteed results.",
  alternates: {
    canonical: "https://testhelpnow.com/pay-someone-to-take-azure-exam-for-me",
  },
  openGraph: {
    type: "website",
    url: "https://testhelpnow.com/pay-someone-to-take-azure-exam-for-me",
    title: "Take My Azure Exam - Professional Exam Takers",
    description:
      "Pay someone to take your AZ-900, AZ-104, AZ-305, or other Azure certification exam. Our professional exam takers use secure proxy services to pass your Microsoft Azure certification with guaranteed results.",
    siteName: "TestHelpNow",
    locale: "en_US",
    images: ["/og/azure-exam-help.png"],
  },
  keywords: [
    "take my Azure exam",
    "pay someone to take AZ-900 exam",
    "AZ-104 exam taker",
    "AZ-305 certification help",
    "Azure proxy services",
    "professional exam takers",
    "Azure certification help",
    "Microsoft Azure exam help",
  ],
};

export default async function AzureHomePage() {
   const azureExams = await sanityFetch<SanityDocument[]>({
     query: azureExamsQuery,
   });

   const examData =
     azureExams?.map((exam: SanityDocument) => ({
       code: exam.code,
       track: exam.track,
       role: exam.role,
       focus: exam.focus,
       slug: exam.slug,
     })) || [];

  return (
    <>
      <AzureExamFAQSchema />
      <Hero />
      <AzureCertificateOverview />
      <VendorMatrixGrid />
      <HireSomeone />
      <AzureSEOContent />
      <VendorMatrixTable exams={examData} provider="azure" />

      <WhyChooseUs />
      <TestimonialsSection />
      <AzureFAQSection />
    </>
  );
}
