import { groq } from "next-sanity";

// ── ISACA Exam Interface ──
export interface ISACAExam {
  code: string;
  track: string;
  role: string;
  focus: string;
  icon: string;
  slug: string;
}

export const isacaExamsQuery = groq`*[_type == "isacaExam"]{
  code,
  track,
  role,
  focus,
  icon,
  "slug": slug.current
}`;

// ── ITIL Exam Interface ──
export interface ITILExam {
  code: string;
  track: string;
  level: string;
  role: string;
  focus: string;
  icon: string;
  slug: string;
}

export const itilExamsQuery = groq`*[_type == "itilExam"]{
  code,
  track,
  level,
  role,
  focus,
  icon,
  "slug": slug.current
}`;

// ── Get all posts for listing ──────────────────────────────
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc, _createdAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage {
      alt,
      "url": asset->url
    },
    "authorName": author->name,
    "categories": categories[]->{title, description},
    publishedAt,
    // SEO fields for listing page metadata
    seo {
      seoTitle,
      seoDescription,
      seoKeywords
    }
  }
`;

// ── Get a single post by its slug ───────────────────────────
export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    excerpt,
    mainImage {
      alt,
      "url": asset->url
    },
    "author": author-> {
      name,
      image {
        alt,
        "url": asset->url
      }
    },
    "categories": categories[]-> {
      title,
      description,
      "slug": slug.current
    },
    publishedAt,
    body,
    // SEO fields
    seo {
      seoTitle,
      seoDescription,
      seoKeywords
    },
    // OG Image for social sharing
    "ogImage": ogImage {
      alt,
      "url": asset->url
    },
    // Extract headings for table of contents
    "headings": body[][
      _type == "block" &&
      (style == "h2" || style == "h3")
    ] {
      _key,
      style,
      children[] {
        text
      }
    }
  }
`;

// ── Get all post slugs for static generation ───────────────
export const postPathsQuery = groq`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }
`;

// ── Get latest posts for sidebar / related posts ────────────
export const latestPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc, _createdAt desc) [0...5] {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      alt,
      "url": asset->url
    },
    publishedAt,
    "authorName": author->name,
    "categories": categories[]->{title}
  }
`;

// ── Get oldest posts for sidebar / related posts ────────────
export const oldestPostsQuery = groq`
  *[_type == "post"] | order(publishedAt asc, _createdAt asc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      alt,
      "url": asset->url
    },
    publishedAt,
    "authorName": author->name,
    "categories": categories[]->{title}
  }
`;

// ── Get related posts by category ───────────────────────────
export const relatedPostsQuery = groq`
  *[_type == "post" && slug.current != $slug && count(categories[@._ref in $categoryIds]) > 0] | order(publishedAt desc, _createdAt desc) [0...4] {
    _id,
    title,
    slug,
    excerpt,
    mainImage {
      alt,
      "url": asset->url
    },
    publishedAt,
    "authorName": author->name
  }
`;

// ============================================================
// ── COMPTIA QUERIES ──
// ============================================================

// Fetch Slugs and CompTIA Exam aid programs
export const comptiaexamServicePathQuery = groq`
  *[_type == "CompTIAServicePage" && defined(slug.current)] {
    "slug": slug.current
  }
