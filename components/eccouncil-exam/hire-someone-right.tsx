
import {

  Timer,
  ClipboardCheck,
} from "lucide-react";

export default function HireSomeoneRight() {
  const features = [
    {
      label: "Timed Pressure",
      icon: <Timer className="w-6 h-6 text-blue-500" />,
      description:'Strict time limits with no pause option. Our experts manage pacing across every section so nothing is left unanswered when the clock runs out.',
      
    },
    {
      label: "Post-exam Debrief",
      icon: <ClipboardCheck className="w-6 h-6 text-purple-500" />,
      description:"After every session we confirm your results are posted correctly and handle any follow-up the platform requires.",
      
    },
    
  ];

  return (
    <article className="w-full space-y-3">
      <article>
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 leading-snug">
          Looking To Pay Someone  To Take My {" "}
          <span className="text-accent-500">EC-Council Exam</span>? Here
          Is What Our Proxy Services Handle for You.
        </h2>
         <p className="text-lg">
         EC-Council exams are genuinely difficult, featuring challenging multiple-choice questions combined with demanding practical simulations that test your real penetration testing and network defense skills. Our professional exam takers use advanced secure proxy services to handle every complex challenge EC-Council proctored exams present, ensuring you achieve certification success. Other stuffs we handle: 
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
