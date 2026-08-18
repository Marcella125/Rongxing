"use client";

import { useEffect, useRef, useState } from "react";

import { statsItems } from "@/data/home";

import { StatItem } from "./StatItem";

export function StatsBar() {
  const [isVisible, setIsVisible] = useState(false);
  const isMountedRef = useRef(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    isMountedRef.current = true;
    const section = sectionRef.current;

    if (!section) {
      isMountedRef.current = false;
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && isMountedRef.current) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => {
      isMountedRef.current = false;
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Company statistics"
      className="bg-[#F6F2ED]"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {statsItems.map((item, index) => (
          <StatItem
            key={item.label}
            description={item.label}
            icon={item.icon}
            isVisible={isVisible}
            value={item.value}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
