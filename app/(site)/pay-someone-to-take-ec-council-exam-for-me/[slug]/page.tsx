import { eccouncilExamServicePageQuery, eccouncilExamServicePathQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { client } from "@/sanity/lib/client";
import { notFound } from 'next/navigation';
import { PortableTextBlock } from "@portabletext/types";
import { getCertification } from "@/services/certification.service";

// ── Section components ──────────────────────────────────────
import HeroSection from "@/components/ec-council-dynamic-sections/hero-section";
import ContentSectionWithImage from "@/components/ec-council-dynamic-sections/exam-details";
import ECCouncilFocusedContentSection from "@/components/ec-council-dynamic-sections/ec-council-focused-content-section";
import CertOverviewSection from "@/components/ec-council-dynamic-sections/cert-overview-section";
import FaqSection from "@/components/ec-council-dynamic-sections/faq-section";

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
  body?: RichText;
  image?: SanityImage;
  imagePosition?: "left" | "right" | "none";
  imageSize?: "33" | "50" | "66";
  backgroundColor?: string;
  ctaButton?: CtaButton;
}

export interface ECCouncilFocusedContentSectionData {
  _type: "eccouncilFocusedContentSection";
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
    answer?: RichText;
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
  | ECCouncilFocusedContentSectionData
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
  const pages = await client.fetch(eccouncilExamServicePathQuery);
  return pages.map((page: { slug: string }) => ({ slug: page.slug }));
}

// ── Metadata ────────────────────────────────────────────────
type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const page = await sanityFetch<ExamServicePageData>({
    query: eccouncilExamServicePageQuery,
    params: { slug },
  });

  if (!page) return {};

  const url = `https://testhelpnow.com/pay-someone-to-take-ec-council-exam-for-me/${page.slug}`;

  return {
    title: page.seoTitle,
    description: page.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: page.seoTitle,
      description: page.seoDescription,
      images: page.ogImage?.url ? [{ url: page.ogImage.url }] : [],
      siteName: "TestHelpNow",
      locale: "en_US",
    },
    keywords: [
      "take my EC-Council exam",
      "pay someone to take CEH exam",
      "CND exam taker",
      "ECSA certification help",
      "EC-Council proxy services",
      "professional exam takers",
      "CHFI exam help",
      "CCSE certification",
      "CTIA exam taker",
      "ethical hacking exam help",
    ],
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
    case "eccouncilFocusedContentSection":
      return (
        <ECCouncilFocusedContentSection
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

export default async function ECCouncilExamServicePage({ params }: { params: Params }) {
  const { slug } = await params;

  const page = await sanityFetch<ExamServicePageData>({
    query: eccouncilExamServicePageQuery,
    params: { slug },
  });

  if (!page) notFound();

  const renderedSections = await Promise.all(
    page.sections?.map((section, index) => renderSection(section, index)) ?? []
  );

  return <main>{renderedSections}</main>;
}
