"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Zap } from "lucide-react";

const CISCO_TRACKS = {
  "Associate Level": [
    {
      name: "Cisco Certified Network Associate (CCNA)",
      code: "200-301",
      desc: "Networking fundamentals, routing protocols, switching configurations, network security basics, automation, and programmability.",
    },
    {
      name: "Cisco DevNet Associate",
      code: "200-901",
      desc: "Software development for network automation, APIs, Cisco platforms, application deployment, and infrastructure as code.",
    },
    {
      name: "Cisco CyberOps Associate",
      code: "200-201",
      desc: "Security operations, network intrusion analysis, threat monitoring, incident response, and security monitoring frameworks.",
    },
  ],
  "Professional Level": [
    {
      name: "Cisco CCNP Enterprise - ENARSI",
      code: "300-410",
      desc: "Advanced routing protocols, VPN technologies, infrastructure security, network troubleshooting, and Layer 2/3 configurations.",
    },
    {
      name: "Cisco CCNP Enterprise - ENSDWI",
      code: "300-415",
      desc: "SD-WAN architecture, WAN edge deployment, controller configuration, security policies, and application performance optimization.",
    },
    {
      name: "Cisco CCNP Enterprise - ENCOR",
      code: "350-401",
      desc: "Enterprise network architecture, high availability, virtualization, automation, security services, and network assurance.",
    },
  ],
  "Specialist & Expert": [
    {
      name: "Cisco CCNP Security - SCOR",
      code: "350-701",
      desc: "Network security architecture, VPN technologies, endpoint protection, cloud security, and security automation workflows.",
    },
    {
      name: "Cisco CCNP Data Center - DCCOR",
      code: "350-601",
      desc: "Data center infrastructure, compute and storage networking, automation, network services, and security integration.",
    },
    {
      name: "Cisco CCIE Enterprise Infrastructure",
      code: "400-101",
      desc: "Expert-level network design, complex routing protocols, advanced troubleshooting, and enterprise network optimization strategies.",
    },
  ],
} as const;

export default function VendorMatrixGrid() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof CISCO_TRACKS>("Associate Level");

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto w-full">
      {/* Structural Headers with Rich Keyword Injections */}
      <div className="text-center mb-12">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
          Supported Certification Tracks
        </h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-secondary tracking-tight">
          CCNA & Networking Certification Matrix
        </h3>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base md:text-lg">
          Select your target track to review how our professional exam takers
          map out specific code configurations and handle complex
          performance-based simulations using our secure proxy services.
        </p>
      </div>

      {/* Tab Selectors */}
      <div className="flex justify-center gap-3 mb-12 overflow-x-auto pb-2 scrollbar-none">
        {(Object.keys(CISCO_TRACKS) as Array<keyof typeof CISCO_TRACKS>).map(
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
            {CISCO_TRACKS[activeTab].map((cert, index) => (
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
                  Hire Exam Taker For This Exam
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
