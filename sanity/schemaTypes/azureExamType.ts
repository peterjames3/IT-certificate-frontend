
import { defineType, defineField } from "sanity";

export const AzureExamType = defineType({
  name: "azureExam",
  title: "Azure Exam",
  type: "document",
  fields: [
    defineField({
      name: "code",
      title: "Exam Code",
      type: "string",
      description: "e.g., AZ-900, AZ-104, AZ-305, AZ-500",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "track",
      title: "Certification Track",
      type: "string",
      description: "e.g., Azure Fundamentals, Azure Administrator Associate",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Targeted Professional Role",
      type: "string",
      description:
        "e.g., Cloud Administrator, Solutions Architect, Security Engineer",
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
          { title: "Cloud", value: "cloud" },
          { title: "Server", value: "server" },
          { title: "Database", value: "database" },
          { title: "Network", value: "network" },
          { title: "Shield", value: "shield" },
          { title: "Lock", value: "lock" },
          { title: "CPU", value: "cpu" },
          { title: "Globe", value: "globe" },
          { title: "Wifi", value: "wifi" },
          { title: "Eye", value: "eye" },
          { title: "Briefcase", value: "briefcase" },
          { title: "Users", value: "users" },
          { title: "BarChart", value: "barChart" },
          { title: "BookOpen", value: "bookOpen" },
          { title: "FileCheck", value: "fileCheck" },
          { title: "Layers", value: "layers" },
          { title: "Code", value: "code" },
          { title: "Brain", value: "brain" },
          { title: "Rocket", value: "rocket" },
          { title: "Settings", value: "settings" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    // ── Optional: Link to the service page ──
    defineField({
      name: "servicePage",
      title: "Related Service Page",
      type: "reference",
      to: [{ type: "azureServicePage" }],
      description: "Link to the corresponding Azure service page",
    }),
  ],
  preview: {
    select: { title: "code", subtitle: "track" },
  },
});
