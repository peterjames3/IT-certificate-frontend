// app/(site)/tools/roadmap/page.tsx
import { Metadata } from "next";
import RoadmapTool from "@/components/roadmap/road-map-tool";

export const metadata: Metadata = {
  title: "Certification Roadmap | Certificate Tools — TestHelpNow",
  description:
    "Get a personalised IT certification roadmap for your target role — beginner to advanced, with cost and time estimates.",
};

export default function RoadmapPage() {
  return (
    <main className="wrapper py-12 min-h-screen">
      {/* Page header */}
      <div className="mb-10">
        <span className="text-sm font-medium text-primary-500 uppercase tracking-wide">
          Certificate Tools
        </span>
        <h1 className="text-3xl font-bold text-secondary-800 mt-1">
          Certification Roadmap
        </h1>
        <p className="text-secondary-500 mt-2 max-w-xl">
          Enter your target role and get a structured certification path —
          grouped by beginner, intermediate, and advanced levels with cost
          and time estimates for each.
        </p>
      </div>

      <RoadmapTool />
    </main>
  );
}