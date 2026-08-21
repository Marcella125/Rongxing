"use client";

import type { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CustomCursor } from "@/components/ui/CustomCursor";

export function AppShell({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) {
    return (
      <>
        <CustomCursor />
        {children}
      </>
    );
  }

  return (
    <>
      <CustomCursor />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
