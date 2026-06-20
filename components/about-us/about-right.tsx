import { ArrowRight, ShieldAlert, Laptop } from "lucide-react";
import Link from "next/link";
import Bookstack3D from "./bookstack-3d";
import WavyTexture from "./wavy-texture";

export default function AboutRight() {
  return (
    <section className="w-full  space-y-4 px-8 py-8  relative">
      <div className="absolute -top-14 -right-2">
        <WavyTexture />
      </div>
      {/* Eyebrow */}
      <div className="flex items-center gap-2">
        <span className="h-px w-6 bg-primary" />
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          About Us
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-secondary-900 leading-snug">
        Who We Are – Premium IT Proctored Exam Takers
      </h2>

      {/* Paragraph */}
      <p className="text-sm md:text-base text-secondary-600 leading-relaxed">
        If you need to pay someone to take your Pearson VUE exam online or
        discover how to bypass OnVUE proctoring software safely, our platform
        provides discrete, enterprise-grade deployment experts to secure your
        technical path.
      </p>

      {/* Tags Row */}
      <div className="w-full flex items-center justify-between gap-4 pt-1">
        <div className="flex gap-2 items-center">
          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Laptop size={16} />
          </span>
          <p className="text-xs md:text-sm text-secondary-500 font-medium">
            IT exam help solutions
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <ShieldAlert size={16} />
          </span>
          <p className="text-xs md:text-sm text-secondary-500 font-medium">
            Clean Pearson VUE profile
          </p>
        </div>
      </div>

      {/* Stats row - Pivot to track records across Cloud & Systems Domains */}
      <div className="flex flex-wrap justify-between gap-4 pt-2">
        <div className="flex items-center gap-3">
          <p className="text-3xl md:text-4xl font-bold text-secondary-900 leading-none">
            50+
          </p>
          <div>
            <p className="text-xs text-secondary-500 leading-tight">
              AWS exam takers & <br /> Linux LPI specialists
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-3xl md:text-4xl font-bold text-secondary-900 leading-none">
            99.4%
          </p>
          <div>
            <p className="text-xs text-secondary-500 leading-tight">
              Pass rates across <br /> Red Hat & Cisco labs
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="pt-3">
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-sm font-semibold text-secondary-900 hover:text-primary transition-colors group"
        >
          More About
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>

      <div className="absolute -bottom-16 -right-2 ">
        <Bookstack3D />
      </div>
    </section>
  );
}
