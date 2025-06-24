import { Metadata } from 'next'
import Link from 'next/link'
import { getImagePath } from '@/lib/utils'
import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'ブログ - 最新技術情報',
  description: 'Xgrids社の最新技術情報、製品アップデート、業界トレンドを日本語でお届けします。',
  path: '/blog',
  keywords: ['ブログ', '技術情報', '製品アップデート', '業界トレンド', '3Dスキャニング']
})

const blogPosts = [
  {
    id: 'mining-digital-twin',
    title: '地下100メートルでのデジタルツイン：高精度3Dマッピングが鉱山作業を変革する',
    date: '2025-03-13',
    category: '導入事例',
    excerpt: '中国・広東省の石灰岩鉱山で、Lixel L2 ProのMulti-SLAM技術により垂直100m超の坑道や地下河川を含む危険地帯の完全な3Dデジタルツインを実現。測量時間80%短縮と±4.8mmの高精度を達成。',
    image: '/images/blog/mining-digital-twin-hero.png',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=96'
  },
  {
    id: 'underground-utility-corridor',
    title: '都市の「ライフライン」を可視化：Lixel L2 Proが全長8kmの地下管路調査を支援',
    date: '2025-02-21',
    category: '導入事例',
    excerpt: '中国・寧波市の全長8km地下管路において、Lixel L2 Proによる高精度3Dマッピングを実施。狭小空間での効率的な測量と、CADへのシームレスな連携を実現しました。',
    image: '/images/blog/underground-survey-main.jpg',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=123'
  },
  {
    id: 'lcc-for-revit-announcement',
    title: '業界初：XGRIDS、Autodesk DevCon Europe 2025にてRevit向けAI搭載「LCC for Revit」プラグインを発表',
    date: '2025-05-21',
    category: '製品発表',
    excerpt: 'BIMモデリングを70〜90%高速化、センチメートル単位の精度で現場からRevitにリアルタイム連携。SLAMベースの3D Gaussian Splatting技術をAutodesk Revitワークフローに直接統合。',
    image: '/images/blog/lcc-for-revit.jpg',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=120'
  },
  {
    id: '3d-gaussian-splatting-webinar',
    title: '3D技術の未来を探る：「3D Gaussian Splatting」ウェビナーの注目ポイント10選',
    date: '2024-12-30',
    category: 'イベント',
    excerpt: 'XGRIDSのMindy Li氏らが登壇した3DGSとSLAM技術に関するウェビナーから、映画制作、都市計画、建設業界における革新的な活用事例と最新トレンドを紹介します。',
    image: '/images/blog/3dgs-webinar-main.jpg',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=68'
  },
  {
    id: 'lixel-l1-centimeter-accuracy',
    title: 'Lixel L1ハンドヘルドスキャナー：センチメートル級精度を実現する革新的技術',
    date: '2024-12-20',
    category: '製品技術',
    excerpt: 'Lixel L1は±1.2cmの相対精度と毎秒32万点のスキャン速度を実現。建設、測量、文化財保護など幅広い分野で活用されている次世代3Dスキャナーの技術詳細を解説します。',
    image: '/images/blog/lixel-l1-accuracy.jpg',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=114'
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ブログ
            </h1>
            <p className="text-xl text-gray-300">
              Xgrids社の最新技術情報、製品アップデート、業界トレンドを日本語でお届けします
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="relative aspect-video bg-gray-200">
                    <img
                      src={getImagePath(post.image)}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                    <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                    >
                      続きを読む
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <a
                      href={post.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 text-sm"
                    >
                      原文を見る
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">最新情報をお届けします</h2>
            <p className="text-lg text-gray-600 mb-8">
              Xgridsの最新技術情報や製品アップデートをメールでお知らせします
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              メールマガジンに登録
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}