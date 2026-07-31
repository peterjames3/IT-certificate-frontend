"use client";
import { useUIDispatch } from "@/context/UIContext";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const LeftHero = () => {
  const dispatch = useUIDispatch();
  const toggleForm = () => {
    dispatch({ type: "SHOW_HELP" });
  };

  return (
    <div className="h-full w-full mx-auto px-6 flex items-center">
      <div>
        <div>
          {/* SEO Short-Tail Target: Tells Google exactly what the page is about */}
          <h2 className="text-sm font-semibold tracking-wider uppercase text-primary mb-2">
            Secure IT Certification Exam Assistance
          </h2>

          {/* Core Hook & Value Prop */}
          <h3 className="text-3xl sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.1rem] font-bold mb-6 leading-tight">
            <span className="text-secondary">Want to Understand How Our Proctored IT </span>
            <span className="text-accent underline italic">
               Exam {" "}
            </span>
            <span className="text-secondary">Help Work Before You Commit?</span>
          </h3>

          {/* Body Text: Natural Long-Tail Integration (No registration, clears strict proctor checks) */}
          <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-xl">
            Our process is built entirely around professional privacy. You can
            <strong className="text-secondary font-medium">
              {" "}
              pay for exam help without registration
            </strong>
            . We map out custom hardware and software logistics designed to
            clear strict automated proctoring flags smoothly.
          </p>

          <motion.button
            onClick={toggleForm}
            className="cta hover:cursor-pointer flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Exam Help Now! <ArrowRight />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default LeftHero;
