"use client";

import {
  ArrowRight,
  ArrowUp,
  BadgeDollarSign,
  Car,
  CheckCircle2,
  FileCheck2,
  Factory,
  Gauge,
  Globe2,
  Handshake,
  Map,
  PackageCheck,
  SearchCheck,
  Settings,
  ShieldCheck,
  Ship,
  Truck,
  Users,
  Wrench,
  X,
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

import { GalleryExperience } from "@/components/gallery/GalleryExperience";
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
    image: "/images/service 1.webp",
    imagePosition: "58% 50%",
    icon: SourcingMark,
  },
  {
    number: "02",
    title: "Electric Vehicle Trading",
    description:
      "Flexible sourcing and export solutions from individual vehicles to large-scale international orders.",
    image: "/images/service 2.webp",
    imagePosition: "58% 50%",
    icon: EvMark,
  },
  {
    number: "03",
    title: "International Brand Representation",
    description:
      "Connecting international brands with the right markets, partners, distributors and commercial opportunities.",
    image: "/images/service 3.webp",
    imagePosition: "45% 50%",
    icon: BrandMark,
  },
  {
    number: "04",
    title: "Industrial Solutions",
    description:
      "Production lines, machinery, equipment and integrated solutions for establishing and developing manufacturing operations.",
    image: "/images/service 4.webp",
    imagePosition: "50% 50%",
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
    image: "/images/service 1.webp",
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
    image: "/images/service 2.webp",
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
    image: "/images/service 3.webp",
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
    image: "/images/service 4.webp",
  },
] as const;

type GalleryPhoto = {
  src: string;
  alt: string;
  position: string;
  className: string;
};

const galleryPhotos = [
  {
    src: "/Rong Xing Gallery Images/img 7.jpeg",
    alt: "Rong Xing business operations and partner coordination",
    position: "50% 50%",
    className: "lg:col-span-5 lg:row-span-2",
  },
  {
    src: "/Rong Xing Gallery Images/img 9.jpeg",
    alt: "Rong Xing site visit and operational review",
    position: "50% 50%",
    className: "lg:col-span-4",
  },
  {
    src: "/Rong Xing Gallery Images/img 11.jpeg",
    alt: "Rong Xing factory and supplier inspection",
    position: "50% 50%",
    className: "lg:col-span-3",
  },
  {
    src: "/Rong Xing Gallery Images/img 17.jpeg",
    alt: "Rong Xing trade and logistics preparation",
    position: "50% 50%",
    className: "lg:col-span-7",
  },
] as const satisfies readonly GalleryPhoto[];

const mobileGalleryPhotos = [
  {
    src: "/Rong Xing Gallery Images/img 7.jpeg",
    alt: "Rong Xing business operations and partner coordination",
    position: "50% 50%",
  },
  {
    src: "/Rong Xing Gallery Images/img 11.jpeg",
    alt: "Rong Xing factory and supplier inspection",
    position: "50% 50%",
  },
] as const;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const getDetailUrl = ({
  solutionNumber,
  hash,
}: {
  solutionNumber?: string;
  hash: string;
}) => {
  const url = new URL(window.location.href);

  if (solutionNumber) {
    url.searchParams.set("solution", solutionNumber);
  } else {
    url.searchParams.delete("solution");
  }

  url.hash = hash;
  return url;
};

const scrollToHash = (hash: string) => {
  const target = document.getElementById(hash.replace(/^#/, ""));

  target?.scrollIntoView({ block: "start", behavior: "auto" });
};

function CountUpStatValue({
  value,
  className,
  delay = 0,
}: {
  value: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const match = value.match(/^([\d,]+)(.*)$/);

    if (!match) {
      setDisplayValue(value);
      return;
    }

    const target = Number(match[1].replace(/,/g, ""));
    const suffix = match[2] ?? "";
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    let frameId = 0;
    let timeoutId = 0;
    let hasAnimated = false;

    const formatValue = (current: number) =>
      `${Math.round(current).toLocaleString()}${suffix}`;

    const runAnimation = () => {
      if (hasAnimated) {
        return;
      }

      hasAnimated = true;

      if (reducedMotion) {
        setDisplayValue(formatValue(target));
        return;
      }

      timeoutId = window.setTimeout(() => {
        const startedAt = performance.now();
        const duration = 1250;

        const tick = (now: number) => {
          const progress = clamp((now - startedAt) / duration, 0, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(formatValue(target * easedProgress));

          if (progress < 1) {
            frameId = window.requestAnimationFrame(tick);
          }
        };

        frameId = window.requestAnimationFrame(tick);
      }, delay);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(frameId);
    };
  }, [delay, value]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}

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
      <TextReveal forceMotion className="pb-2 -mb-2" distance={48}>
        <h2
          className={cn(
            "mobile-section-heading section-heading lg:text-[clamp(2.25rem,3.8vw,3.45rem)] lg:leading-[1]",
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
  onSelect,
}: {
  item: (typeof solutionCards)[number];
  className?: string;
  onSelect?: () => void;
}) {
  const Icon = item.icon;
  const titleLines =
    item.title === "Electric Vehicle Trading"
      ? ["Electric", "Vehicle Trading"]
      : item.title === "International Brand Representation"
        ? ["International Brand", "Representation"]
        : [item.title];

  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "group h-full overflow-hidden rounded-[0.45rem] border border-white/10 bg-[color:var(--color-navy-950)] text-left shadow-[0_18px_44px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_58px_rgba(0,0,0,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold-500)]",
        className
      )}
    >
      <div className="relative aspect-[1.75/1] w-full overflow-hidden bg-white/5 xl:aspect-[1.55/1]">
        <Image
          src={assetPath(item.image)}
          alt={`${item.title} solution`}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
          style={{ objectPosition: item.imagePosition }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,28,61,0)_54%,rgba(7,28,61,0.24)_100%)]" />
      </div>

      <div className="grid h-[13rem] grid-rows-[3rem_minmax(0,1fr)_2.25rem] px-5 py-5 xl:h-[14rem] xl:px-6">
        <div className="grid h-[2.7rem] grid-cols-[3.15rem_minmax(0,1fr)] items-center gap-3.5">
          <span className="font-serif text-[2rem] font-bold leading-[0.9] tracking-[-0.06em] text-[color:var(--color-gold-500)]">
            {item.number}
          </span>
          <h3
            className={cn(
              "flex h-[1.8rem] max-w-[22ch] flex-col justify-center text-[0.86rem] font-bold uppercase tracking-[0.02em] text-white xl:text-[0.9rem]",
              titleLines.length > 1 ? "leading-[1.045]" : "leading-none"
            )}
          >
            {titleLines.map((line) => (
              <span key={line} className="block whitespace-nowrap">
                {line}
              </span>
            ))}
          </h3>
        </div>

        <p className="mobile-section-copy pt-1.5 text-[0.86rem] leading-6 text-white/72">
          {item.description}
        </p>

        <div className="flex items-end justify-between gap-3 self-end">
          <div className="flex items-center gap-2.5 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-gold-500)]">
            <Icon className="h-4.5 w-4.5 shrink-0" strokeWidth={1.65} />
            <span>Service</span>
          </div>
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-[color:var(--color-gold-500)] bg-[color:var(--color-gold-500)] text-[color:var(--color-navy-950)]">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </button>
  );
}

