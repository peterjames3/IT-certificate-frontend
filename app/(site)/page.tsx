
import Hero from "@/components/Hero/hero-section";
import StatsSection from "@/components/stats/stats-section"
import { AnimatedBanner } from "@/components/ui/animated-banner";
import TestimonialsSection from "@/components/Testimonial/testimonials-section";
import AboutUsSection from "@/components/about-us/aboutus-section";
import VendorListSection from "@/components/vendors-we-support/vendor-list";
import LearningSection from '@/components/learning-section/learningsection';
// import StatsSection from "../ui/components/stats/stats-section";
// import SubService from "../ui/components/heroservice/subservices-section";
// import TestServices from "../ui/components/exam/test-services-section";
// import SubTestimonialCard from "../ui/components/Testimonial/sub-testimonial";
// import SuccessPath from "../ui/components/path/success-path";
// import TestimonialsSection from "../ui/components/Testimonial/testimonials-section";
// import { AnimatedBanner } from "../ui/animated-banner";
 import SEOContent from '@/components/ui/proctored-seo-content'
// import PortalsSection from "../ui/portal-section"
// import { OtherLinksSection } from "../ui/components/otherlinks/other-links-section";
import HomeSchema from "./_schema";
import PortalsSection from "@/components/ui/portal-section";

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
      {/* <StatsSection />
      <SubService />
      <TestServices />
      <SubTestimonialCard />
      <SEOContent />
      <PortalsSection />
      <SuccessPath />
      <TestimonialsSection />
      <AnimatedBanner />
      <OtherLinksSection /> */}
      <SEOContent />
      <TestimonialsSection />
      <PortalsSection />
      <AnimatedBanner />
    </main>
  );
}