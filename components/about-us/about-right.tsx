import { ArrowRight, Sparkles, GraduationCap } from "lucide-react";
import Link from "next/link";
import Bookstack3D from "./bookstack-3d";
import WavyTexture from "./wavy-texture";

export default function AboutRight() {
  return (
    <section className="w-full  space-y-4 px-8 py-8  relative">
      <div className="absolute -top-16 -right-2">
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
        Who We Are – Introduction to Educate Online Platform
      </h2>

      {/* Paragraph */}
      <p className="text-sm md:text-base text-secondary-600 leading-relaxed">
        Educate the ultimate destination for knowledge seekers and educators
        alike. We are committed to transforming special education impact global
        channels without constraints complaint systems.
      </p>

      {/*tags */}
      <div className="w-full flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Sparkles size={24} />
          </span>
          <p className="text-sm text-secondary-500 mt-1">
            Innovative learning style
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
            <GraduationCap size={24} />
          </span>
          <p className="text-sm text-secondary-500 mt-1">
            WorldWide intelligent leaners
          </p>
        </div>
      </div>

      {/* Stats row */}
      <div className="flex flex-wrap justify-between pt-2">
        <div className="flex items-center gap-3">
          <p className="text-4xl font-bold text-secondary-900 leading-none">
            30+
          </p>
          <div>
            <p className="text-sm text-secondary-500 mt-1">
              Expert and Professional  <br /> all instructor
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-4xl font-bold text-secondary-900 leading-none">
            6k+
          </p>
          <div>
            <p className="text-sm text-secondary-500 mt-1">
              Enrolled students
             all  Over <br /> the World
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
