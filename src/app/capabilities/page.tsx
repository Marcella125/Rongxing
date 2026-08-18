import { PagePlaceholder } from "@/components/shared/PagePlaceholder";
import { createPageMetadata } from "@/lib/metadata";
import { getPageContent } from "@/services/content.service";

const pageContent = getPageContent("capabilities");

export const metadata = createPageMetadata(
  pageContent.title,
  pageContent.description,
  pageContent.path,
);

export default function CapabilitiesPage() {
  return <PagePlaceholder {...pageContent} />;
}
