"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const AZURE_TRACKS = {
  "Azure Fundamentals": [
    {
      name: "AZ-900 - Azure Fundamentals",
      code: "AZ-900",
      desc: "Cloud concepts, Azure services, core Azure workload, security, privacy, compliance, trust, and Azure pricing and support.",
    },
    {
      name: "AZ-104 - Azure Administrator Associate",
      code: "AZ-104",
      desc: "Identity management, governance, storage, compute, virtual networking, monitoring, and business continuity in Azure.",
    },
    {
      name: "AZ-204 - Azure Developer Associate",
      code: "AZ-204",
      desc: "Develop Azure compute solutions, implement Azure functions, develop for Azure storage, and implement Azure security.",
    },
  ],
  "Azure Advanced Certifications": [
    {
      name: "AZ-305 - Azure Solutions Architect Expert",
      code: "AZ-305",
      desc: "Design identity, governance, and monitoring solutions; design data storage, business continuity, and infrastructure solutions.",
    },
    {
      name: "AZ-500 - Azure Security Engineer Associate",
      code: "AZ-500",
      desc: "Identity and access management, platform protection, security operations, data protection, and security monitoring in Azure.",
    },
    {
      name: "AZ-700 - Azure Network Engineer Associate",
      code: "AZ-700",
      desc: "Design, implement, and manage hybrid networking, connectivity, routing, security, and load balancing in Azure.",
    },
  ],
  "Azure Specialty Certifications": [
    {
      name: "DP-203 - Azure Data Engineer Associate",
      code: "DP-203",
      desc: "Data storage, data processing, data security, and data monitoring using Azure data services and tools.",
    },
    {
      name: "AI-102 - Azure AI Engineer Associate",
      code: "AI-102",
      desc: "Plan and manage Azure AI solutions, implement cognitive services, and build conversational AI solutions.",
    },
    {
      name: "AZ-400 - Azure DevOps Engineer Expert",
      code: "AZ-400",
      desc: "DevOps processes, implement CI/CD, configuration management, and continuous improvement in Azure DevOps.",
    },
  ],
} as const;

// Transform the tracks into category format
const categories = Object.entries(AZURE_TRACKS).map(([title, certs]) => ({
  title,
  count: `${certs.length} Exam${certs.length > 1 ? "s" : ""}`,
  certifications: certs,
}));

const PROCTORING_PLATFORMS = [
  {
    src: "/respondus.png",
    alt: "Respondus lockdown browser logo",
  },
  {
    src: "/proctorio.png",
    alt: "Proctorio proctoring platform logo",
  },
  {
    src: "/examsoft.webp",
    alt: "ExamSoft lockdown and AI proctoring logo",
  },
  {
    src: "/Pearson.png",
    alt: "Pearson VUE certification exam platform logo",
  },
  {
    src: "/proctortrack.png",
    alt: "ProctorTrack exam platform logo",
  },
] as const;

export default function AzureCourseCategories() {
  return (
    <div className="w-full max-w-310 mx-auto p-4">
      {/* Top Banner Stats */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-headline mb-4 px-4">
        <span>20+ Azure Experts</span>
        <span>+</span>
        <span>50+ Proctored Azure Exams</span>
        <span>+</span>
        <span>24 Hours Support</span>
        <span>+</span>
        <span>100% Success Rate</span>
      </div>

      {/* Main Banner Container */}
      <div className="relative overflow-hidden text-secondary flex flex-col lg:flex-row rounded-2xl border border-blue-200/20">
        {/* Left Content Area */}
        <div className="flex-2 py-8 px-4 flex flex-col justify-center z-10">
          {/* Badge */}
          <div className="inline-block w-fit text-[10px] font-bold tracking-widest uppercase bg-blue-500/20 text-blue-600 px-3 py-1 rounded mb-3">
            Azure Exam Proxy Services
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold mb-8 leading-tight text-secondary-900">
            Browse Our Azure Certification Categories Find Professional Exam
            Takers For Cloud & Security{" "}
            <span className="italic font-serif font-normal underline decoration-blue-400">
              Exams
            </span>
          </h2>

          {/* Category Rows */}
          <div className="space-y-4 max-w-md">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="flex items-center justify-between pb-3 border-b border-blue-400/20 hover:border-blue-400 transition-colors cursor-pointer group"
              >
                <div>
                  <h3 className="font-semibold text-base md:text-lg group-hover:text-blue-500 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-p text-secondary-400">{cat.count}</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-blue-300/40 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          {/* Included certifications */}
          <div className="mt-6 text-secondary hidden md:block">
            <p className="font-semibold text-secondary-600 text-title">
              Included Azure certifications:
            </p>
            <div className="flex flex-wrap gap-2 mt-1">
              {categories.flatMap((cat) =>
                cat.certifications.map((cert) => (
                  <span
                    key={cert.code}
                    className="text-xs bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/20"
                  >
                    {cert.code}
                  </span>
                )),
              )}
            </div>
            <p className="text-xs text-secondary-400 mt-2">
              Trusted by 150+ professionals for Azure exam assistance
            </p>
          </div>
        </div>

        {/* Center / Image Area */}
        <div className="relative flex-2 min-h-105 lg:min-h-full flex items-center justify-center p-6 lg:p-0">
          <div className="relative w-full h-full max-w-sm lg:max-w-none rounded-3xl lg:rounded-l-3xl lg:rounded-r-none overflow-hidden flex items-end justify-center">
            <Image
              src="/student-holding-laptop1.png"
              alt="Azure certification expert"
              width={400}
              height={500}
              className="object-cover object-top h-full w-auto max-h-155"
              priority
            />
          </div>
        </div>

        {/* Right Sidebar - Partner Logos */}
        <div className="w-full lg:w-24 backdrop-blur-md flex lg:flex-col items-center justify-around py-6 px-3 bg-blue-900/5">
          {PROCTORING_PLATFORMS.map((platform, i) => (
            <div
              key={i}
              className="flex lg:flex-col items-center gap-2 lg:my-3 transition-all hover:scale-110 cursor-pointer group"
            >
              <div className="size-16 rounded-lg flex items-center justify-center p-1 shadow-sm bg-white/10">
                <Image
                  src={platform.src}
                  alt={platform.alt}
                  width={24}
                  height={24}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
