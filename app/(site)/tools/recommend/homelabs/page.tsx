// app/(site)/tools/recommend/homelabs/page.tsx
import { Metadata } from "next";
import Script from "next/script";
import { CheckCircle, Terminal, Award, Target } from "lucide-react";
import HomelabsTool from "@/components/homelab/Homelabstool";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title:
    "Free Homelab Project Recommender — Build Skills Employers Actually Want | TestHelpNow",
  description:
    "Get a personalised list of hands-on homelab projects and certifications based on your target IT role and current skills. Close your skill gaps with real, practical projects — free tool, instant results.",
  keywords: [
    "homelab projects for IT career",
    "cybersecurity homelab ideas",
    "SOC analyst homelab",
    "cloud security homelab",
    "IT skills gap analysis",
    "free homelab recommender",
    "homelab projects for resume",
  ],
  alternates: {
    canonical: `${SITE_URL}/tools/recommend/homelabs`,
  },
  openGraph: {
    title: "Free Homelab Project Recommender — TestHelpNow",
    description:
      "Tell us your target role and current skills. Get personalised homelab projects and certifications to close your skill gaps.",
    url: `${SITE_URL}/tools/recommend/homelabs`,
    siteName: "TestHelpNow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Homelab Project Recommender — TestHelpNow",
    description:
      "Get personalised homelab projects and certifications based on your target IT role and current skills.",
  },
};

const FAQ_ITEMS = [
  {
    question: "What is a homelab and why does it matter for my IT career?",
    answer:
      "A homelab is a personal practice environment — virtual machines, cloud accounts, or local servers — where you build real, hands-on skills outside of work. Employers in cybersecurity, cloud, and DevOps roles increasingly expect candidates to demonstrate practical experience, and a homelab project is concrete proof you can do the work, not just pass a multiple-choice exam.",
  },
  {
    question: "How does this tool decide which projects to recommend?",
    answer:
      "You tell us your target role and the skills you already have. The tool compares your skills against what that role actually requires, identifies the gaps, then matches those gaps against a database of homelab projects and certifications — ranked by how much of the gap each one closes and how critical that skill is for the role.",
  },
  {
    question: "Is this different from a certification roadmap?",
    answer:
      "Yes. A certification roadmap tells you which exams to study for. This tool focuses on hands-on projects — the kind of practical work you can put on a resume, talk about in an interview, or document on GitHub. Many people use both together: certifications for credentials, homelabs for proof of skill.",
  },
  {
    question: "Do I need expensive hardware to do these projects?",
    answer:
      "No. Most recommended projects can be built using free-tier cloud accounts (AWS, Azure, GCP), open-source tools, or virtual machines on a single laptop. Each recommendation includes an estimated time and difficulty level so you can pick projects that fit your setup and schedule.",
  },
];

export default function RecommendHomelabsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Homelab Project Recommender",
    applicationCategory: "EducationApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Free tool that recommends personalised homelab projects and certifications based on your target IT role and current skills.",
  };

  return (
    <main className="wrapper py-12 min-h-screen">
      {/* JSON-LD structured data */}
      <Script
        id="homelabs-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="homelabs-app-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />

      {/* Crawlable header content */}
      <div className="mb-10 max-w-3xl">
        <span className="text-sm font-medium text-primary-500 uppercase tracking-wide">
          Certificate Tools
        </span>
        <h1 className="text-3xl font-bold text-secondary-800 mt-1">
          Free Homelab Project Recommender
        </h1>
        <p className="text-secondary-600 mt-3 leading-relaxed">
          Certifications prove you know the theory. Homelab projects prove you
          can do the work. Enter your target role and the skills you already
          have, and this tool will identify your skill gaps and recommend the
          specific certifications and hands-on projects that close them —
          ranked by how much they matter for the role you want.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <li className="flex items-start gap-2 text-sm text-secondary-600">
            <Target className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
            Matched against real role requirements, not generic advice
          </li>
          <li className="flex items-start gap-2 text-sm text-secondary-600">
            <Terminal className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
            Practical, hands-on projects — not just exam prep
          </li>
          <li className="flex items-start gap-2 text-sm text-secondary-600">
            <Award className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
            Free, instant, no signup required
          </li>
        </ul>
      </div>

      {/* Interactive tool — your existing form + results */}
      <HomelabsTool />

      {/* Crawlable supporting content */}
      <section className="mt-16 max-w-3xl">
        <h2 className="text-xl font-bold text-secondary-800 mb-4">
          Why homelab projects matter more than ever
        </h2>
        <div className="space-y-4 text-secondary-600 text-sm leading-relaxed">
          <p>
            Hiring managers for SOC analyst, cloud security, penetration
            testing, and DevSecOps roles consistently report that candidates
            with documented hands-on projects stand out from those with
            certifications alone. A homelab is the fastest way to build that
            evidence — whether it&apos;s a Microsoft Sentinel detection lab, an
            Active Directory attack range, or a Kubernetes security hardening
            exercise.
          </p>
          <p>
            This tool removes the guesswork. Instead of searching forums for
            &apos;best homelab projects for beginners,&apos; you get a ranked list
            specific to the role you&apos;re targeting and the skills you&apos;re
            missing — so every hour you spend building is aimed at closing a
            real gap.
          </p>
        </div>
      </section>

      {/* FAQ — crawlable + matches JSON-LD above */}
      <section className="mt-16 max-w-3xl pb-12">
        <h2 className="text-xl font-bold text-secondary-800 mb-6">
          Frequently asked questions
        </h2>
        <div className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <div key={item.question}>
              <h3 className="font-semibold text-secondary-800 text-sm flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                {item.question}
              </h3>
              <p className="text-sm text-secondary-600 mt-2 leading-relaxed pl-6">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}