'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

interface AccessoryCardProps {
  name: string
  description: string
  features: string[]
  price: string
  compatibility: string
  image: string
}

export default function AccessoryCard({
  name,
  description,
  features,
  price,
  compatibility,
  image
}: AccessoryCardProps) {
  const [imgError, setImgError] = useState(false)

  const placeholderImage = getImagePath('/images/accessories/placeholder.svg')

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="aspect-square bg-gray-100 flex items-center justify-center">
        <img 
          src={imgError ? placeholderImage : getImagePath(image)} 
          alt={name}
          className="w-full h-full object-contain p-4"
          onError={() => setImgError(true)}
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold flex-1">{name}</h3>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ml-2 ${
            compatibility === 'L2 Pro' ? 'bg-blue-100 text-blue-600' :
            compatibility === 'K1' ? 'bg-green-100 text-green-600' :
            compatibility === 'L2 Pro + DJI M350' ? 'bg-orange-100 text-orange-600' :
            'bg-purple-100 text-purple-600'
          }`}>
            {compatibility}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        
        <div className="mb-4">
          <ul className="text-sm text-gray-600 space-y-1">
            {features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start">
                <svg className="w-4 h-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <p className="text-lg font-bold text-gray-900">{price}</p>
        </div>
      </div>
    </div>
  )
}