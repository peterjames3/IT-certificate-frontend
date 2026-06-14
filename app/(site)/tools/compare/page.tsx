// app/(site)/it-certificate-tools/compare/page.tsx
import { Metadata } from "next";
import Comparetool from "@/components/certifications/compare-tools";

export const metadata: Metadata = {
  title: "Compare Certifications | Certificate Tools — TestHelpNow",
  description:
    "Compare 2 or 3 IT certifications side by side — cost, difficulty, salary impact, job demand, renewal, and more.",
};

export default function ComparePage() {
  return (
    <main className="wrapper py-12 min-h-screen">
      {/* Page header */}
      <div className="mb-10">
        <span className="text-sm font-medium text-primary-500 uppercase tracking-wide">
          Certificate Tools
        </span>
        <h1 className="text-3xl font-bold text-secondary-800 mt-1">
          Compare Certifications
        </h1>
        <p className="text-secondary-500 mt-2 max-w-xl">
          Select 2 or 3 certifications to compare them side by side across cost,
          difficulty, salary impact, job demand, and renewal requirements.
        </p>
      </div>

      <Comparetool />
    </main>
  );
}
