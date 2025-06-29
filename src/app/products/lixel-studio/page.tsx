import { Metadata } from 'next'
import Link from 'next/link'
import { getImagePath } from '@/lib/utils'
import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Lixel Studio - 次世代3D点群処理ソフトウェア',
  description: 'AI × 3D × 一発変換。Lixel LiDARデバイス専用のオールインワン3Dデータ処理プラットフォーム。ワンクリック処理、地図融合、パノラマ合成などプロ向け機能を搭載。',
  path: '/products/lixel-studio',
  image: '/images/logos/lixel-studio-logo.png',
  keywords: ['Lixel Studio', '点群処理', '3Dデータ処理', 'AI処理', 'ワンクリック', 'パノラマ合成', '地図融合']
})

export default function LixelStudioPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-black text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-600 text-white rounded-full">
                  Software
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Lixel Studio
              </h1>
              <p className="text-xl mb-4">
                次世代3D点群処理ソフトウェア
              </p>
              <p className="text-2xl font-bold mb-8 text-blue-200">
                AI × 3D × 一発変換。
              </p>
              <p className="text-lg mb-8 text-gray-300">
                Lixel LiDARデバイス専用のオールインワン3Dデータ処理プラットフォーム。点群処理と精度管理に特化。
              </p>
              <div className="flex gap-4">
                <a
                  href="https://xgrids.com/support/download?page=LixelStudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                  ダウンロード
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
                >
                  お問い合わせ
                </Link>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
              <video 
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={getImagePath('/images/products/lixel-studio-hero.webm')} type="video/webm" />
                あなたのブラウザは動画タグをサポートしていません。
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">主な特長</h2>
            <p className="text-xl text-gray-600">Lixel Studioが選ばれる6つの理由</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">ワンクリック処理</h3>
              <p className="text-gray-600">AIによる自動点群処理で、複雑な操作は不要。誰でも簡単にプロ品質の結果を。</p>
            </div>
            <div className="group bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">地図融合（Map Fusion）</h3>
              <p className="text-gray-600">複数の点群データを自動的に統合。大規模エリアも継ぎ目なく一つの3Dモデルに。</p>
            </div>
            <div className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">パノラマ合成</h3>
              <p className="text-gray-600">360°画像と点群データを融合。リアルな色情報で臨場感のある3Dモデルを生成。</p>
            </div>
            <div className="group bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">高精度レポート生成</h3>
              <p className="text-gray-600">点群の精度評価とレポートを自動出力。品質保証に必要な情報を網羅。</p>
            </div>
            <div className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">多彩なレンダリング</h3>
              <p className="text-gray-600">RGB、標高、反射強度、EDLモードなど、用途に応じた多様な表示モード。</p>
            </div>
            <div className="group bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">プロ用編集機能</h3>
              <p className="text-gray-600">セグメンテーション、3Dクロップ、距離・面積測定など充実の編集ツール。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">ダウンロード</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    💻 Windows版 V3.2.0.0
                  </h3>
                  <p className="text-gray-600 mb-4">
                    ⏬ 約2.2GB
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://xgrids.com/support/download?page=LixelStudio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      ダウンロード
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  ユーザーマニュアル（PDF）
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  基本操作から高度な機能まで詳しく解説
                </p>
                <a
                  href="https://xgrids.com/support/download?page=LixelStudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-800 text-sm font-medium"
                >
                  ダウンロード →
                </a>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  RTK設定チュートリアル（PDF）
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  高精度測位のためのRTK設定方法
                </p>
                <a
                  href="https://xgrids.com/support/download?page=LixelStudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-800 text-sm font-medium"
                >
                  ダウンロード →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">新機能（V3.2.0.0）</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl p-8 mb-8">
              <p className="text-lg font-semibold text-gray-900 mb-4">
                🆕 2025年3月24日 リリース
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">狭小エリアモード追加（トンネル等）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">パノラマ画像にEXIF対応（K1 / L2 Pro）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">テクスチャ最適化（L2 Proのみ）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">面積・体積の自動計算機能</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">.ply / .obj / .osgb のインポート対応</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">最大50GBの点群処理安定化（大規模スキャン対応）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">全レポートにソフトウェアバージョン/機種情報を自動追加</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">その他UX改善・バグ修正多数</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  📄 詳細なリリースノートを見る →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">活用分野</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-800 to-black">
                    <th className="px-6 py-4 text-left text-white font-semibold">業界</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">利用例</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">建設・測量</td>
                    <td className="px-6 py-4 text-gray-700">長大トンネル・橋梁の点群データ統合と整合</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">インフラ管理</td>
                    <td className="px-6 py-4 text-gray-700">経年変化の追跡、損傷箇所の特定とレポート化</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">不動産・BIM</td>
                    <td className="px-6 py-4 text-gray-700">内観スキャン + パノラマ合成による3D設計支援</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">災害対応</td>
                    <td className="px-6 py-4 text-gray-700">洪水・地震後の状況記録と即時3D可視化</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Activation Notice */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-400">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                アクティベーションに関する注意
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="font-semibold text-gray-800">
                  ⚠️ バージョン3.0.1.0以降、ドングルは使用できません。
                </p>
                <p>
                  アクティベーションには<strong>デバイスの完全なSNコード</strong>が必要です。
                </p>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <p className="flex items-start gap-2">
                    <span className="text-gray-600">🔍</span>
                    <span>SNコード確認方法：<strong>Lixel Go アプリ</strong>から確認可能</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-gray-600">💡</span>
                    <span>各デバイスには3つまでアクティベーションコードが発行されます（1コード＝1PC）</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Flow */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">導入フロー</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-semibold mb-2">ソフトをダウンロード</h4>
                <p className="text-sm text-gray-600">Windows版をダウンロード</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h4 className="font-semibold mb-2">SNコードを取得</h4>
                <p className="text-sm text-gray-600">デバイスとLixel Goを接続</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h4 className="font-semibold mb-2">コードを申請</h4>
                <p className="text-sm text-gray-600">
                  <a href="https://xgrids.com/activationrequest" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                    アクティベーションコード申請
                  </a>
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h4 className="font-semibold mb-2">処理スタート！</h4>
                <p className="text-sm text-gray-600">Lixel Studio起動</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison with LCC Studio */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Lixel Studio vs LCC Studio</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-800 to-black">
                    <th className="px-6 py-4 text-left text-white font-semibold">比較項目</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Lixel Studio</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">LCC Studio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">主な用途</td>
                    <td className="px-6 py-4 text-gray-700">点群処理・測量・精度重視</td>
                    <td className="px-6 py-4 text-gray-700">3Dモデル化・ビジュアル重視</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">コア技術</td>
                    <td className="px-6 py-4 text-gray-700">SLAM処理・点群最適化</td>
                    <td className="px-6 py-4 text-gray-700">3D Gaussian Splatting (3DGS)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">出力形式</td>
                    <td className="px-6 py-4 text-gray-700">.e57, .las, .ply（点群）</td>
                    <td className="px-6 py-4 text-gray-700">.ply, .lcc（フォトリアル3D）</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">特徴的な機能</td>
                    <td className="px-6 py-4 text-gray-700">狭小エリアモード、RTK精度管理</td>
                    <td className="px-6 py-4 text-gray-700">HD Enhancement、空撮融合</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">ファイルサイズ</td>
                    <td className="px-6 py-4 text-gray-700">大容量（精度優先）</td>
                    <td className="px-6 py-4 text-gray-700">最大90%圧縮（配信最適化）</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">対象ユーザー</td>
                    <td className="px-6 py-4 text-gray-700">測量士、建設技術者</td>
                    <td className="px-6 py-4 text-gray-700">建築家、不動産、XR開発者</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-100 to-gray-100 rounded-xl p-6">
                <h3 className="font-semibold mb-3 text-gray-900">Lixel Studioを選ぶべき場合</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 高精度な測量データが必要</li>
                  <li>• 土木・建設現場での活用</li>
                  <li>• 点群データの詳細な編集・解析</li>
                  <li>• BIMソフトへの点群インポート</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-6">
                <h3 className="font-semibold mb-3 text-gray-900">LCC Studioを選ぶべき場合</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• フォトリアルな3D表現が必要</li>
                  <li>• Web共有・VR/AR活用</li>
                  <li>• 不動産の内覧・プレゼン</li>
                  <li>• 軽量データでの配信</li>
                </ul>
              </div>
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
              <h4 className="font-semibold mb-2">Q. Lixel StudioとLCC Studioの違いは？</h4>
              <p className="text-gray-700">A. Lixel Studioは点群処理中心、LCC Studioは3Dモデル化とビジュアル重視です。</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="font-semibold mb-2">Q. Macには対応していますか？</h4>
              <p className="text-gray-700">A. 現在はWindows版のみ提供しています。</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="font-semibold mb-2">Q. オフラインで使えますか？</h4>
              <p className="text-gray-700">A. アクティベーション後はオフライン利用も可能です。</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="font-semibold mb-2">Q. 旧バージョンとの互換性は？</h4>
              <p className="text-gray-700">A. デバイスのファームウェアが1.4.0以降であれば利用可能です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Lixel Studioで点群処理を効率化
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            プロフェッショナルな3Dデータ処理をより簡単に、より高速に
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            お問い合わせ・デモ依頼
          </Link>
        </div>
      </section>
    </main>
  )
}