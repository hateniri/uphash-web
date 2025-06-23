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
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* 1. システムパラメータ */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4">
                <div className="flex items-center gap-3">
                  <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white font-semibold">1</span>
                  <h3 className="text-xl font-semibold text-white">システムパラメータ</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">製品モデル</td>
                        <td className="py-3 px-4 text-gray-900">LixelKity K1</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">寸法</td>
                        <td className="py-3 px-4 text-gray-900">250mm × 110mm × 95mm（長さ×幅×高さ）</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">重量</td>
                        <td className="py-3 px-4 text-gray-900">約1kg（バッテリー含む）</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">消費電力</td>
                        <td className="py-3 px-4 text-gray-900">&lt;20W</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">電源入力</td>
                        <td className="py-3 px-4 text-gray-900">14.4V</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">データインターフェース</td>
                        <td className="py-3 px-4 text-gray-900">USB 3.1 Gen2</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">ストレージ容量</td>
                        <td className="py-3 px-4 text-gray-900">TFカード 256GB</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 2. 環境仕様 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4">
                <div className="flex items-center gap-3">
                  <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white font-semibold">2</span>
                  <h3 className="text-xl font-semibold text-white">環境仕様</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">動作温度</td>
                        <td className="py-3 px-4 text-gray-900">-20℃ ~ +50℃</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">保管温度</td>
                        <td className="py-3 px-4 text-gray-900">-30℃ ~ +60℃</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">保護等級</td>
                        <td className="py-3 px-4 text-gray-900">IP54</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">耐久性</td>
                        <td className="py-3 px-4 text-gray-900">高耐久アルミ筐体</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 3. 精度仕様 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4">
                <div className="flex items-center gap-3">
                  <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white font-semibold">3</span>
                  <h3 className="text-xl font-semibold text-white">精度仕様</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">相対精度</td>
                        <td className="py-3 px-4 text-gray-900">±1.2cm</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">繰り返し精度</td>
                        <td className="py-3 px-4 text-gray-900">±2cm</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">絶対精度</td>
                        <td className="py-3 px-4 text-gray-900">±3cm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 4. LiDARモジュール */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4">
                <div className="flex items-center gap-3">
                  <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white font-semibold">4</span>
                  <h3 className="text-xl font-semibold text-white">LiDARモジュール</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">レーザークラス</td>
                        <td className="py-3 px-4 text-gray-900">クラス1（アイセーフ）</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">レーザー波長</td>
                        <td className="py-3 px-4 text-gray-900">905nm</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">動作範囲</td>
                        <td className="py-3 px-4 text-gray-900">0.1m ~ 40m（10%反射率）<br/>最大70m（80%反射率）</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">スキャンレート</td>
                        <td className="py-3 px-4 text-gray-900">最大200,000点/秒</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">視野角</td>
                        <td className="py-3 px-4 text-gray-900">水平 360° × 垂直 -7° ~ +52°</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">角度分解能</td>
                        <td className="py-3 px-4 text-gray-900">水平 0.09° × 垂直 1.45°</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">水平精度</td>
                        <td className="py-3 px-4 text-gray-900">±0.015°</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">チャンネル数</td>
                        <td className="py-3 px-4 text-gray-900">40チャンネル</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 5. 視覚システム（パノラマカメラ） */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4">
                <div className="flex items-center gap-3">
                  <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white font-semibold">5</span>
                  <h3 className="text-xl font-semibold text-white">視覚システム（パノラマカメラ）</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">カメラ視野角</td>
                        <td className="py-3 px-4 text-gray-900">360° × 360° カラーパノラマHDV</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">カメラ解像度</td>
                        <td className="py-3 px-4 text-gray-900">48MP × 2（デュアルカメラ）</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">パノラマ画像解像度</td>
                        <td className="py-3 px-4 text-gray-900">最大 56MP</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">視覚支援測位</td>
                        <td className="py-3 px-4 text-gray-900">あり</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 6. バッテリー＆充電 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4">
                <div className="flex items-center gap-3">
                  <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white font-semibold">6</span>
                  <h3 className="text-xl font-semibold text-white">バッテリー＆充電</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">動作可能時間</td>
                        <td className="py-3 px-4 text-gray-900">約1.5時間</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">バッテリー容量</td>
                        <td className="py-3 px-4 text-gray-900">28.8Wh</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">充電時間</td>
                        <td className="py-3 px-4 text-gray-900">約60分</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">電源タイプ</td>
                        <td className="py-3 px-4 text-gray-900">着脱式ファストロックバッテリー / 外部電源</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 7. 接続性 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4">
                <div className="flex items-center gap-3">
                  <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white font-semibold">7</span>
                  <h3 className="text-xl font-semibold text-white">接続性</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">接続モード</td>
                        <td className="py-3 px-4 text-gray-900">WiFi / Bluetooth</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">WiFi周波数</td>
                        <td className="py-3 px-4 text-gray-900">
                          • 2.4GHz：2412–2472MHz<br/>
                          • 5.2GHz：5180–5240MHz<br/>
                          • 5.8GHz：5745–5825MHz
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">APP WiFi距離</td>
                        <td className="py-3 px-4 text-gray-900">最大20m</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 8. IMU */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4">
                <div className="flex items-center gap-3">
                  <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white font-semibold">8</span>
                  <h3 className="text-xl font-semibold text-white">IMU</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">高周波慣性計測装置</td>
                        <td className="py-3 px-4 text-gray-900">9軸IMU</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 9. RTKモジュール */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4">
                <div className="flex items-center gap-3">
                  <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white font-semibold">9</span>
                  <h3 className="text-xl font-semibold text-white">RTKモジュール</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">デュアルアンテナRTK</td>
                        <td className="py-3 px-4 text-gray-900">なし</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 10. データ出力フォーマット */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4">
                <div className="flex items-center gap-3">
                  <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white font-semibold">10</span>
                  <h3 className="text-xl font-semibold text-white">データ出力フォーマット</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">点群フォーマット</td>
                        <td className="py-3 px-4 text-gray-900">.las（標準点群フォーマット）</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">カラー点群</td>
                        <td className="py-3 px-4 text-gray-900">対応（リアルタイムカラー点群生成）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 11. スキャンモード */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4">
                <div className="flex items-center gap-3">
                  <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white font-semibold">11</span>
                  <h3 className="text-xl font-semibold text-white">スキャンモード</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-600 font-medium">モード</td>
                        <td className="py-3 px-4 text-gray-900">モバイルスキャン（歩行計測）</td>
                      </tr>
                    </tbody>
                  </table>
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