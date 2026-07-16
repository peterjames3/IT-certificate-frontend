// components/vendors-we-support/vendor-matrix-grid.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Zap } from "lucide-react";

const ITIL_TRACKS = {
  "Foundation & Specialist": [
    {
      name: "ITIL 4 Foundation",
      code: "ITIL4-FND",
      desc: "Key concepts of IT service management, guiding principles, the service value system, and core management practices.",
    },
    {
      name: "ITIL 4 Create, Deliver and Support (CDS)",
      code: "ITIL4-CDS",
      desc: "Service performance integration, value streams execution models, and technology structures to support professional workflows.",
    },
    {
      name: "ITIL 4 Drive Stakeholder Value (DSV)",
      code: "ITIL4-DSV",
      desc: "Customer journey mapping, multi-supplier integration, communication management, and relationship cultivation practices.",
    },
  ],
  "Strategist & Leader": [
    {
      name: "ITIL 4 High-velocity IT (HVIT)",
      code: "ITIL4-HVIT",
      desc: "Rapid delivery of products and services, digital transformation models, and lean technologies for fast-paced environments.",
    },
    {
      name: "ITIL 4 Direct, Plan and Improve (DPI)",
      code: "ITIL4-DPI",
      desc: "Strategic planning, governance compliance, continuous improvement framework execution, and organizational change management.",
    },
    {
      name: "ITIL 4 Digital and IT Strategy (DITS)",
      code: "ITIL4-DITS",
      desc: "Aligning digital business strategy with IT operations, managing disruptive technology impacts, and organizational design.",
    },
  ],
} as const;

export default function VendorMatrixGrid() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof ITIL_TRACKS>("Foundation & Specialist");

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto w-full">
      {/* Structural Headers with Rich Keyword Injections */}
      <div className="text-center mb-12">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
          Supported Tracks
        </h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-secondary tracking-tight">
          ITIL 4 Certification Matrix
        </h3>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base md:text-lg">
          Select your target track to review how our technical specialists map
          out specific code configurations and handle complex scenario-based
          challenges.
        </p>
      </div>

      {/* Tab Selectors */}
      <div className="flex justify-center gap-3 mb-12 overflow-x-auto pb-2 scrollbar-none">
        {(
          Object.keys(ITIL_TRACKS) as Array<keyof typeof ITIL_TRACKS>
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
            {ITIL_TRACKS[activeTab].map((cert, index) => (
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
