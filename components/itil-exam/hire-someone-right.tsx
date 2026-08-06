import {
  Timer,
  ClipboardCheck,
  BookOpen,
  Target,
  ShieldCheck,
  GitBranch,
} from "lucide-react";

export default function HireSomeoneRight() {
  const features = [
    {
      label: "Timed Pressure",
      icon: <Timer className="w-6 h-6 text-blue-500" />,
      description: 'Strict time limits with no pause option. Our experts manage pacing across every section so nothing is left unanswered when the clock runs out.',
    },
    {
      label: "Post-exam Debrief",
      icon: <ClipboardCheck className="w-6 h-6 text-purple-500" />,
      description: "After every session we confirm your results are posted correctly and handle any follow-up the platform requires.",
    },
    {
      label: "Complex Scenario Questions",
      icon: <BookOpen className="w-6 h-6 text-emerald-500" />,
      description: "ITIL exams feature multi-layered scenario-based questions testing service value chains, governance practices, and stakeholder management. Our ITSM experts navigate these complex evaluations with precision.",
    },
    {
      label: "Service Value System Mastery",
      icon: <GitBranch className="w-6 h-6 text-orange-500" />,
      description: "From guiding principles to four dimensions of service management, our exam takers have deep mastery over the entire ITIL framework to answer even the most challenging questions.",
    },
    {
      label: "Managing Professional Modules",
      icon: <ShieldCheck className="w-6 h-6 text-cyan-500" />,
      description: "Whether it's CDS, DSV, HVIT, or DPI, our specialists hold active ITIL Managing Professional credentials and understand every module inside out.",
    },
    {
      label: "Strategic Leader Content",
      icon: <Target className="w-6 h-6 text-rose-500" />,
      description: "For DITS and other Strategic Leader exams, our experts bring real-world digital strategy and IT leadership experience to every question.",
    },
  ];

  return (
    <article className="w-full space-y-3">
      <article>
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 leading-snug">
          Looking To Pay Someone To Take My{" "}
          <span className="text-accent-500">ITIL Exam</span>? Here
          Is What Our Proxy Services Handle for You.
        </h2>
        <p className="text-lg mt-2">
          ITIL exams are genuinely challenging, featuring complex scenario-based questions that test your understanding of the Service Value System, guiding principles, four dimensions of service management, and real-world service delivery practices. Our professional exam takers use advanced secure proxy services to handle every complex challenge ITIL proctored exams present, ensuring you achieve certification success. Here&apos;s what we handle:
        </p>
      </article>
      <article className="space-y-2">
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
          {features.map((feature, index) => (
            <article key={index}>
              <div className="flex items-center space-x-2 mb-2">
                {feature.icon}
                <h3 className="text-lg font-semibold">{feature.label}</h3>
              </div>
              <p className="text-title">{feature.description}</p>
            </article>
          ))}
        </div>
      </article>
    </article>
  );
}