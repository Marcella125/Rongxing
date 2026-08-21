import type { PropsWithChildren } from "react";

import { TextReveal } from "@/components/motion/Reveal";

type SectionCardProps = PropsWithChildren<{
  title: string;
  description: string;
}>;

export function SectionCard({
  title,
  description,
  children,
}: SectionCardProps) {
  return (
    <article className="rounded-3xl border border-[color:var(--color-border)] bg-white p-6 shadow-[0_18px_60px_rgba(7,24,46,0.06)]">
      <div className="space-y-3">
        <TextReveal distance={28}>
          <h3 className="text-lg font-semibold tracking-[-0.02em] text-[color:var(--color-navy-900)]">
            {title}
          </h3>
        </TextReveal>
        <TextReveal delay={0.08} distance={20}>
          <p className="max-w-prose text-sm leading-7 text-[color:var(--color-slate-700)]">
            {description}
          </p>
        </TextReveal>
        {children}
      </div>
    </article>
  );
}
