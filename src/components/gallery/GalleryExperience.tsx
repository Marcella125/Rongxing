import { ArrowRight, Camera } from "lucide-react";
import type { ReactNode } from "react";

import {
  GalleryLightboxGrid,
  type GalleryImage,
} from "@/components/gallery/GalleryLightboxGrid";
import { Container } from "@/components/ui/Container";
import { getPageContent } from "@/services/content.service";

type GalleryExperienceProps = {
  closeControl: ReactNode;
};

const pageContent = getPageContent("gallery");

const galleryImageLayouts = [
  { imageNumber: 7, className: "lg:col-span-3 lg:row-span-3" },
  { imageNumber: 8, className: "lg:col-span-3 lg:row-span-3" },
  { imageNumber: 9, className: "lg:col-span-3 lg:row-span-3" },
  { imageNumber: 10, className: "lg:col-span-3 lg:row-span-3" },
  { imageNumber: 11, className: "lg:col-span-6 lg:row-span-2" },
  { imageNumber: 12, className: "lg:col-span-6 lg:row-span-2" },
  { imageNumber: 13, className: "lg:col-span-4 lg:row-span-2" },
  { imageNumber: 14, className: "lg:col-span-4 lg:row-span-2" },
  { imageNumber: 15, className: "lg:col-span-4 lg:row-span-2" },
  { imageNumber: 16, className: "lg:col-span-6 lg:row-span-2" },
  { imageNumber: 17, className: "lg:col-span-6 lg:row-span-2" },
  { imageNumber: 1, className: "lg:col-span-3 lg:row-span-2" },
  { imageNumber: 2, className: "lg:col-span-3 lg:row-span-2" },
  { imageNumber: 3, className: "lg:col-span-4 lg:row-span-2" },
  { imageNumber: 4, className: "lg:col-span-2 lg:row-span-2" },
  { imageNumber: 5, className: "lg:col-span-6 lg:row-span-2" },
  { imageNumber: 6, className: "lg:col-span-6 lg:row-span-2" },
] as const;

const galleryImages = galleryImageLayouts.map(({ imageNumber, className }) => ({
  src: `/Rong Xing Gallery Images/img ${imageNumber}.jpeg`,
  alt: `RONG XING gallery image ${imageNumber} showing business operations and partnerships`,
  position: "50% 50%",
  className,
})) satisfies readonly GalleryImage[];

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

          <GalleryLightboxGrid images={galleryImages} />
        </Container>
      </section>
    </main>
  );
}
