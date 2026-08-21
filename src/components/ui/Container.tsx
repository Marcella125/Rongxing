import type { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={["mx-auto w-full max-w-7xl px-[var(--mobile-gutter)] sm:px-6 lg:px-8", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
