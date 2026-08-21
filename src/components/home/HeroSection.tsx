"use client";

import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { HomeSections } from "@/components/home/HomeSections";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CtaLink } from "@/components/ui/CtaLink";
import { useDesktopGsap } from "@/hooks/use-desktop-gsap";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isDesktop) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(".js-hero-mobile-eyebrow, .js-hero-mobile-tag, .js-hero-mobile-copy, .js-hero-mobile-btn", {
        opacity: 0,
        y: reducedMotion ? 8 : 18,
      });
      gsap.set(".js-hero-mobile-line", {
        yPercent: reducedMotion ? 28 : 88,
        opacity: 0,
      });

      gsap
        .timeline({
          defaults: { ease: "power3.out" },
        })
        .to(".js-hero-mobile-eyebrow", {
          opacity: 1,
          y: 0,
          duration: reducedMotion ? 0.32 : 0.5,
        })
        .to(
          ".js-hero-mobile-line",
          {
            yPercent: 0,
            opacity: 1,
            duration: reducedMotion ? 0.4 : 0.62,
            stagger: reducedMotion ? 0.05 : 0.08,
          },
          "-=0.12"
        )
        .to(
          ".js-hero-mobile-tag",
          {
            opacity: 1,
            y: 0,
            duration: reducedMotion ? 0.28 : 0.42,
          },
          "-=0.18"
        )
        .to(
          ".js-hero-mobile-copy",
          {
            opacity: 1,
            y: 0,
            duration: reducedMotion ? 0.32 : 0.46,
          },
          "-=0.16"
        )
        .to(
          ".js-hero-mobile-btn",
          {
            opacity: 1,
            y: 0,
            duration: reducedMotion ? 0.28 : 0.38,
            stagger: 0.06,
          },
          "-=0.14"
        );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  useDesktopGsap(sectionRef, ({ gsap, reducedMotion }) => {
    gsap.set(".js-hero-eyebrow, .js-hero-copy, .js-hero-btn", {
      opacity: 0,
      y: reducedMotion ? 10 : 24,
    });
    gsap.set(".js-hero-line", { yPercent: reducedMotion ? 40 : 110 });

    const introTimeline = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    introTimeline
      .to(".js-hero-eyebrow", {
        opacity: 1,
        y: 0,
        duration: reducedMotion ? 0.42 : 0.7,
      })
      .to(
        ".js-hero-line",
        {
          yPercent: 0,
          duration: reducedMotion ? 0.56 : 0.95,
          stagger: reducedMotion ? 0.06 : 0.1,
        },
        "-=0.3"
      )
      .to(
        ".js-hero-copy",
        {
          opacity: 1,
          y: 0,
          duration: reducedMotion ? 0.48 : 0.7,
        },
        "-=0.45"
      )
      .to(
        ".js-hero-btn",
        {
          opacity: 1,
          y: 0,
          duration: reducedMotion ? 0.42 : 0.6,
          stagger: reducedMotion ? 0.06 : 0.1,
        },
        "-=0.3"
      );

    if (!reducedMotion) {
      gsap.fromTo(
        ".js-hero-image",
        { scale: 1.06, y: 24 },
        {
          scale: 1,
          y: -18,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.1,
          },
        }
      );
    }
  });

  return (
    <>
      <Header />
      <main>
        <section
          id="top"
          ref={sectionRef}
          className="relative flex min-h-[100svh] w-full max-w-full overflow-x-hidden overflow-y-hidden bg-[color:var(--color-navy-950)] text-white lg:h-[100svh]"
        >
          <div className="js-hero-image absolute inset-0 h-full w-full max-w-full will-change-transform">
            <Image
              src="/images/Home Image.png"
              alt="Guangzhou skyline and waterfront representing modern China and international business"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[80%_50%] sm:object-[79%_50%] lg:object-[72%_50%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(96deg,rgba(3,20,39,0.96)_0%,rgba(3,20,39,0.84)_28%,rgba(3,20,39,0.48)_62%,rgba(3,20,39,0.52)_100%)] lg:bg-[linear-gradient(95deg,rgba(3,20,39,0.94)_0%,rgba(3,20,39,0.72)_38%,rgba(3,20,39,0.32)_68%,rgba(3,20,39,0.56)_100%)]" />
            <div className="navy-grid absolute inset-0 opacity-50" />
          </div>

          <div className="relative flex w-full max-w-full flex-1 px-[var(--mobile-gutter)] pb-[clamp(1.7rem,6vw,2.3rem)] pt-[clamp(6.1rem,18vw,7.8rem)] lg:mx-auto lg:max-w-[var(--content-max)] lg:px-8 lg:pb-10 lg:pt-[7.25rem] xl:pt-[7.75rem]">
            <div className="flex w-full items-start lg:items-end">
              <div className="w-full max-w-full lg:max-w-[44rem]">
                <div className="w-full max-w-full lg:hidden">
                  <p className="js-hero-mobile-eyebrow section-label mb-[clamp(1rem,3.4vw,1.2rem)] text-[clamp(0.78rem,3vw,0.9rem)] tracking-[0.22em]">
                    China-Based. Globally Connected.
                  </p>

                  <div className="js-hero-mobile-eyebrow mb-[clamp(1.35rem,5vw,1.8rem)] h-[2px] w-[clamp(4rem,18vw,4.8rem)] bg-[color:var(--color-gold-500)]" />

                  <div className="max-w-full overflow-hidden">
                    <div className="js-hero-mobile-line max-w-full">
                      <h1 className="max-w-full break-normal font-serif text-[clamp(3.45rem,15.8vw,4.95rem)] uppercase leading-[0.88] tracking-[-0.05em] text-white [overflow-wrap:normal]">
                        Connecting
                      </h1>
                    </div>
                  </div>
                  <div className="max-w-full overflow-hidden">
                    <div className="js-hero-mobile-line max-w-full">
                      <h1 className="max-w-full break-normal font-serif text-[clamp(3.45rem,15.8vw,4.95rem)] uppercase leading-[0.88] tracking-[-0.05em] text-white [overflow-wrap:normal]">
                        China
                      </h1>
                    </div>
                  </div>
                  <div className="max-w-full overflow-hidden">
                    <div className="js-hero-mobile-line max-w-full">
                      <h1 className="max-w-full break-normal font-serif text-[clamp(3.45rem,15.8vw,4.95rem)] uppercase leading-[0.88] tracking-[-0.05em] text-white [overflow-wrap:normal]">
                        With The
                      </h1>
                    </div>
                  </div>
                  <div className="max-w-full overflow-hidden">
                    <div className="js-hero-mobile-line max-w-full">
                      <h1 className="max-w-full break-normal font-serif text-[clamp(3.45rem,15.8vw,4.95rem)] uppercase leading-[0.88] tracking-[-0.05em] text-white [overflow-wrap:normal]">
                        World.
                      </h1>
                    </div>
                  </div>

                  <p className="js-hero-mobile-tag mt-[clamp(1.6rem,6vw,2rem)] text-[clamp(0.84rem,3.1vw,0.92rem)] font-semibold uppercase tracking-[0.24em] text-[color:var(--color-gold-500)]">
                    Smarter. Faster.
                  </p>

                  <p className="js-hero-mobile-copy mt-[clamp(1rem,4vw,1.45rem)] max-w-[19.5rem] text-[clamp(0.98rem,3.85vw,1.08rem)] leading-[1.82] text-white/86">
                    Smart and fast business solutions connecting global
                    requirements with the right manufacturers, products,
                    technologies, services, and opportunities in China.
                  </p>

                  <div className="mt-[clamp(1.8rem,6.4vw,2.3rem)] flex w-full max-w-[39rem] flex-col gap-[clamp(0.9rem,3vw,1.1rem)]">
                    <div className="js-hero-mobile-btn w-full max-w-full">
                      <CtaLink
                        href="/#solutions"
                        icon={
                          <ArrowRight className="h-6 w-6 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                        }
                        className="min-h-[4rem] w-full max-w-full justify-start gap-4 border-[color:var(--color-gold-500)] bg-[color:var(--color-gold-500)] px-6 text-[0.9rem] tracking-[0.18em] text-[color:var(--color-navy-950)]"
                      >
                        Explore Our Solutions
                      </CtaLink>
                    </div>
                    <div className="js-hero-mobile-btn w-full max-w-full">
                      <CtaLink
                        href="/#contact"
                        variant="outline"
                        icon={
                          <ArrowRight className="h-6 w-6 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                        }
                        className="min-h-[4rem] w-full max-w-full justify-start gap-4 border-[color:var(--color-gold-500)]/72 bg-transparent px-6 text-[0.9rem] tracking-[0.18em] !text-white hover:!text-[color:var(--color-navy-950)]"
                      >
                        Talk To Us
                      </CtaLink>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block">
                <p className="js-hero-eyebrow section-label mb-4 lg:mb-5">
                  China-Based. Globally Connected.
                </p>

                <div className="overflow-hidden">
                  <div className="js-hero-line">
                    <h1 className="max-w-[7.2ch] font-serif text-[clamp(3.35rem,6.2vw,5.6rem)] uppercase leading-[0.88] tracking-[-0.055em] text-white xl:text-[clamp(3.8rem,5.7vw,6rem)]">
                      Connecting China
                    </h1>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="js-hero-line">
                    <h1 className="max-w-[7.2ch] font-serif text-[clamp(3.35rem,6.2vw,5.6rem)] uppercase leading-[0.88] tracking-[-0.055em] text-white xl:text-[clamp(3.8rem,5.7vw,6rem)]">
                      With The World.
                    </h1>
                  </div>
                </div>

                <p className="js-hero-eyebrow mt-4 text-[0.82rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-gold-500)] sm:text-[0.88rem] lg:mt-5">
                  Smarter. Faster.
                </p>

                <p className="js-hero-copy mt-5 max-w-[34rem] text-[0.96rem] leading-7 text-white/78 sm:text-[1rem] lg:mt-6 lg:max-w-[36rem]">
                  Smart and fast business solutions connecting global
                  requirements with the right manufacturers, products,
                  technologies, services, and opportunities in China.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-8">
                  <div className="js-hero-btn">
                    <CtaLink
                      href="/#solutions"
                      icon={
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      }
                    >
                      Explore Our Solutions
                    </CtaLink>
                  </div>
                  <div className="js-hero-btn">
                    <CtaLink
                      href="/#contact"
                      variant="outline"
                      className="border-white/32 !text-white hover:!text-[color:var(--color-navy-950)]"
                    >
                      Talk To Us
                    </CtaLink>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <HomeSections />
      </main>
      <Footer onePage />
    </>
  );
}
