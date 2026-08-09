import { PortableTextBlock } from "@portabletext/types";
type RichText = PortableTextBlock[];
export interface StatCard {
  number: number;
  suffix: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

export interface ExamItem {
  name: string;
  slug: string;
}

export type ExamCategory = Record<string, ExamItem[]>;
export interface AcademicService {
  name: string;
  href: string;
}

export interface NavbarProps {
  className?: string;
}

export interface DropdownMenuProps {
  title: string;
  categories: ExamCategory;
  baseUrl: string;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  academicServices: AcademicService[];
  testPrepCategories: ExamCategory;
  examAidCategories: ExamCategory;
}

export type MenuItem = {
  name: string;
  href: string;
  submenu?: SubMenuItem[];
};

export type SubMenuItem = {
  name: string;
  href: string;
  group?: string; 
};

export interface LinkItem {
  name: string;
  slug?: string;
  isLink?: boolean;
}

export interface SectionItem {
  title: string;
  content: string;
  tips?: string[];
  icon?: string;
}

export interface HeroSectionData {
  _type: "hero";
  preHeading?: string;
  heading: string;
  accentWord?: string;
  subtext?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  title: string;
  content: string;
  sections?: SectionItem[];
  backgroundImage?: {
    alt?: string;
    url?: string;
  };
  backgroundColor?: string;
}

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

export interface CertOverviewSectionData {
  _type: "certOverviewSection";
  sectionId?: string;
  certSlug: string;
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
export interface SidebarListItem {
  text: string;
  link?: string;
}

export interface SidebarCard {
  title: string;
  accentColor?: string;
  items: SidebarListItem[];
}


export interface BaseFocusedContentSectionData {
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
// ── Page-Specific Focused Content Sections ──────────────────
export interface AzureFocusedContentSectionData extends BaseFocusedContentSectionData {
  _type: "azureFocusedContentSection";
}

export interface ISACAFocusedContentSectionData extends BaseFocusedContentSectionData {
  _type: "isacaFocusedContentSection";
}

export interface AWSFocusedContentSectionData extends BaseFocusedContentSectionData {
  _type: "awsFocusedContentSection";
}

export interface CompTIAFocusedContentSectionData extends BaseFocusedContentSectionData {
  _type: "compTIAFocusedContentSection";
}

export interface ECCouncilFocusedContentSectionData extends BaseFocusedContentSectionData {
  _type: "eccouncilFocusedContentSection";
}

export interface ITILFocusedContentSectionData extends BaseFocusedContentSectionData {
  _type: "itilFocusedContentSection";
}

export interface CertCompareSectionData {
_type: "certCompareSection";
  sectionId?: string;
  heading?: string;
  certSlugs: string[];
}

export type PageSection =
  | HeroSectionData
  | ContentSectionData
  | AzureFocusedContentSectionData
  | ISACAFocusedContentSectionData
  | ITILFocusedContentSectionData
  | AWSFocusedContentSectionData
  | CompTIAFocusedContentSectionData
  | ECCouncilFocusedContentSectionData
  | CertOverviewSectionData
  | CertCompareSectionData
  | FaqSectionData;



export interface BaseExamServicePageData {
  _id: string;
  _createdAt: string;
  seoTitle: string;
  seoDescription?: string;
  slug: string;
  ogImage?: SanityImage;
  sections: PageSection[];
}
export type ExamServicePageData = BaseExamServicePageData;
