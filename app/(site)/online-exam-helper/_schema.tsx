export default function OnlineExamHelpSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      // ── General Online Exam Help ─────────────────────────────────────
      {
        "@type": "Question",
        name: "What is online exam help and how does it work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Online exam help is a professional service that assists students and professionals with preparing for and completing exams administered through digital platforms. The process involves submitting your exam details, being matched with a subject expert, and receiving either preparation support or full exam completion. Reputable providers use secure, confidential methods and often offer score guarantees.",
        },
      },
      {
        "@type": "Question",
        name: "What types of online exams do you support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We support all major categories of online exams including academic exams (Canvas, Blackboard, Moodle, D2L), professional certification exams (CompTIA, AWS, PMP, NCLEX, CPA, CFA), and standardized tests (GRE, GMAT, LSAT, TOEFL). Our experts are trained on every major proctoring platform including ProctorU, Examity, Proctorio, Pearson VUE, and Respondus LockDown Browser.",
        },
      },
      // ── Security & Confidentiality ──────────────────────────────────
      {
        "@type": "Question",
        name: "Is using an online exam help service legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Using online exam help services is not illegal in a criminal sense, but it may violate your institution's academic integrity policy. Consequences vary by school and can range from failing grades to expulsion. Always review your student handbook and understand the specific policies before engaging any service.",
        },
      },
      {
        "@type": "Question",
        name: "Is my information kept confidential when using your service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Our services utilize AES-256 encryption, and we never store personal data after sessions. All exam takers and technicians sign strict NDAs. Your exam content, credentials, and identity are never recorded or shared, ensuring total confidentiality with our proxy exam services.",
        },
      },
      // ── Technical & Proctoring ──────────────────────────────────────
      {
        "@type": "Question",
        name: "Can your services bypass proctoring software like ProctorU or Examity?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Professional services are trained to work with major proctoring platforms like ProctorU, Examity, and Proctorio. We use advanced technical methods including secure proxy routing, VPNs, and screen-masking technologies to navigate these systems. However, no method is 100% risk-free, and students should understand the potential consequences.",
        },
      },
      {
        "@type": "Question",
        name: "What if I have technical issues during my proctored exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our 24/7 support team can instantly join your session to resolve issues like disconnections, software crashes, or webcam problems without disrupting your exam progress. Our exam takers are trained to handle any technical challenge through our secure proxy services.",
        },
      },
      {
        "@type": "Question",
        name: "Do you help with system setup before the exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our service includes pre-exam checks including system compatibility tests, software installation, mock proctoring sessions, and configuration of all required exam settings. Our team ensures your environment is fully optimized before the exam begins.",
        },
      },
      // ── Pricing & Guarantees ────────────────────────────────────────
      {
        "@type": "Question",
        name: "How much does online exam help typically cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pricing varies by exam complexity and urgency. Standard academic exams typically range from $200–$500, while high-stakes professional certification exams can cost $500–$2,000 or more. Tutoring and prep services generally cost $50–$150 per session. Rush orders within 24–48 hours usually carry a 25–50% premium.",
        },
      },
      {
        "@type": "Question",
        name: "What is your refund or score guarantee policy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer a pass or first-time refund guarantee. In the highly unlikely event that a target passing score is not achieved, we provide a full refund of your payment or a complimentary retake. All services come with clear score guarantees outlined before booking.",
        },
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Online Exam Help - Professional Exam Taker and Proxy Services",
    alternateName:
      "Take My Online Exam For Me - Proctored Exam Help Support",
    url: "https://www.testhelpnow.com/online-exam-help",
    description:
      "Expert professional exam taker and proxy services for all online proctored exams including academic tests, professional certifications, and standardized tests. Our certified exam takers provide secure proxy services covering identity verification, lockdown browser setup, AI behaviour monitoring, pre-exam system checks, and 24/7 live session support with complete anonymity.",
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
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "Australia" },
        { "@type": "Country", name: "Europe" },
      ],
    },
    serviceType: "Online Exam Help and Proxy Services",
    category: "Education Support Services",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Online Exam Help Service Plans",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Academic Online Exam Help - University & College Exams",
            url: "https://www.testhelpnow.com/online-exam-help/academic-exams",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Professional Certification Exam Help - CompTIA, AWS, PMP",
            url: "https://www.testhelpnow.com/online-exam-help/certification-exams",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Standardized Test Help - GRE, GMAT, LSAT, TOEFL",
            url: "https://www.testhelpnow.com/online-exam-help/standardized-tests",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Nursing Exam Help - NCLEX and Healthcare Certifications",
            url: "https://www.testhelpnow.com/online-exam-help/nclex",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IT Certification Exam Help - Cisco, CompTIA, AWS, Azure",
            url: "https://www.testhelpnow.com/online-exam-help/it-certifications",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Finance & Accounting Exam Help - CPA, CFA, CMA",
            url: "https://www.testhelpnow.com/online-exam-help/finance-exams",
          },
        },
      ],
    },
    audience: {
      "@type": "Audience",
      audienceType:
        "Students and professionals seeking professional exam taker and proxy services for online proctored academic, certification, and standardized exams",
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