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
                Lixelのスキャンデータをフォトリアルかつ軽量に変換する次世代3DGSエンジン。
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
            <div className="relative h-[500px] bg-gray-800/20 rounded-xl overflow-hidden backdrop-blur-sm">
              <img 
                src={getImagePath('/images/lixel_cyber_color_demo.jpg')} 
                alt="Lixel Cyber Color Demo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">製品概要</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI + Gaussian Splatting</h3>
              <p className="text-gray-600">高速・高精細な3Dモデル生成</p>
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
              <h3 className="text-lg font-semibold mb-2">Aerial-Ground Fusion</h3>
              <p className="text-gray-600">真の屋内外統合モデル</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-2">
              <strong>対応形式：</strong>`.lcc`, `.ply`（独自形式と汎用形式両対応）
            </p>
            <p className="text-gray-700">
              <strong>プラットフォーム：</strong>Windows / Web / LCC Viewer / Revit
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

      {/* Features Highlight */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">特長と機能ハイライト</h2>
          <div className="space-y-16 max-w-6xl mx-auto">
            {/* Aerial-Ground Map Fusion */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  🛰️ Aerial-Ground Map Fusion
                </h3>
                <p className="text-lg text-gray-700">
                  ドローン空撮と地上スキャンを1つの空間モデルに融合
                </p>
              </div>
              <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                <p className="text-gray-500">Map Fusion before-after</p>
              </div>
            </div>

            {/* HD Enhancement */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                <p className="text-gray-500">HD強化例</p>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  🖼️ HD Enhancement
                </h3>
                <p className="text-lg text-gray-700">
                  高解像度画像（DSLR/スマホ）を補完合成し、質感を飛躍的に向上
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
              <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                <p className="text-gray-500">空間認識デモ</p>
              </div>
            </div>

            {/* 精密測定 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                <p className="text-gray-500">測定画面UI</p>
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
              <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                <p className="text-gray-500">Asset Overlay</p>
              </div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">動作環境</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-purple-600 font-semibold mr-3 min-w-[100px]">OS：</span>
                  <span className="text-gray-700">Windows 10/11</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-semibold mr-3 min-w-[100px]">GPU：</span>
                  <span className="text-gray-700">NVIDIA RTX 3060 以上推奨</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-semibold mr-3 min-w-[100px]">メモリ：</span>
                  <span className="text-gray-700">16GB以上（推奨32GB）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-semibold mr-3 min-w-[100px]">ストレージ：</span>
                  <span className="text-gray-700">SSD（高速読込が必要）</span>
                </li>
              </ul>
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