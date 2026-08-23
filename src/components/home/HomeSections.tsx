"use client";

import {
  ArrowRight,
  ArrowUp,
  ClipboardCheck,
  Container as ContainerIcon,
  Factory,
  type LucideIcon,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type SVGProps,
} from "react";

import { useDesktopGsap } from "@/hooks/use-desktop-gsap";
import { assetPath } from "@/lib/paths";
import { Reveal, TextReveal } from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { Container } from "@/components/ui/Container";
import { cn } from "@/utils/cn";

gsap.registerPlugin(ScrollTrigger);

type PremiumIconProps = SVGProps<SVGSVGElement>;

function SourcingMark(props: PremiumIconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path d="M7.5 24.5V11.7L16 7l8.5 4.7v12.8" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 24.5v-8.2h11v8.2M13.2 19.1h5.6M13.2 21.7h5.6" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 7v6.1M8.7 12.6h14.6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" opacity=".62" />
    </svg>
  );
}

function EvMark(props: PremiumIconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path d="M8.5 19h15l-2-5.4a3 3 0 0 0-2.8-1.9h-5.4a3 3 0 0 0-2.8 1.9L8.5 19Z" stroke="currentColor" strokeWidth="1.65" strokeLinejoin="round" />
      <path d="M7 19h18v4.2H7V19ZM10.4 24.7h1.9M19.7 24.7h1.9M12.1 16h7.8" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m17.2 6.9-3 5.1h3.7l-2.7 4.6" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BrandMark(props: PremiumIconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path d="M10.3 17.1 7.8 19.6a3.25 3.25 0 0 0 4.6 4.6l3.2-3.2M21.7 14.9l2.5-2.5a3.25 3.25 0 0 0-4.6-4.6l-3.2 3.2" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m13.3 18.7 5.4-5.4M11.5 9.2l2 2M20.5 20.8l2 2" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.2 12.5h3.2M21.6 19.5h3.2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" opacity=".65" />
    </svg>
  );
}

function IndustrialMark(props: PremiumIconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path d="M7.5 24.5V13.2l5.6 3.2v-3.2l5.6 3.2v-6.1h5.8v14.2h-17Z" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 20.1h2.3M15.2 20.1h2.3M19.4 20.1h2.3M20.3 10.3V7.5h3.1v2.8" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function PrecisionMark(props: PremiumIconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx="16" cy="16" r="8.6" stroke="currentColor" strokeWidth="1.55" />
      <circle cx="16" cy="16" r="3.2" stroke="currentColor" strokeWidth="1.55" />
      <path d="M16 5.7V9M16 23v3.3M5.7 16H9M23 16h3.3M18.2 13.8l4.5-4.5" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
    </svg>
  );
}

function IntegrityMark(props: PremiumIconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path d="M16 6.8 24 10v5.5c0 5.1-3.1 8.7-8 10.4-4.9-1.7-8-5.3-8-10.4V10l8-3.2Z" stroke="currentColor" strokeWidth="1.65" strokeLinejoin="round" />
      <path d="m12.5 16.4 2.3 2.3 5-5" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NetworkMark(props: PremiumIconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx="16" cy="16" r="9.3" stroke="currentColor" strokeWidth="1.55" />
      <path d="M6.8 16h18.4M16 6.7c2.6 2.6 4 5.7 4 9.3s-1.4 6.7-4 9.3c-2.6-2.6-4-5.7-4-9.3s1.4-6.7 4-9.3Z" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.4 10.4c1.8 1 4 1.6 6.6 1.6s4.8-.6 6.6-1.6M9.4 21.6c1.8-1 4-1.6 6.6-1.6s4.8.6 6.6 1.6" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" opacity=".7" />
    </svg>
  );
}

