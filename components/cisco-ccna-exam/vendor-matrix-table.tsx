"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Network, Router, Globe, Server, Wifi } from "lucide-react";
import Link from "next/link";

const MATRIX_DATA = [
  {
    code: "200-301",
    track: "CCNA - Cisco Certified Network Associate",
    role: "Network Administrator / Engineer",
    focus: "Networking fundamentals, routing protocols, switching configurations, network security basics, automation, and programmability.",
    icon: <Network className="w-5 h-5 text-blue-500" />
  },
  {
    code: "200-901",
    track: "DevNet Associate",
    role: "Network Automation Engineer",
    focus: "Software development for network automation, APIs, Cisco platforms, application deployment, and infrastructure as code.",
    icon: <Server className="w-5 h-5 text-purple-500" />
  },
  {
    code: "200-201",
    track: "CyberOps Associate",
    role: "Security Operations Analyst",
    focus: "Security operations, network intrusion analysis, threat monitoring, incident response, and security monitoring frameworks.",
    icon: <ShieldCheck className="w-5 h-5 text-orange-500" />
  },
  {
    code: "300-410",
    track: "CCNP Enterprise - ENARSI",
    role: "Senior Network Engineer",
    focus: "Advanced routing protocols, VPN technologies, infrastructure security, network troubleshooting, and Layer 2/3 configurations.",
    icon: <Router className="w-5 h-5 text-emerald-500" />
  },
  {
    code: "350-401",
    track: "CCNP Enterprise - ENCOR",
    role: "Enterprise Network Architect",
    focus: "Enterprise network architecture, high availability, virtualization, automation, security services, and network assurance.",
    icon: <Globe className="w-5 h-5 text-cyan-500" />
  },
  {
    code: "300-415",
    track: "CCNP Enterprise - ENSDWI",
    role: "SD-WAN Network Specialist",
    focus: "SD-WAN architecture, WAN edge deployment, controller configuration, security policies, and application performance optimization.",
    icon: <Wifi className="w-5 h-5 text-indigo-500" />
  }
];

export default function VendorMatrixTable() {
  return (
    <section className="py-20 px-6 max-w-310 mx-auto w-full">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-sm font-bold uppercase tracking-widest text-primary mb-2 block">
          Compare Certification Paths
        </span>
        <h3 className="text-3xl md:text-4xl font-extrabold text-secondary-800 tracking-tight">
          Cisco CCNA & Networking Certification Comparison Matrix
        </h3>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base md:text-lg">
          Review our comprehensive support matrix to identify your specific Cisco exam path and
          learn how our professional exam takers and secure proxy services ensure a guaranteed passing outcome.
        </p>
      </div>

      {/* Responsive Table Container */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full border border-gray-200 rounded-3xl overflow-hidden shadow-sm bg-white"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-slate-50 border-b border-gray-200 text-secondary font-bold text-sm">
                <th className="py-5 px-6">Exam Code</th>
                <th className="py-5 px-6">Certification Track</th>
                <th className="py-5 px-6">Targeted Professional Role</th>
                <th className="py-5 px-6">Core Focus Areas</th>
                <th className="py-5 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm md:text-base">
              {MATRIX_DATA.map((row) => (
                <tr 
                  key={row.code}
                  className="hover:bg-slate-50/50 transition-colors duration-200"
                >
                  {/* Exam Code Badge */}
                  <td className="py-5 px-6 whitespace-nowrap">
                    <span className="font-bold text-secondary bg-slate-100 text-xs px-3 py-1.5 rounded-full border border-slate-200/50">
                      {row.code}
                    </span>
                  </td>

                  {/* Certification Track */}
                  <td className="py-5 px-6 font-bold text-secondary">
                    <div className="flex items-center gap-3">
                      {row.icon}
                      <span>{row.track}</span>
                    </div>
                  </td>

                  {/* Targeted Professional Role */}
                  <td className="py-5 px-6 text-secondary-600 font-medium">
                    {row.role}
                  </td>

                  {/* Core Focus Areas */}
                  <td className="py-5 px-6 text-gray-500 max-w-sm leading-relaxed">
                    {row.focus}
                  </td>

                  {/* Action Link */}
                  <td className="py-5 px-6 text-center whitespace-nowrap">
                    <Link
                      href={`/order?exam=${encodeURIComponent(row.code)}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-secondary transition-colors group hover:cursor-pointer bg-blue-50/50 hover:bg-blue-50 px-4 py-2 rounded-xl border border-blue-100"
                    >
                      Hire Exam Taker
                      <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}
