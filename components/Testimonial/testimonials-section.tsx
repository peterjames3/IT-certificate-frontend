// components/TestimonialsPage.tsx
import TestimonialScroller from "./testimonial-scroller";
import FloatingElements from "../animation/FloatingElements";

const topRowTestimonials = [
  {
    name: "Paul H.",
    location: "London, UK",
    date: "14 May, 2026",
    rating: 5,
    content:
      "Absolutely phenomenal proxy testing service. Was incredibly nervous about the background configuration on OnVUE for my AWS Solutions Architect Professional exam, but everything went completely undetected. Locked in a solid passing score on the first try.",
  },
  {
    name: "Ananya R.",
    location: "Bangalore, India",
    date: "22 Apr, 2026",
    rating: 5,
    content:
      "Had a corporate voucher for the CompTIA Security+ expiring in 48 hours with zero time to cram between my on-call rotations. These guys set up a pristine, safe environment and handled the technical questions perfectly. Total lifesaver for my promotion timeline.",
  },
  {
    name: "Kevin M.",
    location: "Toronto, Canada",
    date: "11 Mar, 2026",
    rating: 5,
    content:
      "Highly recommend for any complex infrastructure tracks. I needed urgent cert exam help for the Cisco CCNA. The engineering specialist matched to my session executed the network topology configurations and routing labs flawlessly.",
  },
  {
    name: "Regina H.",
    location: "Sydney, Australia",
    date: "18 Jan, 2026",
    rating: 5,
    content:
      "Excellent communication from start to finish. They walked me through the pre-exam hardware checklist to ensure absolute compliance with the lockdown browser. Clean Pearson VUE candidate profile and an easy pass for my Azure AZ-104.",
  },
];

const bottomRowTestimonials = [
  {
    name: "Sandra K.",
    location: "Berlin, Germany",
    date: "05 Dec, 2025",
    rating: 5,
    content:
      "Super professional and highly discrete. The setup was completely invisible to advanced proctoring software. They helped me secure my Red Hat Certified System Administrator (RHCSA) without losing sanity over timed terminal labs.",
  },
  {
    name: "Derrick J.",
    location: "Singapore",
    date: "14 Nov, 2025",
    rating: 5,
    content:
      "The best online exam helper for systems engineers. Bypassing Honorlock felt like a gamble until I used their hardware-level solution. Passed my Linux Professional Institute LPI exam with an exceptional score. Worth every dollar.",
  },
  {
    name: "Liam O.",
    location: "Dublin, Ireland",
    date: "02 Oct, 2025",
    rating: 5,
    content:
      "Cleared my PMP test without a single flag from the remote proctor. The system workflow runs seamlessly in the background. If you need a reliable proxy testing service to bypass modern test software bottlenecks, this is it.",
  },
  {
    name: "Tunde L.",
    location: "Cape Town, South Africa",
    date: "19 Sep, 2025",
    rating: 5,
    content:
      "Seamless delivery! They paired me with a true cloud expert who cleared my GCP Cloud Engineer assessment in record time. Complete encryption, total privacy safeguards, and an outstanding technical panel.",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="py-16 relative bg-white">
      <section className="w-full mx-auto max-w-full lg:max-w-310 xl:max-w-360">
        <h2 className="text-center text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
          Verified Professional Reviews
        </h2>
        <p className="text-center text-gray-500 text-[1.2rem] md:text-base mb-12 max-w-xl mx-auto">
          See how sysadmins, cloud architects, and security analysts worldwide
          pass their proctored vendor exams safely using our secure proxy
          frameworks.
        </p>

        <div className="space-y-10">
          <TestimonialScroller
            testimonials={topRowTestimonials}
            direction="right"
          />
          <TestimonialScroller
            testimonials={bottomRowTestimonials}
            direction="left"
          />
        </div>
      </section>
      <FloatingElements />
    </div>
  );
}
