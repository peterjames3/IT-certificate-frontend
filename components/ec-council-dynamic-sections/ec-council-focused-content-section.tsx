import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { CircleArrowRight } from "lucide-react";
import { portableTextComponents } from "../blog/portable-text-components";

// ── Types ─────────────────────────────────────────────────
export interface SidebarListItem {
  text: string;
  link?: string;
}

export interface SidebarCard {
  title: string;
  accentColor?: string; // hex string from Sanity color field, e.g. "#10b981"
  items: SidebarListItem[];
}

export interface CtaButton {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
}

export interface ECCouncilFocusedContentSectionData {
  _type: "ecCouncilFocusedContentSection";
  sectionId?: string;
  heading?: string;
  body?: PortableTextBlock[];
  sidebarCards: SidebarCard[];
  backgroundColor?: string;
  ctaButton?: CtaButton;
}

interface Props {
  data: ECCouncilFocusedContentSectionData;
}

export default function ECCouncilFocusedContentSection({ data }: Props) {
  const { heading, body, sidebarCards, backgroundColor, ctaButton } = data;

  return (
    <section
      className="py-12"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className="mx-auto grid max-w-310 grid-cols-1 gap-10 px-4 lg:grid-cols-[1fr_340px]">
        {/* Left column: heading + body */}
        <div>
          {heading && (
            <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              {heading}
            </h2>
          )}

          {body && (
            <div className="prose prose-gray max-w-none text-gray-700">
              <PortableText value={body} components={portableTextComponents} />
            </div>
          )}

          {ctaButton?.label && (
            <a
              href={ctaButton.href}
              className={
                ctaButton.variant === "outline"
                  ? "mt-6 inline-block rounded border border-emerald-600 px-6 py-3 font-semibold text-emerald-600 hover:bg-emerald-50 transition-colors"
                  : ctaButton.variant === "secondary"
                  ? "mt-6 inline-block rounded border border-gray-600 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
                  : "mt-6 inline-block rounded bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 transition-colors"
              }
            >
              {ctaButton.label}
            </a>
          )}
        </div>

        {/* Right column: stacked sidebar cards */}
        <div className="flex flex-col gap-6">
          {sidebarCards?.map((card, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg border border-gray-200 shadow-sm"
            >
              <div
                className="px-5 py-4 font-semibold text-white"
                style={{ backgroundColor: card.accentColor ?? "#10b981" }}
              >
                {card.title}
              </div>
              <ul className="space-y-3 px-5 py-4 font-medium">
                {card.items?.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 text-secondary-700"
                  >
                    <CircleArrowRight className="w-5 h-5 text-emerald-500 shrink-0" />
                    {item.link ? (
                      <a href={item.link} className="hover:underline">
                        {item.text}
                      </a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}