import { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'サポート・技術支援',
  description: 'Lixelシリーズのサポート情報。マニュアル、FAQ、チュートリアル、技術サポートへのアクセス。お困りの際はお気軽にご相談ください。',
  path: '/support',
  keywords: ['サポート', '技術支援', 'マニュアル', 'FAQ', 'トラブルシューティング']
})

export default function SupportPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="max-w-xl">
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  SUPPORT CENTER
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                サポートセンター
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                製品の使い方からトラブルシューティングまで、
                必要な情報とサポートをご提供します
              </p>
              
              {/* Quick Access Buttons */}
              <div className="flex flex-wrap gap-4">
                <a href="#quick-links" className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  クイックアクセス
                </a>
                <a href="/downloads" className="inline-flex items-center px-6 py-3 bg-transparent text-white font-medium rounded-lg border border-white/30 hover:bg-white/10 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                  ダウンロード
                </a>
              </div>
            </div>

            {/* Product Ecosystem Visual */}
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>
              
              {/* Device Layout */}
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  {/* Mobile App */}
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold mb-1">モバイルアプリ</h3>
                    <p className="text-gray-300 text-sm">iOS/Android対応</p>
                  </div>

                  {/* Tablet */}
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold mb-1">タブレット表示</h3>
                    <p className="text-gray-300 text-sm">リアルタイムプレビュー</p>
                  </div>

                  {/* Scanner */}
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold mb-1">Lixelスキャナー</h3>
                    <p className="text-gray-300 text-sm">L2 Pro / K1対応</p>
                  </div>

                  {/* PC Software */}
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold mb-1">PCソフトウェア</h3>
                    <p className="text-gray-300 text-sm">Lixel Studio</p>
                  </div>
                </div>

                {/* Connection Lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 400 400">
                    <line x1="100" y1="100" x2="300" y2="100" stroke="white" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="5,5">
                      <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                    </line>
                    <line x1="100" y1="300" x2="300" y2="300" stroke="white" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="5,5">
                      <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                    </line>
                    <line x1="100" y1="100" x2="100" y2="300" stroke="white" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="5,5">
                      <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                    </line>
                    <line x1="300" y1="100" x2="300" y2="300" stroke="white" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="5,5">
                      <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                    </line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section id="quick-links" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/downloads"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">ダウンロード</h3>
              <p className="text-gray-600">マニュアル、ソフトウェア、ドライバーのダウンロード</p>
              <p className="text-gray-700 mt-4 group-hover:text-gray-900">アクセス →</p>
            </Link>

            <Link
              href="/faq"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">よくある質問</h3>
              <p className="text-gray-600">製品に関するFAQと回答集</p>
              <p className="text-gray-700 mt-4 group-hover:text-gray-900">確認する →</p>
            </Link>

            <Link
              href="/tutorials"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">チュートリアル</h3>
              <p className="text-gray-600">操作方法を動画で分かりやすく解説</p>
              <p className="text-gray-700 mt-4 group-hover:text-gray-900">視聴する →</p>
            </Link>

          </div>
        </div>
      </section>

      {/* Product Documentation */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">製品別ドキュメント</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">ハードウェア</h3>
              <div className="space-y-4">
                <a
                  href="#manuals"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <h4 className="font-medium">Lixel L2 Pro</h4>
                    <p className="text-sm text-gray-600">ユーザーマニュアル、仕様書</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#manuals"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <h4 className="font-medium">Lixel K1</h4>
                    <p className="text-sm text-gray-600">クイックスタート、操作ガイド</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#manuals"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <h4 className="font-medium">RTKモジュール</h4>
                    <p className="text-sm text-gray-600">セットアップガイド、技術仕様</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">ソフトウェア</h3>
              <div className="space-y-4">
                <a
                  href="#manuals"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <h4 className="font-medium">Lixel Studio</h4>
                    <p className="text-sm text-gray-600">操作マニュアル、プラグインガイド</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#manuals"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <h4 className="font-medium">Lixel Cyber Color</h4>
                    <p className="text-sm text-gray-600">ユーザーガイド、SDK資料</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#manuals"
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <h4 className="font-medium">Lixel GO</h4>
                    <p className="text-sm text-gray-600">アプリ操作ガイド</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scan Guides Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">スキャンガイド</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link
              href="/scan-guide"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">初心者向けガイド</h3>
              <p className="text-gray-600 mb-4">基本的なスキャン方法、初期化、歩き方、カラー化まで</p>
              <p className="text-blue-600 font-medium group-hover:text-blue-700">ガイドを見る →</p>
            </Link>
            
            <Link
              href="/advanced-scan-guide"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">上級者向けガイド</h3>
              <p className="text-gray-600 mb-4">Map Fusion、HD Enhancement、ドローン統合など</p>
              <p className="text-purple-600 font-medium group-hover:text-purple-700">詳細を見る →</p>
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}