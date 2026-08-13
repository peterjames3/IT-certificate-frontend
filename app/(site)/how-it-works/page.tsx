import Hero from "@/components/howitworks/main-hero";
import StepSection from "@/components/three-steps/step-section";
import SuccessReasons from "@/components/ui/success-reasons";
import { AnimatedBanner } from "@/components/howitworks/animated-banner";
import HowItWorksSchema from "./_schema";
//import StatsSection from "../ui/components/stats/stats-section";
import StatsSection from "@/components/stats/stats-section";

import FAQSection from "@/components/howitworks/faq";
//import ShapoReviews from "@/app/ui/Shaporeviews";
export const metadata = {
  title: "How It Works - Pay Someone to Take My Proctored IT  Certification Exam | TestHelpNow",
  description:
    "Get your AWS, Azure, or CompTIA certification Exam Help in 3 steps. Learn how our secure IT exam proxy service works with discrete guest checkout and zero account registration.",
  openGraph: {
    title: "How It Works - 3 Steps to Secure IT Certification Help",
    description:
      "Pass your IT exams safely. See how our anonymous proxy service manages strict proctoring platforms with zero user registration and discrete payment links.",
    url: "https://proctoredexamhelp.com/how-it-works",
    siteName: "TestHelpNow",
    locale: "en_US",
    type: "website",
  },
};
export default function HowItWorks() {
  return (
    <>
      <HowItWorksSchema />
      <Hero />
      <StepSection />
      {/* <ShapoReviews className="py-12 bg-gray-50" /> */}
      <StatsSection />
      <SuccessReasons />
      
      <AnimatedBanner />
      <FAQSection />
    </>
  );
}