`;

// Get a single exam service page by slug
export const comptiaexamServicePageQuery = groq`
  *[_type == "CompTIAServicePage" && slug.current == $slug][0] {
    _id,
    _createdAt,
    seoTitle,
    seoDescription,
    "slug": slug.current,
 
    // OG image for social sharing
    "ogImage": ogImage {
      alt,
      "url": asset->url
    },
 
    // Page builder sections
    sections[] {
      _type,
 
      // ── Hero ──────────────────────────────────────────────
      _type == "hero" => {
        preHeading,
        heading,
        accentWord,
        subtext,
        ctaPrimary,
        ctaSecondary,
    "sections": sections[]-> {
    title,
    content,
    tips,
    icon
  },
        "backgroundImage": backgroundImage {
          alt,
          "url": asset->url
        },
        backgroundColor
      },
 
      // ── Content Section with Image ─────────────────────────
      _type == "contentSectionWithImage" => {
        sectionId,
        heading,
        subheading,
        body, // Portable Text — rendered with <PortableText />
        imagePosition,
        imageSize,
        backgroundColor,
        "image": image {
          alt,
          caption,
          "url": asset->url,
          hotspot,
          crop
        },
        ctaButton
      },
 
      // --certificate overview
      _type == "certOverviewSection" => { _type, sectionId, certSlug },

      // -- CompTIA Focused Content Section
      _type == "compTIAFocusedContentSection" => {
  _type,
  sectionId,
  heading,
  body,
  sidebarCards[]{
    title,
    accentColor,
    items[]{ text, link }
  },
  backgroundColor,
  ctaButton
},
 
      // ── Steps / Process ───────────────────────────────────
      _type == "stepsSection" => {
        heading,
        subheading,
        steps[] {
          stepNumber,
          label,
          title,
          description,
          "icon": icon {
            alt,
            "url": asset->url
          }
        },
        ctaButton
      },
 
      // ── Exam Structure ────────────────────────────────────
      _type == "examStructureSection" => {
        heading,
        subheading,
        body,
        structurePoints[],
        "diagramImage": diagramImage {
          alt,
          caption,
          "url": asset->url,
          hotspot,
          crop
        },
        ctaButton
      },
 
      // ── Challenges ────────────────────────────────────────
      _type == "challengesSection" => {
        heading,
        intro,
        challenges[] {
          title,
          description,
          "icon": icon {
            alt,
            "url": asset->url
          }
        },
        ctaButton
      },
 
      // ── Unlock Path ───────────────────────────────────────
      _type == "unlockPathSection" => {
        heading,
        subheading,
        featureCards[] {
          title,
          description,
          accentColor,
          "icon": icon {
            alt,
            "url": asset->url
          }
        },
        "sideImage": sideImage {
          alt,
          caption,
          "url": asset->url,
          hotspot,
          crop
        }
      },
 
      // ── Why Choose Us ─────────────────────────────────────
      _type == "whyChooseUsSection" => {
        heading,
        subheading,
        intro,
        reasons[] {
          title,
          description,
          "icon": icon {
            alt,
            "url": asset->url
          }
        },
        "backgroundImage": backgroundImage {
          alt,
          "url": asset->url
        }
      },
 
      // ── FAQ ───────────────────────────────────────────────
      _type == "faqSection" => {
        heading,
        subheading,
        faqs[] {
          question,
          answer, // Portable Text
          category
        },
        ctaBlock
      }
    }
  }
`;

// Get all exam service pages (for listing/sitemap)
export const allcomptiaExamServicePagesQuery = groq`
  *[_type == "CompTIAServicePage"] | order(_createdAt desc) {
    _id,
    _createdAt,
    seoTitle,
    seoDescription,
    "slug": slug.current, 
    "ogImage": ogImage {
      alt,
      "url": asset->url
    }
  }
`;

// Fetch all exam service pages as a lightweight listing
export const comptiaexamsWeSupportQuery = groq`
  *[_type == "CompTIAServicePage"] | order(seoTitle asc) {
    _id,
    seoTitle,
    seoDescription,
    "slug": slug.current,
    "thumbnail": sections[_type == "hero"][0].heroImage {
      alt,
      "url": asset->url
    },
    "tagline": sections[_type == "hero"][0].subtext,
  }
`;

// ============================================================
// ── AWS QUERIES ──
// ============================================================

// Fetch Slugs for AWS Exam aid programs
export const awsExamServicePathQuery = groq`
  *[_type == "awsServicePage" && defined(slug.current)] {
    "slug": slug.current
  }
