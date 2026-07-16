"use client";

import { motion } from "framer-motion";
import { Table, ArrowUpRight, ShieldCheck, Database, Server, Cpu, Cloud } from "lucide-react";
import Link from "next/link";

const MATRIX_DATA = [
  {
    code: "ITIL4-FND",
    track: "ITIL 4 Foundation",
    role: "IT Service Desk / Support Specialist",
    focus: "Core IT service management concepts, service value system dynamics, four dimensions, and practice blueprints.",
    icon: <Cloud className="w-5 h-5 text-blue-500" />
  },
  {
    code: "ITIL4-CDS",
    track: "ITIL 4 Create, Deliver and Support",
    role: "IT Service Delivery Manager",
    focus: "Integrating service performance, constructing continuous value streams, and managing modern technology workflows.",
    icon: <Server className="w-5 h-5 text-purple-500" />
  },
  {
    code: "ITIL4-DSV",
    track: "ITIL 4 Drive Stakeholder Value",
    role: "Customer Success / Relationship Lead",
    focus: "Mapping customer journeys, fostering collaborative stakeholder relationships, and managing service consumption.",
    icon: <Cpu className="w-5 h-5 text-emerald-500" />
  },
  {
    code: "ITIL4-HVIT",
    track: "ITIL 4 High-velocity IT",
    role: "Agile / DevOps Transformation Lead",
    focus: "Leveraging rapid product delivery frameworks, digital service scaling, and lean technology operations.",
    icon: <ShieldCheck className="w-5 h-5 text-orange-500" />
  },
  {
    code: "ITIL4-DPI",
    track: "ITIL 4 Direct, Plan and Improve",
    role: "IT Governance & Compliance Manager",
    focus: "Structuring strategic goals, aligning service governance policies, and steering continuous improvement loops.",
    icon: <Database className="w-5 h-5 text-cyan-500" />
  }
];

export default function VendorMatrixTable() {
  return (
    <section className="py-20 px-6 max-w-310 mx-auto w-full">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-sm font-bold uppercase tracking-widest text-primary mb-2 block">
          Compare Paths
        </span>
        <h3 className="text-3xl md:text-4xl font-extrabold text-secondary tracking-tight">
          ITIL 4 Certification Comparison Matrix
        </h3>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base md:text-lg">
          Review our comprehensive support matrix to identify your specific exam path and 
          learn how our professional technical team ensures a guaranteed passing outcome.
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
          <table className="w-full text-left border-collapse min-w-[800px]">
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
