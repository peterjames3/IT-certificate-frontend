import type { SanityDocument } from "@sanity/client";
import { sanityFetch } from "@/sanity/lib/fetch";

// Define the Category type
type Category = {
  title: string;
  excerpt: string;
};
import { oldestPostsQuery } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
//import { format } from "date-fns";

export default async function OldestBlogPost() {
  let posts: SanityDocument[] = [];

  try {
    posts = await sanityFetch<SanityDocument[]>({
      query: oldestPostsQuery,
    });
  } catch (error) {
    console.log(`Error Fetching Posts: ${error}`);
  }

  if (posts.length === 0) {
    return (
      <div className="text-meium p-text text-textColor">
        No Article at the moment try refreshing the page
      </div>
    );
  }
  return (
    <section className=" wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <Link
          href={`/blog/${post.slug.current}`}
          key={index}
          className="group relative  bg-white rounded-lg  hover:shadow-md  transition-transform duration-300 ease-in-out"
        >
          <figure>
            <Image
              src={
                post.mainImage?.url ||
                "/3d-view-personal-computer-with-vegetation.jpg"
              }
              alt={post.mainImage?.alt || post.title}
              width={420}
              height={200}
              className="rounded-t-lg"
            />
          </figure>
          <figcaption className="flex flex-col gap-2 p-3">
            <div className="w-52 bg-tertiary text-center text-secondary label-text rounded-lg py-[0.29rem] font-medium">
              {(post.categories ?? []).map((category: Category, id: number) => (
                <ul key={id}>
                  {" "}
                  <li>{category.title}</li>
                </ul>
              ))}
            </div>

            <h3 className="group-hover:text-primary-700 text-[1.2rem] text-textColor font-bold ">
              {post.title}
            </h3>
            
            <div className="flex items-center justify-between">
              <div className="text-sm text-tertiary-white/70 ">
                <span>By: {post.authorName || "Unknown Author"}</span>
              </div>
              <div className="w-8 h-8 rounded-full border border-blue-300/40 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-blue-900 group-hover:border-yellow-400 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </figcaption>
        </Link>
      ))}
    </section>
  );
}
