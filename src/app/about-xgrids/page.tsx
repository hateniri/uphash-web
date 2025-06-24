import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { getImagePath } from '@/lib/utils'

export const metadata: Metadata = generatePageMetadata({
  title: 'XGRIDSとは - 3Dインテリジェント空間コンピューティング',
  description: 'XGRIDSは実世界のシーンをキャプチャ・再構築し、鮮明で計測可能な3D体験へと変換。インテリジェント空間コンピューティングのインフラを構築します。',
  path: '/about-xgrids',
  keywords: ['XGRIDS', '空間コンピューティング', '3D体験', 'デジタルツイン', 'SLAM技術']
})

export default function AboutXgridsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <p className="text-lg md:text-xl text-gray-400 mb-6">世界をリードする</p>
            
            {/* Logo Image */}
            <div className="mb-8">
              <img 
                src={getImagePath('/images/xgrids-logo.png')} 
                alt="XGRIDSロゴ"
                className="h-16 md:h-20 mx-auto"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              3Dインテリジェント空間コンピューティング
            </h1>
            
            <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              <p>
                XGRIDS は、現場とスクリーンの距離を縮めます。
              </p>
              <p>
                実世界のシーンをキャプチャ・再構築・ストリーミングし、鮮明で計測可能な3D体験へと変換します。
              </p>
              <p>
                独自のデータパイプラインにより、複雑な現場も数時間で軽量かつ共有可能な3Dビジュアルへ。
              </p>
              <p>
                「見る」「測る」「コラボレーションする」ための、リアルな空間体験を実現します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">ミッション</h2>
              <p className="text-lg md:text-xl text-gray-300">
                インテリジェント空間コンピューティングのインフラを構築する。
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">ビジョン</h2>
              <p className="text-lg md:text-xl text-gray-300">
                物理世界とデジタル体験をシームレスにつなぐフィードバックループを実現する。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Technology */}
      <section className="py-20 md:py-32 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            私たちのチームと技術
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">革新を牽引するチーム</h3>
              <p className="text-gray-300">
                研究開発人材の80%が、世界有数のテック企業やトップ大学出身。
                最先端の技術を実用的なソリューションへと変革しています。
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">次世代テクノロジースタック</h3>
              <p className="text-gray-300">
                70件以上の発明特許を保有し、AIベースの空間インテリジェンスエンジン、
                マルチセンサーSLAM、3Dガウシアンスプラッティング技術を駆使。
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-green-400">実績に裏打ちされた信頼性</h3>
              <p className="text-gray-300">
                すでに2,000社以上がXGRIDS技術を導入し、測量・建設・文化財保存・
                デジタルエンターテインメントなど多分野で活用。
              </p>
            </div>
          </div>
          
          <p className="text-center text-lg md:text-xl text-gray-300 mt-12 max-w-4xl mx-auto">
            空間を「見える化」「測定可能化」「理解可能化」することで、
            インテリジェントなデジタルレプリカを実現しています。
          </p>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 md:py-32 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            マイルストーン
          </h2>
          
          <div className="max-w-6xl mx-auto mb-16">
            <img 
              src={getImagePath('/images/xgrids-milestones.png')} 
              alt="XGRIDSマイルストーン - 2020年から2024年までの歩み"
              className="w-full h-auto rounded-xl"
            />
          </div>
          
          <div className="text-center mb-16">
            <p className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              フィジカルとデジタルの世界をつなぐ架け橋に。
            </p>
            
            <div className="max-w-4xl mx-auto">
              <img 
                src={getImagePath('/images/xgrids-bridge.png')} 
                alt="物理世界とデジタル世界をつなぐXGRIDSの技術イメージ"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            XGRIDSで未来の空間体験を
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            革新的な3D技術で、あなたのビジネスを次のレベルへ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all"
            >
              製品を見る
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-600 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}