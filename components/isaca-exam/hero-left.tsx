"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const LeftHero = () => {
  return (
    <div className="h-full w-full mx-auto px-2 flex items-center">
      <div>
        <div>
          <h2 className="text-sm font-semibold tracking-wider uppercase text-primary mb-2">
            ISACA Proctored Exams Help
          </h2>

          <h3 className="text-2xl sm:text-[2.5rem] lg:text-[2.6rem] xl:text-[2.8rem] font-bold mb-6 leading-tight">
            <span className="text-secondary">
              Hire Exam Takers To Pass{" "}
            </span>
            <span className="italic font-serif font-normal underline decoration-accent-400">CISA</span>,
            <span className="italic font-serif font-normal underline decoration-accent-400"> CISM  </span>,
             <span className="italic font-serif font-normal underline decoration-accent-400"> CRISC </span>
            <span className="text-secondary"> Exams On Your Behalf </span>
          </h3>

          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            If you struggle to balance your busy career with intensive IT
            governance, risk management, and security preparation, you can pay a
            professional exam taker to take your ISACA certification exam with
            total operational anonymity. Our team leverage secure proxy services
            to clear all primary validation tracks, including
            <strong className="text-secondary font-medium">
              {" "}
              CISA, CISM, CRISC, CGEIT, and CDPSE.
            </strong>{" "}
          </p>

          <motion.button
            className="cta hover:cursor-pointer flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Your Exam Taker Now! <ArrowRight />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default LeftHero;
