"use client";
import { motion } from "framer-motion";
import FeatureButton from "./feature-button";
import GraphicCluster from "./graphic-cluster";
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import {
  
  MonitorOff,
  Timer,
  
  Eye,  
  ClipboardCheck,
} from "lucide-react";

export default function LearningSection() {
  const features = [
    {
      label: "Lockdown Browser",
      icon: <MonitorOff className="size-6"/>,
    },
    {
      label: "AI behaviour Monitoring",
      icon: <Eye className="size-6"/>,
    },
    {
      label: "Time Pressure",
      icon: <Timer className="size-6"/>,
    },
    {
      label: "Post-exam Debrief",
      icon: <ClipboardCheck className='size-6'/>,
    },
  ];
  const router = useRouter();
  return (
  
    <section className="w-full py-16 bg-[#f4faf7]">
      <div className="w-full mx-auto max-w-full lg:max-w-310 flex flex-col lg:flex-row gap-12 items-center px-6">
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: -60, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
          className="w-full lg:w-1/2"
        >
          <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase">
            Expedited Delivery & Support
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            On-Demand Proctored IT Exam Help With Guaranteed Results
          </h2>

          <p className="text-slate-600 max-w-xl leading-relaxed text-sm md:text-base mt-4">
            Struggling with a looming deadline or figuring out{" "}
            <span className="font-semibold text-slate-800">
              how to pass CompTIA, AWS, Azure, ITIL-v4, ISACA, GCP, etc  without studying
            </span>
            ? Our system acts as an ultimate{" "}
            <Link href="/online-exam-helper" prefect={true} className="font-semibold text-slate-800">
              online exam helper
            </Link>
            . We fast-track your certifications before your corporate vouchers
            expire, providing a secure and professional shortcut to high-tier
            industry badges.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
            {features.map((feature, index) => (
              <FeatureButton
                key={index}
                label={feature.label}
                icon={feature.icon as unknown as string}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="pt-8">
            <button
             onClick={()=> router.push('/order')} className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-emerald-500 rounded-full hover:bg-emerald-600 transition-colors shadow-sm shadow-emerald-200 group">
              Book Urgent Slot
              <svg
                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Right Column: Visual Clusters */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotate: 5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <GraphicCluster />
        </motion.div>
      </div>
    </section>
  );
}
