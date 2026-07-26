export default function ECCouncilExamFAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      // ── IT Exam Support ──────────────────────────────────────────────
      {
        "@type": "Question",
        "name": "What types of EC-Council exams do your exam takers support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our professional exam takers support all major EC-Council proctored exams, including CEH (Certified Ethical Hacker), ECSA (EC-Council Certified Security Analyst), CHFI (Computer Hacking Forensic Investigator), CND (Certified Network Defender), CCISO (Certified Chief Information Security Officer), and LPT (Licensed Penetration Tester)."
        }
      },
      {
        "@type": "Question",
        "name": "How does your proxy exam taker service work for EC-Council exams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our proxy exam taker service uses secure remote access protocols and advanced proxy routing to handle your EC-Council exam session. Our certified ethical hacking and security professionals can remotely access your computer with your authorization to manage technical setup, troubleshoot performance issues, and navigate the EC-Council testing environment while our proxy services ensure complete anonymity and operational security."
        }
      },
      // ── Security & Confidentiality ────────────────────────────────
      {
        "@type": "Question",
        "name": "Is my information kept confidential when using your proxy exam takers for EC-Council?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our proxy services utilize AES-256 encryption, and we never store personal data after sessions. All exam takers and technicians sign strict NDAs. Your exam content, credentials, and identity are never recorded or shared, ensuring total confidentiality with our proxy exam taker service for EC-Council certifications."
        }
      },
      {
        "@type": "Question",
        "name": "Is your proxy exam taker service allowed for official EC-Council exams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our proxy services operate within all major testing platforms' technical parameters, including EC-Council's ECC Exam Center and Pearson VUE. We provide comprehensive exam taker support, meaning all exam content is handled by our certified security professionals while maintaining full compliance with platform guidelines through our advanced proxy frameworks."
        }
      },
      // ── Technical Requirements ────────────────────────────────────
      {
        "@type": "Question",
        "name": "What if I have technical issues during my EC-Council exam with your proxy exam taker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our 24/7 proxy exam taker support team can instantly join your session to resolve issues like disconnections, software crashes, or webcam problems without disrupting your exam progress. Our exam takers are trained to handle any technical challenge through our secure proxy services for EC-Council exams."
        }
      },
      {
        "@type": "Question",
        "name": "Do you help with system setup before EC-Council exams for your proxy exam taker service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our proxy exam taker service includes pre-exam checks including EC-Council system compatibility tests, software installation, mock proctoring sessions, and configuration of all required exam settings. Our exam takers ensure your environment is fully optimized before the EC-Council exam begins."
        }
      },
      {
        "@type": "Question",
        "name": "How do your proxy services protect my identity during the EC-Council exam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our proxy services route all traffic through dedicated, region-specific proxies and mask your machine fingerprint completely. Our exam takers operate through secure, undetectable frameworks that ensure absolute anonymity throughout the entire EC-Council certification testing process."
        }
      },
      {
        "@type": "Question",
        "name": "Can your exam takers handle EC-Council's practical and scenario-based questions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our certified exam takers are experienced ethical hacking, security analysis, and digital forensics professionals who work with EC-Council frameworks daily. They can navigate complex scenario-based questions involving penetration testing, vulnerability assessment, incident response, and network defense with total proficiency."
        }
      },
      {
        "@type": "Question",
        "name": "What is the success rate for your EC-Council exam taker service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our proxy exam taker service maintains a proven success rate of over 95% for EC-Council certification exams. Our certified professionals are experts in their respective domains, ensuring you achieve the best possible results for your CEH, ECSA, CHFI, CND, CCISO, or LPT certification."
        }
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Take My EC-Council Exam Help Support - Professional Exam Taker and Proxy Services",
    alternateName: "Online Proctored EC-Council Exam Taker and Proxy Support Service",
    url: "https://www.testhelpnow.com/proctored-exam-help",
    description:
      "Expert professional exam taker and proxy services for online proctored exams including EC-Council ECC Exam Center, Pearson VUE, ProctorU, Examity, Respondus, Honorlock, and ExamSoft. Our certified exam takers provide secure proxy services covering identity verification, lockdown browser setup, AI behaviour monitoring, pre-exam system checks, and 24/7 live session support with complete anonymity for all EC-Council certifications including CEH, ECSA, CHFI, CND, CCISO, and LPT.",
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
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "UAE" },
      ],
    },
    serviceType: "Take EC-Council Exam Taker and Proxy Services",
    category: "Education Support Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Take My EC-Council Exam Taker and Proxy Support Plans",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional Exam Taker for CEH Certification with Proxy Services",
            url: "https://www.testhelpnow.com/pay-someone-to-take-eccouncil-exam-for-me/take-my-ceh-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional Exam Taker for ECSA Certification with Proxy Services",
            url: "https://www.testhelpnow.com/pay-someone-to-take-eccouncil-exam-for-me/take-my-ecsa-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional Exam Taker for CHFI Certification with Proxy Services",
            url: "https://www.testhelpnow.com/pay-someone-to-take-eccouncil-exam-for-me/take-my-chfi-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional Exam Taker for CND Certification with Proxy Services",
            url: "https://www.testhelpnow.com/pay-someone-to-take-eccouncil-exam-for-me/take-my-cnd-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional Exam Taker for CCISO Certification with Proxy Services",
            url: "https://www.testhelpnow.com/pay-someone-to-take-eccouncil-exam-for-me/take-my-cciso-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional Exam Taker for LPT Certification with Proxy Services",
            url: "https://www.testhelpnow.com/pay-someone-to-take-eccouncil-exam-for-me/take-my-lpt-exam-for-me",
          },
        },
      ],
    },
    audience: {
      "@type": "Audience",
      audienceType:
        "Students and professionals seeking professional exam taker and proxy services for online EC-Council proctored certification exams including CEH, ECSA, CHFI, CND, CCISO, and LPT",
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