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
      icon: <MonitorOff className="size-6 " />,
    },
    {
      label: "Identity verification",
      icon: <ScanFace className="size-6" />,
    },
    {
      label: "AI behaviour Monitoring",
      icon: <Eye className="size-6 " />,
    },
    {
      label: "Timed Pressure",
      icon: <Timer className="w-6 h-6 text-green-500" />,
    },
    {
      label: "Post-exam Debrief",
      icon: <ClipboardCheck className="size-6" />,
    },
    {
      label: "Technical disconnects",

      icon: <Wifi className="size-6 " />,
    },
  ];
  return (
    <article className="w-full space-y-3 ">
      <article>
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 leading-snug">
          Looking to Hire Someone to{" "}
          <span className="text-accent-700">Take My Azure Exam</span>? Here Is
          What We Handle for You.{" "}
        </h2>
        <p className="text-lg mb-2 ">
          Proctored platforms are built to be stressful: webcam checks, timed
          pressure etc. Our experts handle every challenge Azure proctored exams
          throw at you standard.
        </p>
      </article>
      <article className="space-y-2">
        <h3 className="text-xl font-semibold">
          Here is What We Handle When you pay us to take Microsoft Azure Exam
          for you{" "}
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
