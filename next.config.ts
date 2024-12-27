import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/price",
        destination: "/price/all",
        
      },
    ];
  },
};

export default nextConfig;
