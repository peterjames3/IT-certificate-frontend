"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Zap } from "lucide-react";

const ISACA_TRACKS = {
  "Core Certifications": [
    {
      name: "CISA - Certified Information Systems Auditor",
      code: "CISA",
      desc: "IT audit, governance, risk management, control frameworks, compliance monitoring, and information systems assurance.",
    },
    {
      name: "CISM - Certified Information Security Manager",
      code: "CISM",
      desc: "Information security governance, risk management, incident response, security program development, and compliance oversight.",
    },
    {
      name: "CRISC - Certified in Risk and Information Systems Control",
      code: "CRISC",
      desc: "Enterprise risk management, IT risk identification, risk response, control monitoring, and information systems control frameworks.",
    },
  ],
  "Advanced Certifications": [
    {
      name: "CGEIT - Certified in the Governance of Enterprise IT",
      code: "CGEIT",
      desc: "Enterprise IT governance, strategic alignment, resource management, performance measurement, and value delivery frameworks.",
    },
    {
      name: "CDPSE - Certified Data Privacy Solutions Engineer",
      code: "CDPSE",
      desc: "Data privacy governance, privacy architecture, data lifecycle management, compliance frameworks, and privacy by design principles.",
    },
  ],
} as const;

export default function VendorMatrixGrid() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof ISACA_TRACKS>("Core Certifications");

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto w-full">
      {/* Structural Headers with Rich Keyword Injections */}
      <div className="text-center mb-12">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
          Most Ordered  ISACA Certification Tracks
        </h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-secondary tracking-tight">
          ISACA IT Governance & Security Certification Matrix
        </h3>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base md:text-lg">
          Select your target ISACA certification to review how our professional proctored exam takers
          map out specific exam domains and handle complex scenario-based
          questions using our secure proxy services for all ISACA tracks.
        </p>
      </div>

      {/* Tab Selectors */}
      <div className="flex justify-center gap-3 mb-12 overflow-x-auto pb-2 scrollbar-none">
        {(Object.keys(ISACA_TRACKS) as Array<keyof typeof ISACA_TRACKS>).map(
          (tab) => {
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
          },
        )}
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
            {ISACA_TRACKS[activeTab].map((cert, index) => (
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

                {/* Secure Routing Action Launcher — Professional Exam Taker Services */}
                <Link
                  href={`/order?exam=${encodeURIComponent(cert.code)}`}
                  className="mt-8 w-fit flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors group hover:cursor-pointer"
                >
                  Hire Exam Taker For This Certification
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