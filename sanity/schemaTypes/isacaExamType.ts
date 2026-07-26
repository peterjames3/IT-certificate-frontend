// sanity/schemaTypes/isacaExamType.ts
import { defineType, defineField } from "sanity";

export const ISACAExamType = defineType({
  name: "isacaExam",
  title: "ISACA Exam",
  type: "document",
  fields: [
    defineField({
      name: "code",
      title: "Exam Code",
      type: "string",
      description: "e.g., CISA, CISM, CRISC, CGEIT, CDPSE",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "track",
      title: "Certification Track",
      type: "string",
      description: "e.g., Certified Information Systems Auditor",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Targeted Professional Role",
      type: "string",
      description: "e.g., IT Audit Professional, Security Manager",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "focus",
      title: "Core Focus Areas",
      type: "text",
      description: "Brief description of exam focus areas",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "code", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Icon name from Lucide",
      options: {
        list: [
          { title: "Shield", value: "shield" },
          { title: "Database", value: "database" },
          { title: "Server", value: "server" },
          { title: "CPU", value: "cpu" },
          { title: "Cloud", value: "cloud" },
          { title: "Network", value: "network" },
          { title: "Router", value: "router" },
          { title: "Globe", value: "globe" },
          { title: "Wifi", value: "wifi" },
          { title: "Lock", value: "lock" },
          { title: "Eye", value: "eye" },
          { title: "File Check", value: "fileCheck" },
          { title: "Briefcase", value: "briefcase" },
          { title: "Users", value: "users" },
          { title: "Bar Chart", value: "barChart" },
          { title: "Book Open", value: "bookOpen" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    // ── Optional: Link to the service page ──
    defineField({
      name: "servicePage",
      title: "Related Service Page",
      type: "reference",
      to: [{ type: "isacaServicePage" }],
      description: "Link to the corresponding ISACA service page",
    }),
  ],
  preview: {
    select: { title: "code", subtitle: "track" },
  },
});