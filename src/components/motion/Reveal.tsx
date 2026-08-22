"use client";

import {
  motion,
  useAnimationControls,
  useInView,
  type HTMLMotionProps,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { cn } from "@/utils/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  forceMotion?: boolean;
} & Omit<HTMLMotionProps<"div">, "children">;

type TextRevealProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  delay?: number;
  distance?: number;
  forceMotion?: boolean;
};

type StaggerProps = {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
} & Omit<HTMLMotionProps<"div">, "children">;

const viewportOptions = { once: true, amount: 0.22 } as const;

function useRevealTrigger(forceMotion = false) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, viewportOptions);
  const controls = useAnimationControls();
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hasPassedViewport, setHasPassedViewport] = useState(false);
  const shouldReduceMotion = forceMotion ? false : reducedMotion;

  useEffect(() => {
    if (forceMotion) {
      return;
    }

    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, [forceMotion]);

  useEffect(() => {
    const element = ref.current;

    if (!element || hasPassedViewport) {
      return;
    }

    const revealIfPassed = () => {
      const rect = element.getBoundingClientRect();

      if (rect.bottom <= 0 || rect.top < window.innerHeight) {
        setHasPassedViewport(true);
      }
    };

    revealIfPassed();
    window.addEventListener("scroll", revealIfPassed, { passive: true });

    return () => {
      window.removeEventListener("scroll", revealIfPassed);
    };
  }, [hasPassedViewport]);

  useEffect(() => {
    if (shouldReduceMotion || inView || hasPassedViewport) {
      void controls.start("visible");
      return;
    }

    void controls.start("hidden");
  }, [controls, hasPassedViewport, inView, shouldReduceMotion]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const element = ref.current;

      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();

      if (rect.bottom <= 0 || rect.top < window.innerHeight * 1.1) {
        void controls.start("visible");
      }
    }, 900);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [controls]);

  return {
    ref,
    controls,
    reducedMotion: shouldReduceMotion,
  };
}

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 28,
  forceMotion = false,
  ...props
}: RevealProps) {
  const { ref, controls, reducedMotion } = useRevealTrigger(forceMotion);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reducedMotion ? "visible" : "hidden"}
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: reducedMotion ? 0 : 0.72,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({
  children,
  className,
  innerClassName,
  delay = 0,
  distance = 32,
  forceMotion = false,
}: TextRevealProps) {
  const { ref, controls, reducedMotion } = useRevealTrigger(forceMotion);

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        ref={ref}
        className={innerClassName}
        initial={reducedMotion ? "visible" : "hidden"}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: distance },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: reducedMotion ? 0 : 0.76,
              delay,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function ImageReveal({
  children,
  className,
  delay = 0,
  distance = 24,
  forceMotion = false,
  ...props
}: RevealProps) {
  const { ref, controls, reducedMotion } = useRevealTrigger(forceMotion);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reducedMotion ? "visible" : "hidden"}
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: distance, scale: 1.03 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: reducedMotion ? 0 : 0.88,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  className,
  delayChildren = 0.08,
  staggerChildren = 0.08,
  ...props
}: StaggerProps) {
  const { ref, controls, reducedMotion } = useRevealTrigger();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reducedMotion ? "visible" : "hidden"}
      animate={controls}
      variants={{
        hidden: {},
        visible: {
          transition: reducedMotion
            ? { duration: 0 }
            : {
                delayChildren,
                staggerChildren,
              },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
