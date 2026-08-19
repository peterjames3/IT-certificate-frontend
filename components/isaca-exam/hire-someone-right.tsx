import FeatureButton from "../learning-section/feature-button";
import {

  MonitorOff,
  Timer,
  Wifi,
  Eye,
 
} from "lucide-react";

export default function HireSomeoneRight() {
  const features = [
    {
      label: "Lockdown Browser",
      icon: <MonitorOff className="w-6 h-6 text-green-500" />,
      color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    },
    {
      label: "AI Behaviour Monitoring",
      icon: <Eye className="w-6 h-6 text-green-500" />,
      color: "bg-accent-50 text-accent-600 border-orange-100",
    },
    {
      label: "Timed Pressure",
      icon: <Timer className="w-6 h-6 text-green-500" />,
      color: "bg-[#D9F3D8] text-secondary-400 border-[#D9F3D8]",
    },
    {
      label: "Technical Disconnects",
      icon: <Wifi className="w-6 h-6 text-green-500" />,
      color: "bg-[#D9F3D8] text-secondary-400 border-[#D9F3D8]",
    },
  ];

  return (
    <article className="w-full space-y-3">
      <article>
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 leading-snug">
          Looking to Hire a Professional Exam Taker to{" "}
          <span className="text-accent-700">Take My ISACA Exam</span>? Here Is
          What Our Proxy Services Handle for You.
        </h2>
        <p className="text-lg mb-2">
          Proctored platforms are built to be stressful with webcam checks and
          timed pressure. Our professional exam takers handle every challenge
          ISACA proctored exams throw at you, utilizing our secure proxy
          services to ensure complete anonymity and operational safety for your
          CISA, CISM, CRISC, CGEIT, or CDPSE certification.
        </p>
      </article>
      <article className="space-y-2">
        <h3 className="text-xl font-semibold">
          Other Things We Handle
        </h3>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
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