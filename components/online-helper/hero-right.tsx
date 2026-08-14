"use client";

import { motion } from "framer-motion";
import { Video, PlayCircle, ScanEye } from "lucide-react";

export default function HeroRightContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="w-full flex flex-col gap-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row items-stretch gap-6">
        {/* Live Proctoring — Large Left Card */}
        <motion.div
          className="relative bg-cardBg-support3 rounded-tl-none rounded-3xl flex flex-col justify-center w-full lg:w-1/2 px-6 py-8 md:py-12 lg:py-16 border border-gray-100 shadow-sm overflow-hidden"
          variants={itemVariants}
        >
          <section className="relative z-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full p-3 bg-accent shrink-0">
                <Video className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-secondary">
                Live Proctoring
              </h3>
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              A human proctor watches in real-time via webcam. They can pause the exam, 
              request room scans, and flag suspicious behavior immediately. Platforms like 
              ProctorU and Examity use this model.
            </p>
          </section>
        </motion.div>

        {/* Right Column Stack */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          {/* Recorded Proctoring */}
          <motion.div
            className="space-y-4 rounded-tl-none rounded-3xl bg-cardBg-support2 p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col justify-between"
            variants={itemVariants}
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="rounded-full p-3 bg-accent shrink-0">
                  <PlayCircle className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-secondary">
                  Recorded Proctoring
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Your exam session is recorded via webcam and screen capture, then reviewed 
                by a human proctor after completion. This is less intrusive but carries a 
                delay in flagging.
              </p>
            </div>
          </motion.div>

          {/* Automated Proctoring */}
          <motion.div
            className="space-y-4 rounded-tl-none rounded-3xl bg-accent2 p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col justify-between"
            variants={itemVariants}
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="rounded-full p-3 bg-accent shrink-0">
                  <ScanEye className="w-5 h-5 text-gray-800" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  Automated Proctoring
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                AI-driven software monitors eye movement, background noise, and browser 
                activity. Proctorio and Honorlock use algorithms to detect anomalies 
                without human oversight during the exam.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
