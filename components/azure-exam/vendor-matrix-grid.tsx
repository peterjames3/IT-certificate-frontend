// components/vendors-we-support/vendor-matrix-grid.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Zap } from "lucide-react";

const AZURE_TRACKS = {
  Fundamentals: [
    {
      name: "Microsoft Certified: Azure Fundamentals",
      code: "AZ-900",
      desc: "Foundational cloud computing services, basic security compliance models, cost management protocols, and core architectural components.",
    },
    {
      name: "Microsoft Certified: Azure Data Fundamentals",
      code: "DP-900",
      desc: "Relational database systems, non-relational storage properties, data ingestion frameworks, and modern business intelligence solutions.",
    },
    {
      name: "Microsoft Certified: Azure AI Fundamentals",
      code: "AI-900",
      desc: "Machine learning workloads, computer vision models, conversational AI systems, and natural language processing basics.",
    },
  ],
  Associate: [
    {
      name: "Microsoft Certified: Azure Administrator",
      code: "AZ-104",
      desc: "Managing virtual networks, active directory identities, cloud storage accounts, resource deployments, and operational monitor rules.",
    },
    {
      name: "Microsoft Certified: Azure Security Engineer",
      code: "AZ-500",
      desc: "Securing virtual machines, identity access management controls, perimeter firewall threat protection, and security posture monitoring.",
    },
    {
      name: "Microsoft Certified: Azure Data Engineer",
      code: "DP-203",
      desc: "Designing analytical storage models, big data processing systems, real-time data streaming pipelines, and compute platform security.",
    },
  ],
  "Specialty & Expert": [
    {
      name: "Microsoft Certified: Azure Solutions Architect Expert",
      code: "AZ-305",
      desc: "Designing complex cloud virtualization patterns, highly available enterprise infrastructure solutions, and disaster recovery architectures.",
    },
    {
      name: "Microsoft Certified: Azure Network Engineer Associate",
      code: "AZ-700",
      desc: "Configuring hybrid network connections, expressroute configurations, virtual WAN frameworks, routing tables, and load balancer setups.",
    },
    {
      name: "Microsoft Certified: Azure Cosmos DB Developer Specialty",
      code: "DP-420",
      desc: "Deploying high-performance non-relational database models, multi-region replication architectures, and global data partition strategies.",
    },
  ],
} as const;

export default function VendorMatrixGrid() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof AZURE_TRACKS>("Fundamentals");

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto w-full">
      {/* Structural Headers with Rich Keyword Injections */}
      <div className="text-center mb-12">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
          Supported Tracks
        </h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-secondary tracking-tight">
          Microsoft Azure Certification Matrix
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
          Object.keys(AZURE_TRACKS) as Array<keyof typeof AZURE_TRACKS>
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
            {AZURE_TRACKS[activeTab].map((cert, index) => (
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