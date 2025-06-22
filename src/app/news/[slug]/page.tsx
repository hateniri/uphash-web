import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getNewsPost, newsPosts } from '@/lib/news'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return newsPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getNewsPost(slug)
  
  if (!post) {
    return {
      title: 'ニュース記事が見つかりません | UP HASH',
    }
  }

  return {
    title: `${post.title} | UP HASH`,
    description: post.excerpt,
  }
}

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

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params
  const post = getNewsPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      {/* Article Header */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/news"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              ニュース一覧に戻る
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${categoryColors[post.category]}`}>
                {categoryLabels[post.category]}
              </span>
              <time className="text-gray-500">{new Date(post.date).toLocaleDateString('ja-JP')}</time>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(post.content) }} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">関連記事</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsPosts
                .filter(p => p.slug !== post.slug && p.category === post.category)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link 
                    key={relatedPost.slug}
                    href={`/news/${relatedPost.slug}`}
                    className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${categoryColors[relatedPost.category]}`}>
                        {categoryLabels[relatedPost.category]}
                      </span>
                      <time className="text-sm text-gray-500">
                        {new Date(relatedPost.date).toLocaleDateString('ja-JP')}
                      </time>
                    </div>
                    <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// Simple markdown to HTML converter
function convertMarkdownToHtml(markdown: string): string {
  let html = markdown
    .replace(/^### (.*$)/gim, '<h3 className="text-xl font-semibold mt-8 mb-4">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 className="text-2xl font-bold mt-10 mb-6">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 className="text-3xl font-bold mb-8">$1</h1>')
    .replace(/^\* (.+)$/gim, '<li className="ml-6 mb-2">$1</li>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" className="text-blue-600 hover:text-blue-700 underline">$1</a>')
    .replace(/\n\n/g, '</p><p className="mb-4">')
    .replace(/^/, '<p className="mb-4">')
    .replace(/$/, '</p>')
    
  // Wrap lists
  html = html.replace(/(<li.*<\/li>)+/g, '<ul className="list-disc mb-6">$&</ul>')
  return html
}