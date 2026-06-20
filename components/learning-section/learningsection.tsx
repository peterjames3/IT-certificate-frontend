import React from "react";
import FeatureButton from "./feature-button";
import GraphicCluster from "./graphic-cluster";

export default function LearningSection() {
  const features = [
    {
      label: "Active Engagement",
      icon: "✨",
      color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    },
    {
      label: "Research-Based Content",
      icon: "📝",
      color: "bg-orange-50 text-orange-700 border-orange-100",
    },
    {
      label: "Adaptive Learning",
      icon: "🧩",
      color: "bg-purple-50 text-purple-700 border-purple-100",
    },
    {
      label: "Optimizing Progress",
      icon: "📊",
      color: "bg-blue-50 text-blue-700 border-blue-100",
    },
  ];

  return (
    <section className=" w-full py-16  bg-[#f4faf7] ">
      <div className="w-full mx-auto max-w-full lg:max-w-[1240px] xl:max-w-[1440px] flex flex-col lg:flex-row gap-12 items-center px-6">
        {/* Left Column: Content */}
        <div className="w-full lg:w-1/2">
          <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase">
            Our Approach
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Innovative and effective <br className="hidden sm:inline" />{" "}
            learning approaches
          </h2>

          <p className="text-slate-600 max-w-xl leading-relaxed text-sm md:text-base">
            Empower your journey with tailor-made methodologies designed to
            accelerate knowledge retention, foster collaborative environments,
            and unlock practical skills seamlessly.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {features.map((feature, index) => (
              <FeatureButton
                key={index}
                label={feature.label}
                icon={feature.icon}
                colorClass={feature.color}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="pt-6">
            <button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-emerald-500 rounded-full hover:bg-emerald-600 transition-colors shadow-sm shadow-emerald-200 group">
              Get Started
              <svg
                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column: Visual Clusters */}
        <div className="w-full lg:w-1/2">
          <GraphicCluster />
        </div>
      </div>
    </section>
  );
}