`;

// Get a single AWS exam service page by slug
export const awsExamServicePageQuery = groq`
  *[_type == "awsServicePage" && slug.current == $slug][0] {
    _id,
    _createdAt,
    seoTitle,
    seoDescription,
    "slug": slug.current,
 
    // OG image for social sharing
    "ogImage": ogImage {
      alt,
      "url": asset->url
    },
 
    // Page builder sections
    sections[] {
      _type,
 
      // ── Hero ──────────────────────────────────────────────
      _type == "hero" => {
        preHeading,
        heading,
        accentWord,
        subtext,
        ctaPrimary,
        ctaSecondary,
        "sections": sections[]-> {
          title,
          content,
          tips,
          icon
        },
        "backgroundImage": backgroundImage {
          alt,
          "url": asset->url
        },
        backgroundColor
      },
 
      // ── Content Section with Image ─────────────────────────
      _type == "contentSectionWithImage" => {
        sectionId,
        heading,
        subheading,
        body, // Portable Text — rendered with <PortableText />
        imagePosition,
        imageSize,
        backgroundColor,
        "image": image {
          alt,
          caption,
          "url": asset->url,
          hotspot,
          crop
        },
        ctaButton
      },
 
      // ── Certificate Overview ────────────────────────────────
      _type == "certOverviewSection" => { _type, sectionId, certSlug },

      // ── AWS Focused Content Section ──────────────────────────
      _type == "awsFocusedContentSection" => {
        _type,
        sectionId,
        heading,
        body,
        sidebarCards[]{
          title,
          accentColor,
          items[]{ text, link }
        },
        backgroundColor,
        ctaButton
      },
 
      // ── Steps / Process ───────────────────────────────────
      _type == "stepsSection" => {
        heading,
        subheading,
        steps[] {
          stepNumber,
          label,
          title,
          description,
          "icon": icon {
            alt,
            "url": asset->url
          }
        },
        ctaButton
      },
 
      // ── Exam Structure ────────────────────────────────────
      _type == "examStructureSection" => {
        heading,
        subheading,
        body,
        structurePoints[],
        "diagramImage": diagramImage {
          alt,
          caption,
          "url": asset->url,
          hotspot,
          crop
        },
        ctaButton
      },
 
      // ── Challenges ────────────────────────────────────────
      _type == "challengesSection" => {
        heading,
        intro,
        challenges[] {
          title,
          description,
          "icon": icon {
            alt,
            "url": asset->url
          }
        },
        ctaButton
      },
 
      // ── Unlock Path ───────────────────────────────────────
      _type == "unlockPathSection" => {
        heading,
        subheading,
        featureCards[] {
          title,
          description,
          accentColor,
          "icon": icon {
            alt,
            "url": asset->url
          }
        },
        "sideImage": sideImage {
          alt,
          caption,
          "url": asset->url,
          hotspot,
          crop
        }
      },
 
      // ── Why Choose Us ─────────────────────────────────────
      _type == "whyChooseUsSection" => {
        heading,
        subheading,
        intro,
        reasons[] {
          title,
          description,
          "icon": icon {
            alt,
            "url": asset->url
          }
        },
        "backgroundImage": backgroundImage {
          alt,
          "url": asset->url
        }
      },
 
      // ── FAQ ───────────────────────────────────────────────
      _type == "faqSection" => {
        heading,
        subheading,
        faqs[] {
          question,
          answer, // Portable Text
          category
        },
        ctaBlock
      }
    }
  }
`;

// Get all AWS exam service pages (for listing/sitemap)
export const allAwsExamServicePagesQuery = groq`
  *[_type == "awsServicePage"] | order(_createdAt desc) {
    _id,
    _createdAt,
    seoTitle,
    seoDescription,
    "slug": slug.current, 
    "ogImage": ogImage {
      alt,
      "url": asset->url
    }
  }
`;

// Fetch all AWS exam service pages as a lightweight listing
export const awsExamsWeSupportQuery = groq`
  *[_type == "awsServicePage"] | order(seoTitle asc) {
    _id,
    seoTitle,
    seoDescription,
    "slug": slug.current,
    "ogImage":ogImage {
     alt,
     "url":asset->url
     },
    "tagline": sections[_type == "hero"][0].subtext,
  }
`;

// ============================================================
// ── ISACA QUERIES ──
// ============================================================

// Fetch Slugs for ISACA Exam service pages
export const isacaExamServicePathQuery = groq`
  *[_type == "isacaServicePage" && defined(slug.current)] {
    "slug": slug.current
  }
