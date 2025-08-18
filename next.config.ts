import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "d2s8i866417m9.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "images10.gaadi.com",
      },
      {
        protocol: "https",
        hostname: "truckcdn.cardekho.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
