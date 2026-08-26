import { PageIntro } from "@/components/shared/PageIntro";

type PagePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PagePlaceholder({
  eyebrow,
  title,
  description,
}: PagePlaceholderProps) {
  return <PageIntro eyebrow={eyebrow} title={title} description={description} />;
}
