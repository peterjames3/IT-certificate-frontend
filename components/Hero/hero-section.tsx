// components/HeroSection.tsx

import { HeroLeft } from "./hero-left";
import { HeroRight } from "./hero-right";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-tr from-primary-50 via-[#ffffff] to-[#f0f9ff] py-16 md:py-24 px-4 sm:px-6 lg:px-8 mt-35">
      {/* Background Decorative Mesh Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-emerald-100/40 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[35vw] h-[35vw] rounded-full bg-sky-100/30 blur-[100px] pointer-events-none" />

      {/* Main Content Layout Wrapper */}
      <div className="w-full  max-w-full lg:max-w-310 xl:max-w-360 mx-auto flex flex-col gap-10 lg:flex-row md:justify-between">
        {/* Left Interactive Column */}
        <div className="w-full lg:w-1/2">
          <HeroLeft />
        </div>

        {/* Right Graphical Column */}
        <div className="w-full lg:w-1/2">
          <HeroRight />
        </div>
      </div>
    </section>
  );
}
