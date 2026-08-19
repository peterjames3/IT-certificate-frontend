"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { HeroSectionData, SectionItem } from "@/lib/defination";
import FloatingElements from "../animation/FloatingElements";
import {
  ArrowLeft,
  Calculator,
  Lightbulb,
  BookOpen,
  ChevronDown,
} from "lucide-react";
import { useRouter } from "next/navigation";
interface HeroSectionProps {
  data: HeroSectionData ;
}

const getSectionIcon = (title: string) => {
  switch (title.toLowerCase()) {
    case "math":
      return <Calculator className="text-purple-600" size={18} />;
    case "writing":
    case "writing test":
      return <BookOpen className="text-red-500" size={18} />;
    case "reading":
      return <BookOpen className="text-green-600" size={18} />;
    case "science":
      return <BookOpen className="text-blue-500" size={18} />;
    case "verbal reasoning":
      return <BookOpen className="text-yellow-500" size={18} />;
    case "quantitative reasoning":
      return <Calculator className="text-indigo-600" size={18} />;
    default:
      return <BookOpen className="text-gray-500" size={18} />;
  }
};

const cardBg = [
  "bg-[#EADCF3]",
  "bg-[#FFF2F0]",
  "bg-[#D6F6DC]",
  "bg-[#E0F7FA]",
  "bg-[#FFF6DA]",
  "bg-[#E7E4FF]",
];

export default function HeroSection({ data }: HeroSectionProps) {

  const router = useRouter();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const {
    preHeading,
    heading,
    accentWord,
    subtext,
    ctaPrimary,
    sections: sectionsData,
  } = data;

  const sections = (sectionsData ?? []) as SectionItem[];

  const headingParts: string[] = accentWord
    ? heading.split(accentWord)
    : [heading];

  return (
    <section
      id="hero-main"
      className="relative bg-linear-to-tr from-primary-50 via-[#ffffff] to-[#f0f9ff] min-h-40 z-10 py-20"
    >
              <div className="pt-40 pb-16 w-full mx-auto max-w-full lg:max-w-310 px-4 md:px-2 lg:px-3 flex flex-col gap-10 lg:flex-row md:justify-between items-center">
          {/* ── Left — text ───────────────────────────── */}
          <div className="w-full lg:w-1/2 items-center ">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 mb-3 text-primary font-semibold hover:text-secondary transition-colors hover:cursor-pointer"
            >
              <ArrowLeft size={18} /> Go Back
            </button>

            {preHeading && (
              <p className="text-sm font-semibold tracking-widest text-secondary">
                {preHeading}
              </p>
            )}

            <h2 className="text-4xl font-bold leading-tight text-secondary">
              {headingParts[0]}
              {accentWord && (
                <span className="text-[#10b981]">{accentWord}</span>
              )}
              {headingParts[1]}
            </h2>

            {subtext && (
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                {subtext}
              </p>
            )}

            <div className="flex flex-wrap gap-4 mt-2">
              {ctaPrimary && (
                <Link
                  href={ctaPrimary.href}
                  id="get-help-now-btn"
                  className="mt-6 cta hover:cursor-pointer"
                  aria-label="Book Your Free 15-minute strategy Call"
                >
                  {ctaPrimary.label}
                </Link>
              )}
            </div>
          </div>

          {/* ── Right — all domains grid ──────────────── */}
          <div className="w-full lg:w-1/2">
            {sections.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sections.map((section, index) => {
                  const isExpanded = expandedIndex === index;
                  return (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                      className={`${cardBg[index % cardBg.length]} rounded-md px-5 py-5 flex flex-col gap-2`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="rounded-full p-2 bg-white shrink-0">
                          {getSectionIcon(section.title)}
                        </div>
                        <h3 className="font-semibold text-secondary-800 text-sm leading-tight">
                          {section.title}
                        </h3>
                      </div>

                      <p className="text-secondary text-xs leading-relaxed line-clamp-3">
                        <span className="font-semibold">Core Focus:</span>{" "}
                        {section.content}
                      </p>

                      {section.tips && section.tips.length > 0 && (
                        <div className="mt-1">
                          <button
                            onClick={() =>
                              setExpandedIndex(isExpanded ? null : index)
                            }
                            className="flex items-center gap-1 text-xs font-medium text-primary hover:text-secondary transition-colors"
                          >
                            <Lightbulb size={14} className="text-purple-600" />
                            {isExpanded
                              ? "Hide tips"
                              : `${section.tips.length} tip${section.tips.length > 1 ? "s" : ""}`}
                            <ChevronDown
                              size={14}
                              className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                            />
                          </button>

                          <AnimatePresence initial={false}>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="flex flex-col gap-1.5 mt-2 px-3 py-3 bg-white rounded-md">
                                  {section.tips.map((tip, i) => (
                                    <span
                                      key={i}
                                      className="text-gray-700 text-xs block"
                                    >
                                      • {tip}
                                    </span>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      <FloatingElements />
    </section>
  );
}

