"use client";
import { useUIDispatch } from "@/context/UIContext";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroLeftProps {
  onGetStarted: () => void;
  onGetQuote: () => void;
}

const LeftHero = ({
  onGetStarted,
  onGetQuote,
}: HeroLeftProps) => {
  const dispatch = useUIDispatch();
  const toggleForm = () => {
    dispatch({ type: "SHOW_HELP" });
  };

 const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
            <span className="text-[#10b981]">Take Your ITIL Exams </span>
            <span className="text-secondary">Secure & Confidential </span>
          </h3>

          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            If you struggle to balance your busy career with intensive IT service 
            management preparation, you can pay someone to take your ITIL exam 
            with total operational anonymity. Our professional exam takers 
            leverage secure proxy services to clear all primary validation 
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
          variants={itemVariants}
        >
          {/* Primary CTA — full hero swap */}
          <motion.button
            onClick={onGetStarted}
            className="cta hover:cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Proctored Exam Help
          </motion.button>

          {/* Animated arrow + secondary CTA group */}
          <div className="flex items-center gap-2">
            {/* Bouncing arrow pointing right toward the button */}
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              className="text-secondary"
            >
              <ArrowRight size={20} strokeWidth={2.5} />
            </motion.div>

            {/* Get a Free Quote — ghost / outline style using site tokens */}
            <motion.button
              onClick={onGetQuote}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="
                relative flex items-center gap-2
                px-8 py-3 rounded-lg font-bold text-lg
                border-2 border-secondary text-secondary
                bg-transparent
                transition-all duration-300
                hover:bg-secondary hover:text-[#f8f9fa]
                hover:cursor-pointer
                overflow-hidden
                group
              "
            >
              {/* subtle fill sweep on hover */}
              <span
                className="
                  absolute inset-0 bg-secondary
                  translate-x-[-101%] group-hover:translate-x-0
                  transition-transform duration-300 ease-out
                  rounded-lg
                "
              />
              <span className="relative z-10">Get a Free Quote</span>
              <ArrowRight
                size={18}
                strokeWidth={2.5}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LeftHero
