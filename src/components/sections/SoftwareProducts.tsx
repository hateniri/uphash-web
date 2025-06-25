import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

export default function SoftwareProducts() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Software Products */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Lixel Studio */}
            <Link href="/products/lixel-studio" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all h-full transform hover:-translate-y-1">
                <div className="h-48 bg-gray-100 flex items-center justify-center p-8">
                  <img 
                    src={getImagePath('/images/logos/lixel-studio-logo.png')} 
                    alt="Lixel Studio点群処理ソフトウェアロゴ"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3">Lixel Studio</h4>
                  <p className="text-gray-600 mb-4">
                    包括的な点群処理・編集ソフトウェア
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      点群編集
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                      Windows
                    </span>
                  </div>
                  <p className="text-gray-900 group-hover:text-blue-600 font-medium transition-colors flex items-center">
                    詳細を見る 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </p>
                </div>
              </div>
            </Link>

            {/* Lixel Cyber Color Studio */}
            <Link href="/products/lixel-cyber-color" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all h-full transform hover:-translate-y-1">
                <div className="h-48 bg-gray-100 flex items-center justify-center p-8">
                  <img 
                    src={getImagePath('/images/logos/lcc-studio-logo.png')} 
                    alt="Lixel Cyber Color Studio 3D再構築ソフトウェアロゴ"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3">Lixel Cyber Color</h4>
                  <p className="text-gray-600 mb-4">
                    次世代3D再構築ソフトウェア
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                      3D Gaussian Splatting
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                      Windows
                    </span>
                  </div>
                  <p className="text-gray-900 group-hover:text-blue-600 font-medium transition-colors flex items-center">
                    詳細を見る 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </p>
                </div>
              </div>
            </Link>

            {/* Lixel GO */}
            <Link href="/products/lixel-go" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all h-full transform hover:-translate-y-1">
                <div className="h-48 bg-gray-100 flex items-center justify-center p-8">
                  <img 
                    src={getImagePath('/images/logos/lixel-go-logo.png')} 
                    alt="Lixel GOモバイルアプリロゴ"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3">Lixel GO</h4>
                  <p className="text-gray-600 mb-4">
                    モバイルコントロールアプリ
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      無料
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                      iOS/Android
                    </span>
                  </div>
                  <p className="text-gray-900 group-hover:text-blue-600 font-medium transition-colors flex items-center">
                    詳細を見る 
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Additional Software */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* LCC Viewer */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="flex items-center p-6">
                <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center p-4 mr-6">
                  <img 
                    src={getImagePath('/images/logos/lcc-viewer-logo.png')} 
                    alt="LCC Viewer 3Dモデルビューアーロゴ"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-2">LCC Viewer</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    無料3Dモデルビューアー
                  </p>
                  <div className="flex flex-wrap gap-2">
                  </div>
                </div>
              </div>
            </div>

            {/* Revit Plugin */}
            <Link href="/products/revit-plugin" className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all h-full">
                <div className="flex items-center p-6">
                  <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center p-4 mr-6">
                    <img 
                      src={getImagePath('/images/logos/revit-logo.png')} 
                      alt="LCC for Revit BIMプラグインロゴ"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold mb-2">LCC for Revit</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      AI搭載Scan-to-BIMソリューション
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                        AI BIM生成
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                        Autodesk Revit
                      </span>
                    </div>
                    <p className="text-gray-900 group-hover:text-blue-600 font-medium transition-colors flex items-center text-sm">
                      詳細を見る 
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}