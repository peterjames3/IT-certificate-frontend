"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const LeftHero = () => {
  return (
    <div className="h-full w-full mx-auto px-2 flex items-center">
      <div>
        <div>
          <h2 className="text-sm font-semibold tracking-wider uppercase text-primary mb-2">
            Take ISACA Exams For Me With Professional Exam Takers
          </h2>

          <h3 className="text-2xl sm:text-[2.5rem] lg:text-[2.6rem] xl:text-[2.8rem] font-bold mb-6 leading-tight">
            <span className="text-secondary">
              Hire Verified Exam Takers To{" "}
            </span>
            <span className="text-[#10b981]">
              Take Your CISA CISM CRISC Exams{" "}
            </span>
            <span className="text-secondary">Using Secure Proxy </span>
          </h3>

          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            If you struggle to balance your busy career with intensive IT
            governance, risk management, and security preparation, you can pay a
            professional exam taker to take your ISACA certification exam with
            total operational anonymity. Our professional exam takers leverage
            secure proxy services to clear all primary validation tracks,
            including
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
