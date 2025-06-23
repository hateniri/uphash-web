import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = false

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://uphash.github.io/uphash-web'
  
  const routes = [
    '',
    '/products',
    '/products/lixel-l2-pro',
    '/products/lixel-k1',
    '/products/lixel-go',
    '/products/lixel-studio',
    '/products/lixel-cyber-color',
    '/products/accessories',
    '/software',
    '/case-studies',
    '/tutorials',
    '/support',
    '/downloads',
    '/news',
    '/blog',
    '/faq',
    '/contact',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : route.includes('/products/') ? 0.9 : 0.7,
  }))
}