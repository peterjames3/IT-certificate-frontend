import FeatureButton from "../learning-section/feature-button";
import { Timer, Wifi } from "lucide-react";

export default function HireSomeoneRight() {
  const features = [
   
  
    {
      label: "Timed Exam Pressure",
      icon: <Timer className="w-6 h-6 text-secondary-500" />,
      color: "bg-[#D9F3D8] text-secondary-400 border-[#D9F3D8]",
    },
    {
      label: "Technical Disconnects",
      icon: <Wifi className="w-6 h-6 text-secondary-500" />,
      color: "bg-[#D9F3D8] text-secondary-400 border-[#D9F3D8]",
    },
  ];

  return (
    <article className="w-full space-y-6">
      {/* What You Need to Know */}
      <article>
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 leading-snug mb-4">
          What You Need to Know
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          These services range from tutoring and study guides to full-service
          exam-taking assistance, depending on the provider and the client&apos;s
          needs. In an era where education has shifted heavily toward virtual
          classrooms and remote testing, online exam help has emerged as a
          critical resource for learners facing the unique pressures of digital
          assessment environments. Whether you&apos;re a college student struggling
          with a calculus final on ProctorU, a working professional preparing
          for a certification exam on Pearson VUE, or a graduate student facing
          a high-stakes comprehensive exam, online exam help services provide
          tailored support designed to improve outcomes.
        </p>
      </article>

      {/* Stats Bar */}
      <article className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-gray-100">
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-extrabold text-accent-500">
            10K+
          </div>
          <div className="text-sm text-gray-500 font-medium mt-1">
            Students Helped
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-extrabold text-accent-500">
            99.4%
          </div>
          <div className="text-sm text-gray-500 font-medium mt-1">
            Success Rate
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-extrabold text-accent-500">
            50+
          </div>
          <div className="text-sm text-gray-500 font-medium mt-1">
            Expert Tutors
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-extrabold text-accent-500">
            24/7
          </div>
          <div className="text-sm text-gray-500 font-medium mt-1">
            Live Support
          </div>
        </div>
      </article>

      {/* Understanding the Landscape */}
      <article className="space-y-4">
        <h3 className="text-xl font-semibold text-secondary-900">
          Understanding the Landscape
        </h3>
        <p className="text-gray-600">
          Proctored platforms are built to be stressful with webcam checks,
          browser lockdowns, and timed pressure. Our professional exam takers
          handle every challenge online proctored exams throw at you, utilizing
          secure proxy services to ensure complete anonymity and operational
          safety across all major platforms.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          {features.map((feature, index) => (
            <FeatureButton
              key={index}
              label={feature.label}
              icon={feature.icon as unknown as string}
           
            />
          ))}
        </div>
      </article>
    </article>
  );
}
