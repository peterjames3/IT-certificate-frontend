import type { SanityDocument } from "@sanity/client";
import { sanityFetch } from "@/sanity/lib/fetch";

// Define the Category type
type Category = {
  title: string;
  description: string;
};
import { postsQuery } from "@/sanity/lib/queries";
import {createImageUrlBuilder} from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { format } from "date-fns";

const builder = createImageUrlBuilder(client);

export default async function BlogPosts() {
  let posts: SanityDocument[] = [];

  try {
    posts = await sanityFetch<SanityDocument[]>({
      query: postsQuery,
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
    <section className=" wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {posts.map((post, index) => (
        <Link
          href={`/blog/${post.slug.current}`}
          key={index}
          className="group bg-white rounded-lg  hover:shadow-md  transition-transform duration-300 ease-in-out"
        >
          <figure>
            <Image
              src={
                post.imageURL
                  ? builder.image(post.imageURL).width(420).height(200).url()
                  : "/3d-view-personal-computer-with-vegetation.jpg"
              }
              alt={post.title}
              width={420}
              height={200}
              className="rounded-t-lg"
            />
          </figure>
          <figcaption className="flex flex-col gap-2 p-3">
            <div className="w-[12rem] bg-tertiary text-center text-secondary label-text rounded-lg py-[0.29rem] font-medium">
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
            <div className="text-foreground line-clamp-3 p-[0.8rem] font-medium">
              {(post.categories ?? []).map((category: Category, id: number) => (
                <p key={id}>{category.description}</p>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-tertiary-white/70">
                <time>{format(new Date(post._createdAt), "MM/dd/yyyy")}</time>
                <span className="mx-1">•</span>
                <span>By: {post.authorName || "Unknown Author"}</span>
              </div>
              <div>
                <ArrowRight className="size-5 text-tertiary hover:cursor-pointer group-hover:text-primary-800 transition-color delay-300" />
              </div>
            </div>
          </figcaption>
        </Link>
      ))}
    </section>
  );
}
