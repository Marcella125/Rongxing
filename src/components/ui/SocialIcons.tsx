import type { SVGProps } from "react";

import { assetPath } from "@/lib/paths";

type IconProps = SVGProps<SVGSVGElement>;

type WhatsAppIconProps = {
  className?: string;
  white?: boolean;
  blue?: boolean;
};

type MaskIconProps = {
  className?: string;
};

export function WhatsAppIcon({
  className,
  white = false,
  blue = false,
}: WhatsAppIconProps) {
  return (
    <span
      aria-hidden="true"
      className={[
        "inline-block bg-current",
        white ? "text-white" : "",
        blue ? "text-[color:var(--color-navy-900)]" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        WebkitMaskImage: `url('${assetPath("/logos/whatsapp-svgrepo-com.svg")}')`,
        maskImage: `url('${assetPath("/logos/whatsapp-svgrepo-com.svg")}')`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

export function ChartLineUpIcon({ className }: MaskIconProps) {
  return (
    <span
      aria-hidden="true"
      className={["inline-block bg-current", className].filter(Boolean).join(" ")}
      style={{
        WebkitMaskImage: `url('${assetPath("/logos/chart-line-up-svgrepo-com.svg")}')`,
        maskImage: `url('${assetPath("/logos/chart-line-up-svgrepo-com.svg")}')`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="4.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8.2 10.1V16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8.2 8.2h.01"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M11.8 16v-3.4c0-1.1.9-2 2-2s2 .9 2 2V16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.8 11a2.6 2.6 0 0 1 2.2-1.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
