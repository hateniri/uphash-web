'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

const models = [
  {
    name: 'L2 Pro 16/120',
    channels: '16チャンネル',
    range: '0.5m-120m',
    speed: '320,000点/秒',
    description: 'エントリーレベルのプロフェッショナルモデル',
    image: '/images/l2pro_product.png',
    price: '350万円'
  },
  {
    name: 'L2 Pro 32/120',
    channels: '32チャンネル',
    range: '0.5m-120m',
    speed: '640,000点/秒',
    description: 'スタンダードモデル、最も人気の構成',
    image: '/images/l2pro_product.png',
    price: '550万円'
  },
  {
    name: 'L2 Pro 32/300',
    channels: '32チャンネル',
    range: '0.5m-300m',
    speed: '640,000点/秒',
    description: '長距離対応、大規模プロジェクト向け',
    image: '/images/l2pro_product.png',
    price: '750万円'
  }
]

const accessories = [
  {
    name: '延長ポール',
    description: '高所や届きにくい場所のスキャンに最適',
    image: '/images/accessories/extension-pole.jpg'
  },
  {
    name: 'ハーネスシステム',
    description: 'ハンズフリースキャンを実現',
    image: '/images/accessories/harness.jpg'
  },
  {
    name: 'Survey Grade RTKアンテナ',
    description: '測量グレードの高精度RTK測位',
    image: '/images/accessories/rtk-antenna.jpg'
  },
  {
    name: '追加バッテリーパック',
    description: '長時間の連続作業をサポート',
    image: '/images/accessories/battery.jpg'
  }
]