function GrowthMark(props: PremiumIconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path d="M8 24.5h16M10.4 22v-5.1M16 22v-8.2M21.6 22V10.5" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" />
      <path d="m9.5 13.2 4.3-4.3 3.9 3.9 5.8-5.8M20.5 7h3v3" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function VerifiedMark(props: PremiumIconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path d="m16 5.8 2.7 2.1 3.4-.2 1.2 3.2 2.8 2-1 3.3 1 3.3-2.8 2-1.2 3.2-3.4-.2-2.7 2.1-2.7-2.1-3.4.2-1.2-3.2-2.8-2 1-3.3-1-3.3 2.8-2 1.2-3.2 3.4.2L16 5.8Z" stroke="currentColor" strokeWidth="1.45" strokeLinejoin="round" />
      <path d="m12.4 16.2 2.3 2.3 5-5" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const strategicObjectives = [
  {
    number: "01",
    title: "Connecting China with the World",
    description:
      "To build a trusted bridge between global markets and China's manufacturers, suppliers, and business opportunities.",
  },
  {
    number: "02",
    title: "Delivering Tailored Solutions",
    description:
      "To understand each client's unique requirements and provide flexible, customized solutions regardless of the industry, product, or service involved.",
  },
  {
    number: "03",
    title: "Providing Smart & Fast Solutions",
    description:
      "To leverage our knowledge, experience, and network in China to identify the right options and deliver efficient solutions with speed and precision.",
  },
  {
    number: "04",
    title: "Building Long-Term Global Partnerships",
    description:
      "To establish lasting relationships with clients, manufacturers, suppliers, and business partners worldwide based on trust, transparency, reliability, and mutual growth.",
  },
  {
    number: "05",
    title: "Being the Partner Who Finds the Solution",
    description:
      "To serve as a single point of contact for clients seeking products, suppliers, manufacturers, services, or business opportunities in China and turn their needs into practical, reliable, and actionable solutions.",
  },
] as const;

const solutionCards = [
  {
    number: "01",
    title: "Commercial Sourcing",
    description:
      "Direct access to manufacturers, competitive pricing, quality products and efficient execution.",
    icon: SourcingMark,
  },
  {
    number: "02",
    title: "Electric Vehicle Trading",
    description:
      "Flexible sourcing and export solutions from individual vehicles to large-scale international orders.",
    icon: EvMark,
  },
  {
    number: "03",
    title: "International Brand Representation",
    description:
      "Connecting international brands with the right markets, partners, distributors and commercial opportunities.",
    icon: BrandMark,
  },
  {
    number: "04",
    title: "Industrial Solutions",
    description:
      "Production lines, machinery, equipment and integrated solutions for establishing and developing manufacturing operations.",
    icon: IndustrialMark,
  },
] as const;

const detailedSolutions = [
  {
    number: "01",
    title: "Commercial Sourcing",
    statement: "Direct Factory Sourcing",
    description: [
      "We provide professional sourcing solutions directly from manufacturers, giving our clients access to competitive prices, high-quality products, and reliable supply sources.",
      "Through our direct relationships with factories and manufacturers, we identify the right products and specifications according to each client's requirements, while minimizing sourcing time and ensuring efficient execution.",
    ],
    highlights: [
      "Direct Factory Sourcing",
      "Competitive Pricing",
      "Quality Products",
      "Fast Execution",
    ],
  },
  {
    number: "02",
    title: "Electric Vehicle Trading",
    statement:
      "From one vehicle to large-scale shipments, we make EV sourcing simple, fast, and competitive.",
    description: [
      "Our electric vehicle business is built on strong market knowledge and direct access to key manufacturers, primary sources, and authorized sales channels within China's rapidly growing EV industry.",
      "We provide sourcing and export solutions for electric vehicles, from a single vehicle to large-scale orders, according to our clients' requirements.",
    ],
    highlights: [
      "Direct access to major EV manufacturers and primary sources",
      "Competitive pricing",
      "Flexible order quantities",
      "Fast processing and execution",
      "International shipping solutions",
      "Support throughout the purchasing and export process",
    ],
  },
  {
    number: "03",
    title: "International Brand Representation",
    statement: "Commercial growth with local intelligence and disciplined execution.",
    description: [
      "RONG XING has successfully executed numerous international agency and distribution agreements across different markets.",
      "Our experience enables us to connect international brands with suitable market opportunities, partners, distributors, and commercial channels.",
      "We support the process from market assessment and partner selection to commercial agreements and market development.",
    ],
    highlights: [
      "Market assessment",
      "Partner and distributor selection",
      "Commercial agreement support",
      "Market development guidance",
    ],
  },
  {
    number: "04",
    title: "Industrial Solutions",
    statement: "Turnkey / Complete Project Supply",
    description: [
      "We provide smart and integrated industrial solutions for companies looking to establish, expand, or develop manufacturing operations.",
      "Our capabilities include sourcing and supplying complete production lines, machinery, equipment, and industrial solutions based on the specific requirements of each project.",
      "We also support strategic partnership and investment models aligned with the scale and structure of each industrial requirement.",
    ],
    highlights: [
      "Complete production lines",
      "Machinery and equipment sourcing",
      "Integrated industrial solutions",
      "Strategic partnership and investment models",
    ],
  },
] as const;

const projectCards = [
  {
    number: "01",
    title: "Industrial Equipment Supply",
    route: "Guangzhou, China to Saudi Arabia",
    category: "Industrial Solutions",
    image: "/images/home-full-f2f6fcf3.png",
    imagePosition: "63% 52%",
    href: "/capabilities",
    icon: Factory,
  },
  {
    number: "02",
    title: "Complete Production Line Delivery",
    route: "Guangzhou, China to United Arab Emirates",
    category: "Turnkey Solutions",
    image: "/images/contact.png",
    imagePosition: "66% 48%",
    href: "/products",
    icon: ContainerIcon,
  },
  {
    number: "03",
    title: "Factory Installation & Commissioning",
    route: "Guangzhou, China to Egypt",
    category: "Project Management",
    image: "/images/about-vision-a698b154.png",
    imagePosition: "58% 50%",
    href: "/contact",
    icon: ClipboardCheck,
  },
] satisfies readonly {
  number: string;
  title: string;
  route: string;
  category: string;
  image: string;
  imagePosition: string;
  href: string;
  icon: LucideIcon;
}[];

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const getDesktopCardScrollDistance = () =>
  Math.max(window.innerHeight * 1.05, 820);

const detailedSolutionsScrollTriggerId = "detailed-solutions-scroll";

function updateScrollFocusRows(
  rows: NodeListOf<HTMLElement>,
  viewportCenter: number,
  viewportHeight: number
) {
  rows.forEach((row) => {
    const rect = row.getBoundingClientRect();
    const distance = (rect.top + rect.height / 2 - viewportCenter) / viewportHeight;
    const distanceLimit = 0.42;
    const normalizedDistance = clamp(distance / distanceLimit, -1, 1);
    const isBelowCenter = normalizedDistance >= 0;
    const progress = Math.abs(normalizedDistance);
    const translateX = isBelowCenter ? progress * 100 : progress * -40;
    const opacity = isBelowCenter ? 1 - progress * 0.75 : 1 - progress * 0.6;
    const scale = isBelowCenter ? 1 - progress * 0.04 : 1 - progress * 0.03;
    const focus = 1 - progress;

    row.style.transform = `translate3d(${translateX}px, 0, 0) scale(${scale})`;
    row.style.opacity = `${opacity}`;
    row.style.setProperty("--focus", `${focus}`);

    row.querySelectorAll<HTMLElement>("[data-focus-title]").forEach((element) => {
      element.style.opacity = `${0.58 + focus * 0.42}`;
    });
    row.querySelectorAll<HTMLElement>("[data-focus-accent]").forEach((element) => {
      element.style.opacity = `${0.25 + focus * 0.75}`;
    });
    row.querySelectorAll<HTMLElement>("[data-focus-line]").forEach((element) => {
      element.style.transform = `scaleX(${0.35 + focus * 0.65})`;
      element.style.transformOrigin = "left center";
    });
    row.querySelectorAll<HTMLElement>("[data-focus-copy]").forEach((element) => {
      element.style.opacity = `${0.55 + focus * 0.45}`;
      element.style.transform = `translateY(${(1 - focus) * 8}px)`;
    });
  });
}

const whyItems = [
  {
    title: "Direct Access in China",
    description:
      "Strong access to manufacturers, suppliers and commercial opportunities.",
  },
  {
    title: "Tailored Solutions",
    description:
      "Every requirement is approached according to the client's specific needs.",
  },
  {
    title: "Smart & Fast Execution",
    description:
      "Local knowledge and an established network enable efficient decision-making and execution.",
  },
  {
    title: "Multiple Capabilities",
    description:
      "Sourcing, EV trading, brand representation and industrial solutions through one company.",
  },
  {
    title: "Trusted Partnerships",
    description:
      "Long-term relationships built around transparency, reliability and mutual growth.",
  },
  {
    title: "Global Perspective",
    description:
      "China-based expertise serving international clients and markets.",
  },
] as const;

const mobileWhyItems = [
  {
    title: whyItems[0].title,
    description: whyItems[0].description,
    icon: PrecisionMark,
  },
  {
    title: whyItems[1].title,
    description: whyItems[1].description,
    icon: IntegrityMark,
  },
  {
    title: whyItems[2].title,
    description: whyItems[2].description,
    icon: NetworkMark,
  },
  {
    title: whyItems[3].title,
    description: whyItems[3].description,
    icon: GrowthMark,
  },
  {
    title: whyItems[4].title,
    description: whyItems[4].description,
    icon: BrandMark,
  },
  {
    title: whyItems[5].title,
    description: whyItems[5].description,
    icon: SourcingMark,
  },
] as const;

function SectionTitle({
  label,
  title,
  subtitle,
  dark = false,
}: {
  label: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-[46rem]">
      <p className="section-label mb-4">{label}</p>
      <TextReveal forceMotion distance={48}>
        <h2
          className={cn(
            "mobile-section-heading section-heading",
            dark ? "text-white" : "text-[color:var(--color-navy-900)]"
          )}
        >
          {title}
        </h2>
      </TextReveal>
      {subtitle ? (
        <TextReveal forceMotion delay={0.12} distance={24}>
          <p
            className={cn(
              "mobile-section-copy mt-4 max-w-[38rem] lg:mt-5 lg:text-[1rem] lg:leading-8",
              dark ? "text-white/74" : "text-[color:var(--color-slate-700)]"
            )}
          >
            {subtitle}
          </p>
        </TextReveal>
      ) : null}
    </div>
  );
}

function SolutionCapabilityCard({
  item,
  className,
}: {
  item: (typeof solutionCards)[number];
  className?: string;
}) {
  const Icon = item.icon;

  return (
    <article
      className={cn(
        "group navy-grid relative overflow-hidden border border-white/10 px-6 py-6 transition duration-300 hover:bg-white/[0.045] md:min-h-[14.75rem] md:px-7 md:py-7 xl:min-h-[15.5rem] xl:px-8",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,98,0.12),transparent_40%)] opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <span className="mobile-section-subheading text-[0.92rem] text-[color:var(--color-gold-500)] lg:font-semibold lg:tracking-[0.18em]">
            {item.number}
          </span>
          <Icon
            className="h-6 w-6 text-[color:var(--color-gold-500)]/88 sm:h-6 sm:w-6"
          />
        </div>
        <h3 className="mt-5 max-w-[16ch] text-[1.08rem] font-semibold uppercase leading-[1.08] tracking-[-0.02em] text-white sm:text-[1.14rem]">
          {item.title}
        </h3>
        <p className="mobile-section-copy mt-4 max-w-[18rem] text-white/68 sm:text-[0.9rem]">
          {item.description}
        </p>
        <div className="mt-auto pt-7">
          <ArrowRight className="h-4.5 w-4.5 text-[color:var(--color-gold-500)] transition duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
}

function MobileSolutionCapabilityCard({
  item,
}: {
  item: (typeof solutionCards)[number];
}) {
  const Icon = item.icon;

  return (
    <article className="mobile-card-surface mobile-card-surface-dark relative flex h-[16.5rem] flex-col overflow-hidden border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.075)_0%,rgba(255,255,255,0.025)_34%,rgba(255,255,255,0.008)_100%)] px-5 py-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_92%_8%,rgba(197,160,98,0.18),transparent_34%)]" />
      <div className="absolute inset-x-5 top-0 h-px bg-[linear-gradient(90deg,rgba(197,160,98,0),rgba(197,160,98,0.64),rgba(197,160,98,0))]" />
      <div className="absolute inset-0 navy-grid opacity-20" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <span className="font-serif text-[1.45rem] leading-none tracking-[-0.04em] text-[color:var(--color-gold-500)]">
            {item.number}
          </span>
          <Icon
            className="h-6.5 w-6.5 text-[color:var(--color-gold-500)]/86"
            strokeWidth={1.7}
          />
        </div>
        <h3 className="mt-4 max-w-[16ch] text-[0.9rem] font-semibold uppercase leading-[1.12] tracking-[0.08em] text-white">
          {item.title}
        </h3>
        <p className="mt-3 max-w-[18.5rem] text-[0.88rem] leading-[1.65] text-white/72">
          {item.description}
        </p>
        <div className="mt-auto pt-3">
          <span className="inline-flex h-7 w-7 items-center justify-center text-[color:var(--color-gold-500)]">
            <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2} />
          </span>
        </div>
      </div>
    </article>
  );
}

function DetailedSolutionCard({
  solution,
  desktop = false,
  expanded = true,
  onToggle,
}: {
  solution: (typeof detailedSolutions)[number];
  desktop?: boolean;
  expanded?: boolean;
  onToggle?: () => void;
}) {
  const visibleDescription = expanded
    ? solution.description
    : solution.description.slice(0, 1);
  const visibleHighlights = expanded
    ? solution.highlights
    : solution.highlights.slice(0, 2);
  const canToggle = Boolean(onToggle);

  return (
    <article
      data-detailed-active-card={desktop ? "" : undefined}
      className={cn(
        "relative w-full overflow-hidden border border-[color:var(--color-border)]",
        canToggle
          ? "mobile-card-surface mobile-card-surface-light bg-[#F8F4EF] px-3.5 py-3.5"
          : "bg-[#F8F4EF] px-4 py-4 shadow-[0_12px_32px_rgba(11,31,59,0.045)] lg:rounded-[0.55rem] lg:px-5 lg:py-5"
      )}
    >
      <div className="relative z-10 flex flex-col">
        <div
          className={cn(
            "relative grid gap-x-3",
            canToggle
              ? "grid-cols-[2.35rem_minmax(0,1fr)] items-center"
              : "grid-cols-[2.55rem_minmax(0,1fr)] items-center lg:grid-cols-[3rem_minmax(0,1fr)]"
          )}
        >
          <div
            data-detailed-card-number
            className={cn(
              "shrink-0 font-serif leading-none text-[color:var(--color-gold-500)]",
              canToggle
                ? "text-[2rem] tracking-[-0.065em]"
                : "text-[2rem] tracking-[-0.065em] lg:text-[2.2rem]"
            )}
          >
            {solution.number}
          </div>
          <h3
            data-detailed-card-title
            className={cn(
              "min-w-0 font-semibold uppercase text-[color:var(--color-navy-900)]",
              canToggle
                ? "mobile-section-subheading"
                : "mobile-section-subheading lg:text-[1rem]"
            )}
          >
            {solution.title}
          </h3>
        </div>

        <div
          data-detailed-card-line
          className={cn(
            "relative h-px w-full bg-[color:var(--color-gold-500)]/48",
            canToggle ? "mt-2.5" : "mt-3"
          )}
        />

        <p
          data-detailed-card-statement
          className={cn(
            "relative mt-2.5 font-semibold uppercase leading-[1.45] tracking-[0.09em] text-[color:var(--color-gold-500)]",
            "mobile-section-subheading"
          )}
        >
          {solution.statement}
        </p>

        <div className="relative mt-3 space-y-1.5">
          {visibleDescription.map((paragraph) => (
            <p
              data-detailed-card-copy
              key={paragraph}
              className={cn(
                "text-[color:var(--color-slate-700)]",
                canToggle
                  ? "mobile-section-copy"
                  : "mobile-section-copy lg:text-[0.92rem] lg:leading-[1.65]"
              )}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className={cn("grid gap-x-4 sm:grid-cols-2", canToggle ? "mt-3" : "mt-4")}>
          {visibleHighlights.map((highlight) => (
            <div
              data-detailed-card-highlight
              key={highlight}
              className={cn(
                "relative border-t border-[color:var(--color-border)]",
                canToggle ? "py-1.5" : "py-1.5"
              )}
            >
              <p className={cn(
                "leading-[1.45] text-[color:var(--color-navy-900)]",
                canToggle ? "text-[0.82rem]" : "text-[0.84rem]"
              )}>
                {highlight}
              </p>
            </div>
          ))}
        </div>

        {canToggle ? (
          <button
            type="button"
            data-detailed-card-button
            className="mt-3 inline-flex w-fit items-center gap-2 border border-[color:var(--color-gold-500)]/42 bg-white/38 px-3 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-gold-600)] transition hover:border-[color:var(--color-gold-500)] hover:bg-[color:var(--color-gold-500)] hover:text-[color:var(--color-navy-950)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold-500)]"
            onClick={onToggle}
          >
            {expanded ? "Show Less" : "Read More"}
            <ArrowRight
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-300",
                expanded && "-rotate-90"
              )}
            />
          </button>
        ) : null}
      </div>
    </article>
  );
}

function ProjectShowcaseCard({
  project,
}: {
  project: (typeof projectCards)[number];
}) {
  const ProjectIcon = project.icon;

  return (
    <article className="mobile-card-surface mobile-card-surface-dark group relative min-h-[15.5rem] overflow-hidden border border-white/10 bg-[color:var(--color-navy-950)] sm:min-h-[13.5rem] lg:min-h-[clamp(22rem,46vh,28rem)] lg:rounded-[0.45rem] lg:border-white/12 lg:shadow-[0_18px_46px_rgba(3,20,39,0.14)]">
      <Image
        src={assetPath(project.image)}
        alt={`${project.title} project`}
        fill
        sizes="(min-width: 1024px) 28rem, 100vw"
        className="hidden object-cover transition duration-700 ease-out group-hover:scale-[1.035] lg:block"
        style={{ objectPosition: project.imagePosition }}
      />
      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(3,20,39,0.95)_0%,rgba(3,20,39,0.86)_28%,rgba(3,20,39,0.47)_54%,rgba(3,20,39,0.1)_100%)] lg:block lg:bg-[linear-gradient(180deg,rgba(3,20,39,0.34)_0%,rgba(3,20,39,0.78)_48%,rgba(3,20,39,0.96)_100%)]" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(180deg,rgba(3,20,39,0.08)_0%,rgba(3,20,39,0.2)_100%)] lg:block lg:bg-[linear-gradient(90deg,rgba(3,20,39,0.48)_0%,rgba(3,20,39,0.12)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.045)_0%,rgba(255,255,255,0)_42%),linear-gradient(180deg,rgba(197,160,98,0.08)_0%,rgba(197,160,98,0)_58%)] lg:hidden" />
      <div
        className="pointer-events-none absolute bottom-5 right-5 z-20 text-[color:var(--color-gold-500)] lg:hidden"
      >
        <ProjectIcon className="h-8 w-8" strokeWidth={1.65} />
      </div>

      <div className="relative z-10 flex min-h-[15.5rem] flex-col justify-between px-5 py-5 sm:min-h-[13.5rem] sm:px-7 sm:py-6 lg:min-h-[clamp(22rem,46vh,28rem)] lg:px-6 lg:py-6 xl:px-7">
        <div className="flex items-center gap-4">
          <span className="font-serif text-[2rem] leading-none tracking-[-0.05em] text-[color:var(--color-gold-500)] sm:text-[2.35rem] lg:text-[2rem]">
            {project.number}
          </span>
        </div>

        <div className="max-w-[28rem] lg:mt-auto lg:pt-16">
          <h3 className="text-[1.05rem] font-semibold uppercase leading-[1.08] tracking-[-0.02em] text-white sm:text-[1.18rem] lg:text-[1.02rem]">
            {project.title}
          </h3>
          <p className="mobile-section-copy mt-2 font-medium text-white/78 lg:text-[0.82rem] lg:leading-5">
            {project.route}
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:mt-6 lg:flex-col lg:items-start">
          <div className="flex items-center gap-2.5 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-gold-500)]">
            <VerifiedMark className="h-4.5 w-4.5" />
            <span>{project.category}</span>
          </div>

          <span className="inline-flex min-h-10 w-fit items-center justify-center gap-2 border border-[color:var(--color-gold-500)] bg-[color:var(--color-gold-500)] px-4 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-navy-950)] shadow-[0_10px_26px_rgba(197,160,98,0.22)] lg:min-h-9 lg:px-4">
            Read More
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
}

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollState = () => {
      const scrollTop = window.scrollY;
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setIsVisible(scrollTop > window.innerHeight * 0.7);
      setScrollProgress(
        scrollableHeight > 0 ? clamp(scrollTop / scrollableHeight, 0, 1) : 0
      );
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  useEffect(() => {
    const updateMenuState = () => {
      setIsMenuOpen(document.body.style.overflow === "hidden");
    };

    updateMenuState();

    const observer = new MutationObserver(updateMenuState);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleBackToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      title="Back to top"
      tabIndex={isVisible && !isMenuOpen ? 0 : -1}
      className={cn(
        "group fixed bottom-5 right-5 z-[80] flex h-12 w-12 items-center justify-center rounded-full p-px shadow-[0_18px_46px_rgba(3,20,39,0.22)] transition duration-300 ease-out sm:bottom-7 sm:right-7 sm:h-14 sm:w-14",
        isVisible && !isMenuOpen
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      )}
      style={
        {
          background: `conic-gradient(var(--color-gold-500) ${
            scrollProgress * 360
          }deg, rgba(197,160,98,0.18) 0deg)`,
        } as CSSProperties
      }
      onClick={handleBackToTop}
    >
      <span className="flex h-full w-full items-center justify-center rounded-full border border-white/10 bg-[rgba(3,20,39,0.88)] text-[color:var(--color-gold-500)] backdrop-blur-xl transition duration-300 group-hover:bg-[color:var(--color-gold-500)] group-hover:text-[color:var(--color-navy-950)] group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-4 group-focus-visible:outline-[color:var(--color-gold-500)]">
        <ArrowUp
          className="h-4.5 w-4.5 transition duration-300 group-hover:-translate-y-0.5 sm:h-5 sm:w-5"
          strokeWidth={1.8}
        />
      </span>
    </button>
  );
}

export function HomeSections() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const objectivesAreaRef = useRef<HTMLDivElement | null>(null);
  const objectivesProgressRef = useRef<HTMLDivElement | null>(null);
  const objectivesIntroRef = useRef<HTMLDivElement | null>(null);
  const objectivesSectionRef = useRef<HTMLElement | null>(null);
  const detailedSectionRef = useRef<HTMLElement | null>(null);
  const objectivesDesktopRef = useRef<HTMLDivElement | null>(null);
  const detailedDesktopRef = useRef<HTMLDivElement | null>(null);
  const detailedMobileRef = useRef<HTMLDivElement | null>(null);
  const solutionsCarouselRef = useRef<HTMLDivElement | null>(null);
  const solutionDragStartXRef = useRef(0);
  const solutionDragOffsetRef = useRef(0);
  const solutionIsDraggingRef = useRef(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [solutionCarouselIndex, setSolutionCarouselIndex] = useState(0);
  const [isSolutionDragging, setIsSolutionDragging] = useState(false);
  const [objectivesDesktopIndex, setObjectivesDesktopIndex] = useState(0);
  const [detailedDesktopIndex, setDetailedDesktopIndex] = useState(0);
  const [expandedDetailedMobileCards, setExpandedDetailedMobileCards] = useState<
    Record<string, boolean>
  >({});

  const activeSolutionIndex = solutionCarouselIndex;

  const resetSolutionDragOffset = () => {
    solutionsCarouselRef.current?.style.setProperty("--solution-drag-offset", "0px");
    solutionDragOffsetRef.current = 0;
  };

  const moveSolutionCarousel = (direction: -1 | 1) => {
    resetSolutionDragOffset();
    setSolutionCarouselIndex((current) => {
      if (direction === 1) {
        return (current + 1) % solutionCards.length;
      }

      return Math.max(0, current - 1);
    });
  };

  const jumpToSolution = (targetIndex: number) => {
    resetSolutionDragOffset();
    setSolutionCarouselIndex(targetIndex);
  };

  const jumpToDetailedSolution = (targetIndex: number) => {
    if (isMobileViewport) {
      return;
    }

    const trigger = ScrollTrigger.getById(detailedSolutionsScrollTriggerId);
    const section = detailedSectionRef.current;

    if (!trigger || !section) {
      return;
    }

    const segmentDistance =
      (trigger.end - trigger.start) / detailedSolutions.length;
    const targetY = trigger.start + segmentDistance * targetIndex + 2;

    window.scrollTo({
      top: targetY,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const toggleDetailedMobileCard = (number: string) => {
    setExpandedDetailedMobileCards((current) => ({
      ...current,
      [number]: !current[number],
    }));
  };

  const finishSolutionDrag = () => {
    if (!solutionIsDraggingRef.current) {
      return;
    }

    const dragOffset = solutionDragOffsetRef.current;
    solutionIsDraggingRef.current = false;
    setIsSolutionDragging(false);
    resetSolutionDragOffset();

    if (Math.abs(dragOffset) < 46) {
      return;
    }

    if (dragOffset < 0) {
      moveSolutionCarousel(1);
      return;
    }

    if (solutionCarouselIndex > 0) {
      moveSolutionCarousel(-1);
    }
  };

  const handleSolutionPointerDown = (
    event: ReactPointerEvent<HTMLDivElement>
  ) => {
    if (event.pointerType === "mouse") {
      return;
    }

    solutionIsDraggingRef.current = true;
    solutionDragStartXRef.current = event.clientX;
    solutionDragOffsetRef.current = 0;
    setIsSolutionDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleSolutionPointerMove = (
    event: ReactPointerEvent<HTMLDivElement>
  ) => {
    if (!solutionIsDraggingRef.current) {
      return;
    }

    const dragOffset = event.clientX - solutionDragStartXRef.current;
    solutionDragOffsetRef.current = dragOffset;
    solutionsCarouselRef.current?.style.setProperty(
      "--solution-drag-offset",
      `${dragOffset}px`
    );
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 1023px)");
    const updateReducedMotion = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };
    const updateViewport = () => {
      setIsMobileViewport(mobileQuery.matches);
    };

    updateReducedMotion();
    updateViewport();
    mediaQuery.addEventListener("change", updateReducedMotion);
    mobileQuery.addEventListener("change", updateViewport);

    return () => {
      mediaQuery.removeEventListener("change", updateReducedMotion);
      mobileQuery.removeEventListener("change", updateViewport);
    };
  }, []);

  useEffect(() => {
    if (!isMobileViewport || isSolutionDragging) {
      return;
    }

    const intervalId = window.setInterval(() => {
      if (document.visibilityState === "hidden") {
        return;
      }

      resetSolutionDragOffset();
      setSolutionCarouselIndex((current) => (current + 1) % solutionCards.length);
    }, 3200);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isMobileViewport, isSolutionDragging]);

  const setupDesktopAnimations = useCallback(({ gsap, ScrollTrigger, reducedMotion }: {
    gsap: typeof import("gsap").default;
    ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;
    reducedMotion: boolean;
  }) => {
    const createIntroTimeline = ({
      trigger,
      label,
      lines,
      copy,
      extras,
      start = "top 78%",
      lineDuration = 0.74,
      lineStagger = 0.1,
    }: {
      trigger: string;
      label?: string;
      lines?: string;
      copy?: string;
      extras?: string;
      start?: string;
      lineDuration?: number;
      lineStagger?: number;
    }) => {
      const labelElements = label
        ? gsap.utils.toArray<HTMLElement>(label)
        : [];
      const lineElements = lines
        ? gsap.utils.toArray<HTMLElement>(lines)
        : [];
      const copyElements = copy
        ? gsap.utils.toArray<HTMLElement>(copy)
        : [];
      const extraElements = extras
        ? gsap.utils.toArray<HTMLElement>(extras)
        : [];

      if (labelElements.length > 0) {
        gsap.set(labelElements, {
          opacity: 0,
          x: reducedMotion ? -4 : -10,
          letterSpacing: reducedMotion ? "0.3em" : "0.34em",
        });
      }

      if (lineElements.length > 0) {
        gsap.set(lineElements, {
          yPercent: reducedMotion ? 42 : 110,
          opacity: 0,
        });
      }

      if (copyElements.length > 0) {
        gsap.set(copyElements, {
          opacity: 0,
          y: reducedMotion ? 10 : 22,
        });
      }

      if (extraElements.length > 0) {
        gsap.set(extraElements, {
          opacity: 0,
          y: reducedMotion ? 8 : 18,
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger,
          start,
          once: true,
        },
      });

      if (label) {
        tl.to(
          labelElements,
          {
            opacity: 1,
            x: 0,
            letterSpacing: "0.26em",
            duration: reducedMotion ? 0.34 : 0.52,
            ease: "power2.out",
          }
        );
      }

      if (lines) {
        tl.to(
          lineElements,
          {
            yPercent: 0,
            opacity: 1,
            duration: reducedMotion ? Math.min(lineDuration, 0.52) : lineDuration,
            stagger: reducedMotion ? Math.min(lineStagger, 0.06) : lineStagger,
            ease: "power3.out",
          },
          label ? "-=0.1" : 0
        );
      }

      if (copy) {
        tl.to(
          copyElements,
          {
            opacity: 1,
            y: 0,
            duration: reducedMotion ? 0.46 : 0.72,
            stagger: reducedMotion ? 0.08 : 0.12,
            ease: "power3.out",
          },
          "-=0.18"
        );
      }

      if (extras) {
        tl.to(
          extraElements,
          {
            opacity: 1,
            y: 0,
            duration: reducedMotion ? 0.42 : 0.64,
            stagger: reducedMotion ? 0.08 : 0.1,
            ease: "power2.out",
          },
          "-=0.14"
        );
      }
    };

    gsap.utils.toArray<HTMLElement>(".js-reveal-up").forEach((element) => {
      gsap.set(element, { opacity: 0, y: reducedMotion ? 10 : 26 });

      gsap.to(
        element,
        {
          opacity: 1,
          y: 0,
          duration: reducedMotion ? 0.46 : 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once: true,
          },
        }
      );
    });

    gsap.utils.toArray<HTMLElement>(".js-reveal-scale").forEach((element) => {
      gsap.set(element, {
        opacity: 0,
        scale: reducedMotion ? 0.985 : 0.96,
        y: reducedMotion ? 10 : 24,
      });

      gsap.to(
        element,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: reducedMotion ? 0.52 : 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
            once: true,
          },
        }
      );
    });

    gsap.utils.toArray<HTMLElement>(".js-reveal-line").forEach((element) => {
      gsap.set(element, { yPercent: reducedMotion ? 42 : 112 });

      gsap.to(
        element,
        {
          yPercent: 0,
          duration: reducedMotion ? 0.52 : 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            once: true,
          },
        }
      );
    });

    gsap.utils.toArray<HTMLElement>(".js-image-mask").forEach((element) => {
      gsap.set(element, {
        clipPath: `inset(0 0 ${reducedMotion ? 48 : 100}% 0)`,
        y: reducedMotion ? 10 : 24,
      });

      gsap.to(
        element,
        {
          clipPath: "inset(0 0 0% 0)",
          y: 0,
          duration: reducedMotion ? 0.58 : 1.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
            once: true,
          },
        }
      );
    });

    createIntroTimeline({
      trigger: ".js-about-section",
      label: ".js-about-label",
      lines: ".js-about-line",
      copy: ".js-about-side-label, .js-about-copy, .js-about-support",
      start: "top 76%",
      lineDuration: 0.76,
    });

    if (!reducedMotion) {
      gsap.fromTo(
        ".js-vision-image",
        { scale: 1.04, y: 18 },
        {
          scale: 1,
          y: -10,
          ease: "none",
          scrollTrigger: {
            trigger: ".js-vision-section",
            start: "top 85%",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ".js-global-image",
        { scale: 1.04, y: 18 },
        {
          scale: 1,
          y: -12,
          ease: "none",
          scrollTrigger: {
            trigger: ".js-global-section",
            start: "top 85%",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }

  }, []);

  useDesktopGsap(rootRef, setupDesktopAnimations);

  useEffect(() => {
    const intro = objectivesIntroRef.current;
    const area = objectivesAreaRef.current;
    const progress = objectivesProgressRef.current;

    if (!intro || !area) {
      return;
    }

    if (isMobileViewport) {
      if (!progress) {
        return;
      }

      const rows = Array.from(area.querySelectorAll(".js-objective-item")) as HTMLDivElement[];

      const ctx = gsap.context(() => {
        gsap.set(progress, { scaleY: 0, transformOrigin: "top center" });
        gsap.to(progress, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: area,
            start: "top 78%",
            end: "bottom 74%",
            scrub: 1,
          },
        });

        rows.forEach((row) => {
          const number = row.querySelector(".js-objective-mobile-number");
          const title = row.querySelector(".js-objective-mobile-title");
          const copy = row.querySelector(".js-objective-mobile-copy");

          gsap.set(row, { opacity: 0.46, y: 10, scale: 0.985 });
          gsap.set(number, { opacity: 0.72, scale: 0.9 });
          gsap.set(title, { opacity: 0.72, x: 6 });
          gsap.set(copy, { opacity: 0.54, x: 6 });

          gsap.to(row, {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top 72%",
              end: "top 42%",
              scrub: 1,
            },
          });

          gsap.to([number, title, copy], {
            opacity: 1,
            x: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top 70%",
              end: "top 40%",
              scrub: 1,
            },
          });
        });
      }, area);

      return () => {
        ctx.revert();
      };
    }

    const section = objectivesSectionRef.current;
    const desktopStage = objectivesDesktopRef.current;

    if (!section || !desktopStage) {
      return;
    }

    const ctx = gsap.context(() => {
      const objectiveCount = strategicObjectives.length;

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        // Match the per-item scroll distance used by Detailed Solutions.
        end: () =>
          `+=${Math.max(window.innerHeight * 0.6, 450) * objectiveCount}`,
        pin: section,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        fastScrollEnd: false,
        onEnter: () => setObjectivesDesktopIndex(0),
        onEnterBack: () => setObjectivesDesktopIndex(objectiveCount - 1),
        onUpdate: (self) => {
          // Divide pinned scroll distance into five equal slides.
          const nextIndex = Math.min(
            objectiveCount - 1,
            Math.floor(self.progress * objectiveCount)
          );

          setObjectivesDesktopIndex((current) =>
            current === nextIndex ? current : nextIndex
          );
        },
      });

      // Recalculate after layout/fonts settle so pin measurements are correct.
      requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => trigger.kill();
    }, section);

    return () => {
      ctx.revert();
    };
  }, [isMobileViewport]);

  useEffect(() => {
    const section = detailedSectionRef.current;
    const stage = detailedDesktopRef.current;

    if (!section || !stage || isMobileViewport) {
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        id: detailedSolutionsScrollTriggerId,
        trigger: section,
        start: "top top",
        end: () =>
          `+=${getDesktopCardScrollDistance() * detailedSolutions.length}`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        fastScrollEnd: false,
        snap: {
          snapTo: 1 / detailedSolutions.length,
          duration: { min: 0.18, max: 0.32 },
          delay: 0.04,
          ease: "power2.out",
        },
        onEnter: () => setDetailedDesktopIndex(0),
        onEnterBack: () =>
          setDetailedDesktopIndex(detailedSolutions.length - 1),
        onUpdate: (self) => {
          const raw = self.progress * detailedSolutions.length;
          const nextIndex = Math.min(
            detailedSolutions.length - 1,
            Math.floor(raw)
          );
          const segmentProgress = raw - Math.floor(raw);
          const floatProgress = Math.sin(segmentProgress * Math.PI);

          setDetailedDesktopIndex((current) =>
            current === nextIndex ? current : nextIndex
          );

          if (!prefersReducedMotion) {
            gsap.set(stage, {
              rotateX: floatProgress * 1.8,
              rotateY: (segmentProgress - 0.5) * -7,
              y: 8 + floatProgress * 12,
              transformPerspective: 1200,
              transformOrigin: "center center",
            });
          }
        },
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, [isMobileViewport, prefersReducedMotion]);

  useEffect(() => {
    const stage = detailedMobileRef.current;

    if (!stage || !isMobileViewport) {
      return;
    }

    const cards = Array.from(
      stage.querySelectorAll<HTMLElement>(".js-detailed-mobile-card")
    );

    if (!cards.length) {
      return;
    }

    cards.forEach((card, index) => {
      card.style.zIndex = `${cards.length + index}`;

      if (prefersReducedMotion) {
        card.classList.add("is-visible");
      } else {
        card.classList.remove("is-visible");
      }
    });

    if (prefersReducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.32,
        rootMargin: "0px 0px -18% 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
      cards.forEach((card) => {
        card.classList.remove("is-visible");
      });
    };
  }, [isMobileViewport, prefersReducedMotion]);

  useEffect(() => {
    if (!isMobileViewport) {
      return;
    }

    const whyItems = gsap.utils.toArray<HTMLElement>(".js-mobile-why-item");

    const ctx = gsap.context(() => {
      whyItems.forEach((item) => {
        const icon = item.querySelector(".js-mobile-why-icon");
        const title = item.querySelector(".js-mobile-why-title");
        const copy = item.querySelector(".js-mobile-why-copy");

        gsap.set(item, { opacity: 0.48, y: 14, scale: 0.985 });
        gsap.set(icon, { scale: 0.86, rotate: -6 });
        gsap.set([title, copy], { x: 8 });

        gsap.to(item, {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top 82%",
            end: "top 48%",
            scrub: 0.8,
          },
        });

        gsap.to(icon, {
          scale: 1,
          rotate: 0,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top 82%",
            end: "top 48%",
            scrub: 0.8,
          },
        });

        gsap.to([title, copy], {
          x: 0,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top 82%",
            end: "top 48%",
            scrub: 0.8,
          },
        });
      });

      if (!prefersReducedMotion) {
        gsap.fromTo(
          ".js-contact-bg",
          { scale: 1.04, y: 18 },
          {
            scale: 1,
            y: -12,
            ease: "none",
            scrollTrigger: {
              trigger: "#contact",
              start: "top 88%",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }
    });

    return () => {
      ctx.revert();
    };
  }, [isMobileViewport, prefersReducedMotion]);


  useLayoutEffect(() => {
    if (isMobileViewport) {
      return;
    }

    const card = detailedDesktopRef.current?.querySelector<HTMLElement>(
      "[data-detailed-active-card]"
    );

    if (!card) {
      return;
    }

    const number = card.querySelector<HTMLElement>("[data-detailed-card-number]");
    const title = card.querySelector<HTMLElement>("[data-detailed-card-title]");
    const line = card.querySelector<HTMLElement>("[data-detailed-card-line]");
    const statement = card.querySelector<HTMLElement>(
      "[data-detailed-card-statement]"
    );
    const copy = card.querySelectorAll<HTMLElement>("[data-detailed-card-copy]");
    const highlights = card.querySelectorAll<HTMLElement>(
      "[data-detailed-card-highlight]"
    );

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.32,
            ease: "power2.out",
            overwrite: true,
          }
        );
        return;
      }

      gsap.set(card, {
        transformStyle: "preserve-3d",
        transformPerspective: 1200,
        willChange: "transform, opacity",
      });
      gsap.set([number, title, statement, ...copy, ...highlights], {
        opacity: 0,
        y: 18,
      });
      gsap.set(line, { scaleX: 0, transformOrigin: "left center" });

      const tl = gsap.timeline({ defaults: { overwrite: true } });

      tl.fromTo(
        card,
        {
          autoAlpha: 0,
          rotateX: 7,
          rotateY: -16,
          scale: 0.92,
          x: 92,
          y: 34,
        },
        {
          autoAlpha: 1,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          x: 0,
          y: 0,
          duration: 0.72,
          ease: "expo.out",
        }
      )
        .fromTo(
          number,
          { opacity: 0, scale: 0.72, rotateZ: -8, y: 18 },
          {
            opacity: 1,
            scale: 1,
            rotateZ: 0,
            y: 0,
            duration: 0.58,
            ease: "back.out(1.9)",
          },
          0.08
        )
        .to(
          title,
          {
            opacity: 1,
            y: 0,
            duration: 0.52,
            ease: "power3.out",
          },
          0.14
        )
        .to(
          line,
          {
            scaleX: 1,
            duration: 0.64,
            ease: "power4.out",
          },
          0.2
        )
        .to(
          statement,
          {
            opacity: 1,
            y: 0,
            duration: 0.48,
            ease: "power3.out",
          },
          0.28
        )
        .to(
          copy,
          {
            opacity: 1,
            y: 0,
            duration: 0.48,
            stagger: 0.055,
            ease: "power3.out",
          },
          0.36
        )
        .to(
          highlights,
          {
            opacity: 1,
            y: 0,
            duration: 0.44,
            stagger: 0.045,
            ease: "power3.out",
          },
          0.48
        );
    }, card);

    return () => {
      ctx.revert();
    };
  }, [detailedDesktopIndex, isMobileViewport, prefersReducedMotion]);

  return (
    <div ref={rootRef}>
      <section
        id="about"
        className="js-about-section mobile-section-pad relative overflow-hidden bg-[linear-gradient(180deg,#f6f2ed_0%,#f8f5f0_100%)] lg:flex lg:min-h-screen lg:items-center lg:py-[clamp(2rem,5vh,3.2rem)]"
      >
        <Container className="w-full max-w-[var(--content-max)] px-[var(--mobile-gutter)] sm:px-6 lg:block lg:px-8">
          <div className="grid w-full gap-[clamp(1.6rem,5vw,2.5rem)] lg:grid-cols-2 lg:items-stretch lg:gap-12 xl:gap-16">
            <div className="relative flex h-full max-w-[33rem] flex-col pt-1 lg:pt-6">
              <div className="pointer-events-none absolute left-[-1.25rem] top-[4.2rem] hidden h-[16rem] w-px bg-[linear-gradient(180deg,rgba(197,160,98,0.18),rgba(197,160,98,0))] lg:block" />
              <p className="js-about-label section-label mb-[clamp(1rem,4vw,1.75rem)] text-[clamp(0.78rem,3vw,0.9rem)] tracking-[0.24em]">RONG XING</p>
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <div className="lg:hidden">
                    <TextReveal forceMotion distance={36}>
                      <h2 className="mobile-section-heading text-[color:var(--color-navy-900)]">
                        One Company.
                      </h2>
                    </TextReveal>
                    <TextReveal forceMotion delay={0.08} distance={36}>
                      <h2 className="mobile-section-heading mt-1 text-[color:var(--color-navy-900)]">
                        Multiple Solutions.
                      </h2>
                    </TextReveal>
                    <TextReveal forceMotion delay={0.16} distance={36}>
                      <h2 className="mobile-section-heading mt-1 text-[color:var(--color-gold-500)]">
                        Global Reach.
                      </h2>
                    </TextReveal>
                  </div>

                  <div className="hidden overflow-hidden lg:block">
                    <h2 className="js-about-line text-[clamp(3.05rem,6.7vw,4.15rem)] font-semibold uppercase leading-[0.9] tracking-[-0.065em] text-[color:var(--color-navy-900)]">
                      One Company.
                    </h2>
                  </div>
                  <div className="hidden overflow-hidden lg:block">
                    <h2 className="js-about-line text-[clamp(3.05rem,6.7vw,4.15rem)] font-semibold uppercase leading-[0.9] tracking-[-0.065em] text-[color:var(--color-navy-900)]">
                      Multiple Solutions.
                    </h2>
                  </div>
                  <div className="hidden overflow-hidden lg:block">
                    <h2 className="js-about-line text-[clamp(3.05rem,6.7vw,4.15rem)] font-semibold uppercase leading-[0.9] tracking-[-0.065em] text-[color:var(--color-gold-500)]">
                      Global Reach.
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full max-w-[33rem] lg:-ml-12 lg:translate-x-[2.2cm] lg:justify-self-start lg:pt-6 xl:-ml-14">
              <div className="flex h-full w-full flex-col justify-between">
                <div>
                  <p className="js-about-side-label section-label mb-[clamp(1.1rem,4vw,1.4rem)] text-[clamp(0.78rem,3vw,0.9rem)] tracking-[0.24em]">WHAT WE DO</p>
                  <Reveal forceMotion className="lg:hidden" delay={0.12} distance={22}>
                    <p className="prose-copy mobile-section-copy max-w-[20rem] sm:max-w-[24rem]">
                      From sourcing a single product to establishing complete
                      industrial operations,
                      <br />
                      RONG XING connects your requirements with the right
                      resources in China.
                    </p>
                  </Reveal>
                  <p className="js-about-copy prose-copy hidden max-w-[20rem] sm:max-w-[24rem] lg:block lg:max-w-[31rem] lg:text-[clamp(0.98rem,1.2vw,1.08rem)] lg:leading-[1.9]">
                    From sourcing a single product to establishing complete
                    industrial operations,
                    <br />
                    RONG XING connects your requirements with the right
                    resources in China.
                  </p>
                </div>

                <div className="js-about-support mt-[clamp(1.9rem,7vw,2.6rem)] hidden max-w-[19.5rem] border-t border-[color:var(--color-gold-500)]/18 pt-[clamp(1rem,3.5vw,1.2rem)] sm:max-w-[24rem] sm:mt-0 lg:block lg:max-w-[26rem]">
                  <p className="text-[clamp(0.76rem,3vw,0.84rem)] font-medium uppercase leading-[1.95] tracking-[0.28em] text-[color:var(--color-slate-700)]/86">
                    Built around your requirements.
                    <br />
                    <span className="text-[color:var(--color-gold-500)] drop-shadow-[0_0_8px_rgba(197,160,98,0.12)]">
                      Connected through China.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="js-vision-section relative overflow-hidden bg-[linear-gradient(180deg,#07182e_0%,#031427_100%)] py-0 text-white lg:py-[calc(var(--section-space)*1.02)]">
        <Container className="max-w-[var(--content-max)] px-0 sm:px-0 lg:px-8">
          <div className="relative grid gap-0 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)] lg:items-stretch lg:gap-0">
            <div className="js-image-mask relative left-1/2 aspect-[1.32/1] w-screen -ml-[50vw] overflow-hidden sm:aspect-[1.55/1] lg:left-auto lg:ml-0 lg:min-h-[37rem] lg:w-auto lg:aspect-auto">
              <div className="js-vision-image absolute inset-0">
                <Image
                  src={assetPath("/images/about-vision-a698b154.png")}
                  alt="Modern Guangzhou skyline and commercial district"
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover object-center lg:object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,20,39,0.06)_0%,rgba(3,20,39,0.14)_58%,rgba(3,20,39,0.24)_100%)] lg:bg-[linear-gradient(90deg,rgba(3,20,39,0.28)_0%,rgba(3,20,39,0.08)_40%,rgba(3,20,39,0.32)_100%)]" />
              </div>
            </div>

            <div className="relative bg-[color:var(--color-navy-950)] py-[clamp(1.7rem,5.6vw,2.3rem)] lg:min-h-[37rem] lg:bg-transparent lg:px-0 lg:py-0 lg:pl-10 xl:pl-14">
              <div className="relative flex h-full flex-col justify-center lg:min-h-[37rem] lg:p-1">
                <p className="js-vision-label section-label mb-[clamp(0.8rem,2.8vw,1rem)] text-[clamp(0.74rem,2.7vw,0.82rem)] tracking-[0.24em]">OUR VISION</p>
                <TextReveal forceMotion distance={42}>
                  <h2 className="js-vision-line mobile-section-heading text-white lg:text-[clamp(2.75rem,5.2vw,3.65rem)]">
                    Connecting China
                  </h2>
                </TextReveal>
                <TextReveal
                  forceMotion
                  className="mt-[clamp(0.28rem,1.4vw,0.45rem)] lg:mt-[clamp(0.45rem,2vw,0.6rem)]"
                  delay={0.1}
                  distance={42}
                >
                  <h2 className="js-vision-line mobile-section-heading text-[color:var(--color-gold-500)] lg:text-[clamp(2.85rem,5.35vw,3.65rem)]">
                    With The World.
                  </h2>
                </TextReveal>
                <Reveal forceMotion delay={0.2} distance={22}>
                  <p className="js-vision-copy mobile-section-copy mt-[clamp(1.15rem,4vw,1.45rem)] max-w-[20rem] text-white/82 sm:max-w-[23rem] lg:mt-[clamp(1.8rem,6vw,2.3rem)] lg:max-w-[31rem] lg:text-[0.98rem] lg:leading-8 lg:text-white/72">
                    To provide smart and fast solutions that connect China with
                    the world across industries, creating seamless opportunities
                    for international trade, collaboration, and long-term growth.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        ref={objectivesSectionRef}
        className="js-objectives-section mobile-section-pad relative bg-[color:var(--color-surface)] lg:h-screen lg:min-h-0 lg:overflow-hidden lg:py-0"
      >
        <Container className="max-w-[var(--content-max)] lg:flex lg:h-full lg:items-center">
          <div className="grid w-full gap-12 lg:translate-y-6 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:items-center lg:gap-14">
            <div ref={objectivesIntroRef} className="js-objectives-intro lg:self-center">
              <p className="section-label mb-4">STRATEGIC OBJECTIVES</p>
              <TextReveal forceMotion distance={42}>
                <h2 className="mobile-section-heading text-[color:var(--color-navy-900)] md:hidden">
                  How We Think About
                </h2>
                <h2 className="mobile-section-heading mt-1 text-[color:var(--color-navy-900)] md:hidden">
                  Long-Term
                  <span className="text-[color:var(--color-gold-500)]"> Execution.</span>
                </h2>
                <h2 className="hidden section-heading text-[color:var(--color-navy-900)] md:block">
                  How We Think About
                </h2>
                <h2 className="hidden section-heading text-[color:var(--color-navy-900)] md:block">
                  Long-Term Execution.
                </h2>
              </TextReveal>
              <Reveal forceMotion delay={0.14} distance={22}>
                <p className="mobile-section-copy mt-4 max-w-[22rem] text-[color:var(--color-slate-700)] md:mt-5 md:max-w-[38rem] md:text-[1rem] md:leading-8">
                  A solutions-led business model built around clarity, flexibility, and trusted partnership.
                </p>
              </Reveal>
            </div>

            <div ref={objectivesAreaRef} className="relative grid gap-10 md:gap-14 lg:gap-18">
              {!isMobileViewport ? (
                <div
                  ref={objectivesDesktopRef}
                  className="relative h-[34rem]"
                >
                  <div className="flex h-full flex-col justify-center">
                    {strategicObjectives.map((objective, index) => {
                      const isActive = index === objectivesDesktopIndex;
                      const isPast = index < objectivesDesktopIndex;

                      return (
                      <article
                        key={objective.number}
                        className={cn(
                          "relative grid origin-center grid-cols-[3.8rem_1px_minmax(0,1fr)] items-center gap-5 border-b border-[color:var(--color-border)]/75 py-3.5 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                          isActive
                            ? "translate-y-0 scale-100 opacity-100"
                            : isPast
                              ? "-translate-y-2 scale-[0.985] opacity-45"
                              : "translate-y-1.5 scale-[0.985] opacity-60"
                        )}
                      >
                        <p
                          className={cn(
                            "origin-left font-serif text-[2.65rem] leading-none tracking-[-0.07em] transition-[color,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                            isActive
                              ? "scale-100 text-[color:var(--color-gold-500)]"
                              : "scale-90 text-[color:var(--color-gold-500)]"
                          )}
                        >
                          {objective.number}
                        </p>

                        <div className="h-[78%] w-px bg-[color:var(--color-border)]" />

                        <div className="min-w-0">
                          <h3
                            className={cn(
                              "max-w-[34rem] text-[clamp(0.94rem,1.25vw,1.12rem)] font-semibold uppercase leading-[1.12] tracking-[-0.025em] transition-[color,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                              isActive
                                ? "translate-x-0 text-[color:var(--color-navy-900)]"
                                : "translate-x-1 text-[color:var(--color-navy-900)]/65"
                            )}
                          >
                            {objective.title}
                          </h3>
                          <p
                            className={cn(
                              "mt-1.5 max-w-[36rem] text-[0.8rem] leading-5 text-[color:var(--color-slate-700)] transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                              isActive
                                ? "translate-y-0 opacity-100"
                                : "translate-y-0.5 opacity-70"
                            )}
                          >
                            {objective.description}
                          </p>
                        </div>

                        <div
                          className={cn(
                            "pointer-events-none absolute bottom-[-1px] left-[5.3rem] right-0 h-[2px] origin-left bg-[linear-gradient(90deg,transparent_0%,rgba(197,160,98,0.9)_24%,rgba(197,160,98,0.2)_72%,transparent_100%)] shadow-[0_0_14px_rgba(197,160,98,0.45)] transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                            isActive
                              ? "scale-x-100 opacity-100"
                              : "scale-x-0 opacity-0"
                          )}
                        />
                      </article>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <>
                  <div className="absolute bottom-2 left-[3.6rem] top-2 w-px bg-[linear-gradient(180deg,transparent,rgba(197,160,98,0.28)_12%,rgba(197,160,98,0.2)_88%,transparent)] md:hidden" />
                  <div
                    ref={objectivesProgressRef}
                    className="absolute bottom-2 left-[3.6rem] top-2 w-px origin-top bg-[color:var(--color-gold-500)] shadow-[0_0_12px_rgba(197,160,98,0.32)] md:hidden"
                    style={{ transform: "scaleY(0)" }}
                  />
                  <div className="absolute bottom-0 right-[0.35rem] top-2 hidden w-px bg-[color:var(--color-navy-900)]/10 md:block" />
                  <div
                    className="absolute bottom-0 right-[0.35rem] top-2 hidden w-px origin-top bg-[color:var(--color-gold-500)] md:block"
                    style={{ transform: "scaleY(0)" }}
                  />

                  {strategicObjectives.map((objective, index) => (
                    <article
                      key={objective.number}
                      className={cn(
                        "js-objective-item relative grid grid-cols-[2.2rem_1px_minmax(0,1fr)] items-start gap-x-4 py-4 lg:hidden",
                        index % 2 === 1 ? "lg:ml-12" : "lg:mr-12"
                      )}
                    >
                      <p className="js-objective-mobile-number font-serif text-[2rem] leading-[0.84] tracking-[-0.08em] text-[color:var(--color-gold-500)]">
                        {objective.number}
                      </p>

                      <span className="block h-full min-h-[6.5rem] w-px bg-transparent" />

                      <div className="min-w-0 pb-1 pr-1">
                        <h3 className="js-objective-mobile-title mobile-section-subheading max-w-[17rem] text-[0.78rem] leading-[1.22] tracking-[0.11em] text-[color:var(--color-navy-900)]">
                          {objective.title}
                        </h3>
                        <p className="js-objective-mobile-copy mobile-section-copy mt-2.5 max-w-[18rem] text-[0.86rem] leading-[1.62] text-[color:var(--color-slate-700)]">
                          {objective.description}
                        </p>
                      </div>
                    </article>
                  ))}
                </>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section
        id="solutions"
        className="scroll-mt-[5.75rem] bg-[color:var(--color-navy-950)] py-[clamp(2.25rem,6.5vw,3rem)] text-white md:py-[clamp(3.4rem,4.6vw,5.4rem)]"
      >
        <Container className="max-w-[var(--content-max)]">
          <div className="max-w-[40rem]">
            <p className="js-solutions-label section-label mb-3 md:mb-4">OUR SOLUTIONS</p>
            <TextReveal forceMotion distance={42}>
              <h2 className="mobile-section-heading text-white md:text-[clamp(2rem,3.5vw,3rem)] lg:text-[clamp(1.85rem,3.05vw,2.55rem)]">
                <span className="block">One Partner.</span>
                <span className="block">Four Core Capabilities.</span>
              </h2>
            </TextReveal>
            <Reveal forceMotion delay={0.14} distance={22}>
              <p className="mobile-section-copy mt-3 max-w-[22rem] text-white/74 md:mt-4 md:max-w-[34rem] md:text-[0.96rem] md:leading-7">
                Integrated business solutions built around your requirements.
              </p>
            </Reveal>
          </div>

          <div
            className="mt-6 md:hidden"
            ref={solutionsCarouselRef}
            style={
              {
                "--solution-card-gap": "0.85rem",
                "--solution-slide-width": "100%",
                "--solution-drag-offset": "0px",
              } as CSSProperties
            }
          >
            <div className="overflow-hidden">
              <div
                className="flex gap-[var(--solution-card-gap)] will-change-transform"
                style={{
                  transform: `translate3d(calc(-${solutionCarouselIndex * 100}% - ${solutionCarouselIndex * 0.85}rem + var(--solution-drag-offset)), 0, 0)`,
                  transition:
                    isSolutionDragging
                      ? "none"
                      : "transform 720ms cubic-bezier(0.22, 0.61, 0.36, 1)",
                  touchAction: "pan-y",
                }}
                onPointerDown={handleSolutionPointerDown}
                onPointerMove={handleSolutionPointerMove}
                onPointerUp={finishSolutionDrag}
                onPointerCancel={finishSolutionDrag}
              >
                {solutionCards.map((item) => (
                  <div
                    key={item.number}
                    className="shrink-0"
                    style={{ width: "var(--solution-slide-width)" }}
                  >
                    <MobileSolutionCapabilityCard item={item} />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center">
              <div className="flex items-center gap-2">
                {solutionCards.map((item, index) => (
                  <button
                    key={item.number}
                    type="button"
                    aria-label={`Go to solution ${item.number}`}
                    aria-pressed={activeSolutionIndex === index}
                    className={cn(
                      "h-2 w-2 rounded-full border transition",
                      activeSolutionIndex === index
                        ? "border-[color:var(--color-gold-500)] bg-[color:var(--color-gold-500)]"
                        : "border-white/28 bg-transparent"
                    )}
                    onClick={() => jumpToSolution(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 hidden gap-4 md:mt-10 md:grid md:grid-cols-2 xl:grid-cols-4">
            {solutionCards.map((item) => (
              <SolutionCapabilityCard
                key={item.number}
                item={item}
                className="js-reveal-scale"
              />
            ))}
          </div>
        </Container>
      </section>

      <section
        ref={detailedSectionRef}
        className="js-detailed-solutions-section surface-grid mobile-section-pad relative overflow-hidden bg-white lg:h-screen lg:min-h-[36rem] lg:py-0"
      >
        <div className="absolute inset-0">
          <Image
            src={assetPath("/images/services.png")}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[58%_50%] opacity-[0.13]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.9)_42%,rgba(248,244,239,0.74)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(197,160,98,0.1)_0%,transparent_34%,rgba(255,255,255,0.88)_100%)]" />
        </div>

        <Container className="relative z-10 max-w-[var(--content-max)] lg:flex lg:h-full lg:items-center">
          <div className="grid w-full gap-10 lg:mx-auto lg:max-w-[88rem] lg:translate-y-[clamp(1.5rem,4vh,3rem)] lg:grid-cols-[minmax(0,0.43fr)_minmax(0,0.57fr)] lg:items-center lg:gap-14">
            <div className="lg:self-center">
              <SectionTitle
                label="DETAILED SOLUTIONS"
                title="Built To Match The Scale Of The Requirement."
                subtitle="A four-part business platform designed to move from inquiry to execution with precision."
              />

              <div className="mt-8 hidden max-w-[33rem] lg:block">
                <div className="h-px w-full bg-[color:var(--color-border-strong)]" />
                <div className="divide-y divide-[color:var(--color-border)]">
                  {detailedSolutions.map((solution, index) => (
                    <button
                      type="button"
                      key={solution.number}
                      className={cn(
                        "grid w-full grid-cols-[2.75rem_minmax(0,1fr)] items-center gap-4 py-3 text-left transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                        detailedDesktopIndex === index
                          ? "text-[color:var(--color-navy-900)]"
                          : "text-[color:var(--color-slate-600)] hover:text-[color:var(--color-navy-900)]"
                      )}
                      onClick={() => jumpToDetailedSolution(index)}
                    >
                      <span
                        className={cn(
                          "font-serif text-[1.55rem] leading-none tracking-[-0.06em] transition duration-300",
                          detailedDesktopIndex === index
                            ? "text-[color:var(--color-gold-500)]"
                            : "text-[color:var(--color-navy-900)]/28"
                        )}
                      >
                        {solution.number}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-[0.76rem] font-semibold uppercase tracking-[0.16em]">
                          {solution.title}
                        </p>
                        <div className="mt-2 h-px overflow-hidden bg-[color:var(--color-border)]">
                          <div
                            className={cn(
                              "h-full origin-left bg-[color:var(--color-gold-500)] transition duration-500",
                              detailedDesktopIndex === index
                                ? "scale-x-100"
                                : "scale-x-0"
                            )}
                          />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {isMobileViewport ? (
              <div ref={detailedMobileRef} className="grid gap-4 lg:hidden">
                {detailedSolutions.map((solution, index) => (
                  <div
                    key={solution.number}
                    className="js-detailed-mobile-card sticky top-[5.7rem]"
                    style={{ marginTop: index === 0 ? 0 : "0.85rem" }}
                  >
                    <div className="js-detailed-mobile-card-inner will-change-transform">
                      <DetailedSolutionCard
                        solution={solution}
                        expanded={Boolean(expandedDetailedMobileCards[solution.number])}
                        onToggle={() => toggleDetailedMobileCard(solution.number)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div
                ref={detailedDesktopRef}
                className="relative ml-auto w-[92%] xl:w-[86%]"
                style={{ perspective: "1200px" }}
              >
                <DetailedSolutionCard
                  key={detailedSolutions[detailedDesktopIndex].number}
                  solution={detailedSolutions[detailedDesktopIndex]}
                  desktop
                />
              </div>
            )}
          </div>
        </Container>
      </section>

      <section
        id="projects"
        className="mobile-section-pad relative overflow-hidden bg-[#f8f4ef] lg:flex lg:min-h-screen lg:items-center lg:py-[clamp(2rem,4vh,3rem)]"
      >
        <Container className="relative z-10 max-w-[var(--content-max)]">
          <div className="mb-8 flex flex-col gap-6 sm:mb-10 lg:mb-[clamp(1.2rem,2.8vh,2rem)] lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-[37rem]">
              <p className="section-label mb-4 lg:mb-3">OUR PROJECTS</p>
              <TextReveal forceMotion distance={44}>
                <h2 className="mobile-section-heading text-[color:var(--color-navy-900)] lg:text-[clamp(2.65rem,4.4vw,3.35rem)]">
                  Trade In Motion.
                </h2>
              </TextReveal>
              <Reveal forceMotion delay={0.12} distance={18}>
                <p className="mobile-section-copy mt-5 max-w-[33rem] text-[color:var(--color-slate-700)] lg:mt-4 lg:max-w-[31rem] lg:text-[0.92rem] lg:leading-6">
                  A selection of projects, partnerships, shipments, and sourcing
                  operations delivered across industries and markets.
                </p>
              </Reveal>
            </div>

          </div>

          <div className="grid gap-3 sm:gap-3.5 lg:grid-cols-3 lg:gap-4">
            {projectCards.map((project, index) => (
              <Reveal
                forceMotion
                key={project.number}
                delay={index * 0.08}
                distance={26}
              >
                <ProjectShowcaseCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="global-reach"
        className="js-global-section relative overflow-hidden bg-[#f6f2ed] text-[color:var(--color-navy-900)] lg:text-white"
      >
        <div className="relative min-h-[25rem] sm:min-h-[31rem] lg:min-h-[42rem]">
          <div className="js-global-image absolute inset-0">
            <Image
              src={assetPath("/images/global mobile.png")}
              alt="Light global trade route map and container port"
              fill
              sizes="100vw"
              className="object-cover object-center lg:hidden"
            />
            <Image
              src={assetPath("/images/global.png")}
              alt="Global route map representing outbound connections from China"
              fill
              sizes="100vw"
              className="hidden object-cover object-[20%_48%] opacity-95 lg:block"
            />
          </div>

          <div className="absolute inset-0 hidden lg:block lg:bg-[radial-gradient(circle_at_18%_32%,rgba(197,160,98,0.08),transparent_24%),linear-gradient(90deg,rgba(2,13,29,0.12)_0%,rgba(2,13,29,0.06)_18%,rgba(2,13,29,0.2)_42%,rgba(2,13,29,0.58)_66%,rgba(2,13,29,0.88)_100%)]" />

          <div className="relative z-10 mx-auto flex min-h-[25rem] w-full max-w-[var(--content-max)] items-center px-[var(--mobile-gutter)] py-8 sm:min-h-[31rem] sm:px-6 sm:py-10 lg:min-h-[42rem] lg:items-center lg:px-8 lg:py-12">
            <div className="max-w-[19rem] lg:ml-[47%] lg:max-w-[34rem] xl:ml-[50%]">
              <p className="section-label mb-4 text-[0.68rem] tracking-[0.2em] lg:mb-5 lg:text-[0.72rem] lg:tracking-[0.28em]">GLOBAL REACH</p>
              <TextReveal forceMotion delay={0.08} distance={52}>
                <h2 className="js-global-line mobile-section-heading text-white lg:text-[clamp(2.35rem,4.2vw,4.15rem)]">
                  From China.
                </h2>
              </TextReveal>
              <TextReveal forceMotion className="mt-0.5 lg:mt-1" delay={0.16} distance={52}>
                <h2 className="js-global-line mobile-section-heading text-[color:var(--color-gold-500)] lg:text-[clamp(2.35rem,4.2vw,4.15rem)] lg:leading-[0.9]">
                  To The World.
                </h2>
              </TextReveal>

              <TextReveal forceMotion delay={0.24} distance={24}>
                <p className="mobile-section-copy mt-5 max-w-[17.5rem] text-white/88 lg:mt-6 lg:max-w-[30rem] lg:text-[1rem] lg:font-normal lg:leading-8 lg:text-white/74">
                  Connecting international businesses with manufacturers,
                  suppliers, technologies, services, and opportunities across
                  China.
                </p>
              </TextReveal>

            </div>
          </div>
        </div>
      </section>

      <section
        id="why-rong-xing"
        className="bg-[color:var(--color-surface)] py-[clamp(2.4rem,8vw,3.3rem)] lg:flex lg:min-h-screen lg:items-center lg:py-[clamp(2rem,5vh,3.2rem)]"
      >
        <Container className="w-full max-w-[var(--content-max)]">
          <div className="lg:hidden">
            <p className="section-label mb-4 text-[0.68rem] tracking-[0.22em]">
              WHY RONG XING
            </p>
            <TextReveal forceMotion distance={38}>
              <h2 className="mobile-section-heading max-w-[18rem] text-[color:var(--color-navy-900)]">
                Built To Make
                <span className="block">Business In China</span>
                <span className="block">Simpler.</span>
              </h2>
            </TextReveal>

            <div className="mt-7 grid gap-4">
              {mobileWhyItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="js-mobile-why-item grid grid-cols-[2.45rem_minmax(0,1fr)] items-center gap-3.5 will-change-transform"
                  >
                    <div className="relative flex flex-col items-center">
                      <div className="js-mobile-why-icon flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-gold-500)]/70 bg-[#F8F4EF] text-[color:var(--color-navy-900)] shadow-[0_8px_20px_rgba(197,160,98,0.1)] will-change-transform">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <h3 className="js-mobile-why-title text-[0.78rem] font-semibold leading-[1.18] tracking-[-0.01em] text-[color:var(--color-navy-900)] will-change-transform">
                        {item.title}
                      </h3>
                      <p className="js-mobile-why-copy mt-0.5 max-w-[15rem] text-[0.72rem] leading-[1.35] text-[color:var(--color-slate-700)] will-change-transform">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative hidden gap-14 lg:grid lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:items-stretch lg:gap-16">
            <div className="relative flex h-full max-w-[31rem] flex-col">
              <p className="section-label relative z-10 mb-5">WHY RONG XING</p>
              <div className="flex flex-1 flex-col">
                <div>
                  <TextReveal forceMotion className="relative z-10" delay={0.08} distance={44}>
                    <h2 className="js-why-line section-heading max-w-[26rem] text-[color:var(--color-navy-900)]">
                      Built To Make
                    </h2>
                  </TextReveal>
                  <TextReveal forceMotion className="relative z-10" delay={0.14} distance={44}>
                    <h2 className="js-why-line section-heading max-w-[26rem] text-[color:var(--color-navy-900)]">
                      Business In China
                    </h2>
                  </TextReveal>
                  <TextReveal forceMotion className="relative z-10" delay={0.2} distance={44}>
                    <h2 className="js-why-line section-heading max-w-[26rem] text-[color:var(--color-navy-900)]">
                      Simpler.
                    </h2>
                  </TextReveal>
                </div>

                <TextReveal forceMotion className="mt-9" delay={0.26} distance={24}>
                  <p className="relative z-10 max-w-[25rem] text-[1rem] leading-8 text-[color:var(--color-slate-700)]">
                    Disciplined local access, practical judgment, and responsive execution for international requirements in China.
                  </p>
                </TextReveal>
              </div>
            </div>

            <div className="relative h-full">
              <div className="relative z-10 flex h-full flex-col justify-between divide-y divide-[color:var(--color-border)]/85 border-y border-[color:var(--color-border)]/85">
                {whyItems.map((item, index) => (
                  <Reveal forceMotion key={item.title} delay={index * 0.07} distance={24}>
                    <article className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-5 py-5 transition-[padding,color] duration-300 hover:py-6">
                    <div className="pt-0.5 text-[1.55rem] font-semibold leading-none tracking-[-0.04em] text-[color:var(--color-gold-500)] transition-all duration-300 group-hover:scale-[1.06]">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[1rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-navy-900)] transition-colors duration-300 group-hover:text-[color:var(--color-navy-950)] sm:text-[1.05rem]">
                        {item.title}
                      </h3>
                      <div className="grid transition-all duration-300 ease-out group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] [grid-template-rows:0fr]">
                        <p className="overflow-hidden pt-0 text-[0.94rem] leading-7 text-[color:var(--color-slate-700)] opacity-0 transition-all duration-300 group-hover:pt-3 group-hover:opacity-100 group-focus-within:pt-3 group-focus-within:opacity-100">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-0.5 text-[1.1rem] text-[color:var(--color-navy-900)]/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[color:var(--color-gold-500)]">
                      <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
                    </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        className="js-promise-section mobile-section-pad relative overflow-hidden bg-[color:var(--color-navy-950)] text-white lg:flex lg:min-h-[72vh] lg:items-center lg:py-[clamp(4rem,8vh,5.5rem)]"
      >
        <Container className="relative z-[2] w-full max-w-[var(--content-max)]">
          <div className="w-full max-w-[21rem] text-left lg:mx-auto lg:max-w-[42rem] lg:text-center">
            <p className="section-label mb-5 lg:mb-6">OUR PROMISE</p>
            <TextReveal forceMotion delay={0.08} distance={58}>
              <h2 className="js-promise-line mobile-section-heading editorial-heading text-white lg:leading-[0.92]">
                Tell Us What
              </h2>
            </TextReveal>
            <TextReveal forceMotion delay={0.14} distance={58}>
              <h2 className="js-promise-line mobile-section-heading editorial-heading text-white lg:leading-[0.92]">
                You Need.
              </h2>
            </TextReveal>
            <TextReveal forceMotion delay={0.2} distance={58}>
              <h2 className="js-promise-line mobile-section-heading editorial-heading text-[color:var(--color-gold-500)] lg:leading-[0.92]">
                We Find
              </h2>
            </TextReveal>
            <TextReveal forceMotion delay={0.26} distance={58}>
              <h2 className="js-promise-line mobile-section-heading editorial-heading text-[color:var(--color-gold-500)] lg:leading-[0.92]">
                The Solution.
              </h2>
            </TextReveal>

            <div className="mt-8 flex justify-start lg:mt-9 lg:justify-center">
              <div className="flex flex-col items-start gap-6 lg:items-center">
                <Reveal forceMotion delay={0.32} distance={20}>
                  <CtaLink
                    href="/#contact"
                    variant="outline"
                    icon={
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    }
                    className="border-[color:var(--color-gold-500)] !text-[color:var(--color-gold-500)] hover:!text-[color:var(--color-navy-950)]"
                  >
                    Start A Conversation
                  </CtaLink>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[color:var(--color-surface)]">
        <div className="absolute inset-0">
          <Image
            src={assetPath("/images/contact.png")}
            alt="Guangzhou waterfront and industrial skyline"
            fill
            sizes="100vw"
            className="js-contact-bg object-cover object-[62%_50%] lg:object-[48%_50%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,242,237,0.96)_0%,rgba(246,242,237,0.9)_42%,rgba(246,242,237,0.76)_100%)] lg:bg-[linear-gradient(90deg,rgba(246,242,237,0.96)_0%,rgba(246,242,237,0.88)_34%,rgba(246,242,237,0.72)_64%,rgba(246,242,237,0.52)_100%)]" />
        </div>

        <Container className="relative max-w-[var(--content-max)] py-[clamp(3rem,9vw,4.2rem)] lg:py-[var(--section-space)]">
          <div className="max-w-[42rem]">
            <p className="section-label mb-4 text-[0.68rem] tracking-[0.22em] lg:mb-5 lg:text-[0.72rem] lg:tracking-[0.28em]">LET&apos;S TALK BUSINESS</p>
            <TextReveal forceMotion delay={0.08} distance={58}>
              <h2 className="js-contact-line mobile-section-heading editorial-heading text-[color:var(--color-navy-900)]">
                Ready To Start
              </h2>
            </TextReveal>
            <TextReveal forceMotion delay={0.14} distance={58}>
              <h2 className="js-contact-line mobile-section-heading editorial-heading text-[color:var(--color-navy-900)]">
                A Conversation?
              </h2>
            </TextReveal>
            <TextReveal forceMotion delay={0.22} distance={24}>
              <p className="mobile-section-copy mt-5 max-w-[21rem] text-[color:var(--color-slate-700)] lg:mt-6 lg:max-w-[34rem] lg:text-[1rem] lg:leading-8">
                Share your requirement with our team and let&apos;s explore the
                right solution together.
              </p>
            </TextReveal>

            <Reveal forceMotion className="mt-7 lg:mt-8" delay={0.3} distance={20}>
              <div className="flex max-w-[15rem] flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
                <div className="w-full sm:w-auto">
                <CtaLink
                  href="/contact"
                  icon={
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  }
                  className="w-full justify-start sm:w-auto sm:justify-center"
                >
                  Start An Inquiry
                </CtaLink>
              </div>
                <div className="w-full sm:w-auto">
                <CtaLink href="/contact" variant="secondary" className="w-full justify-start sm:w-auto sm:justify-center">
                  WhatsApp
                </CtaLink>
              </div>
                <div className="w-full sm:w-auto">
                <CtaLink
                  href="mailto:info@rongxingtrading.com"
                  variant="secondary"
                  className="w-full justify-start sm:w-auto sm:justify-center"
                >
                  Email Us
                </CtaLink>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
      <BackToTopButton />
    </div>
  );
}