function MobileSolutionCapabilityCard({
  item,
  onSelect,
}: {
  item: (typeof solutionCards)[number];
  onSelect?: () => void;
}) {
  const Icon = item.icon;
  const titleLines =
    item.title === "Electric Vehicle Trading"
      ? ["Electric", "Vehicle Trading"]
      : item.title === "International Brand Representation"
        ? ["International Brand", "Representation"]
        : [item.title];

  return (
    <button
      type="button"
      className="group w-full overflow-hidden rounded-[0.45rem] border border-white/12 bg-[color:var(--color-navy-950)] text-left shadow-[0_18px_44px_rgba(0,0,0,0.18)] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold-500)]"
      onClick={onSelect}
    >
      <div className="relative aspect-[1.85/1] w-full overflow-hidden bg-white/5">
        <Image
          src={assetPath(item.image)}
          alt={`${item.title} solution`}
          fill
          sizes="100vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
          style={{ objectPosition: item.imagePosition }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,28,61,0)_54%,rgba(7,28,61,0.24)_100%)]" />
      </div>

      <div className="grid h-[11.25rem] grid-rows-[2.9rem_minmax(0,1fr)_2.25rem] px-4 py-4">
        <div className="grid h-[2.65rem] grid-cols-[2.8rem_minmax(0,1fr)] items-center gap-3">
          <span className="font-serif text-[1.8rem] font-bold leading-[0.9] tracking-[-0.06em] text-[color:var(--color-gold-500)]">
            {item.number}
          </span>
          <h3
            className={cn(
              "flex h-[1.62rem] max-w-[24ch] flex-col justify-center text-[0.78rem] font-bold uppercase tracking-[0.02em] text-white",
              titleLines.length > 1 ? "leading-[1.04]" : "leading-none"
            )}
          >
            {titleLines.map((line) => (
              <span key={line} className="block whitespace-nowrap">
                {line}
              </span>
            ))}
          </h3>
        </div>

        <p className="pt-1 text-[0.8rem] leading-[1.55] text-white/72">
          {item.description}
        </p>

        <div className="flex items-end justify-between gap-3 self-end">
          <div className="flex items-center gap-2.5 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-gold-500)]">
            <Icon className="h-4.5 w-4.5 shrink-0" strokeWidth={1.65} />
            <span>Service</span>
          </div>
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-[color:var(--color-gold-500)] bg-[color:var(--color-gold-500)] text-[color:var(--color-navy-950)]">
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </button>
  );
}

function getHighlightIcon(highlight: string): LucideIcon {
  const normalized = highlight.toLowerCase();

  if (normalized.includes("factory") || normalized.includes("manufacturer")) {
    return Factory;
  }

  if (normalized.includes("pricing")) {
    return BadgeDollarSign;
  }

  if (normalized.includes("quality")) {
    return ShieldCheck;
  }

  if (normalized.includes("fast") || normalized.includes("processing")) {
    return ArrowRight;
  }

  if (normalized.includes("vehicle") || normalized.includes("ev")) {
    return Car;
  }

  if (normalized.includes("order") || normalized.includes("quantit")) {
    return PackageCheck;
  }

  if (normalized.includes("shipping")) {
    return Ship;
  }

  if (normalized.includes("support")) {
    return Users;
  }

  if (normalized.includes("market assessment")) {
    return SearchCheck;
  }

  if (normalized.includes("partner") || normalized.includes("distributor")) {
    return Handshake;
  }

  if (normalized.includes("agreement")) {
    return FileCheck2;
  }

  if (normalized.includes("market development")) {
    return Globe2;
  }

  if (normalized.includes("production")) {
    return Factory;
  }

  if (normalized.includes("machinery") || normalized.includes("equipment")) {
    return Wrench;
  }

  if (normalized.includes("integrated")) {
    return Settings;
  }

  if (normalized.includes("investment")) {
    return Map;
  }

  if (normalized.includes("delivery")) {
    return Truck;
  }

  return CheckCircle2;
}

