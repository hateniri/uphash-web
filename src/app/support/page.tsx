import { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'
import { getImagePath } from '@/lib/utils'

export const metadata = generatePageMetadata({
  title: 'サポートセンター',
  description: 'Lixelシリーズのサポート情報。マニュアル、FAQ、チュートリアル、技術サポートへのアクセス。初めての方向けスキャンガイドも充実。',
  path: '/support',
  keywords: ['サポート', '技術支援', 'マニュアル', 'FAQ', 'チュートリアル', 'スキャンガイド']
})

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-brand-black text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={getImagePath('/images/support/tutorial_banner.jpg')}
            alt="サポートセンターヒーロー画像"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 to-brand-black/60"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              サポートセンター
            </h1>
            <p className="text-xl text-brand-silver-300 mb-8">
              製品の使い方からトラブルシューティングまで、必要な情報をすぐに見つけられます
            </p>
          </div>
        </div>
      </section>

      {/* Featured: First Time Scanning Guide */}
      <section className="py-16 md:py-20 bg-brand-silver-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-brand-silver-200">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content */}
                <div className="p-8 md:p-12">
                  <div className="inline-flex items-center px-3 py-1 text-sm font-medium bg-brand-blue-100 text-brand-blue-700 rounded-full mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    初めての方へ
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
                    初めてのスキャニング
                  </h2>
                  <p className="text-lg text-brand-silver-700 mb-6">
                    Lixelシリーズを初めて使う方のための完全ガイド。開封から最初のスキャンまで、ステップバイステップで解説します。
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-brand-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-brand-silver-800">機器の初期設定とキャリブレーション</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-brand-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-brand-silver-800">効果的なスキャンルートの計画方法</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-brand-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-brand-silver-800">データの処理とカラー化の基本</span>
                    </li>
                  </ul>
                  <Link
                    href="/scan-guide"
                    className="inline-flex items-center px-6 py-3 bg-brand-blue-600 text-white font-bold rounded-lg hover:bg-brand-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    スキャンガイドを始める
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                
                {/* Visual */}
                <div className="relative bg-gradient-to-br from-brand-silver-100 to-brand-silver-50 p-8 lg:p-12 flex items-center justify-center">
                  <img 
                    src={getImagePath('/images/support/first-time-scanning.png')}
                    alt="初めてのスキャニングガイド - 建設現場でLixelスキャナーを使用する女性"
                    className="w-full h-auto max-w-md rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-black">サポートリソース</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Manuals */}
            <Link
              href="/downloads"
              className="bg-white border-2 border-brand-silver-200 rounded-xl p-6 hover:border-brand-blue-500 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-brand-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-blue-200 transition-colors">
                <svg className="w-7 h-7 text-brand-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-black">マニュアル</h3>
              <p className="text-brand-silver-600 text-sm mb-4">製品の詳細な操作方法と技術仕様書</p>
              <div className="flex items-center text-brand-blue-600 font-bold group-hover:text-brand-blue-700">
                <span className="text-sm">ダウンロード</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* Catalog */}
            <Link
              href="/catalog"
              className="bg-white border-2 border-brand-silver-200 rounded-xl p-6 hover:border-brand-silver-400 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-brand-silver-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-silver-200 transition-colors">
                <svg className="w-7 h-7 text-brand-silver-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-black">カタログ</h3>
              <p className="text-brand-silver-600 text-sm mb-4">製品ラインナップと仕様比較</p>
              <div className="flex items-center text-brand-silver-700 font-bold group-hover:text-brand-black">
                <span className="text-sm">閲覧する</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* Tutorials */}
            <Link
              href="/tutorials"
              className="bg-white border-2 border-brand-silver-200 rounded-xl p-6 hover:border-brand-blue-500 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-brand-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-blue-200 transition-colors">
                <svg className="w-7 h-7 text-brand-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-black">チュートリアル</h3>
              <p className="text-brand-silver-600 text-sm mb-4">動画で学ぶ操作方法とテクニック</p>
              <div className="flex items-center text-brand-blue-600 font-bold group-hover:text-brand-blue-700">
                <span className="text-sm">視聴する</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            {/* FAQ */}
            <Link
              href="/faq"
              className="bg-white border-2 border-brand-silver-200 rounded-xl p-6 hover:border-brand-blue-500 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-brand-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-blue-200 transition-colors">
                <svg className="w-7 h-7 text-brand-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-black">よくある質問</h3>
              <p className="text-brand-silver-600 text-sm mb-4">お客様からの質問と回答集</p>
              <div className="flex items-center text-brand-blue-600 font-bold group-hover:text-brand-blue-700">
                <span className="text-sm">確認する</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Advanced Scan Guide */}
          <div className="mt-8 max-w-6xl mx-auto">
            <Link
              href="/advanced-scan-guide"
              className="bg-brand-black rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group block border border-brand-silver-300"
            >
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-14 h-14 bg-brand-silver-800 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">上級スキャンガイド</h3>
                    <p className="text-brand-silver-400 text-sm">Map Fusion、HD Enhancement、ドローン統合などの高度な機能</p>
                  </div>
                </div>
                <div className="flex items-center text-brand-silver-300 font-medium group-hover:text-white">
                  <span>詳細を見る</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>


    </main>
  )
}