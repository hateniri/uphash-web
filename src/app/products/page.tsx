import { Metadata } from 'next'
import Link from 'next/link'
import { getImagePath } from '@/lib/utils'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: '製品ラインナップ - ハードウェア',
  description: 'Lixel L2 Pro・K1などプロフェッショナル向け3Dスキャナー。高精度LiDARと視覚SLAMを融合した次世代スキャニングデバイス。',
  path: '/products',
  keywords: ['Lixel L2 Pro', 'Lixel K1', 'ハンドヘルドスキャナー', 'ドローン搭載', '3Dレーザースキャナー']
})

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              製品ラインナップ
            </h1>
            <p className="text-xl text-gray-600">
              プロフェッショナル向け3Dレーザースキャナー
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* L2 Pro */}
            <Link href="/products/lixel-l2-pro" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <img 
                  src={getImagePath('/images/l2pro_product.png')} 
                  alt="Lixel L2 Proプロフェッショナル3Dスキャナー"
                  className="w-full h-full object-contain p-8"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Lixel L2 Pro</h2>
                <p className="text-gray-600 mb-4">プロフェッショナル3Dスキャナー</p>
                <p className="text-sm text-gray-500 mb-4">16/120、32/120、32/300の3モデル</p>
                <span className="inline-flex items-center text-gray-900 font-medium group-hover:text-gray-700">
                  詳細を見る
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* K1 */}
            <Link href="/products/lixel-k1" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <img 
                  src={getImagePath('/images/k1_product.png')} 
                  alt="Lixel K1ハンドヘルド3Dスキャナー"
                  className="w-full h-full object-contain p-8"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Lixel K1</h2>
                <p className="text-gray-600 mb-4">超軽量ハンドヘルドスキャナー</p>
                <p className="text-sm text-gray-500 mb-4">1kg未満、40チャンネルLiDAR</p>
                <span className="inline-flex items-center text-gray-900 font-medium group-hover:text-gray-700">
                  詳細を見る
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Accessories */}
            <Link href="/products/accessories" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-24 h-24 text-gray-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  <p className="text-gray-500">アクセサリー</p>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">アクセサリー</h2>
                <p className="text-gray-600 mb-4">オプションパーツ・周辺機器</p>
                <p className="text-sm text-gray-500 mb-4">RTKキット、バッテリー、他</p>
                <span className="inline-flex items-center text-gray-900 font-medium group-hover:text-gray-700">
                  詳細を見る
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            最適な3Dスキャナーをお探しですか？
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            お客様のニーズに合わせて、最適な製品をご提案いたします
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            製品相談・見積もり依頼
          </Link>
        </div>
      </section>
    </main>
  )
}