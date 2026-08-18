import { Container } from "@/components/ui/Container";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="border-b border-[color:var(--color-border)] bg-[linear-gradient(180deg,rgba(248,251,255,0.9),rgba(255,255,255,1))] py-18 sm:py-24">
      <Container>
        <div className="max-w-3xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--color-gold-600)]">
            {eyebrow}
          </p>
          <h1 className="font-serif text-4xl tracking-[-0.04em] text-[color:var(--color-navy-900)] sm:text-5xl">
            {title}
          </h1>
          <p className="text-base leading-8 text-[color:var(--color-slate-700)] sm:text-lg">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
