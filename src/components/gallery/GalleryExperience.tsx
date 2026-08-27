import {
  ArrowRight,
  Camera,
  ChevronDown,
  Factory,
  Grid2X2,
  Handshake,
  ShieldCheck,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";
import type { ReactNode } from "react";

import { GalleryLightboxGrid } from "@/components/gallery/GalleryLightboxGrid";
import { Container } from "@/components/ui/Container";
import { getPageContent } from "@/services/content.service";
import { cn } from "@/utils/cn";

type GalleryExperienceProps = {
  closeControl: ReactNode;
};

const pageContent = getPageContent("gallery");

const galleryImages = [
  {
    src: "/images/pr 1 im 1.png",
    alt: "RONG XING sourcing and inspection operations",
    position: "50% 50%",
    className: "lg:col-span-3 lg:row-span-2",
  },
  {
    src: "/images/pr 2 im 1.png",
    alt: "Manufacturing supplier coordination in China",
    position: "50% 50%",
    className: "lg:col-span-3 lg:row-span-2",
  },
  {
    src: "/images/project 2.png",
    alt: "International trade and logistics preparation",
    position: "58% 50%",
    className: "lg:col-span-4 lg:row-span-2",
  },
  {
    src: "/images/pr 2 im 2.png",
    alt: "RONG XING supplier meeting and operational review",
    position: "50% 50%",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/images/pr 1 im 2.png",
    alt: "Warehouse and packaged inventory ready for shipment",
    position: "50% 50%",
    className: "lg:col-span-3 lg:row-span-2",
  },
  {
    src: "/images/pr 3 im 1.png",
    alt: "Cargo vessel representing global shipment operations",
    position: "50% 50%",
    className: "lg:col-span-3 lg:row-span-2",
  },
  {
    src: "/images/project 3.png",
    alt: "RONG XING exhibition and partner presentation area",
    position: "58% 50%",
    className: "lg:col-span-4 lg:row-span-2",
  },
] as const;

const galleryFilters = [
  { label: "All", icon: Grid2X2, active: true },
  { label: "Factory Visits", icon: Factory, active: false },
  { label: "Inspections", icon: ShieldCheck, active: false },
  { label: "Shipments", icon: Truck, active: false },
  { label: "Warehouse", icon: Warehouse, active: false },
  { label: "Exhibitions", icon: Users, active: false },
  { label: "Meetings", icon: Handshake, active: false },
] as const;

export function GalleryExperience({ closeControl }: GalleryExperienceProps) {
  return (
    <main
      data-gallery-shell
      className="navy-scrollbar fixed inset-0 z-[90] overflow-y-auto bg-[color:var(--color-surface)] text-[color:var(--color-navy-900)]"
    >
      <section className="bg-[color:var(--color-surface)] pt-4 lg:pt-8">
        <Container className="max-w-[var(--content-max)]">
          <div className="flex items-center justify-between gap-6 py-3">
            <p className="section-label text-[0.66rem] tracking-[0.2em] lg:text-[0.86rem]">
              {pageContent.eyebrow}
            </p>
            {closeControl}
          </div>

          <div className="grid gap-6 pb-3 pt-3 sm:pb-4 sm:pt-4 lg:grid-cols-[minmax(0,0.5fr)_minmax(24rem,0.5fr)] lg:items-end lg:gap-10 lg:pb-8 lg:pt-4">
            <div className="max-w-[42rem]">
              <h1 className="text-[clamp(1.55rem,6.55vw,2.1rem)] font-semibold uppercase leading-[0.96] tracking-[0em] text-[color:var(--color-navy-900)] sm:text-[2.8rem] lg:text-[clamp(2.65rem,4.4vw,3.35rem)]">
                <span className="block whitespace-nowrap">Real Moments.</span>
                <span className="block whitespace-nowrap">
                  Real Partnerships.
                </span>
              </h1>
              <p className="mt-3 max-w-[39rem] text-[0.82rem] leading-5 text-[color:var(--color-slate-700)] sm:text-[0.9rem] sm:leading-6">
                A collection of photos from our daily operations, factory
                visits, inspections, shipments, exhibitions, and business
                meetings around the world.
              </p>
            </div>

            <div className="hidden min-h-[5.5rem] items-center justify-between gap-5 rounded-[0.35rem] bg-[color:var(--color-navy-950)] px-5 py-4 text-white shadow-[0_12px_30px_rgba(7,28,61,0.15)] lg:flex">
              <div className="grid grid-cols-[2.9rem_minmax(0,1fr)] items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-[0.25rem] border border-[color:var(--color-gold-500)]/50 bg-white/5 text-[color:var(--color-gold-500)]">
                  <Camera className="h-5.5 w-5.5" strokeWidth={1.7} />
                </span>
                <p className="max-w-[27rem] text-[0.9rem] font-medium leading-7 text-white/88">
                  Every photo reflects our commitment to quality, trust, and
                  long-term partnerships.
                </p>
              </div>
              <button
                type="button"
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-[0.2rem] bg-[color:var(--color-gold-500)] px-6 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[color:var(--color-gold-600)]"
              >
                Work With Us
                <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#f8f4ef] pb-8 pt-0 sm:pb-10 sm:pt-1 lg:pb-12 lg:pt-4">
        <Container className="max-w-[var(--content-max)]">
          <div className="mb-3 lg:hidden">
            <div className="flex min-h-12 items-center justify-between gap-3 rounded-[0.3rem] bg-[color:var(--color-navy-950)] px-3.5 py-2 text-white shadow-[0_8px_18px_rgba(7,28,61,0.12)]">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[color:var(--color-gold-500)]">
                <Camera className="h-4 w-4" strokeWidth={1.7} />
              </span>
              <p className="min-w-0 flex-1 text-[0.66rem] font-medium leading-[1.35] text-white/86">
                Quality. Trust. Lasting partnerships.
              </p>
              <button
                type="button"
                className="inline-flex min-h-8 shrink-0 items-center justify-center gap-1.5 rounded-[0.2rem] bg-[color:var(--color-gold-500)] px-3.5 text-[0.56rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-navy-950)] transition hover:bg-[color:var(--color-gold-600)]"
              >
                Work With Us
                <ArrowRight className="h-3 w-3" strokeWidth={1.8} />
              </button>
            </div>
          </div>

          <div className="mb-4 lg:hidden">
            <details className="group relative">
              <summary className="flex h-11 cursor-pointer list-none items-center justify-between rounded-[0.25rem] border border-[rgba(197,160,98,0.5)] bg-white px-4 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-navy-950)] shadow-[0_10px_24px_rgba(7,28,61,0.08)] outline-none transition focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold-500)]/35 [&::-webkit-details-marker]:hidden">
                <span className="flex items-center gap-2.5">
                  <Grid2X2
                    className="h-4 w-4 text-[color:var(--color-gold-600)]"
                    strokeWidth={1.75}
                  />
                  All
                </span>
                <ChevronDown
                  className="h-4 w-4 text-[color:var(--color-navy-900)] transition-transform duration-200 group-open:rotate-180"
                  strokeWidth={1.8}
                />
              </summary>
              <div className="absolute left-0 right-0 top-[calc(100%+0.45rem)] z-30 overflow-hidden rounded-[0.35rem] border border-[rgba(197,160,98,0.34)] bg-white shadow-[0_18px_38px_rgba(7,28,61,0.16)]">
                {galleryFilters.map((filter) => {
                  const Icon = filter.icon;

                  return (
                    <button
                      type="button"
                      key={filter.label}
                      className={cn(
                        "flex h-11 w-full items-center gap-3 px-4 text-left text-[0.68rem] font-semibold uppercase tracking-[0.14em] transition",
                        filter.active
                          ? "bg-[color:var(--color-navy-950)] text-white"
                          : "text-[color:var(--color-navy-900)] hover:bg-[#f8f4ef]"
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-4 w-4",
                          filter.active
                            ? "text-[color:var(--color-gold-500)]"
                            : "text-[color:var(--color-gold-600)]"
                        )}
                        strokeWidth={1.75}
                      />
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            </details>
          </div>

          <div className="mb-4 hidden gap-2 sm:gap-3 lg:grid lg:grid-cols-7">
            {galleryFilters.map((filter) => {
              const Icon = filter.icon;

              return (
                <button
                  type="button"
                  key={filter.label}
                  className={cn(
                    "inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-[0.25rem] border px-5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] transition",
                    filter.active
                      ? "border-[color:var(--color-navy-950)] bg-[color:var(--color-navy-950)] text-white shadow-[0_10px_24px_rgba(7,28,61,0.16)]"
                      : "border-[rgba(197,160,98,0.34)] bg-white/54 text-[color:var(--color-navy-900)] hover:border-[color:var(--color-gold-500)] hover:bg-white"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4 w-4",
                      filter.active
                        ? "text-[color:var(--color-gold-500)]"
                        : "text-[color:var(--color-gold-600)]"
                    )}
                    strokeWidth={1.75}
                  />
                  {filter.label}
                </button>
              );
            })}
          </div>

          <GalleryLightboxGrid images={galleryImages} />
        </Container>
      </section>
    </main>
  );
}
