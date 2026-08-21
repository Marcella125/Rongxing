import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import type { ReactNode } from "react";

import { AppShell } from "@/components/layout/AppShell";
import { rootMetadata } from "@/lib/metadata";

import "./globals.css";

const sans = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const heading = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = rootMetadata;

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${heading.variable} bg-white text-[color:var(--color-navy-900)] antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <AppShell>{children}</AppShell>
        </div>
      </body>
    </html>
  );
}
