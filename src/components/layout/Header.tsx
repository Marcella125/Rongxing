"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { navigationItems } from "@/data/navigation";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [language, setLanguage] = useState<"en" | "zh">("en");
  const [isScrolled, setIsScrolled] = useState(false);

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
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex px-3 py-2 text-[0.74rem] font-semibold uppercase tracking-[0.14em] !text-white transition hover:text-[color:var(--color-gold-500)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold-500)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
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
