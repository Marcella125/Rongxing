"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export function GalleryCloseButton() {
  const router = useRouter();

  const closeGallery = () => {
    router.replace("/#gallery");
  };

  return (
    <button
      type="button"
      aria-label="Close gallery page"
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--color-gold-500)]/42 text-[color:var(--color-navy-900)] transition hover:bg-[color:var(--color-gold-500)] hover:text-[color:var(--color-navy-950)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold-500)]"
      onClick={closeGallery}
    >
      <X className="h-4 w-4" strokeWidth={1.8} />
    </button>
  );
}
