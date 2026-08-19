import type { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/server-fetch";
import Hero from "@/components/aws-exam/main-hero";
import VendorMatrixGrid from "@/components/aws-exam/vendor-matrix-grid";
import HireSomeone from "@/components/aws-exam/hire-someone";
//import VendorMatrixTable from "@/components/aws-exam/vendor-matrix-table";
import AwsSEOContent from "@/components/aws-exam/aws-seo-content";
//import WhyChooseUs from "@/components/aws-exam/why-choose-us";
import TestimonialsSection from "@/components/Testimonial/testimonials-section";
import AwsFAQSection from "@/components/faq/aws-page-faq";
import AwsExamFAQSchema from "./_schema";
import { awsExamsWeSupportQuery } from "@/sanity/lib/queries";
import ExamWeSupport from "@/components/aws-exam/exam-we-support";


export const metadata = {
  title: "Take My AWS Exam: Expert Amazon Web Services Certification Assistance",
  description:
    "Secure your passing score across all key Amazon Web Services paths from Cloud Practitioner to Solutions Architect Associate and SysOps Administrator. Learn how our discrete technical assessment execution helps you clear Pearson VUE checks seamlessly.",
  openGraph: {
    title: "Hire Verified Specialists for AWS Certification Success",
    description:
      "Pass your AWS solutions architect, developer, or cloud security exams safely. Our managed technical environments handle complex cloud sandbox scenarios with zero profile risk and discrete verification.",
    url: "https://testhelpnow.com/pay-someone-to-take-aws-exam-for-me",
    siteName: "TestHelpNow",
    locale: "en_US",
    type: "website",
  },
};

export default async function AwsHomePage() {
    const awsExams = await sanityFetch<SanityDocument[]>({
    query: awsExamsWeSupportQuery,
  });

  console.log(awsExams);

  return (
    <>
      <AwsExamFAQSchema />
      <Hero />
      <VendorMatrixGrid />
      <HireSomeone />
      <AwsSEOContent />
      <ExamWeSupport awsExams={awsExams} />
      {/* <VendorMatrixTable /> */}
      {/* <WhyChooseUs /> */}
      <TestimonialsSection />
      <AwsFAQSection />
    </>
  );
}
