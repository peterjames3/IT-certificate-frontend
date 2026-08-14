import { sanityFetch } from "@/sanity/lib/fetch";
import {latestPostsQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import { format } from "date-fns/format";
import Link from "next/link";

export default async function RecentPosts({
  currentSlug,
  categoryIds,
}: {
  currentSlug: string;
  categoryIds: string[];
}) {
  const relatedPosts = await sanityFetch<SanityDocument[]>({
    query: latestPostsQuery,
    params: {
      slug: currentSlug,
      categoryIds,
    },
  });

  if (!relatedPosts || relatedPosts.length === 0) {
    return <p className="text-textColor/70 text-sm">No related posts found.</p>;
  }

  return (
    <section className="mt-2 space-y-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {relatedPosts.map((relatedPost) => (
        <Link
          href={`/blog/${relatedPost.slug.current}`}
          key={relatedPost._id}
          className="border-l-4 border-primary px-3 py-2 rounded-md flex flex-col gap-2 hover:cursor-pointer hover:shadow-lg transition-all delay-300"
        >
          <header className="text-[0.89rem] sm:text-[0.89] md:text-[1.1rem] font-semibold text-foreground">
            {relatedPost.title || "Untitled Post"}
          </header>
          <footer className="flex flex-row justify-between items-center">
            <address className="text-textColor/70 font-medium not-italic">
              {relatedPost.authorName || "Unknown author"}
            </address>
            <time>
               
              {/* Format the date using date-fns */}
              {format(new Date(relatedPost.publishedAt), "MMMM dd, yyyy") ||
                "Unknown date"}
            
            </time>
          </footer>
        </Link>
      ))}
    </section>
  );
}
