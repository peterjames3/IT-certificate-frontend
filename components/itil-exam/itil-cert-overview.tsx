import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const ITIL_TRACKS = {
  "Foundation Certifications": [
    {
      name: "ITIL 4 Foundation",
      code: "ITIL4-FND",
      desc: "Service Value System (SVS), four dimensions of service management, ITIL guiding principles, and key ITIL practices.",
    },
    {
      name: "ITIL 4 Foundation Bridge",
      code: "ITIL4-BRIDGE",
      desc: "Transition from ITIL v3 to ITIL 4, updated concepts, new practices, and evolving service management frameworks.",
    },
  ],
  "Managing Professional (MP) Certifications": [
    {
      name: "CDS - Create, Deliver and Support",
      code: "ITIL4-CDS",
      desc: "Integrating service performance, constructing continuous value streams, and managing modern technology workflows.",
    },
    {
      name: "DSV - Drive Stakeholder Value",
      code: "ITIL4-DSV",
      desc: "Mapping customer journeys, fostering collaborative stakeholder relationships, and managing service consumption.",
    },
    {
      name: "HVIT - High-velocity IT",
      code: "ITIL4-HVIT",
      desc: "Leveraging rapid product delivery frameworks, digital service scaling, and lean technology operations.",
    },
    {
      name: "DPI - Direct, Plan and Improve",
      code: "ITIL4-DPI",
      desc: "Structuring strategic goals, aligning service governance policies, and steering continuous improvement loops.",
    },
  ],
  "Strategic Leader (SL) Certifications": [
    {
      name: "DITS - Digital & IT Strategy",
      code: "ITIL4-DITS",
      desc: "Digital leadership, strategic IT alignment, driving organizational transformation, and creating business value through technology.",
    },
  ],
} as const;

// Transform the tracks into category format
const categories = Object.entries(ITIL_TRACKS).map(([title, certs]) => ({
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
        <span>20+ ITSM & Governance Experts</span>
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
            ITIL Exam Taker & Proxy Services
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold mb-8 leading-tight">
            Browse Our ITIL Certification Categories & Find Professional
            Exam Takers For Service Management & IT Governance{" "}
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
              Trusted by 100+ professionals for ITIL exam assistance with
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