import {  comptiaexamServicePageQuery, comptiaexamServicePathQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { client } from "@/sanity/lib/client";
import { notFound } from 'next/navigation';
import { PortableTextBlock } from "@portabletext/types";
import { getCertification } from "@/services/certification.service";
// ── Section components ──────────────────────────────────────
import HeroSection from "@/components/comptia-dynamic-sections/hero-section";
//import TestimonialsSection from "@/components/Testimonial/testimonials-section";
import ContentSectionWithImage from "@/components/comptia-dynamic-sections/exam-details";
import CompTIAFocusedContentSection from "@/components/comptia-dynamic-sections/comptia-focused-content-section";
import CertOverviewSection from "@/components/comptia-dynamic-sections/cert-overview-section";

//import StepsSection from "@/app/ui/components/exam-service/steps-section";
//import ExamStructureSection from "@/app/ui/components/exam-service/exam-structure-section";
//import ChallengesSection from "@/app/ui/components/exam-service/challenges-section";
//import UnlockPathSection from "@/app/ui/components/exam-service/unlock-path-section";
//import WhyChooseUsSection from "@/app/ui/components/exam-service/why-choose-us-section";
import FaqSection from "@/components/comptia-dynamic-sections/faq-section";

 // ── Types ───────────────────────────────────────────────────
type RichText = PortableTextBlock[];
export interface SanityImage {
  url: string;
  alt: string;
  hotspot?: { x: number; y: number };
  crop?: { top: number; bottom: number; left: number; right: number };
  caption?: string;
}

export interface CtaButton {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
}

export interface HeroSectionData {
  _type: "hero";
  preHeading?: string;
  heading: string;
  accentWord?: string;
  subtext?: string;
  ctaPrimary?: { label: string; href: string };
  //ctaSecondary?: { label: string; href: string };
  title: string;
  content: string;
tips?: string[];
icon?: string;
  backgroundColor?: string;
  sections: string[];
}

export interface ContentSectionData {
  _type: "contentSectionWithImage";
  sectionId?: string;
  heading?: string;
  subheading?: string;
  body?: RichText; // Portable Text
  image?: SanityImage;
  imagePosition?: "left" | "right" | "none";
  imageSize?: "33" | "50" | "66";
  backgroundColor?: string;
  ctaButton?: CtaButton;
}

export interface CompTIAFocusedContentSectionData {
  _type: "compTIAFocusedContentSection";
  sectionId?: string;
  heading?: string;
  body?: RichText;
  sidebarCards: {
    title: string;
    accentColor?: string;
    items: { text: string; link?: string }[];
  }[];
  backgroundColor?: string;
  ctaButton?: CtaButton;
}

// Sanity only stores which cert this section shows — the actual
// detail data (level, domains, cost, renewal, etc.) is fetched
// server-side from the certifications API and handed down as
// initialCert, not read from Sanity.
export interface CertOverviewSectionData {
  _type: "certOverviewSection";
  sectionId?: string;
  certSlug: string;
}

export interface StepsSectionData {
  _type: "stepsSection";
  heading?: string;
  subheading?: string;
  steps: {
    stepNumber: number;
    label?: string;
    title: string;
    description?: string;
    icon?: SanityImage;
  }[];
  ctaButton?: CtaButton;
}

export interface ExamStructureSectionData {
  _type: "examStructureSection";
  heading?: string;
  subheading?: string;
  body?: RichText;
  structurePoints?: { point: string }[];
  diagramImage?: SanityImage;
  ctaButton?: CtaButton;
}

export interface ChallengesSectionData {
  _type: "challengesSection";
  heading?: string;
  intro?: string;
  challenges: {
    title: string;
    description?: string;
    icon?: SanityImage;
  }[];
  ctaButton?: CtaButton;
}

export interface UnlockPathSectionData {
  _type: "unlockPathSection";
  heading?: string;
  subheading?: string;
  featureCards: {
    title: string;
    description?: string;
    icon?: SanityImage;
    accentColor?: string;
  }[];
  sideImage?: SanityImage;
}

export interface WhyChooseUsSectionData {
  _type: "whyChooseUsSection";
  heading?: string;
  subheading?: string;
  intro?: string;
  reasons: {
    title: string;
    description?: string;
    icon?: SanityImage;
  }[];
  backgroundImage?: SanityImage;
}

export interface FaqSectionData {
  _type: "faqSection";
  heading?: string;
  subheading?: string;
  faqs: {
    question: string;
    answer?: RichText; // Portable Text
    category?: string;
  }[];
  ctaBlock?: {
    text?: string;
    buttonLabel?: string;
    buttonHref?: string;
  };
}

export type PageSection =
  | HeroSectionData
  | ContentSectionData
  | CompTIAFocusedContentSectionData
  | CertOverviewSectionData
  | StepsSectionData
  | ExamStructureSectionData
  | ChallengesSectionData
  | UnlockPathSectionData
  | WhyChooseUsSectionData
  | FaqSectionData;

export interface ExamServicePageData {
  _id: string;
  _createdAt: string;
  seoTitle: string;
  seoDescription?: string;
  slug: string;
  ogImage?: SanityImage;
  sections: PageSection[];
}

// ── Static params ───────────────────────────────────────────
export async function generateStaticParams() {
  const pages = await client.fetch(comptiaexamServicePathQuery);
  return pages.map((page: { slug: string }) => ({ slug: page.slug }));
}

// ── Metadata ────────────────────────────────────────────────
type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const page = await sanityFetch<ExamServicePageData>({
    query: comptiaexamServicePageQuery,
    params: { slug },
  });

  if (!page) return {};

  return {
    title: page.seoTitle,
    description: page.seoDescription,
    openGraph: {
      title: page.seoTitle,
      description: page.seoDescription,
      images: page.ogImage?.url ? [{ url: page.ogImage.url }] : [],
    },
  };
}

