import Hero from '@/components/sections/Hero'
import ContactForm from '@/components/sections/ContactForm'
import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

export default function Home() {
  return (
    <main id="main-content">
        <Hero />
        
        {/* Comparison Table Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                製品スペック比較
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Lixel L2 Pro と Lixel K1 の詳細比較
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-6 py-4 text-left font-medium">項目</th>
                    <th className="px-6 py-4 text-left font-medium">Lixel L2 Pro</th>
                    <th className="px-6 py-4 text-left font-medium">Lixel K1</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">消費電力</td>
                    <td className="px-6 py-4 text-gray-700">&lt;30W</td>
                    <td className="px-6 py-4 text-gray-700">&lt;20W</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">動作時間</td>
                    <td className="px-6 py-4 text-gray-700">1.5時間</td>
                    <td className="px-6 py-4 text-gray-700">1.5時間</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">重量</td>
                    <td className="px-6 py-4 text-gray-700">1.7kg（バッテリー除く）</td>
                    <td className="px-6 py-4 text-gray-700">760g（バッテリー除く）</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">寸法</td>
                    <td className="px-6 py-4 text-gray-700">180mm × 130mm × 400mm</td>
                    <td className="px-6 py-4 text-gray-700">130mm × 100mm × 275mm</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">防塵防滴</td>
                    <td className="px-6 py-4 text-gray-700">IP54</td>
                    <td className="px-6 py-4 text-gray-700">IP54</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">保存容量</td>
                    <td className="px-6 py-4 text-gray-700">1TB SSD</td>
                    <td className="px-6 py-4 text-gray-700">256GB TF Card</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900 align-top">精度</td>
                    <td className="px-6 py-4 text-gray-700">
                      <div className="space-y-1">
                        <p>後処理絶対精度 (RMSE): 3cm</p>
                        <p>リアルタイム相対精度 (RMSE): 2cm</p>
                        <p>後処理相対精度 (RMSE): 1cm</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      <div className="space-y-1">
                        <p>後処理絶対精度 (RMSE): 3cm</p>
                        <p>後処理相対精度 (RMSE): 1.2cm</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900 align-top">主な特長</td>
                    <td className="px-6 py-4 text-gray-700">
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">•</span>
                          <span>視覚支援測位</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">•</span>
                          <span>リアルタイムトゥルーカラー点群</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">•</span>
                          <span>リアルタイムRTK融合</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">•</span>
                          <span>点群エンハンスメント</span>
                        </li>
                      </ul>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      <ul className="space-y-1">
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">•</span>
                          <span>リアルタイムトゥルーカラー点群</span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>


        <ContactForm />
    </main>
  )
}