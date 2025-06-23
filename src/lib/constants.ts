import { CompanyInfo, NavItem } from '@/types'

export const COMPANY_INFO: CompanyInfo = {
  name: '株式会社UPHASH',
  tagline: '空間をスキャンし、コンテンツに変える',
  description: 'XGRIDS Field Scannerで点群データをリアルタイムで表示。空間スキャニングと3Dコンテンツ作成の革新的ソリューション。',
  foundedYear: 2024,
  address: {
    street: '虎ノ門１丁目１７−１',
    city: '港区',
    state: '東京都',
    zip: '105-6415',
    country: 'Japan'
  },
  contact: {
    email: 'info@uphash.net',
    phone: ''
  }
}

export const NAVIGATION_ITEMS: NavItem[] = [
  { 
    label: 'ハードウェア', 
    href: '/products',
    submenu: [
      { label: 'Lixel L2 Pro', href: '/products/lixel-l2-pro' },
      { label: 'Lixel K1', href: '/products/lixel-k1' },
      { label: 'アクセサリー', href: '/products/accessories' }
    ]
  },
  { 
    label: 'ソフトウェア', 
    href: '/software',
    submenu: [
      { label: 'Lixel Studio', href: '/products/lixel-studio' },
      { label: 'Lixel Cyber Color', href: '/products/lixel-cyber-color' },
      { label: 'Lixel GO', href: '/products/lixel-go' }
    ]
  },
  { 
    label: '業界別使用例', 
    href: '/case-studies',
    submenu: [
      { label: '建設・土木', href: '/case-studies#construction' },
      { label: '測量・地図作成', href: '/case-studies#surveying' },
      { label: '不動産・施設管理', href: '/case-studies#real-estate' },
      { label: '製造業', href: '/case-studies#manufacturing' },
      { label: '文化財保護', href: '/case-studies#heritage' }
    ]
  },
  { 
    label: 'サポート', 
    href: '/support',
    submenu: [
      { label: 'ダウンロード', href: '/downloads' },
      { label: 'チュートリアル', href: '/tutorials' },
      { label: 'FAQ', href: '/faq' },
      { label: 'お問い合わせ', href: '/contact' }
    ]
  },
  { label: 'お問い合わせ', href: '/contact' }
]

export const SOCIAL_LINKS = {
  twitter: 'https://x.com/UpHashNet',
  youtube: 'https://www.youtube.com/@UPHASHNET',
  github: 'https://github.com/UpHash-Network',
  linkedin: 'https://www.linkedin.com/in/shotaimai/',
  community: 'https://x.com/i/communities/1933731194157609219'
}

export const PRODUCTS = [
  {
    id: 'lixel-l2-pro-16-120',
    name: 'Lixel L2 Pro 16/120',
    category: 'Professional',
    description: 'エントリーレベル プロフェッショナル3Dレーザースキャナー',
    features: [
      '16チャンネルLiDAR',
      'スキャン範囲: 0.5m-120m',
      '320,000点/秒',
      'リアルタイムカラー点群生成',
      'RTK統合による絶対測位'
    ],
    specs: {
      accuracy: '相対精度: ±2cm / 絶対精度: ±3cm',
      range: '0.5m-120m',
      speed: '320,000点/秒',
      channels: '16チャンネル',
      camera: '2×48MP（190°×190°視野）'
    },
    image: '/images/lixel_l2_pro.jpg'
  },
  {
    id: 'lixel-l2-pro-32-120',
    name: 'Lixel L2 Pro 32/120',
    category: 'Professional',
    description: 'スタンダード プロフェッショナル3Dレーザースキャナー',
    features: [
      '32チャンネルLiDAR',
      'スキャン範囲: 0.5m-120m',
      '640,000点/秒',
      '高密度点群（1mm間隔）',
      'ゼロ後処理時代のSLAM技術'
    ],
    specs: {
      accuracy: '相対精度: ±2cm / 絶対精度: ±3cm',
      range: '0.5m-120m',
      speed: '640,000点/秒',
      channels: '32チャンネル',
      camera: '2×48MP（190°×190°視野）'
    },
    image: '/images/lixel_l2_pro.jpg'
  },
  {
    id: 'lixel-l2-pro-32-300',
    name: 'Lixel L2 Pro 32/300',
    category: 'Professional',
    description: '長距離対応 プロフェッショナル3Dレーザースキャナー',
    features: [
      '32チャンネルLiDAR',
      'スキャン範囲: 0.5m-300m',
      '640,000点/秒',
      '大規模エリアスキャン対応',
      'DJI M350/M300 RTK対応'
    ],
    specs: {
      accuracy: '相対精度: ±2cm / 絶対精度: ±3cm',
      range: '0.5m-300m',
      speed: '640,000点/秒',
      channels: '32チャンネル',
      camera: '2×48MP（190°×190°視野）'
    },
    image: '/images/lixel_l2_pro.jpg'
  },
  {
    id: 'lixel-k1',
    name: 'Lixel K1',
    category: 'Compact',
    description: '超軽量コンパクトハンドヘルドスキャナー',
    features: [
      '40チャンネルLiDAR',
      'スキャン範囲: 最大40m',
      '200,000点/秒',
      '重量1kg未満（バッテリー込み）',
      'AI駆動の動的オブジェクト除去'
    ],
    specs: {
      accuracy: '相対精度: ±1.2cm / 絶対精度: ≤3cm',
      range: '最大40m',
      speed: '200,000点/秒',
      weight: '<1kg',
      camera: '56MPパノラマカメラ（360°×360°）'
    },
    image: '/images/lixel_kity_k1.jpg'
  }
]

export const SEO_CONFIG = {
  siteName: 'UP HASH',
  siteUrl: 'https://uphash.net',
  defaultTitle: 'UP HASH - 空間をスキャンし、コンテンツに変える',
  defaultDescription: 'XGRIDS Field Scannerで点群データをリアルタイムで表示。空間スキャニングと3Dコンテンツ作成の革新的ソリューション。',
  defaultKeywords: 'technology,innovation,software,solutions,business,Japan,Tokyo',
  defaultImage: '/og-image.png',
  twitterHandle: '@uphash'
}