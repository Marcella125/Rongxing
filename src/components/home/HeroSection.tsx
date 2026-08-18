import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeSections } from "@/components/home/HomeSections";
import { Footer } from "@/components/layout/Footer";
import { CtaLink } from "@/components/ui/CtaLink";

export function HeroSection() {
  return (
    <>
      <section
        id="top"
        className="relative min-h-screen overflow-hidden bg-[#edf3fa] text-[color:var(--color-navy-900)]"
      >
        <HomeHeader />

        <div className="absolute inset-0">
          <Image
            src="/images/Home Image.png"
            alt="Guangzhou skyline with a cargo ship approaching the harbor"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-[77%_52%] md:object-[74%_51%] xl:object-[73%_50%]"
          />
        </div>

        <div className="relative flex h-full items-start px-5 pb-14 pt-[4.7rem] sm:px-8 sm:pb-16 sm:pt-[5.2rem] lg:px-12 lg:pb-8 lg:pt-[4.7rem] xl:px-16">
          <div className="max-w-[33rem] pt-[3.75rem] sm:pt-[4.2rem] lg:pt-[4.9rem]">
            <p className="mb-4 text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[color:var(--color-gold-500)] sm:mb-4">
              Global Trade. Trusted Partner.
            </p>
            <h1 className="max-w-[11ch] font-serif text-[3.1rem] leading-[0.92] tracking-[-0.055em] text-[color:var(--color-navy-900)] sm:text-[3.8rem] lg:text-[4.1rem] xl:text-[4.45rem]">
              Connecting
              <br />
              Global Markets.
              <br />
              <span className="text-[color:var(--color-gold-500)]">Delivering Value.</span>
            </h1>
            <p className="mt-4 max-w-[22rem] text-[0.86rem] leading-6 text-[color:var(--color-slate-700)] sm:mt-5 sm:text-[0.9rem]">
              Rongxing Trading connects quality products with global markets through trusted sourcing, reliable logistics, and long-term partnerships.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaLink
                href="/#products"
                icon={<ArrowRight className="h-4 w-4" />}
                className="min-h-11 px-5 text-[0.72rem]"
              >
                Explore Products
              </CtaLink>
              <CtaLink
                href="/#contact"
                variant="secondary"
                className="min-h-11 px-5 text-[0.72rem] backdrop-blur-sm"
              >
                Contact Us
              </CtaLink>
            </div>
          </div>

        </div>
      </section>

      <HomeSections />
      <Footer onePage />

    </>
  );
}
