"use client";

import { ArrowRight, ClipboardCheck, Eye, Globe, Headphones, Mail, MapPinned, PackageSearch, ShieldCheck, Truck, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { CtaLink } from "@/components/ui/CtaLink";
import { Container } from "@/components/ui/Container";
import { ChartLineUpIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import { cn } from "@/utils/cn";

const aboutHighlights = [
  {
    title: "Our Mission",
    description:
      "To deliver the right products, the right support, and the right solutions, creating lasting value for our partners.",
    icon: Target,
  },
  {
    title: "Our Vision",
    description:
      "To be a trusted global partner, connecting opportunities and driving sustainable growth together.",
    icon: Eye,
  },
  {
    title: "Our Values",
    description:
      "We listen, we understand, and we go the extra mile to build partnerships that last.",
    icon: ShieldCheck,
  },
] as const;

const tradeGroups = [
  {
    number: "01",
    title: "Motorcycle Parts",
    description:
      "High-performance parts for various motorcycle models.",
    visual: "MOTO",
    image: "/images/bike.png",
  },
  {
    number: "02",
    title: "Batteries",
    description:
      "Reliable and long-lasting batteries for diverse applications.",
    visual: "CELL",
    image: "/images/batteries.png",
  },
  {
    number: "03",
    title: "Tires & Tubes",
    description:
      "Durable tires and tubes for safe and efficient performance.",
    visual: "TIRE",
    image: "/images/tires.png",
  },
  {
    number: "04",
    title: "Lubricants",
    description:
      "High-quality lubricants for every engine and industry.",
    visual: "OIL",
    image: "/images/lubricants.png",
  },
] as const;

const serviceItems = [
  {
    title: "Sourcing & procurement",
    description:
      "Shortlisting suppliers, validating commercial fit, and aligning product requirements before order commitment.",
    icon: PackageSearch,
  },
  {
    title: "Quality coordination",
    description:
      "Managing checkpoints, documentation, and production communication to reduce friction before shipment.",
    icon: ClipboardCheck,
  },
  {
    title: "Shipping support",
    description:
      "Coordinating schedules, shipment readiness, and export flow so goods move with clarity and fewer surprises.",
    icon: Truck,
  },
] as const;

const reachItems = [
  "Middle East",
  "North Africa",
  "Southeast Asia",
  "East Africa",
  "Europe",
  "Emerging trade corridors",
] as const;

const trustItems = [
  {
    title: "Reliable Sourcing",
    description: "Strong supplier network and quality products.",
    icon: Globe,
  },
  {
    title: "Quality Control",
    description: "Strict quality inspections at every step.",
    icon: ShieldCheck,
  },
  {
    title: "Efficient Logistics",
    description: "Timely shipments, global delivery.",
    icon: Truck,
  },
  {
    title: "Competitive Advantage",
    description: "Best value with uncompromised quality.",
    icon: ChartLineUpIcon,
  },
  {
    title: "Dedicated Support",
    description: "Professional team always at your service.",
    icon: Headphones,
  },
] as const;

const contactItems = [
  {
    label: "Business inquiries",
    value: "Available for sourcing, trade, and partnership discussions",
  },
  {
    label: "Response style",
    value: "Clear communication, practical updates, and long-term coordination",
  },
  {
    label: "Focus",
    value: "Trusted supply relationships with dependable shipment execution",
  },
] as const;

const sectionEyebrowClassName =
  "text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[color:var(--color-gold-500)]";

const sectionHeadingClassName =
  "font-serif text-[2.45rem] leading-[0.94] tracking-[-0.05em] sm:text-[3rem] lg:text-[3.15rem]";

function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className={cn("mb-4", sectionEyebrowClassName)}>{children}</p>
  );
}

