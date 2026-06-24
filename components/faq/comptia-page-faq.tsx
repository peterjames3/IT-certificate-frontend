"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Server,
  Cloud,
  
} from "lucide-react";
import { useState } from "react";

export default function CompTIAFAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "Cloud Certifications",
      icon: <Cloud className="w-5 h-5 text-blue-500" />,
      questions: [
        {
          question:
            "Can I pay someone to take my AWS Solutions Architect exam?",
          answer:
            "Yes, you can hire our certified cloud engineers to take your AWS Solutions Architect exam on your behalf. We provide comprehensive proxy testing support for AWS Associate, Professional, and Specialty certs. Our specialized backend configurations ensure the session is completed safely through remote test delivery environments without triggers.",
        },
        {
          question:
            "Do you offer proxy testing for Microsoft Azure and Google Cloud exams?",
          answer:
            "Absolutely. We support the entire enterprise cloud ecosystem. Whether you need to pass the Azure Administrator (AZ-104), Azure Solutions Architect (AZ-305), or Google Cloud Certified Professional Engineer exam, our platform assigns a dedicated cloud expert to handle the live assessment with a guaranteed passing score.",
        },
      ],
    },
    {
      category: "Proctoring & Systems Security",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      questions: [
        {
          question: "How do you pass a CompTIA proctored test online safely?",
          answer:
            "To pass a CompTIA proctored test online safely, we deploy a secure, custom configuration on your machine before the exam starts. This setup is 100% invisible to lockdown browsers and remote monitoring software like Pearson VUE's OnVUE platform. You log in to clear the biometric/ID validation checks, and our expert seamlessly completes the exam answers without tripping flags.",
        },
        {
          question:
            "Can your system bypass Pearson VUE OnVUE and lock down web browsers?",
          answer:
            "Yes. Our hardware-level network mirroring methods run outside the virtual space, making them completely undetectable by advanced anti-cheat modules, OEM applications, or background processes. We execute a full pre-exam system compatibility check with you ahead of schedule to ensure total security.",
        },
      ],
    },
    {
      category: "Core Infrastructure & Labs",
      icon: <Server className="w-5 h-5 text-orange-500" />,
      questions: [
        {
          question:
            "Is it possible to hire a proxy for Cisco CCNA or Red Hat labs?",
          answer:
            "Yes, our technical team features senior network administrators and enterprise infrastructure experts capable of executing Cisco CCNA assessments and complex Red Hat lab environments like the RHCSA and RHCE. We handle both multiple-choice sections and live sandbox command-line assignments flawlessly.",
        },
        {
          question:
            "What happens if the assigned IT expert does not pass my certification?",
          answer:
            "We back our enterprise proxy testing services with a transparent, first-time pass or money-back guarantee. If the assigned domain engineer fails to achieve the verified passing score required by the vendor, we issue a prompt, full refund of your investment.",
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
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <div className="flex items-center bg-gray-50 px-6 py-4">
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
                        className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium text-gray-800">
                          {item.question}
                        </span>
                        {activeIndex === globalIndex ? (
                          <ChevronUp className="w-5 h-5 text-gray-500 shrink-0 ml-4" />
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
                        <div className="px-6 pb-4 text-gray-600 leading-relaxed text-sm md:text-base">
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
          <Link
            href="/contact"
            className="px-6 py-3 bg-button-login-default text-white font-medium rounded-lg hover:bg-button-login-hover transition-colors shadow-sm"
          >
            Contact System Support
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
