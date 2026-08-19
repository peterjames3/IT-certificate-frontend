"use client";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Server,
  Cloud,
} from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "Cloud Certifications",
      icon: <Cloud className="w-5 h-5 text-blue-500" />,
      questions: [
        {
          question: "Can I pay someone to take my AWS Solutions Architect exam?",
          answer: (
            <>
              Yes, you can hire our certified cloud engineers to take your AWS Solutions Architect exam on your behalf. We provide comprehensive proxy testing support for AWS Associate, Professional, and Specialty certs. Our specialized backend configurations ensure the session is completed safely through remote test delivery environments without triggers.
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  Popular AWS certifications we handle:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/pay-someone-to-take-aws-exam-for-me/take-my-aws-solutions-architect-associate-exam-for-me"
                    className="text-xs bg-blue-50 text-primary px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    AWS Solutions Architect Associate
                  </Link>
                  <Link
                    href="/pay-someone-to-take-aws-exam-for-me/take-my-aws-solutions-architect-professional-exam-for-me"
                    className="text-xs bg-blue-50 text-primary px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    AWS Solutions Architect Professional
                  </Link>
                  <Link
                    href="/pay-someone-to-take-aws-exam-for-me/take-my-aws-cloud-practitioner-exam-for-me"
                    className="text-xs bg-blue-50 text-primary px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    AWS Cloud Practitioner
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question: "Do you offer proxy testing for Microsoft Azure and Google Cloud exams?",
          answer: (
            <>
              Absolutely. We support the entire enterprise cloud ecosystem. Whether you need to pass the Azure Administrator (AZ-104), Azure Solutions Architect (AZ-305), or Google Cloud Certified Professional Engineer exam, our platform assigns a dedicated cloud expert to handle the live assessment with a guaranteed passing score.
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  Azure certifications we cover:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/pay-someone-to-take-azure-exam-for-me/az-104"
                    className="text-xs bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full hover:bg-cyan-100 transition-colors"
                  >
                    AZ-104
                  </Link>
                  <Link
                    href="/pay-someone-to-take-azure-exam-for-me/az-305"
                    className="text-xs bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full hover:bg-cyan-100 transition-colors"
                  >
                    AZ-305
                  </Link>
                  <Link
                    href="/pay-someone-to-take-azure-exam-for-me/az-900"
                    className="text-xs bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full hover:bg-cyan-100 transition-colors"
                  >
                    AZ-900
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question: "Can you help with Google Cloud Platform (GCP) certifications?",
          answer: (
            <>
              Yes, we support all major cloud platforms including Google Cloud Platform (GCP). Whether you&apos;re pursuing the Associate Cloud Engineer, Professional Cloud Architect, or Professional Data Engineer certification, our cloud experts can handle your GCP exam with the same secure proxy services we use for AWS and Azure exams.
            </>
          ),
        },
      ],
    },
    {
      category: "Security & Cybersecurity Certifications",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      questions: [
        {
          question: "How do you pass a CompTIA proctored test online safely?",
          answer: (
            <>
              To pass a CompTIA proctored test online safely, we deploy a secure, custom configuration on your machine before the exam starts. This setup is 100% invisible to lockdown browsers and remote monitoring software like Pearson VUE&apos;s OnVUE platform. You log in to clear the biometric/ID validation checks, and our expert seamlessly completes the exam answers without tripping flags.
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  Popular CompTIA certifications we handle:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-security-plus-exam-for-me"
                    className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full hover:bg-emerald-100 transition-colors"
                  >
                    Security+
                  </Link>
                  <Link
                    href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-network-plus-exam-for-me"
                    className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full hover:bg-emerald-100 transition-colors"
                  >
                    Network+
                  </Link>
                  <Link
                    href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-cysa-plus-exam-for-me"
                    className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full hover:bg-emerald-100 transition-colors"
                  >
                    CySA+
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question: "Can your system bypass Pearson VUE OnVUE and lock down web browsers?",
          answer: (
            <>
              Yes. Our hardware-level network mirroring methods run outside the virtual space, making them completely undetectable by advanced anti-cheat modules, OEM applications, or background processes. We execute a full pre-exam system compatibility check with you ahead of schedule to ensure total security.
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  Other security certifications we cover:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/pay-someone-to-take-ec-council-exam-for-me/ceh"
                    className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-100 transition-colors"
                  >
                    CEH
                  </Link>
                  <Link
                    href="/pay-someone-to-take-isaca-exam-for-me/cism"
                    className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-100 transition-colors"
                  >
                    CISM
                  </Link>
                  <Link
                    href="/pay-someone-to-take-isaca-exam-for-me/cisa"
                    className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-100 transition-colors"
                  >
                    CISA
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question: "Do you support ISACA certifications like CISA, CISM, and CRISC?",
          answer: (
            <>
              Yes, we have a dedicated team of IT governance and security professionals who handle ISACA certifications including CISA (Certified Information Systems Auditor), CISM (Certified Information Security Manager), and CRISC (Certified in Risk and Information Systems Control). Our exam takers are certified professionals with real-world experience in audit, security management, and risk control.
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  Explore ISACA certifications:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/pay-someone-to-take-isaca-exam-for-me/cisa"
                    className="text-xs bg-blue-50 text-primary px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    CISA
                  </Link>
                  <Link
                    href="/pay-someone-to-take-isaca-exam-for-me/cism"
                    className="text-xs bg-blue-50 text-primary px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    CISM
                  </Link>
                  <Link
                    href="/pay-someone-to-take-isaca-exam-for-me/crisc"
                    className="text-xs bg-blue-50 text-primary px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    CRISC
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question: "Can you handle EC-Council exams like CEH and CHFI?",
          answer: (
            <>
              Absolutely. Our cybersecurity experts are well-versed in EC-Council certification exams including Certified Ethical Hacker (CEH), Computer Hacking Forensic Investigator (CHFI), and Certified Network Defender (CND). We have a strong track record of success with these technical security certifications.
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  EC-Council certifications we cover:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/pay-someone-to-take-ec-council-exam-for-me/ceh"
                    className="text-xs bg-red-50 text-red-700 px-3 py-1 rounded-full hover:bg-red-100 transition-colors"
                  >
                    CEH
                  </Link>
                  <Link
                    href="/pay-someone-to-take-ec-council-exam-for-me/chfi"
                    className="text-xs bg-red-50 text-red-700 px-3 py-1 rounded-full hover:bg-red-100 transition-colors"
                  >
                    CHFI
                  </Link>
                  <Link
                    href="/pay-someone-to-take-ec-council-exam-for-me/cnd"
                    className="text-xs bg-red-50 text-red-700 px-3 py-1 rounded-full hover:bg-red-100 transition-colors"
                  >
                    CND
                  </Link>
                </div>
              </div>
            </>
          ),
        },
      ],
    },
    {
      category: "Core Infrastructure & Networking",
      icon: <Server className="w-5 h-5 text-orange-500" />,
      questions: [
        {
          question: "Is it possible to hire a proxy for Cisco CCNA or Red Hat labs?",
          answer: (
            <>
              Yes, our technical team features senior network administrators and enterprise infrastructure experts capable of executing Cisco CCNA assessments and complex Red Hat lab environments like the RHCSA and RHCE. We handle both multiple-choice sections and live sandbox command-line assignments flawlessly.
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  Networking certifications we cover:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/pay-someone-to-take-cisco-ccna-exam-for-me"
                    className="text-xs bg-orange-50 text-orange-700 px-3 py-1 rounded-full hover:bg-orange-100 transition-colors"
                  >
                    Cisco CCNA
                  </Link>
                  <Link
                    href="/pay-someone-to-take-comptia-exam-for-me/pay-someone-to-take-my-comptia-network-plus-exam-for-me"
                    className="text-xs bg-orange-50 text-orange-700 px-3 py-1 rounded-full hover:bg-orange-100 transition-colors"
                  >
                    CompTIA Network+
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question: "What happens if the assigned IT expert does not pass my certification?",
          answer: (
            <>
              We back our enterprise proxy testing services with a transparent, first-time pass or money-back guarantee. If the assigned domain engineer fails to achieve the verified passing score required by the vendor, we issue a prompt, full refund of your investment.
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  Our guarantee covers all major certifications:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/pay-someone-to-take-aws-exam-for-me"
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
                  >
                    AWS
                  </Link>
                  <Link
                    href="/pay-someone-to-take-azure-exam-for-me"
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
                  >
                    Azure
                  </Link>
                  <Link
                    href="/pay-someone-to-take-comptia-exam-for-me"
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
                  >
                    CompTIA
                  </Link>
                  <Link
                    href="/pay-someone-to-take-isaca-exam-for-me"
                    className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
                  >
                    ISACA
                  </Link>
                </div>
              </div>
            </>
          ),
        },
        {
          question: "Can you help with ITIL or PMP certifications?",
          answer: (
            <>
              Yes, we support IT service management and project management certifications including ITIL v4 Foundation and PMP (Project Management Professional). Our exam takers are certified professionals with extensive experience in IT service management frameworks and project management methodologies.
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-700">
                  Explore these certifications:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/pay-someone-to-take-itil-v4"
                    className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-100 transition-colors"
                  >
                    ITIL v4
                  </Link>
                  <Link
                    href="/blog/pay-someone-to-pass-my-pmp-exam-fast-safe-and-100-guaranteed-pmp-certification"
                    className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-100 transition-colors"
                  >
                    PMP
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            IT Certification Proxy FAQ
          </h2>
          <p className="text-lg text-gray-600">
            Get explicit answers regarding secure remote testing, platform
            bypass safety, and supported IT tracks
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
                <h3 className="text-xl font-semibold text-gray-800">
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
                        className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-gray-50 transition-colors hover:cursor-pointer"
                      >
                        <span className="font-medium text-gray-800">
                          {item.question}
                        </span>
                        {activeIndex === globalIndex ? (
                          <ChevronUp className="w-5 h-5 text-primary shrink-0 ml-4" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500 shrink-0 ml-4" />
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
            Need to verify a specific certification test code?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/order"
              className="px-6 py-3 bg-button-login-default text-white font-medium rounded-lg hover:bg-button-login-hover transition-colors shadow-sm"
            >
              Configure Your Exam Order
            </Link>
            <Link
              href="/pay-someone-to-take-aws-exam-for-me"
              className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors inline-block"
            >
              AWS Certifications
            </Link>
            <Link
              href="/pay-someone-to-take-azure-exam-for-me"
              className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors inline-block"
            >
              Azure Certifications
            </Link>
          </div>

          <div className="mt-4 text-sm text-gray-500">
            <span>Explore all certifications: </span>
            <Link
              href="/pay-someone-to-take-comptia-exam-for-me"
              className="text-primary hover:underline"
            >
              CompTIA
            </Link>
            <span className="mx-1">•</span>
            <Link
              href="/pay-someone-to-take-isaca-exam-for-me"
              className="text-primary hover:underline"
            >
              ISACA
            </Link>
            <span className="mx-1">•</span>
            <Link
              href="/pay-someone-to-take-ec-council-exam-for-me"
              className="text-primary hover:underline"
            >
              EC-Council
            </Link>
            <span className="mx-1">•</span>
            <Link
              href="/pay-someone-to-take-cisco-ccna-exam-for-me"
              className="text-primary hover:underline"
            >
              Cisco
            </Link>
            <span className="mx-1">•</span>
            <Link
              href="/pay-someone-to-take-itil-exam-for-me"
              className="text-primary hover:underline"
            >
              ITIL
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
