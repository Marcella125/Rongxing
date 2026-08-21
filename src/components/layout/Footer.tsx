import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container } from "@/components/ui/Container";

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
          src="/images/footer.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-28"
        />
        <div className="absolute inset-0 bg-[rgba(3,20,39,0.9)]" />
        <div className="navy-grid absolute inset-0 opacity-50" />
      </div>

      <Container className="footer-shell relative max-w-[var(--content-max)] px-5 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.72fr)_minmax(0,0.98fr)_minmax(0,0.86fr)] lg:gap-12">
          <div className="js-footer-logo">
            <p className="font-serif text-[1.5rem] uppercase tracking-[0.14em] text-white">
              RONG XING
            </p>
            <p className="mt-1 text-[0.48rem] uppercase tracking-[0.48em] text-white/68">
              Trading Co., Ltd.
            </p>
            <p className="mt-6 max-w-[18rem] text-[0.9rem] leading-7 text-white/72">
              China-based. Globally connected.
            </p>

            <div className="mt-7 space-y-3 text-[0.86rem] text-white/84">
              <a
                href="mailto:info@rongxingtrading.com"
                className="block transition hover:text-[color:var(--color-gold-500)]"
              >
                info@rongxingtrading.com
              </a>
              <p>Guangzhou, China</p>
            </div>
          </div>

          <div className="js-footer-column">
            <p className="section-label">Company</p>
            <ul className="mt-5 space-y-3">
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
            <p className="section-label">Solutions</p>
            <ul className="mt-5 max-w-[15rem] space-y-3">
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

          <div className="js-footer-column pl-6 lg:pl-8">
            <p className="section-label">Get In Touch</p>
            <div className="mt-5 space-y-4 text-[0.9rem] text-white/82">
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

        <div className="js-footer-bottom mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-[0.78rem] text-white/62 sm:flex-row sm:items-center sm:justify-between">
          <p>{"\u00A9"} {currentYear} RONG XING Trading Co., Ltd. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
