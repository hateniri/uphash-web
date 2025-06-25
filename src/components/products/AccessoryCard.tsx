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
      <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center relative">
        <img 
          src={imgError ? placeholderImage : getImagePath(image)} 
          alt={`${name}アクセサリー製品画像`}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
        <span className={`absolute top-3 right-3 px-3 py-1.5 text-xs font-bold rounded-full ${
          compatibility === 'L2 Pro' ? 'bg-brand-blue-600 text-white' :
          compatibility === 'K1' ? 'bg-green-600 text-white' :
          compatibility === 'L2 Pro + DJI M350' ? 'bg-brand-orange-600 text-white' :
          'bg-purple-600 text-white'
        }`}>
          {compatibility}
        </span>
      </div>
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-lg font-semibold">{name}</h3>
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

        {price && (
          <div className="pt-4 border-t border-gray-200">
            <p className="text-lg font-bold text-gray-900">{price}</p>
          </div>
        )}
      </div>
    </div>
  )
}