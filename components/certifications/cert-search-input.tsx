// components/certifications/CertSearchInput.tsx
"use client";
import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

// Popular certs for autocomplete suggestions
const CERT_SUGGESTIONS = [
  { label: "CompTIA A+",                              slug: "comptia-a-plus" },
  { label: "CompTIA Network+",                        slug: "comptia-network-plus" },
  { label: "CompTIA Security+",                       slug: "comptia-security-plus" },
  { label: "CompTIA CySA+",                           slug: "comptia-cysa-plus" },
  { label: "CompTIA PenTest+",                        slug: "comptia-pentest-plus" },
  { label: "CISSP",                                   slug: "cissp" },
  { label: "CCSP",                                    slug: "ccsp" },
  { label: "ISC² CC",                                 slug: "isc2-cc" },
  { label: "CISA",                                    slug: "cisa" },
  { label: "CISM",                                    slug: "cism" },
  { label: "AWS Cloud Practitioner",                  slug: "aws-cloud-practitioner" },
  { label: "AWS Solutions Architect Associate",       slug: "aws-solutions-architect-associate" },
  { label: "AWS Security Specialty",                  slug: "aws-security-specialty" },
  { label: "Microsoft Azure Fundamentals (AZ-900)",   slug: "az-900" },
  { label: "Microsoft Azure Administrator (AZ-104)",  slug: "az-104" },
  { label: "Microsoft Azure Security (AZ-500)",       slug: "az-500" },
  { label: "Microsoft SC-200",                        slug: "sc-200" },
  { label: "CCNA",                                    slug: "ccna" },
  { label: "OSCP",                                    slug: "oscp" },
  { label: "CKA",                                     slug: "cka" },
  { label: "CKS",                                     slug: "cks" },
  { label: "Google ACE",                              slug: "google-ace" },
  { label: "Google PCSE",                             slug: "google-pcse" },
  { label: "BTL1",                                    slug: "btl1" },
  { label: "GCIH",                                    slug: "gcih" },
  { label: "eJPT",                                    slug: "ejpt" },
  { label: "CEH",                                     slug: "ceh" },
  { label: "HashiCorp Terraform Associate",           slug: "terraform-associate" },
];

interface CertSearchInputProps {
  index: number;
  value: string;           // slug
  label: string;           // display label
  onChange: (slug: string, label: string) => void;
  onClear: () => void;
  placeholder?: string;
}

export default function CertSearchInput({
  index,
  value,
  label,
  onChange,
  onClear,
  placeholder = "Search certification...",
}: CertSearchInputProps) {
  const [query, setQuery]     = useState(label);
  const [open, setOpen]       = useState(false);
  const containerRef          = useRef<HTMLDivElement>(null);

  // Sync label when parent clears — defer state update to avoid cascading renders
  useEffect(() => {
    if (label !== query) {
      const timer = window.setTimeout(() => {
        setQuery(label);
      }, 0);

      return () => window.clearTimeout(timer);
    }
  }, [label, query]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        // Reset input to selected label if user typed but didn't pick
        if (!value) setQuery("");
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [value]);

  const filtered = query.length > 0
    ? CERT_SUGGESTIONS.filter((c) =>
        c.label.toLowerCase().includes(query.toLowerCase()) ||
        c.slug.includes(query.toLowerCase())
      ).slice(0, 7)
    : CERT_SUGGESTIONS.slice(0, 7);

  function handleSelect(cert: { label: string; slug: string }) {
    setQuery(cert.label);
    setOpen(false);
    onChange(cert.slug, cert.label);
  }

  function handleClear() {
    setQuery("");
    setOpen(false);
    onClear();
  }

  return (
    <div ref={containerRef} className="relative w-full">
      <label className="block text-sm font-medium text-secondary-700 mb-1">
        Certification {index + 1}
        {index === 2 && (
          <span className="ml-1 text-xs text-secondary-400">(optional)</span>
        )}
      </label>

      <div className="relative">
        <input
          type="text"
          value={query}
          placeholder={placeholder}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          className="w-full border border-neutral-200 rounded-lg px-4 py-3 text-sm text-secondary-800 placeholder:text-secondary-400 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all bg-white"
        />
        {value && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-400 hover:text-secondary-700 transition-colors"
            aria-label="Clear"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {open && filtered.length > 0 && (
        <ul className="absolute z-30 top-full left-0 right-0 mt-1 bg-white border border-neutral-200 rounded-lg shadow-lg max-h-56 overflow-y-auto">
          {filtered.map((cert) => (
            <li key={cert.slug}>
              <button
                onMouseDown={() => handleSelect(cert)}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                  cert.slug === value
                    ? "bg-primary-50 text-primary-700 font-medium"
                    : "text-secondary-700 hover:bg-neutral-50"
                }`}
              >
                {cert.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}