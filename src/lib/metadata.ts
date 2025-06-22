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
  keywords: ['technology', 'innovation', 'software', 'solutions', 'business', 'Japan', 'Tokyo'],
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
    locale: 'en_US',
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
      'en-US': baseUrl,
      'ja-JP': `${baseUrl}/ja`,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'technology',
}