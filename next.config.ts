import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: githubPages ? "export" : undefined,
  basePath: githubPages ? "/htharrisdeli" : undefined,
  assetPrefix: githubPages ? "/htharrisdeli" : undefined,
  images: {
    unoptimized: githubPages,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "fastly.4sqi.net" },
      { protocol: "https", hostname: "irs2.4sqi.net" },
    ],
  },
};

export default nextConfig;
