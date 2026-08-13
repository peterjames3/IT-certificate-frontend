import { isacaExamServicePageQuery, isacaExamServicePathQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { client } from "@/sanity/lib/client";
import { notFound } from 'next/navigation';
import { getCertification } from "@/services/certification.service";
import HeroSection from "@/components/isaca-dynamic-sections/hero-section";
import ContentSectionWithImage from "@/components/isaca-dynamic-sections/exam-details";
import ISACAFocusedContentSection from "@/components/isaca-dynamic-sections/isaca-focused-content-section";
import CertOverviewSection from "@/components/isaca-dynamic-sections/cert-overview-section";
import FaqSection from "@/components/isaca-dynamic-sections/faq-section";
import type { ExamServicePageData, PageSection } from "@/lib/defination";

// ── Static params ───────────────────────────────────────────
export async function generateStaticParams() {
  const pages = await client.fetch(isacaExamServicePathQuery);
  return pages.map((page: { slug: string }) => ({ slug: page.slug }));
}

// ── Metadata ────────────────────────────────────────────────
type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const page = await sanityFetch<ExamServicePageData>({
    query: isacaExamServicePageQuery,
    params: { slug },
  });

  if (!page) return {};

  const url = `https://testhelpnow.com/pay-someone-to-take-isaca-exam-for-me/${page.slug}`;

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
      siteName: "ProctoredExamHelp",
      locale: "en_US",
    },
    keywords: [
      "take my ISACA exam",
      "pay someone to take CISA exam",
      "CISM exam taker",
      "CRISC certification help",
      "ISACA proxy services",
      "professional exam takers",
      "CGEIT exam help",
      "CDPSE certification",
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
    case "isacaFocusedContentSection":
      return (
        <ISACAFocusedContentSection
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

export default async function ISACAExamServicePage({ params }: { params: Params }) {
  const { slug } = await params;

  const page = await sanityFetch<ExamServicePageData>({
    query: isacaExamServicePageQuery,
    params: { slug },
  });

  if (!page) notFound();

  const renderedSections = await Promise.all(
    page.sections?.map((section, index) => renderSection(section, index)) ?? []
  );

  return <main>{renderedSections}</main>;
}