`;

// Get a single ISACA exam service page by slug
export const isacaExamServicePageQuery = groq`
  *[_type == "isacaServicePage" && slug.current == $slug][0] {
    _id,
    _createdAt,
    seoTitle,
    seoDescription,
    "slug": slug.current,

    // OG image for social sharing
    "ogImage": ogImage {
      alt,
      "url": asset->url
    },

    // Page builder sections
    sections[] {
      _type,

      // ── Hero ──────────────────────────────────────────────
      _type == "hero" => {
        preHeading,
        heading,
        accentWord,
        subtext,
        ctaPrimary,
        ctaSecondary,
        "sections": sections[]-> {
          title,
          content,
          tips,
          icon
        },
        "backgroundImage": backgroundImage {
          alt,
          "url": asset->url
        },
        backgroundColor
      },

      // ── Content Section with Image ─────────────────────────
      _type == "contentSectionWithImage" => {
        sectionId,
        heading,
        subheading,
        body, // Portable Text — rendered with <PortableText />
        imagePosition,
        imageSize,
        backgroundColor,
        "image": image {
          alt,
          caption,
          "url": asset->url,
          hotspot,
          crop
        },
        ctaButton
      },

      // ── Certificate Overview ────────────────────────────────
      _type == "certOverviewSection" => { _type, sectionId, certSlug },

      // ── ISACA Focused Content Section ──────────────────────
      _type == "isacaFocusedContentSection" => {
        _type,
        sectionId,
        heading,
        body,
        sidebarCards[]{
          title,
          accentColor,
          items[]{ text, link }
        },
        backgroundColor,
        ctaButton
      },

      // ── Steps / Process ───────────────────────────────────
      _type == "stepsSection" => {
        heading,
        subheading,
        steps[] {
          stepNumber,
          label,
          title,
          description,
          "icon": icon {
            alt,
            "url": asset->url
          }
        },
        ctaButton
      },

      // ── Exam Structure ────────────────────────────────────
      _type == "examStructureSection" => {
        heading,
        subheading,
        body,
        structurePoints[],
        "diagramImage": diagramImage {
          alt,
          caption,
          "url": asset->url,
          hotspot,
          crop
        },
        ctaButton
      },

      // ── Challenges ────────────────────────────────────────
      _type == "challengesSection" => {
        heading,
        intro,
        challenges[] {
          title,
          description,
          "icon": icon {
            alt,
            "url": asset->url
          }
        },
        ctaButton
      },

      // ── Unlock Path ───────────────────────────────────────
      _type == "unlockPathSection" => {
        heading,
        subheading,
        featureCards[] {
          title,
          description,
          accentColor,
          "icon": icon {
            alt,
            "url": asset->url
          }
        },
        "sideImage": sideImage {
          alt,
          caption,
          "url": asset->url,
          hotspot,
          crop
        }
      },

      // ── Why Choose Us ─────────────────────────────────────
      _type == "whyChooseUsSection" => {
        heading,
        subheading,
        intro,
        reasons[] {
          title,
          description,
          "icon": icon {
            alt,
            "url": asset->url
          }
        },
        "backgroundImage": backgroundImage {
          alt,
          "url": asset->url
        }
      },

      // ── FAQ ───────────────────────────────────────────────
      _type == "faqSection" => {
        heading,
        subheading,
        faqs[] {
          question,
          answer, // Portable Text
          category
        },
        ctaBlock
      }
    }
  }
`;

// Get all ISACA exam service pages (for listing/sitemap)
export const allIsacaExamServicePagesQuery = groq`
  *[_type == "isacaServicePage"] | order(_createdAt desc) {
    _id,
    _createdAt,
    seoTitle,
    seoDescription,
    "slug": slug.current,
    "ogImage": ogImage {
      alt,
      "url": asset->url
    }
  }
`;

// Fetch all ISACA exam service pages as a lightweight listing
export const isacaExamsWeSupportQuery = groq`
  *[_type == "isacaServicePage"] | order(seoTitle asc) {
    _id,
    seoTitle,
    seoDescription,
    "slug": slug.current,
    "ogImage": ogImage {
      alt,
      "url": asset->url
    },
    "tagline": sections[_type == "hero"][0].subtext,
  }
