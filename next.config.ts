import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // カスタムドメインを使用する場合は、basePath と assetPrefix を削除
  // basePath: process.env.NODE_ENV === 'production' ? '/uphash-web' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/uphash-web' : '',
};

export default nextConfig;