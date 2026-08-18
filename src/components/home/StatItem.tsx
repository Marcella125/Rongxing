import type { LucideIcon } from "lucide-react";
import { cn } from "@/utils/cn";

type StatItemProps = {
  description: string;
  icon: LucideIcon;
  index: number;
  isVisible: boolean;
  value: string;
};

export function StatItem({
  description,
  icon: Icon,
  index,
  isVisible,
  value,
}: StatItemProps) {
  const mobileBorders =
    index % 2 === 0
      ? "border-r border-[color:var(--color-navy-900)]/10"
      : "";
  const mobileRowBorder =
    index < 2
      ? "border-b border-[color:var(--color-navy-900)]/10 lg:border-b-0"
      : "";
  const desktopBorders =
    index < 3
      ? "lg:border-r lg:border-[color:var(--color-navy-900)]/10"
      : "";

  return (
    <div
      className={cn(
        "stats-card flex min-h-[7.6rem] flex-col items-center justify-center px-4 py-4 text-center sm:min-h-[8.2rem] lg:min-h-[8.6rem] lg:px-5 lg:py-4",
        mobileBorders,
        mobileRowBorder,
        desktopBorders,
        isVisible && "stats-card-visible"
      )}
      style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
    >
      <div className="stats-icon flex h-9 w-9 items-center justify-center text-[color:var(--color-gold-500)] transition-transform duration-300 sm:h-10 sm:w-10">
        <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.6} />
      </div>
      <div className="mt-2 space-y-1">
        <p className="font-sans text-[1.95rem] font-medium leading-none tracking-[-0.045em] text-[color:var(--color-navy-900)] transition-transform duration-300 sm:text-[2.15rem]">
          {value}
        </p>
        <p className="max-w-[9rem] text-[0.78rem] leading-5 text-[color:var(--color-slate-700)] sm:max-w-[10rem] sm:text-[0.82rem]">
          {description}
        </p>
      </div>
    </div>
  );
}