`;

// ============================================================
// ── EC-COUNCIL QUERIES ──
// ============================================================

export const eccouncilExamsQuery = groq`*[_type == "eccouncilExam"]{
  code,
  track,
  role,
  focus,
  icon,
  "slug": slug.current
}`;

// Fetch Slugs for EC-Council Exam service pages
export const eccouncilExamServicePathQuery = groq`
  *[_type == "eccouncilServicePage" && defined(slug.current)] {
    "slug": slug.current
  }
`;

// Get a single EC-Council exam service page by slug
export const eccouncilExamServicePageQuery = groq`
  *[_type == "eccouncilServicePage" && slug.current == $slug][0] {
    _id,
    _createdAt,
    seoTitle,
    seoDescription,
    "slug": slug.current,

    // OG image for social sharing
    "ogImage": ogImage {
      alt,
      "url": asset->url
    },

    // Page builder sections
    sections[] {
      _type,

      // ── Hero ──────────────────────────────────────────────
      _type == "hero" => {
        preHeading,
        heading,
        accentWord,
        subtext,
        ctaPrimary,
        ctaSecondary,
        "sections": sections[]-> {
          title,
          content,
          tips,
          icon
        },
        "backgroundImage": backgroundImage {
          alt,
          "url": asset->url
        },
        backgroundColor
      },

      // ── Content Section with Image ─────────────────────────
      _type == "contentSectionWithImage" => {
        sectionId,
        heading,
        subheading,
        body, // Portable Text — rendered with <PortableText />
        imagePosition,
        imageSize,
        backgroundColor,
        "image": image {
          alt,
          caption,
          "url": asset->url,
          hotspot,
          crop
        },
        ctaButton
      },

      // ── Certificate Overview ────────────────────────────────
      _type == "certOverviewSection" => { _type, sectionId, certSlug },

      // ── EC-Council Focused Content Section ──────────────────
      _type == "eccouncilFocusedContentSection" => {
        _type,
        sectionId,
        heading,
        body,
        sidebarCards[]{
          title,
          accentColor,
          items[]{ text, link }
        },
        backgroundColor,
        ctaButton
      },

      // ── Steps / Process ───────────────────────────────────
      _type == "stepsSection" => {
        heading,
        subheading,
        steps[] {
          stepNumber,
          label,
          title,
          description,
          "icon": icon {
            alt,
            "url": asset->url
          }
        },
        ctaButton
      },

      // ── Exam Structure ────────────────────────────────────
      _type == "examStructureSection" => {
        heading,
        subheading,
        body,
        structurePoints[],
        "diagramImage": diagramImage {
          alt,
          caption,
          "url": asset->url,
          hotspot,
          crop
        },
        ctaButton
      },

      // ── Challenges ────────────────────────────────────────
      _type == "challengesSection" => {
        heading,
        intro,
        challenges[] {
          title,
          description,
          "icon": icon {
            alt,
            "url": asset->url
          }
        },
        ctaButton
      },

      // ── Unlock Path ───────────────────────────────────────
      _type == "unlockPathSection" => {
        heading,
        subheading,
        featureCards[] {
          title,
          description,
          accentColor,
          "icon": icon {
            alt,
            "url": asset->url
          }
        },
        "sideImage": sideImage {
          alt,
          caption,
          "url": asset->url,
          hotspot,
          crop
        }
      },

      // ── Why Choose Us ─────────────────────────────────────
      _type == "whyChooseUsSection" => {
        heading,
        subheading,
        intro,
        reasons[] {
          title,
          description,
          "icon": icon {
            alt,
            "url": asset->url
          }
        },
        "backgroundImage": backgroundImage {
          alt,
          "url": asset->url
        }
      },

      // ── FAQ ───────────────────────────────────────────────
      _type == "faqSection" => {
        heading,
        subheading,
        faqs[] {
          question,
          answer, // Portable Text
          category
        },
        ctaBlock
      }
    }
  }
`;

// Get all EC-Council exam service pages (for listing/sitemap)
export const allEccouncilExamServicePagesQuery = groq`
  *[_type == "eccouncilServicePage"] | order(_createdAt desc) {
    _id,
    _createdAt,
    seoTitle,
    seoDescription,
    "slug": slug.current,
    "ogImage": ogImage {
      alt,
      "url": asset->url
    }
  }
