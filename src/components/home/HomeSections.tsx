"use client";

import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CarFront,
  Factory,
  Handshake,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";

import { useDesktopGsap } from "@/hooks/use-desktop-gsap";
import { CtaLink } from "@/components/ui/CtaLink";
import { Container } from "@/components/ui/Container";
import { cn } from "@/utils/cn";

gsap.registerPlugin(ScrollTrigger);

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
    icon: Building2,
  },
  {
    number: "02",
    title: "Electric Vehicle Trading",
    description:
      "Flexible sourcing and export solutions from individual vehicles to large-scale international orders.",
    icon: CarFront,
  },
  {
    number: "03",
    title: "International Brand Representation",
    description:
      "Connecting international brands with the right markets, partners, distributors and commercial opportunities.",
    icon: Handshake,
  },
  {
    number: "04",
    title: "Industrial Solutions",
    description:
      "Production lines, machinery, equipment and integrated solutions for establishing and developing manufacturing operations.",
    icon: Factory,
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

const desktopStickyColumnClass = "lg:sticky lg:top-28 lg:self-start";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

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
      <p className="js-detailed-label section-label mb-4">{label}</p>
      <div className="overflow-hidden">
        <h2
          className={cn(
            "js-detailed-line section-heading",
            dark ? "text-white" : "text-[color:var(--color-navy-900)]"
          )}
        >
          {title}
        </h2>
      </div>
      {subtitle ? (
        <p
          className={cn(
            "js-detailed-copy mt-5 max-w-[38rem] text-[1rem] leading-8",
            dark ? "text-white/74" : "text-[color:var(--color-slate-700)]"
          )}
        >
          {subtitle}
        </p>
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
          <span className="text-[0.92rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-gold-500)]">
            {item.number}
          </span>
          <Icon
            className="h-4.5 w-4.5 text-[color:var(--color-gold-500)]/86 sm:h-5 sm:w-5"
            strokeWidth={1.5}
          />
        </div>
        <h3 className="mt-5 max-w-[16ch] text-[1.08rem] font-semibold uppercase leading-[1.08] tracking-[-0.02em] text-white sm:text-[1.14rem]">
          {item.title}
        </h3>
        <p className="mt-4 max-w-[18rem] text-[0.86rem] leading-6 text-white/68 sm:text-[0.9rem]">
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
    <article className="relative flex h-[15.8rem] flex-col overflow-hidden border border-white/12 bg-white/[0.02] px-5 py-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,98,0.08),transparent_42%)]" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <span className="text-[0.88rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-gold-500)]">
            {item.number}
          </span>
          <Icon
            className="h-4.5 w-4.5 text-[color:var(--color-gold-500)]/84"
            strokeWidth={1.45}
          />
        </div>
        <h3 className="mt-4 max-w-[14ch] text-[1.02rem] font-semibold uppercase leading-[1.06] tracking-[-0.02em] text-white">
          {item.title}
        </h3>
        <p className="mt-3 max-w-[17rem] text-[0.9rem] leading-6 text-white/68">
          {item.description}
        </p>
        <div className="mt-auto pt-5">
          <ArrowRight className="h-4 w-4 text-[color:var(--color-gold-500)]" />
        </div>
      </div>
    </article>
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
  const promiseSectionRef = useRef<HTMLElement | null>(null);
  const solutionsCarouselRef = useRef<HTMLDivElement | null>(null);
  const solutionDragStartXRef = useRef(0);
  const solutionDragOffsetRef = useRef(0);
  const solutionIsDraggingRef = useRef(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [solutionCarouselIndex, setSolutionCarouselIndex] = useState(0);
  const [isSolutionDragging, setIsSolutionDragging] = useState(false);
  const [detailedDesktopIndex, setDetailedDesktopIndex] = useState(0);

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
    if (!isMobileViewport || prefersReducedMotion || isSolutionDragging) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      resetSolutionDragOffset();
      setSolutionCarouselIndex((current) => (current + 1) % solutionCards.length);
    }, 4800);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isMobileViewport, solutionCarouselIndex, prefersReducedMotion, isSolutionDragging]);

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

    createIntroTimeline({
      trigger: ".js-vision-section",
      label: ".js-vision-label",
      lines: ".js-vision-line",
      copy: ".js-vision-copy",
      start: "top 76%",
      lineDuration: 0.78,
    });

    createIntroTimeline({
      trigger: ".js-objectives-section",
      label: ".js-objectives-label",
      lines: ".js-objectives-line",
      copy: ".js-objectives-copy",
      start: "top 80%",
      lineDuration: 0.72,
    });

    createIntroTimeline({
      trigger: "#solutions",
      label: ".js-solutions-label",
      lines: ".js-solutions-line",
      copy: ".js-solutions-copy",
      start: "top 80%",
      lineDuration: 0.7,
    });

    createIntroTimeline({
      trigger: ".js-detailed-solutions-section",
      label: ".js-detailed-label",
      lines: ".js-detailed-line",
      copy: ".js-detailed-copy",
      start: "top 80%",
      lineDuration: 0.72,
    });

    createIntroTimeline({
      trigger: "#why-rong-xing",
      label: ".js-why-label",
      lines: ".js-why-line",
      copy: ".js-why-copy",
      start: "top 78%",
      lineDuration: 0.74,
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

    createIntroTimeline({
      trigger: ".js-global-section",
      label: ".js-global-label",
      lines: ".js-global-line",
      copy: ".js-global-copy",
      start: "top 74%",
      lineDuration: 0.78,
    });

    createIntroTimeline({
      trigger: "#contact",
      label: ".js-contact-label",
      lines: ".js-contact-line",
      copy: ".js-contact-copy",
      extras: ".js-contact-primary, .js-contact-secondary",
      start: "top 80%",
      lineDuration: 0.76,
    });

  }, []);

  useDesktopGsap(rootRef, setupDesktopAnimations);

  useLayoutEffect(() => {
    const section = promiseSectionRef.current;

    if (!section) {
      return;
    }

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      gsap.set(".js-promise-label", {
        opacity: 0,
        y: prefersReducedMotion ? 8 : 20,
      });
      gsap.set(".js-promise-line", {
        yPercent: prefersReducedMotion ? 42 : 118,
        opacity: 0,
        y: prefersReducedMotion ? 10 : 28,
        filter: prefersReducedMotion ? "blur(0px)" : "blur(8px)",
      });
      gsap.set(".js-promise-cta", {
        opacity: 0,
        y: prefersReducedMotion ? 8 : 18,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        })
        .to(
          ".js-promise-label",
          {
            opacity: 1,
            y: 0,
            duration: prefersReducedMotion ? 0.36 : 0.55,
            ease: "power2.out",
          }
        )
        .to(
          ".js-promise-line",
          {
            yPercent: 0,
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: prefersReducedMotion ? 0.56 : 0.92,
            ease: "power3.out",
            stagger: prefersReducedMotion ? 0.08 : 0.12,
          },
          "-=0.12"
        )
        .to(
          ".js-promise-cta",
          {
            opacity: 1,
            y: 0,
            duration: prefersReducedMotion ? 0.38 : 0.6,
            ease: "power2.out",
          },
          "-=0.08"
        );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    const intro = objectivesIntroRef.current;
    const area = objectivesAreaRef.current;
    const progress = objectivesProgressRef.current;

    if (!intro || !area || !progress) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isMobileViewport) {
      const rows = Array.from(area.querySelectorAll(".js-objective-item")) as HTMLDivElement[];

      const ctx = gsap.context(() => {
        if (prefersReducedMotion) {
          gsap.set(progress, { scaleY: 1, transformOrigin: "top center" });

          rows.forEach((row) => {
            const dot = row.querySelector(".js-objective-mobile-dot");
            const number = row.querySelector(".js-objective-mobile-number");
            const title = row.querySelector(".js-objective-mobile-title");
            const copy = row.querySelector(".js-objective-mobile-copy");

            gsap.set(dot, {
              scale: 1,
              backgroundColor: "var(--color-gold-500)",
              boxShadow: "0 0 0 rgba(197,160,98,0)",
            });
            gsap.set(number, { opacity: 1, scale: 1, y: 0 });
            gsap.set(title, { yPercent: 0, opacity: 1 });
            gsap.set(copy, { opacity: 1, y: 0 });
          });
          return;
        }

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
          const dot = row.querySelector(".js-objective-mobile-dot");
          const number = row.querySelector(".js-objective-mobile-number");
          const title = row.querySelector(".js-objective-mobile-title");
          const copy = row.querySelector(".js-objective-mobile-copy");

          gsap.set(number, { opacity: 0.45, scale: 0.8, y: 10 });
          gsap.set(title, { yPercent: 108, opacity: 0 });
          gsap.set(copy, { opacity: 0, y: 16 });
          gsap.set(dot, {
            scale: 0.72,
            backgroundColor: "rgba(197,160,98,0.2)",
            boxShadow: "0 0 0 rgba(197,160,98,0)",
          });

          gsap.to(number, {
            opacity: 1,
            scale: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top 72%",
              end: "top 44%",
              scrub: 1,
            },
          });

          gsap.to(title, {
            yPercent: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top 68%",
              end: "top 38%",
              scrub: 1,
            },
          });

          gsap.to(copy, {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top 62%",
              end: "top 34%",
              scrub: 1,
            },
          });

          gsap.to(dot, {
            scale: 1,
            backgroundColor: "var(--color-gold-500)",
            boxShadow: "0 0 14px rgba(197,160,98,0.34)",
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top 66%",
              end: "top 38%",
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
      gsap.set(intro, { opacity: 1, y: 0 });

      const rows = gsap.utils.toArray<HTMLElement>(
        desktopStage.querySelectorAll("[data-objective-desktop-row]")
      );
      const progressRail = desktopStage.querySelector<HTMLElement>(
        "[data-objective-progress]"
      );
      const markers = gsap.utils.toArray<HTMLElement>(
        desktopStage.querySelectorAll("[data-objective-marker]")
      );

      if (prefersReducedMotion) {
        gsap.set(rows, { opacity: 1, y: 0, x: 0, scale: 1 });
        if (progressRail) {
          gsap.set(progressRail, { scaleY: 1, transformOrigin: "top center" });
        }
        markers.forEach((marker) => {
          gsap.set(marker, {
            scale: 1,
            backgroundColor: "var(--color-gold-500)",
          });
        });
        return;
      }

      gsap.set(rows, {
        opacity: 0,
        y: 34,
        x: 34,
        scale: 0.985,
      });

      // First objective is already visible when the pinned section starts.
      gsap.set(rows[0], {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      });

      if (progressRail) {
        gsap.set(progressRail, {
          scaleY: 0,
          transformOrigin: "top center",
        });
      }

      markers.forEach((marker, index) => {
        gsap.set(marker, {
          scale: index === 0 ? 1.35 : 0.78,
          backgroundColor:
            index === 0
              ? "var(--color-gold-500)"
              : "rgba(3,20,39,0.18)",
        });
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.max(window.innerHeight * 0.95, 720)}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.7,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      if (progressRail) {
        timeline.to(
          progressRail,
          {
            scaleY: 1,
            ease: "none",
            duration: strategicObjectives.length - 1,
          },
          0
        );
      }

      // Reveal 02 -> 05 one by one. Previous rows remain visible.
      rows.slice(1).forEach((row, rowIndex) => {
        const step = rowIndex + 1;

        timeline.to(
          row,
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 0.62,
            ease: "power2.out",
          },
          step - 0.35
        );

        const marker = markers[step];
        if (marker) {
          timeline.to(
            marker,
            {
              scale: 1.35,
              backgroundColor: "var(--color-gold-500)",
              duration: 0.28,
              ease: "power2.out",
            },
            step - 0.32
          );
        }

        const previousMarker = markers[step - 1];
        if (previousMarker) {
          timeline.to(
            previousMarker,
            {
              scale: 1,
              duration: 0.24,
              ease: "power2.out",
            },
            step - 0.3
          );
        }
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, [isMobileViewport, prefersReducedMotion]);

  useEffect(() => {
    const section = detailedSectionRef.current;
    const stage = detailedDesktopRef.current;

    if (!section || !stage || isMobileViewport) {
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${Math.max(window.innerHeight * 1.35, 860)}`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const raw = self.progress * detailedSolutions.length;
          const nextIndex = Math.min(
            detailedSolutions.length - 1,
            Math.floor(raw)
          );

          setDetailedDesktopIndex((current) =>
            current === nextIndex ? current : nextIndex
          );
        },
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, [isMobileViewport]);


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

    gsap.fromTo(
      card,
      { opacity: 0, y: 24, scale: 0.99 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: prefersReducedMotion ? 0.2 : 0.5,
        ease: "power3.out",
        overwrite: true,
      }
    );
  }, [detailedDesktopIndex, isMobileViewport, prefersReducedMotion]);

  return (
    <div ref={rootRef}>
      <section
        id="about"
        className="js-about-section relative overflow-hidden bg-[linear-gradient(180deg,#f6f2ed_0%,#f8f5f0_100%)] py-[clamp(2.1rem,7vw,3.2rem)] lg:py-[calc(var(--section-space)*0.92)]"
      >
        <Container className="w-full max-w-[var(--content-max)] px-[var(--mobile-gutter)] sm:px-6 lg:block lg:px-8">
          <div className="grid w-full gap-[clamp(1.6rem,5vw,2.5rem)] lg:grid-cols-2 lg:items-stretch lg:gap-12 xl:gap-16">
            <div className="relative flex h-full max-w-[33rem] flex-col pt-1 lg:pt-6">
              <div className="pointer-events-none absolute left-[-1.25rem] top-[4.2rem] hidden h-[16rem] w-px bg-[linear-gradient(180deg,rgba(197,160,98,0.18),rgba(197,160,98,0))] lg:block" />
              <p className="js-about-label section-label mb-[clamp(1rem,4vw,1.75rem)] text-[clamp(0.78rem,3vw,0.9rem)] tracking-[0.24em]">RONG XING</p>
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <div className="overflow-hidden">
                    <h2 className="js-about-line font-serif text-[clamp(3.65rem,15vw,4.9rem)] uppercase leading-[0.9] tracking-[-0.065em] text-[color:var(--color-navy-900)]">
                      One Company.
                    </h2>
                  </div>
                  <div className="overflow-hidden">
                    <h2 className="js-about-line font-serif text-[clamp(3.65rem,15vw,4.9rem)] uppercase leading-[0.9] tracking-[-0.065em] text-[color:var(--color-navy-900)]">
                      Multiple Solutions.
                    </h2>
                  </div>
                  <div className="overflow-hidden">
                    <h2 className="js-about-line font-serif text-[clamp(3.65rem,15vw,4.9rem)] uppercase leading-[0.9] tracking-[-0.065em] text-[color:var(--color-gold-500)]">
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
                  <p className="js-about-copy prose-copy max-w-[19.5rem] text-[clamp(0.98rem,3.9vw,1.08rem)] leading-[1.95] sm:max-w-[24rem] lg:max-w-[31rem]">
                    From sourcing a single product to establishing complete
                    industrial operations,
                    <br />
                    RONG XING connects your requirements with the right
                    resources in China.
                  </p>
                </div>

                <div className="js-about-support mt-[clamp(1.9rem,7vw,2.6rem)] max-w-[19.5rem] border-t border-[color:var(--color-gold-500)]/18 pt-[clamp(1rem,3.5vw,1.2rem)] sm:max-w-[24rem] sm:mt-0 lg:max-w-[26rem]">
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
            <div className="js-image-mask relative left-1/2 min-h-[25rem] w-screen -translate-x-1/2 overflow-hidden sm:min-h-[29rem] lg:left-auto lg:min-h-[37rem] lg:w-auto lg:translate-x-0">
              <div className="js-vision-image absolute inset-0">
                <Image
                  src="/images/about us.png"
                  alt="Modern Guangzhou skyline and commercial district"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover object-[46%_50%] lg:object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,20,39,0.06)_0%,rgba(3,20,39,0.14)_58%,rgba(3,20,39,0.24)_100%)] lg:bg-[linear-gradient(90deg,rgba(3,20,39,0.28)_0%,rgba(3,20,39,0.08)_40%,rgba(3,20,39,0.32)_100%)]" />
              </div>
            </div>

            <div className="relative bg-[color:var(--color-navy-950)] px-[var(--mobile-gutter)] py-[clamp(2.5rem,8vw,3.6rem)] lg:min-h-[37rem] lg:bg-transparent lg:px-0 lg:py-0 lg:pl-10 xl:pl-14">
              <div className="relative flex h-full min-h-[25rem] flex-col justify-center sm:min-h-[32rem] lg:min-h-[37rem] lg:p-1">
                <p className="js-vision-label section-label mb-[clamp(1.1rem,4vw,1.6rem)] text-[clamp(0.82rem,3.1vw,0.9rem)] tracking-[0.24em]">OUR VISION</p>
                <div className="overflow-hidden">
                  <h2 className="js-vision-line font-serif text-[clamp(3.2rem,13vw,4.35rem)] uppercase leading-[0.9] tracking-[-0.055em] text-white">
                    Connecting China
                  </h2>
                </div>
                <div className="mt-[clamp(0.45rem,2vw,0.6rem)] overflow-hidden">
                  <h2 className="js-vision-line text-[clamp(3.35rem,13.6vw,4.35rem)] font-semibold uppercase leading-[0.9] tracking-[-0.055em] text-[color:var(--color-gold-500)]">
                    With The World.
                  </h2>
                </div>
                <p className="js-vision-copy mt-[clamp(1.8rem,6vw,2.3rem)] max-w-[19rem] text-[clamp(1rem,4vw,1.08rem)] leading-[1.95] text-white/82 sm:max-w-[23rem] lg:max-w-[31rem] lg:text-[0.98rem] lg:leading-8 lg:text-white/72">
                  To provide smart and fast solutions that connect China with
                  the world across industries, creating seamless opportunities
                  for international trade, collaboration, and long-term growth.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        ref={objectivesSectionRef}
        className="js-objectives-section bg-[color:var(--color-surface)] py-[var(--section-space)] lg:min-h-screen lg:py-[calc(var(--section-space)*0.56)]"
      >
        <Container className="max-w-[var(--content-max)]">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-14">
            <div ref={objectivesIntroRef} className={cn("js-objectives-intro", desktopStickyColumnClass)}>
              <p className="js-objectives-label section-label mb-4">STRATEGIC OBJECTIVES</p>
              <div className="overflow-hidden md:hidden">
                <h2 className="js-objectives-line section-heading text-[color:var(--color-navy-900)]">
                  How We Think About
                </h2>
              </div>
              <div className="mt-1 overflow-hidden md:hidden">
                <h2 className="js-objectives-line section-heading text-[color:var(--color-navy-900)]">
                  Long-Term
                  <span className="text-[color:var(--color-gold-500)]"> Execution.</span>
                </h2>
              </div>
              <div className="hidden overflow-hidden md:block">
                <h2 className="js-objectives-line section-heading text-[color:var(--color-navy-900)]">
                  How We Think About
                </h2>
              </div>
              <div className="hidden overflow-hidden md:block">
                <h2 className="js-objectives-line section-heading text-[color:var(--color-navy-900)]">
                  Long-Term Execution.
                </h2>
              </div>
              <p className="js-objectives-copy mt-4 max-w-[22rem] text-[0.98rem] leading-7 text-[color:var(--color-slate-700)] md:mt-5 md:max-w-[38rem] md:text-[1rem] md:leading-8">
                A solutions-led business model built around clarity, flexibility, and trusted partnership.
              </p>
            </div>

            <div ref={objectivesAreaRef} className="relative grid gap-10 md:gap-14 lg:gap-18">
              {!isMobileViewport ? (
                <div
                  ref={objectivesDesktopRef}
                  className="relative flex min-h-[31rem] items-center pr-10 lg:min-h-[34rem]"
                >
                  <div className="absolute right-2 top-1/2 hidden h-[78%] w-px -translate-y-1/2 bg-[color:var(--color-navy-900)]/10 xl:block">
                    <div
                      data-objective-progress
                      className="absolute left-0 top-0 h-full w-px origin-top bg-[color:var(--color-gold-500)]"
                      style={{ transform: "scaleY(0)" }}
                    />
                    {strategicObjectives.map((objective, index) => (
                      <span
                        key={objective.number}
                        data-objective-marker={index}
                        className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full"
                        style={{
                          top: `${(index / (strategicObjectives.length - 1)) * 100}%`,
                        }}
                      />
                    ))}
                  </div>

                  <div className="grid w-full gap-4 xl:gap-5">
                    {strategicObjectives.map((objective) => (
                      <article
                        key={objective.number}
                        data-objective-desktop-row
                        className="relative grid grid-cols-[4.8rem_minmax(0,1fr)] items-start gap-6 border-b border-[color:var(--color-border)]/80 pb-4 last:border-b-0 last:pb-0 xl:grid-cols-[5.3rem_minmax(0,1fr)] xl:gap-7 xl:pb-5"
                      >
                        <div>
                          <p className="font-serif text-[clamp(2.8rem,4.2vw,4rem)] leading-[0.86] tracking-[-0.08em] text-[color:var(--color-gold-500)]">
                            {objective.number}
                          </p>
                          <div className="mt-3 h-px w-12 bg-[color:var(--color-gold-500)]/70" />
                        </div>

                        <div className="pt-1">
                          <h3 className="max-w-[24ch] text-[clamp(1.15rem,1.6vw,1.55rem)] font-semibold uppercase leading-[1.02] tracking-[-0.035em] text-[color:var(--color-navy-900)]">
                            {objective.title}
                          </h3>
                          <p className="mt-2 max-w-[34rem] text-[0.9rem] leading-6 text-[color:var(--color-slate-700)] xl:text-[0.94rem] xl:leading-7">
                            {objective.description}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <div className="absolute bottom-4 left-[1rem] top-3 w-px bg-[color:var(--color-gold-500)]/14 md:hidden" />
                  <div
                    ref={objectivesProgressRef}
                    className="absolute bottom-4 left-[1rem] top-3 w-px origin-top bg-[color:var(--color-gold-500)] md:hidden"
                    style={{ transform: "scaleY(0)" }}
                  />
                  <div className="absolute bottom-0 right-[0.35rem] top-2 hidden w-px bg-[color:var(--color-navy-900)]/10 md:block" />
                  <div
                    className="absolute bottom-0 right-[0.35rem] top-2 hidden w-px origin-top bg-[color:var(--color-gold-500)] md:block"
                    style={{ transform: "scaleY(0)" }}
                  />

                  {strategicObjectives.map((objective, index) => (
                    <div
                      key={objective.number}
                      className={cn(
                        "js-objective-item relative grid gap-4 pl-10 md:grid-cols-[5.75rem_minmax(0,1fr)] md:gap-8 md:pl-0 lg:hidden",
                        index % 2 === 1 ? "lg:ml-12" : "lg:mr-12"
                      )}
                    >
                      <div className="absolute left-[0.62rem] top-[0.7rem] flex flex-col items-center md:hidden">
                        <span className="js-objective-mobile-dot block h-3 w-3 rounded-full border border-[color:var(--color-gold-500)]/70 bg-[color:var(--color-gold-500)]/20" />
                      </div>

                      <div className="md:hidden">
                        <div className="grid grid-cols-[2.4rem_minmax(0,1fr)] items-start gap-x-3">
                          <p className="js-objective-mobile-number font-serif text-[3rem] leading-[0.84] tracking-[-0.08em] text-[color:var(--color-gold-500)]">
                            {objective.number}
                          </p>
                          <div className="min-w-0 overflow-hidden pt-[0.05rem]">
                            <h3 className="js-objective-mobile-title text-[1.12rem] font-semibold uppercase leading-[1] tracking-[-0.035em] text-[color:var(--color-navy-900)]">
                              {objective.title}
                            </h3>
                          </div>
                        </div>
                        <p className="js-objective-mobile-copy mt-3 max-w-[20rem] text-[0.96rem] leading-7 text-[color:var(--color-slate-700)]">
                          {objective.description}
                        </p>
                      </div>

                      <div className="relative pt-2">
                        <div className="js-objective-ghost pointer-events-none absolute left-0 top-[-1.1rem] hidden text-[6.5rem] font-semibold leading-none tracking-[-0.08em] text-[color:var(--color-gold-500)]/[0.06] lg:block">
                          {objective.number}
                        </div>
                        <div className="relative z-10 hidden pb-2 md:block">
                          <p className="js-objective-number text-[4.25rem] font-serif leading-[0.84] tracking-[-0.08em] text-[color:var(--color-gold-500)]">
                            {objective.number}
                          </p>
                        </div>
                      </div>

                      <div className="js-objective-body hidden pt-2 md:block">
                        <div className="overflow-hidden py-2">
                          <h3 className="js-objective-title text-[1.45rem] font-semibold uppercase leading-[1.02] tracking-[-0.04em] text-[color:var(--color-navy-900)]">
                            {objective.title}
                          </h3>
                        </div>
                        <p className="js-objective-copy mt-5 max-w-[34rem] text-[0.98rem] leading-8 text-[color:var(--color-slate-700)]">
                          {objective.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section
        id="solutions"
        className="min-h-svh bg-[color:var(--color-navy-950)] py-[clamp(3.4rem,4.6vw,5.4rem)] text-white md:min-h-0"
      >
        <Container className="max-w-[var(--content-max)]">
          <div className="max-w-[40rem]">
            <p className="js-solutions-label section-label mb-4">OUR SOLUTIONS</p>
            <div className="overflow-hidden">
              <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-semibold uppercase leading-[0.94] tracking-[-0.045em] text-white">
                <span className="js-solutions-line block">One Partner.</span>
                <span className="js-solutions-line block">Four Core Capabilities.</span>
              </h2>
            </div>
            <p className="js-solutions-copy mt-4 max-w-[34rem] text-[0.96rem] leading-7 text-white/74">
              Integrated business solutions built around your requirements.
            </p>
          </div>

          <div
            className="mt-8 md:hidden"
            ref={solutionsCarouselRef}
            style={
              {
                "--solution-card-gap": "0.5rem",
                "--solution-side-padding": "0.5rem",
                "--solution-slide-width": "calc(100% - 1rem)",
                "--solution-drag-offset": "0px",
              } as CSSProperties
            }
          >
            <div className="overflow-hidden px-[var(--solution-side-padding)]">
              <div
                className="flex gap-[var(--solution-card-gap)] will-change-transform"
                style={{
                  transform: `translateX(calc(-${solutionCarouselIndex} * (var(--solution-slide-width) + var(--solution-card-gap)) + var(--solution-drag-offset)))`,
                  transition:
                    prefersReducedMotion || isSolutionDragging
                      ? "none"
                      : "transform 680ms cubic-bezier(0.22, 0.61, 0.36, 1)",
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

            <div className="mt-4 flex items-center justify-center gap-5">
              <button
                type="button"
                aria-label="Previous solution"
                disabled={solutionCarouselIndex === 0}
                className="flex h-9 w-9 items-center justify-center border border-white/12 text-white/82 transition hover:border-[color:var(--color-gold-500)] hover:text-[color:var(--color-gold-500)] disabled:cursor-default disabled:border-white/8 disabled:text-white/24"
                onClick={() => moveSolutionCarousel(-1)}
              >
                {"\u2190"}
              </button>

              <div className="flex items-center gap-2">
                {solutionCards.map((item, index) => (
                  <button
                    key={item.number}
                    type="button"
                    aria-label={`Go to solution ${item.number}`}
                    aria-pressed={activeSolutionIndex === index}
                    className={cn(
                      "h-2.5 w-2.5 rounded-full border transition",
                      activeSolutionIndex === index
                        ? "border-[color:var(--color-gold-500)] bg-[color:var(--color-gold-500)]"
                        : "border-white/28 bg-transparent"
                    )}
                    onClick={() => jumpToSolution(index)}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Next solution"
                className="flex h-9 w-9 items-center justify-center border border-white/12 text-white/82 transition hover:border-[color:var(--color-gold-500)] hover:text-[color:var(--color-gold-500)]"
                onClick={() => moveSolutionCarousel(1)}
              >
                {"\u2192"}
              </button>
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
        className="js-detailed-solutions-section bg-white py-[var(--section-space)] lg:min-h-screen lg:py-[calc(var(--section-space)*0.56)]"
      >
        <Container className="max-w-[var(--content-max)]">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-14">
            <div className={desktopStickyColumnClass}>
              <SectionTitle
                label="DETAILED SOLUTIONS"
                title="Built To Match The Scale Of The Requirement."
                subtitle="A four-part business platform designed to move from inquiry to execution with precision."
              />
            </div>

            {isMobileViewport ? (
              <div className="grid gap-6 lg:hidden">
                {detailedSolutions.map((solution) => (
                  <article
                    key={solution.number}
                    className="js-reveal-scale border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/58 p-6 sm:p-8"
                  >
                    <div className="grid gap-6 xl:grid-cols-[5.5rem_minmax(0,1fr)]">
                      <div className="text-[2.5rem] font-serif leading-none tracking-[-0.05em] text-[color:var(--color-gold-500)]">
                        {solution.number}
                      </div>
                      <div>
                        <h3 className="text-[1.8rem] font-semibold uppercase leading-[1.02] tracking-[-0.04em] text-[color:var(--color-navy-900)]">
                          {solution.title}
                        </h3>
                        <p className="mt-4 text-[1rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-gold-500)]">
                          {solution.statement}
                        </p>
                        <div className="mt-5 space-y-4">
                          {solution.description.map((paragraph) => (
                            <p
                              key={paragraph}
                              className="text-[0.98rem] leading-8 text-[color:var(--color-slate-700)]"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                          {solution.highlights.map((highlight) => (
                            <div
                              key={highlight}
                              className="flex items-start gap-3 border-t border-[color:var(--color-border)] pt-3"
                            >
                              <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-[color:var(--color-gold-500)]" />
                              <p className="text-[0.86rem] leading-6 text-[color:var(--color-navy-900)]">
                                {highlight}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div
                ref={detailedDesktopRef}
                className="relative flex min-h-[31rem] items-center lg:min-h-[34rem]"
              >
                <article
                  key={detailedSolutions[detailedDesktopIndex].number}
                  data-detailed-active-card
                  className="w-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/58 p-8 xl:p-10"
                >
                  <div className="grid gap-8 xl:grid-cols-[5.5rem_minmax(0,1fr)]">
                    <div className="text-[2.8rem] font-serif leading-none tracking-[-0.05em] text-[color:var(--color-gold-500)]">
                      {detailedSolutions[detailedDesktopIndex].number}
                    </div>

                    <div>
                      <h3 className="text-[1.95rem] font-semibold uppercase leading-[1.02] tracking-[-0.04em] text-[color:var(--color-navy-900)]">
                        {detailedSolutions[detailedDesktopIndex].title}
                      </h3>

                      <div className="mt-4 h-px w-full bg-[color:var(--color-gold-500)]/40" />

                      <p className="mt-4 text-[1rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-gold-500)]">
                        {detailedSolutions[detailedDesktopIndex].statement}
                      </p>

                      <div className="mt-5 max-w-[42rem] space-y-4">
                        {detailedSolutions[detailedDesktopIndex].description.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-[0.98rem] leading-8 text-[color:var(--color-slate-700)]"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        {detailedSolutions[detailedDesktopIndex].highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-start gap-3 border-t border-[color:var(--color-border)] pt-3"
                          >
                            <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-[color:var(--color-gold-500)]" />
                            <p className="text-[0.86rem] leading-6 text-[color:var(--color-navy-900)]">
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            )}
          </div>
        </Container>
      </section>

      <section
        id="global-reach"
        className="js-global-section relative overflow-hidden text-white"
      >
        <div className="relative min-h-[29rem] sm:min-h-[34rem] lg:min-h-[42rem]">
          <div className="js-global-image absolute inset-0">
            <Image
              src="/images/global.png"
              alt="Global route map representing outbound connections from China"
              fill
              sizes="100vw"
              className="object-cover object-[20%_48%] opacity-95"
            />
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_32%,rgba(197,160,98,0.08),transparent_24%),linear-gradient(90deg,rgba(2,13,29,0.12)_0%,rgba(2,13,29,0.06)_18%,rgba(2,13,29,0.2)_42%,rgba(2,13,29,0.58)_66%,rgba(2,13,29,0.88)_100%)]" />

          <div className="relative z-10 mx-auto flex min-h-[29rem] w-full max-w-[var(--content-max)] items-end px-5 py-8 sm:min-h-[34rem] sm:px-6 sm:py-10 lg:min-h-[42rem] lg:items-center lg:px-8 lg:py-12">
            <div className="max-w-[33rem] lg:ml-[47%] lg:max-w-[34rem] xl:ml-[50%]">
              <p className="js-global-label section-label mb-5">GLOBAL REACH</p>
              <div className="overflow-hidden">
                <h2 className="js-global-line text-[clamp(2.7rem,5vw,5rem)] font-semibold uppercase leading-[0.9] tracking-[-0.055em] text-white">
                  From China.
                </h2>
              </div>
              <div className="mt-1 overflow-hidden">
                <h2 className="js-global-line font-serif text-[clamp(2.7rem,5vw,5rem)] uppercase leading-[0.9] tracking-[-0.055em] text-[color:var(--color-gold-500)]">
                  To The World.
                </h2>
              </div>

              <p className="js-global-copy mt-6 max-w-[30rem] text-[1rem] leading-8 text-white/74">
                Connecting international businesses with manufacturers,
                suppliers, technologies, services, and opportunities across
                China.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="why-rong-xing" className="bg-[color:var(--color-surface)] py-[var(--section-space)]">
        <Container className="max-w-[var(--content-max)]">
          <div className="relative grid gap-14 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:items-stretch lg:gap-16">
            <div className="relative flex h-full max-w-[31rem] flex-col">
              <p className="js-why-label section-label relative z-10 mb-5">
                WHY RONG XING
              </p>
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <div className="relative z-10 overflow-hidden">
                    <h2 className="js-why-line section-heading max-w-[26rem] text-[color:var(--color-navy-900)]">
                      Built To Make
                    </h2>
                  </div>
                  <div className="relative z-10 overflow-hidden">
                    <h2 className="js-why-line section-heading max-w-[26rem] text-[color:var(--color-navy-900)]">
                      Business In China
                    </h2>
                  </div>
                  <div className="relative z-10 overflow-hidden">
                    <h2 className="js-why-line section-heading max-w-[26rem] text-[color:var(--color-navy-900)]">
                      Simpler.
                    </h2>
                  </div>
                </div>

                <p className="js-why-copy relative z-10 mt-6 max-w-[25rem] text-[1rem] leading-8 text-[color:var(--color-slate-700)] lg:mt-10">
                  Disciplined local access, practical judgment, and responsive execution for international requirements in China.
                </p>
              </div>
            </div>

            <div className="relative h-full">
              <div className="relative z-10 flex h-full flex-col justify-between divide-y divide-[color:var(--color-border)]/85 border-y border-[color:var(--color-border)]/85">
                {whyItems.map((item, index) => (
                  <article
                    key={item.title}
                    className="js-reveal-up group grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-5 py-5 transition-[padding,color] duration-300 hover:py-6"
                  >
                    <div className="pt-0.5 text-[1.55rem] font-semibold leading-none tracking-[-0.04em] text-[color:var(--color-navy-900)]/34 transition-all duration-300 group-hover:scale-[1.06] group-hover:text-[color:var(--color-gold-500)]">
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
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        ref={promiseSectionRef}
        className="js-promise-section relative overflow-hidden bg-[color:var(--color-navy-950)] py-[calc(var(--section-space)*0.95)] text-white"
      >
        <Container className="relative z-[2] max-w-[var(--content-max)]">
          <div className="mx-auto max-w-[50rem] text-center">
            <p className="js-promise-label section-label mb-5">OUR PROMISE</p>
            <div className="overflow-hidden">
              <h2 className="js-promise-line editorial-heading text-white">
                Tell Us What
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2 className="js-promise-line editorial-heading text-white">
                You Need.
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2 className="js-promise-line editorial-heading text-[color:var(--color-gold-500)]">
                We Find
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2 className="js-promise-line editorial-heading text-[color:var(--color-gold-500)]">
                The Solution.
              </h2>
            </div>

            <div className="mt-10 flex justify-center">
              <div className="flex flex-col items-center gap-6">
                <div className="js-promise-cta">
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
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[color:var(--color-surface)]">
        <div className="absolute inset-0">
          <Image
            src="/images/contact.png"
            alt="Guangzhou waterfront and industrial skyline"
            fill
            sizes="100vw"
            className="object-cover object-[48%_50%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(246,242,237,0.96)_0%,rgba(246,242,237,0.88)_34%,rgba(246,242,237,0.72)_64%,rgba(246,242,237,0.52)_100%)]" />
        </div>

        <Container className="relative max-w-[var(--content-max)] py-[var(--section-space)]">
          <div className="max-w-[42rem]">
            <p className="js-contact-label section-label mb-5">LET&apos;S TALK BUSINESS</p>
            <div className="overflow-hidden">
              <h2 className="js-contact-line editorial-heading text-[color:var(--color-navy-900)]">
                Ready To Start
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2 className="js-contact-line editorial-heading text-[color:var(--color-navy-900)]">
                A Conversation?
              </h2>
            </div>
            <p className="js-contact-copy mt-6 max-w-[34rem] text-[1rem] leading-8 text-[color:var(--color-slate-700)]">
              Share your requirement with our team and let&apos;s explore the
              right solution together.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <div className="js-contact-primary">
                <CtaLink
                  href="/contact"
                  icon={
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  }
                >
                  Start An Inquiry
                </CtaLink>
              </div>
              <div className="js-contact-secondary">
                <CtaLink href="/contact" variant="secondary">
                  WhatsApp
                </CtaLink>
              </div>
              <div className="js-contact-secondary">
                <CtaLink
                  href="mailto:info@rongxingtrading.com"
                  variant="secondary"
                >
                  Email Us
                </CtaLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
