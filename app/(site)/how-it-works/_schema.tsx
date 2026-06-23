// app/how-it-works/_schema.tsx
// Private file — not a Next.js route. Imported only by page.tsx next to it.

export default function HowItWorksSchema() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Get Expert IT Certification Exam Help online",
    description:
      "Get certified in three simple steps. Learn how our secure IT exam proxy service coordinates expert assistance for AWS, Azure, and CompTIA certifications without needing an account on our platform.",
    url: "https://www.testhelpnow.com/how-it-works",
    image: {
      "@type": "ImageObject",
      url: "https://www.testhelpnow.com/banner image desktop.png",
    },
    totalTime: "PT10M",
    supply: [
{
        "@type": "HowToSupply",
        name: "Your target IT certification exam code (e.g., SAA-C03, AZ-104, SY0-701)",
      },
      {
        "@type": "HowToSupply",
        name: "An email address for discrete receipt delivery",
      },
    ],
  
    tool: [
      {
        "@type": "HowToTool",
        name: "TestHelpNow Order Form",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Submit Your Exam Details Anonymously",
        text: "Select your vendor and exact IT exam code via our secure inquiry form. No registration or account profile creation is required on our website to protect your professional privacy.",
        url: "https://www.testhelpnow.com/how-it-works#step-1",
        image: {
          "@type": "ImageObject",
          url: "https://www.testhelpnow.com/step-1-image.png",
        },
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Complete a Secure Guest Checkout",
        text: "Receive a custom quote and a dynamic, encrypted checkout link. Complete your invoice instantly using your credit card or cryptocurrency using our discrete payment methods with zero account creation.",
        url: "https://www.testhelpnow.com/how-it-works#step-2",
        image: {
          "@type": "ImageObject",
          url: "https://www.testhelpnow.com/step-2-image.png",
        },
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Execute Logistics & Clear the Exam Safely",
        text: "Our dedicated technical consultants coordinate the secure hardware and software setups to bypass automated proctoring flags, safely guiding your target IT exam session to a passing mark.",
        url: "https://www.testhelpnow.com/how-it-works#step-3",
        image: {
          "@type": "ImageObject",
          url: "https://www.testhelpnow.com/step-3-image.png",
        },
      },
    ],
  };

  // NEW: FAQPage schema — synced with How It Works FAQs in FAQSection.tsx
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How quickly will I be matched with an expert after submitting the form?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In most cases you'll be matched within a few hours of submitting your order form. Our team reviews every request promptly and will contact you directly to confirm your expert assignment, verify your exam details, and walk you through the next steps.",
        },
      },
      {
        "@type": "Question",
        name: "What if I need help with my exam today — do you offer same-day support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We offer same-day and urgent exam support depending on availability. Contact our team immediately via the order form or call us directly at 1-800-803-4058 and we'll do everything we can to match you with an available expert for your exam date.",
        },
      },
      {
        "@type": "Question",
        name: "Is my information kept confidential throughout the process?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, completely. We use SSL-encrypted platforms and sophisticated anonymity protocols throughout every session. All experts sign strict NDAs before working with any client. Your identity, exam credentials, and personal data are never stored, recorded, or shared with any third party.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if the expert doesn't pass my exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You are entitled to a full refund. We stand behind our guaranteed results policy — if the assigned expert does not achieve the agreed outcome for any reason, we will issue a complete refund with no questions asked.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to do anything during the exam, or do you handle everything?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You log in to your exam account to start the session, then our expert takes over remotely from there. You don't need to answer any questions or stay active — your expert handles the exam end-to-end. We walk you through the exact login steps beforehand so there's no confusion on exam day.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.testhelpnow.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "How It Works",
        item: "https://www.testhelpnow.com/how-it-works",
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "How It Works — TestHelpNow",
    description:
      "Learn how TestHelpNow connects students with certified exam experts in three simple steps. Choose your service, tell us about your exam, and your expert handles everything — confidentially and with guaranteed results.",
    url: "https://www.testhelpnow.com/how-it-works",
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "TestHelpNow",
      url: "https://www.testhelpnow.com",
    },
    provider: {
      "@type": "Organization",
      name: "TestHelpNow",
      url: "https://www.testhelpnow.com",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1500",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  );
}
