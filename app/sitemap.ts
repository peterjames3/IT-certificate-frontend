import type { MetadataRoute } from "next";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

const BASE_URL = "https://proctoredexamhelp.com";

// ── Types ──────────────────────────────────────────────────
interface SanityPage {
  slug: string;
  _updatedAt?: string;
  _createdAt?: string;
}

interface SitemapPage {
  url: string;
  lastModified: Date;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

// ── Helper function ──────────────────────────────────────
async function fetchAndMapPages(
  query: string,
  urlPrefix: string,
  priority = 0.7,
  changeFrequency: SitemapPage['changeFrequency'] = "weekly"
): Promise<SitemapPage[]> {
  try {
    const pages = await client.fetch<SanityPage[]>(query);
    
    return pages.map((page) => ({
      url: `${urlPrefix}/${page.slug}`,
      lastModified: new Date(page._updatedAt || page._createdAt || Date.now()),
      changeFrequency,
      priority,
    }));
  } catch (error) {
    console.error(`Error fetching pages for ${urlPrefix}:`, error);
    return [];
  }
}

// ── Main Sitemap ────────────────────────────────────────────
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ── 1. Static Pages ──────────────────────────────────────
  const staticPages: SitemapPage[] = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/how-it-works`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/order`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tools/compare`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  // ── 2. Fetch All Dynamic Pages in Parallel ──────────────

  // Blog Posts
  const BLOG_PATHS_QUERY = groq`*[_type == "post" && defined(slug.current)]{
    "slug": slug.current,
    _updatedAt,
    _createdAt
  }`;

  // CompTIA Service Pages
  const COMPTIA_SERVICE_PATH_QUERY = groq`*[_type == "CompTIAServicePage" && defined(slug.current)]{
    "slug": slug.current,
    _updatedAt,
    _createdAt
  }`;

  // AWS Service Pages
  const AWS_SERVICE_PATH_QUERY = groq`*[_type == "awsServicePage" && defined(slug.current)]{
    "slug": slug.current,
    _updatedAt,
    _createdAt
  }`;

  // Azure Service Pages
  const AZURE_SERVICE_PATH_QUERY = groq`*[_type == "azureServicePage" && defined(slug.current)]{
    "slug": slug.current,
    _updatedAt,
    _createdAt
  }`;

  // ISACA Service Pages
  const ISACA_SERVICE_PATH_QUERY = groq`*[_type == "isacaServicePage" && defined(slug.current)]{
    "slug": slug.current,
    _updatedAt,
    _createdAt
  }`;

  // EC-Council Service Pages
  const ECCOUNCIL_SERVICE_PATH_QUERY = groq`*[_type == "eccouncilServicePage" && defined(slug.current)]{
    "slug": slug.current,
    _updatedAt,
    _createdAt
  }`;

  // ITIL Service Pages
  const ITIL_SERVICE_PATH_QUERY = groq`*[_type == "itilServicePage" && defined(slug.current)]{
    "slug": slug.current,
    _updatedAt,
    _createdAt
  }`;



  // ── 3. Execute all queries in parallel ──────────────────
  const [
    blogPages,
    comptiaPages,
    awsPages,
    azurePages,
    isacaPages,
    eccouncilPages,
    itilPages,
   
  ] = await Promise.all([
    fetchAndMapPages(BLOG_PATHS_QUERY, `${BASE_URL}/blog`, 0.6, "monthly"),
    fetchAndMapPages(COMPTIA_SERVICE_PATH_QUERY, `${BASE_URL}/pay-someone-to-take-comptia-exam-for-me`, 0.7, "weekly"),
    fetchAndMapPages(AWS_SERVICE_PATH_QUERY, `${BASE_URL}/pay-someone-to-take-aws-exam-for-me`, 0.7, "weekly"),
    fetchAndMapPages(AZURE_SERVICE_PATH_QUERY, `${BASE_URL}/pay-someone-to-take-azure-exam-for-me`, 0.7, "weekly"),
    fetchAndMapPages(ISACA_SERVICE_PATH_QUERY, `${BASE_URL}/pay-someone-to-take-isaca-exam-for-me`, 0.7, "weekly"),
    fetchAndMapPages(ECCOUNCIL_SERVICE_PATH_QUERY, `${BASE_URL}/pay-someone-to-take-ec-council-exam-for-me`, 0.7, "weekly"),
    fetchAndMapPages(ITIL_SERVICE_PATH_QUERY, `${BASE_URL}/pay-someone-to-take-itil-exam-for-me`, 0.7, "weekly"),

  ]);

  // ── 4. Combine All Pages ──────────────────────────────────
  return [
    ...staticPages,
    ...blogPages,
    ...comptiaPages,
    ...awsPages,
    ...azurePages,
    ...isacaPages,
    ...eccouncilPages,
    ...itilPages,
  
  ];
}