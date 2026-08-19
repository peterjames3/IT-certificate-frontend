"use client";
import { useRouter } from "next/navigation"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const LeftHero = () => {
  const router = useRouter()

  return (
    <div className="h-full w-full mx-auto px-2 flex items-center">
      <div>
        <div>
          <h2 className="text-sm font-semibold tracking-wider uppercase text-primary mb-2">
            Take Cisco CCNA Exams For Me
          </h2>

          <h3 className="text-2xl sm:text-[2.5rem] lg:text-[2.6rem] xl:text-[2.8rem] font-bold mb-6 leading-tight">
            <span className="text-secondary">
              Hire Verified Cisco Experts To{" "}
            </span>
            <span className="text-[#10b981]">Take Your CCNA Proctored Exams </span>
            <span className="text-secondary">Securely </span>
          </h3>

          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            If you struggle to balance your busy career with intensive
            networking preparation, you can pay someone to take your Cisco CCNA
            exam with total operational anonymity. Our professional exam takers
            leverage secure proxy services to clear all primary validation
            tracks.
          </p>

          <motion.button
            onClick={()=>router.push('/order')}
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
