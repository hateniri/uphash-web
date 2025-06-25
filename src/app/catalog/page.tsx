import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { getImagePath } from '@/lib/utils'
import Link from 'next/link'

export const metadata: Metadata = generatePageMetadata({
  title: 'カタログ',
  description: 'Lixel L2 ProおよびLixel K1の製品カタログをダウンロードいただけます。',
  path: '/catalog',
  keywords: ['カタログ', '製品資料', 'ダウンロード', 'Lixel L2 Pro', 'Lixel K1', 'PDF']
})

export default function CatalogPage() {
  const catalogs = [
    {
      title: 'Lixel L2 Pro カタログ',
      description: 'プロフェッショナル向け高精度3Dスキャナー',
      specs: ['32チャンネルLiDAR', '最大300m測定距離', 'RTK-GNSS対応'],
      fileSize: '日本語版',
      format: 'PDF',
      icon: '📗',
      downloadUrl: getImagePath('/downloads/Lixel-L2Pro-Catalog-JP.pdf'),
      accent: 'blue' as const
    },
    {
      title: 'Lixel K1 カタログ',
      description: 'コンパクト＆パワフルなハンドヘルドスキャナー',
      specs: ['16チャンネルLiDAR', '最大120m測定距離', '軽量1.2kg'],
      fileSize: '日本語版',
      format: 'PDF',
      icon: '📙',
      downloadUrl: getImagePath('/downloads/Lixel-K1-Catalog-JP.pdf'),
      accent: 'orange' as const
    }
  ]

  const additionalResources = [
    {
      title: 'アクセサリーカタログ',
      description: 'RTKキット、マウント、バッテリーなどのオプション製品',
      icon: '🔧',
      accent: 'silver' as const
    },
    {
      title: 'ソフトウェアカタログ',
      description: 'Lixel Studio、LCC Studioなどの処理ソフトウェア',
      icon: '💾',
      accent: 'blue' as const
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-brand-black text-white py-16 md:py-24">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-grid-pattern-dark bg-grid opacity-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              カタログ
            </h1>
            <p className="text-xl text-brand-silver-300">
              製品の詳細仕様が掲載されたカタログをダウンロードいただけます
            </p>
          </div>
        </div>
      </section>

      {/* Main Catalogs */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-brand-black mb-4">製品カタログ</h2>
            <div className="w-20 h-1 bg-brand-blue-600"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            {catalogs.map((catalog, index) => {
              const isBlue = catalog.accent === 'blue'
              const isOrange = catalog.accent === 'orange'
              
              return (
                <div
                  key={index}
                  className={`group bg-white border-2 border-brand-silver-200 rounded-xl overflow-hidden transition-all hover:shadow-xl ${
                    isBlue ? 'hover:border-brand-blue-500' : 'hover:border-brand-orange-500'
                  }`}
                >
                  <div className={`h-2 bg-gradient-to-r ${
                    isBlue ? 'from-brand-blue-400 to-brand-blue-600' : 'from-brand-orange-400 to-brand-orange-600'
                  }`}></div>
                  
                  <div className="p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`text-5xl p-4 rounded-lg transition-colors ${
                        isBlue 
                          ? 'bg-brand-blue-50 group-hover:bg-brand-blue-100' 
                          : 'bg-brand-orange-50 group-hover:bg-brand-orange-100'
                      }`}>
                        {catalog.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold text-brand-black mb-2 transition-colors ${
                          isBlue ? 'group-hover:text-brand-blue-600' : 'group-hover:text-brand-orange-600'
                        }`}>
                          {catalog.title}
                        </h3>
                        <p className="text-brand-silver-600">
                          {catalog.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {catalog.specs.map((spec, idx) => (
                          <li key={idx} className="flex items-center text-sm text-brand-silver-700">
                            <svg className={`w-4 h-4 mr-2 ${
                              isBlue ? 'text-brand-blue-500' : 'text-brand-orange-500'
                            }`} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm text-brand-silver-500">
                        {catalog.format} • {catalog.fileSize}
                      </span>
                    </div>
                    
                    <a
                      href={catalog.downloadUrl}
                      download
                      className={`inline-flex items-center justify-center w-full px-6 py-3 text-white font-bold rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                        isBlue 
                          ? 'bg-brand-blue-600 hover:bg-brand-blue-700' 
                          : 'bg-brand-orange-600 hover:bg-brand-orange-700'
                      }`}
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      カタログをダウンロード
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-silver-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-brand-black mb-4">その他の資料</h2>
            <div className="w-20 h-1 bg-brand-orange-500"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {additionalResources.map((resource, index) => {
              const accentColor = resource.accent === 'silver' ? 'silver-600' : `${resource.accent}-600`;
              const bgColor = resource.accent === 'silver' ? 'silver-100' : `${resource.accent}-50`;
              
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-brand-silver-200 rounded-xl p-6 hover:border-brand-silver-400 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`text-3xl p-3 bg-brand-${bgColor} rounded-lg`}>
                      {resource.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-black">{resource.title}</h3>
                      <p className="text-sm text-brand-silver-600">{resource.description}</p>
                    </div>
                  </div>
                  <p className={`text-sm text-brand-${accentColor} font-medium`}>
                    近日公開予定
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">
            さらに詳しい情報をお求めですか？
          </h3>
          <p className="text-xl text-brand-silver-300 mb-12 max-w-2xl mx-auto">
            製品に関するご質問、デモのご依頼、見積もりのご相談など、お気軽にお問い合わせください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange-500 text-white font-bold rounded-lg hover:bg-brand-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              お問い合わせ
            </Link>
            <Link
              href="/downloads"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-brand-black transition-all"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              マニュアルを見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}