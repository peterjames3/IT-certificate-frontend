// components/HeroLeft.tsx
import React from "react";
import { ArrowRight, Star } from "lucide-react"; // Ensure lucide-react is installed

export const HeroLeft = () => {
  return (
    <div className="flex flex-col justify-center space-y-6 w-full text-left">
      {/* Badge Notice */}
      <div className="inline-flex items-center gap-2 bg-[#e6f7f0] border border-[#bbf7d0] text-[#0f766e] px-4 py-1.5 rounded-full w-fit shadow-sm">
        <svg
          className="w-4 h-4 text-[#10b981]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="text-xs font-bold tracking-wide uppercase">
          100% Satisfaction Guarantee
        </span>
      </div>

      {/* Hero Heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
        Pay Someone to <br />
        Take My{" "}
        <span className="text-[#10b981] relative inline-block">
          Proctored IT
        </span>
        <br />
        Exam at Fair Rates
      </h1>

      {/* Hero Subtitle Description */}
      <p className="text-base sm:text-lg text-slate-600 font-normal max-w-lg leading-relaxed">
        Pass your{" "}
        <span className="font-semibold text-slate-800">
          AWS, CompTIA, Azure, or Red Hat Linux
        </span>{" "}
        certification on the first try. Get secure, untraceable remote proxy
        testing assistance tailored specifically for busy system engineers and
        IT professionals.
      </p>

      {/* Action Buttons Container */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button className="inline-flex items-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white font-semibold px-7 py-4 rounded-full transition-all shadow-lg shadow-emerald-200 hover:shadow-xl hover:translate-y-[-1px] active:translate-y-0 group">
          Get Exam Pricing
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <button className="inline-flex items-center gap-1.5 bg-transparent hover:bg-slate-50 text-slate-800 font-bold px-6 py-4 rounded-full transition-colors group">
          See Supported Certs
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Ratings & Social Proof Divider */}
      <div className="pt-6 flex items-center gap-6 border-t border-slate-100">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
          ))}
          <span className="ml-2 font-bold text-slate-800 text-base">4.7</span>
          <span className="text-slate-400 text-sm font-medium">
            (4.2k Ratings)
          </span>
        </div>

        <div className="h-6 w-[1px] bg-slate-200" />

        <p className="text-sm text-slate-500 font-medium max-w-[200px]">
          Undetectable OnVUE & Pearson VUE proxy configurations
        </p>
      </div>
    </div>
  );
};
