import Link from "next/link";

import { navigationItems } from "@/data/navigation";
import { companyProfile } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--color-border)] bg-white/92 backdrop-blur">
      <Container className="py-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="max-w-sm space-y-1">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-[color:var(--color-gold-600)]">
              Guangzhou
            </p>
            <p className="font-serif text-xl tracking-[-0.03em] text-[color:var(--color-navy-900)] sm:text-2xl">
              {companyProfile.legalName}
            </p>
          </Link>

          <nav aria-label="Primary" className="overflow-x-auto">
            <ul className="flex min-w-max flex-wrap items-center gap-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex rounded-full px-4 py-2 text-sm font-medium text-[color:var(--color-slate-700)] transition hover:bg-[color:var(--color-surface)] hover:text-[color:var(--color-navy-900)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold-600)] focus-visible:ring-offset-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
