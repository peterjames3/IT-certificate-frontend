// sanity/schemaTypes/itilExamType.ts
import { defineType, defineField } from "sanity";

export const ITILExamType = defineType({
  name: "itilExam",
  title: "ITIL Exam",
  type: "document",
  fields: [
    defineField({
      name: "code",
      title: "Exam Code",
      type: "string",
      description: "e.g., ITIL4-FND, ITIL4-CDS, ITIL4-DSV, ITIL4-HVIT, ITIL4-DPI, ITIL4-DITS",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "track",
      title: "Certification Track",
      type: "string",
      description: "e.g., ITIL 4 Foundation, Create Deliver and Support, Drive Stakeholder Value, High-velocity IT, Direct Plan and Improve, Digital & IT Strategy",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "level",
      title: "Certification Level",
      type: "string",
      description: "e.g., Foundation, Managing Professional (MP), Strategic Leader (SL)",
      options: {
        list: [
          { title: "Foundation", value: "foundation" },
          { title: "Managing Professional (MP)", value: "managingProfessional" },
          { title: "Strategic Leader (SL)", value: "strategicLeader" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Targeted Professional Role",
      type: "string",
      description: "e.g., IT Service Desk, Service Delivery Manager, Customer Success Lead, Agile/DevOps Lead, IT Governance Manager, Digital Strategy Lead",
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
          { title: "Git Branch", value: "gitBranch" },
          { title: "Target", value: "target" },
          { title: "Clipboard Check", value: "clipboardCheck" },
          { title: "Trending Up", value: "trendingUp" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    // ── Optional: Link to the service page ──
    defineField({
      name: "servicePage",
      title: "Related Service Page",
      type: "reference",
      to: [{ type: "itilServicePage" }],
      description: "Link to the corresponding ITIL service page",
    }),
  ],
  preview: {
    select: { title: "code", subtitle: "track" },
  },
});
