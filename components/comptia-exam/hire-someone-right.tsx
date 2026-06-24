import FeatureButton from "../learning-section/feature-button";

export default function HireSomeoneRight() {
  const features = [
    {
      label: "Lockdown Browser",
      icon: "⏱️",
      color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    },
    {
      label: "AI behaviour Monitoring",
      icon: "⚡",
      color: "bg-accent-50 text-accent-600 border-orange-100",
    },
    {
      label: "Timed Pressure",
      icon: "☁️",
      color: "bg-[#D9F3D8] text-secondary-400 border-[#D9F3D8]",
    },
    {
      label: "Post-exam Debrief",
      icon: "💎",
      color: "bg-blue-50 text-blue-700 border-blue-100",
    },
  ];
  return (
    <article className="w-full space-y-3 ">
      <article>
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 leading-snug">
          Looking to Hire Someone to{" "}
          <span className="text-accent-700">Take My CompTIA Exam</span>? Here is
          What You Need to Know.{" "}
        </h2>
        <p className="text-lg mb-2 ">
          CompTIA the Computing Technology Industry Association is the
          world&apos;s leading provider of vendor-neutral IT certifications.
          Holding a CompTIA certification tells any hiring manager that your
          technical skills have been independently verified to the highest
          standard.
        </p>
        <p className="text-lg">
          But here is what most students discover too late: passing CompTIA
          exams is genuinely difficult. The exams combine multiple-choice
          questions with performance-based simulations that require you to
          demonstrate real technical skills, not just recall memorized answers.
        </p>
      </article>
      <article className="space-y-2">
        <h2 className="text-2xl font-semibold">
          Here is What We Handle When you pay us for CompTIA Exam Support
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
          {features.map((feature, index) => (
            <FeatureButton
              key={index}
              label={feature.label}
              icon={feature.icon}
              colorClass={feature.color}
            />
          ))}
        </div>
      </article>
    </article>
  );
}
