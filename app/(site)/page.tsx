import Hero from "@/components/Hero/hero-section";
import StatsSection from "@/components/stats/stats-section";
import { AnimatedBanner } from "@/components/ui/animated-banner";
import TestimonialsSection from "@/components/Testimonial/testimonials-section";
import AboutUsSection from "@/components/about-us/aboutus-section";
import VendorListSection from "@/components/vendors-we-support/vendor-list";
import LearningSection from "@/components/learning-section/learningsection";
import SEOContent from "@/components/ui/proctored-seo-content";
import HomeSchema from "./_schema";
import PortalsSection from "@/components/ui/portal-section";
import FAQSection from "@/components/faq/home-page-faq";
import HomeBlogSection from "@/components/blog/home-blog-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "ProctoredExamHelp | #1 Online Proctored Exam Help & IT Certification Support",

  description:
    "Pay someone to take your online proctored exam. Get expert help for IT certifications including AWS, Azure, CompTIA, Cisco, and more. 100% confidential and guaranteed results.",

  alternates: {
    canonical: "https://proctoredexamhelp.com/",
  },

  openGraph: {
    title:
      "ProctoredExamHelp | #1 Online Proctored Exam Help & IT Certification Support",
    description:
      "Pay someone to take your online proctored exam. Expert help for AWS, Azure, CompTIA, Cisco, and more. 100% confidential. Guaranteed results.",
    url: "https://proctoredexamhelp.com/",
    type: "website",
    images: [
      {
        url: "https://proctoredexamhelp.com/og/homepage-og-image.png",
        width: 1200,
        height: 630,
        alt: "ProctoredExamHelp - Online Proctored Exam Help",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "ProctoredExamHelp | #1 Online Proctored Exam Help & IT Certification Support",
    description:
      "Pay someone to take your online proctored exam. Expert help for IT certifications. 100% confidential. Guaranteed results.",
    images: ["https://proctoredexamhelp.com/og/homepage-og-image.png"],
  },
};
export default function Page() {
  return (
    <main className="">
      <HomeSchema />
      <Hero />
      <StatsSection />
      <AboutUsSection />
      <VendorListSection />
      <LearningSection />
      <SEOContent />
      <PortalsSection />
      <TestimonialsSection />
      <AnimatedBanner />
      <FAQSection />
      <HomeBlogSection />
    </main>
  );
}