`;

// Fetch all EC-Council exam service pages as a lightweight listing
export const eccouncilExamsWeSupportQuery = groq`
  *[_type == "eccouncilServicePage"] | order(seoTitle asc) {
    _id,
    seoTitle,
    seoDescription,
    "slug": slug.current,
    "ogImage": ogImage {
      alt,
      "url": asset->url
    },
    "tagline": sections[_type == "hero"][0].subtext,
  }
`;

// ============================================================
// ── AZURE QUERIES ──
// ============================================================

// Fetch all Azure exams (for certification data)
export const azureExamsQuery = groq`*[_type == "azureExam"]{
  code,
  track,
  role,
  focus,
  icon,
  "slug": slug.current
}`;

// Fetch Slugs for Azure Exam service pages
export const azureExamServicePathQuery = groq`
  *[_type == "azureServicePage" && defined(slug.current)] {
    "slug": slug.current
  }
`;

// Get a single Azure exam service page by slug
export const azureExamServicePageQuery = groq`
  *[_type == "azureServicePage" && slug.current == $slug][0] {
    _id,
    _createdAt,
    seoTitle,
    seoDescription,
    "slug": slug.current,

    // OG image for social sharing
    "ogImage": ogImage {
      alt,
      "url": asset->url
    },

    // Page builder sections
    sections[] {
      _type,

      // ── Hero ──────────────────────────────────────────────
      _type == "hero" => {
        preHeading,
        heading,
        accentWord,
        subtext,
        ctaPrimary,
        ctaSecondary,
        "sections": sections[]-> {
          title,
          content,
          tips,
          icon
        },
        "backgroundImage": backgroundImage {
          alt,
          "url": asset->url
        },
        backgroundColor
      },

      // ── Content Section with Image ─────────────────────────
      _type == "contentSectionWithImage" => {
        sectionId,
        heading,
        subheading,
        body, // Portable Text — rendered with <PortableText />
        imagePosition,
        imageSize,
        backgroundColor,
        "image": image {
          alt,
          caption,
          "url": asset->url,
          hotspot,
          crop
        },
        ctaButton
      },

      // ── Certificate Overview ────────────────────────────────
      _type == "certOverviewSection" => { _type, sectionId, certSlug },

      // ── Azure Focused Content Section ──────────────────────
      _type == "azureFocusedContentSection" => {
        _type,
        sectionId,
        heading,
        body,
        sidebarCards[]{
          title,
          accentColor,
          items[]{ text, link }
        },
        backgroundColor,
        ctaButton
      },

      // ── Steps / Process ───────────────────────────────────
      _type == "stepsSection" => {
        heading,
        subheading,
        steps[] {
          stepNumber,
          label,
          title,
          description,
          "icon": icon {
            alt,
            "url": asset->url
          }
        },
        ctaButton
      },

      // ── Exam Structure ────────────────────────────────────
      _type == "examStructureSection" => {
        heading,
        subheading,
        body,
        structurePoints[],
        "diagramImage": diagramImage {
          alt,
          caption,
          "url": asset->url,
          hotspot,
          crop
        },
        ctaButton
      },

      // ── Challenges ────────────────────────────────────────
      _type == "challengesSection" => {
        heading,
        intro,
        challenges[] {
          title,
          description,
          "icon": icon {
            alt,
            "url": asset->url
          }
        },
        ctaButton
      },

      // ── Unlock Path ───────────────────────────────────────
      _type == "unlockPathSection" => {
        heading,
        subheading,
        featureCards[] {
          title,
          description,
          accentColor,
          "icon": icon {
            alt,
            "url": asset->url
          }
        },
        "sideImage": sideImage {
          alt,
          caption,
          "url": asset->url,
          hotspot,
          crop
        }
      },

      // ── Why Choose Us ─────────────────────────────────────
      _type == "whyChooseUsSection" => {
        heading,
        subheading,
        intro,
        reasons[] {
          title,
          description,
          "icon": icon {
            alt,
            "url": asset->url
          }
        },
        "backgroundImage": backgroundImage {
          alt,
          "url": asset->url
        }
      },

      // ── FAQ ───────────────────────────────────────────────
      _type == "faqSection" => {
        heading,
        subheading,
        faqs[] {
          question,
          answer, // Portable Text
          category
        },
        ctaBlock
      }
    }
  }
