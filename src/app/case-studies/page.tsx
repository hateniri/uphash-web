import { Metadata } from 'next'
import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

export const metadata: Metadata = {
  title: '導入事例 | 株式会社UPHASH',
  description: 'Lixelシリーズの実際の導入事例をご紹介。測量・地理空間、建築・都市計画、映像・エンターテインメント、公共安全、エネルギー・鉱業など様々な分野での活用例。',
}

const caseStudies = [
  // 測量・地理空間（Surveying & Geospatial）
  {
    id: 'terrain-survey',
    title: '山岳地帯の大規模地形測量',
    category: '測量・地理空間',
    subcategory: '地形測量',
    client: '測量会社 A社',
    challenge: '急峻な山岳地帯50km²の詳細地形データを短期間で取得する必要があった。',
    solution: 'Lixel L2 Pro 32/300をドローンに搭載し、自動飛行により効率的に測量。RTKによる高精度位置補正を実施。',
    results: [
      '測量期間を3ヶ月から2週間に短縮',
      '1cm精度の地形データを取得',
      '危険地域での作業員リスクをゼロに',
      'コストを70%削減'
    ],
    products: ['Lixel L2 Pro 32/300', 'RTKキット', 'ドローン搭載キット'],
    image: '/images/case-terrain.jpg'
  },
  {
    id: 'tunnel-infrastructure',
    title: '地下鉄トンネルの3D測量と監視',
    category: '測量・地理空間',
    subcategory: 'トンネル・地下インフラ測量',
    client: '都市交通局',
    challenge: '営業時間外の限られた時間内で、10kmのトンネル内部を高精度で測量する必要があった。',
    solution: 'Lixel L2 Pro 32/120を特殊台車に搭載し、高速移動しながら連続スキャン。',
    results: [
      '測量時間を1/10に短縮',
      '変形箇所を0.5mm精度で検出',
      '予防保全により補修コストを60%削減',
      '夜間作業を最小限に'
    ],
    products: ['Lixel L2 Pro 32/120', 'Lixel Studio', '移動体搭載キット'],
    image: '/images/case-tunnel.jpg'
  },
  {
    id: 'stockpile-volume',
    title: '採石場の土量自動計算システム',
    category: '測量・地理空間',
    subcategory: '土量計算（ストックパイル）',
    client: '建設資材会社 B社',
    challenge: '20ヘクタールの採石場で、日々変化する在庫量を正確かつ迅速に把握したい。',
    solution: 'Lixel L2 Pro 32/300で定期的に全体をスキャンし、AIによる自動体積計算システムを構築。',
    results: [
      '在庫把握時間を95%短縮',
      '計測精度99.5%を達成',
      '月次棚卸し作業を自動化',
      '年間2,000万円のコスト削減'
    ],
    products: ['Lixel L2 Pro 32/300', 'Lixel Studio', '体積計算プラグイン'],
    image: '/images/case-stockpile.jpg'
  },
  {
    id: 'urban-underground',
    title: '都市地下空間の統合管理システム',
    category: '測量・地理空間',
    subcategory: '都市地下空間の可視化',
    client: '都市開発公社',
    challenge: '複雑に入り組んだ地下インフラ（電気、ガス、水道、通信）を統合的に管理したい。',
    solution: 'Lixel K1とL2 Proを組み合わせ、地下空間全体をデジタルツイン化。',
    results: [
      '工事計画の干渉チェックを自動化',
      '事故リスクを80%削減',
      '維持管理効率が3倍向上',
      'AR表示により現場作業を支援'
    ],
    products: ['Lixel L2 Pro', 'Lixel K1', 'Lixel Cyber Color'],
    image: '/images/case-underground.jpg'
  },
  {
    id: 'forest-management',
    title: '森林資源の3D在庫管理',
    category: '測量・地理空間',
    subcategory: '森林管理',
    client: '林業組合',
    challenge: '1,000ヘクタールの森林の樹木量と成長状況を効率的に把握したい。',
    solution: 'ドローン搭載のLixel L2 Proで定期的に森林をスキャンし、AIで樹木を個体識別。',
    results: [
      '森林調査時間を90%削減',
      '個々の樹木の成長を追跡可能に',
      '最適な伐採計画を自動生成',
      'CO2吸収量を正確に算出'
    ],
    products: ['Lixel L2 Pro 32/300', 'AI解析ソフトウェア'],
    image: '/images/case-forest.jpg'
  },

  // 建築・都市計画（AEC & Urban Planning）
  {
    id: 'facade-measurement',
    title: '超高層ビルのファサード測定',
    category: '建築・都市計画',
    subcategory: 'ファサード（外壁）測定',
    client: '建築設計事務所 C社',
    challenge: '高さ200mの超高層ビルの外壁を詳細に測定し、改修計画を立案したい。',
    solution: 'Lixel L2 Pro 32/300をドローンに搭載し、建物全体を自動スキャン。',
    results: [
      '測定時間を2週間から2日に短縮',
      'ひび割れを1mm精度で検出',
      '足場不要で安全性向上',
      '改修費用を30%削減'
    ],
    products: ['Lixel L2 Pro 32/300', 'ドローン搭載キット', 'Lixel Studio'],
    image: '/images/case-facade.jpg'
  },
  {
    id: 'real-estate-survey',
    title: '大規模商業施設の現況調査',
    category: '建築・都市計画',
    subcategory: '不動産調査',
    client: '不動産投資会社 D社',
    challenge: '延床面積10万㎡の商業施設を短期間で正確に調査し、投資判断材料としたい。',
    solution: 'Lixel K1で全フロアを高速スキャンし、正確な図面と3Dモデルを作成。',
    results: [
      '調査期間を1ヶ月から1週間に短縮',
      '図面の正確性が99%以上',
      'リモートでの物件確認が可能に',
      'デューデリジェンスコストを60%削減'
    ],
    products: ['Lixel K1', 'Lixel Cyber Color'],
    image: '/images/case-realestate-survey.jpg'
  },
  {
    id: 'reverse-bim',
    title: '歴史的建造物のBIM化プロジェクト',
    category: '建築・都市計画',
    subcategory: 'BIM逆モデリング（リバースBIM）',
    client: '文化財管理団体',
    challenge: '築100年の歴史的建造物の改修にあたり、正確なBIMモデルが必要だった。',
    solution: 'Lixel K1とL2 Proを使い分け、建物全体から細部装飾まで詳細にスキャン。',
    results: [
      '0.5mm精度のBIMモデルを構築',
      '隠れた構造問題を事前に発見',
      '改修設計期間を50%短縮',
      'VRで一般公開も実現'
    ],
    products: ['Lixel K1', 'Lixel L2 Pro', 'Revitプラグイン'],
    image: '/images/case-reverse-bim.jpg'
  },
  {
    id: 'construction-progress-bim',
    title: 'BIMを活用した建設進捗管理',
    category: '建築・都市計画',
    subcategory: 'BIMによる建設進捗管理',
    client: '大手ゼネコン E社',
    challenge: '複雑な建設プロジェクトの進捗を正確に把握し、BIMモデルと照合したい。',
    solution: 'Lixel L2 Proで週次スキャンを実施し、BIMモデルと自動比較するシステムを構築。',
    results: [
      '進捗確認時間を80%削減',
      '施工誤差を早期発見',
      '手戻り工事を70%削減',
      'プロジェクト遅延リスクを最小化'
    ],
    products: ['Lixel L2 Pro 32/120', 'BIM連携ソフトウェア'],
    image: '/images/case-bim-progress.jpg'
  },

  // 映像・エンターテインメント（Film & Entertainment）
  {
    id: 'location-scouting',
    title: '映画ロケ地の事前ビジュアライゼーション',
    category: '映像・エンターテインメント',
    subcategory: 'ロケハン・事前ビジュアライゼーション',
    client: '映画制作会社 F社',
    challenge: '海外ロケ地を事前に詳細に把握し、撮影計画を綿密に立てたい。',
    solution: 'Lixel K1で候補地を高速スキャンし、Cyber Colorでフォトリアリスティックな3D空間を再現。',
    results: [
      'ロケハン期間を1週間から2日に短縮',
      'リモートでカメラアングル検討が可能に',
      '撮影日数を30%削減',
      'ロケコストを40%削減'
    ],
    products: ['Lixel K1', 'Lixel Cyber Color'],
    image: '/images/case-location.jpg'
  },
  {
    id: 'ar-vr-production',
    title: 'VRテーマパークのコンテンツ制作',
    category: '映像・エンターテインメント',
    subcategory: 'AR / VR 制作',
    client: 'エンターテインメント企業 G社',
    challenge: '実在の観光地をVR空間で忠実に再現し、没入感の高い体験を提供したい。',
    solution: 'Lixel L2 ProとK1で観光地全体をスキャンし、超高精細な3D空間を構築。',
    results: [
      '制作期間を6ヶ月から2ヶ月に短縮',
      '来場者満足度95%を達成',
      'リピート率が3倍に向上',
      '年間売上が50%増加'
    ],
    products: ['Lixel L2 Pro', 'Lixel K1', 'Lixel Cyber Color', 'Unity統合キット'],
    image: '/images/case-vr.jpg'
  },

  // 公共安全（Public Safety）
  {
    id: 'forensic-analysis',
    title: '事故現場の3D証拠保全システム',
    category: '公共安全',
    subcategory: '犯罪捜査・フォレンジック解析',
    client: '警察機関',
    challenge: '交通事故現場を迅速かつ正確に記録し、後の検証に活用したい。',
    solution: 'Lixel K1で事故現場を詳細にスキャンし、3D証拠として保全。',
    results: [
      '現場保全時間を2時間から30分に短縮',
      '証拠の正確性が飛躍的に向上',
      '道路封鎖時間を75%削減',
      '裁判での証拠能力が向上'
    ],
    products: ['Lixel K1', 'フォレンジック解析ソフト'],
    image: '/images/case-forensic.jpg'
  },

  // エネルギー・鉱業（Energy & Mining）
  {
    id: 'digital-twin-facility',
    title: '石油プラントのデジタルツイン構築',
    category: 'エネルギー・鉱業',
    subcategory: '施設のデジタルツイン化',
    client: 'エネルギー企業 H社',
    challenge: '老朽化した石油プラントの保守管理を効率化し、事故リスクを低減したい。',
    solution: 'Lixel L2 Proで施設全体をスキャンし、配管まで含めた詳細なデジタルツインを構築。',
    results: [
      '点検時間を60%削減',
      '予知保全により故障を80%削減',
      'メンテナンスコストを年間1億円削減',
      '事故リスクを90%低減'
    ],
    products: ['Lixel L2 Pro 32/300', 'デジタルツインプラットフォーム'],
    image: '/images/case-digital-twin.jpg'
  },
  {
    id: 'drone-inspection',
    title: '風力発電設備の自動点検システム',
    category: 'エネルギー・鉱業',
    subcategory: 'ドローン／ロボットによる設備点検',
    client: '風力発電事業者 I社',
    challenge: '高さ100mの風力タービン50基を安全かつ効率的に点検したい。',
    solution: 'Lixel L2 Pro搭載ドローンで自動巡回点検を実施し、AIで異常を検出。',
    results: [
      '点検時間を1基あたり1日から1時間に短縮',
      '高所作業をゼロに',
      '微細な損傷も早期発見',
      '稼働率が5%向上'
    ],
    products: ['Lixel L2 Pro 32/120', 'ドローン自動飛行システム', 'AI異常検出'],
    image: '/images/case-wind-inspection.jpg'
  },
  {
    id: 'smart-mining',
    title: 'スマート鉱山の生産最適化',
    category: 'エネルギー・鉱業',
    subcategory: 'スマート鉱山管理',
    client: '鉱山会社 J社',
    challenge: '露天掘り鉱山の採掘計画を最適化し、生産性を向上させたい。',
    solution: 'Lixel L2 Proで日次測量を実施し、AIで最適な採掘ルートを計算。',
    results: [
      '生産性が20%向上',
      '燃料消費を15%削減',
      '採掘計画の精度が向上',
      '年間利益が30%増加'
    ],
    products: ['Lixel L2 Pro 32/300', 'AI最適化システム'],
    image: '/images/case-smart-mining.jpg'
  },
  {
    id: 'water-resource',
    title: 'ダム・貯水池の水位管理システム',
    category: 'エネルギー・鉱業',
    subcategory: '水資源管理',
    client: '水資源管理公社',
    challenge: '複数のダムと貯水池の水位を正確に把握し、効率的に管理したい。',
    solution: 'Lixel L2 Proで定期的に測量し、水量変化を高精度でモニタリング。',
    results: [
      '水位測定精度が1cm以内に',
      '測量時間を90%削減',
      '洪水予測精度が向上',
      '水資源の最適配分を実現'
    ],
    products: ['Lixel L2 Pro 32/300', '水資源管理ソフトウェア'],
    image: '/images/case-water.jpg'
  }
]

