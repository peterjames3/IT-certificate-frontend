import FeatureButton from "../learning-section/feature-button";
import {
  ScanFace,
  MonitorOff,
  Timer,
  Wifi,
  Eye,  
  ClipboardCheck,
} from "lucide-react";

export default function HireSomeoneRight() {
  const features = [
    {
      label: "Lockdown Browser",
      icon: <MonitorOff className="w-6 h-6 text-green-500" />,
      color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    },
    {
      label: "Identity verification",
      icon: <ScanFace className="w-6 h-6 text-green-500" />,
      color: "bg-blue-50 text-blue-700 border-blue-100",
    },
    {
      label: "AI behaviour Monitoring",
      icon: <Eye className="w-6 h-6 text-green-500" />,
      color: "bg-accent-50 text-accent-600 border-orange-100",
    },
    {
      label: "Timed Pressure",
      icon: <Timer className="w-6 h-6 text-green-500" />,
      color: "bg-[#D9F3D8] text-secondary-400 border-[#D9F3D8]",
    },
    {
      label: "Post-exam Debrief",
      icon: <ClipboardCheck className="w-6 h-6 text-green-500" />,
      color: "bg-blue-50 text-blue-700 border-blue-100",
    },
    {
      label: "Technical disconnects",
      icon: <Wifi className="w-6 h-6 text-green-500" />,
      color: "bg-[#D9F3D8] text-secondary-400 border-[#D9F3D8]",
    },
  ];

  return (
    <article className="w-full space-y-3">
      <article>
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 leading-snug">
          Looking to Hire Someone to{" "}
          <span className="text-accent-700">Take My ITIL Exam</span>? Here Is
          What We Handle for You.{" "}
        </h2>
        <p className="text-lg mb-2">
          Proctored platforms are built to be stressful with webcam checks and timed
          pressure. Our experts handle every challenge ITIL v4 proctored exams
          throw at you standard.
        </p>
      </article>
      <article className="space-y-2">
        <h3 className="text-xl font-semibold">
          Here is What We Handle When you pay us to take ITIL 4 Exam
          for you{" "}
        </h3>

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
