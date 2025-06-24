import Hero from '@/components/sections/Hero'
import ContactForm from '@/components/sections/ContactForm'
import StructuredData, { organizationSchema, websiteSchema } from '@/components/StructuredData'

export default function Home() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <main id="main-content">
      {/* ヒーローセクション */}
      <Hero />
      
      {/* 製品比較セクション */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* セクションヘッダー */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              製品スペック比較
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Lixel L2 Pro と Lixel K1 の詳細比較
            </p>
          </div>
          
          {/* 比較テーブル */}
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-gray-900 to-gray-800">
                      <th className="px-4 sm:px-6 lg:px-8 py-5 text-left">
                        <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                          項目
                        </span>
                      </th>
                      <th className="px-4 sm:px-6 lg:px-8 py-5 text-left">
                        <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                          Lixel L2 Pro
                        </span>
                      </th>
                      <th className="px-4 sm:px-6 lg:px-8 py-5 text-left">
                        <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                          Lixel K1
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {/* 消費電力 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 sm:px-6 lg:px-8 py-5">
                        <span className="text-sm font-medium text-gray-900">消費電力</span>
                      </td>
                      <td className="px-4 sm:px-6 lg:px-8 py-5">
                        <span className="text-sm text-gray-700">&lt;30W</span>
                      </td>
                      <td className="px-4 sm:px-6 lg:px-8 py-5">
                        <span className="text-sm text-gray-700">&lt;20W</span>
                      </td>
                    </tr>
                    
                    {/* 動作時間 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 sm:px-6 lg:px-8 py-5">
                        <span className="text-sm font-medium text-gray-900">動作時間</span>
                      </td>
                      <td className="px-4 sm:px-6 lg:px-8 py-5">
                        <span className="text-sm text-gray-700">1.5時間</span>
                      </td>
                      <td className="px-4 sm:px-6 lg:px-8 py-5">
                        <span className="text-sm text-gray-700">1.5時間</span>
                      </td>
                    </tr>
                    
                    {/* 重量 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 sm:px-6 lg:px-8 py-5">
                        <span className="text-sm font-medium text-gray-900">重量</span>
                      </td>
                      <td className="px-4 sm:px-6 lg:px-8 py-5">
                        <span className="text-sm text-gray-700">1.7kg（バッテリー除く）</span>
                      </td>
                      <td className="px-4 sm:px-6 lg:px-8 py-5">
                        <span className="text-sm text-gray-700">760g（バッテリー除く）</span>
                      </td>
                    </tr>
                    
                    {/* 寸法 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 sm:px-6 lg:px-8 py-5">
                        <span className="text-sm font-medium text-gray-900">寸法</span>
                      </td>
                      <td className="px-4 sm:px-6 lg:px-8 py-5">
                        <span className="text-sm text-gray-700">180mm × 130mm × 400mm</span>
                      </td>
                      <td className="px-4 sm:px-6 lg:px-8 py-5">
                        <span className="text-sm text-gray-700">130mm × 100mm × 275mm</span>
                      </td>
                    </tr>
                    
                    {/* 防塵防滴 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 sm:px-6 lg:px-8 py-5">
                        <span className="text-sm font-medium text-gray-900">防塵防滴</span>
                      </td>
                      <td className="px-4 sm:px-6 lg:px-8 py-5">
                        <span className="text-sm text-gray-700">IP54</span>
                      </td>
                      <td className="px-4 sm:px-6 lg:px-8 py-5">
                        <span className="text-sm text-gray-700">IP54</span>
                      </td>
                    </tr>
                    
                    {/* 保存容量 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 sm:px-6 lg:px-8 py-5">
                        <span className="text-sm font-medium text-gray-900">保存容量</span>
                      </td>
                      <td className="px-4 sm:px-6 lg:px-8 py-5">
                        <span className="text-sm text-gray-700">1TB SSD</span>
                      </td>
                      <td className="px-4 sm:px-6 lg:px-8 py-5">
                        <span className="text-sm text-gray-700">256GB TF Card</span>
                      </td>
                    </tr>
                    
                    {/* 精度 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 sm:px-6 lg:px-8 py-5 align-top">
                        <span className="text-sm font-medium text-gray-900">精度</span>
                      </td>
                      <td className="px-4 sm:px-6 lg:px-8 py-5">
                        <div className="space-y-1.5">
                          <p className="text-sm text-gray-700">後処理絶対精度 (RMSE): 3cm</p>
                          <p className="text-sm text-gray-700">リアルタイム相対精度 (RMSE): 2cm</p>
                          <p className="text-sm text-gray-700">後処理相対精度 (RMSE): 1cm</p>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 lg:px-8 py-5">
                        <div className="space-y-1.5">
                          <p className="text-sm text-gray-700">後処理絶対精度 (RMSE): 3cm</p>
                          <p className="text-sm text-gray-700">後処理相対精度 (RMSE): 1.2cm</p>
                        </div>
                      </td>
                    </tr>
                    
                    {/* 主な特長 */}
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 sm:px-6 lg:px-8 py-5 align-top">
                        <span className="text-sm font-medium text-gray-900">主な特長</span>
                      </td>
                      <td className="px-4 sm:px-6 lg:px-8 py-5">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-gray-400 mr-2 mt-0.5">•</span>
                            <span className="text-sm text-gray-700">視覚支援測位</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-gray-400 mr-2 mt-0.5">•</span>
                            <span className="text-sm text-gray-700">リアルタイムトゥルーカラー点群</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-gray-400 mr-2 mt-0.5">•</span>
                            <span className="text-sm text-gray-700">リアルタイムRTK融合</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-gray-400 mr-2 mt-0.5">•</span>
                            <span className="text-sm text-gray-700">点群エンハンスメント</span>
                          </li>
                        </ul>
                      </td>
                      <td className="px-4 sm:px-6 lg:px-8 py-5">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-gray-400 mr-2 mt-0.5">•</span>
                            <span className="text-sm text-gray-700">リアルタイムトゥルーカラー点群</span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <ContactForm />
    </main>
    </>
  )
}