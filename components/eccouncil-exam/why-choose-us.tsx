"use client";

import { motion } from "motion/react";
import { CheckCircle, Shield, Award, Users, Zap } from "lucide-react";

export default function WhyChooseUs() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  const benefits = [
    "Many cybersecurity professionals have demanding schedules that require balancing work, personal life, and certification preparation. By paying someone to take my EC-Council exam, you can save valuable time and focus on other critical tasks while our experts handle your certification.",
    "Complete confidentiality and secure proxy sessions guaranteed. Your identity and EC-Council registration remain fully protected with our military-grade encryption and strict NDA protocols.",
    "EC-Council exams create immense pressure and anxiety with their complex practical simulations and technical depth. By hiring a professional ethical hacking exam taker, you can eliminate stress and approach your certification with confidence.",
    "Mastering EC-Council's penetration testing, network defense, and digital forensics domains requires extensive hands-on practice. Our certified specialists possess deep expertise in all EC-Council exam objectives, ensuring you achieve the results you need.",
    "At ProctoredExamHelp, we guarantee your EC-Council certification success with our proven pass-assurance framework, giving you complete peace of mind and a stress-free certification journey.",
  ];

  const otherBenefits = [
    "24/7 Support: We are available around the clock to answer queries and deploy certified EC-Council exam takers immediately. Whether your CEH, ECSA, or CHFI exam is tomorrow or in two hours, our team responds instantly to handle your urgent request.",
    "Certified EC-Council Experts: Every professional in our network holds active EC-Council certifications relevant to your specific exam. These are not generic test-takers—they are working ethical hacking, penetration testing, and digital forensics professionals applying this knowledge daily on real security challenges.",
    "Urgent Order Delivery: Last-minute deadline? We accept EC-Council exam requests with under two hours notice and deploy certified specialists immediately. CEH, ECSA, CHFI, CND, CCISO, and LPT exam requests are handled faster than anywhere else.",
    "Practical Simulation Mastery: Our exam takers excel in EC-Council's hands-on practical simulations, including penetration testing labs, vulnerability assessments, and forensic analysis scenarios that many candidates find challenging.",
    "Proven Track Record: With over 1,000+ successful EC-Council exam completions, our professional proxy services have helped professionals achieve their CEH, ECSA, CHFI, CND, CCISO, and LPT certifications with a 95%+ success rate.",
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full max-w-full lg:max-w-310 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-18 items-center px-6">
        {/* Left Column - Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.h2
            variants={item}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose Our Professional EC-Council Exam Taker Services?
          </motion.h2>

          <motion.p variants={item} className="text-lg text-gray-600 mb-8">
            At ProctoredExamHelp, we&apos;ve built an unmatched reputation as the
            premier EC-Council exam proxy service. Here&apos;s why cybersecurity
            professionals trust us to handle their CEH, ECSA, CHFI, CND, CCISO,
            and LPT certification exams.
          </motion.p>

          <motion.ul variants={container} className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                variants={item}
                className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle className="flex-shrink-0 h-6 w-6 text-emerald-500 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          ></motion.div>
        </motion.div>

        {/* Right Column - Additional Benefits */}
        <motion.div className="h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          ></motion.div>

          <motion.ul variants={container} className="space-y-4">
            {otherBenefits.map((benefit, index) => (
              <motion.li
                key={index}
                variants={item}
                className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow "
              >
                <CheckCircle className="flex-shrink-0 h-6 w-6 text-emerald-500 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 p-6  text-white"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
