// app/blog/[slug]/page.tsx
import { SanityDocument } from '@sanity/client';
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import Post from "@/components/blog/post";
import { client } from "@/sanity/lib/client";
import { notFound } from 'next/navigation';

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);

  const reservedRoutes = ["about", "home"];
  return posts.filter(
    (post: { slug: string }) => !reservedRoutes.includes(post.slug)
  );
}

// ── Metadata ────────────────────────────────────────────────
type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;

  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params: { slug },
  });

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const url = `https://proctoredexamhelp.com/blog/${post.slug}`;

  
  const seoTitle = post.seo?.seoTitle || post.title;
  const seoDescription = post.seo?.seoDescription || post.excerpt || `Read the latest blog post about ${post.title} on ProctoredExamHelp.`;
  const keywords = post.seo?.seoKeywords || [];

  return {
    title: `${seoTitle} | ProctoredExamHelp`,
    description: seoDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: seoTitle,
      description: seoDescription,
      images: [
        {
          url: post.ogImage?.url || post.mainImage?.url || "/og/default-blog.png",
          alt: post.ogImage?.alt || post.mainImage?.alt || post.title,
        },
      ],
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt,
      authors: post.author?.name ? [post.author.name] : [],
      tags: post.categories?.map((cat: { title: string }) => cat.title) || [],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [post.ogImage?.url || post.mainImage?.url || "/og/default-blog.png"],
    },
    keywords: keywords,
  };
}

// ── Page ────────────────────────────────────────────────────
const PostPage = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  const post = await sanityFetch<SanityDocument>({
    query: postQuery,
    params: { slug },
  });


  if (!post) {
    notFound();
  }

  return <Post post={post} />;
};

export default PostPage;