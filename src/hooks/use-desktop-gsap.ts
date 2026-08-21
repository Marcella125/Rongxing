"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, type RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

type SetupFn = (args: {
  gsap: typeof gsap;
  ScrollTrigger: typeof ScrollTrigger;
  reducedMotion: boolean;
}) => void;

export function useDesktopGsap(
  scopeRef: RefObject<Element | null>,
  setup: SetupFn
) {
  useLayoutEffect(() => {
    const scope = scopeRef.current;

    if (!scope) {
      return;
    }

    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let ctx: gsap.Context | null = null;

    const mountAnimations = () => {
      ctx?.revert();
      ctx = null;

      if (!desktopQuery.matches) {
        return;
      }

      ctx = gsap.context(() => {
        setup({
          gsap,
          ScrollTrigger,
          reducedMotion: motionQuery.matches,
        });
      }, scope);

      ScrollTrigger.refresh();
    };

    mountAnimations();

    desktopQuery.addEventListener("change", mountAnimations);
    motionQuery.addEventListener("change", mountAnimations);

    return () => {
      desktopQuery.removeEventListener("change", mountAnimations);
      motionQuery.removeEventListener("change", mountAnimations);
      ctx?.revert();
    };
  }, [scopeRef, setup]);
}
