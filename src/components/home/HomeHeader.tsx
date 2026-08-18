"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { homeNavigationItems } from "@/data/home";
import { cn } from "@/utils/cn";

export function HomeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const sectionIds = homeNavigationItems
      .map((item) => item.href.split("#")[1])
      .filter(Boolean);

    const updateActiveSection = () => {
      const headerOffset = 140;
      const scrollPosition = window.scrollY + headerOffset;

      let currentSection = sectionIds[0] ?? "top";

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);

        if (element && element.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-[#F6F2ED]">
      <div className="flex min-h-[5.5rem] items-center px-5 py-3 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex min-h-[4.5rem] w-full items-center justify-between gap-4 lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-10">
          <Link href="/" className="flex shrink-0 items-center self-center">
            <span className="flex items-center gap-0.5">
              <Image
                src="/logos/logo.png"
                alt="Rongxing Trading Co., Ltd. logo"
                width={160}
                height={160}
                quality={100}
                className="h-[3.15rem] w-auto object-contain object-left"
              />
              <span className="flex w-[8.85rem] flex-col leading-none">
                <span className="font-sans text-[1.32rem] font-medium uppercase tracking-[0.12em] text-[color:var(--color-navy-900)]">
                  RONGXING
                </span>
                <span className="mt-1 block w-[8.55rem] whitespace-nowrap pl-[0.08rem] text-[0.44rem] font-semibold uppercase tracking-[0.52em] text-[color:var(--color-navy-900)]/72">
                  Trading Co., Ltd.
                </span>
              </span>
            </span>
          </Link>

          <div
            className={cn(
              "hidden flex-1 items-center justify-center overflow-hidden transition-all duration-300 ease-out lg:flex",
              isMenuOpen
                ? "visible opacity-100"
                : "invisible pointer-events-none opacity-0"
            )}
          >
            <nav aria-label="Desktop navigation">
              <ul className="flex items-center justify-center gap-7 xl:gap-9">
                {homeNavigationItems.map((item) => {
                  const sectionId = item.href.split("#")[1] ?? "";
                  const isActive = activeSection === sectionId;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "relative inline-flex items-center whitespace-nowrap pb-2 leading-none",
                          "text-[11px] font-semibold uppercase",
                          "tracking-[0.12em]",
                          "text-[color:var(--color-navy-900)]",
                          "transition-colors duration-300",
                          "hover:text-[color:var(--color-gold-600)]",
                          isActive &&
                            "after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:bg-[color:var(--color-gold-500)]"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={() => setIsMenuOpen((current) => !current)}
            className="
              inline-flex
              h-12
              w-12
              shrink-0
              self-center
              items-center
              justify-center
              bg-transparent
              text-[color:var(--color-navy-900)]
              transition
              duration-300
              hover:scale-105
            "
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" strokeWidth={1.7} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.7} />
            )}
          </button>
        </div>

        <div
          className={cn(
            "overflow-hidden bg-[#F6F2ED] transition-all duration-300 lg:hidden",
            isMenuOpen
              ? "mt-4 max-h-[30rem] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          )}
        >
          <nav aria-label="Mobile navigation">
            <ul className="grid gap-1">
              {homeNavigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-3 text-sm font-semibold uppercase tracking-[0.1em] text-[color:var(--color-navy-900)] transition-colors duration-300 hover:text-[color:var(--color-gold-500)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
