// app/(site)/tools/roadmap/_schema.tsx
// Injects structured data for Google to understand the roadmap content.
// Rendered server-side — no client JS needed.

import type { Roadmap } from "@/types/api.types";

interface RoadmapSchemaProps {
  roadmap: Roadmap;
  role: string;
}

export default function RoadmapSchema({ roadmap, role }: RoadmapSchemaProps) {
  const pageUrl = `http://localhost:3000/tools/roadmap?role=${role}`;
  const roadmapWithExtras = roadmap as Roadmap & {
    totalCost?: number;
    totalMonths?: number;
  };

  type RoadmapCertWithMeta = {
    name?: string;
    description?: string;
    url?: string;
  };

  // Flatten all certs across levels into an ordered list for Google
  const allCerts = [
    ...(roadmap.beginner    ?? []),
    ...(roadmap.intermediate ?? []),
    ...(roadmap.advanced     ?? []),
  ] as Array<RoadmapCertWithMeta>;

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to become a ${roadmap.role ?? role}`,
    description: `Step-by-step certification roadmap to become a ${roadmap.role ?? role}, from beginner to advanced.`,
    url: pageUrl,
    ...(roadmapWithExtras.totalCost && {
      estimatedCost: {
        "@type": "MonetaryAmount",
        currency: "USD",
        value: roadmapWithExtras.totalCost,
      },
    }),
    ...(roadmapWithExtras.totalMonths && {
      totalTime: `P${roadmapWithExtras.totalMonths}M`,
    }),
    step: allCerts.map((cert, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: cert.name,
      text: cert.description ?? `Earn the ${cert.name} certification.`,
      ...(cert.url && { url: cert.url }),
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.testhelpnow.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: "https://www.testhelpnow.com/tools",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Roadmap",
        item: "https://www.testhelpnow.com/tools/roadmap",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: `${roadmap.role ?? role} Roadmap`,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}