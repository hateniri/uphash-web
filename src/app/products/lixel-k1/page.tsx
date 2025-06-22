import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Lixel K1 - 超軽量コンパクトハンドヘルドスキャナー | UP HASH',
  description: '重量1kg未満の超軽量コンパクトハンドヘルドスキャナー。40チャンネルLiDAR、最大40mスキャン範囲、AI駆動の動的オブジェクト除去機能搭載。',
}

export default function LixelK1Page() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                  Compact
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Lixel K1
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                超軽量コンパクトハンドヘルドスキャナー
              </p>
              <p className="text-lg text-gray-600 mb-8">
                重量1kg未満で片手操作が可能。プロフェッショナルグレードの精度を保ちながら、
                手軽に3Dスキャンを実現します。
              </p>
              <div className="flex gap-4">
                <Link
                  href="#specs"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  詳細スペックを見る
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 transition-colors"
                >
                  見積もり依頼
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] bg-gray-100 rounded-xl overflow-hidden">
              <img 
                src={getImagePath('/images/lixel_kity_k1.jpg')} 
                alt="Lixel K1"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">主要機能</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">超軽量設計</h3>
              <p className="text-gray-600">バッテリー込みで1kg未満。長時間の作業でも疲れません。</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">高速スキャン</h3>
              <p className="text-gray-600">200,000点/秒の高速スキャンで効率的な作業を実現。</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI技術搭載</h3>
              <p className="text-gray-600">動的オブジェクト除去機能で、クリーンな3Dモデルを生成。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section id="specs" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">詳細スペック</h2>
          <div className="max-w-5xl mx-auto">
            {/* Device Performance */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-blue-600">デバイス性能</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-gray-500">重量</dt>
                      <dd className="text-lg font-medium">約1kg</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">消費電力</dt>
                      <dd className="text-lg font-medium">&lt;20W</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">電源入力</dt>
                      <dd className="text-lg font-medium">14.4V</dd>
                    </div>
                  </dl>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-gray-500">データインターフェース</dt>
                      <dd className="text-lg font-medium">USB 3.1 Gen2</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">ストレージ容量</dt>
                      <dd className="text-lg font-medium">TFカード 256GB</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">動作温度</dt>
                      <dd className="text-lg font-medium">-20℃〜50℃</dd>
                    </div>
                  </dl>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-gray-500">保護等級</dt>
                      <dd className="text-lg font-medium">IP54</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">筐体材質</dt>
                      <dd className="text-lg font-medium">高耐久アルミ筐体</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">稼働時間</dt>
                      <dd className="text-lg font-medium">約1.5時間</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* LiDAR Performance */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200">
                  <h3 className="text-xl font-semibold mb-6 text-blue-600">LiDAR性能</h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-gray-500">相対精度</dt>
                      <dd className="text-lg font-medium">±1.2cm</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">繰り返し精度</dt>
                      <dd className="text-lg font-medium">±2cm</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">絶対精度</dt>
                      <dd className="text-lg font-medium">±3cm</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">レーザークラス</dt>
                      <dd className="text-lg font-medium">クラス1（905nm）</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">スキャン速度</dt>
                      <dd className="text-lg font-medium">最大200,000点/秒</dd>
                    </div>
                  </dl>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-6 text-blue-600">測定範囲・視野角</h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-gray-500">動作範囲</dt>
                      <dd className="text-lg font-medium">0.1m〜40m（10%反射率）</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">最大範囲</dt>
                      <dd className="text-lg font-medium">最大70m（80%反射率）</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">水平精度</dt>
                      <dd className="text-lg font-medium">±0.015°</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">LiDAR視野角</dt>
                      <dd className="text-lg font-medium">水平360° × 垂直-7〜+52°</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">スキャンモード</dt>
                      <dd className="text-lg font-medium">モバイルスキャン（歩行計測）</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* Vision Module */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-blue-600">視覚モジュール</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-gray-500">カメラ視野角</dt>
                      <dd className="text-lg font-medium">360° × 360° カラーパノラマHDV</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">カメラ解像度</dt>
                      <dd className="text-lg font-medium">48MP ×2（デュアルカメラ）</dd>
                    </div>
                  </dl>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-gray-500">パノラマ画像解像度</dt>
                      <dd className="text-lg font-medium">最大 56MP</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">視覚支援測位</dt>
                      <dd className="text-lg font-medium">対応</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* Connectivity & Battery */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200">
                  <h3 className="text-xl font-semibold mb-6 text-blue-600">接続仕様</h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-gray-500">接続モード</dt>
                      <dd className="text-lg font-medium">WiFi / Bluetooth</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">WiFi周波数</dt>
                      <dd className="text-sm">
                        • 2.4GHz: 2412–2472MHz<br />
                        • 5.2GHz: 5180–5240MHz<br />
                        • 5.8GHz: 5745–5825MHz
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">APP WiFi距離</dt>
                      <dd className="text-lg font-medium">最大20m</dd>
                    </div>
                  </dl>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-6 text-blue-600">バッテリー・データ</h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-gray-500">バッテリー容量</dt>
                      <dd className="text-lg font-medium">28.8Wh</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">電源供給</dt>
                      <dd className="text-lg font-medium">着脱式ファストロックバッテリー／外部電源</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">点群フォーマット</dt>
                      <dd className="text-lg font-medium">.las（標準点群フォーマット）</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">カラー点群</dt>
                      <dd className="text-lg font-medium">対応（リアルタイムカラー点群生成）</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">活用シーン</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">建築・建設</h3>
              <p className="text-sm text-gray-600">現場の進捗管理や品質チェック</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">文化財保存</h3>
              <p className="text-sm text-gray-600">遺跡や美術品のデジタルアーカイブ</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">インフラ点検</h3>
              <p className="text-sm text-gray-600">橋梁やトンネルの定期検査</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">不動産</h3>
              <p className="text-sm text-gray-600">物件の3Dバーチャルツアー作成</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Lixel K1で3Dスキャンを始めましょう
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            デモンストレーションや詳細な仕様についてのお問い合わせはお気軽にどうぞ
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            見積もり・デモを依頼する
          </Link>
        </div>
      </section>
    </main>
  )
}