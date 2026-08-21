import type { CompanyProfile } from "@/models/company-profile";
import type { SitePageContent, SitePageKey } from "@/types/page";

export const companyProfile: CompanyProfile = {
  legalName: "Guangzhou Rongxing Trading Co., Ltd.",
  summary:
    "China-based international business solutions company connecting global requirements with manufacturers, suppliers, technologies, and industrial opportunities.",
};

export const sitePages: Record<SitePageKey, SitePageContent> = {
  home: {
    key: "home",
    path: "/",
    title: "RONG XING Trading Co., Ltd.",
    description:
      "RONG XING is a China-based international business solutions company focused on sourcing, EV trading, brand representation, and industrial solutions.",
    eyebrow: "China-Based. Globally Connected.",
  },
  company: {
    key: "company",
    path: "/company",
    title: "About RONG XING",
    description:
      "Corporate overview and positioning for Guangzhou Rongxing Trading Co., Ltd.",
    eyebrow: "Company Overview",
  },
  products: {
    key: "products",
    path: "/products",
    title: "Legacy Products",
    description:
      "Reserved route for legacy product content while the website transitions to a solutions-led structure.",
    eyebrow: "Legacy Content",
  },
  markets: {
    key: "markets",
    path: "/markets",
    title: "Global Reach",
    description:
      "Global reach and market positioning for RONG XING.",
    eyebrow: "Global Reach",
  },
  capabilities: {
    key: "capabilities",
    path: "/capabilities",
    title: "Solutions",
    description:
      "Commercial sourcing, EV trading, brand representation, and industrial solutions from RONG XING.",
    eyebrow: "Our Solutions",
  },
  news: {
    key: "news",
    path: "/news",
    title: "News",
    description:
      "Reserved route for future verified updates and announcements from RONG XING.",
    eyebrow: "Latest Updates",
  },
  contact: {
    key: "contact",
    path: "/contact",
    title: "Contact",
    description:
      "Contact RONG XING to discuss sourcing, EV trading, brand representation, and industrial requirements in China.",
    eyebrow: "Let's Talk Business",
  },
};
