import { Metadata } from 'next'
import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Lixel Studio - 次世代3D点群処理ソフトウェア | UP HASH',
  description: 'AI × 3D × 一発変換。Lixel LiDARデバイス専用のオールインワン3Dデータ処理プラットフォーム。ワンクリック処理、地図融合、パノラマ合成などプロ向け機能を搭載。',
}

export default function LixelStudioPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 to-purple-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-indigo-500 text-white rounded-full">
                  Software
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Lixel Studio
              </h1>
              <p className="text-xl mb-4">
                次世代3D点群処理ソフトウェア
              </p>
              <p className="text-2xl font-bold mb-8 text-indigo-200">
                AI × 3D × 一発変換。
              </p>
              <p className="text-lg mb-8 text-gray-300">
                Lixel LiDARデバイス専用のオールインワン3Dデータ処理プラットフォーム。
              </p>
              <div className="flex gap-4">
                <Link
                  href="#download"
                  className="inline-flex items-center px-6 py-3 bg-white text-indigo-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                  ダウンロード
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-indigo-900 transition-colors"
                >
                  お問い合わせ
                </Link>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-8">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-indigo-500 blur-3xl opacity-20"></div>
                    <svg className="relative w-32 h-32 text-indigo-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2 text-indigo-700">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg font-medium">AI処理エンジン搭載</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-indigo-700">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg font-medium">ワンクリック処理</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-indigo-700">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 00-2 2v6a2 2 0 002 2h2a1 1 0 100 2H6a4 4 0 01-4-4V5a2 2 0 012-2zm9 12a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      <path d="M10 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1z" />
                    </svg>
                    <span className="text-lg font-medium">プロ仕様の編集機能</span>
                  </div>
                </div>
              </div>
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
            <div className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">ワンクリック処理</h3>
              <p className="text-gray-600">AIによる自動点群処理で、複雑な操作は不要。誰でも簡単にプロ品質の結果を。</p>
            </div>
            <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">地図融合（Map Fusion）</h3>
              <p className="text-gray-600">複数の点群データを自動的に統合。大規模エリアも継ぎ目なく一つの3Dモデルに。</p>
            </div>
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">パノラマ合成</h3>
              <p className="text-gray-600">360°画像と点群データを融合。リアルな色情報で臨場感のある3Dモデルを生成。</p>
            </div>
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">高精度レポート生成</h3>
              <p className="text-gray-600">点群の精度評価とレポートを自動出力。品質保証に必要な情報を網羅。</p>
            </div>
            <div className="group bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-rose-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">多彩なレンダリング</h3>
              <p className="text-gray-600">RGB、標高、反射強度、EDLモードなど、用途に応じた多様な表示モード。</p>
            </div>
            <div className="group bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
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
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      ダウンロードリンクを取得
                    </Link>
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
                <Link
                  href="/contact"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  ダウンロード →
                </Link>
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
                <Link
                  href="/contact"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  ダウンロード →
                </Link>
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
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 mb-8">
              <p className="text-lg font-semibold text-indigo-900 mb-4">
                🆕 2025年3月24日 リリース
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">狭小エリアモード追加（トンネル等）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">パノラマ画像にEXIF対応（K1 / L2 Pro）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">テクスチャ最適化（L2 Proのみ）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">面積・体積の自動計算機能</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">.ply / .obj / .osgb のインポート対応</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">最大50GBの点群処理安定化（大規模スキャン対応）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">全レポートにソフトウェアバージョン/機種情報を自動追加</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">その他UX改善・バグ修正多数</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
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
                  <tr className="bg-gradient-to-r from-indigo-500 to-purple-600">
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
      <section className="py-16 md:py-24 bg-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-yellow-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                アクティベーションに関する注意
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="font-semibold text-red-600">
                  ⚠️ バージョン3.0.1.0以降、ドングルは使用できません。
                </p>
                <p>
                  アクティベーションには<strong>デバイスの完全なSNコード</strong>が必要です。
                </p>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <p className="flex items-start gap-2">
                    <span className="text-blue-600">🔍</span>
                    <span>SNコード確認方法：<strong>Lixel Go アプリ</strong>から確認可能</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-blue-600">💡</span>
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
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">1</span>
                </div>
                <h4 className="font-semibold mb-2">ソフトをダウンロード</h4>
                <p className="text-sm text-gray-600">Windows版をダウンロード</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">2</span>
                </div>
                <h4 className="font-semibold mb-2">SNコードを取得</h4>
                <p className="text-sm text-gray-600">デバイスとLixel Goを接続</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">3</span>
                </div>
                <h4 className="font-semibold mb-2">コードを申請</h4>
                <p className="text-sm text-gray-600">アクティベーションコード申請</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">4</span>
                </div>
                <h4 className="font-semibold mb-2">処理スタート！</h4>
                <p className="text-sm text-gray-600">Lixel Studio起動</p>
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
      <section className="py-16 md:py-24 bg-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Lixel Studioで点群処理を効率化
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            プロフェッショナルな3Dデータ処理をより簡単に、より高速に
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            お問い合わせ・デモ依頼
          </Link>
        </div>
      </section>
    </main>
  )
}