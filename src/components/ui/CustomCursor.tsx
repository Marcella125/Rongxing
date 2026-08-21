"use client";

import { useEffect, useRef } from "react";

const interactiveSelector =
  "a, button, input, textarea, select, label, summary, [role='button'], [data-cursor-interactive]";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLSpanElement | null>(null);
  const ringRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!finePointer.matches) {
      return;
    }

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!cursor || !dot || !ring) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    let targetX = -100;
    let targetY = -100;
    let ringX = -100;
    let ringY = -100;
    let animationFrame = 0;

    document.documentElement.classList.add("has-custom-cursor");

    const render = () => {
      const easing = reducedMotion ? 1 : 0.2;
      ringX += (targetX - ringX) * easing;
      ringY += (targetY - ringY) * easing;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      animationFrame = window.requestAnimationFrame(render);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      cursor.classList.add("is-visible");

      const target = event.target;
      const isInteractive =
        target instanceof Element && Boolean(target.closest(interactiveSelector));
      cursor.classList.toggle("is-interactive", isInteractive);
    };

    const handlePointerLeave = () => cursor.classList.remove("is-visible");
    const handlePointerEnter = () => cursor.classList.add("is-visible");
    const handlePointerDown = () => cursor.classList.add("is-pressed");
    const handlePointerUp = () => cursor.classList.remove("is-pressed");

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);
    document.documentElement.addEventListener("pointerenter", handlePointerEnter);
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    animationFrame = window.requestAnimationFrame(render);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );
      document.documentElement.removeEventListener(
        "pointerenter",
        handlePointerEnter
      );
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <span ref={ringRef} className="custom-cursor-ring">
        <span />
      </span>
      <span ref={dotRef} className="custom-cursor-dot">
        <span />
      </span>
    </div>
  );
}
