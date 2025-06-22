import { Metadata } from 'next'
import Link from 'next/link'
import AccessoryCard from '@/components/products/AccessoryCard'

export const metadata: Metadata = {
  title: 'オプションパーツ・アクセサリー | 株式会社UPHASH',
  description: 'Lixelシリーズ用のオプションパーツとアクセサリー。RTKキット、バッテリー、マウント、保護ケースなど、作業効率を向上させる豊富なラインナップ。',
}

const accessories = [
  {
    category: 'L2 Pro専用アクセサリー',
    items: [
      {
        name: 'L2 Pro 測量用RTKキット',
        description: '高精度測量作業用の完全RTKソリューション',
        features: ['センチメートル級精度', 'GNSS L1/L2対応', '専用ベースステーション込み'],
        price: 'お問い合わせ',
        compatibility: 'L2 Pro',
        image: '/images/accessories/l2-rtk-kit.png'
      },
      {
        name: 'L2 Pro RTKスタンダードキット',
        description: '標準的な測量作業向けRTKキット',
        features: ['ネットワークRTK対応', '軽量設計', '長時間稼働'],
        price: 'お問い合わせ',
        compatibility: 'L2 Pro',
        image: '/images/accessories/l2-rtk-standard.png'
      },
      {
        name: 'DJI Matrice 350 RTK用マウントアダプター',
        description: 'L2 ProをDJI Matrice 350 RTKに装着するための専用アダプター',
        features: ['振動吸収設計', 'クイックリリース機構', '飛行中の安定性確保'],
        price: 'お問い合わせ',
        compatibility: 'L2 Pro + DJI M350',
        image: '/images/accessories/l2-dji-mount.png'
      },
      {
        name: 'L2 Series 追加バッテリー',
        description: 'L2シリーズ用大容量バッテリー',
        features: ['5時間連続稼働', 'ホットスワップ対応', '温度管理機能'],
        price: 'お問い合わせ',
        compatibility: 'L2 Pro',
        image: '/images/accessories/l2-battery.png'
      },
      {
        name: 'L2 Series 延長ポール&本体マウント',
        description: '高所や狭所のスキャン用延長ポールキット',
        features: ['最大3m延長', 'カーボンファイバー製', '360°回転マウント'],
        price: 'お問い合わせ',
        compatibility: 'L2 Pro',
        image: '/images/accessories/l2-extension-pole.png'
      },
      {
        name: 'L2 Series スマートフォンマウントモジュール',
        description: 'L2シリーズ用スマホ・タブレットマウント',
        features: ['タブレット対応', '防振マウント', 'USB給電対応'],
        price: 'お問い合わせ',
        compatibility: 'L2 Pro',
        image: '/images/accessories/phone-mount.jpg'
      },
      {
        name: 'L2 Series GCPプレート',
        description: 'L2シリーズ用大型GCPプレート',
        features: ['高精度ターゲット', '10枚セット', '耐候性素材'],
        price: 'お問い合わせ',
        compatibility: 'L2 Pro',
        image: '/images/accessories/l2-gcp-plates.png'
      },
      {
        name: 'L2 Series 新バックパック',
        description: 'プロフェッショナル向け専用バックパック',
        features: ['防水・防塵設計', 'クッション内蔵', 'アクセサリーポケット多数'],
        price: 'お問い合わせ',
        compatibility: 'L2 Pro',
        image: '/images/accessories/l2-backpack.png'
      }
    ]
  },
  {
    category: 'K1専用アクセサリー',
    items: [
      {
        name: 'K1 RTK モジュール',
        description: 'K1用の追加RTKモジュール',
        features: ['簡単装着', '絶対精度3cm以下', 'リアルタイム補正'],
        price: 'お問い合わせ',
        compatibility: 'K1',
        image: '/images/accessories/k1-rtk-module.png'
      },
      {
        name: 'K1 追加バッテリー&追加充電アダプターセット',
        description: '長時間作業用の予備バッテリーと充電器のセット',
        features: ['2個同時充電可能', '急速充電対応', '残量インジケーター付き'],
        price: 'お問い合わせ',
        compatibility: 'K1',
        image: '/images/accessories/k1-battery-charger-set.png'
      },
      {
        name: 'K1 追加バッテリー',
        description: 'K1用交換バッテリー',
        features: ['3時間連続稼働', '軽量設計', '安全保護機能内蔵'],
        price: 'お問い合わせ',
        compatibility: 'K1',
        image: '/images/accessories/k1-battery.png'
      },
      {
        name: 'K1 延長ポール&本体マウント',
        description: 'K1用軽量延長ポール',
        features: ['最大2m延長', 'アルミニウム合金', 'クイックリリース機構'],
        price: 'お問い合わせ',
        compatibility: 'K1',
        image: '/images/accessories/k1-extension-pole.png'
      },
      {
        name: 'K1 スマートフォンマウントモジュール',
        description: 'スマートフォン装着用マウント',
        features: ['各種スマホ対応', '振動吸収設計', '角度調整可能'],
        price: 'お問い合わせ',
        compatibility: 'K1',
        image: '/images/accessories/phone-mount.jpg'
      },
      {
        name: 'K1 GCPプレート',
        description: '地上基準点（GCP）マーカープレート',
        features: ['高反射素材', '5枚セット', 'キャリーケース付き'],
        price: 'お問い合わせ',
        compatibility: 'K1',
        image: '/images/accessories/k1-gcp-plates.png'
      },
      {
        name: 'K1 収納ケース',
        description: 'K1専用ハードケース',
        features: ['耐衝撃設計', 'カスタムフォーム', 'TSAロック対応'],
        price: 'お問い合わせ',
        compatibility: 'K1',
        image: '/images/accessories/k1-hard-case.png'
      },
      {
        name: 'K1 保護カバー',
        description: 'K1本体用保護カバー',
        features: ['シリコン製', '落下保護', 'グリップ向上'],
        price: 'お問い合わせ',
        compatibility: 'K1',
        image: '/images/accessories/k1-protective-cover.png'
      }
    ]
  },
  {
    category: '共通アクセサリー',
    items: [
      {
        name: 'ユニバーサル三脚',
        description: 'L2 Pro/K1両対応の専用三脚',
        features: ['高さ調整可能', 'アルミニウム合金製', '水準器内蔵'],
        price: 'お問い合わせ',
        compatibility: 'L2 Pro / K1',
        image: '/images/accessories/universal-tripod.png'
      },
      {
        name: 'ポータブル充電ステーション',
        description: '現場での充電を可能にするポータブル電源',
        features: ['大容量バッテリー', 'ソーラーパネル対応', '複数デバイス同時充電'],
        price: 'お問い合わせ',
        compatibility: 'L2 Pro / K1',
        image: '/images/accessories/portable-charger.png'
      },
      {
        name: 'プロテクティブレンズフィルター',
        description: 'LiDARセンサー保護用フィルター',
        features: ['高透過率', '防塵・防水', '簡単着脱'],
        price: 'お問い合わせ',
        compatibility: 'L2 Pro / K1',
        image: '/images/accessories/lens-filter.png'
      },
      {
        name: 'キャリブレーションターゲット',
        description: '精度確認用キャリブレーションセット',
        features: ['高精度ターゲット', '各種サイズ込み', '収納ケース付き'],
        price: 'お問い合わせ',
        compatibility: 'L2 Pro / K1',
        image: '/images/accessories/calibration-target.png'
      }
    ]
  }
]

