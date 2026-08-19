"use client";

import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

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
    "Many IT workers have hectic schedules to follow that require them to create a balance between work, personal and academic life. By Paying Someone To Take My CompTIA Exam, one can save time and be productive on other tasks.",
    "Confidential and secure sessions",
    "There may be always excruciating amounts of pressure and worry related to the tests. By hiring someone to Take My Online CompTIA Certification Exam, there can be room for reduction of stress.",
    "Many aspirants need to possess the required understanding to pass the test because of many subjects waiting to be covered. However, choosing by choosing us, you may get a specialist to handle the test.",
    "At Take My Comptia Exam, we guarantee success which further ensures peace of mind.",
  ];

  const otherBenefits = [
    "24/7 Support: We are available around the clock to answer queries and deploy specialists immediately. Whether your exam is tomorrow or in two hours, our team responds instantly. ",
    "Certified CompTIA Expert: Every professional in our network holds active CompTIA certifications relevant to your specific exam. These are not generic test-takers they are working IT professionals applying this knowledge every single day on the job.",
    "Urgent Order Delivery: Last-minute deadline? We accept CompTIA exam requests with under two hours notice and deploy certified specialists immediately. Do my CompTIA exam requests are handled faster than anywhere else. ",
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full max-w-full lg:max-w-310 mx-auto grid grid-cols-1 lg:grid-cols-2  gap-2 lg:gap-18 items-center px-6">
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
            Why Should You Choose to Pay Us To Take My Online CompTIA Exam Help?
          </motion.h2>

          <motion.p variants={item} className="text-lg text-gray-600 mb-8">
            At ProctoredExamHelp take My CompTIA Exam, there are several reasons why
            you should pay us to Take My Comptia Exam For Me. We have developed
            an immense reputation in this field and have grown to become the
            best choice. Some of these reasons include the following
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
          >
            {/* <div className="w-full border-t border-gray-200 mb-8"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Get Started Today
            </h3>
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
              Contact Our Team
            </button> */}
          </motion.div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div className=" h-full ">
          <motion.ul variants={container} className="space-y-4">
            {otherBenefits.map((benefit, index) => (
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
        </motion.div>
      </div>
    </section>
  );
}
