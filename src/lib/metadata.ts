import type { Metadata } from "next";

const defaultTitle = "Ronxing Trading";
const defaultDescription =
  "Placeholder foundation for the future Guangzhou Rongxing Trading Co., Ltd. website.";

export function createPageMetadata(
  title: string,
  description: string,
  pathname = "/",
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title,
      description,
      url: pathname,
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
  metadataBase: new URL("https://example.com"),
  title: {
    default: defaultTitle,
    template: `%s | ${defaultTitle}`,
  },
  description: defaultDescription,
  applicationName: defaultTitle,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
    siteName: defaultTitle,
    type: "website",
  },
  icons: {
    icon: "/logos/logo.png",
    shortcut: "/logos/logo.png",
    apple: "/logos/logo.png",
  },
};
