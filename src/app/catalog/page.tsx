import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'カタログ - 製品資料ダウンロード',
  description: 'XGRIDS製品の詳細仕様、機能説明、導入事例などが掲載されたカタログをダウンロードいただけます。',
  path: '/catalog',
  keywords: ['カタログ', '製品資料', 'ダウンロード', 'XGRIDS', 'Lixel', 'PDF', '仕様書']
})

export default function CatalogPage() {
  const catalogs = [
    {
      title: 'XGRIDS 総合カタログ',
      description: 'XGRIDS製品ラインナップの総合的なご紹介。各製品の特徴、仕様、導入事例を網羅。',
      fileSize: '15.2 MB',
      format: 'PDF',
      icon: '📘',
      downloadUrl: 'https://xgrids.com/downloads/xgrids-general-catalog.pdf'
    },
    {
      title: 'Lixel L2 Pro シリーズ カタログ',
      description: 'プロフェッショナル向け3Dレーザースキャナーの詳細仕様と活用事例。',
      fileSize: '8.5 MB',
      format: 'PDF',
      icon: '📗',
      downloadUrl: 'https://xgrids.com/downloads/lixel-l2-pro-catalog.pdf'
    },
    {
      title: 'Lixel K1 カタログ',
      description: '超軽量コンパクトハンドヘルドスキャナーの仕様と特徴。',
      fileSize: '6.3 MB',
      format: 'PDF',
      icon: '📙',
      downloadUrl: 'https://xgrids.com/downloads/lixel-k1-catalog.pdf'
    },
    {
      title: 'Lixel Studio ソフトウェアガイド',
      description: '点群処理ソフトウェアの機能説明と操作マニュアル。',
      fileSize: '12.8 MB',
      format: 'PDF',
      icon: '📕',
      downloadUrl: 'https://xgrids.com/downloads/lixel-studio-guide.pdf'
    },
    {
      title: '業界別ソリューションガイド',
      description: '建設、測量、不動産、製造業など各業界での活用事例集。',
      fileSize: '9.7 MB',
      format: 'PDF',
      icon: '📓',
      downloadUrl: 'https://xgrids.com/downloads/industry-solutions-guide.pdf'
    },
    {
      title: '技術仕様書',
      description: '全製品の詳細な技術仕様と互換性情報。',
      fileSize: '4.2 MB',
      format: 'PDF',
      icon: '📔',
      downloadUrl: 'https://xgrids.com/downloads/technical-specifications.pdf'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-12 md:py-16 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              カタログダウンロード
            </h1>
            <p className="text-lg text-gray-600">
              XGRIDS製品の詳細仕様、機能説明、導入事例などが掲載されたカタログをご用意しています。
              PDFファイルをダウンロードしてご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* Catalogs Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {catalogs.map((catalog, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{catalog.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {catalog.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {catalog.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs text-gray-500">
                          {catalog.format} • {catalog.fileSize}
                        </span>
                      </div>
                      <a
                        href={catalog.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                        </svg>
                        ダウンロード
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                カタログのご利用について
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• カタログは全てPDF形式でご提供しています</li>
                <li>• ダウンロードにはインターネット接続が必要です</li>
                <li>• 印刷用の高解像度版をご希望の場合は、お問い合わせください</li>
                <li>• 製品の最新情報は各製品ページもあわせてご確認ください</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              さらに詳しい情報をお求めですか？
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              製品に関するご質問、デモのご依頼、見積もりのご相談など、お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                お問い合わせ
              </a>
              <a
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                製品一覧を見る
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}