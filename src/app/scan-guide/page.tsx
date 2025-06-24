import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'
import { getImagePath } from '@/lib/utils'

export const metadata: Metadata = generatePageMetadata({
  title: 'Lixel スキャニングガイドライン - 高精度3Dスキャンの実践ガイド',
  description: 'Lixelシリーズ製品を用いたスキャニング業務における実践的なガイドライン。初期化、歩き方、カラー化、RTK、精度検証、マップ統合までを網羅。',
  path: '/scan-guide',
  keywords: ['Lixel', 'スキャニング', 'ガイドライン', '3Dスキャン', 'RTK', 'コントロールポイント', 'マップ統合', '精度検証']
})

export default function ScanGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-12 md:py-16 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lixel スキャニングガイドライン
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mb-6">
            Lixelシリーズ製品を用いたスキャニング業務における実践的なガイドライン。初期化、歩き方、カラー化、RTK、精度検証、マップ統合までを網羅。
          </p>
          <a 
            href="/advanced-scan-guide" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            上級者向けガイドはこちら
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
            
            {/* Section 1 */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-6">
              1. スキャン全般の注意事項
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>身体を急に回したり、立ち止まったりしないでください。スキャナーに強い加速度や揺れがかかると、点群の精度が低下します。</li>
              <li>スキャナーは常に<strong className="text-gray-900">垂直</strong>を保ち、前後左右に傾けないようにしてください。特にRTKモジュール搭載時は信号受信に影響します。</li>
              <li>スキャン中は、スキャナーの<strong className="text-gray-900">1m以内に物体を近づけず</strong>、LiDARの視野（FOV）の<strong className="text-gray-900">50%以上を遮らない</strong>ようにします。</li>
              <li>屋外で人や車などの動体が多い場合、可能であればLiDARを反対側に向けて避けましょう。</li>
              <li>室内で複数の部屋や階をスキャンする場合は、<strong className="text-gray-900">すべてのドアを開けておく</strong>こと。ドア枠の下では<strong className="text-gray-900">横向きでゆっくり静止</strong>し、両側の構造をスキャンできるようにします。</li>
            </ul>

            <hr className="my-12 border-gray-200" />

            {/* Section 2 */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-6">
              2. スキャナー初期化の流れ
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>初期化時は<strong className="text-gray-900">三脚ではなくスチール製のコントロールポイントベース</strong>の使用を推奨します。</li>
              <li>スキャナーを<strong className="text-gray-900">平らな地面</strong>に置き、<strong className="text-gray-900">手で安定保持</strong>しながら静止状態で起動してください。</li>
              <li>点群がスマホに表示されてから<strong className="text-gray-900">15秒以上待機</strong>してから持ち上げましょう（LixelGO v1.1.1以降ではアプリの指示に従ってください）。</li>
              <li>初期化中は<strong className="text-gray-900">建物や木などの特徴のある対象物が視野に入る位置</strong>が理想です。空き地、反射の強いガラス、動体の多い環境は避けてください。</li>
            </ul>

            <hr className="my-12 border-gray-200" />

            {/* Section 3 */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-6">
              3. スキャンルートの設計：構造 → 詳細
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-6 mb-4">
              スキャン範囲の把握
            </h3>
            <p className="text-gray-700 mb-6">
              まずはスキャン対象エリア（建物や敷地）を明確にします。<br />
              以下の図は「Route not recommended（非推奨ルート）」と表示されていますが、実際には<strong className="text-gray-900">単にスキャンエリアを四角く囲っただけの図であり、歩き方は示されていません。</strong>
            </p>
            <figure className="my-8">
              <img 
                src={getImagePath('/images/scan-area-outline.jpg')} 
                alt="スキャン対象エリア（ルートなし）"
                className="w-full rounded-lg shadow-lg"
              />
              <figcaption className="text-center text-sm text-gray-600 mt-4">
                スキャン対象エリア（ルートなし）
              </figcaption>
            </figure>

            <hr className="my-8 border-gray-100" />

            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-8 mb-4">
              ❌ 推奨されないスキャン方法
            </h3>
            <p className="text-gray-700 mb-6">
              次の図は、<strong className="text-gray-900">建物の長辺を一直線に移動するのみ</strong>のルートを示しています。<br />
              このようなルート設計ではIMU誤差が蓄積し、<strong className="text-gray-900">点群に層状のズレや歪み</strong>が発生する可能性があります。
            </p>
            <figure className="my-8">
              <img 
                src={getImagePath('/images/scan-route-bad.jpg')} 
                alt="一直線のスキャンルート（非推奨）"
                className="w-full rounded-lg shadow-lg"
              />
              <figcaption className="text-center text-sm text-gray-600 mt-4">
                一直線のスキャンルート（非推奨）
              </figcaption>
            </figure>

            <hr className="my-8 border-gray-100" />

            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-8 mb-4">
              ✅ 推奨されるスキャン方法
            </h3>
            <p className="text-gray-700 mb-6">
              以下の図では、<strong className="text-gray-900">全体構造を先に大きく回って把握し、細部を小さなループで補完する</strong>推奨ルートが描かれています。
            </p>
            <figure className="my-8">
              <img 
                src={getImagePath('/images/scan-route-good.jpg')} 
                alt="ループを用いたスキャンルート（推奨）"
                className="w-full rounded-lg shadow-lg"
              />
              <figcaption className="text-center text-sm text-gray-600 mt-4">
                ループを用いたスキャンルート（推奨）
              </figcaption>
            </figure>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">実践ポイント</h4>
              <ul className="space-y-2 text-gray-700">
                <li>初期化は<strong className="text-gray-900">構造全体が見渡せる場所（図の緑三角）</strong>で行う</li>
                <li>小ループを繰り返すことで誤差蓄積を最小限に抑え、スムーズな点群合成が可能に</li>
                <li>一部を何度か通ることを恐れず、<strong className="text-gray-900">ループで閉じる意識</strong>が大切</li>
              </ul>
            </div>

            <hr className="my-12 border-gray-200" />

            {/* Section 4 */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-6">
              4. コントロールポイントの追加（GCP）
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>スキャナーを地面に置くとき・拾うときは<strong className="text-gray-900">衝撃を与えず静かに</strong>。</li>
              <li>LixelGOで「コントロールポイント追加成功」が表示されたら、<strong className="text-gray-900">1〜2周周囲を歩く</strong>か、<strong className="text-gray-900">その場で数秒静止</strong>してデータ密度を確保。</li>
              <li>ポイント記録後は<strong className="text-gray-900">15秒以上待ってからプロジェクト終了</strong>すること。</li>
              <li>GCP間の推奨距離：
                <ul className="ml-6 mt-2 space-y-1">
                  <li>K1 / L1：<strong className="text-gray-900">50m以内</strong></li>
                  <li>L2 / L2 Pro：<strong className="text-gray-900">100m以内</strong></li>
                  <li><strong className="text-gray-900">直線上に並べないこと（均等配置が理想）</strong></li>
                </ul>
              </li>
              <li>廊下などの狭所では<strong className="text-gray-900">スキャナーを横向きに保持</strong>し、FOV内に既知＋未知の領域を同時に収めることで点群のつながりが向上。</li>
            </ul>

            <hr className="my-12 border-gray-200" />

            {/* Section 5 */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-6">
              5. RTKを用いたスキャン
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>RTKアンテナは<strong className="text-gray-900">建物や手で遮られない</strong>ようにし、<strong className="text-gray-900">傾きは20°以内</strong>に制限。</li>
              <li>絶対座標変換（最低限の精度）に必要な条件：
                <ul className="ml-6 mt-2 space-y-1">
                  <li>RTKステータスが<strong className="text-gray-900">Fixed</strong></li>
                  <li>移動距離が<strong className="text-gray-900">10m以上</strong></li>
                  <li>使用中の衛星が<strong className="text-gray-900">10基以上</strong></li>
                </ul>
              </li>
              <li>精度検証を行う場合：
                <ul className="ml-6 mt-2 space-y-1">
                  <li>スキャン経路は<strong className="text-gray-900">100m以上で、直線でないこと</strong></li>
                  <li>RTKステータスは<strong className="text-gray-900">常にFixed状態を維持</strong></li>
                </ul>
              </li>
              <li>未固定区間の制限：
                <ul className="ml-6 mt-2 space-y-1">
                  <li>K1：<strong className="text-gray-900">50m未満</strong></li>
                  <li>L2 / L2 Pro：<strong className="text-gray-900">100m未満</strong></li>
                </ul>
              </li>
            </ul>

            <hr className="my-12 border-gray-200" />

            {/* Section 6 */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-6">
              6. カラー化（Colorization）の注意点
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>Insta360などの外部カメラを使用する場合：
                <ul className="ml-6 mt-2 space-y-1">
                  <li><strong className="text-gray-900">6K・1秒間隔のタイムラプスモード</strong></li>
                  <li>スキャナーとカメラの録画開始タイミングは<strong className="text-gray-900">5秒以内</strong></li>
                </ul>
              </li>
              <li>スキャン時間は<strong className="text-gray-900">最低2分以上</strong></li>
              <li>スキャナーは<strong className="text-gray-900">常に移動し続ける</strong>必要あり（静止不可）</li>
              <li>暗い環境では<strong className="text-gray-900">照明を追加して均一に照らす</strong></li>
              <li><strong className="text-gray-900">過剰な明るさ・逆光・露出オーバーは避ける</strong></li>
              <li>カメラ（パノラマ・内蔵）の<strong className="text-gray-900">視界を遮らないように持ち方に注意</strong></li>
            </ul>

            <hr className="my-12 border-gray-200" />

            {/* Section 7 */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-6">
              7. 精度検証（Accuracy Verification）
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>GCP方式：
                <ul className="ml-6 mt-2">
                  <li>反射マーカーを貼ったターゲットの<strong className="text-gray-900">周囲を歩いてスキャンしてからポイントを記録</strong></li>
                </ul>
              </li>
              <li>RTK方式：
                <ul className="ml-6 mt-2">
                  <li>マーカーの周囲を<strong className="text-gray-900">歩くだけでスキャン可能</strong>、地面に置く必要なし</li>
                </ul>
              </li>
            </ul>

            <hr className="my-12 border-gray-200" />

            {/* Section 8 */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-6">
              8. マップ統合（Map Fusion）
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-6 mb-4">
              基本条件
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>重複スキャンエリアは<strong className="text-gray-900">15m以上</strong></li>
              <li>重複箇所は<strong className="text-gray-900">空き地・階段など特徴の少ない場所を避ける</strong></li>
              <li>各プロジェクトは<strong className="text-gray-900">20分以内</strong></li>
              <li>統合可能な件数：<strong className="text-gray-900">最大8プロジェクトまで</strong></li>
              <li><strong className="text-gray-900">異なる機種間では統合不可</strong>（例：K1とL2 ProはNG）</li>
            </ul>

            <hr className="my-8 border-gray-100" />

            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-8 mb-4">
              方法①：コントロールポイントによる統合
            </h3>
            <ol className="space-y-2 text-gray-700">
              <li>1. プロジェクト1で統合地点に到達したら地面に置く</li>
              <li>2. 「a」などのコントロールポイントを記録</li>
              <li>3. 15秒待ってからプロジェクト1を終了</li>
              <li>4. 地面に置いたままプロジェクト2を開始</li>
              <li>5. 同じCP名「a」を記録</li>
              <li>6. プロジェクト1の一部を<strong className="text-gray-900">15m以上再スキャン</strong>してから新領域へ移動</li>
            </ol>

            <hr className="my-8 border-gray-100" />

            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-8 mb-4">
              方法②：RTKによる統合
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li>全プロジェクトでRTKステータスが<strong className="text-gray-900">Fixed状態を維持</strong>すること</li>
              <li>手順は上記とほぼ同じ：
                <ul className="ml-6 mt-2">
                  <li>終点で終了 → 地面のまま次を開始 → 15m以上オーバーラップ → 新規エリアへ</li>
                </ul>
              </li>
            </ul>

            <hr className="my-12 border-gray-200" />

            <div className="bg-gray-50 border rounded-lg p-8 mt-12">
              <p className="text-gray-700 leading-relaxed">
                以上が、Lixel製品による高精度なスキャンを実現するための総合ガイドラインです。<br />
                詳細な操作はLixelGOまたはLixelStudioのマニュアルもご参照ください。
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}