import { awsExamServicePageQuery, awsExamServicePathQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { client } from "@/sanity/lib/client";
import { notFound } from 'next/navigation';
import { PortableTextBlock } from "@portabletext/types";
import { getCertification } from "@/services/certification.service";

// ── Section components ──────────────────────────────────────
import HeroSection from "@/components/aws-dynamic-sections/hero-section";
import ContentSectionWithImage from "@/components/aws-dynamic-sections/exam-details";
import AwsFocusedContentSection from "@/components/aws-dynamic-sections/aws-focused-content-section";
import CertOverviewSection from "@/components/aws-dynamic-sections/cert-overview-section";
import FaqSection from "@/components/aws-dynamic-sections/faq-section";

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

export interface AwsFocusedContentSectionData {
  _type: "awsFocusedContentSection";
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

// Sanity stores which cert this section targets, while certification data
// is fetched server-side from the certifications API and passed down.
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
  | AwsFocusedContentSectionData
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
  const pages = await client.fetch(awsExamServicePathQuery);
  return pages.map((page: { slug: string }) => ({ slug: page.slug }));
}

// ── Metadata ────────────────────────────────────────────────
type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const page = await sanityFetch<ExamServicePageData>({
    query: awsExamServicePageQuery,
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
    case "awsFocusedContentSection":
      return (
        <AwsFocusedContentSection
          key={section.sectionId ?? index}
          data={section}
        />
      );
    case "certOverviewSection": {
      let cert;
      try {
        cert = await getCertification(section.certSlug);
      } catch (err) {
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
    case "faqSection":
      return <FaqSection key={index} data={section} />;
    default:
      return null;
  }
}

// ── Page ────────────────────────────────────────────────────
export const revalidate = 3600;

export default async function ExamServicePage({ params }: { params: Params }) {
  const { slug } = await params;

  const page = await sanityFetch<ExamServicePageData>({
    query: awsExamServicePageQuery,
    params: { slug },
  });

  if (!page) notFound();

  const renderedSections = await Promise.all(
    page.sections?.map((section, index) => renderSection(section, index)) ?? []
  );

  return <main>{renderedSections}</main>;
}