"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Award,
  Cloud,
  Network,
  ShieldAlert,
  LayoutGrid,
  Layers,
  ShieldCheck,
  Server,
  
} from "lucide-react";

const examServices = [
  {
    icon: Award,
    title: "Foundational Cert Proxy Service",
    subtitle: "CompTIA Tracks (A+, Network+, Security+)",
    tags: ["Pass CompTIA fast", "⭐ Core Security"],
    description:
      "Deploy premium remote configurations to pass CompTIA fast. Secure your certification goals using a tailored online exam helper built specifically for Security+, Network+, and A+ baseline tiers.",
    features: [
      "Pay someone to take my CompTIA Security+ exam support",
      "How to pass CompTIA Network+ without studying tracks",
      "Hire a professional test taker for CompTIA A+ core 1 & 2",
    ],
    stats: [
      { value: "100%", label: "Pass rate" },
      { value: "450+", label: "Certs earned" },
      { value: "4.9★", label: "Rating" },
    ],
    learnMore: {
      label: "Learn more about CompTIA help →",
      href: "/pay-someone-to-take-comptia-exam-for-me",
    },
  },
  {
    icon: Cloud,
    title: "AWS Exam Proxy & Cloud Architecture",
    subtitle: "Amazon Web Services Certifications",
    tags: ["AWS Cloud", "⭐ Solutions Architect"],
    description:
      "Comprehensive AWS proxy testing configurations for all certification levels. Our certified infrastructure experts connect securely to pass AWS exams on your first attempt.",
    features: [
      "Pay someone to take my AWS Solutions Architect exam",
      "AWS SysOps Administrator associate certification support",
      "AWS Developer associate exam proxy services",
      "AWS Security specialty validation assistance",
    ],
    stats: [
      { value: "100%", label: "Pass rate" },
      { value: "200+", label: "Engineers passed" },
      { value: "4.9★", label: "Rating" },
    ],
    learnMore: {
      label: "Learn more about AWS exam help →",
      href: "/pay-someone-to-take-aws-exam-for-me",
    },
  },
  {
    icon: Server,
    title: "Azure Exam Proxy & Cloud Solutions",
    subtitle: "Microsoft Azure Certifications",
    tags: ["Azure Cloud", "⭐ AZ-104 & AZ-305"],
    description:
      "Professional Azure exam proxy services for all Microsoft certification tracks. Our certified Azure experts handle your exam with complete confidentiality.",
    features: [
      "Pay someone to take my AZ-900 Azure Fundamentals exam",
      "Azure Administrator AZ-104 certification support",
      "Azure Solutions Architect AZ-305 exam proxy",
      "Azure Security Engineer AZ-500 validation help",
    ],
    stats: [
      { value: "100%", label: "Pass rate" },
      { value: "180+", label: "Engineers passed" },
      { value: "4.9★", label: "Rating" },
    ],
    learnMore: {
      label: "Learn more about Azure exam help →",
      href: "/pay-someone-to-take-azure-exam-for-me",
    },
  },
  {
    icon: Network,
    title: "Core Enterprise Networking Help",
    subtitle: "Cisco & Juniper Infrastructure",
    tags: ["CCNA exam helper", "Infrastructure Mapping"],
    description:
      "Rigorous simulation bypass workflows matching advanced routing and switching pipelines. Full command coverage for complex corporate test sandboxes and multi-tier network validation environments.",
    features: [
      "Hire a proxy for Cisco CCNA proctored exam blocks",
      "Full Cisco CCNP routing & switching profile delivery",
      "Juniper JNCIA through JNCIE software setup",
    ],
    stats: [
      { value: "99.4%", label: "Pass rate" },
      { value: "210+", label: "Network Engineers" },
      { value: "4.8★", label: "Rating" },
    ],
    learnMore: {
      label: "Learn more about Networking help →",
      href: "/pay-someone-to-take-cisco-ccna-exam-for-me",
    },
  },
  {
    icon: ShieldAlert,
    title: "Advanced Cybersecurity Operations",
    subtitle: "Defensive & Offensive Profiles",
    tags: ["Security Systems", "⭐ Enterprise Grade"],
    description:
      "Premium proctor bypass methods for elite cybersecurity certifications. Secure your next organizational tier without risking verification updates or screen share detection algorithms.",
    features: [
      "Cheapest reliable proxy service for Security plus cert levels",
      "Can someone take my proctored CompTIA test online securely",
      "Certified delivery options for CISSP, CEH, & OSCP frameworks",
    ],
    stats: [
      { value: "100%", label: "Pass rate" },
      { value: "180+", label: "CISSPs/CEHs passed" },
      { value: "5.0★", label: "Rating" },
    ],
    learnMore: {
      label: "Learn more about Security exam help →",
      href: "/pay-someone-to-take-ec-council-exam-for-me",
    },
  },
  {
    icon: LayoutGrid,
    title: "ISACA Certification Exam Help",
    subtitle: "CISA · CISM · CRISC · CGEIT · CDPSE",
    tags: ["IT Audit", "Security", "Risk", "Governance", "Privacy"],
    description:
      "Professional exam taker support for ISACA certifications using secure proxy services. Guaranteed passing results for CISA, CISM, CRISC, CGEIT, and CDPSE with complete profile confidentiality.",
    features: [
      "CISA IT audit and governance exam support",
      "CISM security management certification assistance",
      "CRISC risk and control validation services",
      "CGEIT enterprise governance exam help",
      "CDPSE data privacy engineering solutions",
    ],
    stats: [
      { value: "100%", label: "Pass rate" },
      { value: "500+", label: "Professionals certified" },
      { value: "4.9★", label: "Rating" },
    ],
    learnMore: {
      label: "Learn more about ISACA Exam help →",
      href: "/pay-someone-to-take-isaca-exam-for-me",
    },
  },
  
  {
    icon: Layers,
    title: "ITIL Certification Exam Help",
    subtitle: "ITIL 4 Foundation · Specialist · Strategist",
    tags: ["ITSM", "ITIL", "Service Management"],
    description:
      "Pay someone to take your ITIL exam with guaranteed passing results. Our professional exam takers use secure proxy services to handle ITIL 4 Foundation, Specialist, and Strategist certifications with complete profile confidentiality.",
    features: [
      "Pay someone to take ITIL 4 Foundation exam",
      "ITIL Specialist create, deliver & support modules",
      "Pay someone to take ITIL Strategist exam",
      "Managing Professional (MP) transition exam help",
      "Strategic Leader (SL) certification guidance",
      "Secure proxy services for all ITIL tracks",
    ],
    stats: [
      { value: "100%", label: "Pass rate" },
      { value: "200+", label: "Professionals certified" },
      { value: "4.8★", label: "Rating" },
    ],
    learnMore: {
      label: "Learn more about ITIL exam help →",
      href: "/pay-someone-to-take-itil-v4",
    },
  },
];

