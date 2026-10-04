"use client";

import { useEffect, useRef, type ComponentPropsWithoutRef } from "react";

import styles from "./ObjectiveCard.module.css";

export function ObjectiveCard({ className, children, ...props }: ComponentPropsWithoutRef<"article">) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = ref.current;
    if (!card || !("IntersectionObserver" in window)) return;

    const mobileMotion = window.matchMedia("(max-width: 1023px) and (prefers-reduced-motion: no-preference)");
    let observer: IntersectionObserver | undefined;
    const observe = () => {
      observer?.disconnect();
      delete card.dataset.reveal;
      if (!mobileMotion.matches) return;

      card.dataset.reveal = "pending";
      observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        card.dataset.reveal = "visible";
        observer?.disconnect();
      }, { threshold: 0.15, rootMargin: "0px 0px -24px 0px" });
      observer.observe(card);
    };

    observe();
    mobileMotion.addEventListener("change", observe);
    return () => {
      observer?.disconnect();
      mobileMotion.removeEventListener("change", observe);
      delete card.dataset.reveal;
    };
  }, []);

  return <article ref={ref} className={`${className ?? ""} ${styles.card}`} {...props}>{children}</article>;
}
