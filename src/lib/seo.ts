import { Metadata } from 'next'

interface PageSEOProps {
  title: string
  description: string
  path?: string
  image?: string
  keywords?: string[]
  noindex?: boolean
}

export function generatePageMetadata({
  title,
  description,
  path = '',
  image = '/og-image.png',
  keywords = [],
  noindex = false
}: PageSEOProps): Metadata {
  const baseUrl = 'https://xgrids.uphash.net'
  const url = `${baseUrl}${path}`
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`

  return {
    title,
    description,
    keywords: [
      'XGRIDS',
      'Lixel',
      'LiDAR',
      '3Dスキャナー',
      'SLAM',
      '点群処理',
      '3D計測',
      '測量',
      'UP HASH',
      ...keywords
    ],
    openGraph: {
      title: `${title} | UP HASH`,
      description,
      url,
      siteName: 'UP HASH',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | UP HASH`,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// 各ページ用のメタデータ
export const pageMetadata = {
  home: {
    title: 'UP HASH - 空間をスキャンし、コンテンツに変える',
    description: 'XGRIDS Field Scannerで点群データをリアルタイムで表示。Lixel L2 Pro・K1による革新的な3Dスキャニングソリューション。建設・測量・不動産業界に最適。',
    keywords: ['3Dスキャニング', 'リアルタイム点群', '建設DX', 'BIM/CIM']
  },
  products: {
    title: '製品ラインナップ - ハードウェア',
    description: 'Lixel L2 Pro・K1などプロフェッショナル向け3Dスキャナー。高精度LiDARと視覚SLAMを融合した次世代スキャニングデバイス。',
    keywords: ['Lixel L2 Pro', 'Lixel K1', 'ハンドヘルドスキャナー', 'ドローン搭載']
  },
  software: {
    title: 'ソフトウェアソリューション',
    description: 'Lixel Studio・Lixel GO・LCC for Revitなど、点群処理から3DGS生成まで統合されたソフトウェアエコシステム。',
    keywords: ['Lixel Studio', 'Lixel GO', '点群処理ソフト', 'Revitプラグイン']
  },
  caseStudies: {
    title: '業界別使用例・導入事例',
    description: '建設・土木、測量・地図作成、不動産・施設管理など、様々な業界でのXGRIDS活用事例をご紹介。',
    keywords: ['導入事例', '建設DX', '測量効率化', 'BIM活用']
  },
  contact: {
    title: 'お問い合わせ・無料相談',
    description: 'XGRIDSの導入相談、デモンストレーション、技術サポートなど、お気軽にお問い合わせください。',
    keywords: ['お問い合わせ', '無料相談', 'デモ申込み', '技術サポート']
  },
  faq: {
    title: 'よくある質問 - FAQ',
    description: 'XGRIDS製品に関するよくある質問と回答。技術仕様、価格、サポート体制などについて詳しく解説。',
    keywords: ['FAQ', 'よくある質問', '技術仕様', 'サポート']
  },
  tutorials: {
    title: 'チュートリアル・操作ガイド',
    description: 'Lixelシリーズの操作方法、スキャニングガイド、ソフトウェアの使い方を動画と画像で分かりやすく解説。',
    keywords: ['チュートリアル', '操作ガイド', 'スキャニング方法', '使い方']
  }
}