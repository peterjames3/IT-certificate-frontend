import { groq } from "next-sanity";

//Get all posts

export const postsQuery = groq`
*[_type == "post"]{
   _id,
   _createdAt,
   description,
    title,
   slug,
   mainImage,
  "imageURL": mainImage.asset->url,
   "authorName": author->name,
   "categories": categories[]->{title, description},
 }
 `;

// Get a single post by its slug
export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    mainImage,
    "imageURL": mainImage.asset->url,
    "authorName": author->name,
    "categories": categories[]->{title, description},
    body, // Full body content for PortableText rendering
    // Extract headings for table of contents
    "headings": body[][
      _type == "block" &&
      (style == "h2" || style == "h3") // Querying for h2 and h3
    ] {
      _key,
      style,
      children[] {
        text
      }
    }
  }
`;
// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)]{
  "slug": slug.current
}`;

// Get the latest posts by published date, limited to the first 5 posts
export const latestPostsQuery = groq`
  *[_type == "post"] | order(_createdAt desc) [0...8] {
  _id,
    _createdAt,
    title,
    slug,
    body,
    mainImage,
    "imageURL": mainImage.asset->url,
    "authorName": author->name,
     "authorImage": author->image.asset->url,
    "categories": categories[]->{title, description}
    
  }
`;

// Fetch Slugs and CompTIa Exam aid programs

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
// Used in the "Exams We Support" section on proctored-exam-help and other pages
export const comptiaexamsWeSupportQuery = groq`
  *[_type == "CompTIAServicePage"] | order(seoTitle asc) {
    _id,
    seoTitle,
    seoDescription,
    "slug": slug.current,
    // Pull the hero image as the card thumbnail
    "thumbnail": sections[_type == "hero"][0].heroImage {
      alt,
      "url": asset->url
    },
    // Pull the first content section's heading as a short tagline fallback
    "tagline": sections[_type == "hero"][0].subtext,
  }
`;
