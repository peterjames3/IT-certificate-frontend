"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { getIcon } from "@/lib/icons"; 

export interface ExamData {
  code: string;
  track: string;
  role: string;
  focus: string;
  icon?: string; // Icon name from Sanity
  slug: string; 
}

interface VendorMatrixTableProps {
  exams: ExamData[];
  provider: string; 
}

export default function VendorMatrixTable({ exams, provider }: VendorMatrixTableProps) {
  return (
    <section className="py-20 px-6 max-w-310 mx-auto w-full">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-sm font-bold uppercase tracking-widest text-primary mb-2 block">
          What We Cover
        </span>
        <h3 className="text-3xl md:text-4xl font-extrabold text-secondary tracking-tight">
          ISACA Certification Comparison Matrix
        </h3>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base md:text-lg">
          Review our comprehensive support matrix to identify your specific ISACA certification path and
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
                <th className="py-5 px-6">Certification</th>
                <th className="py-5 px-6">Certification Track</th>
                <th className="py-5 px-6">Targeted Professional Role</th>
                <th className="py-5 px-6">Core Focus Areas</th>
                <th className="py-5 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm md:text-base">
              {exams.map((row) => {
                const IconComponent = row.icon ? getIcon(row.icon) : null;
                return (
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
                        {IconComponent && <IconComponent className="w-5 h-5 text-primary" />}
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

                    {/* Actions Column */}
                    <td className="py-5 px-6 text-center whitespace-nowrap">
                      <div className="flex flex-col items-center gap-2">
                        {/* Hire Exam Taker Link */}
                        <Link
                          href={`/order?exam=${encodeURIComponent(row.code)}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-secondary transition-colors group hover:cursor-pointer bg-blue-50/50 hover:bg-blue-50 px-4 py-2 rounded-xl border border-blue-100 w-full justify-center"
                        >
                          Hire Exam Taker
                          <ArrowUpRight
                            size={14}
                            className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                          />
                        </Link>

                        {/* View Certification Page Link */}
                        <Link
                          href={`/pay-someone-to-take-${provider}-exam-for-me/${row.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-medium text-secondary-500 hover:text-secondary transition-colors group hover:cursor-pointer bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-xl border border-gray-200 w-full justify-center"
                        >
                          View Certification Page
                          <ArrowUpRight
                            size={12}
                            className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                          />
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}