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
  "inline-flex min-h-10 items-center justify-center gap-2 px-4 text-[0.66rem] font-bold uppercase tracking-[0.08em] transition";

const variantClassNames = {
  primary:
    "border border-[color:var(--color-gold-500)] bg-[color:var(--color-gold-500)] text-white hover:border-[color:var(--color-gold-600)] hover:bg-[color:var(--color-gold-600)]",
  secondary:
    "border border-[color:var(--color-navy-900)]/34 bg-white/88 text-[color:var(--color-navy-900)] hover:bg-white",
  outline:
    "border border-[color:var(--color-gold-500)]/66 text-[color:var(--color-gold-500)] hover:bg-[color:var(--color-gold-500)] hover:text-[color:var(--color-navy-950)]",
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
