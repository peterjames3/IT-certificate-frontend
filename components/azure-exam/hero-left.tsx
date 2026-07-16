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
            Take Azure-Based Exams For Me
          </h2>

          <h3 className="text-2xl sm:text-[2.5rem] lg:text-[2.6rem] xl:text-[2.8rem] font-bold mb-6 leading-tight">
            <span className="text-secondary">
              Hire Verified Azure Experts To{" "}
            </span>
            <span className="text-[#10b981]">Take Your Azure Exams </span>
            <span className="text-secondary">Secure & Confidential </span>
          </h3>

          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            If you struggle to balance your busy career with intensive cloud
            preparation, you can pay someone to take your Microsoft Azure exam
            with total operational anonymity. Our professional exam takers
            leverage secure proxy services to clear all primary validation
            tracks, including
            <strong className="text-secondary font-medium">
              {" "}
              tracks like AZ-900 to associate and expert tracks like AZ-104,
              AZ-500, and AZ-305.
            </strong>{" "}
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
