export default function CompTIAExamFAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      // ── IT Exam Support ──────────────────────────────────────────────
      {
        "@type": "Question",
        "name": "What types of CompTIA exams do you support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support all major CompTIA proctored exams including CompTIA A+, Server+, Network+, Cloud+, CySA+, Linux+, and PenTest+."
        }
      },
      {
        "@type": "Question",
        "name": "How does the on-behalf support work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our support technicians can remotely access your computer (with your permission) to handle technical setup, troubleshoot issues, and handle the exam for you — all while you maintain full visibility and control."
        }
      },
      // ── Security & Confidentiality ────────────────────────────────
      {
        "@type": "Question",
        "name": "Is my information kept confidential?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We use AES-256 encryption, never store personal data after sessions, and all technicians sign strict NDAs. Your exam content and credentials are never recorded or shared."
        }
      },
      {
        "@type": "Question",
        "name": "Is your service allowed for official exams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we operate within all major testing platforms' guidelines. We provide technical support only — all exam content is handled solely by you to maintain academic integrity."
        }
      },
      // ── Technical Requirements ────────────────────────────────────
      {
        "@type": "Question",
        "name": "What if I have technical issues during my exam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our 24/7 support team can instantly join your session to resolve issues like disconnections, software crashes, or webcam problems without disrupting your exam progress."
        }
      },
      {
        "@type": "Question",
        "name": "Do you help with system setup before exams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer pre-exam checks including system compatibility tests, software installation, mock proctoring sessions, and configuration of all required exam settings."
        }
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Take My CompTIA  Exam  Help Support",
    alternateName: "Online Proctored CompTIA Exam Support Service",
    url: "https://www.testhelpnow.com/proctored-exam-help",
    description:
      "Expert technical support for online proctored exams including Pearson VUE, ProctorU, Examity, Respondus, Honorlock, and ExamSoft. Services cover identity verification, lockdown browser setup, AI behaviour monitoring, pre-exam system checks, and 24/7 live session support.",
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
      ],
    },
    serviceType: "Take CompTIA Online Support",
    category: "Education Support Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Take My CompTIA  Exam Support Plans",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Take CompTIA A+ Exam for Me",
            url: "https://www.testhelpnow.com/pay-someone-to-take-comptia-exam-for-me/take-my-comptiaa+-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Take CompTIA Network+ for Me",
            url: "https://www.testhelpnow.com/pay-someone-to-take-comptia-exam-for-me/take-my-comptianetwork+-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Take CompTIA Security+ for me",
            url: "https://www.testhelpnow.com/pay-someone-to-take-comptia-exam-for-me/take-my-comptiasecurity+-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Take CompTIA  CySA + for Me",
            url: "https://www.testhelpnow.com/pay-someone-to-take-comptia-exam-for-me/take-my-comptiacysa+-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Take CompTIA PenTest+ for Me",
            url: "https://www.testhelpnow.com/pay-someone-to-take-comptia-exam-for-me/take-my-comptiapentest+-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Take CompTIA  Server+ for Me",
            url: "https://www.testhelpnow.com/pay-someone-to-take-comptia-exam-for-me/take-my-comptiaserver+-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Take CompTIA Cloud+ for Me",
            url: "https://www.testhelpnow.com/pay-someone-to-take-comptia-exam-for-me/take-my-comptiacloud+-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Take CompTIA Linux + for Me",
            url:"https://www.testhelpnow.com/pay-someone-to-take-comptia-exam-for-me/take-my-comptialinux+-exam-for-me"
          },
        },
    
      ],
    },
    audience: {
      "@type": "Audience",
      audienceType:
        "Students and professionals taking online CompTIa proctored certification ",
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
