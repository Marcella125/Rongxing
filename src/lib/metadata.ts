import type { Metadata } from "next";

const defaultTitle = "RONG XING Trading Co., Ltd.";
const defaultDescription =
  "China-based international business solutions company for sourcing, EV trading, brand representation, and industrial solutions.";

const siteUrl = "https://www.rongxingtrading.com";

export function createPageMetadata(
  title: string,
  description: string,
  pathname = "/",
): Metadata {
  const url = new URL(pathname, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: defaultTitle,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${defaultTitle}`,
  },
  description: defaultDescription,
  applicationName: defaultTitle,
  keywords: [
    "China sourcing company",
    "commercial sourcing China",
    "EV sourcing China",
    "electric vehicle export China",
    "industrial solutions China",
    "brand representation China",
  ],
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: defaultTitle,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
};
