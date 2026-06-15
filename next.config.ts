import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "arabhardware.net",
      },
      {
        protocol: "https",
        hostname: "arabhardware.com",
      },
    ],
  },
};

export default nextConfig;
