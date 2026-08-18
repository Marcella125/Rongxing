import { PagePlaceholder } from "@/components/shared/PagePlaceholder";
import { createPageMetadata } from "@/lib/metadata";
import { getPageContent } from "@/services/content.service";

const pageContent = getPageContent("company");

export const metadata = createPageMetadata(
  pageContent.title,
  pageContent.description,
  pageContent.path,
);

export default function CompanyPage() {
  return <PagePlaceholder {...pageContent} />;
}