const categories = [
  { 
    name: '測量・地理空間',
    value: '測量・地理空間',
    subcategories: ['地形測量', 'トンネル・地下インフラ測量', '土量計算', '都市地下空間の可視化', '森林管理']
  },
  { 
    name: '建築・都市計画',
    value: '建築・都市計画',
    subcategories: ['ファサード測定', '不動産調査', 'BIM逆モデリング', 'BIM進捗管理']
  },
  { 
    name: '映像・エンターテインメント',
    value: '映像・エンターテインメント',
    subcategories: ['ロケハン・事前ビジュアライゼーション', 'AR/VR制作']
  },
  { 
    name: '公共安全',
    value: '公共安全',
    subcategories: ['犯罪捜査・フォレンジック解析']
  },
  { 
    name: 'エネルギー・鉱業',
    value: 'エネルギー・鉱業',
    subcategories: ['デジタルツイン化', 'ドローン/ロボット点検', 'スマート鉱山管理', '水資源管理']
  }
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              導入事例
            </h1>
            <p className="text-xl text-gray-300">
              様々な業界でLixelシリーズがどのように活用され、
              ビジネスの課題を解決しているかをご紹介します
            </p>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((category) => (
              <div key={category.value} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3">{category.name}</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {category.subcategories.map((sub) => (
                    <li key={sub} className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies by Category */}
      {categories.map((category) => (
        <section key={category.value} className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">{category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies
                .filter(study => study.category === category.value)
                .map((study) => (
                  <article
                    key={study.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <div className="text-center p-8">
                        <p className="text-sm font-medium text-gray-500 mb-2">{study.subcategory}</p>
                        <p className="text-lg font-semibold text-gray-700">{study.client}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{study.challenge}</p>
                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">主な成果：</p>
                        <ul className="text-sm text-gray-600">
                          {study.results.slice(0, 2).map((result, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-green-500 mr-1">✓</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.products.slice(0, 2).map((product, index) => (
                          <span
                            key={index}
                            className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium"
                      >
                        詳細を問い合わせる
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Results Summary */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">導入効果の実績</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">80%</div>
              <p className="text-gray-600">作業時間削減</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">60%</div>
              <p className="text-gray-600">コスト削減</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
              <p className="text-gray-600">精度向上</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">35%</div>
              <p className="text-gray-600">生産性向上</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            あなたのビジネスでも同じ成果を
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Lixelシリーズがどのようにお客様の課題を解決できるか、
            詳しくご説明いたします
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              導入相談を申し込む
            </Link>
            <Link
              href="/downloads"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              資料をダウンロード
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}