"use client";

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
        isScrolled
          ? "border-white/15 bg-[rgba(3,20,39,0.94)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container className="max-w-[var(--content-max)] py-6">
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
            className="flex items-center justify-end gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] !text-white"
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
        </div>
      </Container>
    </header>
  );
}
