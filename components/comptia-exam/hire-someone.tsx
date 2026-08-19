"use client";
import { motion } from "motion/react";
import LeftSection from "@/components/about-us/about-left";
import HireSomeoneRight from "./hire-someone-right";

export default function HireSomeoneSection() {
  return (
    <section className="w-full py-16 px-4 lg:px-8 bg-primary-50/80 ">
      <div className="max-w-full mx-auto flex flex-col-reverse md:flex-row gap-18 md:gap-12 items-center lg:max-w-310">
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        >
          <LeftSection />
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        >
          <HireSomeoneRight />
        </motion.div>
      </div>
    </section>
  );
}
