"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { 
  Award, 
  Cloud, 
  Network, 
  ShieldAlert, 
  LayoutGrid, 
  Terminal, 
  Layers,
  ShieldCheck 
} from "lucide-react";

const examServices = [
  {
    icon: Award,
    title: "General IT / Foundational Support",
    subtitle: "CompTIA Tracks",
    tags: ["CompTIA Neutral", "⭐ Core Fundamentals"],
    description:
      "Expert exam handling for foundational to mid-level IT tracks. Pass your CompTIA A+, Network+, Security+, Linux+, Cloud+, CySA+, or PenTest+ benchmarks reliably with specialized remote technical support.",
    features: [
      "Covers A+, Network+, & Security+",
      "Advanced CySA+ & PenTest+ tracks",
      "Full webcam/lockdown sandbox prep",
    ],
    stats: [
      { value: "100%", label: "Pass rate" },
      { value: "450+", label: "Certs earned" },
      { value: "4.9★", label: "Rating" },
    ],
    learnMore: {
      label: "Learn more about CompTIA help →",
      href: "/proctored-exam-help/pay-someone-to-take-my-comptia-exam-for-me",
    },
  },
  {
    icon: Cloud,
    title: "Cloud Engineering Systems",
    subtitle: "AWS, Azure & Google Cloud",
    tags: ["Cloud Platforms", "⭐ Hyper-Scale"],
    description:
      "Comprehensive solutions architectures management maps across major multi-cloud vendor environments including AWS Solutions Architect, Azure Fundamentals (AZ-900), and Google Cloud Architect.",
    features: [
      "AWS Practitioner up to Professional",
      "Azure AZ-900 up to Expert role-based",
      "GCP Associate & Architect tracks",
    ],
    stats: [
      { value: "100%", label: "Pass rate" },
      { value: "380+", label: "Engineers passed" },
      { value: "4.9★", label: "Rating" },
    ],
    learnMore: {
      label: "Learn more about Cloud exam help →",
      href: "/proctored-exam-help/pay-someone-to-take-my-cloud-exam-for-me",
    },
  },
  {
    icon: Network,
    title: "Core Enterprise Networking",
    subtitle: "Cisco & Juniper Infrastructure",
    tags: ["Networking Systems", "Infrastructure"],
    description:
      "Rigorous simulation handling for advanced routing and switching pipelines. Full lifecycle coverage for deep engineering tracks including Cisco CCNA/CCNP portfolios and Juniper enterprise paths.",
    features: [
      "Cisco CCNA & CCNP paths managed",
      "Juniper JNCIA through JNCIE maps",
      "Topology and lab configurations setup",
    ],
    stats: [
      { value: "99.4%", label: "Pass rate" },
      { value: "210+", label: "Network Engineers" },
      { value: "4.8★", label: "Rating" },
    ],
    learnMore: {
      label: "Learn more about Networking help →",
      href: "/proctored-exam-help/pay-someone-to-take-my-cisco-exam-for-me",
    },
  },
  {
    icon: ShieldAlert,
    title: "Advanced Cybersecurity Ops",
    subtitle: "Defensive & Offensive Profiles",
    tags: ["Cybersecurity", "⭐ Highly Valued"],
    description:
      "Specialized proctor strategies for elite security certifications. Certified security personnel support for administrative management profiles like CISSP/CISM as well as offensive validation tracks like CEH and OSCP.",
    features: [
      "Management: CISSP, CISM, & ISACA",
      "Offensive: CEH & hands-on OSCP",
      "Deep technical GIAC / SANS blueprints",
    ],
    stats: [
      { value: "100%", label: "Pass rate" },
      { value: "180+", label: "CISSPs/CEHs passed" },
      { value: "5.0★", label: "Rating" },
    ],
    learnMore: {
      label: "Learn more about Security exam help →",
      href: "/proctored-exam-help/pay-someone-to-take-my-cybersecurity-exam-for-me",
    },
  },
  {
    icon: LayoutGrid,
    title: "Project Management & ITSM",
    subtitle: "PMP, Agile & ITIL Frameworks",
    tags: ["Project Management", "IT Service Management"],
    description:
      "Process optimization support for delivery leads. Complete structural oversight for managing service delivery methodologies under strict PMI PMP specifications, ITIL v4 frameworks, or Scrum implementations.",
    features: [
      "PMP 180-question domain management",
      "ITIL v4 Service operations maps",
      "Agile Scrum (PSM/CSM) validation",
    ],
    stats: [
      { value: "100%", label: "Pass rate" },
      { value: "310+", label: "Managers certified" },
      { value: "4.9★", label: "Rating" },
    ],
    learnMore: {
      label: "Learn more about PMP & ITIL help →",
      href: "/proctored-exam-help/pay-someone-to-take-my-pmp-exam-for-me",
    },
  },
  {
    icon: Terminal,
    title: "Linux & Enterprise Systems",
    subtitle: "LPI & Red Hat Operations",
    tags: ["Systems Admin", "Open Source"],
    description:
      "Practical execution strategies for command line environments and systems automation frameworks. Targeted handling for Red Hat performance exams and multi-tier LPIC administration tracks.",
    features: [
      "Hands-on RHCSA & RHCE execution",
      "LPIC-1, LPIC-2, & LPIC-3 tiers",
      "Shell automation & configuration profiles",
    ],
    stats: [
      { value: "100%", label: "Pass rate" },
      { value: "140+", label: "SysAdmins passed" },
      { value: "4.8★", label: "Rating" },
    ],
    learnMore: {
      label: "Learn more about Linux exam help →",
      href: "/proctored-exam-help/pay-someone-to-take-my-linux-exam-for-me",
    },
  },
  {
    icon: Layers,
    title: "Virtualization & Data Center",
    subtitle: "VMware Infrastructures",
    tags: ["Virtualization", "Data Center"],
    description:
      "Strategic verification models matching Software-Defined Data Center architectures. Clear configuration controls targeting VMware Certified Professional (VCP) pipelines.",
    features: [
      "VMware VCP baseline execution",
      "Hypervisor storage & configuration paths",
      "Data Center virtualization profiles",
    ],
    stats: [
      { value: "100%", label: "Pass rate" },
      { value: "95+", label: "VCPs passed" },
      { value: "4.7★", label: "Rating" },
    ],
    learnMore: {
      label: "Learn more about VMware help →",
      href: "/proctored-exam-help/pay-someone-to-take-my-vmware-exam-for-me",
    },
  },
];
export default function VendorListSection() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 px-4 bg-white"
    >
     <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4"
      >
        Expert Help for Every Major IT Certification
      </motion.h2>
      <motion.p
        className="text-xl text-primary mb-12 text-center"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Certified engineering and security specialists equipped to help you pass your technical certification exams.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {examServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="flex flex-col rounded-2xl p-6 text-white gap-4 border-2 border-gray-200 hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Tags */}
              <div className="flex gap-2 flex-wrap text-center">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`text-sm text-center font-semibold px-3 py-2 rounded-full ${
                      tag.includes("⭐")
                        ? "bg-[#2DBF50] text-white border border-green-700"
                        : "bg-accent2 text-primary border border-gray-600"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="bg-green-900/40 rounded-xl p-3 shrink-0">
                  <Icon size={36} strokeWidth={1.5} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-primary font-bold text-lg leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-2">
                {service.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <span className="w-[18px] h-[18px] bg-primary rounded-full flex items-center justify-center shrink-0">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <polyline
                          points="2,6 5,9 10,3"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <div className="grid grid-cols-3 rounded-xl overflow-hidden border border-gray-700 divide-x divide-gray-700">
                {service.stats.map((stat, i) => (
                  <div key={i} className="bg-[#252b32] py-2.5 text-center">
                    <div className="text-white font-bold text-base">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-[12px] mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              {/* <p className="text-gray-400 text-sm">
                Starting from{" "}
                <span className="text-white font-bold">{service.price}</span> ·
                free quote in 60 sec
              </p> */}

              {/* Guarantee */}
              <div className="flex items-center gap-2 bg-green-950/50 border border-green-800/50 rounded-lg px-4 py-2.5 text-primary text-sm font-medium">
                <ShieldCheck size={16} strokeWidth={2} />
                100% money-back if you don&apos;t pass
              </div>

              {/* CTAs */}
              <button
                onClick={handleClick}
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold text-base px-8 py-3 rounded-xl cursor-pointer transition-colors"
              >
                Get a free quote →
              </button>
              <Link
                href={service.learnMore.href}
                className="text-center text-primary text-sm underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                {service.learnMore.label}
              </Link>
            </div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}