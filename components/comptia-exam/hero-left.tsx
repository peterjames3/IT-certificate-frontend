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
    <div className="h-full w-full mx-auto px-2 flex items-center">
      <div>
        <div>
          <h2 className="text-sm font-semibold tracking-wider uppercase text-primary mb-2">
            Take My CompTIA Exam For Me
          </h2>

          <h3 className="text-2xl sm:text-[2.5rem] lg:text-[2.6rem] xl:text-[2.8rem] font-bold mb-6 leading-tight">
            <span className="text-secondary">
              Hire Verified CompTIA Experts To{" "}
            </span>
            <span className="text-[#10b981]">Take your CompTIA Exams </span>
            <span className="text-secondary">
              Secure, Confidential & Guaranteed{" "}
            </span>
          </h3>

          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Struggling to balance an intensive IT career, professional
            commitments, and rigorous exam prep? At Hire Exam Ace, you can pay
            someone to take your CompTIA exam with absolute confidence and total
            operational anonymity.
            <strong className="text-secondary font-medium">
              {" "}
              Our verified CompTIA specialists cover all 19 certifications,
            </strong>{" "}
            ranging from fundamental tracks like CompTIA A+ and Network+ to
            high-tier tracks like Security+, CySA+, and PenTest+.
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
