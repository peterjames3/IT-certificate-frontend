// app/tools/_components/ToolNavLink.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ToolNavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
        isActive
          ? "bg-primary-500 text-white"
          : "text-secondary-600 hover:bg-primary-50 hover:text-primary-600"
      }`}
    >
      {label}
    </Link>
  );
}
