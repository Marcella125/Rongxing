import { GalleryCloseButton } from "@/app/gallery/GalleryCloseButton";
import { GalleryExperience } from "@/components/gallery/GalleryExperience";
import { createPageMetadata } from "@/lib/metadata";
import { getPageContent } from "@/services/content.service";

const pageContent = getPageContent("gallery");

export const metadata = createPageMetadata(
  pageContent.title,
  pageContent.description,
  pageContent.path,
);

export default function GalleryPage() {
  return <GalleryExperience closeControl={<GalleryCloseButton />} />;
}
