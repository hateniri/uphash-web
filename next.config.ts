import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pagesでサブディレクトリにデプロイする場合は以下を有効化
  // basePath: '/uphash-web',
  // assetPrefix: '/uphash-web',
};

export default nextConfig;
