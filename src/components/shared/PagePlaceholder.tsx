import { PageIntro } from "@/components/shared/PageIntro";
import { Container } from "@/components/ui/Container";
import { SectionCard } from "@/components/ui/SectionCard";

type PagePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const placeholderItems = [
  "Verified company information will be added in a later content pass.",
  "Section-specific layouts and imagery will be designed after the foundation review.",
  "SEO, content modules, and reusable components are ready to expand from this baseline.",
];

export function PagePlaceholder({
  eyebrow,
  title,
  description,
}: PagePlaceholderProps) {
  return (
    <>
      <PageIntro eyebrow={eyebrow} title={title} description={description} />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {placeholderItems.map((item, index) => (
              <SectionCard
                key={item}
                title={`Placeholder Module ${index + 1}`}
                description={item}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
