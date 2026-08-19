"use client";

import { motion } from "motion/react";
import { User, MonitorX, ScanEye } from "lucide-react";

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
      className="w-full flex flex-col lg:flex-row items-stretch gap-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Identity Verification Box */}
      <motion.div
        className="relative bg-accent2 rounded-tl-none rounded-3xl flex flex-col justify-center w-full lg:w-1/2 px-6 py-8 md:py-12 lg:py-16 border border-gray-100 shadow-sm overflow-hidden"
        variants={itemVariants}
      >
        <section className="relative z-10 space-y-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full p-3 bg-accent shrink-0">
              <User className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-secondary">
              Identity Verification
            </h3>
          </div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Webcam ID checks, face matching, and physical passport verification.
            We handle every security verification step Pearson VUE requires
            before your cloud certification exam begins.
          </p>
          <p className="text-xs italic text-gray-500 pt-2 border-t border-gray-100">
            e.g. Works across Pearson VUE OnVUE identity validation flows and
            room audits.
          </p>
        </section>
      </motion.div>

      {/* Right Column Stack */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        {/* Lockdown Browser Box */}
        <motion.div
          className="space-y-4 rounded-tl-none rounded-3xl bg-cardBg-support2 p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col justify-between"
          variants={itemVariants}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="rounded-full p-3 bg-accent shrink-0">
                <MonitorX className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-secondary">
                Lockdown Browser
              </h3>
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Pearson VUE OnVUE software restricts all other system background
              tasks. Our technical specialists operate within this restricted
              environment smoothly without triggering system flags.
            </p>
          </div>
          <p className="text-xs italic text-gray-500 pt-2 border-t border-gray-100">
            e.g. Bypassing Windows and macOS OnVUE lockdowns cleanly for both
            associate and professional modules.
          </p>
        </motion.div>

        {/* AI Behaviour Monitoring Box */}
        <motion.div
          className="space-y-4 rounded-tl-none rounded-3xl bg-cardBg-support3 p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col justify-between"
          variants={itemVariants}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="rounded-full p-3 bg-accent shrink-0">
                <ScanEye className="w-5 h-5 text-gray-800" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                AI Behaviour Monitoring
              </h3>
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Modern proctors flag unusual typing speeds, screen interactions,
              and mic changes. We maintain fully expected candidate activity
              patterns to keep your testing session safe.
            </p>
          </div>
          <p className="text-xs italic text-gray-500 pt-2 border-t border-gray-100">
            e.g. OnVUE real-time proctor surveillance and automated software
            audit logs.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
