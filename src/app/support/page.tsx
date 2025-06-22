import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'サポート - マニュアル・FAQ・お問い合わせ | 株式会社UPHASH',
  description: 'Lixelシリーズのサポート情報。マニュアル、FAQ、チュートリアル、技術サポートへのアクセス。',
}

export default function SupportPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              サポートセンター
            </h1>
            <p className="text-xl text-gray-300">
              製品の使い方からトラブルシューティングまで、
              必要な情報とサポートをご提供します
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

            <Link
              href="/contact"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">お問い合わせ</h3>
              <p className="text-gray-600">技術サポートへの直接お問い合わせ</p>
              <p className="text-gray-700 mt-4 group-hover:text-gray-900">連絡する →</p>
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
                  href="/downloads"
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
                  href="/downloads"
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
                  href="/downloads"
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
                  href="/downloads"
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
                  href="/downloads"
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
                  href="/downloads"
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

      {/* Training & Certification */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">トレーニング & 認定プログラム</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl p-8 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">初級トレーニング</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      基本操作とセットアップ
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      スキャン技術の基礎
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      データ処理入門
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">上級トレーニング</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      高度なスキャン技術
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      プロジェクト管理
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      業界別専門技術
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  トレーニングを申し込む
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Download */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">製品カタログダウンロード</h2>
            <p className="text-gray-600 mb-8 text-center">
              Lixelシリーズの総合カタログをPDF形式でダウンロードいただけます。
              製品の詳細仕様、価格表、導入事例などを掲載しています。
            </p>
            <div className="flex justify-center">
              <a
                href="#"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                総合カタログをダウンロード (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}