// ── Section renderer ────────────────────────────────────────
// async: certOverviewSection fetches its own cert data server-side
// before rendering, so every other case still returns synchronously
// but the function as a whole must be async/awaited by the caller.
async function renderSection(section: PageSection, index: number) {
  switch (section._type) {
    case "hero":
      return <HeroSection key={index} data={section} />;
    case "contentSectionWithImage":
      return (
        <ContentSectionWithImage
          key={section.sectionId ?? index}
          data={section}
        />
      );
    case "compTIAFocusedContentSection":
      return (
        <CompTIAFocusedContentSection
          key={section.sectionId ?? index}
          data={section}
        />
      );
    case "certOverviewSection": {
      let cert;
      try {
        cert = await getCertification(section.certSlug);
      } catch (err) {
        // Don't let one bad slug or a flaky API call fail the whole page
        // build. Falls back to a client-side fetch attempt (and this
        // component's own error UI if that fails too).
        console.error(
          `Failed to prefetch certification "${section.certSlug}":`,
          err,
        );
      }
      return (
        <CertOverviewSection
          key={section.sectionId ?? index}
          data={section}
          initialCert={cert}
        />
      );
    }
    // case "stepsSection":
    //   return <StepsSection key={index} data={section} />;
    // case "examStructureSection":
    //   return <ExamStructureSection key={index} data={section} />;
    // case "challengesSection":
    //   return <ChallengesSection key={index} data={section} />;
    // case "unlockPathSection":
    //   return <UnlockPathSection key={index} data={section} />;
    // case "whyChooseUsSection":
    //   return <WhyChooseUsSection key={index} data={section} />;

    //  case "reviews":
    //    return <TestimonialsSection />;
    case "faqSection":
      return <FaqSection key={index} data={section} />;
    default:
      return null;
  }
}

// ── Page ────────────────────────────────────────────────────
export const revalidate = 3600; // matches useCertification's staleTime

export default async function ExamServicePage({ params }: { params: Params }) {
  const { slug } = await params;

  const page = await sanityFetch<ExamServicePageData>({
    query: comptiaexamServicePageQuery,
    params: { slug },
  });

  if (!page) notFound();

  const renderedSections = await Promise.all(
    page.sections?.map((section, index) => renderSection(section, index)) ?? []
  );

  return <main>{renderedSections}</main>;
}