import { sitePages } from "@/data/site";
import type { SitePageContent, SitePageKey } from "@/types/page";

export function getPageContent(key: SitePageKey): SitePageContent {
  return sitePages[key];
}
