import type { NextConfig } from "next";

const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
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
