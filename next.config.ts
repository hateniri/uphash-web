import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/uphash-web' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/uphash-web' : '',
};

export default nextConfig;