import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const basePath =
  process.env.PAGES_BASE_PATH ?? (isProduction ? "/Guanzhou-Rongxing" : "");

const nextConfig: NextConfig = {
  output: "export",
  distDir: isProduction ? "docs" : ".next",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
