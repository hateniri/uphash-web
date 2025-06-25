import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

const softwareProducts = [
  {
    id: 'lixel-studio',
    name: 'Lixel Studio',
    category: 'デスクトップ',
    description: '高速点群処理とカラー化を実現するプロフェッショナル向けソフトウェア',
    features: [
      'リアルタイム点群処理',
      'HD Enhancement機能',
      'Map Fusion対応',
      'AutoCAD連携（RCP出力）'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    href: '/products/lixel-studio'
  },
  {
    id: 'lcc-studio',
    name: 'LCC Studio',
    category: 'デスクトップ',
    description: '3D Gaussian Splattingによる革新的な3Dコンテンツ作成ツール',
    features: [
      '高速3Dメッシュ生成',
      'テクスチャ自動マッピング',
      'LOD自動生成',
      'リアルタイムプレビュー'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    href: '/products/lixel-cyber-color'
  },
  {
    id: 'lcc-revit',
    name: 'LCC for Revit',
    category: 'プラグイン',
    description: 'RevitでAI技術を活用したBIMモデリングを実現',
    features: [
      'AI自動モデリング',
      '点群からBIMへ直接変換',
      'リアルタイム同期',
      'ワンクリック最適化'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    href: '/products/revit-plugin'
  },
  {
    id: 'lixel-go',
    name: 'Lixel GO',
    category: 'モバイル',
    description: 'スマートフォンで手軽に3Dスキャンを実現',
    features: [
      'iPhone/Android対応',
      'クラウド自動同期',
      'AR表示機能',
      'リアルタイム共有'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    href: '/products/lixel-go'
  }
]

export default function SoftwareSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ソフトウェアソリューション
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            点群処理から3Dコンテンツ作成まで、すべてのワークフローをカバー
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {softwareProducts.map((software, index) => (
            <Link
              key={software.id}
              href={software.href}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)`
                }} />
              </div>
              
              <div className="relative p-8 md:p-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {/* Icon with gradient background */}
                    <div className={`p-4 rounded-xl ${
                      index % 2 === 0 
                        ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                        : 'bg-gradient-to-br from-gray-600 to-gray-700'
                    } text-white shadow-lg`}>
                      {software.icon}
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">{software.category}</span>
                      <h3 className="text-2xl font-bold text-gray-900 mt-1">{software.name}</h3>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {software.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {software.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <span className="text-sm text-gray-500">詳細情報</span>
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                    <span className="mr-2">詳細を見る</span>
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/software"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors shadow-lg"
          >
            すべてのソフトウェアを見る
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}