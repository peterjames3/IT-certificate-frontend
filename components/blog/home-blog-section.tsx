import Link from "next/link"
import {  ArrowRight } from "lucide-react";
import OldestBlogPost from "./oldest-blog-post";

export default function HomeBlogSection(){
    return(
        <section className=" w-full bg-linear-to-b from-gray-50 to-white py-16">
        <div className="w-full mx-auto max-w-full lg:max-w-310  px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold  text-foreground flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-primary"></div>
            Latest Tech Certificates and Exams Insights
          </h2>
          <p className="text-2xl font-semibold">
            Stay <span className='text-accent-500 italic underline'>Updated</span> with the latest news, exam tips, study guidelines, and trends in IT Industry
          </p>
        </div>

        {/* Blog Posts Grid */}
        <OldestBlogPost />
          {/* Footer */}
        <div className="text-center">
          <Link href="/blog" className="inline-flex items-center text-foreground hover:text-primary font-medium">
            Read more 
            <ArrowRight className="size-4 ml-1" />
          </Link>
        </div>
        </div>
        </section>
        
    )

}
