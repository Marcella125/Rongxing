"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import styles from "./TradeIntro.module.css";

const routes = [
  "M850 330 Q690 80 560 220",
  "M850 330 Q675 235 640 405",
  "M850 330 Q580 40 260 245",
  "M850 330 Q540 175 365 485",
  "M850 330 Q980 365 980 500",
];
const destinations = [[560, 220], [640, 405], [260, 245], [365, 485], [980, 500]];

function TypedText({ text, start, interval = 0.025 }: { text: string; start: number; interval?: number }) {
  return Array.from(text).map((letter, index) => (
    <span key={index} className={styles.letter} style={{ animationDelay: `${start + index * interval}s` }}>
      {letter}
    </span>
  ));
}

/** Lives in the persistent shell, so client-side navigation never replays it. */
export function TradeIntro() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [leaving, setLeaving] = useState(false);
  const [finished, setFinished] = useState(false);
  const [reduced, setReduced] = useState(false);
  const dismiss = useCallback(() => setLeaving(true), []);

  useEffect(() => {
    if (finished) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const previousOverflow = document.documentElement.style.overflow;
    // The server-rendered open attribute covers the first paint; promote it
    // to a modal after hydration for native focus containment and inertness.
    dialog.close();
    dialog.showModal();
    dialog.dataset.running = "true";
    document.documentElement.style.overflow = "hidden";
    let timer: number;
    const schedule = () => {
      setReduced(preference.matches);
      window.clearTimeout(timer);
      if (preference.matches) dismiss();
      else timer = window.setTimeout(dismiss, 4050);
    };
    schedule();
    preference.addEventListener("change", schedule);
    return () => {
      window.clearTimeout(timer);
      preference.removeEventListener("change", schedule);
      document.documentElement.style.overflow = previousOverflow;
      dialog.close();
    };
  }, [dismiss, finished]);

  if (finished) return null;

  return (
    <>
      <noscript><style>{`.${styles.dialog} { display: none !important; }`}</style></noscript>
      <dialog
        open
        ref={dialogRef}
        className={styles.dialog}
        aria-label="Welcome to Guangzhou Rong Xing Trading"
        onCancel={(event) => { event.preventDefault(); dismiss(); }}
      >
        <motion.div
          className={styles.panel}
          initial={false}
          animate={leaving ? (reduced ? { opacity: 0 } : { y: "-100%" }) : { y: "0%", opacity: 1 }}
          transition={{ duration: reduced ? 0.18 : 0.45, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={() => { if (leaving) setFinished(true); }}
        >
          <div className={styles.cartography} aria-hidden="true">
            <svg className={styles.map} viewBox="0 0 1200 700" fill="none" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="trade-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M100 0H0V100" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="1200" height="700" fill="url(#trade-grid)" opacity="0.18" />
              <g stroke="currentColor" strokeWidth="0.7" opacity="0.2">
                <ellipse cx="600" cy="350" rx="510" ry="270" />
                <ellipse cx="600" cy="350" rx="340" ry="270" />
                <ellipse cx="600" cy="350" rx="170" ry="270" />
                <path d="M90 350H1110M135 240H1065M135 460H1065" />
              </g>
              {routes.map((route, index) => (
                <g key={route} className={index > 2 ? styles.secondaryRoute : undefined}>
                  <path d={route} stroke="currentColor" strokeWidth="0.7" opacity="0.18" />
                  <path d={route} pathLength="1" className={styles.route} style={{ animationDelay: `${0.35 + index * 0.14}s` }} />
                  <circle cx={destinations[index][0]} cy={destinations[index][1]} r="2.4" fill="currentColor" opacity="0.7" />
                </g>
              ))}
              <circle cx="850" cy="330" r="3.5" fill="currentColor" />
              <circle cx="850" cy="330" r="11" stroke="currentColor" strokeWidth="0.7" opacity="0.45" />
              <text x="870" y="325" className={styles.mapLabel}>GUANGZHOU</text>
              <text x="870" y="342" className={styles.mapLabel}>23.13° N / 113.26° E</text>
            </svg>
          </div>
          <motion.div className={styles.stage} aria-hidden="true" animate={leaving ? { y: reduced ? 0 : -45, opacity: 0 } : { y: 0, opacity: 1 }} transition={{ duration: reduced ? 0.15 : 0.35 }}>
            {["SOURCING.", "TRADING.", "CONNECTING."].map((word, index) => (
              <div key={word} className={styles.word} style={{ animationDelay: `${0.1 + index * 0.58}s` }}>
                <TypedText text={word} start={0.1 + index * 0.58} interval={0.027} />
              </div>
            ))}
            <div className={styles.signature}>
              <span className={styles.lineMask}><span className={styles.origin}><TypedText text="FROM CHINA" start={1.9} /></span></span>
              <span className={styles.lineMask}><span className={styles.world}><TypedText text="TO THE WORLD." start={2.18} /></span></span>
              <span className={styles.company}><TypedText text="Guangzhou Rong Xing Trading Co., Ltd." start={2.55} interval={0.008} /></span>
            </div>
          </motion.div>
        </motion.div>
      </dialog>
    </>
  );
}
