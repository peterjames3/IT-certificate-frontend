export default function ProctoredITExamFAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      // ── IT Exam Support ──────────────────────────────────────────────
      {
        "@type": "Question",
        name: "What types of CompTIA exams do you support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We support all major CompTIA proctored exams including CompTIA A+, Server+, Network+, Cloud+, CySA+, Linux+, and PenTest+.",
        },
      },
      {
        "@type": "Question",
        name: "How does the on-behalf support work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our support technicians can remotely access your computer (with your permission) to handle technical setup, troubleshoot issues, and handle the exam for you — all while you maintain full visibility and control.",
        },
      },
      // ── Security & Confidentiality ────────────────────────────────
      {
        "@type": "Question",
        name: "Is my information kept confidential?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We use AES-256 encryption, never store personal data after sessions, and all technicians sign strict NDAs. Your exam content and credentials are never recorded or shared.",
        },
      },
      {
        "@type": "Question",
        name: "Is your service allowed for official exams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we operate within all major testing platforms' guidelines. We provide technical support only — all exam content is handled solely by you to maintain academic integrity.",
        },
      },
      // ── Technical Requirements ────────────────────────────────────
      {
        "@type": "Question",
        name: "What if I have technical issues during my exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our 24/7 support team can instantly join your session to resolve issues like disconnections, software crashes, or webcam problems without disrupting your exam progress.",
        },
      },
      {
        "@type": "Question",
        name: "Do you help with system setup before exams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer pre-exam checks including system compatibility tests, software installation, mock proctoring sessions, and configuration of all required exam settings.",
        },
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Take My IT proctored  Exams  Help Support",
    alternateName: "Online Proctored IT Exams Support Service",
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
    serviceType: "Take Proctored IT Exam Online Support",
    category: "Education Support Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Take My IT Proctored  Exam Support Plans",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Take AWS Cloud Practitioner (CLF-CO2) Exam for Me",
            url: "https://www.testhelpnow.com/proctored-it-exam-help/pay-someone-to-take-aws-cloud-practitionerclf-c02-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Take AWS Solution Architect  Associate  (SAA-CO3) Exam for Me",
            url: "https://www.testhelpnow.com/proctored-it-exam-help/pay-someone-to-take-aws-solutions-architect-associate-saa-c03-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Take AWS SysOps Administrator (SOA-CO2) Exam  for me",
            url: "https://www.testhelpnow.com/proctored-it-exam-help/pay-someone-to-take-aws-sysops-administrator-soa-c02-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Take Azure Fundamentals (AZ-900) Exam for Me",
            url: "https://www.testhelpnow.com/proctored-it-exam-help/pay-someone-to-take-azure-fundamentals-az-900-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Take Azure Administrator (AZ-104) Exam for Me",
            url: "https://www.testhelpnow.com/proctored-it-exam-help/pay-someone-to-take-azure-administrator-az-104-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Take Azure Solutions Architect Expert (Az-30) Exam for Me",
            url: "https://www.testhelpnow.com/proctored-it-exam-help/pay-someone-to-take-azure-solutions-architect-expert-az-30-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Take (RHCSA Exam  EX-200) for Me",
            url: "https://www.testhelpnow.com/proctored-it-exam-help/pay-some-to-take-rhcsa-exam-ex200-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Take Linux Foundation Certified System Administrator (LFCS) Exam for Me",
            url: "https://www.testhelpnow.com/proctored-it-exam-help/pay-someone-to-take-lfcs-certification-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Take ISC² Certified Information Systems Security Professional (CISSP)for Me",
            url: "https://www.testhelpnow.com/proctored-it-exam-help/pay-someone-to-take-isc2-cissp-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Take ISACA Certified Information Systems Auditor (CISA)for Me ",
            url: "https://www.testhelpnow.com/proctored-it-exam-help/pay-someone-to-take-isaca-cisa-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Take ISACA Certified Information Security Manager (CISM) for Me",
            url: "https://www.testhelpnow.com/proctored-it-exam-help/pay-someone-to-take-isaca-cism-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Take Fortinet Certified Associate (FCA / NSE 1-3) Exam for me",
            url: "https://www.testhelpnow.com/proctored-it-exam-help/pay-someone-to-take-fortinet-fca-certification-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Take Fortinet Certified Professional (FCP / NSE 4-6) for Me",
            url: "https://www.testhelpnow.com/proctored-it-exam-help/pay-someone-to-take-fortinet-fcp-nse4-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Take Google Cloud Associate Cloud Engineer (ACE) Exam for Me",
            url: "https://www.testhelpnow.com/proctored-it-exam-help/pay-someone-to-pass-gcp-associate-cloud-engineer-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Take Google Cloud Professional Cloud Architect (PCA) Exam for me",
            url: "https://www.testhelpnow.com/proctored-it-exam-help/pay-someone-to-pass-gcp-professional-cloud-architect-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Take Oracle Cloud Infrastructure Foundations (OCI) Exam for Me",
            url: "https://www.testhelpnow.com/proctored-it-exam-help/pay-someone-to-pass-oracle-cloud-infrastructure-foundations-exam-for-me",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Take Oracle Certified Professional Java SE Exam for Me",
            url: "https://www.testhelpnow.com/proctored-it-exam-help/pay-someone-to-pass-oracle-java-se-professional-exam-for-me",
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