export default function LixelL2ProPage() {
  const [showSpecs, setShowSpecs] = useState(false)

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
                <button
                  onClick={() => setShowSpecs(true)}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  スペックを見る
                </button>
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
                alt="Lixel L2 Proプロフェッショナル3Dレーザースキャナー製品画像"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Sections */}
      
      {/* 1. 点群がすごいこと */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                圧倒的な点群品質
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                毎秒最大64万点の高密度スキャンにより、細部まで正確に捉えます。
                リアルタイムで生成される点群は、後処理済みデータと同等の品質を実現。
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong>点群厚さ0.5cm</strong> - 業界最高水準の精度
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong>相対精度±1cm (RMSE)</strong> - 測量グレードの精度
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong>360°×270°視野角</strong> - 死角を最小化
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <img 
                src={getImagePath('/images/products/l2pro-pointcloud.jpg')} 
                alt="Lixel L2 Proで取得した高密度点群データの表示例"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. 3DGSができること */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gray-200 rounded-xl p-8">
              <img 
                src={getImagePath('/images/products/l2pro-3dgs.jpg')} 
                alt="3D Gaussian Splatting技術で生成されたフォトリアルな3Dモデル"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                歩くだけで3D Gaussian Splattingを実現
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                デュアル48MPカメラとLiDARの融合により、フォトリアルな3Dモデルを
                リアルタイムで生成。後処理なしで、すぐに活用できる3DGSデータを提供します。
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-semibold mb-2">デュアル48MPカメラ</h3>
                  <p className="text-gray-600">190°×190°の広視野角で高解像度画像を同時撮影</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-semibold mb-2">AIによるリアルタイム処理</h3>
                  <p className="text-gray-600">点群とRGBデータを即座に融合し、3DGSを生成</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h3 className="font-semibold mb-2">Lixel CyberColor対応</h3>
                  <p className="text-gray-600">専用ソフトウェアで高品質な3DGSビューイングを実現</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GNSSが使えること */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              高精度GNSS/RTK統合
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              グローバル座標系での絶対測位を実現。測量グレードの精度で、
              大規模プロジェクトにも対応可能です。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">マルチGNSS対応</h3>
              <p className="text-gray-600">GPS, GLONASS, BDS, Galileo全対応で安定した測位</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">絶対精度±3cm</h3>
              <p className="text-gray-600">RTK使用時の水平・垂直精度で測量業務に対応</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">座標系サポート</h3>
              <p className="text-gray-600">WGS84/CGCS2000等、各国の座標系に対応</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SLAMの性能がいいこと */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                業界最高峰のSLAM性能
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Xgrids独自のSLAMアルゴリズムにより、GPSが届かない屋内環境でも
                高精度な3Dマッピングを実現。視覚情報とLiDARを融合した
                ロバストな自己位置推定を提供します。
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">リアルタイム処理</h3>
                    <p className="text-gray-600">スキャンと同時に位置推定と地図生成を実行</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">ロバスト性</h3>
                    <p className="text-gray-600">特徴の少ない環境でも安定した動作を実現</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">ループクロージャー</h3>
                    <p className="text-gray-600">大規模環境でも累積誤差を自動補正</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-xl p-8">
              <img 
                src={getImagePath('/images/products/l2pro-slam.jpg')} 
                alt="Lixel L2 ProのSLAM技術によるリアルタイム地図生成の様子"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. ドローンにも搭載できること */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ドローン搭載で空からの3Dマッピング
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              軽量1.7kgの筐体により、産業用ドローンへの搭載が可能。
              地上からアクセスできない場所も高精度にスキャンできます。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 rounded-xl p-8">
              <img 
                src={getImagePath('/images/products/l2pro-drone.jpg')} 
                alt="ドローンにLixel L2 Proを搭載した空中スキャンの様子"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">ドローン搭載のメリット</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong>大規模エリアの高速スキャン</strong><br/>
                    <span className="text-gray-600">従来の地上スキャンの5倍以上の効率</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong>危険エリアの安全な調査</strong><br/>
                    <span className="text-gray-600">災害現場や高所作業のリスクを回避</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <strong>完全な3Dデータ取得</strong><br/>
                    <span className="text-gray-600">建物の屋根や複雑な構造物も死角なくスキャン</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Model Comparison with Images */}
      <section id="models" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">モデルラインナップ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img 
                    src={getImagePath(model.image)} 
                    alt={`${model.name} 3Dスキャナー製品画像`}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
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
                  <div className="mt-6 pt-6 border-t">
                    <div className="flex justify-between items-baseline">
                      <dt className="text-gray-500">標準価格</dt>
                      <dd className="text-2xl font-bold text-blue-600">{model.price}</dd>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">※税別・送料別途</p>
                  </div>
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

      {/* Accessories Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">オプション・アクセサリー</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessories.map((accessory, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gray-200">
                  <img 
                    src={getImagePath(accessory.image)} 
                    alt={`${accessory.name}アクセサリー製品画像`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">{accessory.name}</h3>
                  <p className="text-gray-600 text-sm">{accessory.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scanning Guide Video */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              スキャニングガイド
            </h2>
            <p className="text-lg text-gray-600">
              L2 Proを使用した効果的なスキャン方法をご紹介します
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/VVfoCrYceDM"
                title="L2 Pro スキャニングガイド"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
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
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              無料相談・デモを申し込む
            </Link>
            <Link
              href="/downloads"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              カタログをダウンロード
            </Link>
          </div>
        </div>
      </section>

      {/* Spec Modal */}
      {showSpecs && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowSpecs(false)}
        >
          <div 
            className="relative w-full max-w-5xl bg-white rounded-xl overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold">詳細仕様</h2>
              <button
                onClick={() => setShowSpecs(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              {/* System Parameters */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">システムパラメータ</h3>
                <table className="w-full border-collapse">
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-3 pr-4 font-medium text-gray-900 w-1/3">重量</td>
                      <td className="py-3 text-gray-700">1.7kg</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-gray-900">寸法</td>
                      <td className="py-3 text-gray-700">180mm × 130mm × 400mm</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-gray-900">消費電力</td>
                      <td className="py-3 text-gray-700">&lt;30W</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-gray-900">動作温度</td>
                      <td className="py-3 text-gray-700">-20℃ ～ 50℃</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-gray-900">防塵防水</td>
                      <td className="py-3 text-gray-700">IP54</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* LiDAR Specs */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">LiDARモジュール</h3>
                <table className="w-full border-collapse">
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-3 pr-4 font-medium text-gray-900 w-1/3">動作範囲</td>
                      <td className="py-3 text-gray-700">0.5m～120m（モデルによって300m）</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-gray-900">スキャン周波数</td>
                      <td className="py-3 text-gray-700">320,000 / 640,000 points/sec</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-gray-900">センサー視野角</td>
                      <td className="py-3 text-gray-700">360° × 270°</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-gray-900">レーザークラス</td>
                      <td className="py-3 text-gray-700">Class 1 / 905nm</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Accuracy */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">測定精度</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-600">リアルタイム計測精度</h4>
                    <table className="w-full border-collapse">
                      <tbody className="divide-y">
                        <tr>
                          <td className="py-2 pr-4 text-gray-700">絶対精度 (RMSE)</td>
                          <td className="py-2 font-medium">3cm</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 text-gray-700">相対精度 (RMSE)</td>
                          <td className="py-2 font-medium">2cm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-600">処理後の精度</h4>
                    <table className="w-full border-collapse">
                      <tbody className="divide-y">
                        <tr>
                          <td className="py-2 pr-4 text-gray-700">相対精度 (RMSE)</td>
                          <td className="py-2 font-medium">1cm</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4 text-gray-700">点群厚さ</td>
                          <td className="py-2 font-medium">0.5cm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Camera */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">カメラシステム</h3>
                <table className="w-full border-collapse">
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-3 pr-4 font-medium text-gray-900 w-1/3">パノラマカメラ</td>
                      <td className="py-3 text-gray-700">2 × 48MP (視野角 190° × 190°)</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-gray-900">視覚測位カメラ</td>
                      <td className="py-3 text-gray-700">1 × 1MP グローバルシャッター</td>
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