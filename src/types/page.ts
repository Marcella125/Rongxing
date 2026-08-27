export type SitePageKey =
  | "home"
  | "company"
  | "products"
  | "markets"
  | "capabilities"
  | "gallery"
  | "news"
  | "contact";

export type SitePageContent = {
  key: SitePageKey;
  path: string;
  title: string;
  description: string;
  eyebrow: string;
};
