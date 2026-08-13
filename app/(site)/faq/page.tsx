"use client";
import Link from "next/link";
import FAQSchema from "./_schema";

const faqs = [
  // ── SERVICE & ORDERING ──
  {
    question: "What types of proctored IT exams do you support?",
    answer:
      "We support a comprehensive range of professional IT certifications across all major vendors. This includes <a href='/pay-someone-to-take-itil-exam-for-me' class='text-primary-700 underline'>ITIL 4</a> (all modules), <a href='/pay-someone-to-take-aws-exam-for-me' class='text-primary-700 underline'>AWS</a> (SAA-C03, SAP-C02), <a href='/pay-someone-to-take-azure-exam-for-me' class='text-primary-700 underline'>Microsoft Azure</a> (AZ-104, AZ-305), <a href='/pay-someone-to-take-comptia-exam-for-me' class='text-primary-700 underline'>CompTIA</a> (Security+, Network+, A+), <a href='/pay-someone-to-take-cisco-ccna-exam-for-me' class='text-primary-700 underline'>Cisco CCNA</a>, <a href='/pay-someone-to-take-ec-council-exam-for-me' class='text-primary-700 underline'>EC-Council</a>, <a href='/pay-someone-to-take-isaca-exam-for-me' class='text-primary-700 underline'>ISACA</a>, Oracle, Red Hat, and many more. If you don't see your specific exam code listed, simply click our <span onclick='openLiveChat(event)' class='text-primary-700 underline cursor-pointer'>Live Chat</span> icon to verify availability instantly.",
  },
  {
    question: "How do I get started? Do I need to talk to someone first?",
    answer:
      "You have two convenient options: (1) <a href='/order' class='text-primary-700 underline'>Place your order</a> directly through our secure checkout, or (2) Click our <span onclick='openLiveChat(event)' class='text-primary-700 underline cursor-pointer'>Live Chat</span> icon to consult with a dedicated exam advisor. They will listen to your specific goals, certification track, and timeline, then recommend the best support package for your needs.",
  },
  {
    question: "Can you take my entire proctored IT exam for me?",
    answer:
      "Yes. Our professional exam takers handle your entire proctored IT exam with complete confidentiality and guaranteed passing results. We manage the entire process from scheduling to final score verification. Our takers are certified professionals with deep, hands-on expertise in their respective domains. Ready to get started? <a href='/order' class='text-primary-700 underline'>Place your order now</a> and let our experts handle your certification.",
  },
  {
    question: "How much does it cost to use your proctored exam service?",
    answer:
      "Our pricing is customized based on your specific exam, timeline, and vendor requirements. We provide a transparent, all-inclusive quote that covers: technical setup and secure proxy configuration, assignment of a certified expert, full exam execution, result verification, and 24/7 support throughout the process. <a href='/contact' class='text-primary-700 underline'>Contact us for a free, no-obligation quote</a> tailored to your specific exam.",
  },

  // ── SCHEDULING & LOGISTICS ──
  {
    question: "Do you work across different time zones?",
    answer:
      "Absolutely. We have a global network of certified specialists operating across all major time zones. When you provide your details, simply let us know your exact time zone and preferred testing window. We will align your specialist's schedule perfectly with yours, no matter where you are in the world.",
  },
  {
    question: "How quickly can someone take my proctored IT exam?",
    answer:
      "Most requests are completed within 48-72 hours from your first contact. For urgent situations, we offer an expedited 24-hour service. Every exam requires specific domain expertise, and we match you with a qualified taker who meets your timeline. <span onclick='openLiveChat(event)' class='text-primary-700 underline cursor-pointer'>Contact us immediately</span> with your exam date and we will accommodate your needs.",
  },
  {
    question: "How far in advance do I need to book a professional exam taker?",
    answer:
      "We highly recommend scheduling your slot at least three to five days before your desired testing date. This advance window allows our backend engineering team to: perform thorough system testing, optimize your workspace for the specific proctoring software, confirm the secure proxy connection is 100% stable, and match you with the most qualified expert. However, we do offer express booking for urgent needs based on specialist availability.",
  },

  // ── TECHNICAL EXECUTION & SECURITY ──
  {
    question: "How does your service work technically? Will the proctor know?",
    answer:
      "We utilize a seamless, professional remote execution framework. Our proxy services operate beneath the operating system layer and are 100% undetectable by all major proctoring software (including Pearson VUE, ExamShield, PSI, and Kryterion). Our technology is constantly updated to stay ahead of platform modifications. Your environment remains completely clean and fully undetectable to AI-driven behavior monitoring tools. <a href='/how-it-works' class='text-primary-700 underline'>Learn more about our technology here</a>.",
  },
  {
    question: "Is your service 100% undetectable by proctoring software?",
    answer:
      "Yes. Our proxy services operate beneath the OS kernel layer and are 100% undetectable by any proctoring software. We stay ahead of the curve by continuously updating our technology to counteract platform security patches. Even exams with the strictest security measures (like video monitoring and browser lockdowns) are handled seamlessly by our framework.",
  },
  {
    question: "Can your exam takers handle complex scenario-based questions?",
    answer:
      "Yes. Our exam takers are certified, active professionals who work with their respective technologies daily. They are specifically trained to navigate complex scenario-based, drag-and-drop, and performance-based questions found in advanced IT exams. They don't just memorize answers; they understand the core concepts to ensure a passing score.",
  },
  {
    question: "What technical setup is required for my exam?",
    answer:
      "You do not need any advanced technical expertise. Our backend engineering team handles all the heavy lifting, including system testing, secure proxy configuration, and proctoring setup. You only need: a stable high-speed internet connection, a computer with a webcam and microphone, Windows or macOS, and a quiet, private room free of distractions for the exam.",
  },

  // ── PRIVACY & CONFIDENTIALITY ──
  {
    question: "Is my personal information kept private and secure?",
    answer:
      "Absolutely. We treat your privacy with the utmost seriousness. We use military-grade, end-to-end encryption for all data transfers. Your personal details, exam schedule, and payment information are stored securely on our platform. Your information is only shared with your assigned technical specialist strictly on a need-to-know basis. <a href='/privacy' class='text-primary-700 underline'>Read our full Privacy Policy</a>.",
  },
  {
    question: "What encryption standards do you use to protect my data?",
    answer:
      "We utilize enterprise-grade AES-256 encryption for all data transmissions. All client communications are secured through end-to-end encryption protocols, and we maintain strict role-based access controls to ensure your registration details, transaction records, and personally identifiable information remain completely protected at all times.",
  },
  {
    question: "Will anyone know that I used your service?",
    answer:
      "Never. Our platform operates under a strict, military-grade confidentiality framework. All client interactions and transaction details are completely encrypted and restricted from external access. The deployment of our specialized proxy services is handled discretely, ensuring your testing secrets and professional profile remain 100% confidential and safe.",
  },

  // ── RESULTS, GUARANTEES & POLICIES ──
  {
    question: "How do I receive my proctored exam results?",
    answer:
      "Once your specialist has successfully completed the examination, your official passing results and certification documentation are generated immediately. We securely deliver your passing results via your account dashboard. You can then download your digital badge or verify your achievement directly through the official vendor's portal.",
  },
  {
    question: "What happens if I fail the exam with your service?",
    answer:
      "We stand behind our 100% pass guarantee. If you do not achieve a passing score on your proctored exam due to a technical or execution error on our side, we offer a full refund of your service investment. Our exam takers have a proven track record across all major vendors, and we take every precaution to ensure a passing result on your first attempt.",
  },

  // ── LEGAL, COMPLIANCE & POLICIES ──
  {
    question: "Is using this service legal?",
    answer:
      "Our services are provided as professional exam preparation, technical guidance, and remote educational support. We advise all clients to review their specific certification vendor's policies regarding external assistance. We operate strictly within the bounds of our <a href='/terms' class='text-primary-700 underline'>Terms of Service</a> and User Agreement. It is our standard practice to ensure our clients are aware of their vendor's rules.",
  },
  {
    question: "Do these services violate the exam vendor's code of conduct?",
    answer:
      "Our services are designed as a form of expert-backed exam preparation and remote technical facilitation. We strongly recommend that all candidates review their vendor's specific Code of Conduct and Candidate Agreement before utilizing our support. We provide the tools and expertise to help you pass, but we operate transparently and ethically within the framework of the services we advertise.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 100% satisfaction guarantee. If we fail to deliver the service as promised due to a technical error on our side, you are eligible for a full refund or a free retake, depending on your preference. Refund requests must be submitted within 48 hours of your scheduled exam time. Please refer to our complete <a href='#' class='text-primary-700 underline'>Terms of Service</a> page for our detailed, full refund policy.",
  },
  {
    question: "How do you handle disputes or chargebacks?",
    answer:
      "We have a dedicated support and compliance team to handle any disputes. We encourage our clients to <span onclick='openLiveChat(event)' class='text-primary-700 underline cursor-pointer'>contact us via Live Chat</span> or email before initiating a chargeback. We are committed to resolving any issues amicably, fairly, and promptly. All client interactions are logged and encrypted to ensure a fair resolution process for both parties.",
  },
  {
    question: "Will my exam results be flagged by the vendor for review?",
    answer:
      "No. Our technical execution framework is designed to perfectly emulate a standard testing session. Because our experts are deeply knowledgeable in the subject matter, the exam completion metrics, speed, and answer patterns align with legitimate passing candidates. We ensure your results appear entirely organic to the vendor's review teams, preventing unnecessary audits.",
  },
];

export default function FAQPage() {
  return (
    <>
      <FAQSchema />
      <div className="mt-36 max-w-4xl mx-auto px-6 py-10 min-h-screen">
        <div className="text-center mb-12">
          <h2 className="headline font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a href="/contact" className="text-blue-600 hover:underline">
              Contact our support team
            </a>
          </p>
        </div>

        <section className="space-y-6">
          {faqs.map((faq, index) => (
            <article key={index} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p
                className="text-gray-700 [&>a]:text-primary-700 [&>a]:underline"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </article>
          ))}
        </section>

        <div className="mt-12 bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
          <p className="mb-4">
            Our support team is happy to help with any other questions you might
            have.
          </p>
          <Link href="/contact" className="inline-block btn cursor-pointer">
            Contact Support
          </Link>
        </div>
      </div>
    </>
  );
}
