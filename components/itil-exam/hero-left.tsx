"use client";

import { motion } from "motion/react";
import { useRouter } from 'next/navigation'



const LeftHero = () => {
  const router = useRouter()

  return (
    <div className="h-full w-full mx-auto px-2 flex items-center">
      <div>
        <div>
          <h2 className="text-sm font-semibold tracking-wider uppercase text-primary mb-2">
            Take ITIL-Based Exams For Me
          </h2>

          <h3 className="text-2xl sm:text-[2.5rem] lg:text-[2.6rem] xl:text-[2.8rem] font-bold mb-6 leading-tight">
            <span className="text-secondary">
              Hire Verified ITIL Experts To{" "}
            </span>
            <span className="text-[#10b981]">Pass ITIL Certification   </span>
            <span className="text-secondary">Exam Online </span>
          </h3>

          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
           Pass ITIL Certification Exam Online with the help of ProctoredExamHelp. Our professional exam takers      leverage secure proxy services to clear all primary validation 
            tracks, including 
            <strong className="text-secondary font-medium">
              {" "}
              tracks like ITIL 4 Foundation to specialist and strategist tracks like 
              CDS, DSV, HVIT, and DPI.
            </strong>{" "}
          </p>

          {/* ── Button row ── */}
        <motion.div
          className="flex flex-wrap items-center gap-4"
          
        >
          {/* Primary CTA — full hero swap */}
          <motion.button
           onClick={() => router.push('/order')}
            className="cta hover:cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Help Now!
          </motion.button>

         
        </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LeftHero
