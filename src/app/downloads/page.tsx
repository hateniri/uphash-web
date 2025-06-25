import { Metadata } from 'next'
import Link from 'next/link'
import { getImagePath } from '@/lib/utils'
import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'マニュアル',
  description: 'XGRIDS製品のオンラインマニュアル、スキャンガイド、技術資料をご覧いただけます。',
  path: '/downloads',
  keywords: ['マニュアル', 'スキャンガイド', 'オンラインマニュアル', '技術資料', 'ドキュメント']
})

const manuals = {
  scanGuides: [
    {
      name: 'スキャンガイド',
      description: '初めての方向けの基本的なスキャン方法',
      type: 'オンラインマニュアル',
      icon: '📖',
      link: '/scan-guide',
      accent: 'blue' as const
    },
    {
      name: '上級スキャンガイド',
      description: 'プロフェッショナル向けの高度なスキャン技術',
      type: 'オンラインマニュアル',
      icon: '📚',
      link: '/advanced-scan-guide',
      accent: 'orange' as const
    }
  ],
  softwareManuals: [
    {
      name: 'LCC Studio マニュアル',
      description: '3D Gaussian Splatting ソフトウェアの完全ガイド',
      version: 'v1.8.0',
      type: 'オンラインマニュアル',
      icon: '💻',
      link: '/lcc-studio-manual',
      accent: 'blue' as const
    },
    {
      name: 'LCC for Revit ガイド',
      description: 'Revitプラグインの簡易操作ガイド',
      version: 'v1.0.9',
      type: 'オンラインマニュアル',
      icon: '🏗️',
      link: '/lcc-revit-guide',
      accent: 'silver' as const
    },
    {
      name: 'LCC for Revit マニュアル',
      description: 'Revitプラグインの詳細マニュアル',
      version: 'v1.0.9',
      type: 'オンラインマニュアル',
      icon: '📘',
      link: '/lcc-revit-manual',
      accent: 'orange' as const
    }
  ]
}

export default function DownloadsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-brand-black text-white py-16 md:py-24">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-grid-pattern-dark bg-grid opacity-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              マニュアル
            </h1>
            <p className="text-xl text-brand-silver-300">
              製品の使い方、技術情報、ベストプラクティスをご覧いただけます
            </p>
          </div>
        </div>
      </section>

      {/* Scan Guides Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-brand-black mb-4">スキャンガイド</h2>
            <div className="w-20 h-1 bg-brand-blue-600"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {manuals.scanGuides.map((guide, index) => (
              <Link
                key={index}
                href={guide.link}
                className={`group bg-white border-2 border-brand-silver-200 rounded-xl p-8 hover:border-brand-${guide.accent}-500 transition-all hover:shadow-lg`}
              >
                <div className="flex items-start gap-6">
                  <div className={`text-5xl p-4 bg-brand-${guide.accent}-50 rounded-lg group-hover:bg-brand-${guide.accent}-100 transition-colors`}>
                    {guide.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-3 text-brand-black group-hover:text-brand-${guide.accent}-600 transition-colors`}>
                      {guide.name}
                    </h3>
                    <p className="text-brand-silver-600 mb-4">{guide.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-brand-silver-500 font-medium">{guide.type}</span>
                      <span className={`text-brand-${guide.accent}-600 group-hover:translate-x-2 transition-transform`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Software Manuals Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-silver-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-brand-black mb-4">ソフトウェアマニュアル</h2>
            <div className="w-20 h-1 bg-brand-orange-500"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manuals.softwareManuals.map((manual, index) => {
              const accentColor = manual.accent === 'silver' ? 'silver-600' : `${manual.accent}-600`;
              const bgColor = manual.accent === 'silver' ? 'silver-100' : `${manual.accent}-50`;
              const hoverBgColor = manual.accent === 'silver' ? 'silver-200' : `${manual.accent}-100`;
              
              return (
                <Link
                  key={index}
                  href={manual.link}
                  className="group bg-white border-2 border-brand-silver-200 rounded-xl p-8 hover:border-brand-silver-400 transition-all hover:shadow-xl"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-brand-${bgColor} rounded-full mb-6 group-hover:bg-brand-${hoverBgColor} transition-colors`}>
                    <span className="text-3xl">{manual.icon}</span>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 text-brand-black group-hover:text-brand-${accentColor} transition-colors`}>
                    {manual.name}
                  </h3>
                  
                  <p className="text-brand-silver-600 mb-6">
                    {manual.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      {manual.version && (
                        <span className={`inline-block px-3 py-1 bg-brand-${bgColor} text-brand-${accentColor} rounded-full font-medium mr-2`}>
                          {manual.version}
                        </span>
                      )}
                      <span className="text-brand-silver-500">{manual.type}</span>
                    </div>
                    
                    <span className={`text-brand-${accentColor} group-hover:translate-x-2 transition-transform`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 md:py-24 bg-brand-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            その他のリソース
          </h2>
          <p className="text-xl text-brand-silver-300 mb-12 max-w-2xl mx-auto">
            カタログのダウンロードや技術サポートが必要な場合はこちらから
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/catalog"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange-500 text-white font-bold rounded-lg hover:bg-brand-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              カタログを見る
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-brand-black transition-all"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              技術サポート
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}