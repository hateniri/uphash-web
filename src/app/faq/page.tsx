import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'よくある質問 (FAQ) | UP HASH',
  description: 'Lixelシリーズに関するよくある質問と回答集。製品仕様、使い方、トラブルシューティングなど。',
}

const faqCategories = [
  {
    category: '製品について',
    questions: [
      {
        q: 'Lixel L2 ProとLixel K1の違いは何ですか？',
        a: 'L2 Proは長距離・高精度スキャンに特化したプロフェッショナルモデルで、最大300mの測定範囲と32チャンネルLiDARを搭載しています。一方、K1は1kg未満の超軽量コンパクトモデルで、40mの測定範囲で手軽に高品質なスキャンが可能です。用途に応じてお選びください。'
      },
      {
        q: 'スキャナーの精度はどの程度ですか？',
        a: 'L2 Proシリーズは相対精度±2cm（100m以内の任意の2点間）、絶対精度±3cm（RTK使用時）を実現しています。K1は相対精度±1.2cm、絶対精度≤3cmです。いずれも測量グレードの高精度を提供します。'
      },
      {
        q: 'バッテリーの持続時間はどのくらいですか？',
        a: 'L2 Proは標準バッテリーで約5時間、K1は約3時間の連続稼働が可能です。追加バッテリーもご用意しており、ホットスワップ対応のため作業を中断することなく交換できます。'
      },
      {
        q: '防水・防塵性能はありますか？',
        a: '両製品ともIP54相当の防塵・防滴性能を持っています。軽い雨や埃の多い環境でも使用可能ですが、完全防水ではないため水没にはご注意ください。'
      }
    ]
  },
  {
    category: '購入・価格について',
    questions: [
      {
        q: '価格を教えてください',
        a: '製品価格は構成やオプションにより異なります。お客様の用途に最適な構成をご提案させていただきますので、お問い合わせフォームよりご連絡ください。見積もりは無料です。'
      },
      {
        q: 'レンタルやリースは可能ですか？',
        a: '短期レンタルおよび長期リースプランをご用意しています。プロジェクト単位でのご利用や、導入前のお試し利用にもご活用いただけます。詳細はお問い合わせください。'
      },
      {
        q: '納期はどのくらいですか？',
        a: '在庫状況により異なりますが、標準構成の場合は通常2-3週間程度でお届けしています。カスタム構成や大量注文の場合は別途ご相談ください。'
      },
      {
        q: '支払い方法は何が利用できますか？',
        a: '銀行振込、クレジットカード（法人カード含む）、リースでのお支払いに対応しています。分割払いのご相談も承っております。'
      }
    ]
  },
  {
    category: '使い方・操作について',
    questions: [
      {
        q: '初心者でも使えますか？',
        a: 'はい、直感的な操作設計により初心者の方でも簡単にご利用いただけます。Lixel GOアプリでワンタッチ操作が可能で、日本語のマニュアルとチュートリアル動画もご用意しています。'
      },
      {
        q: 'スキャンデータの処理にはどんなソフトが必要ですか？',
        a: 'Lixelスキャナーには無料のLixel Studioが付属しており、点群データの表示、編集、エクスポートが可能です。より高度な3D再構築にはLixel Cyber Color Studio（別売）をおすすめします。'
      },
      {
        q: 'スマートフォンやタブレットで操作できますか？',
        a: 'はい、iOS/Android対応のLixel GOアプリを使用して、スマートフォンやタブレットから操作できます。リアルタイムプレビューや設定変更も可能です。'
      },
      {
        q: '他社製ソフトウェアとの互換性はありますか？',
        a: '標準的な点群フォーマット（LAS、LAZ、PLY、E57、PCD等）でエクスポート可能なため、AutoCAD、Revit、CloudCompareなど主要なCAD/BIMソフトウェアで利用できます。'
      }
    ]
  },
  {
    category: 'トラブルシューティング',
    questions: [
      {
        q: 'スキャンデータにノイズが多い場合の対処法は？',
        a: '環境光の影響、反射面、振動などが原因の可能性があります。スキャン速度の調整、IMUキャリブレーション、適切なスキャンパスの選択により改善できます。詳しくはサポートまでご相談ください。'
      },
      {
        q: 'RTKが接続できない場合は？',
        a: 'RTK基地局との通信設定、NTRIP設定、SIMカードの状態を確認してください。また、空が開けた場所での使用を推奨します。設定ガイドはダウンロードページからご覧いただけます。'
      },
      {
        q: 'ファームウェアのアップデート方法は？',
        a: 'Lixel GOアプリまたはPCソフトウェアから簡単にアップデートできます。アップデート前には必ずデータのバックアップを取ることをお勧めします。'
      },
      {
        q: '保証期間と修理について教えてください',
        a: '製品保証期間は購入日から1年間です。延長保証プランもご用意しています。修理は国内サービスセンターで対応し、代替機の貸出サービスも行っています。'
      }
    ]
  },
  {
    category: 'その他',
    questions: [
      {
        q: 'トレーニングやサポートは受けられますか？',
        a: '導入時の初期トレーニング、定期的なウェビナー、オンサイトトレーニングをご提供しています。技術サポートは電話、メール、リモートサポートで対応いたします。'
      },
      {
        q: 'デモンストレーションは可能ですか？',
        a: 'はい、実機でのデモンストレーションを承っています。お客様の現場での実証実験も可能です。オンラインデモもご用意していますので、お気軽にお申し込みください。'
      },
      {
        q: '海外での使用は可能ですか？',
        a: 'はい、世界各国でご利用いただけます。ただし、一部の国では電波法規制により使用が制限される場合があります。詳細はお問い合わせください。'
      }
    ]
  }
]

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              よくある質問
            </h1>
            <p className="text-xl text-gray-600">
              お客様から寄せられる質問と回答をまとめました
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-blue-600">
                  {category.category}
                </h2>
                <div className="space-y-6">
                  {category.questions.map((item, itemIndex) => (
                    <details
                      key={itemIndex}
                      className="bg-white rounded-lg shadow-md overflow-hidden group"
                    >
                      <summary className="px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors flex items-center justify-between">
                        <span className="font-semibold text-gray-900 pr-4">
                          {item.q}
                        </span>
                        <svg
                          className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <div className="px-6 py-4 border-t border-gray-200">
                        <p className="text-gray-600 leading-relaxed">{item.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ご不明な点がございましたら
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            FAQで解決しない場合は、お気軽にお問い合わせください。
            専門スタッフが丁寧にご対応いたします。
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              お問い合わせフォーム
            </Link>
            <Link
              href="/tutorials"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              チュートリアルを見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}