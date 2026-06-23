import Image from "next/image";
import { CertificationCard } from "./certificate-cards";


export const HeroRight = () => {
  return (
    <div className="relative w-full  mx-auto flex items-center justify-center ">
      {/* Main Recreated Character Image */}
      <div className="relative w-full h-full flex items-end justify-center z-10 pt-10">
        <Image
          src="/hero-image2-removebg-preview.png"
          alt="Educate Student"
          width={480}
          height={520}
          priority
          className="object-contain drop-shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
        />
      </div>

      {/* 1. CompTIA Card - Positioned Middle-Left */}
      <CertificationCard
        positionClasses="bottom-[25%] left-[-10%] md:left-[-6%]"
        animationClass="animate-bounce-slow"
        gradientColors={{ from: "#00A1E0", to: "#005D87" }}
        title="CompTIA"
        subtitle="Security+ Certified"
        icon={
          <g
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Minimalist Shield / Security Emblem */}
            <path
              d="M20 9s-7 2-7 6v8c0 5.5 7 8 7 8s7-2.5 7-8v-8c0-4-7-6-7-6z"
              fill="none"
            />
            <path d="M17 19l2 2 4-4" />
          </g>
        }
      />

      {/* 2. AWS Card - Positioned Top-Left (Over the shoulder) */}
      <CertificationCard
        positionClasses="top-[25%] left-[-10%] md:left-[-2%]"
        animationClass="animate-bounce-slow [animation-delay:1s]"
        gradientColors={{ from: "#FF9900", to: "#232F3E" }}
        title="AWS"
        subtitle="Cloud Practitioner"
        icon={
          <g
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Minimalist Cloud / Smile Arrow Icon */}
            <path d="M12 24a5 5 0 0 1 0-10h.3a7 7 0 0 1 13.4 2.5 5 5 0 0 1-.7 9.5H12z" />
            <path d="M15 28c3 2 7 2 10 0" strokeWidth="2" />
            <path d="M25 25v3h-3" strokeWidth="2" />
          </g>
        }
      />

      {/* 3. Microsoft Card - Positioned Middle-Right (Floating outside the tab cutout) */}
      <CertificationCard
        positionClasses="bottom-[45%] right-[-4%] md:right-[-2%]"
        animationClass="animate-bounce-slow [animation-delay:2s]"
        gradientColors={{ from: "#00A4EF", to: "#7FBA00" }}
        title="Microsoft"
        subtitle="Azure Fundamentals"
        icon={
          <g fill="#ffffff" opacity="0.95">
            {/* Clean, recognizable 4-box grid design */}
            <rect x="11" y="11" width="8" height="8" />
            <rect x="21" y="11" width="8" height="8" />
            <rect x="11" y="21" width="8" height="8" />
            <rect x="21" y="21" width="8" height="8" />
          </g>
        }
      />

      {/* Decorative Top/Right Abstract Accents */}
      <div className="absolute top-[5%] right-[5%] grid grid-cols-4 gap-3 opacity-20  sm:grid">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-slate-800 rounded-full" />
        ))}
      </div>
    </div>
  );
};
