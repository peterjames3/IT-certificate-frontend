import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    turbopack: {
    root: __dirname,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "placehld.co",
      },
    ],
  },
};

export default nextConfig;