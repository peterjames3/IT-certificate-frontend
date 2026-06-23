import { ExamCategory, AcademicService, MenuItem } from "./defination";

export const examAidCategories: ExamCategory = {
  "AWS Certifications": [
    {
      name: "Take AWS cerfied Cloud Practitioner (CLF-C02) Exam for Me",
      slug: "pay-someone-to-take-my-pmp-exam-for-me",
    },
    {
      name: "AWS Solutions Architect Associate (SAA-C03)",
      slug: "pass-aws-solutions-architect-associate-saa-c03",
    },
    {
      name: "AWS SysOps Administrator Associate (SOA-C02)",
      slug: "pass-aws-sysops-administrator-soa-c02",
    },
  ],
  "Microsoft Azure": [
    {
      name: "Azure Fundamentals (AZ-900)",
      slug: "pass-azure-fundamentals-az-900",
    },
    {
      name: "Azure Administrator (AZ-104)",
      slug: "pass-azure-administrator-az-104",
    },
    {
      name: "Azure Solutions Architect Expert (AZ-305)",
      slug: "pass-azure-solutions-architect-expert-az-30",
    },
  ],
  "Linux Administration": [
    {
      name: "Red Hat Certified System Administrator (RHCSA EX200)",
      slug: "pass-rhcsa-exam-ex200",
    },
    {
      name: "Linux Foundation Certified System Administrator (LFCS)",
      slug: "pass-lfcs-certification-exam",
    },
  ],
  "ISC² & ISACA": [
    {
      name: "ISC² Certified Information Systems Security Professional (CISSP)",
      slug: "pass-isc2-cissp-exam",
    },
    {
      name: "ISACA Certified Information Systems Auditor (CISA)",
      slug: "pass-isaca-cisa-exam",
    },
    {
      name: "ISACA Certified Information Security Manager (CISM)",
      slug: "pass-isaca-cism-exam",
    },
  ],
  Fortinet: [
    {
      name: "Fortinet Certified Associate (FCA / NSE 1-3)",
      slug: "pass-fortinet-fca-certification",
    },
    {
      name: "Fortinet Certified Professional (FCP / NSE 4-6)",
      slug: "pass-fortinet-fcp-nse4-exam",
    },
  ],
  "Google Cloud & Oracle": [
    {
      name: "Google Cloud Associate Cloud Engineer (ACE)",
      slug: "pass-gcp-associate-cloud-engineer",
    },
    {
      name: "Google Cloud Professional Cloud Architect (PCA)",
      slug: "pass-gcp-professional-cloud-architect",
    },
    {
      name: "Oracle Cloud Infrastructure Foundations (OCI)",
      slug: "pass-oracle-cloud-infrastructure-foundations",
    },
    {
      name: "Oracle Certified Professional Java SE",
      slug: "pass-oracle-java-se-professional",
    },
  ],
};

export const comptiaCategories: ExamCategory = {
  "CompTIA Core": [
    { name: "Take CompTIA A+ Exam for Me", slug: "take-pmp-exam" },
    { name: "Take CompTIA Network+ Exam for Me", slug: "take-pmp-exam" },
    { name: "Take CompTIA Security+ Exam for Me", slug: "take-pmp-exam" },
  ],
  "CompTIA Infrastructure": [
    { name: "Take CompTIA Server+ for Me", slug: "take-ged-exam" },
    { name: "Take CompTIA Cloud+ for me", slug: "take-hiset-exam" },
    { name: "Take CompTIA Linux+ Exam for Me", slug: "take-pmp-exam" },
  ],
  "CompTIA Cybersecurity": [
    { name: "Take CompTIA CySA+ for Me", slug: "take-ged-exam" },
    { name: "Take CompTIA PenTest+ for me", slug: "take-hiset-exam" },
    { name: "Take CompTIA Security+ Exam for Me", slug: "take-pmp-exam" },
  ],
};

export const academicServices: AcademicService[] = [
  // { name: "Assignment Help", href: "/academic/assignment-help" },
  { name: "Online Tutoring Services", href: "/academic/tutoring" },
  // { name: "Class Assistant", href: "/academic/class-assistant" },
];

// Helper function to convert ExamCategory to SubMenuItem[]
const categoryToSubmenu = (categories: ExamCategory, basePath: string) => {
  return Object.entries(categories).flatMap(([group, items]) => [
    { name: group, href: "#", group }, // Group header
    ...items.map((item) => ({
      name: item.name,
      href: `${basePath}/${item.slug
        .toLowerCase()
        // .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")}`,
      group,
    })),
  ]);
};

export const MenuItems: MenuItem[] = [
  { name: "Home", href: "/" },

  {
    name: "Take My CompTIA Exam",
    href: "/pay-someone-to-take-comptia-exam-for-me",
    submenu: categoryToSubmenu(
      comptiaCategories,
      "/pay-someone-to-take-comptia-exam-for-me",
    ),
  },

  {
    name: "Proctored IT Exam Help",
    href: "/proctored-it-exam-help",
    submenu: categoryToSubmenu(examAidCategories, "/proctored-exam-help"),
  },

  {
    name: "Certificate Tools",
    href: "it-certificate-tools",
    submenu: [
      {
        name: "Compare Certifications",
        href: "/tools/compare",
        group: "Career Tools",
      },
      {
        name: "Certification Roadmap",
        href: "/tools/roadmap",
        group: "Career Tools",
      },
      {
        name: "Recommend Certifications",
        href: "/tools/recommend/certifications",
        group: "Career Tools",
      },
      {
        name: "Recommend Homelabs",
        href: "/tools/recommend/homelabs",
        group: "Career Tools",
      },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "How It Works", href: "/how-it-works" },
];
