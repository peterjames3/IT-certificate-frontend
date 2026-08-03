import { ExamCategory, AcademicService, MenuItem } from "./defination";

export const examAidCategories: ExamCategory = {
  "AWS Certifications": [
    {
      name: "Take AWS cerfied Cloud Practitioner (CLF-C02) Exam for Me",
      slug: "pay-someone-to-take-aws-cloud-practitionerclf-c02-exam-for-me",
    },
    {
      name: "Take AWS Solutions Architect Associate (SAA-C03) Exam for Me",
      slug: "pay-someone-to-take-aws-solutions-architect-associate-saa-c03-exam-for-me",
    },
    {
      name: "Take AWS SysOps Administrator Associate (SOA-C02) Exam for Me)",
      slug: "pay-someone-to-take-aws-sysops-administrator-soa-c02-exam-for-me",
    },
  ],
  "Microsoft Azure": [
    {
      name: "Take Azure Fundamentals (AZ-900) Exam for Me",
      slug: "pay-someone-to-take-azure-fundamentals-az-900-exam-for-me",
    },
    {
      name: "Take Azure Administrator (AZ-104) Exam for Me",
      slug: "pay-someone-to-take-azure-administrator-az-104-exam-for-me",
    },
    {
      name: "Take Azure Solutions Architect Expert (AZ-305) Exam for Me",
      slug: "pay-someone-to-take-azure-solutions-architect-expert-az-30-exam-for-me",
    },
  ],
  "Linux Administration": [
    {
      name: "Take Red Hat Certified System Administrator (RHCSA EX200) Exam for Me",
      slug: "pay-some-to-take-rhcsa-exam-ex200-for-me",
    },
    {
      name: "Take Linux Foundation Certified System Administrator (LFCS) Exam for Me",
      slug: "pay-someone-to-take-lfcs-certification-exam-for-me",
    },
  ],
  "ISC² & ISACA": [
    {
      name: "Take ISC² Certified Information Systems Security Professional (CISSP)for Me",
      slug: "pay-someone-to-take-isc2-cissp-exam-for-me",
    },
    {
      name: "Take ISACA Certified Information Systems Auditor (CISA)for Me ",
      slug: "pay-someone-to-take-isaca-cisa-exam-for-me",
    },
    {
      name: "Take ISACA Certified Information Security Manager (CISM) for Me",
      slug: "pay-someone-to-take-isaca-cism-exam-for-me",
    },
  ],
  Fortinet: [
    {
      name: "Take Fortinet Certified Associate (FCA / NSE 1-3) Exam for me",
      slug: "pay-someone-to-take-fortinet-fca-certification-for-me",
    },
    {
      name: "Take Fortinet Certified Professional (FCP / NSE 4-6) for Me",
      slug: "pay-someone-to-take-fortinet-fcp-nse4-exam-for-me",
    },
  ],
  "Google Cloud & Oracle": [
    {
      name: "Take Google Cloud Associate Cloud Engineer (ACE) Exam for Me",
      slug: "pay-someone-to-pass-gcp-associate-cloud-engineer-exam-for-me",
    },
    {
      name: "Take Google Cloud Professional Cloud Architect (PCA) Exam for me",
      slug: "pay-someone-to-pass-gcp-professional-cloud-architect-exam-for-me",
    },
    {
      name: "Take Oracle Cloud Infrastructure Foundations (OCI) Exam for Me",
      slug: "pay-someone-to-pass-oracle-cloud-infrastructure-foundations-exam-for-me",
    },
    {
      name: "Take Oracle Certified Professional Java SE Exam for Me",
      slug: "pay-someone-to-pass-oracle-java-se-professional-exam-for-me",
    },
  ],
};

