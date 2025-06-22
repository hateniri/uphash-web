import { CompanyInfo, NavItem } from '@/types'

export const COMPANY_INFO: CompanyInfo = {
  name: 'UP HASH',
  tagline: '空間をスキャンし、コンテンツに変える',
  description: 'XGRIDS Field Scannerで点群データをリアルタイムで表示。空間スキャニングと3Dコンテンツ作成の革新的ソリューション。',
  foundedYear: 2024,
  address: {
    street: '',
    city: 'Tokyo',
    state: 'Tokyo',
    zip: '',
    country: 'Japan'
  },
  contact: {
    email: 'info@uphash.net',
    phone: ''
  }
}

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
  { label: 'Topics', href: '/topics' }
]

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/uphash',
  linkedin: 'https://linkedin.com/company/uphash',
  github: 'https://github.com/hateniri',
  facebook: 'https://facebook.com/uphash'
}

export const PRODUCTS = [
  {
    id: 'lixel-l2-pro',
    name: 'Lixel L2 Pro',
    category: 'Professional',
    description: 'プロフェッショナル向け最高級3Dレーザースキャナー',
    features: [
      '最高精度±0.03mm',
      'スキャン範囲: 0.3m-5m',
      'リアルタイム点群処理',
      'AI搭載自動キャリブレーション',
      '防塵防水IP54規格'
    ],
    specs: {
      accuracy: '±0.03mm',
      range: '0.3m-5m',
      speed: '480,000点/秒',
      weight: '1.2kg'
    },
    image: '/images/lixel_l2_pro.jpg'
  },
  {
    id: 'lixel-l2',
    name: 'Lixel L2',
    category: 'Standard',
    description: 'バランスの取れたスタンダードモデル',
    features: [
      '高精度±0.05mm',
      'スキャン範囲: 0.3m-4m',
      '簡単操作インターフェース',
      'ポータブル設計',
      '長時間バッテリー'
    ],
    specs: {
      accuracy: '±0.05mm',
      range: '0.3m-4m',
      speed: '320,000点/秒',
      weight: '0.9kg'
    },
    image: '/images/lixel_l2.webp'
  },
  {
    id: 'lixel-k1',
    name: 'Lixel K1',
    category: 'Compact',
    description: '超コンパクト・軽量モデル',
    features: [
      '精度±0.1mm',
      'スキャン範囲: 0.2m-2m',
      '片手操作可能',
      'スマートフォン連携',
      '初心者にも扱いやすい'
    ],
    specs: {
      accuracy: '±0.1mm',
      range: '0.2m-2m',
      speed: '160,000点/秒',
      weight: '0.5kg'
    },
    image: '/images/lixel_kity_k1.jpg'
  },
  {
    id: 'lixel-lcc',
    name: 'Lixel LCC',
    category: 'Industrial',
    description: '大規模施設向け産業用スキャナー',
    features: [
      '超長距離スキャン: 最大120m',
      '360度全方位スキャン',
      '自動レジストレーション',
      'クラウド直接アップロード',
      '複数台同時制御'
    ],
    specs: {
      accuracy: '±2mm@10m',
      range: '0.6m-120m',
      speed: '1,000,000点/秒',
      weight: '5.2kg'
    },
    image: '/images/products/lixel-lcc.jpg'
  }
]