export default function AccessoriesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              オプションパーツ・アクセサリー
            </h1>
            <p className="text-xl text-gray-300">
              作業効率を最大化する、プロフェッショナル向けアクセサリー
            </p>
          </div>
        </div>
      </section>

      {/* Compatibility Guide */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4">対応製品ガイド</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold">L2</span>
                </div>
                <p className="font-medium">L2 Pro専用</p>
                <p className="text-sm text-gray-500">L2 Proシリーズのみ対応</p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-600 font-bold">K1</span>
                </div>
                <p className="font-medium">K1専用</p>
                <p className="text-sm text-gray-500">K1シリーズのみ対応</p>
              </div>
              <div className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-purple-600 font-bold">共通</span>
                </div>
                <p className="font-medium">共通使用可能</p>
                <p className="text-sm text-gray-500">両シリーズで使用可能</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Sections */}
      {accessories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-16 md:py-24 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <AccessoryCard
                  key={itemIndex}
                  name={item.name}
                  description={item.description}
                  features={item.features}
                  price={item.price}
                  compatibility={item.compatibility}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            アクセサリーに関するお問い合わせ
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            複数のアクセサリーや大量購入のご相談、カスタマイズのご要望など、
            お気軽にお問い合わせください
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            お問い合わせ・見積もり依頼
          </Link>
        </div>
      </section>
    </main>
  )
}