export const comptiaCategories: ExamCategory = {
  "CompTIA Core": [
    {
      name: "Take CompTIA A+ Exam for Me",
      slug: "pay-someone-to-take-my-comptia-a-plus-exam-for-me",
    },
    {
      name: "Take CompTIA Network+ Exam for Me",
      slug: "pay-someone-to-take-my-comptia-network-plus-exam-for-me",
    },
    {
      name: "Take CompTIA Tech + Exam for Me",
      slug: "pay-someone-to-take-my-comptia-tech-plus-exam-for-me",
    },

    {
      name: "Take CompTIA Data+ Exam for Me",
      slug: "pay-someone-to-take-my-comptia-data-plus-exam-for-me",
    },
  ],
  "CompTIA Infrastructure": [
    {
      name: "Take CompTIA Server+ for Me",
      slug: "pay-someone-to-take-my-comptia-server-plus-exam-for-me",
    },
    {
      name: "Take CompTIA Cloud+ for me",
      slug: "pay-someone-to-take-my-comptia-cloud-plus-exam-for-me",
    },
    {
      name: "Take CompTIA Linux+ Exam for Me",
      slug: "pay-someone-to-take-my-comptia-linux-plus-exam-for-me",
    },
  ],
  "CompTIA Cybersecurity": [
    {
      name: "Take CompTIA CySA+ for Me",
      slug: "pay-someone-to-take-my-comptia-cysa-plus-exam-for-me",
    },
    {
      name: "Take CompTIA PenTest+ for me",
      slug: "pay-someone-to-take-my-comptia-pentest-plus-exam-for-me",
    },
    {
      name: "Take CompTIA Security+ Exam for Me",
      slug: "pay-someone-to-take-my-comptia-security-plus-exam-for-me",
    },
  ],
};
export const awsCategories: ExamCategory = {
  "AWS Foundational & Associate": [
    {
      name: "Take AWS Certified Cloud Practitioner Exam for Me",
      slug: "pay-someone-to-take-my-aws-cloud-practitioner-exam-for-me",
    },
    {
      name: "Take AWS Certified Solutions Architect Associate Exam for Me",
      slug: "pay-someone-to-take-my-aws-solutions-architect-associate-exam-for-me",
    },
    {
      name: "Take AWS Certified Developer Associate Exam for Me",
      slug: "pay-someone-to-take-my-aws-developer-associate-exam-for-me",
    },
    {
      name: "Take AWS Certified SysOps Administrator Associate Exam for Me",
      slug: "pay-someone-to-take-my-aws-sysops-administrator-exam-for-me",
    },
    {
      name: "Take AWS Certified Data Engineer Associate Exam for Me",
      slug: "pay-someone-to-take-my-aws-data-engineer-associate-exam-for-me",
    },
  ],
  "AWS Professional": [
    {
      name: "Take AWS Certified Solutions Architect Professional Exam for Me",
      slug: "pay-someone-to-take-my-aws-solutions-architect-professional-exam-for-me",
    },
    {
      name: "Take AWS Certified DevOps Engineer Professional Exam for Me",
      slug: "pay-someone-to-take-my-aws-devops-engineer-professional-exam-for-me",
    },
  ],
  "AWS Specialty": [
    {
      name: "Take AWS Certified Advanced Networking Specialty Exam for Me",
      slug: "pay-someone-to-take-my-aws-advanced-networking-specialty-exam-for-me",
    },
    {
      name: "Take AWS Certified Security Specialty Exam for Me",
      slug: "pay-someone-to-take-my-aws-security-specialty-exam-for-me",
    },
    {
      name: "Take AWS Certified Machine Learning Specialty Exam for Me",
      slug: "pay-someone-to-take-my-aws-machine-learning-specialty-exam-for-me",
    },
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
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Take My CompTIA Exam",
    href: "/pay-someone-to-take-comptia-exam-for-me",
    submenu: categoryToSubmenu(
      comptiaCategories,
      "/pay-someone-to-take-comptia-exam-for-me",
    ),
  },
  // {
  //   name: "Cisco-CCNA",
  //   href: "pay-someone-to-take-cisco-cnna-exam-for-me",
  // },
  {
    name: "Proctored Exam Help",
    href: "#",
    // Keep this if it serves as a separate landing page for general support inquiries
    submenu: categoryToSubmenu(examAidCategories, "/proctored-exam-help"),
  },
  {
    name: "Certificate Tools",
    href: "#",
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
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "How It Works",
    href: "/how-it-works",
  },
];
