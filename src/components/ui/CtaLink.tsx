import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

const baseClassName =
  "group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-none border px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold-500)] focus-visible:ring-offset-2";

const variantClassNames = {
  primary:
    "border-[color:var(--color-gold-500)] bg-[color:var(--color-gold-500)] text-[color:var(--color-navy-950)] hover:border-[color:var(--color-gold-600)] hover:bg-[color:var(--color-gold-600)]",
  secondary:
    "border-[color:var(--color-navy-900)]/28 bg-[rgba(246,242,237,0.88)] text-[color:var(--color-navy-900)] hover:border-[color:var(--color-navy-900)]/44 hover:bg-white",
  outline:
    "border-[color:var(--color-gold-500)]/66 bg-transparent text-[color:var(--color-gold-500)] hover:border-[color:var(--color-gold-500)] hover:bg-[color:var(--color-gold-500)] hover:text-[color:var(--color-navy-950)]",
} as const;

export function CtaLink({
  href,
  children,
  icon,
  variant = "primary",
  className,
}: CtaLinkProps) {
  return (
    <Link
      href={href}
      className={cn(baseClassName, variantClassNames[variant], className)}
    >
      {icon}
      {children}
    </Link>
  );
}
