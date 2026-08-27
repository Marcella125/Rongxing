"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { assetPath } from "@/lib/paths";
import { cn } from "@/utils/cn";

export type GalleryImage = {
  src: string;
  alt: string;
  position: string;
  className: string;
};

type GalleryLightboxGridProps = {
  images: readonly GalleryImage[];
};

export function GalleryLightboxGrid({ images }: GalleryLightboxGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(
    null,
  );

  const activeImage = activeIndex === null ? null : images[activeIndex];

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? current : (current - 1 + images.length) % images.length,
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % images.length,
    );
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, showNext, showPrevious]);

  return (
    <>
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 lg:grid-cols-12 lg:auto-rows-[6.25rem] lg:gap-2.5">
        {images.map((image, index) => (
          <button
            type="button"
            key={image.src}
            aria-label={`Open image: ${image.alt}`}
            className={cn(
              "group relative aspect-square overflow-hidden rounded-[0.22rem] bg-[color:var(--color-navy-950)] text-left shadow-[0_8px_18px_rgba(7,28,61,0.1)] outline-none transition focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f4ef] lg:aspect-auto lg:rounded-[0.35rem] lg:shadow-[0_10px_28px_rgba(7,28,61,0.12)]",
              image.className,
            )}
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={assetPath(image.src)}
              alt={image.alt}
              fill
              sizes={
                index === 0
                  ? "(min-width: 1024px) 58vw, 100vw"
                  : "(min-width: 1024px) 38vw, 100vw"
              }
              className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
              style={{ objectPosition: image.position }}
            />
          </button>
        ))}
      </div>

      {activeImage ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[rgba(7,28,61,0.92)] px-3 py-4 text-white sm:px-6 lg:px-16"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            aria-label="Close image viewer"
            className="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/22 bg-white/10 text-white transition hover:bg-white hover:text-[color:var(--color-navy-950)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold-500)] sm:right-5 sm:top-5"
            onClick={() => setActiveIndex(null)}
          >
            <X className="h-5 w-5" strokeWidth={1.8} />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            className="absolute left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/22 bg-white/10 text-white transition hover:bg-white hover:text-[color:var(--color-navy-950)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold-500)] md:inline-flex"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
          >
            <ChevronLeft className="h-6 w-6" strokeWidth={1.8} />
          </button>

          <div
            className="relative h-[78vh] w-full max-w-[78rem] touch-pan-y"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={(event) => {
              const touch = event.changedTouches[0];
              setTouchStart({ x: touch.clientX, y: touch.clientY });
            }}
            onTouchEnd={(event) => {
              if (!touchStart) {
                return;
              }

              const touch = event.changedTouches[0];
              const deltaX = touch.clientX - touchStart.x;
              const deltaY = touch.clientY - touchStart.y;

              if (Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX > 0) {
                  showPrevious();
                } else {
                  showNext();
                }
              }

              setTouchStart(null);
            }}
          >
            <Image
              key={activeImage.src}
              src={assetPath(activeImage.src)}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
              loading="eager"
            />
          </div>

          <button
            type="button"
            aria-label="Next image"
            className="absolute right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/22 bg-white/10 text-white transition hover:bg-white hover:text-[color:var(--color-navy-950)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold-500)] md:inline-flex"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
          >
            <ChevronRight className="h-6 w-6" strokeWidth={1.8} />
          </button>
        </div>
      ) : null}
    </>
  );
}
