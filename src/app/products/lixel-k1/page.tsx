'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

export default function LixelK1Page() {
  const [showSpecs, setShowSpecs] = useState(false)

  return (
    <main className="min-h-screen">
      {/* Hero Section with Banner Background */}
      <section className="relative bg-gradient-to-br from-orange-50 to-white py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url(${getImagePath('/images/products/k1/banner_s.jpg')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-orange-100 text-orange-800 rounded-full">
                  Compact & Powerful
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Lixel K1
              </h1>
              <p className="text-2xl text-gray-800 font-semibold mb-4">
                小さいけどパワフル
              </p>
              <p className="text-xl text-gray-600 mb-4">
                片手で持てる1kg未満の超軽量ボディに、
                プロフェッショナルグレードの性能を凝縮。
                誰でも簡単に、高精度3Dスキャンを実現します。
              </p>
              <div className="bg-orange-50 rounded-lg p-4 mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-gray-600">標準価格</span>
                  <span className="text-3xl font-bold text-orange-600">190万円</span>
                  <span className="text-sm text-gray-500">（税別・送料別途）</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowSpecs(true)}
                  className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors"
                >
                  スペックを見る
                </button>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 transition-colors"
                >
                  見積もり依頼
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <img 
                src={getImagePath('/images/products/k1/k1_2_1.jpg')} 
                alt="Lixel K1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Price Highlight Section */}
      <section className="py-8 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              プロフェッショナル性能を、より手軽に
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-orange-600 mb-2">190万円</div>
                <p className="text-gray-600">標準価格（税別）</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-gray-800 mb-2">&lt; 1kg</div>
                <p className="text-gray-600">超軽量設計</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-gray-800 mb-2">32ch</div>
                <p className="text-gray-600">高精度LiDAR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Easy to Use Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">使い方は簡単</h2>
            <p className="text-xl text-gray-600">3ステップで誰でもプロ級のスキャンが可能</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">電源オン</h3>
              <p className="text-gray-600">ボタンを押すだけで起動。複雑な設定は不要です。</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">アプリ接続</h3>
              <p className="text-gray-600">スマホアプリと自動接続。リアルタイムでスキャンを確認。</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">スキャン開始</h3>
              <p className="text-gray-600">歩きながらスキャン。AIが自動で最適化します。</p>
            </div>
          </div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              <video
                controls
                className="w-full h-full"
                poster={getImagePath('/images/products/k1/k1_3_1.jpg')}
              >
                <source src={getImagePath('/videos/k1_3_1.mp4')} type="video/mp4" />
                お使いのブラウザは動画再生に対応していません。
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Small but Powerful Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">小さなボディに、大きな可能性</h2>
              <p className="text-xl text-gray-600">コンパクトだからこそ実現できる、新しいスキャン体験</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src={getImagePath('/images/products/k1/k1_3_1.jpg')} 
                  alt="Lixel K1 Compact Design"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 flex items-center">
                    <span className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </span>
                    超軽量1kg未満
                  </h3>
                  <p className="text-gray-600">
                    長時間の作業でも疲れません。片手で楽々操作でき、狭い場所でも自在にスキャン可能です。
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 flex items-center">
                    <span className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    40チャンネルLiDAR
                  </h3>
                  <p className="text-gray-600">
                    小型ながら40チャンネルの高密度LiDARを搭載。最大40mの測定範囲で、幅広いシーンに対応します。
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 flex items-center">
                    <span className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    AI駆動の自動最適化
                  </h3>
                  <p className="text-gray-600">
                    動的オブジェクト除去や自動品質調整により、初心者でもプロ級の結果を得られます。
                  </p>
                </div>
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-orange-600 mb-2">±1.2cm</div>
                <div className="text-sm text-gray-600">相対精度</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-orange-600 mb-2">200K</div>
                <div className="text-sm text-gray-600">点/秒</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-orange-600 mb-2">56MP</div>
                <div className="text-sm text-gray-600">パノラマ画像</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-orange-600 mb-2">1.5h</div>
                <div className="text-sm text-gray-600">連続稼働</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">様々なシーンで活躍</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">建築・建設</h3>
              <p className="text-sm text-gray-600">現場の進捗管理や品質チェック、BIMモデルとの照合</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">不動産</h3>
              <p className="text-sm text-gray-600">物件の3Dバーチャルツアー作成、空間計測</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">文化財保存</h3>
              <p className="text-sm text-gray-600">遺跡や美術品のデジタルアーカイブ化</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">インフラ点検</h3>
              <p className="text-sm text-gray-600">橋梁やトンネルの定期検査、劣化診断</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Lixel K1で、3Dスキャンをもっと身近に
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            デモンストレーションや詳細な仕様についてのお問い合わせはお気軽にどうぞ
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              見積もり・デモを依頼する
            </Link>
            <Link
              href="/tutorials"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
            >
              チュートリアルを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Specs Modal */}
      {showSpecs && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowSpecs(false)}>
          <div className="bg-white rounded-xl max-w-6xl max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold">Lixel K1 詳細スペック</h2>
              <button 
                onClick={() => setShowSpecs(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              {/* System Parameters */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">システムパラメータ</h3>
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">製品モデル</td>
                      <td className="py-3 text-gray-900">LixelKity K1</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">寸法</td>
                      <td className="py-3 text-gray-900">250mm × 110mm × 95mm</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">重量</td>
                      <td className="py-3 text-gray-900">約1kg（バッテリー含む）</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">消費電力</td>
                      <td className="py-3 text-gray-900">&lt;20W</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">データインターフェース</td>
                      <td className="py-3 text-gray-900">USB 3.1 Gen2</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">ストレージ容量</td>
                      <td className="py-3 text-gray-900">TFカード 256GB</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Environmental Specs */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">環境仕様</h3>
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">動作温度</td>
                      <td className="py-3 text-gray-900">-20℃ ~ +50℃</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">保管温度</td>
                      <td className="py-3 text-gray-900">-30℃ ~ +60℃</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">保護等級</td>
                      <td className="py-3 text-gray-900">IP54</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Accuracy Specs */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">精度仕様</h3>
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">相対精度</td>
                      <td className="py-3 text-gray-900">±1.2cm</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">繰り返し精度</td>
                      <td className="py-3 text-gray-900">±2cm</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">絶対精度</td>
                      <td className="py-3 text-gray-900">±3cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* LiDAR Module */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">LiDARモジュール</h3>
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">レーザークラス</td>
                      <td className="py-3 text-gray-900">クラス1（アイセーフ）</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">レーザー波長</td>
                      <td className="py-3 text-gray-900">905nm</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">動作範囲</td>
                      <td className="py-3 text-gray-900">0.1m ~ 40m（10%反射率）</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">スキャンレート</td>
                      <td className="py-3 text-gray-900">最大200,000点/秒</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">視野角</td>
                      <td className="py-3 text-gray-900">水平 360° × 垂直 -7° ~ +52°</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">チャンネル数</td>
                      <td className="py-3 text-gray-900">40チャンネル</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Visual System */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">視覚システム</h3>
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">カメラ視野角</td>
                      <td className="py-3 text-gray-900">360° × 360° カラーパノラマ</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">カメラ解像度</td>
                      <td className="py-3 text-gray-900">48MP × 2（デュアルカメラ）</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">パノラマ画像解像度</td>
                      <td className="py-3 text-gray-900">最大 56MP</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Battery & Charging */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">バッテリー＆充電</h3>
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">動作可能時間</td>
                      <td className="py-3 text-gray-900">約1.5時間</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">バッテリー容量</td>
                      <td className="py-3 text-gray-900">28.8Wh</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">充電時間</td>
                      <td className="py-3 text-gray-900">約60分</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Connectivity */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-orange-600">接続性</h3>
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">接続モード</td>
                      <td className="py-3 text-gray-900">WiFi / Bluetooth</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-8 text-gray-600">APP WiFi距離</td>
                      <td className="py-3 text-gray-900">最大20m</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}