function getHighlightDescription(highlight: string) {
  const normalized = highlight.toLowerCase();

  if (normalized.includes("factory") || normalized.includes("manufacturer")) {
    return "Work directly with trusted manufacturers.";
  }

  if (normalized.includes("pricing")) {
    return "Get clear options and competitive value.";
  }

  if (normalized.includes("quality")) {
    return "Products aligned with required standards.";
  }

  if (normalized.includes("fast") || normalized.includes("processing")) {
    return "Efficient processes for faster execution.";
  }

  if (normalized.includes("vehicle") || normalized.includes("ev")) {
    return "Access reliable vehicle sourcing channels.";
  }

  if (normalized.includes("order") || normalized.includes("quantit")) {
    return "Support for small and large order scales.";
  }

  if (normalized.includes("shipping")) {
    return "Coordinate export and delivery requirements.";
  }

  if (normalized.includes("support")) {
    return "Guidance throughout the sourcing process.";
  }

  if (normalized.includes("market assessment")) {
    return "Evaluate fit, demand, and commercial route.";
  }

  if (normalized.includes("partner") || normalized.includes("distributor")) {
    return "Find suitable partners and local channels.";
  }

  if (normalized.includes("agreement")) {
    return "Support clear commercial agreement steps.";
  }

  if (normalized.includes("market development")) {
    return "Build practical paths for market growth.";
  }

  if (normalized.includes("production")) {
    return "Source complete lines for production needs.";
  }

  if (normalized.includes("machinery") || normalized.includes("equipment")) {
    return "Identify suitable machines and equipment.";
  }

  if (normalized.includes("integrated")) {
    return "Connect multiple requirements into one plan.";
  }

  if (normalized.includes("investment")) {
    return "Structure opportunities around project goals.";
  }

  return "Focused support for the requirement.";
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

  if (desktop) {
    const desktopHighlights = solution.highlights.slice(0, 4);

    return (
      <article
        data-detailed-active-card
        className="grid w-full items-stretch gap-10 lg:min-h-[clamp(34rem,78vh,42rem)] lg:grid-cols-[minmax(0,0.43fr)_minmax(0,0.57fr)] xl:gap-14"
      >
        <div className="flex min-w-0 flex-col">
          <div className="grid grid-cols-[4.4rem_1px_minmax(0,1fr)] items-start gap-5">
            <span
              data-detailed-card-number
              className="font-serif text-[4.4rem] font-bold leading-[0.86] tracking-[-0.08em] text-[color:var(--color-gold-500)]"
            >
              {solution.number}
            </span>
            <span className="h-[3.75rem] w-px bg-[color:var(--color-gold-500)]/55" />
            <h3
              data-detailed-card-title
              className="pt-1 text-[1.45rem] font-bold uppercase leading-[1.04] tracking-[0.02em] text-[color:var(--color-navy-900)] xl:text-[1.55rem]"
            >
              {solution.title}
            </h3>
          </div>

          <p
            data-detailed-card-statement
            className="mt-5 text-[0.92rem] font-bold uppercase leading-[1.4] tracking-[0.06em] text-[color:var(--color-gold-600)]"
          >
            {solution.statement}
          </p>

          <div className="mt-3 space-y-4">
            {solution.description.map((paragraph) => (
              <p
                data-detailed-card-copy
                key={paragraph}
                className="max-w-[35rem] text-[0.9rem] font-medium leading-[1.55] text-[color:var(--color-navy-900)]/88"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-7 grid gap-4">
            {desktopHighlights.map((highlight) => {
              const HighlightIcon = getHighlightIcon(highlight);

              return (
                <div
                  data-detailed-card-highlight
                  key={highlight}
                  className="grid grid-cols-[3rem_minmax(0,1fr)] items-center gap-5 py-1"
                >
                  <HighlightIcon
                    className="h-8 w-8 text-[color:var(--color-gold-600)]"
                    strokeWidth={1.55}
                  />
                  <div>
                    <p className="text-[0.74rem] font-bold uppercase leading-[1.25] tracking-[0.08em] text-[color:var(--color-navy-900)]">
                      {highlight}
                    </p>
                    <p className="mt-0.5 text-[0.74rem] leading-[1.35] text-[color:var(--color-slate-700)]">
                      {getHighlightDescription(highlight)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-full overflow-hidden border border-[color:var(--color-navy-900)]/10 bg-[color:var(--color-navy-950)]/8 shadow-[0_22px_52px_rgba(7,28,61,0.14)]">
          <Image
            src={assetPath(solution.image)}
            alt={`${solution.title} visual`}
            fill
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,28,61,0.02),rgba(7,28,61,0.16))]" />
        </div>
      </article>
    );
  }

  if (!canToggle) {
    return (
      <article className="w-full">
        <div className="relative h-[12.5rem] w-full overflow-hidden border border-[color:var(--color-gold-500)]/20 bg-[color:var(--color-navy-950)]/8">
          <Image
            src={assetPath(solution.image)}
            alt={`${solution.title} visual`}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,28,61,0.04),rgba(7,28,61,0.28))]" />
        </div>

        <div className="mt-6 grid grid-cols-[3.45rem_1px_minmax(0,1fr)] items-start gap-4">
          <span className="shrink-0 font-serif text-[3.4rem] font-bold leading-[0.86] tracking-[-0.08em] text-[color:var(--color-gold-500)]">
            {solution.number}
          </span>
          <span className="h-[3.15rem] w-px bg-[color:var(--color-gold-500)]/55" />
          <h3 className="min-w-0 pt-1 text-[1.24rem] font-bold uppercase leading-[1.06] tracking-[0.02em] text-[color:var(--color-navy-900)]">
            {solution.title}
          </h3>
        </div>

        <p className="mt-4 text-[0.72rem] font-semibold uppercase leading-[1.5] tracking-[0.18em] text-[color:var(--color-gold-500)]">
          {solution.statement}
        </p>

        <div className="mt-5 space-y-3.5">
          {solution.description.map((paragraph) => (
            <p
              key={paragraph}
              className="text-[0.94rem] leading-[1.75] text-[color:var(--color-slate-700)]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-7 grid gap-4 pb-2">
          {solution.highlights.map((highlight) => {
            const HighlightIcon = getHighlightIcon(highlight);

            return (
              <div
                key={highlight}
                className="grid grid-cols-[1.35rem_minmax(0,1fr)] items-start gap-3 py-1"
              >
                <HighlightIcon
                  className="mt-0.5 h-4 w-4 text-[color:var(--color-gold-500)]"
                  strokeWidth={1.8}
                />
                <p className="text-[0.82rem] leading-[1.45] text-[color:var(--color-navy-900)]">
                  {highlight}
                </p>
              </div>
            );
          })}
        </div>
      </article>
    );
  }

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
        "group fixed bottom-5 right-5 z-[80] flex h-12 w-12 items-center justify-center rounded-full p-px shadow-[0_18px_46px_rgba(7,28,61,0.22)] transition duration-300 ease-out sm:bottom-7 sm:right-7 sm:h-14 sm:w-14",
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
      <span className="flex h-full w-full items-center justify-center rounded-full border border-white/10 bg-[rgba(7,28,61,0.88)] text-[color:var(--color-gold-500)] backdrop-blur-xl transition duration-300 group-hover:bg-[color:var(--color-gold-500)] group-hover:text-[color:var(--color-navy-950)] group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-4 group-focus-visible:outline-[color:var(--color-gold-500)]">
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
  const solutionCarouselStartedRef = useRef(false);
  const solutionDragStartXRef = useRef(0);
  const solutionDragOffsetRef = useRef(0);
  const solutionIsDraggingRef = useRef(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [solutionCarouselIndex, setSolutionCarouselIndex] = useState(0);
  const [isSolutionsCarouselInView, setIsSolutionsCarouselInView] =
    useState(false);
  const [isSolutionDragging, setIsSolutionDragging] = useState(false);
  const [objectivesDesktopIndex, setObjectivesDesktopIndex] = useState(0);
  const [detailedDesktopIndex, setDetailedDesktopIndex] = useState(0);
  const [activeMobileDetailedIndex, setActiveMobileDetailedIndex] = useState<
    number | null
  >(null);
  const [isGalleryOverlayOpen, setIsGalleryOverlayOpen] = useState(false);
  const [expandedDetailedMobileCards, setExpandedDetailedMobileCards] = useState<
    Record<string, boolean>
  >({});

  const activeSolutionIndex = solutionCarouselIndex;
  const activeMobileDetailedSolution =
    activeMobileDetailedIndex === null
      ? null
      : detailedSolutions[activeMobileDetailedIndex] ?? null;

  const openSolutionDetail = useCallback((index: number) => {
    const solution = detailedSolutions[index];

    if (!solution) {
      return;
    }

    setActiveMobileDetailedIndex(index);
    window.history.pushState(
      null,
      "",
      getDetailUrl({ solutionNumber: solution.number, hash: "#solutions" })
    );
  }, []);

  const closeDetailOverlay = useCallback((fallbackHash: string) => {
    setActiveMobileDetailedIndex(null);
    window.history.replaceState(null, "", getDetailUrl({ hash: fallbackHash }));
    window.requestAnimationFrame(() => scrollToHash(fallbackHash));
  }, []);

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

    setDetailedDesktopIndex(targetIndex);

    const trigger = ScrollTrigger.getById(detailedSolutionsScrollTriggerId);
    const section = detailedSectionRef.current;

    if (!trigger || !section) {
      return;
    }

    const segmentDistance =
      (trigger.end - trigger.start) / detailedSolutions.length;
    const targetY =
      trigger.start + segmentDistance * targetIndex + segmentDistance * 0.5;

    window.scrollTo({
      top: targetY,
      behavior: "auto",
    });
    ScrollTrigger.update();
  };

  const toggleDetailedMobileCard = (number: string) => {
    setExpandedDetailedMobileCards((current) => ({
      ...current,
      [number]: !current[number],
    }));
  };

  useEffect(() => {
    const syncDetailFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const solutionNumber = params.get("solution");
      const solutionIndex =
        solutionNumber
          ? detailedSolutions.findIndex(
              (solution) => solution.number === solutionNumber
            )
          : -1;

      setActiveMobileDetailedIndex(solutionIndex >= 0 ? solutionIndex : null);
    };

    syncDetailFromUrl();
    window.addEventListener("popstate", syncDetailFromUrl);

    return () => {
      window.removeEventListener("popstate", syncDetailFromUrl);
    };
  }, []);

  useEffect(() => {
    if (activeMobileDetailedIndex === null && !isGalleryOverlayOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isGalleryOverlayOpen) {
          setIsGalleryOverlayOpen(false);
          return;
        }

        closeDetailOverlay("#solutions");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeMobileDetailedIndex, closeDetailOverlay, isGalleryOverlayOpen]);

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
    if (!isMobileViewport) {
      setIsSolutionsCarouselInView(false);
      solutionCarouselStartedRef.current = false;
      return;
    }

    const carousel = solutionsCarouselRef.current;

    if (!carousel) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isInView = entry.isIntersecting;
        setIsSolutionsCarouselInView(isInView);

        if (isInView && !solutionCarouselStartedRef.current) {
          solutionCarouselStartedRef.current = true;
          resetSolutionDragOffset();
          setSolutionCarouselIndex(0);
        }
      },
      {
        threshold: 0.38,
      }
    );

    observer.observe(carousel);

    return () => {
      observer.disconnect();
    };
  }, [isMobileViewport]);

  useEffect(() => {
    if (!isMobileViewport || !isSolutionsCarouselInView || isSolutionDragging) {
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
  }, [isMobileViewport, isSolutionsCarouselInView, isSolutionDragging]);

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

    const aboutStats = gsap.utils.toArray<HTMLElement>(".js-about-stat");

    if (aboutStats.length > 0) {
      gsap.set(aboutStats, {
        opacity: 0,
        y: reducedMotion ? 8 : 18,
      });

      gsap.to(aboutStats, {
        opacity: 1,
        y: 0,
        duration: reducedMotion ? 0.36 : 0.68,
        stagger: reducedMotion ? 0.06 : 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".js-about-section",
          start: "top 62%",
          once: true,
        },
      });
    }

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
        // Match the per-item scroll distance used by Detailed Services.
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
              <p className="js-about-label section-label mb-[clamp(1rem,4vw,1.75rem)] text-[clamp(0.78rem,3vw,0.9rem)] tracking-[0.24em] lg:text-[0.9rem]">ABOUT RONG XING</p>
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
                  <p className="js-about-side-label section-label mb-[clamp(1.1rem,4vw,1.4rem)] text-[clamp(0.78rem,3vw,0.9rem)] tracking-[0.24em] lg:text-[0.9rem]">WHAT WE DO</p>
                  <Reveal forceMotion className="lg:hidden" delay={0.12} distance={22}>
                    <p className="prose-copy mobile-section-copy max-w-[20rem] sm:max-w-[24rem]">
                      From sourcing a single product to establishing complete
                      industrial operations,
                      <br />
                      RONG XING connects your requirements with the right
                      resources in China.
                    </p>
                  </Reveal>
                  <div className="mt-6 grid max-w-[20rem] grid-cols-2 gap-3 lg:hidden">
                    {[
                      ["22+", "Years of China-based operations"],
                      ["800+", "Supplier and factory contacts"],
                      ["120+", "Sourcing and trade projects"],
                      ["15+", "Markets connected through China"],
                    ].map(([value, label], index) => (
                      <Reveal
                        key={value}
                        forceMotion
                        delay={0.16 + index * 0.08}
                        distance={18}
                      >
                        <div className="border-l-2 border-[color:var(--color-gold-500)] bg-white/34 py-2.5 pl-3 pr-2">
                          <CountUpStatValue
                            value={value}
                            className="block text-[1.32rem] font-semibold leading-none tracking-[-0.03em] text-[color:var(--color-navy-900)]"
                          />
                          <p className="mt-2 text-[0.64rem] font-medium leading-4 text-[color:var(--color-slate-700)]">
                            {label}
                          </p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                  <p className="js-about-copy prose-copy hidden max-w-[20rem] sm:max-w-[24rem] lg:block lg:max-w-[31rem] lg:text-[clamp(0.98rem,1.2vw,1.08rem)] lg:leading-[1.9]">
                    From sourcing a single product to establishing complete
                    industrial operations,
                    <br />
                    RONG XING connects your requirements with the right
                    resources in China.
                  </p>
                </div>

                <div className="js-about-support mt-[clamp(1.9rem,7vw,2.6rem)] hidden w-[min(31rem,100%)] border-t border-[color:var(--color-gold-500)]/14 pt-[clamp(1rem,3vw,1.2rem)] sm:mt-0 lg:block">
                  <div className="grid grid-cols-4 gap-3">
                    <div className="js-about-stat border-l-2 border-[color:var(--color-gold-500)] pl-3">
                      <CountUpStatValue
                        value="22+"
                        delay={520}
                        className="block text-[1.72rem] font-semibold uppercase leading-none tracking-[-0.03em] text-[color:var(--color-navy-900)]"
                      />
                      <p className="mt-4 max-w-[5.75rem] text-[0.76rem] font-medium leading-6 text-[color:var(--color-navy-900)]">
                        Years of China-based operations
                      </p>
                    </div>
                    <div className="js-about-stat border-l-2 border-[color:var(--color-gold-500)] pl-3">
                      <CountUpStatValue
                        value="800+"
                        delay={640}
                        className="block text-[1.72rem] font-semibold uppercase leading-none tracking-[-0.03em] text-[color:var(--color-navy-900)]"
                      />
                      <p className="mt-4 max-w-[5.9rem] text-[0.76rem] font-medium leading-6 text-[color:var(--color-navy-900)]">
                        Supplier and factory contacts
                      </p>
                    </div>
                    <div className="js-about-stat border-l-2 border-[color:var(--color-gold-500)] pl-3">
                      <CountUpStatValue
                        value="120+"
                        delay={760}
                        className="block text-[1.72rem] font-semibold uppercase leading-none tracking-[-0.03em] text-[color:var(--color-navy-900)]"
                      />
                      <p className="mt-4 max-w-[5.9rem] text-[0.76rem] font-medium leading-6 text-[color:var(--color-navy-900)]">
                        Sourcing and trade projects
                      </p>
                    </div>
                    <div className="js-about-stat border-l-2 border-[color:var(--color-gold-500)] pl-3">
                      <CountUpStatValue
                        value="15+"
                        delay={880}
                        className="block text-[1.72rem] font-semibold uppercase leading-none tracking-[-0.03em] text-[color:var(--color-navy-900)]"
                      />
                      <p className="mt-4 max-w-[5.75rem] text-[0.76rem] font-medium leading-6 text-[color:var(--color-navy-900)]">
                        Markets connected through China
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="js-vision-section relative overflow-hidden bg-[color:var(--color-navy-950)] py-0 text-white lg:py-[calc(var(--section-space)*1.02)]">
        <Container className="max-w-[var(--content-max)] px-0 sm:px-0 lg:px-8">
          <div className="relative grid gap-0 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)] lg:items-stretch lg:gap-0">
            <div className="js-image-mask relative left-1/2 aspect-[1.32/1] w-screen -ml-[50vw] overflow-hidden sm:aspect-[1.55/1] lg:left-auto lg:ml-0 lg:min-h-[37rem] lg:w-auto lg:aspect-auto">
              <div className="js-vision-image absolute inset-0">
                <Image
                  src={assetPath("/images/about.webp")}
                  alt="Modern Guangzhou skyline and commercial district"
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover object-center lg:object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,28,61,0.06)_0%,rgba(7,28,61,0.14)_58%,rgba(7,28,61,0.24)_100%)] lg:bg-[linear-gradient(90deg,rgba(7,28,61,0.28)_0%,rgba(7,28,61,0.08)_40%,rgba(7,28,61,0.32)_100%)]" />
              </div>
            </div>

            <div className="relative bg-[color:var(--color-navy-950)] py-[clamp(1.7rem,5.6vw,2.3rem)] lg:min-h-[37rem] lg:bg-transparent lg:px-0 lg:py-0 lg:pl-10 xl:pl-14">
              <div className="relative flex h-full flex-col justify-center lg:min-h-[37rem] lg:p-1">
                <p className="js-vision-label section-label mb-[clamp(0.8rem,2.8vw,1rem)] text-[clamp(0.74rem,2.7vw,0.82rem)] tracking-[0.24em] lg:text-[0.86rem]">OUR VISION</p>
                <TextReveal forceMotion className="lg:hidden" distance={42}>
                  <h2 className="js-vision-line mobile-section-heading text-white lg:text-[clamp(2.75rem,5.2vw,3.65rem)]">
                    Connecting
                  </h2>
                </TextReveal>
                <TextReveal
                  forceMotion
                  className="mt-[clamp(0.28rem,1.4vw,0.45rem)] lg:hidden"
                  delay={0.1}
                  distance={42}
                >
                  <h2 className="js-vision-line mobile-section-heading text-[color:var(--color-gold-500)] lg:text-[clamp(2.85rem,5.35vw,3.65rem)]">
                    China
                  </h2>
                </TextReveal>
                <TextReveal
                  forceMotion
                  className="mt-[clamp(0.28rem,1.4vw,0.45rem)] lg:hidden"
                  delay={0.16}
                  distance={42}
                >
                  <h2 className="js-vision-line mobile-section-heading text-white">
                    With The
                  </h2>
                </TextReveal>
                <TextReveal
                  forceMotion
                  className="mt-[clamp(0.28rem,1.4vw,0.45rem)] lg:hidden"
                  delay={0.22}
                  distance={42}
                >
                  <h2 className="js-vision-line mobile-section-heading text-[color:var(--color-gold-500)]">
                    World.
                  </h2>
                </TextReveal>
                <TextReveal forceMotion className="hidden lg:block" distance={42}>
                  <h2 className="js-vision-line mobile-section-heading text-white lg:text-[clamp(2.75rem,5.2vw,3.65rem)]">
                    Connecting <span className="text-[color:var(--color-gold-500)]">China</span>
                  </h2>
                </TextReveal>
                <TextReveal
                  forceMotion
                  className="hidden lg:mt-[clamp(0.45rem,2vw,0.6rem)] lg:block"
                  delay={0.1}
                  distance={42}
                >
                  <h2 className="js-vision-line mobile-section-heading text-white lg:text-[clamp(2.85rem,5.35vw,3.65rem)]">
                    With The <span className="text-[color:var(--color-gold-500)]">World.</span>
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
                  Long-Term <span className="text-[color:var(--color-gold-500)]">Execution.</span>
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
                          "relative grid origin-center grid-cols-[1px_3.8rem_minmax(0,1fr)] items-center gap-5 border-b border-[color:var(--color-border)]/75 py-3.5 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                          isActive
                            ? "translate-y-0 scale-100 opacity-100"
                            : isPast
                              ? "-translate-y-2 scale-[0.985] opacity-45"
                              : "translate-y-1.5 scale-[0.985] opacity-60"
                        )}
                      >
                        <div className="h-[78%] w-px bg-[color:var(--color-border)]" />

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
                  <div className="absolute bottom-2 left-0 top-2 w-px bg-[linear-gradient(180deg,transparent,rgba(197,160,98,0.28)_12%,rgba(197,160,98,0.2)_88%,transparent)] md:hidden" />
                  <div
                    ref={objectivesProgressRef}
                    className="absolute bottom-2 left-0 top-2 w-px origin-top bg-[color:var(--color-gold-500)] shadow-[0_0_12px_rgba(197,160,98,0.32)] md:hidden"
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
                        "js-objective-item relative grid grid-cols-[1px_2.2rem_minmax(0,1fr)] items-start gap-x-4 py-4 lg:hidden",
                        index % 2 === 1 ? "lg:ml-12" : "lg:mr-12"
                      )}
                    >
                      <span className="block h-full min-h-[6.5rem] w-px bg-transparent" />

                      <p className="js-objective-mobile-number font-serif text-[2rem] leading-[0.84] tracking-[-0.08em] text-[color:var(--color-gold-500)]">
                        {objective.number}
                      </p>

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
        className="flex min-h-[100svh] scroll-mt-[5.75rem] items-center bg-[color:var(--color-navy-950)] py-[clamp(2.25rem,6.5vw,3rem)] text-white md:block md:min-h-0 md:py-[clamp(3.4rem,4.6vw,5.4rem)]"
      >
        <Container className="max-w-[var(--content-max)]">
          <div className="max-w-[40rem]">
            <p className="js-solutions-label section-label mb-3 md:mb-4">Our Services</p>
            <TextReveal forceMotion distance={42}>
              <h2 className="mobile-section-heading text-white md:text-[clamp(2rem,3.5vw,3rem)] lg:text-[clamp(1.85rem,3.05vw,2.55rem)]">
                <span className="block">One Partner.</span>
                <span className="block"><span className="text-[color:var(--color-gold-500)]">Four</span> Core Capabilities.</span>
              </h2>
            </TextReveal>
            <Reveal forceMotion delay={0.14} distance={22}>
              <p className="mobile-section-copy mt-3 max-w-[22rem] text-white/74 md:mt-4 md:max-w-[34rem] md:text-[0.96rem] md:leading-7">
                Integrated business solutions built around your requirements.
              </p>
            </Reveal>
          </div>

          <div className="mt-6 grid gap-3 md:hidden">
            {solutionCards.map((item, index) => (
              <Reveal
                key={item.number}
                forceMotion
                delay={index * 0.08}
                distance={28}
              >
                <MobileSolutionCapabilityCard
                  item={item}
                  onSelect={() => openSolutionDetail(index)}
                />
              </Reveal>
            ))}
          </div>

          <div className="mt-8 hidden gap-4 md:mt-10 md:grid md:grid-cols-2 xl:grid-cols-4">
            {solutionCards.map((item, index) => (
              <SolutionCapabilityCard
                key={item.number}
                item={item}
                className="js-reveal-scale"
                onSelect={() => openSolutionDetail(index)}
              />
            ))}
          </div>
        </Container>
      </section>

      {activeMobileDetailedSolution ? (
        <div
          className="navy-scrollbar fixed inset-0 z-[120] overflow-y-auto bg-[color:var(--color-surface)] px-[var(--mobile-gutter)] pb-6 pt-4 text-[color:var(--color-navy-900)] lg:px-10 lg:py-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeMobileDetailedSolution.title} details`}
        >
          <div className="lg:mx-auto lg:flex lg:min-h-full lg:w-full lg:max-w-[86rem] lg:flex-col">
            <div className="-mx-[var(--mobile-gutter)] flex items-center justify-between bg-[color:var(--color-surface)] px-[var(--mobile-gutter)] py-3 lg:mx-0 lg:px-0">
              <p className="section-label text-[0.66rem] tracking-[0.2em] lg:text-[0.86rem]">
                Detailed Service
              </p>
              <button
                type="button"
                aria-label="Close detailed service"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-gold-500)]/42 text-[color:var(--color-navy-900)] transition hover:bg-[color:var(--color-gold-500)] hover:text-[color:var(--color-navy-950)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold-500)]"
                onClick={() => closeDetailOverlay("#solutions")}
              >
                <X className="h-4 w-4" strokeWidth={1.8} />
              </button>
            </div>

            <div className="py-5 lg:flex lg:flex-1 lg:items-center lg:justify-center lg:py-4">
              <DetailedSolutionCard
                key={activeMobileDetailedSolution.number}
                solution={activeMobileDetailedSolution}
                desktop={!isMobileViewport}
              />
            </div>
          </div>
        </div>
      ) : null}

      {false && (
      <section
        ref={detailedSectionRef}
        className="js-detailed-solutions-section mobile-section-pad relative hidden overflow-hidden bg-white lg:block lg:h-screen lg:min-h-[36rem] lg:py-0"
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
                label="DETAILED SERVICES"
                title="Built To Match The Scale Of The Requirement."
                subtitle="A four-part business platform designed to move from inquiry to execution with precision."
              />

              <div className="mt-10 hidden max-w-[32rem] lg:block">
                <div className="space-y-2">
                  {detailedSolutions.map((solution, index) => {
                    const isActive = detailedDesktopIndex === index;
                    const Icon = solutionCards[index]?.icon ?? SourcingMark;

                    return (
                    <button
                      type="button"
                      key={solution.number}
                      className={cn(
                        "group relative grid h-[4rem] w-full grid-cols-[2.35rem_2.75rem_minmax(0,1fr)_1.25rem] items-center gap-3 overflow-hidden rounded-[0.38rem] px-4 text-left transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                        isActive
                          ? "bg-white text-[color:var(--color-navy-900)] shadow-[0_14px_34px_rgba(11,31,59,0.08)]"
                          : "border-b border-[color:var(--color-border)] text-[color:var(--color-slate-600)] hover:bg-white/58 hover:text-[color:var(--color-navy-900)]"
                      )}
                      onClick={() => jumpToDetailedSolution(index)}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute left-0 top-0 h-full w-1 rounded-l-[0.38rem] bg-[color:var(--color-gold-500)] transition-opacity duration-300",
                          isActive ? "opacity-100" : "opacity-0"
                        )}
                      />
                      <span
                        className={cn(
                          "font-serif text-[1.35rem] leading-none tracking-[-0.06em] transition duration-300",
                          isActive
                            ? "text-[color:var(--color-gold-500)]"
                            : "text-[color:var(--color-navy-900)]/28 group-hover:text-[color:var(--color-gold-500)]/74"
                        )}
                      >
                        {solution.number}
                      </span>
                      <span
                        className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-full transition duration-300",
                          isActive
                            ? "bg-[color:var(--color-navy-950)] text-[color:var(--color-gold-500)] shadow-[0_8px_18px_rgba(7,28,61,0.18)]"
                            : "bg-[color:var(--color-navy-900)]/6 text-[color:var(--color-navy-900)]/58 group-hover:bg-[color:var(--color-navy-950)] group-hover:text-[color:var(--color-gold-500)]"
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="line-clamp-2 block text-[0.64rem] font-semibold uppercase leading-[1.25] tracking-[0.13em]">
                          {solution.title}
                        </span>
                        <span className="mt-1.5 block h-px overflow-hidden bg-transparent">
                          <span
                            className={cn(
                              "block h-full w-[6.5rem] origin-left bg-[color:var(--color-gold-500)] transition duration-500",
                              isActive ? "scale-x-100" : "scale-x-0"
                            )}
                          />
                        </span>
                      </span>
                      <ArrowRight
                        className={cn(
                          "h-3.5 w-3.5 transition duration-300",
                          isActive
                            ? "text-[color:var(--color-navy-900)]"
                            : "text-[color:var(--color-slate-600)] group-hover:translate-x-1 group-hover:text-[color:var(--color-gold-500)]"
                        )}
                        strokeWidth={1.8}
                      />
                    </button>
                    );
                  })}
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
      )}

      <section
        id="gallery"
        className="mobile-section-pad relative overflow-hidden bg-[#f8f4ef] lg:pb-[clamp(3.5rem,6vh,4.75rem)] lg:pt-[clamp(2rem,4vh,3rem)]"
      >
        <Container className="relative z-10 max-w-[var(--content-max)]">
          <div className="mb-7 flex flex-col gap-5 sm:mb-9 lg:mb-[clamp(1.3rem,3vh,2.2rem)] lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[37rem]">
              <p className="section-label mb-3 lg:mb-3">OUR GALLERY</p>
              <TextReveal forceMotion distance={44}>
                <h2 className="mobile-section-heading text-[color:var(--color-navy-900)] lg:text-[clamp(2.65rem,4.4vw,3.35rem)]">
                  <span className="block">
                    See{" "}
                    <span className="text-[color:var(--color-gold-500)]">
                      Rong Xing
                    </span>
                  </span>{" "}
                  <span className="block">In Action</span>
                </h2>
              </TextReveal>
              <Reveal forceMotion delay={0.12} distance={18}>
                <p className="mobile-section-copy mt-5 max-w-[33rem] text-[color:var(--color-slate-700)] lg:mt-4 lg:max-w-[31rem] lg:text-[0.92rem] lg:leading-6">
                  A look at our operations, partnerships, sourcing, inspections,
                  and global trade.
                </p>
              </Reveal>
            </div>

            <Reveal
              forceMotion
              delay={0.16}
              distance={18}
              className="hidden lg:block"
            >
              <button
                type="button"
                onClick={() => setIsGalleryOverlayOpen(true)}
                className="group inline-flex min-h-[2.85rem] items-center justify-center gap-2.5 whitespace-nowrap rounded-none border border-[color:var(--color-gold-500)] bg-[color:var(--color-gold-500)] px-4 py-2.5 text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-navy-950)] transition duration-300 hover:border-[color:var(--color-gold-600)] hover:bg-[color:var(--color-gold-600)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold-500)] focus-visible:ring-offset-2 lg:min-h-12 lg:px-5 lg:py-3 lg:text-[0.68rem] lg:tracking-[0.16em]"
              >
                View Full Gallery
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Reveal>
          </div>

          <div className="relative mx-auto mb-6 h-[23.5rem] max-w-[22rem] sm:h-[29rem] sm:max-w-[28rem] lg:hidden">
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 z-10 h-[7rem] w-[3rem] border-l border-t border-[color:var(--color-gold-500)]"
            />
            <Reveal
              forceMotion
              distance={22}
              className="absolute left-3 right-5 top-3 h-[13rem] overflow-hidden bg-[color:var(--color-navy-950)] shadow-[0_18px_42px_rgba(7,28,61,0.16)] sm:h-[16.5rem]"
            >
              <Image
                src={assetPath(mobileGalleryPhotos[0].src)}
                alt={mobileGalleryPhotos[0].alt}
                fill
                sizes="(min-width: 640px) 27rem, 92vw"
                className="object-cover"
                style={{ objectPosition: mobileGalleryPhotos[0].position }}
              />
            </Reveal>
            <Reveal
              forceMotion
              delay={0.08}
              distance={22}
              className="absolute bottom-3 left-[3.5rem] right-3 h-[11.75rem] overflow-hidden border-[5px] border-[#f8f4ef] bg-[color:var(--color-navy-950)] shadow-[0_20px_46px_rgba(7,28,61,0.18)] sm:h-[14rem] sm:border-[6px]"
            >
              <Image
                src={assetPath(mobileGalleryPhotos[1].src)}
                alt={mobileGalleryPhotos[1].alt}
                fill
                sizes="(min-width: 640px) 24rem, 78vw"
                className="object-cover"
                style={{ objectPosition: mobileGalleryPhotos[1].position }}
              />
            </Reveal>
            <span
              aria-hidden="true"
              className="absolute bottom-0 right-0 z-10 h-[3.25rem] w-[4.25rem] border-b border-r border-[color:var(--color-gold-500)]"
            />
          </div>

          <Reveal forceMotion delay={0.16} distance={18} className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsGalleryOverlayOpen(true)}
              className="group inline-flex min-h-[2.9rem] items-center justify-center gap-2.5 rounded-none border border-[color:var(--color-gold-500)] bg-[color:var(--color-gold-500)] px-5 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--color-navy-950)] transition duration-300 hover:border-[color:var(--color-gold-600)] hover:bg-[color:var(--color-gold-600)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold-500)] focus-visible:ring-offset-2"
            >
              View Full Gallery
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>

          <div className="hidden gap-3 lg:grid lg:grid-cols-4 lg:gap-4">
            {galleryPhotos.map((photo, index) => (
              <Reveal
                forceMotion
                key={photo.src}
                delay={index * 0.08}
                distance={26}
                className="group relative aspect-square overflow-hidden border border-[color:var(--color-navy-900)]/10 bg-[color:var(--color-navy-950)] shadow-[0_18px_44px_rgba(11,31,59,0.12)]"
              >
                <Image
                  src={assetPath(photo.src)}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                  style={{ objectPosition: photo.position }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,28,61,0.03)_0%,rgba(7,28,61,0.18)_100%)]" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {isGalleryOverlayOpen ? (
        <GalleryExperience
          closeControl={
            <button
              type="button"
              aria-label="Close gallery"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-gold-500)]/42 text-[color:var(--color-navy-900)] transition hover:bg-[color:var(--color-gold-500)] hover:text-[color:var(--color-navy-950)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold-500)]"
              onClick={() => setIsGalleryOverlayOpen(false)}
            >
              <X className="h-4 w-4" strokeWidth={1.8} />
            </button>
          }
        />
      ) : null}

      <section
        id="global-reach"
        className="js-global-section relative overflow-hidden bg-[color:var(--color-navy-950)] text-white"
      >
        <div className="relative min-h-[25rem] sm:min-h-[31rem] lg:min-h-[42rem]">
          <div className="pointer-events-none absolute inset-0 lg:hidden">
            <Image
              src={assetPath("/images/global mobile.webp")}
              alt="Global route map and container port representing outbound connections from China"
              fill
              sizes="100vw"
              className="object-cover object-center opacity-[0.92] saturate-[0.82]"
            />
            <div className="absolute inset-0 bg-[rgba(7,28,61,0.34)] mix-blend-multiply" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,28,61,0.72)_0%,rgba(7,28,61,0.54)_58%,rgba(7,28,61,0.36)_100%)]" />
          </div>
          <div className="js-global-image pointer-events-none absolute inset-y-0 left-0 hidden w-[52%] overflow-hidden lg:block xl:w-[54%]">
            <Image
              src={assetPath("/images/global mobile.webp")}
              alt="Global route map and container port representing outbound connections from China"
              fill
              sizes="54vw"
              className="object-cover object-left opacity-62 saturate-[0.72]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,28,61,0.18)_0%,rgba(7,28,61,0.34)_58%,rgba(7,28,61,0.9)_100%)]" />
            <div className="absolute inset-0 bg-[rgba(7,28,61,0.2)] mix-blend-color" />
          </div>

          <div className="absolute inset-0 hidden lg:block lg:bg-[radial-gradient(circle_at_20%_34%,rgba(197,160,98,0.1),transparent_24%),linear-gradient(90deg,rgba(7,28,61,0.02)_0%,rgba(7,28,61,0.08)_42%,rgba(7,28,61,0.62)_58%,rgba(7,28,61,0.96)_78%,rgba(7,28,61,1)_100%)]" />

          <div className="relative z-10 mx-auto flex min-h-[25rem] w-full max-w-[var(--content-max)] items-center px-[var(--mobile-gutter)] py-8 sm:min-h-[31rem] sm:px-6 sm:py-10 lg:min-h-[42rem] lg:items-center lg:px-8 lg:py-12">
            <div className="max-w-[19rem] lg:ml-[47%] lg:max-w-[34rem] lg:translate-x-[0.4cm] xl:ml-[50%]">
              <p className="section-label mb-4 text-[0.68rem] tracking-[0.2em] lg:mb-5 lg:text-[0.86rem] lg:tracking-[0.24em]">GLOBAL REACH</p>
              <TextReveal forceMotion delay={0.08} distance={52}>
                <h2 className="js-global-line mobile-section-heading text-white lg:text-[clamp(2.35rem,4.2vw,4.15rem)]">
                  From China.
                </h2>
              </TextReveal>
              <TextReveal forceMotion className="mt-0.5 lg:mt-1" delay={0.16} distance={52}>
                <h2 className="js-global-line mobile-section-heading text-white lg:text-[clamp(2.35rem,4.2vw,4.15rem)] lg:leading-[0.9]">
                  <span className="text-[color:var(--color-gold-500)]">To The World.</span>
                </h2>
              </TextReveal>

              <TextReveal forceMotion delay={0.24} distance={24}>
                <p className="mobile-section-copy mt-5 max-w-[17.5rem] text-white/82 lg:mt-6 lg:max-w-[30rem] lg:text-[1rem] lg:font-normal lg:leading-8 lg:text-white/74">
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
                <span className="block">Business In <span className="text-[color:var(--color-gold-500)]">China</span></span>
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
                      Business In <span className="text-[color:var(--color-gold-500)]">China</span>
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
        className="js-promise-section mobile-section-pad relative overflow-hidden bg-[color:var(--color-navy-950)] text-white lg:flex lg:min-h-screen lg:items-center lg:py-[clamp(4rem,8vh,5.5rem)]"
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
                    className="!min-h-[2.65rem] whitespace-nowrap !gap-2 !px-3 !py-2 !text-[0.58rem] !tracking-[0.08em] lg:!min-h-12 lg:!gap-2.5 lg:!px-5 lg:!py-3 lg:!text-[0.68rem] lg:!tracking-[0.16em] border-[color:var(--color-gold-500)] !text-[color:var(--color-gold-500)] hover:!text-[color:var(--color-navy-950)]"
                  >
                    Start A Conversation
                  </CtaLink>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="contact" className="mobile-section-pad relative overflow-hidden bg-[color:var(--color-navy-950)] lg:flex lg:min-h-[100svh] lg:items-center lg:bg-[color:var(--color-surface)] lg:py-0">
        <div className="absolute inset-0 lg:hidden">
          <Image
            src={assetPath("/images/contact.webp")}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[58%_50%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,28,61,0.96)_0%,rgba(7,28,61,0.82)_54%,rgba(7,28,61,0.58)_100%)]" />
        </div>
        <Container className="relative z-10 w-full max-w-[var(--content-max)] lg:py-[clamp(3rem,6vh,4.5rem)]">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)] lg:gap-16">
            <div className="max-w-[42rem]">
              <p className="section-label mb-4 text-[0.68rem] tracking-[0.22em] lg:mb-5 lg:text-[0.86rem] lg:tracking-[0.24em]">LET&apos;S TALK BUSINESS</p>
              <TextReveal forceMotion delay={0.08} distance={58}>
                <h2 className="js-contact-line mobile-section-heading editorial-heading text-white lg:text-[color:var(--color-navy-900)]">
                  Ready To Start
                </h2>
              </TextReveal>
              <TextReveal forceMotion delay={0.14} distance={58}>
                <h2 className="js-contact-line mobile-section-heading editorial-heading text-white lg:text-[color:var(--color-navy-900)]">
                  A Conversation?
                </h2>
              </TextReveal>
              <TextReveal forceMotion delay={0.22} distance={24}>
                <p className="mobile-section-copy mt-5 max-w-[21rem] text-white/82 lg:mt-6 lg:max-w-[34rem] lg:text-[1rem] lg:leading-8 lg:text-[color:var(--color-slate-700)]">
                  Share your requirement with our team and let&apos;s explore the
                  right solution together.
                </p>
              </TextReveal>

              <Reveal forceMotion className="mt-7 lg:mt-8" delay={0.3} distance={20}>
                <div className="flex max-w-full flex-col items-start gap-2.5 sm:flex-row sm:flex-wrap">
                  <div>
                  <CtaLink href="/contact" variant="secondary" className="!min-h-[2.65rem] w-[11.75rem] !justify-start whitespace-nowrap !gap-2 !border-[color:var(--color-navy-900)] !bg-[color:var(--color-navy-900)] !px-3 !py-2 !text-[0.58rem] !text-white !tracking-[0.08em] hover:!border-[color:var(--color-navy-950)] hover:!bg-[color:var(--color-navy-950)] sm:w-auto sm:justify-center lg:!min-h-12 lg:!gap-2.5 lg:!px-5 lg:!py-3 lg:!text-[0.68rem] lg:!tracking-[0.16em]">
                    WhatsApp
                  </CtaLink>
                </div>
                  <div>
                  <CtaLink
                    href="mailto:info@rongxingtrading.com"
                    variant="secondary"
                    className="!min-h-[2.65rem] w-[11.75rem] !justify-start whitespace-nowrap !gap-2 !border-[color:var(--color-gold-500)] !bg-[color:var(--color-gold-500)] !px-3 !py-2 !text-[0.58rem] !text-[color:var(--color-navy-950)] !tracking-[0.08em] hover:!border-[color:var(--color-gold-600)] hover:!bg-[color:var(--color-gold-600)] sm:w-auto sm:justify-center lg:!min-h-12 lg:!gap-2.5 lg:!px-5 lg:!py-3 lg:!text-[0.68rem] lg:!tracking-[0.16em]"
                  >
                    Email Us
                  </CtaLink>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="relative hidden h-[min(70vh,42rem)] min-h-[32rem] overflow-hidden lg:block">
              <Image
                src={assetPath("/images/contact.webp")}
                alt="Guangzhou waterfront and industrial skyline"
                fill
                sizes="(min-width: 1024px) 52vw, 0vw"
                className="object-cover object-[58%_50%]"
              />
            </div>
          </div>
        </Container>
      </section>
      <BackToTopButton />
    </div>
  );
}