export default function VendorListSection() {
 

  return (
    <motion.section
    
    id='certification'
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
        Expert Cert Exam Help for Every Major Technical Track
      </motion.h2>
      <motion.p
        className="text-xl text-secondary mb-12 text-center"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Main domains where our Certified engineering and security specialists
        will help you pass your technical certification exams.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full mx-auto max-w-full lg:max-w-310 px-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {examServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.2,
              }}
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
                        ? "bg-primary-500 text-white border border-primary-700"
                        : "bg-primary-50 text-secondary border border-secondary-600"
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
                  <h3 className="text-secondary-900 font-bold text-lg leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-secondary-500 text-sm mt-1">
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
                    <span className="size-4.5 bg-secondary rounded-full flex items-center justify-center shrink-0">
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

              {/* Guarantee */}
              <div className="flex items-center gap-2 bg-green-950/50 border border-green-800/50 rounded-lg px-4 py-2.5 text-white text-sm font-medium">
                <ShieldCheck size={16} strokeWidth={2} />
                100% money-back if you don&apos;t pass
              </div>

              {/* CTAs */}
              <button
                
                className="bg-white hover:bg-gray-100 text-gray-900 font-bold text-base px-8 py-3 rounded-xl cursor-pointer transition-colors"
              >
                Get a free quote →
              </button>
              <Link
                href={service.learnMore.href}
                className="text-center text-secondary text-sm underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                {service.learnMore.label}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
