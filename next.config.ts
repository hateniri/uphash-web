import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/uphash-web',
  assetPrefix: '/uphash-web',
};

export default nextConfig;
