import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

const blogPosts = [
  {
    slug: 'slam-gaussian-splatting',
    title: 'SLAM × Gaussian Splatting が切り拓く3Dインタラクティブ体験の未来',
    image: '/images/blog/slam-gaussian-splatting/image_001.webp',
    date: '2024.11.13'
  },
  {
    slug: '3dgs-best-practices',
    title: '3D Gaussian Splattingの実践活用とベストプラクティス',
    image: '/images/blog/3dgs-best-practices/image_001.webp',
    date: '2025.06.25'
  },
  {
    slug: 'turkish-hybrid-lidar-workflow',
    title: 'トルコ測量会社のハイブリッドワークフロー',
    image: '/images/blog/turkish-hybrid-workflow/image_000.webp',
    date: '2025.06.20'
  },
  {
    slug: 'lcc-for-revit-announcement',
    title: 'Revit向けAI搭載「LCC for Revit」プラグインを発表',
    image: '/images/blog/optimized/lcc-for-revit.webp',
    date: '2025.05.21'
  }
]

export default function BlogSlideshow() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ブログ記事グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={getImagePath(post.image)}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-white/90 text-xs">{post.date}</span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}