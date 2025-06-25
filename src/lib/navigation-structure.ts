export interface NavigationItem {
  label: string
  href?: string
  children?: NavigationChild[]
  featured?: boolean
}

export interface NavigationChild {
  label: string
  href: string
  description?: string
  icon?: string
}

export const navigationStructure: NavigationItem[] = [
  {
    label: 'ハードウェア',
    href: '/products',
    children: [
      {
        label: 'Lixel L2 Pro',
        href: '/products/lixel-l2-pro',
        description: '最上位モデル - 屋内外対応SLAM LiDAR'
      },
      {
        label: 'Lixel K1',
        href: '/products/lixel-k1',
        description: 'エントリーモデル - 手軽に始める3Dスキャン'
      },
      {
        label: 'アクセサリー',
        href: '/products/accessories',
        description: 'RTKモジュール、三脚、バッテリーなど'
      }
    ]
  },
  {
    label: 'ソフトウェア',
    href: '/software',
    children: [
      {
        label: 'Lixel Studio',
        href: '/products/lixel-studio',
        description: '点群処理ソフトウェア'
      },
      {
        label: 'LCC Studio',
        href: '/products/lixel-cyber-color',
        description: '3D Gaussian Splattingソフトウェア'
      },
      {
        label: 'LCC for Revit',
        href: '/products/revit-plugin',
        description: 'RevitプラグインでBIMモデリング'
      },
      {
        label: 'Lixel GO',
        href: '/products/lixel-go',
        description: 'モバイルスキャンアプリ'
      }
    ]
  },
  {
    label: '事例紹介',
    href: '/case-studies',
    children: [
      {
        label: '測量・地理空間',
        href: '/case-studies#surveying',
        description: '地形測量やインフラ設備の3Dマッピング'
      },
      {
        label: '建築・都市計画',
        href: '/case-studies#architecture',
        description: 'BIMモデリングと都市計画への活用'
      },
      {
        label: '映像・エンターテインメント',
        href: '/case-studies#entertainment',
        description: 'VFXやAR/VRコンテンツ制作'
      },
      {
        label: 'エネルギー・鉱業',
        href: '/case-studies#energy',
        description: '施設管理とスマート鉱業'
      },
      {
        label: '公共安全',
        href: '/case-studies#public-safety',
        description: '事故調査とフォレンジック'
      }
    ]
  },
  {
    label: 'サポート',
    href: '/support',
    children: [
      {
        label: 'マニュアル',
        href: '/downloads',
        description: 'ユーザーマニュアル・操作ガイド'
      },
      {
        label: 'カタログ',
        href: '/catalog',
        description: '製品カタログ・仕様書'
      },
      {
        label: 'チュートリアル',
        href: '/tutorials',
        description: 'ビデオチュートリアル・使い方ガイド'
      },
      {
        label: 'よくある質問',
        href: '/faq',
        description: 'FAQ・トラブルシューティング'
      },
      {
        label: 'スキャンガイド',
        href: '/scan-guide',
        description: '初心者向け基本ガイド'
      }
    ]
  },
  {
    label: 'XGRIDS',
    children: [
      {
        label: 'XGRIDSについて',
        href: '/about-xgrids',
        description: '技術とビジョン'
      },
      {
        label: 'ブログ',
        href: '/blog',
        description: '技術記事・導入事例'
      }
    ]
  }
]