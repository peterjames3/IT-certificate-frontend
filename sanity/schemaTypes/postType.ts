import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    // ── Excerpt / SEO Description ──
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "A short summary of the post. Used in blog listings, meta descriptions, and social sharing. (Recommended: 150-160 characters)",
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
    // ── SEO Meta Tags ──
    defineField({
      name: "seo",
      title: "SEO Settings",
      type: "object",
      fields: [
        defineField({
          name: "seoTitle",
          title: "SEO Title",
          type: "string",
          description: "Shown in browser tab and Google results (~60 chars)",
          validation: (Rule) => Rule.max(100),
        }),
        defineField({
          name: "seoDescription",
          title: "Meta Description",
          type: "text",
          rows: 3,
          description: "Google snippet (~160 chars)",
          validation: (Rule) => Rule.max(200),
        }),
        defineField({
          name: "seoKeywords",
          title: "Keywords",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
          description: "SEO keywords for this post",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      excerpt: "excerpt",
    },
    prepare(selection) {
      const { author, excerpt } = selection;
      return {
        ...selection,
        subtitle: author ? `by ${author}` : excerpt?.slice(0, 60) + (excerpt?.length > 60 ? "..." : ""),
      };
    },
  },
});