`;

// Get all Azure exam service pages (for listing/sitemap)
export const allAzureExamServicePagesQuery = groq`
  *[_type == "azureServicePage"] | order(_createdAt desc) {
    _id,
    _createdAt,
    seoTitle,
    seoDescription,
    "slug": slug.current,
    "ogImage": ogImage {
      alt,
      "url": asset->url
    }
  }
`;

// Fetch all Azure exam service pages as a lightweight listing
export const azureExamsWeSupportQuery = groq`
  *[_type == "azureServicePage"] | order(seoTitle asc) {
    _id,
    seoTitle,
    seoDescription,
    "slug": slug.current,
    "ogImage": ogImage {
      alt,
      "url": asset->url
    },
    "tagline": sections[_type == "hero"][0].subtext,
  }
`;

// ============================================================
// ── ITIL QUERIES ──
// ============================================================



// Fetch Slugs for ITIL Exam service pages
export const itilExamServicePathQuery = groq`
  *[_type == "itilServicePage" && defined(slug.current)] {
    "slug": slug.current
  }
`;

// Get a single ITIL exam service page by slug
export const itilExamServicePageQuery = groq`
  *[_type == "itilServicePage" && slug.current == $slug][0] {
    _id,
    _createdAt,
    seoTitle,
    seoDescription,
    "slug": slug.current,

    // OG image for social sharing
    "ogImage": ogImage {
      alt,
      "url": asset->url
    },

    // Page builder sections
    sections[] {
      _type,

      // ── Hero ──────────────────────────────────────────────
      _type == "hero" => {
        preHeading,
        heading,
        accentWord,
        subtext,
        ctaPrimary,
        ctaSecondary,
        "sections": sections[]-> {
          title,
          content,
          tips,
          icon
        },
        "backgroundImage": backgroundImage {
          alt,
          "url": asset->url
        },
        backgroundColor
      },

      // ── Content Section with Image ─────────────────────────
      _type == "contentSectionWithImage" => {
        sectionId,
        heading,
        subheading,
        body, // Portable Text — rendered with <PortableText />
        imagePosition,
        imageSize,
        backgroundColor,
        "image": image {
          alt,
          caption,
          "url": asset->url,
          hotspot,
          crop
        },
        ctaButton
      },

      // ── Certificate Overview ────────────────────────────────
      _type == "certOverviewSection" => { _type, sectionId, certSlug },

      // ── ITIL Focused Content Section ──────────────────────
      _type == "itilFocusedContentSection" => {
        _type,
        sectionId,
        heading,
        body,
        sidebarCards[]{
          title,
          accentColor,
          items[]{ text, link }
        },
        backgroundColor,
        ctaButton
      },

      
      // ── Certificate Comparison ───────────────────────────────────────
      _type == "certCompareSection" => {
       _type,
       sectionId,
       heading,
       certSlugs
      }
      // ── FAQ ───────────────────────────────────────────────
      _type == "faqSection" => {
        heading,
        subheading,
        faqs[] {
          question,
          answer, // Portable Text
          category
        },
        ctaBlock
      }
    }
  }
`;

// Get all ITIL exam service pages (for listing/sitemap)
export const allItilExamServicePagesQuery = groq`
  *[_type == "itilServicePage"] | order(_createdAt desc) {
    _id,
    _createdAt,
    seoTitle,
    seoDescription,
    "slug": slug.current,
    "ogImage": ogImage {
      alt,
      "url": asset->url
    }
  }
`;

// Fetch all ITIL exam service pages as a lightweight listing
export const itilExamsWeSupportQuery = groq`
  *[_type == "itilServicePage"] | order(seoTitle asc) {
    _id,
    seoTitle,
    seoDescription,
    "slug": slug.current,
    "ogImage": ogImage {
      alt,
      "url": asset->url
    },
    "tagline": sections[_type == "hero"][0].subtext,
  }
`;
