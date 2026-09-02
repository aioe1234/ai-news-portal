import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: "/ai-news-portal",
        assetPrefix: "/ai-news-portal/",
        trailingSlash: true,
        images: { unoptimized: true },
        // The public portal routes are static. Cloudflare-only D1/Worker helpers
        // remain in the shared repository but are not part of the Pages bundle.
        typescript: { ignoreBuildErrors: true },
      }
    : {}),
};

export default nextConfig;
