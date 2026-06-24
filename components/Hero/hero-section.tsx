"use client";
// components/HeroSection.tsx

import { HeroLeft } from "./hero-left";
import { HeroRight } from "./hero-right";
import { motion } from "framer-motion";
export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-tr from-primary-50 via-[#ffffff] to-[#f0f9ff] py-16 md:py-24  mt-35">
      {/* Background Decorative Mesh Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-emerald-100/40 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[35vw] h-[35vw] rounded-full bg-sky-100/30 blur-[100px] pointer-events-none" />

      {/* Main Content Layout Wrapper */}
      <div className="w-full px-3  max-w-full lg:max-w-310 mx-auto flex flex-col gap-10 lg:flex-row md:justify-between">
        {/* Left Interactive Column */}
        <div className="w-full lg:w-1/2">
          <HeroLeft />
        </div>

        {/* Right Graphical Column */}
        <motion.div
          key="hero-right"
          initial={{ opacity: 0, scale: 0.85, z: -100, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, z: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.85, z: -100, filter: "blur(8px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full lg:w-1/2"
        >
          <HeroRight />
        </motion.div>
      </div>
    </section>
  );
}
