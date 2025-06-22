import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Lixel L2 Pro シリーズ - プロフェッショナル3Dレーザースキャナー | UP HASH',
  description: 'ゼロ後処理時代のSLAM技術搭載。16/120、32/120、32/300の3モデル展開。リアルタイムカラー点群生成、RTK統合による高精度測位。',
}

const models = [
  {
    name: 'L2 Pro 16/120',
    channels: '16チャンネル',
    range: '0.5m-120m',
    speed: '320,000点/秒',
    description: 'エントリーレベルのプロフェッショナルモデル'
  },
  {
    name: 'L2 Pro 32/120',
    channels: '32チャンネル',
    range: '0.5m-120m',
    speed: '640,000点/秒',
    description: 'スタンダードモデル、最も人気の構成'
  },
  {
    name: 'L2 Pro 32/300',
    channels: '32チャンネル',
    range: '0.5m-300m',
    speed: '640,000点/秒',
    description: '長距離対応、大規模プロジェクト向け'
  }
]

export default function LixelL2ProPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-500 text-white rounded-full">
                  Professional Series
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Lixel L2 Pro
              </h1>
              <p className="text-xl mb-8">
                ゼロ後処理時代のプロフェッショナル3Dレーザースキャナー
              </p>
              <p className="text-lg mb-8 text-gray-300">
                LiDAR、ビジュアル、IMUモジュールをAIと統合し、後処理品質に匹敵する
                リアルタイム点群データを実現。SLAMデバイスの新時代を切り開きます。
              </p>
              <div className="flex gap-4">
                <Link
                  href="#models"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  モデル一覧を見る
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
                >
                  見積もり依頼
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] bg-gray-700 rounded-xl overflow-hidden">
              <img 
                src={getImagePath('/images/lixel_l2_pro.jpg')} 
                alt="Lixel L2 Pro"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">革新的な機能</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">リアルタイム処理</h3>
              <p className="text-gray-600">後処理不要で、スキャンと同時に高品質な点群データを生成</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">デュアル48MPカメラ</h3>
              <p className="text-gray-600">190°×190°の広視野角で高解像度画像を撮影、豊富な色情報を提供</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">RTK統合</h3>
              <p className="text-gray-600">絶対測位精度3cm、WGS84/CGCS2000座標系サポート</p>
            </div>
          </div>
        </div>
      </section>

      {/* Model Comparison */}
      <section id="models" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">モデルラインナップ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                  <p className="text-gray-600 mb-6">{model.description}</p>
                  <dl className="space-y-4">
                    <div className="flex justify-between">
                      <dt className="text-gray-500">チャンネル</dt>
                      <dd className="font-medium">{model.channels}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-500">スキャン範囲</dt>
                      <dd className="font-medium">{model.range}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-500">スキャン速度</dt>
                      <dd className="font-medium">{model.speed}</dd>
                    </div>
                  </dl>
                </div>
                <div className="px-8 py-4 bg-gray-50">
                  <Link
                    href="/contact"
                    className="block text-center text-blue-600 font-medium hover:text-blue-700"
                  >
                    このモデルについて問い合わせる →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Specifications */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">共通仕様</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Point Cloud Quality */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-blue-600">点群品質</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm text-gray-500">点群密度</dt>
                    <dd className="text-lg font-medium">100万点/㎡（1mm間隔）</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">点群厚さ</dt>
                    <dd className="text-lg font-medium">5mm</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">相対精度</dt>
                    <dd className="text-lg font-medium">±2cm（100m以内の任意の2点間）</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">絶対精度</dt>
                    <dd className="text-lg font-medium">±3cm（RTK信号切断時、軌跡100m以下）</dd>
                  </div>
                </dl>
              </div>

              {/* Technical Features */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-6 text-blue-600">技術仕様</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm text-gray-500">カメラシステム</dt>
                    <dd className="text-lg font-medium">2×48MP（190°×190°視野）</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">IMU</dt>
                    <dd className="text-lg font-medium">高精度6DOF IMU</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">データ形式</dt>
                    <dd className="text-lg font-medium">リアルタイムトゥルーカラー点群</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">対応ドローン</dt>
                    <dd className="text-lg font-medium">DJI M350/M300 RTK</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Software */}
            <div className="mt-8 bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">ソフトウェア</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">LixelGo モバイルアプリ</h4>
                  <p className="text-gray-600">スキャン制御とリアルタイムプレビュー</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">LixelStudio</h4>
                  <p className="text-gray-600">点群データの表示、編集、処理をワンストップで提供</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">活用分野</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold">測量・地図作成</h3>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-semibold">スマートシティ</h3>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold">緊急対応</h3>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-semibold">産業検査</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            プロフェッショナルグレードの3Dスキャンを体験
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            お客様のプロジェクトに最適なモデルをご提案します
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            無料相談・デモを申し込む
          </Link>
        </div>
      </section>
    </main>
  )
}