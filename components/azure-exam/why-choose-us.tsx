"use client";

import { motion } from "framer-motion";
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
    "Many IT workers manage demanding corporate schedules that require them to establish a delicate balance between active deployments, personal priorities, and study timelines. By choosing to pay someone to take my Azure exam for me, you save valuable time and remain highly productive on vital production tasks.",
    "Completely confidential and secure testing sessions utilizing advanced technical environments to establish a natural local user footprint.",
    "Cloud certification paths often introduce excruciating levels of testing pressure and administrative stress. By hiring a certified specialist to take my online Azure certification exam on your behalf, you completely eliminate the anxiety of test day.",
    "Many candidates struggle to master the immense volume of cloud architecture designs and networking rules due to a lack of preparation time. Partnering with us lets a seasoned cloud infrastructure specialist handle the assessment parameters for you.",
    "At ProctoredExamHelp, we back our specialized assistance with complete pass guarantees, ensuring absolute peace of mind throughout your certification journey.",
  ];

  const otherBenefits = [
    "Dedicated 24/7 Support: Our operations team is available around the clock to answer your queries and align specialists instantly. Whether your Pearson VUE slot is tomorrow morning or in under two hours, our team responds and coordinates your setup immediately.",
    "Certified Azure Experts: Every professional inside our network holds active Microsoft Azure credentials relevant to your targeted path, including associate and expert levels. These are active cloud architects who deploy these technologies in enterprise environments daily.",
    "Urgent Order Processing: Facing a last-minute voucher expiration? We accept urgent Azure exam support requests with under two hours of notice and deploy verified experts immediately to configure your secure proxy link safely.",
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
            Why Should You Choose to Pay Us To Take My Online Azure Exam?
          </motion.h2>

          <motion.p variants={item} className="text-lg text-gray-600 mb-8">
            At ProctoredExamHelp, there are several key reasons why you should trust our 
            specialists to manage your cloud certification. We have established an 
            exceptional reputation in the cloud engineering field and have grown to become the premier 
            choice for enterprise IT professionals. Some of these advantages include:
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
          </motion.div>
        </motion.div>

        {/* Right Column - Other Benefits */}
        <motion.div className="h-full">
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
