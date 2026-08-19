"use client";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ChevronDown,
  ChevronUp,
  Terminal,
  Network,
  Lock,
} from "lucide-react";
import { useState } from "react";

export default function ECCouncilFAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "EC-Council Core Certifications: CEH, ECSA & CHFI",
      icon: <Terminal className="w-5 h-5 text-blue-500" />,
      questions: [
        {
          question: "Can I reliably pay someone to take my EC-Council exam for me?",
          answer:
            "Yes, absolutely. Our platform connects you with a highly qualified ethical hacking and security professional who specializes in penetration testing, vulnerability assessment, digital forensics, and network defense. When you choose to pay someone to take my EC-Council exam for me, we manage the entire lifecycle of the testing appointment from scheduling coordination to final score verification, ensuring a guaranteed passing result without any career hassle.",
        },
        {
          question: "How do I get started with a professional exam taker for my EC-Council test?",
          answer:
            "Getting started is simple and streamlined. You just provide us with your preferred testing window and registration timeline. We will then assign a dedicated, certified exam taker to your profile who is an expert in the exact EC-Council domains covered by the exam. They handle complex practical simulations covering penetration testing methodologies, network defense strategies, and digital forensics seamlessly while you maintain full oversight of the process.",
        },
        {
          question: "How quickly can someone take my online EC-Council exam?",
          answer:
            "Most requests are completed within 48 to 72 hours from your first contact. For urgent situations, we offer expedited 24-hour service. Contact us immediately with your exam date and we will accommodate you.",
        },
        {
          question: "How much does it cost to pay someone to take my EC-Council exam for me?",
          answer:
            "Our pricing models are fully customized to match your specific timeline and the certification level you need to clear. Core certifications like CEH and ECSA have competitive pricing compared to advanced tracks like LPT. When you decide to pay someone to take my EC-Council exam for me, we provide a transparent, all-inclusive quote that covers the technical setup, secure proxy configurations, and the fee for your assigned ethical hacking specialist.",
        },
        {
          question: "How far in advance do I need to book a professional exam taker?",
          answer:
            "We highly recommend scheduling your slot at least three to five days before your desired testing date. This advance window allows our backend engineering team to perform system testing and ensure your local workspace is completely optimized. However, we also offer express booking slots if you need urgent take my exam help on short notice, depending on the availability of our certified cybersecurity professionals.",
        },
      ],
    },
    {
      category: "EC-Council Practical Exams & Proxy Compatibility",
      icon: <Network className="w-5 h-5 text-emerald-600" />,
      questions: [
        {
          question: "How do your proxy services protect my identity and registration profile?",
          answer:
            "We prioritize operational anonymity above all else. Our premium proxy services utilize secure, highly customized hardware layers and custom network configurations to establish a clean connection. This ensures that when our expert exam taker takes the exam on your behalf, the connection appears entirely native, leaving absolutely zero digital footprints or registration red flags on the EC-Council testing platform.",
        },
        {
          question: "Will anyone know that I decided to pay someone to take my EC-Council exam for me?",
          answer:
            "Never. Our platform operates under a strict, military-grade confidentiality framework. All client interactions, personal data, and transaction details are completely encrypted and restricted from external access. The deployment of our specialized proxy services is handled discreetly, meaning your testing secrets and professional profile remain 100 percent confidential and safe.",
        },
        {
          question: "Are your proxy services compatible with EC-Council's practical exam requirements?",
          answer:
            "Yes, our network protocols are constantly updated to stay ahead of platform security modifications. Our specialized proxy services operate beneath the operating system layer, meaning they do not trigger any background process warnings or security flags inside proctoring browsers. Our exam takers are fully trained to handle EC-Council's practical simulations, including penetration testing labs, vulnerability assessments, and forensic analysis scenarios with complete proficiency.",
        },
        {
          question: "What technical setup is required on my end to utilize your proxy services?",
          answer:
            "You do not need any advanced technical expertise or specialized hardware. Our backend engineering team handles all the heavy lifting. Before your scheduled exam time, we establish a secure baseline workspace utilizing our advanced proxy services to map out an error-free testing bridge. We run background diagnostics ahead of time to confirm the link is fully stabilized for the exam taker.",
        },
        {
          question: "Can your exam takers handle EC-Council's hands-on practical simulations?",
          answer:
            "Yes. Our certified exam takers are experienced ethical hacking, penetration testing, and digital forensics professionals who work with EC-Council frameworks daily. They can navigate complex practical simulations involving real-world hacking scenarios, network defense strategies, incident response, and forensic analysis with total proficiency and accuracy.",
        },
      ],
    },
    {
      category: "EC-Council Advanced Certifications: CND, CCISO & LPT",
      icon: <Lock className="w-5 h-5 text-purple-500" />,
      questions: [
        {
          question: "Can your platform handle the complex practical scenarios inside EC-Council advanced exams?",
          answer:
            "Yes, our system is engineered specifically for cybersecurity and ethical hacking certification exams. The EC-Council advanced evaluations include deep, multi-layered practical simulations and real-world case studies that test penetration testing, network defense, security leadership, and strategic governance. Because we connect using advanced, real-time proxy frameworks rather than lagging software mirrors, our exam taker can evaluate and execute practical responses naturally, aligning perfectly with human interaction metrics.",
        },
        {
          question: "Can a single exam taker assist me with multiple EC-Council certifications?",
          answer:
            "Absolutely. Many of our clients utilize our services to bundle multiple certifications together, such as taking the CEH exam followed by ECSA or LPT to secure their comprehensive ethical hacking portfolio quickly. We can pair you with a dedicated exam taker who holds multiple active EC-Council credentials, allowing you to systematically build a highly competitive cybersecurity and penetration testing portfolio in a fraction of the traditional time.",
        },
        {
          question: "Why do professionals choose specialized proxy services over traditional studying for EC-Council exams?",
          answer:
            "Preparing for advanced certifications like CEH, ECSA, or LPT requires mastering complex penetration testing methodologies, network defense strategies, and digital forensics techniques, which takes hundreds of hours of hands-on practice. Busy cybersecurity professionals choose our specialized proxy services to bypass this grueling preparation period entirely. It is a strategic career decision that protects your time, eliminates testing anxiety, and guarantees a passing credential on your first attempt.",
        },
        {
          question: "Can your exam takers handle EC-Council's scenario-based and practical questions?",
          answer:
            "Yes. Our certified exam takers are experienced ethical hacking, security analysis, and digital forensics professionals who work with EC-Council frameworks daily. They can navigate complex scenario-based questions involving penetration testing, vulnerability assessment, incident response, and network defense with total proficiency and accuracy.",
        },
        {
          question: "What happens if an unexpected issue impacts my EC-Council validation result?",
          answer:
            "We stand behind our complete pass-assurance framework. In the highly unlikely event of a technical disruption, local ISP dropout, or sudden proctor engine crash, our team provides comprehensive support to reschedule your appointment or completely refund your initial investment. When you trust an elite exam taker on our platform, you are locking in an elite, stress-free certification route backed by ironclad outcome guarantees.",
        },
      ],
    },
  ];

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-3">
            EC-Council Certification Assistance FAQ
          </h2>
          <p className="text-lg text-gray-600">
            Get explicit answers regarding ethical hacking exam support, practical simulation handling, and secure proxy services for EC-Council certifications.
          </p>
        </motion.div>

        <div className="space-y-8">
          {faqs.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              <div className="flex items-center bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="mr-3">{category.icon}</div>
                <h3 className="text-xl font-semibold text-secondary">
                  {category.category}
                </h3>
              </div>

              <div className="divide-y divide-gray-200">
                {category.questions.map((item, index) => {
                  const globalIndex =
                    faqs
                      .slice(0, catIndex)
                      .reduce((acc, curr) => acc + curr.questions.length, 0) +
                    index;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <button
                        onClick={() => toggleQuestion(globalIndex)}
                        className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-gray-50/50 transition-colors hover:cursor-pointer"
                      >
                        <span className="font-medium text-gray-800">
                          {item.question}
                        </span>
                        {activeIndex === globalIndex ? (
                          <ChevronUp className="w-5 h-5 text-primary shrink-0 ml-4" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 ml-4" />
                        )}
                      </button>

                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: activeIndex === globalIndex ? "auto" : 0,
                          opacity: activeIndex === globalIndex ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm md:text-base bg-gray-50/20">
                          {item.answer}
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Need to verify a specific EC-Council certification exam timeline?
          </p>
          <Link
            href="/order"
            className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-900 transition-colors shadow-sm inline-block"
          >
            Configure Your Exam Order
          </Link>
        </motion.div>
      </div>
    </section>
  );
}