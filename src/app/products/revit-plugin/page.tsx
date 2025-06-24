import { Metadata } from 'next'
import Link from 'next/link'
import { getImagePath } from '@/lib/utils'
import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'LCC for Revit - AI搭載BIMモデリングツール',
  description: 'AI搭載3D Gaussian Splatting BIMモデリングツール。Scan-to-BIMワークフローを70-90%短縮。Revit内で直接3DGSモデルを表示・編集。',
  path: '/products/revit-plugin',
  image: '/images/logos/revit-logo.png',
  keywords: ['LCC for Revit', 'Revitプラグイン', 'Scan-to-BIM', '3D Gaussian Splatting', 'BIMモデリング', 'AI BIM']
})

export default function RevitPluginPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-black text-white py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${getImagePath('/images/products/revit/revit-hero-bg.jpg')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              AI搭載 3D Gaussian Splatting BIMモデリングツール
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-blue-400">
              LCC for Revit
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Autodeskとのパートナーシップによって開発された <span className="font-semibold text-white">LCC for Revit</span> は、RevitとLCCモデルをシームレスに接続し、<br />
              効率的かつ直感的で高精細なBIMモデリング体験を提供します。
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                導入相談をする
              </Link>
              <Link
                href="#scan-to-bim"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-400 text-gray-300 font-medium rounded-lg hover:border-white hover:text-white transition-colors"
              >
                詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scan to BIM Section */}
      <section id="scan-to-bim" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              最短3ステップで完了するScan-to-BIM
            </h2>
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-full inline-block">
              <p className="text-2xl font-semibold">
                モデリング作業を70〜90%短縮
              </p>
            </div>
          </div>

          <div className="space-y-24">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                    1
                  </div>
                  <h3 className="text-3xl font-bold">キャプチャ（スキャン）</h3>
                </div>
                <p className="text-xl text-gray-700">
                  Lixelスキャナーでわずか5分で120㎡をスキャン
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl aspect-video">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={getImagePath('/videos/revit-step1.mp4')} type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl aspect-video">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={getImagePath('/videos/revit-step2.mp4')} type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                    2
                  </div>
                  <h3 className="text-3xl font-bold">処理（3DGS変換）</h3>
                </div>
                <p className="text-xl text-gray-700">
                  自動処理で約70分後には3DGSモデルを生成
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                    3
                  </div>
                  <h3 className="text-3xl font-bold">モデリング（Revit連携）</h3>
                </div>
                <p className="text-xl text-gray-700">
                  2分でRevit上にBIMモデルを構築
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl aspect-video">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={getImagePath('/videos/revit-step3.mp4')} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI BIM Generation */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">
              空間認識AIによる自動BIM生成
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              高度なAIが、スキャンデータから壁・ドア・窓・階層などの構造を自動的に認識。<br />
              <span className="font-semibold">ワンクリックで幾何学的に正確なBIMモデル</span>を生成できます。
            </p>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
              <img 
                src={getImagePath('/images/products/revit/ai-bim-generation.jpg')} 
                alt="AIが壁やドアを自動認識しBIMモデルを生成する様子"
                className="w-full"
              />
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <p className="text-gray-700">
                ※空間認識機能はLCC Studioでの有効化が必要です。有効化されていない場合は、手動モデリング用のDrawモードをご使用ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Sync */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                RevitとLCCのリアルタイム連携
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                BIMモデルとLCC空間モデルをリアルタイムで同期。<br />
                現場の空間情報をそのまま設計に反映でき、<span className="font-semibold">推測や手戻りを最小化</span>します。
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <img 
                src={getImagePath('/images/products/revit/realtime-sync.jpg')} 
                alt="RevitとLCCがリアルタイムで同期している画面"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Camera Sync */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={getImagePath('/images/products/revit/camera-sync.jpg')} 
                  alt="RevitとLCC Viewer間でカメラ位置が同期されている画面"
                  className="w-full"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6">
                カメラ同期による正確な課題検出
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                RevitとLCC Viewer間でカメラ位置を同期。<br />
                視点を一致させることで、<span className="font-semibold">モデリングミスの特定と修正が即座に可能</span>になります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Semantic Grouping */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                意味的点群グルーピングによる空間理解
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                スキャンデータを建築要素ごとに自動分類し、空間構成を可視化。<br />
                <span className="font-semibold">レイアウト分析とBIM化がよりスムーズ</span>に行えます。
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <img 
                src={getImagePath('/images/products/revit/semantic-grouping.jpg')} 
                alt="点群データが建築要素ごとに色分けされた3Dモデル"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            LCC for Revitは、次世代のScan-to-BIMワークフローを実現します。
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            建築・設計業務の効率を飛躍的に向上させる革新的なソリューション
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              導入について相談する
            </Link>
            <Link
              href="/lcc-revit-guide"
              className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              簡易ガイドを見る
            </Link>
            <Link
              href="/lcc-revit-manual"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              詳細マニュアル
            </Link>
            <Link
              href="/tutorials"
              className="inline-flex items-center px-8 py-4 border-2 border-gray-400 text-gray-300 font-medium rounded-lg hover:border-white hover:text-white transition-colors"
            >
              チュートリアルを見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}