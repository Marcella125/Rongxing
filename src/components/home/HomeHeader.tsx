"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { homeNavigationItems } from "@/data/home";
import { cn } from "@/utils/cn";

export function HomeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <header className="absolute inset-x-0 top-0 z-30 bg-[#F6F2ED]">
      <div className="flex min-h-[5.5rem] items-center px-5 py-3 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex min-h-[4.5rem] w-full items-center justify-between gap-4 lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-10">
          <Link href="/" className="flex shrink-0 items-center self-center">
            <span className="flex h-[3.45rem] w-[9.75rem] items-center">
              <Image
                src="/logos/Logo + Text.png"
                alt="Rongxing Trading Co., Ltd. logo"
                width={720}
                height={272}
                quality={100}
                className="h-full w-auto object-contain object-left"
              />
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
                {homeNavigationItems.map((item, index) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "relative inline-flex items-center whitespace-nowrap pb-2 leading-none",
                        "text-[11px] font-semibold uppercase",
                        "tracking-[0.12em]",
                        "text-[color:var(--color-navy-900)]",
                        "transition-colors duration-300",
                        "hover:text-[color:var(--color-gold-600)]",
                        index === 0 &&
                          "after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-8 after:bg-[color:var(--color-gold-500)]"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
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
            "overflow-hidden transition-all duration-300 lg:hidden",
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
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 text-sm font-semibold uppercase tracking-[0.1em] text-[color:var(--color-navy-900)]"
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
