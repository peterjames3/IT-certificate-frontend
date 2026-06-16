// app/(site)/it-certificate-tools/compare/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { ArrowLeft } from "lucide-react";
import {
  POPULAR_COMPARISONS,
  buildCompareSlug,
  parseCompareSlug,
  slugToTitle,
} from "@/lib/compareSlugs";
import { getComparisonServer } from "@/services/comparison.server";
import CompareResults from "@/components/certifications/compare-results";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// ── Static generation for popular pairs ────────────────────────────────────
// These are built at build time → instantly served, fully indexable on day one.
export async function generateStaticParams() {
  return POPULAR_COMPARISONS.map((pair) => ({
    slug: buildCompareSlug(pair),
  }));
}

// Any slug NOT in generateStaticParams is rendered on-demand on first visit,
// then cached (ISR) — so the second visitor and Googlebot's recrawl get a
// fast, cached response too.
export const dynamicParams = true;

// ── Metadata — unique per comparison, crawlable in <head> ─────────────────
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const certSlugs = parseCompareSlug(slug);

  if (certSlugs.length < 2) {
    return { title: "Compare Certifications | TestHelpNow" };
  }

  const data = await getComparisonServer(certSlugs);
  const names = data
    ? data.certs.map((c) => c.acronym).join(" vs ")
    : certSlugs.map(slugToTitle).join(" vs ");

  const title = `${names} — Which Certification Should You Get? | TestHelpNow`;
  const description = data
    ? `${data.verdict.summary} Compare cost, difficulty, salary impact, job demand, and renewal requirements for ${names}.`
    : `Compare ${names} side by side — cost, difficulty, salary impact, job demand, and renewal requirements.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/tools/compare/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/tools/compare/${slug}`,
      siteName: "TestHelpNow",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// ── Page ────────────────────────────────────────────────────────────────────
export default async function ComparisonSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const certSlugs = parseCompareSlug(slug);

  if (certSlugs.length < 2 || certSlugs.length > 3) {
    notFound();
  }

  const data = await getComparisonServer(certSlugs);

  if (!data) {
    notFound();
  }

  const names = data.certs.map((c) => c.acronym).join(" vs ");

  // Article structured data — helps Google understand this is comparison content
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${names}: Which Certification Should You Get?`,
    description: data.verdict.summary,
    author: { "@type": "Organization", name: "TestHelpNow" },
    publisher: { "@type": "Organization", name: "TestHelpNow" },
    datePublished: data.generatedAt,
    dateModified: data.generatedAt,
  };

  // FAQ-style structured data using the verdict fields — eligible for rich results
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Which is better for beginners, ${names}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${data.verdict.bestForBeginners} is the better starting point for beginners.`,
        },
      },
      {
        "@type": "Question",
        name: `Which has better salary impact, ${names}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${data.verdict.bestForSalary} tends to have the stronger salary impact.`,
        },
      },
      {
        "@type": "Question",
        name: `Which is more in-demand, ${names}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${data.verdict.bestForJobDemand} currently has higher job market demand.`,
        },
      },
    ],
  };

  return (
    <main className="wrapper py-12 min-h-screen">
      <Script
        id="compare-article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Script
        id="compare-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Breadcrumb back to the interactive picker */}
      <Link
        href="/tools/compare"
        className="inline-flex items-center gap-1.5 text-sm text-secondary-500 hover:text-primary-600 transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Compare other certifications
      </Link>

      {/* Crawlable header — real H1, real text, not behind a form */}
      <div className="mb-10 max-w-3xl">
        <span className="text-sm font-medium text-primary-500 uppercase tracking-wide">
          Certificate Tools
        </span>
        <h1 className="text-3xl font-bold text-secondary-800 mt-1">
          {names}: Which Certification Should You Get?
        </h1>
        <p className="text-secondary-600 mt-3 leading-relaxed">
          {data.verdict.summary}
        </p>
      </div>

      {/* Existing results component — already fully designed, reused as-is */}
      <CompareResults data={data} />

      {/* Crawlable closing CTA */}
      <div className="mt-12 max-w-3xl text-center bg-neutral-50 rounded-xl p-8">
        <p className="text-secondary-600 text-sm mb-4">
          Want to compare different certifications, or add a third one to this
          comparison?
        </p>
        <Link
          href="/tools/compare"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 transition-colors"
        >
          Build a custom comparison
        </Link>
      </div>
    </main>
  );
}
