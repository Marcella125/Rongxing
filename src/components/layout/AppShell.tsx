"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type PropsWithChildren } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { cn } from "@/utils/cn";

function RefreshLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const hideTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, 560);
    const unmountTimer = window.setTimeout(() => {
      setIsMounted(false);
    }, 900);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(unmountTimer);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[120] flex items-center justify-center bg-[color:var(--color-navy-950)] transition-opacity duration-300",
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <span className="h-9 w-9 animate-spin rounded-full border-2 border-white/18 border-t-[color:var(--color-gold-500)]" />
    </div>
  );
}

export function AppShell({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isGalleryPage = pathname === "/gallery" || pathname === "/gallery/";

  if (isHomePage || isGalleryPage) {
    return (
      <>
        <RefreshLoader />
        {children}
      </>
    );
  }

  return (
    <>
      <RefreshLoader />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
