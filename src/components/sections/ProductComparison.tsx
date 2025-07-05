import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

export default function ProductComparison() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.02]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-6">
              プレミアムLiDARスキャナー
            </h2>
            <p className="text-lg md:text-xl text-brand-silver-600 max-w-3xl mx-auto mb-4">
              最先端の3Dスキャニング技術で、空間情報を価値あるデジタル資産へ
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-brand-silver-500">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-brand-blue-600 rounded-full"></div>
                <span>プロフェッショナル向け</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-brand-silver-400 rounded-full"></div>
                <span>エントリーモデル</span>
              </div>
            </div>
          </div>

          {/* Product Cards with Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* L2 Pro Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-silver-200">
              {/* Product Image */}
              <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-brand-silver-50 via-brand-blue-50 to-white p-12">
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                  <Link href="/contact" className="inline-block">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-brand-silver-200 hover:bg-brand-blue-50 hover:border-brand-blue-300 transition-all cursor-pointer">
                      <p className="text-sm font-bold text-brand-blue-600 hover:text-brand-blue-700">価格 →</p>
                    </div>
                  </Link>
                  <span className="inline-flex items-center px-4 py-2 text-sm font-semibold bg-brand-blue-600 text-white rounded-full shadow-lg">
                    PROFESSIONAL
                  </span>
                </div>
                <div className="h-full flex items-center justify-center">
                  <img 
                    src={getImagePath('/images/l2pro_product.png')} 
                    alt="Lixel L2 Pro"
                    className="max-h-full w-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-10">
                <div className="mb-8">
                  <img 
                    src={getImagePath('/images/l2Pro_name_en.png')} 
                    alt="Lixel L2 Pro"
                    className="h-10 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  高精度リアルタイム3Dモデリング
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  大規模施設や屋外環境に最適。RTK対応で最高精度の点群データを生成。
                </p>

                {/* Key Specs */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-4 border-b border-gray-100">
                    <span className="text-gray-600 text-base">重量</span>
                    <span className="font-semibold text-gray-900 text-lg">1.7kg</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-gray-100">
                    <span className="text-gray-600 text-base">精度</span>
                    <span className="font-semibold text-gray-900 text-lg">1cm (後処理)</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-gray-100">
                    <span className="text-gray-600 text-base">保存容量</span>
                    <span className="font-semibold text-gray-900 text-lg">1TB SSD</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-gray-100">
                    <span className="text-gray-600 text-base">特徴</span>
                    <span className="font-semibold text-gray-900 text-lg">RTK・視覚支援</span>
                  </div>
                </div>

                <Link
                  href="/products/lixel-l2-pro"
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-brand-black text-white font-semibold text-lg rounded-xl hover:bg-brand-silver-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-brand-black"
                >
                  詳細を見る
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* K1 Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-silver-200">
              {/* Product Image */}
              <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-brand-silver-50 via-brand-silver-100 to-white p-12">
                <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                  <Link href="/contact" className="inline-block">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-brand-silver-200 hover:bg-brand-blue-50 hover:border-brand-blue-300 transition-all cursor-pointer">
                      <p className="text-sm font-bold text-brand-blue-600 hover:text-brand-blue-700">価格 →</p>
                    </div>
                  </Link>
                  <span className="inline-flex items-center px-4 py-2 text-sm font-semibold bg-brand-silver-600 text-white rounded-full shadow-lg">
                    ENTRY MODEL
                  </span>
                </div>
                <div className="h-full flex items-center justify-center">
                  <img 
                    src={getImagePath('/images/k1_product.png')} 
                    alt="Lixel K1"
                    className="max-h-full w-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-10">
                <div className="mb-8">
                  <img 
                    src={getImagePath('/images/k1_name_en.png')} 
                    alt="Lixel K1"
                    className="h-10 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  コンパクトハンドヘルドスキャナー
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  室内や小規模施設に最適。軽量で持ち運びやすく、初心者でも簡単操作。
                </p>

                {/* Key Specs */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-4 border-b border-gray-100">
                    <span className="text-gray-600 text-base">重量</span>
                    <span className="font-semibold text-gray-900 text-lg">760g</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-gray-100">
                    <span className="text-gray-600 text-base">精度</span>
                    <span className="font-semibold text-gray-900 text-lg">1.2cm (後処理)</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-gray-100">
                    <span className="text-gray-600 text-base">保存容量</span>
                    <span className="font-semibold text-gray-900 text-lg">256GB TF</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-gray-100">
                    <span className="text-gray-600 text-base">特徴</span>
                    <span className="font-semibold text-gray-900 text-lg">超軽量・簡単操作</span>
                  </div>
                </div>

                <Link
                  href="/products/lixel-k1"
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-brand-silver-700 text-white font-semibold text-lg rounded-xl hover:bg-brand-silver-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-brand-silver-700"
                >
                  詳細を見る
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Detailed Comparison Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-brand-silver-200">
            <div className="bg-brand-black px-8 py-6">
              <h3 className="text-xl font-semibold text-white">詳細スペック比較</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-brand-silver-200 bg-brand-silver-50">
                    <th className="px-6 py-4 text-left text-sm font-medium text-brand-black">
                      仕様
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-brand-black">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-brand-blue-600 rounded-full"></div>
                        Lixel L2 Pro
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-brand-black">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-brand-silver-600 rounded-full"></div>
                        Lixel K1
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-silver-200">
                  <tr className="hover:bg-brand-silver-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-brand-silver-600">価格</td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <Link href="/contact" className="text-brand-blue-600 hover:text-brand-blue-700 hover:underline">
                        お問い合わせください →
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <Link href="/contact" className="text-brand-blue-600 hover:text-brand-blue-700 hover:underline">
                        お問い合わせください →
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-brand-silver-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-brand-silver-600">用途</td>
                    <td className="px-6 py-4 text-sm font-medium">大規模施設・屋外</td>
                    <td className="px-6 py-4 text-sm font-medium">室内・小規模</td>
                  </tr>
                  <tr className="hover:bg-brand-silver-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-brand-silver-600">消費電力</td>
                    <td className="px-6 py-4 text-sm">&lt;30W</td>
                    <td className="px-6 py-4 text-sm">&lt;20W</td>
                  </tr>
                  <tr className="hover:bg-brand-silver-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-brand-silver-600">動作時間</td>
                    <td className="px-6 py-4 text-sm">1.5時間</td>
                    <td className="px-6 py-4 text-sm">1.5時間</td>
                  </tr>
                  <tr className="hover:bg-brand-silver-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-brand-silver-600">寸法</td>
                    <td className="px-6 py-4 text-sm">180×130×400mm</td>
                    <td className="px-6 py-4 text-sm">130×100×275mm</td>
                  </tr>
                  <tr className="hover:bg-brand-silver-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-brand-silver-600">防塵防滴</td>
                    <td className="px-6 py-4 text-sm">IP54</td>
                    <td className="px-6 py-4 text-sm">IP54</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-600 align-top">主な機能</td>
                    <td className="px-6 py-4">
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          視覚支援測位
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          リアルタイムRTK融合
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          点群エンハンスメント
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          リアルタイムカラー点群
                        </li>
                      </ul>
                    </td>
                    <td className="px-6 py-4">
                      <ul className="text-sm space-y-1">
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          リアルタイムカラー点群
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          ワンボタン操作
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          超軽量設計
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CTA Section */}
            <div className="bg-brand-silver-50 px-8 py-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-brand-silver-700">
                    ハードウェアの価格はお問い合わせください。
                  </p>
                  <p className="text-brand-silver-600 text-sm mt-1">
                    3DGSやLixelのSDKを使用した開発のご要望も承っております。
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-2 bg-brand-blue-600 text-white font-medium rounded-lg hover:bg-brand-blue-700 transition-colors border border-brand-blue-600"
                >
                  お問い合わせ
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}