import Image from "next/image";
//import Link from "next/link";
import { portableTextComponents } from "@/components/blog/portable-text-components";
import { PortableText } from "next-sanity";
import type { ContentSectionData } from "@/lib/defination";

const sizeMap: Record<string, string> = {
  "33": "lg:w-1/3",
  "50": "lg:w-1/2",
  "66": "lg:w-2/3",
};

export default function ExamDetails({ data }: { data: ContentSectionData }) {
  const {
    sectionId,
    heading,
    subheading,
    body,
    image,
    imagePosition = "right",
    imageSize = "50",
    backgroundColor,
    //ctaButton,
  } = data;

  const isLeft = imagePosition === "left";
  const hasImage = imagePosition !== "none" && !!image?.url;
  const imgWidthClass = sizeMap[imageSize] ?? "lg:w-1/2";

  return (
    <section
      id={sectionId}
      className="py-16 px-6"
      style={{ backgroundColor: backgroundColor ?? undefined }}
    >
      <div
        className={`py-2 w-full mx-auto max-w-full lg:max-w-310 flex  flex-col gap-6 lg:flex-row lg:items-center md:gap-8 px-4
          ${hasImage ? `lg:flex-row ${isLeft ? "lg:flex-row-reverse" : ""}` : ""}`}
      >
        {/* Text column */}
        <div className="flex-1 flex flex-col gap-4">
          {subheading && (
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
              {subheading}
            </p>
          )}
          {heading && (
            <h2 className="text-headline-md lg:text-headline-lg font-bold text-secondary leading-snug">
              {heading}
            </h2>
          )}
          {body && (
            <div className="prose md:prose-p-md lg:prose-p-lg prose-p:text-primary prose-p:mb-4 max-w-none">
              <PortableText value={body} components={portableTextComponents} />
            </div>
          )}
       
        </div>

        {/* Image column */}
        {hasImage && (
          <div
            className={`relative w-full ${imgWidthClass} min-h-160 lg:min-h-160 overflow-hidden shrink-0`}
          >
            <Image
              src={image!.url}
              alt={image!.alt ?? ""}
              fill
              priority
              className="object-fill"
            />
            {image?.caption && (
              <p className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-sm text-center py-2 px-4">
                {image.caption}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
