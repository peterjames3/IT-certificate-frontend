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
      category: "CompTIA Core & Cloud Series",
      icon: <Cloud className="w-5 h-5 text-blue-500" />,
      questions: [
        {
          question:
            "Can I get technical assistance to pass my CompTIA A+ and Network+ exams?",
          answer:
            "Yes. We align you with verified infrastructure experts who specialize in CompTIA A+ (Core 1 & Core 2) and Network+ tracks. Our tailored baseline configuration setups ensure your testing session is completed safely through managed technical environments without triggering background platform flags.",
        },

        {
          question: "Can I pay someone to take my CompTIA exam for me?",
          answer:
            "Yes. Hire Exam Ace connects you with verified CompTIA-certified professionals who handle your exam confidentially with guaranteed results. We cover all 19 CompTIA certifications from Tech+ and A+ through to SecurityX, PenTest+, and DataAI..",
        },
        {
          question: " How quickly can someone take my online CompTIA exam?",
          answer:
            "Most requests are completed within 48 to 72 hours from your first contact. For urgent situations, we offer expedited 24-hour service. Contact us immediately with your exam date and we will accommodate you.",
        },
        {
          question:
            "Do you provide configuration support for the CompTIA Cloud+ track?",
          answer:
            "Absolutely. We support the entire enterprise scaling pathway. When you schedule a CompTIA Cloud+ assessment, our coordination team assigns a certified cloud deployment engineer to handle your technical environment objectives with guaranteed passing outcomes.",
        },
      ],
    },
    {
      category: "OnVUE Engine Compatibility & Safety",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      questions: [
        {
          question: "How do you clear a CompTIA proctored test online safely?",
          answer:
            "We manage environmental footprints directly at a hardware and network level. This baseline isolation is completely unlinked to virtual workspaces, making it unnoticeable to background system scans on Pearson VUE's OnVUE platform. You simply clear standard biometric intake steps, and our platform takes care of the session requirements cleanly.",
        },
        {
          question:
            " Can you take my CompTIA exam if it is proctored through Pearson VUE or OnVUE?",
          answer:
            "Yes. Our specialists are fully experienced with both Pearson VUE test centers and the OnVUE online proctored format. We handle all monitoring requirements securely and without triggering any flags. See our full proctored exam help page for more details.",
        },
        {
          question:
            "Can your configurations bypass strict lockdown browsers during the exam?",
          answer:
            "Yes. Our hardware-level network setups operate entirely outside application-level detection systems. This prevents automated anti-cheat modules or background diagnostic software from detecting any discrepancies. We conduct a pre-exam system compatibility checklist with you ahead of schedule for total security.",
        },
      ],
    },
    {
      category: "Cybersecurity Tracks, PBQs & Privacy",
      icon: <Server className="w-5 h-5 text-orange-500" />,
      questions: [
        {
          question:
            "How do your specialists handle advanced CompTIA Security+, CySA+, or PenTest+ labs?",
          answer:
            "Our roster features senior cybersecurity analysts and active penetration testers who handle interactive terminal simulations daily. They execute complex Performance-Based Questions (PBQs), firewall rulesets, and live command-line sandbox targets naturally within human pacing parameters.",
        },
        {
          question:
            "What will the transaction show up as on my bank statement?",
          answer:
            "To maximize your professional security and data privacy, we operate entirely via discrete invoice fulfillment. All charges appear under a completely neutral corporate description related to technical education coaching or IT career advisory services.",
        },
        {
          question:
            "What happens if a technical glitch or interruption impacts my validation result?",
          answer:
            "We stand behind our outcome-pass assurance framework. If a session is cut short by a local ISP dropout or sudden proctor engine crash, we cover your re-attempt completely. We will coordinate a fresh window and deliver your targeted certificate results at zero extra cost.",
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
            CompTIA Certification Assistance FAQ
          </h2>
          <p className="text-lg text-gray-600">
            Get explicit answers regarding secure environment setup, OnVUE
            safety, and performance-based labs.
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
            Need to verify a specific CompTIA exam code timeline?
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
