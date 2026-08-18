export function ScrollIndicator() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-12 right-6 hidden items-center gap-3 text-[color:var(--color-navy-900)] lg:flex xl:right-8"
    >
      <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--color-slate-600)]">
        Scroll
      </span>
      <div className="flex h-14 w-8 items-start justify-center rounded-full border border-white/65 bg-white/35 px-2 py-1.5 shadow-[0_10px_28px_rgba(13,35,65,0.12)] backdrop-blur-sm">
        <span className="scroll-indicator-dot h-2.5 w-2.5 rounded-full bg-[color:var(--color-gold-500)] shadow-[0_0_0_4px_rgba(197,160,98,0.14)]" />
      </div>
    </div>
  );
}
