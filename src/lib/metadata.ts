import { Metadata } from 'next'
import { COMPANY_INFO, SOCIAL_LINKS } from './constants'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://uphash.net'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`,
    template: `%s | ${COMPANY_INFO.name}`
  },
  description: COMPANY_INFO.description,
  keywords: ['XGRIDS', 'Lixel', 'LiDAR', '3Dスキャナー', 'SLAM', 'Lixel L2 Pro', 'Lixel K1', 'Lixel Studio', 'Lixel Cyber Color', '点群処理', '3D計測', '測量', 'UP HASH', '日本'],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`,
    description: COMPANY_INFO.description,
    url: baseUrl,
    siteName: COMPANY_INFO.name,
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: COMPANY_INFO.name,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`,
    description: COMPANY_INFO.description,
    site: '@uphash',
    creator: '@uphash',
    images: [`${baseUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      'ja-JP': baseUrl,
    },
  },
  category: 'technology',
}