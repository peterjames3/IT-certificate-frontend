// app/(site)/it-certificate-tools/compare/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Comparetool from "@/components/certifications/CompareTool";
import { POPULAR_COMPARISONS, buildCompareSlug } from "@/lib/compareSlugs";

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

      {/* Crawlable links to pre-built popular comparisons.
          This also helps Google *discover* the [slug] pages via internal
          linking, separate from generateStaticParams building them. */}
      <section className="mt-14 max-w-3xl">
        <h2 className="text-lg font-semibold text-secondary-800 mb-4">
          Popular comparisons
        </h2>
        <div className="flex flex-wrap gap-2">
          {POPULAR_COMPARISONS.map((pair) => {
            const slug = buildCompareSlug(pair);
            const label = pair
              .map((s) =>
                s
                  .split("-")
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join(" "),
              )
              .join(" vs ");
            return (
              <Link
                key={slug}
                href={`/tools/compare/${slug}`}
                className="text-sm px-4 py-2 rounded-full border border-neutral-200 text-secondary-600 hover:border-primary-400 hover:text-primary-600 transition-colors bg-white"
              >
                {label}
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
