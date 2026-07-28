import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const ECCOUNCIL_TRACKS = {
  "Core Cybersecurity Certifications": [
    {
      name: "CEH - Certified Ethical Hacker",
      code: "CEH",
      desc: "Ethical hacking, penetration testing, vulnerability assessment, system hacking, network scanning, and countermeasures.",
    },
    {
      name: "CND - Certified Network Defender",
      code: "CND",
      desc: "Network defense, security operations, incident response, firewall configuration, and network security controls.",
    },
    {
      name: "ECSA - EC-Council Certified Security Analyst",
      code: "ECSA",
      desc: "Advanced penetration testing, security analysis, exploit development, and comprehensive vulnerability assessment.",
    },
  ],
  "Advanced & Specialized Certifications": [
    {
      name: "CHFI - Computer Hacking Forensic Investigator",
      code: "CHFI",
      desc: "Digital forensics, incident investigation, data recovery, computer crime investigation, and forensic analysis.",
    },
    {
      name: "CCSE - Certified Cloud Security Engineer",
      code: "CCSE",
      desc: "Cloud security architecture, DevSecOps, container security, and cloud platform protection strategies.",
    },
    {
      name: "CTIA - Certified Threat Intelligence Analyst",
      code: "CTIA",
      desc: "Threat intelligence analysis, threat hunting, cyber threat modeling, and intelligence-driven defense frameworks.",
    },
  ],
} as const;

// Transform the tracks into category format
const categories = Object.entries(ECCOUNCIL_TRACKS).map(([title, certs]) => ({
  title,
  count: `${certs.length} Course${certs.length > 1 ? "s" : ""}`,
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

export default function CourseCategories() {
  return (
    <div className="w-full max-w-310 mx-auto p-4">
      {/* Top Banner Stats */}
      <div className="flex flex-wrap items-center justify-between gap-4 text-headline mb-4 px-4">
        <span>20+ Cybersecurity Experts</span>
        <span>+</span>
        <span>50+ Proctored Exams</span>
        <span>+</span>
        <span>24/7 Support</span>
        <span>+</span>
        <span>Proven Success Rate</span>
      </div>

      {/* Main Banner Container */}
      <div className="relative overflow-hidden text-secondary flex flex-col lg:flex-row">
        {/* Left Content Area */}
        <div className="flex-2 py-8 px-4 flex flex-col justify-center z-10">
          {/* Badge */}
          <div className="inline-block w-fit text-[10px] font-bold tracking-widest uppercase bg-accent text-secondary-700 px-2 py-0.5 rounded mb-3">
            EC-Council Exam Taker & Proxy Services
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold mb-8 leading-tight">
            Browse Our EC-Council Certification Categories & Find Professional
            Exam Takers For Ethical Hacking & Cybersecurity{" "}
            <span className="italic font-serif font-normal underline decoration-accent-400">
              Exams
            </span>
          </h2>

          {/* Category Rows */}
          <div className="space-y-4 max-w-md">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="flex items-center justify-between pb-3 border-b border-blue-400/40 hover:border-yellow-400 transition-colors cursor-pointer group"
              >
                <div>
                  <h3 className="font-semibold text-base md:text-lg group-hover:text-accent-300 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-p text-secondary-200">{cat.count}</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-blue-300/40 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-blue-900 group-hover:border-yellow-400 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          {/* Optional: Show certifications on hover or click - you can expand this */}
          <div className="mt-6 text-secondary hidden md:block">
            <p className="font-semibold text-secondary-500 text-title">
              Included certifications:
            </p>
            <div className="flex flex-wrap gap-2 mt-1">
              {categories.flatMap((cat) =>
                cat.certifications.map((cert) => (
                  <span
                    key={cert.code}
                    className="text-xs bg-accent-300/30 px-2 py-0.5 rounded-full"
                  >
                    {cert.code}
                  </span>
                )),
              )}
            </div>
            <p className="text-xs text-secondary-400 mt-2">
              Trusted by 100+ professionals for EC-Council exam assistance with
              secure proxy services
            </p>
          </div>
        </div>

        {/* Center / Image Area with Rounded Cutout */}
        <div className="relative flex-2 min-h-105 lg:min-h-full flex items-center justify-center p-6 lg:p-0">
          <div className="relative w-full h-full max-w-sm lg:max-w-none rounded-3xl lg:rounded-l-3xl lg:rounded-r-none overflow-hidden flex items-end justify-center">
            <Image
              src="/student-holding-laptop1.png"
              alt="Student carrying books"
              width={400}
              height={500}
              className="object-cover object-top h-full w-auto max-h-155"
              priority
            />
          </div>
        </div>

        {/* Right Sidebar - Partner Logos */}
        <div className="w-full lg:w-24 backdrop-blur-md flex lg:flex-col items-center justify-around py-6 px-3">
          {PROCTORING_PLATFORMS.map((platform, i) => (
            <div
              key={i}
              className="flex lg:flex-col items-center gap-2 lg:my-3 transition-all hover:scale-110 cursor-pointer group"
            >
              <div className="size-16 rounded-lg flex items-center justify-center p-1 shadow-sm">
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
