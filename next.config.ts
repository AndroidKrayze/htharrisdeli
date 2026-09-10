import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "fastly.4sqi.net" },
      { protocol: "https", hostname: "irs2.4sqi.net" },
    ],
  },
};

export default nextConfig;
