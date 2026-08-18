import type { CompanyProfile } from "@/models/company-profile";
import type { SitePageContent, SitePageKey } from "@/types/page";

export const companyProfile: CompanyProfile = {
  legalName: "Guangzhou Rongxing Trading Co., Ltd.",
  summary:
    "Placeholder content for a premium international trading-company website. Verified company details will be added later.",
};

export const sitePages: Record<SitePageKey, SitePageContent> = {
  home: {
    key: "home",
    path: "/",
    title: "Ronxing Trading",
    description:
      "A refined placeholder homepage for the future Guangzhou Rongxing Trading Co., Ltd. website.",
    eyebrow: "International Trading Platform",
  },
  company: {
    key: "company",
    path: "/company",
    title: "Company",
    description:
      "A placeholder company page reserved for verified corporate background and positioning.",
    eyebrow: "Company Overview",
  },
  products: {
    key: "products",
    path: "/products",
    title: "Products",
    description:
      "A placeholder products page reserved for a structured future catalog.",
    eyebrow: "Product Portfolio",
  },
  markets: {
    key: "markets",
    path: "/markets",
    title: "Markets",
    description:
      "A placeholder markets page reserved for verified geography and segment information.",
    eyebrow: "Market Presence",
  },
  capabilities: {
    key: "capabilities",
    path: "/capabilities",
    title: "Capabilities",
    description:
      "A placeholder capabilities page reserved for validated operational and sourcing information.",
    eyebrow: "Operational Strength",
  },
  news: {
    key: "news",
    path: "/news",
    title: "News",
    description:
      "A placeholder news page reserved for future announcements and updates.",
    eyebrow: "Latest Updates",
  },
  contact: {
    key: "contact",
    path: "/contact",
    title: "Contact",
    description:
      "A placeholder contact page reserved for verified contact information.",
    eyebrow: "Contact Details",
  },
};
