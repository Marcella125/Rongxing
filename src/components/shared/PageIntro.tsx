import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/motion/Reveal";

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
          <TextReveal distance={18}>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--color-gold-600)]">
              {eyebrow}
            </p>
          </TextReveal>
          <TextReveal delay={0.08} distance={42}>
            <h1 className="font-serif text-4xl tracking-[-0.04em] text-[color:var(--color-navy-900)] sm:text-5xl">
              {title}
            </h1>
          </TextReveal>
          <TextReveal delay={0.16} distance={24}>
            <p className="text-base leading-8 text-[color:var(--color-slate-700)] sm:text-lg">
              {description}
            </p>
          </TextReveal>
        </div>
      </Container>
    </section>
  );
}
