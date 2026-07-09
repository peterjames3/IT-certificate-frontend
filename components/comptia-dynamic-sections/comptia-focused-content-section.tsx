import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

// ── Types ─────────────────────────────────────────────────
// (Also add these — or import from page.tsx — to your shared types file)
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

export interface CompTIAFocusedContentSectionData {
  _type: "compTIAFocusedContentSection";
  sectionId?: string;
  heading?: string;
  body?: PortableTextBlock[];
  sidebarCards: SidebarCard[];
  backgroundColor?: string;
  ctaButton?: CtaButton;
}

interface Props {
  data: CompTIAFocusedContentSectionData;
}

export default function CompTIAFocusedContentSection({ data }: Props) {
  const { heading, body, sidebarCards, backgroundColor, ctaButton } = data;

  return (
    <section
      className="py-12"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 lg:grid-cols-[1fr_340px]">
        {/* Left column: heading + body */}
        <div>
          {heading && (
            <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              {heading}
            </h2>
          )}

          {body && (
            <div className="prose prose-gray max-w-none text-gray-700">
              <PortableText value={body} />
            </div>
          )}

          {ctaButton?.label && (
            <a
              href={ctaButton.href}
              className={
                ctaButton.variant === "outline"
                  ? "mt-6 inline-block rounded border border-emerald-600 px-6 py-3 font-semibold text-emerald-600"
                  : "mt-6 inline-block rounded bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
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
              <ul className="space-y-3 px-5 py-4">
                {card.items?.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-emerald-500 text-[10px] text-emerald-600">
                      →
                    </span>
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