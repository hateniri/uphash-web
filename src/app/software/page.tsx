import { Metadata } from 'next'
import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'ソフトウェア | 株式会社UPHASH',
  description: 'Lixelスキャナー用ソフトウェア製品。Lixel Studio、Lixel Cyber Color、Lixel GOをご紹介。',
}

export default function SoftwarePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ソフトウェア
            </h1>
            <p className="text-xl text-gray-300">
              スキャンデータを価値ある情報に変換する専門ソフトウェア
            </p>
          </div>
        </div>
      </section>

      {/* Software Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Lixel Studio */}
            <Link href="/products/lixel-studio" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                <div className="p-8">
                  <h2 className="text-xl font-bold mb-3">Lixel Studio</h2>
                  <p className="text-gray-600 mb-4">
                    包括的な点群処理・編集ソフトウェア
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Lixelスキャナー購入者に無料提供
                  </p>
                  <p className="text-gray-600 group-hover:text-gray-900 font-medium transition-colors">
                    詳細を見る →
                  </p>
                </div>
              </div>
            </Link>

            {/* Lixel Cyber Color */}
            <Link href="/products/lixel-cyber-color" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                <div className="p-8">
                  <h2 className="text-xl font-bold mb-3">Lixel Cyber Color</h2>
                  <p className="text-gray-600 mb-4">
                    次世代3D再構築ソフトウェア
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    無料版・有料版あり
                  </p>
                  <p className="text-gray-600 group-hover:text-gray-900 font-medium transition-colors">
                    詳細を見る →
                  </p>
                </div>
              </div>
            </Link>

            {/* Lixel GO */}
            <Link href="/products/lixel-go" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full">
                <div className="p-8">
                  <h2 className="text-xl font-bold mb-3">Lixel GO</h2>
                  <p className="text-gray-600 mb-4">
                    モバイルコントロールアプリ
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    iOS / Android対応
                  </p>
                  <p className="text-gray-600 group-hover:text-gray-900 font-medium transition-colors">
                    詳細を見る →
                  </p>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            最適なソフトウェアソリューションをご提案します
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            お客様のワークフローに合わせた最適な構成をご案内いたします
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            無料相談を申し込む
          </Link>
        </div>
      </section>
    </main>
  )
}