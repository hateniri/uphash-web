import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

export default function Hero() {
  return (
    <section className="relative">
      {/* First section with video background */}
      <div className="relative min-h-screen">
        {/* Background video section */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={getImagePath('/videos/BG.mp4')} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
                空間コンピューティングソリューション
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-16 max-w-4xl mx-auto">
                XGRIDSのMulti-SLAM + マルチセンサーフュージョンシステムで、産業領域における3Dモデリングを次の次元へ。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second section with white background */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Text section */}
            <div className="text-center mb-24">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                完全な3D制作のためのデータ取得ハードウェア
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                XGRIDSのLixelシリーズは、空間情報を価値あるデジタル資産へと変換するために、専用のキャプチャ技術と処理ソフトウェアを搭載したハードウェアシステムです。
              </p>
            </div>
            
            {/* Products section with proper spacing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left pt-32">
              {/* L2 Pro */}
              <div className="relative">
                <div className="relative overflow-visible mb-8 h-64">
                  <div className="absolute inset-0 flex items-end justify-center">
                    <div className="w-full">
                      <img 
                        src={getImagePath('/images/l2pro_product.png')} 
                        alt="Lixel L2 Pro Product"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-2xl shadow-lg">
                  <div className="flex justify-center pt-8">
                    <img 
                      src={getImagePath('/images/l2Pro_name_en.png')} 
                      alt="Lixel L2 Pro Logo"
                      className="max-w-full h-auto object-contain ml-20"
                    />
                  </div>
                  <div className="p-8 pt-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      高精度リアルタイム3Dモデリングデバイス
                    </h3>
                    <ul className="text-gray-700 space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>後処理レベルの高品質データをリアルタイム生成</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>点群精度は最大1mm</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>現場で即時確認、業務効率を最大化</span>
                      </li>
                    </ul>
                    <Link
                      href="/products/lixel-l2-pro"
                      className="inline-flex items-center text-gray-900 hover:text-gray-700 font-medium transition-colors"
                    >
                      詳細を見る
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* K1 */}
              <div className="relative">
                <div className="relative overflow-visible mb-8 h-64">
                  <div className="absolute inset-0 flex items-end justify-center">
                    <div className="w-full">
                      <img 
                        src={getImagePath('/images/k1_product.png')} 
                        alt="Lixel K1 Product"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-2xl shadow-lg">
                  <div className="flex justify-center pt-8">
                    <img 
                      src={getImagePath('/images/k1_name_en.png')} 
                      alt="Lixel K1 Logo"
                      className="max-w-full h-auto object-contain ml-20"
                    />
                  </div>
                  <div className="p-8 pt-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      コンパクトなハンドヘルド3Dスキャナ
                    </h3>
                    <ul className="text-gray-700 space-y-2 mb-6">
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>超一体型ハードウェア設計</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>歩くだけでスキャン完了</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-400 mr-2">•</span>
                        <span>専門知識も高額機材も不要でプロレベルの成果を実現</span>
                      </li>
                    </ul>
                    <Link
                      href="/products/lixel-k1"
                      className="inline-flex items-center text-gray-900 hover:text-gray-700 font-medium transition-colors"
                    >
                      詳細を見る
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}