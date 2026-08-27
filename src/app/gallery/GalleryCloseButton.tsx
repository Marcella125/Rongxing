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
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(7,28,61,0.12)] bg-white text-[color:var(--color-navy-950)] shadow-[0_8px_20px_rgba(7,28,61,0.12)] transition hover:bg-[color:var(--color-gold-500)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold-500)]"
      onClick={closeGallery}
    >
      <X className="h-4 w-4" strokeWidth={2.25} />
    </button>
  );
}
