// components/HeroRight.tsx
import React from "react";
import Image from "next/image";
import {CertificationCard} from "./certificate-cards"

// const InstructorsCard = () => {
//   return (
//     <div className="absolute bottom-[15%] left-[-10%] md:left-[-5%] bg-white/75 backdrop-blur-md border border-white/40 pl-4 pr-6 py-3.5 rounded-2xl shadow-xl flex items-center gap-3.5 animate-bounce-slow z-30 select-none">
//       <div className="w-11 h-11 rounded-full border-2 border-white shadow-sm overflow-hidden flex-shrink-0">
//         <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <defs>
//             <linearGradient id="avatarBg" x1="0%" y1="0%" x2="100%" y2="100%">
//               <stop offset="0%" stopColor="#34d399" />
//               <stop offset="100%" stopColor="#059669" />
//             </linearGradient>
//           </defs>
//           <rect width="40" height="40" fill="url(#avatarBg)" />
//           <circle cx="20" cy="15" r="5.5" fill="#ffffff" />
//           <path d="M9 30.5 C9 24.5, 14 22.5, 20 22.5 C26 22.5, 31 24.5, 31 30.5" fill="#ffffff" />
//           <path d="M16.5 22.5 L20 26.5 L23.5 22.5" stroke="url(#avatarBg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//       </div>
//       <div className="flex flex-col justify-center">
//         <span className="text-xl font-extrabold text-slate-800 tracking-tight leading-none">130 +</span>
//         <span className="text-xs text-slate-500 font-bold tracking-wide mt-1 whitespace-nowrap">Expert Instructors</span>
//       </div>
//     </div>
//   );
// };

export const HeroRight = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto flex items-center justify-center min-h-[450px] md:min-h-[550px]">
      {/* Abstract Background Shape */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-[40px] rounded-tr-[100px] rounded-bl-[100px] transform scale-90 md:scale-100 shadow-2xl overflow-hidden"> */}
      {/* Subtle grid pattern overlay inside the green shape */}
      {/* <div className="absolute top-6 right-6 grid grid-cols-4 gap-2 opacity-30">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
          ))}
        </div> */}
      {/* </div> */}

      {/* Main Recreated Character Image */}
      <div className="relative w-full h-full flex items-end justify-center z-10 pt-10">
        <Image
          src="/hero-image2-removebg-preview.png" // Replace with your generated image path
          alt="Educate Student"
          width={480}
          height={520}
          priority
          className="object-contain drop-shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
        />
      </div>

      {/* Floating Elements */}
      {/* <InstructorsCard />
       {/* 1. CompTIA Card - Positioned Middle-Left */}
      <CertificationCard
        positionClasses="bottom-[25%] left-[-12%] md:left-[-8%]"
        animationClass="animate-bounce-slow" // standard floating
        gradientColors={{ from: "#00A1E0", to: "#005D87" }} // CompTIA Blue
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
        positionClasses="top-[20%] left-[-15%] md:left-[-5%]"
        animationClass="animate-bounce-slow [animation-delay:1s]" // Delayed float so they don't sync up
        gradientColors={{ from: "#FF9900", to: "#232F3E" }} // AWS Orange/Squid Ink
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
        positionClasses="bottom-[45%] right-[-12%] md:right-[-6%]"
        animationClass="animate-bounce-slow [animation-delay:2s]" // Fully offset animation cycle
        gradientColors={{ from: "#00A4EF", to: "#7FBA00" }} // Classic Microsoft Colors
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
      <div className="absolute top-[5%] right-[-5%] grid grid-cols-4 gap-3 opacity-20 hidden sm:grid">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-slate-800 rounded-full" />
        ))}
      </div>
    </div>
  );
};
