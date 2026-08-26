import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container } from "@/components/ui/Container";
import { assetPath } from "@/lib/paths";
import { cn } from "@/utils/cn";

gsap.registerPlugin(ScrollTrigger);

type FooterProps = {
  onePage?: boolean;
};

const companyItems = [
  { href: "/#top", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#about", label: "Our Vision" },
  { href: "/#why-rong-xing", label: "Why RONG XING" },
  { href: "/contact", label: "Contact" },
] as const;

const solutionItems = [
  { href: "/#solutions", label: "Commercial Sourcing" },
  { href: "/#solutions", label: "Electric Vehicle Trading" },
  { href: "/#solutions", label: "International Brand Representation" },
  { href: "/#solutions", label: "Industrial Solutions" },
] as const;

export function Footer({ onePage = false }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const prefix = onePage ? "" : "/";
  const footerRef = useRef<HTMLElement | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<
    "company" | "solutions" | "contact" | null
  >("company");

  useLayoutEffect(() => {
    const footer = footerRef.current;

    if (!footer) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(
          ".js-footer-logo, .js-footer-column, .js-footer-bottom",
          { opacity: 1, y: 0 }
        );
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: footer,
          start: "top 88%",
          once: true,
        },
      });

      timeline
        .fromTo(
          ".js-footer-logo",
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.62,
            ease: "power2.out",
          }
        )
        .fromTo(
          ".js-footer-column",
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.58,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .fromTo(
          ".js-footer-bottom",
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }, footer);

    return () => {
      ctx.revert();
    };
  }, []);

  const withPrefix = (href: string) => {
    if (onePage || !href.startsWith("/#")) {
      return href;
    }

    return `${prefix}${href.slice(1)}`;
  };

  return (
    <footer ref={footerRef} className="relative overflow-hidden bg-[color:var(--color-navy-950)] text-white">
      <div className="absolute inset-0">
        <Image
          src={assetPath("/images/footer.png")}
          alt=""
          fill
          sizes="100vw"
          className="footer-bg-image hidden object-cover object-center opacity-28 lg:block"
        />
        <div className="footer-bg-overlay absolute inset-0 bg-[rgba(7,28,61,0.9)]" />
      </div>

      <Container className="footer-shell relative max-w-[var(--content-max)] px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.72fr)_minmax(0,0.98fr)_minmax(0,0.86fr)] lg:gap-12">
          <div className="js-footer-logo">
            <p className="font-serif text-[1.65rem] uppercase tracking-[0.16em] text-white lg:text-[1.5rem] lg:tracking-[0.14em]">
              RONG XING
            </p>
            <p className="mt-1 text-[0.5rem] uppercase tracking-[0.52em] text-white/62 lg:text-[0.48rem] lg:tracking-[0.48em]">
              Trading Co., Ltd.
            </p>
            <p className="mt-5 max-w-[18rem] text-[0.92rem] leading-6 text-white/76 lg:mt-6 lg:text-[0.9rem] lg:leading-7">
              China-based. Globally connected.
            </p>

            <div className="mt-5 grid gap-3 text-[0.88rem] text-white/86 lg:mt-7 lg:block lg:space-y-2.5 lg:text-[0.86rem]">
              <a
                href="mailto:info@rongxingtrading.com"
                className="block break-words transition hover:text-[color:var(--color-gold-500)]"
              >
                info@rongxingtrading.com
              </a>
              <p className="text-white/72 lg:text-white/84">Guangzhou, China</p>
            </div>
          </div>

          <div className="js-footer-column mt-2 lg:mt-0">
            <button
              type="button"
              className="flex min-h-14 w-full items-center justify-between text-left lg:hidden"
              aria-expanded={openMobileSection === "company"}
              onClick={() =>
                setOpenMobileSection((current) =>
                  current === "company" ? null : "company"
                )
              }
            >
              <span className="section-label">Company</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-[color:var(--color-gold-500)] transition-transform duration-300",
                  openMobileSection === "company" && "rotate-180"
                )}
              />
            </button>
            <p className="section-label hidden lg:block">Company</p>
            <ul
              className={cn(
                "grid overflow-hidden px-4 transition-[max-height,opacity,padding] duration-300 lg:mt-5 lg:block lg:max-h-none lg:space-y-3 lg:overflow-visible lg:px-0 lg:opacity-100",
                openMobileSection === "company"
                  ? "max-h-56 gap-3 py-4 opacity-100"
                  : "max-h-0 gap-3 py-0 opacity-0"
              )}
            >
              {companyItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={withPrefix(item.href)}
                    className="text-[0.86rem] text-white/82 transition hover:text-[color:var(--color-gold-500)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="js-footer-column">
            <button
              type="button"
              className="flex min-h-14 w-full items-center justify-between text-left lg:hidden"
              aria-expanded={openMobileSection === "solutions"}
              onClick={() =>
                setOpenMobileSection((current) =>
                  current === "solutions" ? null : "solutions"
                )
              }
            >
              <span className="section-label">Services</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-[color:var(--color-gold-500)] transition-transform duration-300",
                  openMobileSection === "solutions" && "rotate-180"
                )}
              />
            </button>
            <p className="section-label hidden lg:block">Services</p>
            <ul
              className={cn(
                "grid overflow-hidden px-4 transition-[max-height,opacity,padding] duration-300 lg:mt-5 lg:max-h-none lg:max-w-[15rem] lg:space-y-3 lg:overflow-visible lg:px-0 lg:opacity-100",
                openMobileSection === "solutions"
                  ? "max-h-64 gap-3 py-4 opacity-100"
                  : "max-h-0 gap-3 py-0 opacity-0"
              )}
            >
              {solutionItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={withPrefix(item.href)}
                    className="text-[0.86rem] leading-6 text-white/82 transition hover:text-[color:var(--color-gold-500)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="js-footer-column lg:pl-8">
            <button
              type="button"
              className="flex min-h-14 w-full items-center justify-between text-left lg:hidden"
              aria-expanded={openMobileSection === "contact"}
              onClick={() =>
                setOpenMobileSection((current) =>
                  current === "contact" ? null : "contact"
                )
              }
            >
              <span className="section-label">Get In Touch</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-[color:var(--color-gold-500)] transition-transform duration-300",
                  openMobileSection === "contact" && "rotate-180"
                )}
              />
            </button>
            <p className="section-label hidden lg:block">Get In Touch</p>
            <div
              className={cn(
                "space-y-4 overflow-hidden px-4 text-[0.9rem] text-white/82 transition-[max-height,opacity,padding] duration-300 lg:mt-5 lg:max-h-none lg:overflow-visible lg:px-0 lg:opacity-100",
                openMobileSection === "contact"
                  ? "max-h-72 py-4 opacity-100"
                  : "max-h-0 py-0 opacity-0"
              )}
            >
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[color:var(--color-gold-500)]">
                  Email
                </p>
                <a
                  href="mailto:info@rongxingtrading.com"
                  className="mt-1 inline-block transition hover:text-[color:var(--color-gold-500)]"
                >
                  info@rongxingtrading.com
                </a>
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[color:var(--color-gold-500)]">
                  WhatsApp
                </p>
                <Link
                  href={onePage ? "/#contact" : "/contact"}
                  className="mt-1 inline-block transition hover:text-[color:var(--color-gold-500)]"
                >
                  Contact via WhatsApp
                </Link>
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.24em] text-[color:var(--color-gold-500)]">
                  Location
                </p>
                <p className="mt-1 text-white/72">Guangzhou, China</p>
              </div>
            </div>
          </div>
        </div>

        <div className="js-footer-bottom mt-7 flex flex-col items-center justify-center gap-3 text-center text-[0.72rem] leading-5 text-white/62 sm:flex-row lg:mt-10 lg:border-t lg:border-white/10 lg:pt-5 lg:text-[0.78rem]">
          <p>{"\u00A9"} {currentYear} RONG XING Trading Co., Ltd. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
