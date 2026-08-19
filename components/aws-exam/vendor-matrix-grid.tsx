// components/vendors-we-support/vendor-matrix-grid.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Zap } from "lucide-react";

const AWS_TRACKS = {
  Foundational: [
    {
      name: "AWS Certified Cloud Practitioner",
      code: "CLF-C02",
      desc: "Foundational cloud computing concepts, standard security compliance models, shared responsibility rules, and basic billing structures.",
    },
  ],
  Associate: [
    {
      name: "AWS Certified Solutions Architect Associate",
      code: "SAA-C03",
      desc: "Designing resilient cloud architectures, high-performance storage configurations, secure system access, and cost-optimized networks.",
    },
    {
      name: "AWS Certified Developer Associate",
      code: "DVA-C02",
      desc: "Developing cloud-native serverless applications, managing code deployments, integrating database caches, and optimizing application APIs.",
    },
    {
      name: "AWS Certified SysOps Administrator Associate",
      code: "SOA-C02",
      desc: "Deploying enterprise scale workloads, configuring auto-scaling monitoring systems, managing data backups, and troubleshooting resource issues.",
    },
  ],
  "Professional & Specialty": [
    {
      name: "AWS Certified Solutions Architect Professional",
      code: "SAP-C02",
      desc: "Designing complex multi-account organizational architectures, strategic migrations, high-availability networks, and advanced automation patterns.",
    },
    {
      name: "AWS Certified Security Specialty",
      code: "SCS-C02",
      desc: "Configuring identity access controls, implementing structural data encryption, auditing infrastructure security, and incident detection response.",
    },
    {
      name: "AWS Certified Advanced Networking Specialty",
      code: "ANS-C01",
      desc: "Designing complex hybrid network connections, configuring transit gateways, managing direct connect pathways, and optimizing routing tables.",
    },
  ],
} as const;

export default function VendorMatrixGrid() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof AWS_TRACKS>("Foundational");

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto w-full">
      {/* Structural Headers with Rich Keyword Injections */}
      <div className="text-center mb-12">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
          Supported Tracks
        </h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-secondary tracking-tight">
          Amazon Web Services Certification Matrix
        </h3>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base md:text-lg">
          Select your target track to review how our technical specialists map
          out specific code configurations and handle complex performance-based
          challenges.
        </p>
      </div>

      {/* Tab Selectors */}
      <div className="flex justify-center gap-3 mb-12 overflow-x-auto pb-2 scrollbar-none">
        {(
          Object.keys(AWS_TRACKS) as Array<keyof typeof AWS_TRACKS>
        ).map((tab) => {
          const isSelected = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 border whitespace-nowrap hover:cursor-pointer ${
                isSelected
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-white text-secondary border-gray-200 hover:border-gray-300 hover:text-primary"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Animated Matrix Grid */}
      <div className="w-full min-h-[380px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {AWS_TRACKS[activeTab].map((cert, index) => (
              <div
                key={`${cert.code}-${index}`}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Exam Code Badge — Heavily Crawled by Search Engines */}
                  <span className="inline-block text-sm font-bold text-secondary-600 px-3 py-1 bg-accent-100 rounded-full">
                    {cert.code}
                  </span>
                  <h4 className="text-headline font-bold text-secondary mt-5 mb-3">
                    {cert.name}
                  </h4>
                  <p className="text-secondary-600 text-[1.2rem] leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                {/* Secure Routing Action Launcher — Passing structural anchor intent query */}
                <Link
                  href={`/order?exam=${encodeURIComponent(cert.code)}`}
                  className="mt-8 w-fit flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors group hover:cursor-pointer"
                >
                  Order This Exam
                  <Zap
                    size={14}
                    className="transform group-hover:scale-110 transition-transform"
                  />
                </Link>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
