import Link from 'next/link'
import Image from 'next/image'
import { PRODUCTS } from '@/lib/constants'
import { getImagePath } from '@/lib/utils'

export default function ProductShowcase() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            製品ラインナップ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            用途に合わせて選べる3つのモデル
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                {/* Background logo */}
                {product.id.includes('l2-pro') && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-5">
                    <img 
                      src={getImagePath('/images/logos/l2-pro-logo.png')} 
                      alt=""
                      className="w-3/4 h-3/4 object-contain"
                    />
                  </div>
                )}
                {product.id.includes('k1') && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-5">
                    <img 
                      src={getImagePath('/images/logos/k1-logo.png')} 
                      alt=""
                      className="w-3/4 h-3/4 object-contain"
                    />
                  </div>
                )}
                
                {/* Product image */}
                {product.image ? (
                  <img 
                    src={getImagePath(product.image)} 
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 relative z-10 p-4"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-3">
                  {product.category}
                </p>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">主要スペック</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>精度: {product.specs.accuracy}</div>
                    <div>重量: {product.specs.weight}</div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={`/products/${product.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  詳細を見る
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            全ての製品を見る
          </Link>
        </div>
      </div>
    </section>
  )
}