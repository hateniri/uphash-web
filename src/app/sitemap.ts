import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = false

// ブログ記事のデータ
const blogPosts = [
  { slug: 'slam-gaussian-splatting', date: '2024-11-13' },
  { slug: '3dgs-best-practices', date: '2025-06-25' },
  { slug: 'turkish-hybrid-lidar-workflow', date: '2025-06-20' },
  { slug: 'lithium-mica-measurement-revolution', date: '2024-12-27' },
  { slug: 'lcc-for-revit-announcement', date: '2025-05-21' },
  { slug: 'skender-construction-workflow', date: '2025-05-16' },
  { slug: 'virtual-preproduction', date: '2025-05-12' },
  { slug: 'mining-digital-twin', date: '2025-03-13' },
  { slug: 'underground-utility-corridor', date: '2025-02-21' },
  { slug: 'submarine-tunnel-revolution', date: '2025-02-13' },
  { slug: 'mexico-digital-conservation', date: '2025-05-12' },
  { slug: '3d-gaussian-splatting-webinar', date: '2024-12-30' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://xgrids.uphash.net'
  
  // ページの優先度設定
  const routePriority: Record<string, number> = {
    '': 1.0,
    '/products': 0.9,
    '/products/lixel-l2-pro': 0.9,
    '/products/lixel-k1': 0.9,
    '/software': 0.8,
    '/case-studies': 0.8,
    '/contact': 0.8,
    '/products/lixel-go': 0.7,
    '/products/lixel-studio': 0.7,
    '/products/lixel-cyber-color': 0.7,
    '/products/revit-plugin': 0.7,
    '/products/accessories': 0.6,
    '/tutorials': 0.7,
    '/support': 0.7,
    '/faq': 0.6,
    '/news': 0.6,
    '/blog': 0.6,
    '/downloads': 0.5,
    '/privacy': 0.3,
    '/terms': 0.3,
  }

  // 更新頻度設定
  const changeFrequency: Record<string, 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'> = {
    '': 'weekly',
    '/products': 'weekly',
    '/products/lixel-l2-pro': 'monthly',
    '/products/lixel-k1': 'monthly',
    '/software': 'weekly',
    '/case-studies': 'weekly',
    '/news': 'daily',
    '/blog': 'weekly',
    '/contact': 'monthly',
    '/privacy': 'yearly',
    '/terms': 'yearly',
  }

  const routes = Object.keys(routePriority)

  // 静的ルートのサイトマップエントリを作成
  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: changeFrequency[route] || 'monthly',
    priority: routePriority[route] || 0.5,
  }))

  // ブログ記事のサイトマップエントリを作成
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // 静的ルートとブログルートを結合して返す
  return [...staticRoutes, ...blogRoutes]
}