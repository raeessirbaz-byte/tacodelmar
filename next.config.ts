import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tacodelmar.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
