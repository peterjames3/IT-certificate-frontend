"use client";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const LeftHero = () => {
const router = useRouter();
  return (
    <div className="h-full w-full mx-auto px-2 flex items-center">
      <div>
        <div>
          <h2 className="text-sm font-semibold tracking-wider uppercase text-primary mb-2">
            EC-Council Proctored Exams Help With Professional Exam Takers
          </h2>

          <h3 className="text-2xl sm:text-[2.5rem] lg:text-[2.6rem] xl:text-[2.8rem] font-bold mb-6 leading-tight">
            <span className="text-secondary">
              Take My Ec-Council Exams{" "}
            </span>
            <span className="italic font-serif font-normal underline decoration-accent-400">
              CEH
            </span>
            ,
            <span className="italic font-serif font-normal underline decoration-accent-400">
              {" "}
              CND{" "}
            </span>
            ,
            <span className="italic font-serif font-normal underline decoration-accent-400">
              {" "}
              ECSA{" "}
            </span>
            <span className="text-secondary"> Guaranteed Pass.</span>
          </h3>

          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Ec-Council certifications can feel overwhelming, confusing, and time-consuming, especially when you're already juggling work, studies, or life. That's where we step in, you can pay a
            professional exam taker to take your EC-Council certification exam.
             </p>

          <motion.button
            onClick={()=>router.push("/order")}
            className="cta hover:cursor-pointer flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Exam Taker Now! <ArrowRight />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default LeftHero;
