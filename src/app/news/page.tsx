import { Metadata } from 'next'
import Link from 'next/link'
import { newsPosts } from '@/lib/news'
import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'ニュース - 製品情報・イベント',
  description: 'XGRIDS製品の最新情報、技術アップデート、イベント情報をお届けします。',
  path: '/news',
  keywords: ['ニュース', '製品情報', 'イベント', 'アップデート', '新製品']
})

const categoryLabels = {
  product: '製品情報',
  company: '会社情報',
  event: 'イベント',
  tech: '技術情報'
}

const categoryColors = {
  product: 'bg-blue-100 text-blue-800',
  company: 'bg-green-100 text-green-800',
  event: 'bg-purple-100 text-purple-800',
  tech: 'bg-orange-100 text-orange-800'
}

export default function NewsPage() {
  const sortedPosts = [...newsPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ニュース
            </h1>
            <p className="text-xl text-gray-600">
              XGRIDS製品の最新情報、技術アップデート、イベント情報
            </p>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {sortedPosts.map((post) => (
                <article key={post.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <Link href={`/news/${post.slug}`}>
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${categoryColors[post.category]}`}>
                          {categoryLabels[post.category]}
                        </span>
                        <time className="text-gray-500">{new Date(post.date).toLocaleDateString('ja-JP')}</time>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-4">
                        <span className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                          続きを読む
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            最新情報をいち早くお届け
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            製品アップデートやイベント情報など、
            重要なお知らせをメールでお送りします
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            メール配信を申し込む
          </Link>
        </div>
      </section>
    </main>
  )
}