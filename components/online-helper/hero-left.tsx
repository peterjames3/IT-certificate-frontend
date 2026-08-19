"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";

const LeftHero = () => {
  const router = useRouter();

  return (
    <div className="h-full w-full mx-auto px-2 flex items-center">
      <div>
        <div>
          <h2 className="text-sm font-semibold tracking-wider uppercase text-primary mb-2">
            Take My Online Exam For Me
          </h2>

          <h3 className="text-2xl sm:text-[2.5rem] lg:text-[2.6rem] xl:text-[2.8rem] font-bold mb-6 leading-tight">
            <span className="text-secondary">
              Hire Verified Exam Experts To{" "}
            </span>
            <span className="text-[#10b981]">Pass Your Online Exams </span>
            <span className="text-secondary">With Guaranteed Results </span>
          </h3>

          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Get professional online exam help from subject-matter experts who
            specialize in every major testing platform, including
            <strong className="text-secondary font-medium">
              {" "}
              ProctorU, Examity, Proctorio, Canvas, Blackboard, Moodle, and
              Pearson VUE.
            </strong>{" "}
            From timed quizzes to high-stakes certification exams, our secure
            proxy services ensure top scores with complete confidentiality.
          </p>

          {/* ── Button row ── */}
          <motion.div className="flex flex-wrap items-center gap-4">
            {/* Primary CTA — full hero swap */}
            <motion.button
              onClick={() => router.push("/order")}
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

export default LeftHero;