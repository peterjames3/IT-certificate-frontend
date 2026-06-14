// app/tools/layout.tsx
import type { ReactNode } from "react";
import { ToolNavLink } from "@/components/ui/tool-nav-link";
export const metadata = {
  title: {
    template: "%s | Tools — TestHelpNow",
    default: "Tools — TestHelpNow",
  },
  description:
    "IT certification tools — compare, roadmap, and recommend certifications and homelabs.",
};

export default function ToolsLayout({ children }: { children: ReactNode }) {
  return (
    <main className="wrapper py-12 min-h-screen">
      {/* Page header shared across all tool pages */}
      <div className="mb-10 pt-[5rem]">
        <span className="text-sm font-medium text-primary-500 uppercase tracking-wide">
          Tools
        </span>
        <h1 className="text-3xl font-bold text-secondary-800 mt-1">
          Certification intelligence
        </h1>
        <p className="text-secondary-500 mt-2 max-w-xl">
          Compare certifications, build your roadmap, and get personalised
          recommendations based on your goals.
        </p>
      </div>

      {/* Tool navigation — highlight active tool */}
      <nav className="flex flex-wrap gap-3 mb-10 border-b border-neutral-200 pb-4">
        {[
          { label: "Compare", href: "/tools/compare" },
          { label: "Roadmap", href: "/tools/roadmap" },
          { label: "Recommend Certs", href: "/tools/recommend/certifications" },
          { label: "Recommend Homelabs", href: "/tools/recommend/homelabs" },
        ].map((link) => (
          <ToolNavLink key={link.href} href={link.href} label={link.label} />
        ))}
      </nav>

      {children}
    </main>
  );
}
