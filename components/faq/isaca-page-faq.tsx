"use client";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  FileCheck,
  BarChart,
} from "lucide-react";
import { useState } from "react";

export default function ISACAFAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "ISACA Core Certifications: CISA, CISM & CRISC",
      icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
      questions: [
        {
          question: "Can I reliably pay someone to take my ISACA exam for me?",
          answer: (
            <>
              Yes, absolutely. Our platform connects you with a highly qualified
              IT governance and security exam taker who specializes in audit
              frameworks, security management, risk control, and compliance
              standards. When you choose to pay someone to take my ISACA exam
              for me, we manage the entire lifecycle of the testing appointment
              from scheduling coordination to final score verification, ensuring
              a guaranteed passing result without any career hassle.
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  We also offer similar services for:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-security-plus-exam-for-me"
                    className="text-xs bg-blue-50 text-primary px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    CompTIA Security+
                  </Link>
                  <Link
                    href="/pay-someone-to-take-ec-council-exam-for-me/ceh"
                    className="text-xs bg-blue-50 text-primary px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    EC-Council CEH
                  </Link>
                  <Link
                    href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-cysa-plus-exam-for-me"
                    className="text-xs bg-blue-50 text-primary px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    CompTIA CySA+
                  </Link>
                  <Link
                    href="/pay-someone-to-take-azure-exam-for-me/az-500"
                    className="text-xs bg-blue-50 text-primary px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    Azure AZ-500
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question:
            "How do I get started with a professional exam taker for my ISACA test?",
          answer: (
            <>
              Getting started is simple and streamlined. You just provide us
              with your preferred testing window and registration timeline. We
              will then assign a dedicated, certified exam taker to your profile
              who is an expert in the exact ISACA domains covered by the exam.
              They handle complex scenario-based questions covering COBIT
              frameworks, risk assessment methodologies, and security governance
              seamlessly while you maintain full oversight of the process.
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  Prefer a different certification path?
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/pay-someone-to-take-isaca-exam-for-me/cisa"
                    className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full hover:bg-emerald-100 transition-colors"
                  >
                    Start with CISA →
                  </Link>
                  <Link
                    href="/pay-someone-to-take-isaca-exam-for-me/cism"
                    className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full hover:bg-emerald-100 transition-colors"
                  >
                    Start with CISM →
                  </Link>
                  <Link
                    href="/pay-someone-to-take-isaca-exam-for-me/crisc"
                    className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full hover:bg-emerald-100 transition-colors"
                  >
                    Start with CRISC →
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question: "How quickly can someone take my online ISACA exam?",
          answer:
            "Most requests are completed within 48 to 72 hours from your first contact. For urgent situations, we offer expedited 24-hour service. Contact us immediately with your exam date and we will accommodate you.",
        },
        {
          question:
            "How much does it cost to pay someone to take my ISACA exam for me?",
          answer: (
            <>
              Our pricing models are fully customized to match your specific
              timeline and the certification level you need to clear. Core
              certifications like CISA and CISM have competitive pricing
              compared to advanced tracks like CGEIT. When you decide to pay
              someone to take my ISACA exam for me, we provide a transparent,
              all-inclusive quote that covers the technical setup, secure proxy
              configurations, and the fee for your assigned specialist.
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">
                    Looking for other certification pricing?
                  </span>{" "}
                  <Link
                    href="/pay-someone-to-take-comptia-exam-for-me"
                    className="text-primary hover:underline"
                  >
                    CompTIA exam costs
                  </Link>
                  {" • "}
                  <Link
                    href="/pay-someone-to-take-azure-exam-for-me"
                    className="text-primary hover:underline"
                  >
                    Azure exam costs
                  </Link>
                  {" • "}
                  <Link
                    href="/pay-someone-to-take-aws-exam-for-me"
                    className="text-primary hover:underline"
                  >
                    AWS exam costs
                  </Link>
                </p>
              </div>
            </>
          ),
        },
        {
          question:
            "How far in advance do I need to book a professional exam taker?",
          answer:
            "We highly recommend scheduling your slot at least three to five days before your desired testing date. This advance window allows our backend engineering team to perform system testing and ensure your local workspace is completely optimized. However, we also offer express booking slots if you need urgent take my exam help on short notice, depending on the availability of our certified IT governance professionals.",
        },
      ],
    },
    {
      category: "Pearson VUE, PSI & Proxy Compatibility",
      icon: <FileCheck className="w-5 h-5 text-emerald-600" />,
      questions: [
        {
          question:
            "How do your proxy services protect my identity and registration profile?",
          answer: (
            <>
              We prioritize operational anonymity above all else. Our premium
              proxy services utilize secure, highly customized hardware layers
              and custom network configurations to establish a clean connection.
              This ensures that when our expert exam taker takes the exam on
              your behalf, the connection appears entirely native, leaving
              absolutely zero digital footprints or registration red flags on
              the testing platform.
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  Our proxy services also support:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/pay-someone-to-take-aws-exam-for-me"
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    AWS exams
                  </Link>
                  <Link
                    href="/pay-someone-to-take-azure-exam-for-me"
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    Azure exams
                  </Link>
                  <Link
                    href="/pay-someone-to-take-comptia-exam-for-me"
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    CompTIA exams
                  </Link>
                  <Link
                    href="/pay-someone-to-take-ec-council-exam-for-me"
                    className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    EC-Council exams
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question:
            "Will anyone know that I decided to pay someone to take my ISACA exam for me?",
          answer:
            "Never. Our platform operates under a strict, military-grade confidentiality framework. All client interactions, personal data, and transaction details are completely encrypted and restricted from external access. The deployment of our specialized proxy services is handled discreetly, meaning your testing secrets and professional profile remain 100 percent confidential and safe.",
        },
        {
          question:
            "Are your proxy services compatible with the latest Pearson VUE and PSI proctoring updates?",
          answer:
            "Yes, our network protocols are constantly updated to stay ahead of platform security modifications. Our specialized proxy services operate beneath the operating system layer, meaning they do not trigger any background process warnings or security flags inside proctoring browsers. Your virtual environment remains completely clean, safe, and fully undetectable to AI-driven behavior monitoring tools used by ISACA testing partners.",
        },
        {
          question:
            "What technical setup is required on my end to utilize your proxy services?",
          answer:
            "You do not need any advanced technical expertise or specialized hardware. Our backend engineering team handles all the heavy lifting. Before your scheduled exam time, we establish a secure baseline workspace utilizing our advanced proxy services to map out an error-free testing bridge. We run background diagnostics ahead of time to confirm the link is fully stabilized for the exam taker.",
        },
      ],
    },
    {
      category: "ISACA Advanced Certifications: CGEIT & CDPSE",
      icon: <BarChart className="w-5 h-5 text-purple-500" />,
      questions: [
        {
          question:
            "Can your platform handle the complex scenario layouts inside ISACA advanced exams?",
          answer: (
            <>
              Yes, our system is engineered specifically for IT governance and
              security certification exams. The ISACA advanced evaluations
              include deep, multi-paragraph scenario questions and real-world
              case studies that test enterprise IT governance, strategic
              alignment, data privacy frameworks, and compliance requirements.
              Because we connect using advanced, real-time proxy frameworks
              rather than lagging software mirrors, our exam taker can evaluate
              and select correct responses naturally, aligning perfectly with
              human interaction metrics.
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  Related advanced certifications we cover:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/pay-someone-to-take-ec-council-exam-for-me/cciso"
                    className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-100 transition-colors"
                  >
                    EC-Council CCISO
                  </Link>
                  <Link
                    href="/blog/pay-someone-to-pass-my-pmp-exam-fast-safe-and-100-guaranteed-pmp-certification"
                    className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-100 transition-colors"
                  >
                    PMP
                  </Link>
                  <Link
                    href="/pay-someone-to-take-itil-v4"
                    className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-100 transition-colors"
                  >
                    ITIL v4
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question:
            "Can a single exam taker assist me with multiple ISACA certifications?",
          answer: (
            <>
              Absolutely. Many of our clients utilize our services to bundle
              multiple certifications together, such as taking the CISA exam
              followed by CISM or CRISC to secure their enterprise-ready
              portfolio quickly. We can pair you with a dedicated exam taker who
              holds multiple active ISACA credentials, allowing you to
              systematically build a highly competitive IT governance and
              security portfolio in a fraction of the traditional time.
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">
                    Explore other certification bundles:
                  </span>{" "}
                  <Link
                    href="/pay-someone-to-take-comptia-exam-for-me"
                    className="text-primary hover:underline"
                  >
                    CompTIA Stackable Certifications
                  </Link>
                  {" • "}
                  <Link
                    href="/pay-someone-to-take-aws-exam-for-me"
                    className="text-primary hover:underline"
                  >
                    AWS Certification Path
                  </Link>
                  {" • "}
                  <Link
                    href="/pay-someone-to-take-azure-exam-for-me"
                    className="text-primary hover:underline"
                  >
                    Microsoft Azure Role-Based Path
                  </Link>
                </p>
              </div>
            </>
          ),
        },
        {
          question:
            "Why do professionals choose specialized proxy services over traditional studying for ISACA exams?",
          answer: (
            <>
              Preparing for advanced certifications like CISA, CISM, or CRISC
              requires mastering complex governance frameworks, risk management
              methodologies, security controls, and privacy regulations, which
              takes hundreds of hours of study time. Busy IT audit and security
              professionals choose our specialized proxy services to bypass this
              grueling preparation period entirely. It is a strategic career
              decision that protects your time, eliminates testing anxiety, and
              guarantees a passing credential on your first attempt.
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  Other professionals choose our services for:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/pay-someone-to-take-cisco-ccna-exam-for-me"
                    className="text-xs bg-orange-50 text-orange-700 px-3 py-1 rounded-full hover:bg-orange-100 transition-colors"
                  >
                    Cisco CCNA
                  </Link>
                  <Link
                    href="/pay-someone-to-take-ec-council-exam-for-me/ceh"
                    className="text-xs bg-orange-50 text-orange-700 px-3 py-1 rounded-full hover:bg-orange-100 transition-colors"
                  >
                    CEH Certification
                  </Link>
                  <Link
                    href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-security-plus-exam-for-me"
                    className="text-xs bg-orange-50 text-orange-700 px-3 py-1 rounded-full hover:bg-orange-100 transition-colors"
                  >
                    CompTIA Security+
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question:
            "Can your exam takers handle the complex ISACA scenario-based questions?",
          answer: (
            <>
              Yes. Our certified exam takers are experienced IT audit, risk, and
              security professionals who work with ISACA frameworks daily. They
              can navigate complex scenario-based questions involving COBIT
              governance frameworks, NIST compliance, ISO standards, risk
              assessment methodologies, and data privacy by design principles
              with total proficiency and accuracy.
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">
                    Our exam takers also specialize in:
                  </span>{" "}
                  <Link
                    href="/pay-someone-to-take-aws-exam-for-me/take-my-aws-security-specialty-exam-for-me"
                    className="text-primary hover:underline"
                  >
                    AWS Security Specialty
                  </Link>
                  {" • "}
                  <Link
                    href="/pay-someone-to-take-azure-exam-for-me/az-500"
                    className="text-primary hover:underline"
                  >
                    Azure AZ-500
                  </Link>
                  {" • "}
                  <Link
                    href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-cysa-plus-exam-for-me"
                    className="text-primary hover:underline"
                  >
                    CompTIA CySA+
                  </Link>
                </p>
              </div>
            </>
          ),
        },
        {
          question:
            "What happens if an unexpected issue impacts my ISACA validation result?",
          answer: (
            <>
              We stand behind our complete pass-assurance framework. In the
              highly unlikely event of a technical disruption, local ISP
              dropout, or sudden proctor engine crash, our team provides
              comprehensive support to reschedule your appointment or completely
              refund your initial investment. When you trust an elite exam taker
              on our platform, you are locking in an elite, stress-free
              certification route backed by ironclad outcome guarantees.
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  Our guarantee applies to all certification exams including:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/pay-someone-to-take-aws-exam-for-me"
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
                  >
                    AWS Certifications
                  </Link>
                  <Link
                    href="/pay-someone-to-take-azure-exam-for-me"
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
                  >
                    Azure Certifications
                  </Link>
                  <Link
                    href="/pay-someone-to-take-comptia-exam-for-me"
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
                  >
                    CompTIA Certifications
                  </Link>
                  <Link
                    href="/pay-someone-to-take-ec-council-exam-for-me"
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
                  >
                    EC-Council Certifications
                  </Link>
                </div>
              </div>
            </>
          ),
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
            ISACA Certification Assistance FAQ
          </h2>
          <p className="text-lg text-gray-600">
            Get explicit answers regarding secure environment setup, proctor
            safety, and complex IT governance and security scenarios.
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
            Need to verify a specific ISACA certification exam timeline?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/order"
              className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-900 transition-colors shadow-sm inline-block"
            >
              Configure Your Exam Order
            </Link>
            <Link
              href="/pay-someone-to-take-isaca-exam-for-me/cisa"
              className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors inline-block"
            >
              Learn About CISA
            </Link>
            <Link
              href="/pay-someone-to-take-isaca-exam-for-me/cism"
              className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors inline-block"
            >
              Learn About CISM
            </Link>
          </div>

          <div className="mt-4 text-sm text-gray-500">
            <span>Or explore other certifications: </span>
            <Link
              href="/pay-someone-to-take-comptia-exam-for-me"
              className="text-primary hover:underline"
            >
              CompTIA
            </Link>
            <span className="mx-1">•</span>
            <Link
              href="/pay-someone-to-take-azure-exam-for-me"
              className="text-primary hover:underline"
            >
              Azure
            </Link>
            <span className="mx-1">•</span>
            <Link
              href="/pay-someone-to-take-aws-exam-for-me"
              className="text-primary hover:underline"
            >
              AWS
            </Link>
            <span className="mx-1">•</span>
            <Link
              href="/pay-someone-to-take-ec-council-exam-for-me"
              className="text-primary hover:underline"
            >
              EC-Council
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
