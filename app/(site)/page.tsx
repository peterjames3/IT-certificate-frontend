
import Hero from "@/components/Hero/hero-section";
import StatsSection from "@/components/stats/stats-section"
import { AnimatedBanner } from "@/components/ui/animated-banner";
import TestimonialsSection from "@/components/Testimonial/testimonials-section";
import AboutUsSection from "@/components/about-us/aboutus-section";
import VendorListSection from "@/components/vendors-we-support/vendor-list";
import LearningSection from '@/components/learning-section/learningsection';

 import SEOContent from '@/components/ui/proctored-seo-content'
// import PortalsSection from "../ui/portal-section"
// import { OtherLinksSection } from "../ui/components/otherlinks/other-links-section";
import HomeSchema from "./_schema";
import PortalsSection from "@/components/ui/portal-section";
import FAQSection from "@/components/faq/home-page-faq"

export const metadata = {
  title: "Pay Someone to Take My Online Exam | AllExamHelper",
  description:
    "Pay someone to take your online exam with expert exam takers. Secure, confidential, and reliable online exam help for students.",
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
    </main>
  );
}