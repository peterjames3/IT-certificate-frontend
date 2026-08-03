export default function CiscoCCNAExamFAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      // ── IT Exam Support ──────────────────────────────────────────────
      {
        "@type": "Question",
        name: "What types of Cisco CCNA exams do you support for exam taker services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We support all major Cisco CCNA proctored exams for our professional exam taker services, including 200-301 CCNA, 200-901 DevNet Associate, 200-201 CBROPS, 300-410 ENARSI, 300-415 ENSDWI, and 350-401 ENCOR.",
        },
      },
      {
        "@type": "Question",
        name: "How does your proxy exam taker service work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our proxy exam taker service uses secure remote access protocols and advanced proxy routing to handle your exam session. Our certified exam takers can remotely access your computer with your authorization to manage technical setup, troubleshoot performance issues, and navigate the testing environment while our proxy services ensure complete anonymity and operational security.",
        },
      },
      // ── Security & Confidentiality ────────────────────────────────
      {
        "@type": "Question",
        name: "Is my information kept confidential when using your proxy exam takers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Our proxy services utilize AES-256 encryption, and we never store personal data after sessions. All exam takers and technicians sign strict NDAs. Your exam content, credentials, and identity are never recorded or shared, ensuring total confidentiality with our proxy exam taker service.",
        },
      },
      {
        "@type": "Question",
        name: "Is your proxy exam taker service allowed for official Cisco exams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our proxy services operate within all major testing platforms' technical parameters. We provide comprehensive exam taker support, meaning all exam content is handled by our certified professionals while maintaining full compliance with platform guidelines through our advanced proxy frameworks.",
        },
      },
      // ── Technical Requirements ────────────────────────────────────
      {
        "@type": "Question",
        name: "What if I have technical issues during my exam with your proxy exam taker?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our 24/7 proxy exam taker support team can instantly join your session to resolve issues like disconnections, software crashes, or webcam problems without disrupting your exam progress. Our exam takers are trained to handle any technical challenge through our secure proxy services.",
        },
      },
      {
        "@type": "Question",
        name: "Do you help with system setup before exams for your proxy exam taker service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our proxy exam taker service includes pre-exam checks including system compatibility tests, software installation, mock proctoring sessions, and configuration of all required exam settings. Our exam takers ensure your environment is fully optimized before the exam begins.",
        },
      },
      {
        "@type": "Question",
        name: "How do your proxy services protect my identity during the exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our proxy services route all traffic through dedicated, region-specific proxies and mask your machine fingerprint completely. Our exam takers operate through secure, undetectable frameworks that ensure absolute anonymity throughout the entire testing process.",
        },
      },
      {
        "@type": "Question",
        name: "Can your exam takers handle the Cisco CCNA performance-based simulations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our certified exam takers are experienced network engineers who work with Cisco technologies daily. They can navigate complex performance-based simulations involving routing protocols, switching configurations, network troubleshooting, and security implementations with total proficiency.",
        },
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Take My Cisco CCNA Exam Help Support - Professional Exam Taker and Proxy Services",
    alternateName:
      "Online Proctored Cisco CCNA Exam Taker and Proxy Support Service",
    url: "https://www.testhelpnow.com/proctored-exam-help",
    description:
      "Expert professional exam taker and proxy services for online proctored exams including Pearson VUE, ProctorU, Examity, Respondus, Honorlock, and ExamSoft. Our certified exam takers provide secure proxy services covering identity verification, lockdown browser setup, AI behaviour monitoring, pre-exam system checks, and 24/7 live session support with complete anonymity.",
    provider: {
      "@type": "Organization",
      name: "TestHelpNow",
      url: "https://www.testhelpnow.com",
      telephone: "+1(469) 428 4470",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "1(469) 428 4470",
        contactType: "customer support",
        availableLanguage: "English",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "Europe" },
        { "@type": "Country", name: "France" },
        { "@type": "Country", name: "Italy" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "Australia" },
      ],
    },
    serviceType: "Take Cisco CCNA Exam Taker and Proxy Services",
    category: "Education Support Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Take My Cisco CCNA Exam Taker and Proxy Support Plans",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional Exam Taker for Cisco 200-301 CCNA with Proxy Services",
            url: "https://www.testhelpnow.com/pay-someone-to-take-cisco-exam-for-me/take-my-cisco-200-301-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional Exam Taker for Cisco 200-901 DevNet Associate with Proxy Services",
            url: "https://www.testhelpnow.com/pay-someone-to-take-cisco-exam-for-me/take-my-cisco-200-901-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional Exam Taker for Cisco 200-201 CBROPS with Proxy Services",
            url: "https://www.testhelpnow.com/pay-someone-to-take-cisco-exam-for-me/take-my-cisco-200-201-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional Exam Taker for Cisco 300-410 ENARSI with Proxy Services",
            url: "https://www.testhelpnow.com/pay-someone-to-take-cisco-exam-for-me/take-my-cisco-300-410-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional Exam Taker for Cisco 300-415 ENSDWI with Proxy Services",
            url: "https://www.testhelpnow.com/pay-someone-to-take-cisco-exam-for-me/take-my-cisco-300-415-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional Exam Taker for Cisco 350-401 ENCOR with Proxy Services",
            url: "https://www.testhelpnow.com/pay-someone-to-take-cisco-exam-for-me/take-my-cisco-350-401-exam-for-me",
          },
        },
      ],
    },
    audience: {
      "@type": "Audience",
      audienceType:
        "Students and professionals seeking professional exam taker and proxy services for online Cisco CCNA proctored certification exams",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