export function HomeSections() {
  return (
    <>
      <section
        id="company"
        className="scroll-mt-28 bg-[#F6F2ED] py-8 sm:py-10 lg:py-12 text-[color:var(--color-navy-900)]"
      >
        <Container className="max-w-none px-0 sm:px-0 lg:px-0">
          <div className="mx-auto grid w-full max-w-[1440px] items-start gap-5 px-5 sm:px-6 lg:grid-cols-[minmax(0,54%)_minmax(0,46%)] lg:items-stretch lg:gap-8 lg:px-8">
            <div className="relative mt-1 min-h-[19.5rem] w-full overflow-hidden rounded-[0.7rem] sm:min-h-[22rem] lg:min-h-full">
              <Image
                src="/images/about us.png"
                alt="About Us visual for Rongxing Trading"
                fill
                quality={100}
                unoptimized
                sizes="(min-width: 1440px) 760px, (min-width: 1024px) 54vw, 100vw"
                className="object-cover object-center"
              />
            </div>

            <div className="relative pt-1 lg:pt-2">
              <div className="relative max-w-[540px]">
                <SectionEyebrow>About Us</SectionEyebrow>
                <h2 className={cn("max-w-[9.2ch] text-[color:var(--color-navy-900)]", sectionHeadingClassName)}>
                  Building Connections.
                  <br />
                  <span className="text-[color:var(--color-gold-500)]">Delivering Value.</span>
                </h2>
                <div className="mt-5 max-w-[510px] space-y-3 text-[0.79rem] leading-[1.9] text-[color:var(--color-slate-700)] sm:text-[0.82rem]">
                  <p>
                    Rongxing Trading Co. Ltd. is a global trading and sourcing company committed to connecting quality products with markets worldwide through trusted sourcing, reliable logistics, and long-term partnerships.
                  </p>
                  <p>
                    For more than a decade, we&apos;ve delivered reliable solutions with integrity and a customer-first approach, creating value that lasts and partnerships that grow.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid max-w-[560px] gap-5 md:grid-cols-3 md:gap-6">
                {aboutHighlights.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className={index > 0 ? "pt-2 md:pt-0" : ""}
                    >
                      <div className="grid grid-cols-[1.45rem_1fr] gap-x-3 gap-y-3">
                        <div className="text-[color:var(--color-gold-500)]">
                          <Icon className="h-[1.45rem] w-[1.45rem]" strokeWidth={1.55} />
                        </div>
                        <h3 className="pt-[0.1rem] text-[0.79rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-navy-900)]">
                          {item.title}
                        </h3>
                        <p className="col-span-2 max-w-[12.5rem] text-[0.73rem] leading-[1.9] text-[color:var(--color-slate-700)]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="products"
        className="scroll-mt-28 bg-[color:var(--color-navy-950)] py-16 sm:py-20 lg:py-24"
      >
        <Container className="max-w-none px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="relative flex flex-col gap-8 lg:gap-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-[24rem]">
                <SectionEyebrow>What We Trade</SectionEyebrow>
                <h2 className={cn("text-[#F6F2ED]", sectionHeadingClassName)}>
                  Quality Products
                  <br />
                  Across Industries
                </h2>
              </div>

              <CtaLink
                href="/#contact"
                variant="outline"
                icon={<ArrowRight className="h-4 w-4" />}
                className="self-start border-white/35 !text-[#F6F2ED] hover:border-[color:var(--color-gold-500)] hover:!bg-[color:var(--color-gold-500)] hover:!text-[color:var(--color-navy-950)]"
              >
                View All Products
              </CtaLink>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {tradeGroups.map((group) => (
                <article
                  key={group.number}
                  className="group relative overflow-hidden rounded-[1rem] border border-white/18 bg-white/[0.035] p-5 text-white transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-white/28 hover:bg-white/[0.05]"
                >
                  {group.image ? (
                    <Image
                      src={group.image}
                      alt={`${group.title} visual`}
                      fill
                      unoptimized
                      className="scale-100 object-cover object-[36%_50%] transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:translate-x-[-0.35rem]"
                    />
                  ) : null}

                  <div className="relative z-10 flex min-h-[15.75rem] flex-col">
                    <span className="font-sans text-[2rem] font-medium leading-none text-[color:var(--color-gold-500)]">
                      {group.number}
                    </span>
                    <h3 className="mt-4 max-w-[9rem] text-[0.9rem] font-semibold uppercase tracking-[0.06em] text-white">
                      {group.title}
                    </h3>
                    <ArrowRight className="mt-auto h-4 w-4 text-[color:var(--color-gold-500)]" />
                  </div>

                  <div className="pointer-events-none absolute inset-y-0 right-0 w-[58%]">
                    {group.image ? (
                      <></>
                    ) : (
                      <>
                        <div className="absolute right-[-8%] top-[10%] h-[82%] w-[82%] rounded-full border border-white/8 bg-[radial-gradient(circle_at_35%_35%,rgba(246,242,237,0.16),rgba(246,242,237,0.02)_42%,rgba(246,242,237,0)_72%)] transition-transform duration-700 ease-out group-hover:scale-[1.04] group-hover:translate-x-[-0.35rem]" />
                        <div className="absolute bottom-4 right-4 flex h-[7.25rem] w-[7.25rem] items-center justify-center rounded-full border border-white/10 bg-white/[0.04] font-serif text-[1.35rem] tracking-[0.18em] text-white/88 shadow-[inset_0_0_40px_rgba(255,255,255,0.03)] transition-transform duration-700 ease-out group-hover:scale-[1.04] group-hover:translate-x-[-0.25rem]">
                          {group.visual}
                        </div>
                      </>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section
        id="services"
        className="scroll-mt-28 bg-[#F6F2ED] py-16 sm:py-20 lg:py-24"
      >
        <Container className="max-w-none px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:items-start lg:gap-10">
            <div className="max-w-[38rem]">
              <div className="max-w-[24rem]">
                <SectionEyebrow>Services</SectionEyebrow>
                <h2 className={cn("text-[color:var(--color-navy-900)]", sectionHeadingClassName)}>
                  Practical trade support from first request to final movement.
                </h2>
              </div>
              <p className="mt-5 text-[0.96rem] leading-8 text-[color:var(--color-slate-700)]">
                Our service model is built around removing friction from cross-border trade by keeping sourcing, quality alignment, and shipment handling connected.
              </p>
            </div>

            <div className="grid gap-5">
              {serviceItems.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="border-t border-[color:var(--color-gold-500)]/45 pt-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1 shrink-0 text-[color:var(--color-gold-500)]">
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-[1.02rem] font-semibold text-[color:var(--color-navy-900)]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-[0.92rem] leading-7 text-[color:var(--color-slate-700)]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section
        id="markets"
        className="scroll-mt-28 bg-[color:var(--color-navy-950)] text-white"
      >
        <div className="relative min-h-[22rem] overflow-hidden border-y border-white/10 sm:min-h-[24rem] lg:min-h-[26rem]">
          <div className="absolute inset-0">
            <Image
              src="/images/global.png"
              alt="Global markets visual showing trade routes across continents"
              fill
              quality={100}
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,20,39,0.14)_0%,rgba(4,20,39,0.04)_52%,rgba(4,20,39,0.62)_76%,rgba(4,20,39,0.9)_100%)]" />
          </div>

          <Container className="relative max-w-none px-5 sm:px-6 lg:px-8">
            <div className="min-h-[22rem] py-8 sm:min-h-[24rem] sm:py-10 lg:min-h-[26rem] lg:py-12">
              <div className="ml-auto mr-[7%] flex min-h-[18rem] w-full max-w-[21rem] flex-col justify-center text-left sm:min-h-[20rem] sm:mr-[8%] lg:min-h-[22rem] lg:mr-[11%]">
                <p className="text-[0.66rem] font-bold uppercase tracking-[0.22em] text-[color:var(--color-gold-500)]">
                  Global Markets
                </p>
                <h2 className="mt-4 font-serif text-[2.5rem] leading-[0.94] tracking-[-0.05em] text-white sm:text-[2.9rem] lg:text-[3.2rem]">
                  It Starts Here.
                  <br />
                  It Reaches
                  <br />
                  The World.
                </h2>
                <p className="mt-5 max-w-[14rem] text-[0.82rem] leading-6 text-white/78">
                  From Guangzhou to over {reachItems.length * 4}+ countries worldwide.
                </p>
                <CtaLink
                  href="/#markets"
                  variant="outline"
                  icon={<ArrowRight className="h-4 w-4" />}
                  className="mt-7 w-fit"
                >
                  Our Markets
                </CtaLink>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className="bg-[#F6F2ED] py-8 sm:py-10 lg:py-12">
        <Container className="max-w-none px-5 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-[1440px] px-0 py-0">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2.1fr)] lg:items-center lg:gap-8">
            <div className="lg:pr-8">
              <SectionEyebrow>Why Choose Rongxing</SectionEyebrow>
              <h2 className={cn("text-[color:var(--color-navy-900)] lg:max-w-[11ch]", sectionHeadingClassName)}>
                Built on Trust.
                <br />
                Focused on Your Success.
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {trustItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="px-1 py-1 lg:min-h-[8.5rem]"
                  >
                    <div>
                      <div className="flex items-start gap-3">
                      <Icon
                        className="mt-0.5 h-7 w-7 shrink-0 text-[color:var(--color-gold-500)]"
                        strokeWidth={1.7}
                      />
                      <h3 className="text-[1.04rem] font-semibold leading-7 text-[color:var(--color-navy-900)]">
                        {item.title}
                      </h3>
                      </div>
                      <p className="mt-2.5 pl-10 text-[0.88rem] leading-7 text-[color:var(--color-slate-700)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          </div>
        </Container>
      </section>

      <section
        id="contact"
        className="scroll-mt-28"
      >
        <div className="relative min-h-[20rem] w-full overflow-hidden sm:min-h-[22rem] lg:min-h-[24rem]">
          <div className="absolute inset-0">
            <Image
              src="/images/contact.png"
              alt="Cargo vessel and skyline backdrop for the Rongxing contact section"
              fill
              priority={false}
              quality={100}
              sizes="100vw"
              className="scale-[1.14] object-cover object-[22%_54%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,24,47,0.18)_0%,rgba(246,242,237,0.52)_24%,rgba(246,242,237,0.88)_48%,rgba(246,242,237,0.7)_78%,rgba(246,242,237,0.38)_100%)]" />
          </div>

          <div className="relative flex min-h-[20rem] flex-col items-center justify-center px-5 py-10 text-center sm:min-h-[22rem] sm:px-6 sm:py-12 lg:min-h-[24rem] lg:px-8 lg:py-14">
            <h2 className="mx-auto max-w-none font-serif text-[2.05rem] leading-[1.02] tracking-[-0.04em] text-[color:var(--color-navy-900)] sm:text-[2.35rem] lg:text-[2.7rem]">
              Let&apos;s Build Something Great Together.
            </h2>
            <p className="mx-auto mt-2.5 max-w-[34rem] text-[0.82rem] leading-6 text-[color:var(--color-slate-700)] sm:text-[0.86rem]">
              We are ready to be your trusted partner in global trade.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-2.5 sm:flex-row sm:flex-wrap">
              <CtaLink
                href="/#products"
                icon={<ArrowRight className="h-4 w-4" />}
                className="min-w-[10.75rem]"
              >
                Request a Quote
              </CtaLink>
              <CtaLink
                href="/contact"
                variant="secondary"
                icon={<WhatsAppIcon className="h-3.5 w-3.5" blue />}
                className="min-w-[10.75rem]"
              >
                Chat on WhatsApp
              </CtaLink>
              <CtaLink
                href="mailto:contact@rongxingtrading.com"
                variant="secondary"
                icon={<Mail className="h-3.5 w-3.5" />}
                className="min-w-[10.75rem]"
              >
                Contact by Email
              </CtaLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
