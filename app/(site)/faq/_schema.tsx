export default function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of proctored IT exams do you support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We support a comprehensive range of professional IT certifications across all major vendors including ITIL 4, AWS, CompTIA, Microsoft, Cisco, PMI, Oracle, and many more.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get started? Do I need to talk to someone first?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You have two convenient options: (1) Browse our exam library and place your order directly through our secure checkout, or (2) Use our 24/7 Live Chat feature to consult with a dedicated exam advisor.",
        },
      },
      {
        "@type": "Question",
        name: "Can you take my entire proctored IT exam for me?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our professional exam takers handle your entire proctored IT exam with complete confidentiality and guaranteed passing results. We manage everything from scheduling to final score verification.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost to use your proctored exam service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our pricing is customized based on your specific exam, timeline, and vendor requirements. We provide a transparent, all-inclusive quote covering technical setup, expert assignment, exam execution, and result verification.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work across different time zones?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We have a global network of certified specialists operating across all major time zones. We will align your specialist's schedule perfectly with yours, no matter where you are in the world.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can someone take my proctored IT exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most requests are completed within 48-72 hours from your first contact. For urgent situations, we offer an expedited 24-hour service.",
        },
      },
      {
        "@type": "Question",
        name: "How far in advance do I need to book a professional exam taker?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We highly recommend scheduling your slot at least three to five days before your desired testing date. This allows our backend team to perform system testing, optimize your workspace, and confirm the secure proxy connection.",
        },
      },
      {
        "@type": "Question",
        name: "How does your service work technically? Will the proctor know?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We utilize a seamless, professional remote execution framework. Our proxy services operate beneath the OS layer and are 100% undetectable by all major proctoring software.",
        },
      },
      {
        "@type": "Question",
        name: "Is your service 100% undetectable by proctoring software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our proxy services operate beneath the OS kernel layer. We stay ahead of the curve by continuously updating our technology to counteract platform security patches.",
        },
      },
      {
        "@type": "Question",
        name: "Can your exam takers handle complex scenario-based questions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our exam takers are certified, active professionals who work with their respective technologies daily. They are trained to navigate complex scenario-based and performance-based questions.",
        },
      },
      {
        "@type": "Question",
        name: "What technical setup is required for my exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You do not need advanced technical expertise. We handle the heavy lifting. You only need: a stable internet connection, a computer with webcam/microphone, Windows/macOS, and a quiet, private room.",
        },
      },
      {
        "@type": "Question",
        name: "Is my personal information kept private and secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We use military-grade, end-to-end encryption for all data transfers. Your details are stored securely and only shared with your assigned specialist on a need-to-know basis.",
        },
      },
      {
        "@type": "Question",
        name: "What encryption standards do you use to protect my data?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We utilize enterprise-grade AES-256 encryption for all data transmissions and maintain strict role-based access controls to protect your registration details and records.",
        },
      },
      {
        "@type": "Question",
        name: "Will anyone know that I used your service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Never. Our platform operates under a strict, military-grade confidentiality framework. All client interactions are encrypted and the deployment of our proxy services is handled discreetly.",
        },
      },
      {
        "@type": "Question",
        name: "How do I receive my proctored exam results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Once your specialist completes the examination, your official passing results are generated immediately. We securely deliver them via your account dashboard.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if I fail the exam with your service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We stand behind our 100% pass guarantee. If you do not achieve a passing score due to a technical error on our side, we offer a full refund of your service investment.",
        },
      },
      {
        "@type": "Question",
        name: "Is using this service legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our services are provided as professional exam preparation, technical guidance, and remote educational support. We operate strictly within the bounds of our Terms of Service and User Agreement.",
        },
      },
      {
        "@type": "Question",
        name: "Do these services violate the exam vendor's code of conduct?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our services are designed as expert-backed exam preparation. We strongly recommend that all candidates review their vendor's specific Code of Conduct before utilizing our support.",
        },
      },
      {
        "@type": "Question",
        name: "What is your refund policy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer a 100% satisfaction guarantee. If we fail to deliver due to a technical error, you are eligible for a full refund or free retake. Refund requests must be submitted within 48 hours of your scheduled exam time.",
        },
      },
      {
        "@type": "Question",
        name: "How do you handle disputes or chargebacks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We have a dedicated support and compliance team to handle disputes. We encourage clients to contact us directly before initiating a chargeback to resolve issues amicably and promptly.",
        },
      },
      {
        "@type": "Question",
        name: "Will my exam results be flagged by the vendor for review?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Our framework emulates a standard testing session. Our experts ensure the exam metrics and answer patterns align perfectly with legitimate passing candidates.",
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
        name: "FAQ",
        item: "https://www.testhelpnow.com/faq",
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Frequently Asked Questions — TestHelpNow",
    description:
      "Find answers to common questions about TestHelpNow's proctored IT exam assistance, payment options, security, legal compliance, and guaranteed results.",
    url: "https://www.testhelpnow.com/faq",
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
  };

  return (
    <>
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
