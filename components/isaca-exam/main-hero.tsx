"use client";
import LeftHero from "./hero-left";
import RightHero from "@/components/cisco-ccna-exam/hero-right";
import FloatingElements from "../animation/FloatingElements";



export default function MainHero() {

  return (
    <section
      id="hero-main"
      className="bg-linear-to-tr from-primary-50 via-[#ffffff] to-[#f0f9ff] min-h-[10rem] z-10 relative"
    >
     
        <div className="pt-[10rem] py-2 w-full mx-auto max-w-full lg:max-w-[1240px] flex  flex-col gap-8 lg:flex-row  md:justify-between">
          <div className="w-full lg:w-1/2">
            <LeftHero />
          </div>
          <div className="w-full lg:w-1/2">
            {" "}
            <RightHero />{" "}
          </div>
        </div>
    

      <FloatingElements />
    </section>
  );
}