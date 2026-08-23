"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";

import { navigationItems } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { cn } from "@/utils/cn";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [language, setLanguage] = useState<"en" | "zh">("en");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("/#top");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToHomeSection = (hash: string, behavior: ScrollBehavior = "smooth") => {
    const id = hash.replace("#", "");
    const target = document.getElementById(id);

    if (!target) {
      return false;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const headerHeight =
      document.querySelector("header")?.getBoundingClientRect().height ?? 0;
    const offset = id === "top" ? 0 : headerHeight + 18;
    const top =
      id === "top"
        ? 0
        : Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset);

    window.scrollTo({
      top,
      behavior: prefersReducedMotion ? "auto" : behavior,
    });

    window.history.pushState(null, "", `/#${id}`);
    setActiveHref(`/#${id}`);
    return true;
  };

  const handleNavigationClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const hash = href.split("#")[1];

    if (!hash) {
      return;
    }

    event.preventDefault();
    setIsMobileMenuOpen(false);

    if (pathname === "/") {
      scrollToHomeSection(`#${hash}`);
      return;
    }

    router.push(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const hash = window.location.hash;

    if (hash) {
      window.requestAnimationFrame(() => {
        scrollToHomeSection(hash);
      });
    }

    const sections = navigationItems
      .map((item) => {
        const id = item.href.split("#")[1];
        return id
          ? { href: item.href, element: document.getElementById(id) }
          : null;
      })
      .filter(
        (section): section is { href: string; element: HTMLElement } =>
          Boolean(section?.element)
      );

    const updateActiveSection = () => {
      const focusLine = window.scrollY + window.innerHeight * 0.34;
      let currentHref = sections[0]?.href ?? "/#top";
      let currentOffset = Number.NEGATIVE_INFINITY;

      sections.forEach((section) => {
        const sectionOffset = section.element.offsetTop;

        if (sectionOffset <= focusLine && sectionOffset >= currentOffset) {
          currentHref = section.href;
          currentOffset = sectionOffset;
        }
      });

      setActiveHref((current) =>
        current === currentHref ? current : currentHref
      );

      if (window.location.hash !== `#${currentHref.split("#")[1]}`) {
        window.history.replaceState(null, "", currentHref);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [pathname]);

  const currentNavigationHref =
    pathname === "/"
      ? activeHref
      : navigationItems.find((item) => item.href === pathname)?.href ?? null;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "border-white/15 bg-[rgba(3,20,39,0.94)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container className="relative z-20 max-w-[var(--content-max)] py-6">
        <div className="flex items-center justify-between gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            className="font-serif text-[1.32rem] uppercase leading-none tracking-[0.12em] !text-white"
          >
            RONG XING
          </Link>

          <nav aria-label="Primary" className="hidden overflow-x-auto lg:block">
            <ul className="flex min-w-max items-center justify-center gap-2 sm:gap-3">
              {navigationItems.map((item) => {
                const isActive = currentNavigationHref === item.href;

                return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    onClick={(event) => handleNavigationClick(event, item.href)}
                    className={cn(
                      "relative inline-flex px-3 py-2 text-[0.74rem] font-semibold uppercase tracking-[0.14em] !text-white transition after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px after:origin-center after:bg-[color:var(--color-gold-500)] after:transition-transform after:duration-300 hover:text-[color:var(--color-gold-500)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold-500)]",
                      isActive ? "after:scale-x-100" : "after:scale-x-0"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
                );
              })}
            </ul>
          </nav>

          <div
            aria-label="Language"
            className="hidden items-center justify-end gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] !text-white lg:flex"
          >
            <button
              type="button"
              aria-pressed={language === "en"}
              onClick={() => setLanguage("en")}
              className={language === "en" ? "text-[color:var(--color-gold-600)]" : "opacity-55 transition hover:opacity-100"}
            >
              EN
            </button>
            <span aria-hidden="true" className="opacity-35">/</span>
            <button
              type="button"
              aria-pressed={language === "zh"}
              onClick={() => setLanguage("zh")}
              className={language === "zh" ? "text-[color:var(--color-gold-600)]" : "opacity-55 transition hover:opacity-100"}
            >
              中文
            </button>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-controls="mobile-navigation"
            aria-expanded={isMobileMenuOpen}
            className="inline-flex h-10 w-10 items-center justify-center text-white transition hover:text-[color:var(--color-gold-500)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold-500)] lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-5 w-5" strokeWidth={1.8} />
          </button>
        </div>
      </Container>

      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-0 z-[100] h-[100dvh] min-h-[100dvh] overflow-y-auto bg-[#031427] transition-opacity duration-200 lg:hidden",
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        style={{ backgroundColor: "var(--color-navy-950)" }}
      >
        <Container className="flex min-h-full max-w-[var(--content-max)] flex-col pb-7 pt-6">
          <div className="flex items-center justify-between gap-6">
            <Link
              href="/"
              className="font-serif text-[1.32rem] uppercase leading-none tracking-[0.12em] !text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              RONG XING
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center text-white transition hover:text-[color:var(--color-gold-500)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold-500)]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-5 w-5" strokeWidth={1.8} />
            </button>
          </div>

          <div className="mt-12">
            <p className="section-label mb-5 text-[0.68rem] tracking-[0.24em]">
              Menu
            </p>
            <nav aria-label="Mobile primary">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {navigationItems.map((item, index) => {
                const isActive = currentNavigationHref === item.href;
                const itemNumber = String(index + 1).padStart(2, "0");

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "location" : undefined}
                      onClick={(event) => handleNavigationClick(event, item.href)}
                      className={cn(
                        "grid min-h-[3.45rem] grid-cols-[2.25rem_minmax(0,1fr)_2.5rem] items-center gap-3 py-3 text-[0.86rem] font-semibold uppercase tracking-[0.18em] !text-white transition hover:!text-[color:var(--color-gold-500)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold-500)]",
                        isActive && "!text-[color:var(--color-gold-500)]"
                      )}
                    >
                      <span
                        className={cn(
                          "font-serif text-[1rem] tracking-[-0.04em]",
                          isActive
                            ? "text-[color:var(--color-gold-500)]"
                            : "text-white/28"
                        )}
                      >
                        {itemNumber}
                      </span>
                      {item.label}
                      <span
                        className={cn(
                          "ml-auto h-px w-8 origin-right bg-[color:var(--color-gold-500)] transition duration-300",
                          isActive
                            ? "scale-x-100 opacity-100"
                            : "scale-x-0 opacity-0"
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
            </nav>
          </div>

          <div
            aria-label="Mobile language"
            className="mt-auto flex items-center justify-between border-t border-white/10 pt-5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white"
          >
            <span className="text-white/48">Language</span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-pressed={language === "en"}
                onClick={() => setLanguage("en")}
                className={cn(
                  "transition",
                  language === "en"
                    ? "text-[color:var(--color-gold-500)]"
                    : "text-white/55"
                )}
              >
                EN
              </button>
              <span aria-hidden="true" className="text-white/24">/</span>
              <button
                type="button"
                aria-pressed={language === "zh"}
                onClick={() => setLanguage("zh")}
                className={cn(
                  "transition",
                  language === "zh"
                    ? "text-[color:var(--color-gold-500)]"
                    : "text-white/55"
                )}
              >
                中文
              </button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
