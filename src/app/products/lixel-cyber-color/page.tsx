import { Metadata } from 'next'
import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Lixel Cyber Color (LCC Studio) - フォトリアルな3D空間再構築ソフトウェア | UP HASH',
  description: '"見る" を超えて "没入する" 3Dへ。Lixelのスキャンデータをフォトリアルかつ軽量に変換する次世代3DGSエンジン。AI + Gaussian Splattingによる高速・高精細な3Dモデル生成。',
}

export default function LixelCyberColorPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-pink-800 to-orange-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-purple-500 text-white rounded-full">
                  Software
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Lixel Cyber Color
                <span className="text-2xl font-normal block mt-2">(LCC Studio)</span>
              </h1>
              <p className="text-xl mb-4">
                フォトリアルな3D空間再構築ソフトウェア
              </p>
              <p className="text-2xl font-bold mb-8 text-pink-200">
                "見る" を超えて "没入する" 3Dへ。
              </p>
              <p className="text-lg mb-8 text-gray-200">
                3D Gaussian Splatting（3DGS）をベースにした高精度・高圧縮の写実的3Dモデリングソフト。
              </p>
              <div className="flex gap-4">
                <Link
                  href="#download"
                  className="inline-flex items-center px-6 py-3 bg-white text-purple-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                  ダウンロード
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-purple-900 transition-colors"
                >
                  お問い合わせ
                </Link>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 rounded-xl p-12 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10"></div>
              <div className="relative text-center">
                <div className="mb-8">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-20"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8">
                      <svg className="w-32 h-32 text-purple-600 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 max-w-md mx-auto">
                  <div className="flex items-center justify-center gap-3 text-purple-700">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">AI</span>
                    </div>
                    <span className="text-2xl">+</span>
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3DGS</span>
                    </div>
                  </div>
                  <p className="text-lg font-medium text-gray-700">高速・高精細な3Dモデル生成</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <span className="px-3 py-1 bg-purple-100 rounded-full">90%圧縮</span>
                    <span className="px-3 py-1 bg-pink-100 rounded-full">フォトリアル</span>
                    <span className="px-3 py-1 bg-orange-100 rounded-full">リアルタイム</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">製品概要</h2>
            <p className="text-xl text-gray-600">次世代3DGSエンジンが実現する4つの革新</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">3D Gaussian Splatting</h3>
              <p className="text-gray-600">高精度・高圧縮の3Dモデル生成</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">映画のようなビジュアル</h3>
              <p className="text-gray-600">リアルタイム再構築</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H6a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">最大90%のファイル圧縮</h3>
              <p className="text-gray-600">軽量化と高画質を両立</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">空撮・地上融合</h3>
              <p className="text-gray-600">ドローンと地上スキャンの統合</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-2">
              <strong>出力形式：</strong>`.ply`形式（オープン）、`.lcc`形式（圧縮・軽量）
            </p>
            <p className="text-gray-700">
              <strong>対応機能：</strong>Web共有、注釈・測定、モデル編集、衝突判定、アセット追加
            </p>
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
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    💻 LCC Studio V1.8.0 for Windows
                  </h3>
                  <p className="text-gray-600 mb-4">
                    ⏬ 約3.8GB
                  </p>
                  <div className="flex gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
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
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                >
                  ダウンロード →
                </Link>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  スキャンガイド（PDF）
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  最適なスキャン方法とベストプラクティス
                </p>
                <Link
                  href="/contact"
                  className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                >
                  ダウンロード →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">ワークフロー</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
                    1
                  </div>
                  <h3 className="text-lg font-semibold mb-2">データ取得</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Lixelスキャナーでスキャン</li>
                    <li>• RTK対応でWGS84/CSCS2000</li>
                    <li>• ドローン画像（100～2000枚）</li>
                  </ul>
                </div>
              </div>
              {/* Step 2 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-xl p-6">
                  <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
                    2
                  </div>
                  <h3 className="text-lg font-semibold mb-2">モデル生成</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 単一モデル生成</li>
                    <li>• マップ融合（最大10件）</li>
                    <li>• 空撮融合</li>
                  </ul>
                </div>
              </div>
              {/* Step 3 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl p-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
                    3
                  </div>
                  <h3 className="text-lg font-semibold mb-2">編集・出力</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 測定・注釈追加</li>
                    <li>• 3Dアセット重ね合わせ</li>
                    <li>• 動画出力（Flythrough）</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-yellow-50 rounded-xl p-6">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-yellow-700">⚠️ 注意：</span>
                必要なディスク空き容量はスキャンデータの2倍以上。LCC Studioを閉じると処理中断（再開可能）
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">特長と機能ハイライト</h2>
          <div className="space-y-16 max-w-6xl mx-auto">
            {/* Aerial-Ground Map Fusion */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  🛰️ 空撮・地上融合（Aerial-Ground Fusion）
                </h3>
                <p className="text-lg text-gray-700 mb-2">
                  ドローン空撮と地上スキャンを1つの空間モデルに融合
                </p>
                <p className="text-sm text-gray-600">
                  ※ ドローン画像100～2000枚をWGS84/RTKで取得
                </p>
              </div>
              <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full -mr-16 -mt-16 opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-200 rounded-full -ml-12 -mb-12 opacity-20"></div>
                <div className="relative flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="flex justify-center gap-4 mb-4">
                      <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                        </svg>
                      </div>
                      <div className="text-4xl font-bold text-gray-400 self-center">→</div>
                      <div className="w-20 h-20 bg-cyan-100 rounded-lg flex items-center justify-center">
                        <svg className="w-10 h-10 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">ドローン + 地上 = 統合モデル</p>
                  </div>
                </div>
              </div>
            </div>

            {/* HD Enhancement */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 rounded-full -ml-16 -mt-16 opacity-20"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-pink-200 rounded-full -mr-12 -mb-12 opacity-20"></div>
                <div className="relative flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="mb-4">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 blur-xl opacity-30"></div>
                        <div className="relative w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto">
                          <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <p className="text-lg font-medium text-gray-700 mb-2">HDエンハンスメント</p>
                    <p className="text-sm text-gray-600">高解像度画像で質感向上</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  🖼️ HDエンハンスメント（HD Enhancement）
                </h3>
                <p className="text-lg text-gray-700 mb-2">
                  一眼レフ/スマホ画像を使った高精細化
                </p>
                <p className="text-sm text-gray-600">
                  高解像度画像を補完合成して質感向上
                </p>
              </div>
            </div>

            {/* 空間認識 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  🧱 空間認識（Spatial Recognition）
                </h3>
                <p className="text-lg text-gray-700">
                  部屋・壁・開口部を自動抽出し、BIMや図面作成に直結
                </p>
              </div>
              <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full -mr-16 -mt-16 opacity-20"></div>
                <div className="relative flex items-center justify-center h-full">
                  <div className="grid grid-cols-3 gap-2 max-w-xs">
                    <div className="col-span-3 h-12 bg-green-200 rounded flex items-center justify-center text-xs font-medium text-green-700">壁</div>
                    <div className="h-20 bg-emerald-200 rounded flex items-center justify-center text-xs font-medium text-emerald-700">部屋1</div>
                    <div className="h-20 bg-emerald-300 rounded flex items-center justify-center text-xs font-medium text-emerald-800">部屋2</div>
                    <div className="h-20 bg-emerald-200 rounded flex items-center justify-center text-xs font-medium text-emerald-700">部屋3</div>
                    <div className="col-span-3 h-8 bg-green-300 rounded flex items-center justify-center text-xs font-medium text-green-800">開口部</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 精密測定 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 relative bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-200 rounded-full -ml-16 -mb-16 opacity-20"></div>
                <div className="relative flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-white rounded-lg shadow-lg px-4 py-2 mb-4">
                      <span className="text-sm font-mono text-orange-600">dx: 3.24m</span>
                      <span className="text-gray-400">|</span>
                      <span className="text-sm font-mono text-red-600">dy: 1.58m</span>
                      <span className="text-gray-400">|</span>
                      <span className="text-sm font-mono text-pink-600">dz: 2.41m</span>
                    </div>
                    <div className="relative">
                      <svg className="w-32 h-32 text-gray-300" viewBox="0 0 100 100">
                        <line x1="10" y1="90" x2="90" y2="90" stroke="currentColor" strokeWidth="2" />
                        <line x1="10" y1="90" x2="10" y2="10" stroke="currentColor" strokeWidth="2" />
                        <line x1="10" y1="90" x2="50" y2="50" stroke="currentColor" strokeWidth="2" />
                        <circle cx="50" cy="50" r="3" fill="#f97316" />
                        <circle cx="90" cy="90" r="3" fill="#ef4444" />
                        <circle cx="10" cy="10" r="3" fill="#ec4899" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  🧮 精密測定（dx, dy, dz オフセット対応）
                </h3>
                <p className="text-lg text-gray-700">
                  高精度なプロ用測定ツールで3Dモデルと現実空間を一致
                </p>
              </div>
            </div>

            {/* アセットオーバーレイ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  🧩 アセットオーバーレイ
                </h3>
                <p className="text-lg text-gray-700">
                  OBJ / FBX / GLB等の3Dモデルを重ねて空間内で表示・調整
                </p>
              </div>
              <div className="relative bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200 rounded-full -mr-16 -mt-16 opacity-20"></div>
                <div className="relative flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="relative">
                      <div className="w-32 h-32 border-2 border-dashed border-indigo-300 rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-16 h-16 text-indigo-200" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 7a2 2 0 114 0 2 2 0 01-4 0z" />
                        </svg>
                      </div>
                      <div className="absolute top-8 left-8 w-16 h-16 bg-blue-500 rounded shadow-lg flex items-center justify-center transform rotate-12">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 0010 17a8.995 8.995 0 005-1.5V14a1 1 0 00-1-1H8a1 1 0 00-1 1v1.5a8.972 8.972 0 002.3 1.073z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">3Dモデルを重ねて表示</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editor & Viewer Functions */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Editor & Viewer 機能</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Viewer Functions */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Viewer 機能
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-0.5">•</span>
                  <div>
                    <span className="font-medium">モデル閲覧</span>
                    <p className="text-sm text-gray-600">Viewモード、点群表示、透視切替</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-0.5">•</span>
                  <div>
                    <span className="font-medium">計測機能</span>
                    <p className="text-sm text-gray-600">距離/面積測定、dx/dy/dzオフセット</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-0.5">•</span>
                  <div>
                    <span className="font-medium">注釈機能</span>
                    <p className="text-sm text-gray-600">写真・動画・テキスト・URL挿入</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-0.5">•</span>
                  <div>
                    <span className="font-medium">表示切替</span>
                    <p className="text-sm text-gray-600">一人称・ピボット・アバター移動</p>
                  </div>
                </li>
              </ul>
            </div>
            {/* Editor Functions */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Editor 機能
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2 mt-0.5">•</span>
                  <div>
                    <span className="font-medium">リアルタイム編集</span>
                    <p className="text-sm text-gray-600">測定・注釈は自動保存</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2 mt-0.5">•</span>
                  <div>
                    <span className="font-medium">Clipping</span>
                    <p className="text-sm text-gray-600">内部/外部切替、Y軸回転、6面ビュー</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2 mt-0.5">•</span>
                  <div>
                    <span className="font-medium">3Dアセット</span>
                    <p className="text-sm text-gray-600">.fbx/.glb/.objの重ね合わせ</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2 mt-0.5">•</span>
                  <div>
                    <span className="font-medium">動画出力</span>
                    <p className="text-sm text-gray-600">Flythroughで.mp4出力</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Portal Function */}
          <div className="mt-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                ポータル機能
              </h3>
              <p className="text-gray-700 mb-2">複数モデル間の空間遷移設定</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 最大10モデルまでリンク可能</li>
                <li>• 離陸点と着地点を設定してモデル間ジャンプ</li>
                <li>• .lctファイル形式で保存</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Viewer / Revit Integration */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Viewer / Revit 連携</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                🔍 LCC Viewer
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">軽量ビューア（Win/Mac対応）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">アバターモード、測定、注釈対応</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">Web Viewerにも対応（7日間ログインフリー）</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
              >
                Viewerダウンロード →
              </Link>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                🏗️ LCC for Revit
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">AIによる壁・開口部の自動BIM生成</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">ワンクリックモデリング</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">カメラ同期、点群オーバーレイ</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
              >
                Revit用プラグイン →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Release Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">リリース情報（V1.8.0）</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
              <p className="text-lg font-semibold text-purple-900 mb-4">
                🆕 2025年最新版で以下を追加：
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">空地統合（Aerial-Ground Fusion）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">HD画質補強</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">空間認識（フロアプラン抽出）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">dx/dy/dz 表示</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">DirectX 12 対応</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">複数の安定性向上とパフォーマンス最適化</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  📄 リリースノート全文はこちら →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">アプリケーション例</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-500 to-pink-600">
                    <th className="px-6 py-4 text-left text-white font-semibold">業界</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">使用例</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">建築・不動産</td>
                    <td className="px-6 py-4 text-gray-700">高精度モデルでの物件紹介・設計レビュー</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">インフラ・土木</td>
                    <td className="px-6 py-4 text-gray-700">トンネルや道路の3D可視化・損傷解析</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">教育・文化財保存</td>
                    <td className="px-6 py-4 text-gray-700">ミュージアムや遺跡の3Dアーカイブ化とVR展示</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">メタバース・XR</td>
                    <td className="px-6 py-4 text-gray-700">現実空間をそのまま仮想空間へ転用、ゲームやトレーニング用途に</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">推奨スペック</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Spec */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold mb-4 text-purple-600">基本構成</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-600 font-medium mr-3 min-w-[60px]">OS:</span>
                    <span className="text-gray-700">Windows 10/11</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 font-medium mr-3 min-w-[60px]">CPU:</span>
                    <span className="text-gray-700">Intel i7 8700K以上</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 font-medium mr-3 min-w-[60px]">GPU:</span>
                    <span className="text-gray-700">RTX 3070以上推奨</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 font-medium mr-3 min-w-[60px]">メモリ:</span>
                    <span className="text-gray-700">64GB以上</span>
                  </li>
                </ul>
              </div>
              {/* Map Fusion Spec */}
              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="font-semibold mb-4 text-purple-600">Map Fusion向け</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-600 font-medium mr-3 min-w-[60px]">GPU:</span>
                    <span className="text-gray-700 font-semibold">RTX 4090推奨</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-600 font-medium mr-3 min-w-[60px]">メモリ:</span>
                    <span className="text-gray-700 font-semibold">96GB～128GB推奨</span>
                  </li>
                  <li className="text-sm text-purple-700 mt-4">
                    ※ データのオーバーラップは15m以上確保
                  </li>
                  <li className="text-sm text-purple-700">
                    ※ 最大10件まで対応
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">今すぐLCC Studioを体験しよう</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-purple-600">1</span>
                </div>
                <h4 className="font-semibold mb-2">スキャナーで空間をキャプチャ</h4>
                <p className="text-sm text-gray-600">Lixelスキャナーで簡単取得</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h4 className="font-semibold mb-2">LCC Studioで自動再構築</h4>
                <p className="text-sm text-gray-600">AIが高精度に処理</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h4 className="font-semibold mb-2">ViewerやRevitで活用</h4>
                <p className="text-sm text-gray-600">多様な用途に展開</p>
              </div>
            </div>
            <div className="text-center space-y-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
              >
                ソフトウェアを今すぐ入手
              </Link>
              <div>
                <Link
                  href="/contact"
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  法人導入のご相談はこちら →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">よくある質問（FAQ）</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold mb-2">Q. ファイルサイズが小さいのに高精細なのはなぜ？</h4>
              <p className="text-gray-700">A. 独自のGaussian Splatting + 可視領域最適化により非表示領域を省略して軽量化しています。</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold mb-2">Q. Lixel Studioとの違いは？</h4>
              <p className="text-gray-700">A. Lixel Studioは点群処理中心、LCC Studioは<strong>3Dモデル化とビジュアル重視</strong>です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            フォトリアルな3D体験を始めよう
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Lixel Cyber Colorで、見るだけでなく没入する3D空間を
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            お問い合わせ・デモ依頼
          </Link>
        </div>
      </section>
    </main>
  )
}