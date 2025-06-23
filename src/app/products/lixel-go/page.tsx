'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

export default function LixelGoPage() {
  const [showVideo, setShowVideo] = useState(false)
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-black text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-600 text-white rounded-full">
                  Mobile App
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Lixel Go
              </h1>
              <p className="text-xl mb-4">
                フィールドで使えるLiDAR操作アプリ
              </p>
              <p className="text-2xl font-bold mb-8 text-blue-200">
                スキャンも確認も、スマホひとつ。
              </p>
              <p className="text-lg mb-8 text-gray-200">
                Lixel Go は、Lixelデバイス専用のモバイルアプリです。現場でのリアルタイム操作・プレビュー・状態管理をスマートに。
              </p>
              <div className="flex gap-4">
                <a
                  href="#download"
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  アプリをダウンロード
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
                >
                  お問い合わせ
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={getImagePath('/images/products/lixel-go/lixell2pro_4_2_img_6.png')} 
                alt="Lixel Go App"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">主な機能</h2>
            <p className="text-xl text-gray-600">現場での作業を効率化する4つの主要機能</p>
          </div>
          <div className="space-y-16 max-w-6xl mx-auto">
            {/* スキャナー制御 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  🔧 スキャナー制御
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-0.5">•</span>
                    <span>撮影の開始／停止、モード切替、パラメータ調整をスマホから操作</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-0.5">•</span>
                    <span>ケーブル不要、Wi-Fi接続で快適制御</span>
                  </li>
                </ul>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={getImagePath('/images/products/lixel-go/lixell2pro_4_2_img_5.png')} 
                  alt="スキャナー制御画面"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* リアルタイムプレビュー */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-gray-700">リアルタイムで<br />点群データを確認</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  🖥️ リアルタイムプレビュー
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-0.5">•</span>
                    <span>撮影中の映像や点群データをその場で確認</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-0.5">•</span>
                    <span>撮り直しや死角の把握も即時対応</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* デバイスモニタリング */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  📊 デバイスモニタリング
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-0.5">•</span>
                    <span>バッテリー残量、温度、保存容量などをリアルタイム表示</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-0.5">•</span>
                    <span>撮影中の異常もすぐ検知</span>
                  </li>
                </ul>
              </div>
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-gray-700">バッテリー・温度<br />保存容量を監視</p>
                </div>
              </div>
            </div>

            {/* アクティベーション補助 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-gray-700">SNコード表示で<br />ライセンス申請が簡単</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  🔐 アクティベーション補助
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-0.5">•</span>
                    <span>Lixel Studio用の<strong>完全なSNコード表示</strong>に対応</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-0.5">•</span>
                    <span>初期設定・ライセンス申請時に必須</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">操作デモ動画</h2>
            <p className="text-xl text-gray-600">Lixel Goの実際の操作画面をご覧ください</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              {!showVideo ? (
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                  onClick={() => setShowVideo(true)}
                >
                  <video 
                    className="w-full h-full object-cover"
                    poster={getImagePath('/images/products/lixel-go/lixell2pro_4_2_img_6.png')}
                  >
                    <source src={getImagePath('/videos/lixelgo.mp4')} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  <button className="absolute bg-white/90 rounded-full p-6 shadow-lg hover:bg-white transition-colors">
                    <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              ) : (
                <video 
                  className="w-full h-full"
                  controls
                  autoPlay
                >
                  <source src={getImagePath('/videos/lixelgo.mp4')} type="video/mp4" />
                </video>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">ダウンロード</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Android版 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0668L4.841 5.4134a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    📱 Android版 V1.1.9
                  </h3>
                  <p className="text-gray-600 mb-4">
                    101MB
                  </p>
                  <a
                    href="https://app-download.xgrids.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    ダウンロード
                  </a>
                </div>
              </div>
            </div>

            {/* iOS版 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    📱 iOS版 V1.1.9
                  </h3>
                  <p className="text-gray-600 mb-4">
                    120.5MB
                  </p>
                  <a
                    href="https://apps.apple.com/us/app/lixelgo/id6476125173"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    App Storeで入手
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Release Notes */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">リリースノート（V1.1.9）</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl p-8">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">安定性向上と既知の不具合を修正</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">最新ファームウェアへの互換性アップデート</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  📄 リリースノート全文はこちら →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Scenes */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">利用シーン</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-800 to-black">
                    <th className="px-6 py-4 text-left text-white font-semibold">シチュエーション</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">活用内容</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">フィールド撮影</td>
                    <td className="px-6 py-4 text-gray-700">プレビューしながら構図確認・再撮影可能</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">セットアップ</td>
                    <td className="px-6 py-4 text-gray-700">Wi-Fi接続後すぐにデバイス制御可能</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">ライセンス申請</td>
                    <td className="px-6 py-4 text-gray-700">Lixel Studio向けにSNコードを即時取得</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">複数台管理</td>
                    <td className="px-6 py-4 text-gray-700">同時に複数スキャナーの状況をスマホで確認</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8 relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src={getImagePath('/images/products/lixel-go/lixell2pro_4_2_img_5.png')} 
                alt="現場利用風景"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">動作環境</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-800 to-black">
                    <th className="px-6 py-4 text-left text-white font-semibold">プラットフォーム</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">推奨スペック</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-white transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">Android</td>
                    <td className="px-6 py-4 text-gray-700">Android 12以上、Snapdragon 765G / Dimensity 8000-MAX以上</td>
                  </tr>
                  <tr className="hover:bg-white transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">iOS</td>
                    <td className="px-6 py-4 text-gray-700">iPhone 12以降</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">よくある質問（FAQ）</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="font-semibold mb-2">Q. Lixel Go はどのデバイスに対応していますか？</h4>
              <p className="text-gray-700">A. Lixel L2、K1、L2 Proに対応しています。</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="font-semibold mb-2">Q. USB接続は必要ですか？</h4>
              <p className="text-gray-700">A. いいえ。すべてWi-Fi経由で通信します。</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="font-semibold mb-2">Q. スマホが1台あればすべて完結しますか？</h4>
              <p className="text-gray-700">A. はい。撮影操作、プレビュー、SN確認までスマホ1台で完結します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-800 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            スキャン現場を、もっとスマートに。
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            📲 今すぐ Lixel Go をインストールして、フィールドワークをアップグレード！
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://app-download.xgrids.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0668L4.841 5.4134a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"/>
              </svg>
              Android版
            </a>
            <a
              href="https://apps.apple.com/us/app/lixelgo/id6476125173"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              iOS版
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}