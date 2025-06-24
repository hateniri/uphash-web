import { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'プロフェッショナルスキャンガイド（上級編）',
  description: 'LCC Studio対応の高度なスキャンガイド。K1・L2・L1・Insta360・ドローンを活用する専門ユーザー向けの完全ドキュメント。',
  path: '/advanced-scan-guide',
  keywords: ['プロフェッショナルスキャン', 'LCC Studio', 'Map Fusion', 'HD Enhancement', 'ドローンスキャン']
})

export default function AdvancedScanGuidePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6">
              <Link href="/scan-guide" className="text-gray-400 hover:text-white inline-flex items-center transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                初心者向けガイドに戻る
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              プロフェッショナルスキャンガイド（上級編）
            </h1>
            <p className="text-xl text-gray-300">
              LCC Studio対応の高度なスキャンガイド。K1・L2・L1・Insta360・ドローンを活用する専門ユーザー向けの完全ドキュメント。
            </p>
            <div className="mt-8 flex items-center text-gray-400">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">v5.0</span>
              <span className="ml-4">LCC スキャニングガイドライン 最新版</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {/* 更新履歴 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">更新履歴</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">v5.0（最新）</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>HD Enhancement（高解像度補完）のガイド追加</li>
                  <li>Aerial-Ground Map Fusion（空中・地上融合）のスキャンガイドを更新。離着陸図の追加とNG条件の明記</li>
                  <li>Map Fusion・Aerial-Ground Map Fusionのスキャン制限は削除（詳細はLCC Studioに記載）</li>
                </ol>
                
                <h3 className="text-lg font-semibold mt-6 mb-4">v4.0</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Map Fusionのルールを明確化（過度なオーバーラップを避ける方法）</li>
                  <li>Aerial-Ground Map Fusionのスキャン手順更新</li>
                  <li>Lixel K1の大規模ループスキャン対応手順を追加</li>
                  <li>ジグザグ歩行図の差し替え</li>
                </ol>
              </div>
            </section>

            {/* 一般ガイドライン */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-200 pb-4">一般ガイドライン</h2>
              
              <h3 className="text-2xl font-semibold mb-4">機材準備（Equipment Preparation）</h3>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <p className="font-semibold">⚠️ レンズの清掃はスキャンごとに必須です。</p>
                <p className="mt-2">汚れたレンズは点群精度とカラー化品質に大きく影響します。</p>
              </div>

              <h3 className="text-2xl font-semibold mb-4 mt-8">動作の基本（Movement Fundamentals）</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>屋内や近距離でのスキャンでは、<strong>素早い回転・揺れ・スイング</strong>などの急な動作を避けてください。</li>
                <li>推奨：ゆっくり曲がる／適切な半径で回転する／特に低照度では丁寧な操作を</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                <p className="font-semibold mb-2">避けるべき動作の例：</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>クイックターン</li>
                  <li>手首の揺れ</li>
                  <li>方向の急変</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p>💡 後ろを歩く同行者は、スキャナーのLiDARやカメラ視野を遮らないよう<strong>距離を保つこと</strong>が推奨されます。</p>
              </div>
            </section>

            {/* デバイス別スキャン設定 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-200 pb-4">デバイス別スキャン設定</h2>

              {/* Lixel K1 */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-lg mr-3">Lixel K1</span>
                  スキャニング
                </h3>

                <h4 className="text-lg font-semibold mb-3">ファームウェアバージョン確認</h4>
                <p className="mb-6">スキャナーのファームウェアが <strong>v1.2.0以上</strong>であることを確認してください。</p>

                <h4 className="text-lg font-semibold mb-3">スキャン角度</h4>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>スキャン中は、スキャナーを<strong>歩行方向に対して15〜20°下向き</strong>に傾けて持ちます。</li>
                  <li>これにより、LiDARが約5m先の地面を効果的にスキャンできるようになります。</li>
                </ul>

                <h4 className="text-lg font-semibold mb-3">レンズの向き</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold mb-2">開けた空間：</p>
                    <p>カメラのレンズは<strong>左右方向</strong>（片方が左・もう片方が右）を向くように構えます。スキャナーの丸いスイッチボタンが自分側を向くのが基本です。</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold mb-2">廊下や狭い空間、出入り口：</p>
                    <p>スキャナーを<strong>横向き</strong>に構え、<strong>片方のレンズが進行方向を向く</strong>ようにします。</p>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mb-3">大規模スキャン（長距離）</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>スキャンルートが長い場合は、<strong>500mごとに軌跡を重ねてループを形成</strong>することで、ドリフト（誤差蓄積）を防ぎます。</li>
                  <li>もしこれが物理的に難しい場合は、<strong>RTKの使用</strong>、もしくは<strong>軌跡交点に相対コントロールポイントを配置</strong>してください。</li>
                </ul>
              </div>

              {/* Lixel L2 Pro */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-lg mr-3">Lixel L2 Pro</span>
                  スキャニング
                </h3>
                <h4 className="text-lg font-semibold mb-3">レンズの向き（K1と共通）</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>開けた空間：</strong> 左右方向を向くように構える（ボタンはオペレーター側）</li>
                  <li><strong>狭い空間や出入り口：</strong> 横向きに構える（進行方向にレンズを向ける）</li>
                </ul>
              </div>

              {/* Insta360 ONE RS */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-lg mr-3">Insta360 ONE RS</span>
                  （＋L1/L2使用時）
                </h3>

                <h4 className="text-lg font-semibold mb-3">カメラマウント</h4>
                <p className="mb-6">Insta360とスキャナーは<strong>しっかりと固定</strong>してください（マウントの緩みは誤差の原因）</p>

                <h4 className="text-lg font-semibold mb-3">録画設定（基本）</h4>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <ul className="space-y-2">
                    <li><strong>モード：</strong> ノーマルビデオモード</li>
                    <li><strong>解像度：</strong> 6K</li>
                    <li><strong>フレームレート：</strong> 24fps</li>
                    <li><strong>露出：</strong> オート</li>
                    <li><strong>カラー：</strong> 標準プロファイル（Standard）</li>
                  </ul>
                </div>

                <h4 className="text-lg font-semibold mb-3">露出設定（上級オプション）</h4>
                <p className="mb-4">暗所や低光量環境では<strong>手動設定（ISO固定＋シャッター自動）</strong>に切り替えることで再構成精度が向上します。</p>
                
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border px-4 py-2 text-left">環境</th>
                        <th className="border px-4 py-2 text-left">推奨ISO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">屋外、明るい</td>
                        <td className="border px-4 py-2">100</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">室内（適度な明るさ、窓あり）</td>
                        <td className="border px-4 py-2">200</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">室内（やや暗い）</td>
                        <td className="border px-4 py-2">400</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">暗い室内、照明が少ない</td>
                        <td className="border px-4 py-2">800</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <p>⚠️ ISOは800までを上限とし、それ以上はノイズ発生に注意。ISO 100で1/100秒前後になるよう観察・調整してください。</p>
                </div>
              </div>
            </section>

            {/* 照明条件とスキャン速度 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-200 pb-4">照明条件とスキャン速度の最適化</h2>

              <h3 className="text-2xl font-semibold mb-4">照明環境の基本</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>スキャン現場は<strong>均一で安定した照明環境</strong>が理想です。</li>
                <li><strong>直射日光は避ける</strong>。屋内では照明ON・カーテン開放。</li>
                <li>屋外では「<strong>曇りの日の正午ごろ</strong>」が最も安定した自然光環境。</li>
              </ul>

              <h4 className="text-lg font-semibold mb-3">光量が不十分なときの対処：</h4>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>スキャン速度を<strong>ゆっくりに（例：0.5m/s以下）</strong></li>
                <li>異なる視点から<strong>重複して撮影する</strong></li>
                <li>室内ではライトを追加し、照度差のある空間は避ける</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h4 className="font-semibold mb-2">ライトの一貫性確保（HD Enhancement/Map Fusion時）</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>各マップセグメントの撮影は<strong>なるべく同じ時間帯</strong>に終えること（2時間以内推奨）</li>
                  <li>朝・夕・晴天と曇天をまたぐスキャンは避ける</li>
                </ul>
              </div>
            </section>

            {/* スキャンルートの計画 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-200 pb-4">スキャンルートの計画（Path Planning）</h2>

              <h3 className="text-2xl font-semibold mb-4">ループの重要性</h3>
              <p className="mb-6"><strong>ループ（閉じたルート）</strong>を作ることで、マップ精度と整合性が大幅に向上します。</p>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <h4 className="font-semibold mb-2">有効なループの条件：</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>同じ場所に戻る際、視野方向の差が±40°以内</strong></li>
                  <li>開始点と終了点が<strong>視線角的に一致</strong>していること</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mb-4 mt-8">ループの種類</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-3 text-green-600">✅ 終点ループ（End Loop）</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>スキャンの開始地点に<strong>戻って終わる</strong>ルート設計</li>
                    <li>小〜中規模の現場では有効</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-3 text-green-600">✅ 中間ループ（Midway Loop）</h4>
                  <p className="mb-2">以下の条件下では<strong>途中に1回以上のループ形成</strong>が推奨されます：</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>ループ条件を満たしにくい構造</li>
                    <li>大規模な空間</li>
                    <li>遮蔽物が多い、狭い構造が連続する現場</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-4">狭い空間でのスキャン戦略</h3>
              <p>狭い室内・通路では、スキャンルートに<strong>小さなループを4か所以上</strong>含めると精度が向上します。</p>
            </section>

            {/* Map Fusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-200 pb-4">マップ融合（Map Fusion）</h2>

              <div className="bg-gray-100 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">技術仕様</h3>
                <ul className="space-y-2">
                  <li><strong>ソフトウェア要件：</strong> LCC Studio v1.6.0以降</li>
                  <li><strong>データ制限：</strong> 最大10スキャン／合計200分</li>
                  <li><strong>機器の互換性：</strong> 同一機種間でのみ統合可能（例：K1同士、L2同士）</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mb-4">重複条件</h3>
              <p className="mb-4">連続スキャン間には<strong>15m程度の重複エリア</strong>を必ず含めること</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h4 className="font-semibold mb-2 text-red-600">❌ NG例：</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>10m未満の重複</li>
                    <li>一方のスキャンエリアが他方と<strong>完全に重複してしまう</strong></li>
                  </ul>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-semibold mb-2 text-green-600">✅ OKな重複配置：</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>テクスチャが豊富な場所を選ぶ</li>
                    <li>暗所、階段、細い通路、ガラスなどの反射面は避ける</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Aerial-Ground Map Fusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-200 pb-4">空中-地上マップ統合（Aerial-Ground Map Fusion）</h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <h3 className="font-semibold mb-2">必要条件</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>ドローン・ハンドヘルドともに<strong>RTKが有効</strong></li>
                  <li><strong>WGS84</strong>座標系で一致させること</li>
                  <li>RTK信号は全スキャン中安定していること</li>
                  <li>ドローンが<strong>多焦点カメラを使う場合は焦点距離を固定</strong></li>
                  <li><strong>空撮データは離着陸エリアを含む必要あり</strong></li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold mb-4">空中スキャン（ドローン）要領</h3>
              
              <h4 className="text-lg font-semibold mb-3">撮影方式</h4>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>斜め撮影（Oblique）方式</strong></li>
                <li><strong>格子状（Tic-tac-toe）飛行ルート</strong>が理想</li>
                <li><strong>オーバーラップ率 80%以上</strong></li>
              </ul>

              <h4 className="text-lg font-semibold mb-3">高度設定</h4>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>原則：<strong>地上から最も低い安全高度（50m以内）</strong></li>
                <li>大規模／複雑な構造では<strong>異なる高度（2段階まで）</strong>で複数回撮影</li>
                <li>隣接する高度差は<strong>2倍以内</strong></li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">離着陸セクションの撮影要件</h3>
              <div className="bg-yellow-50 rounded-lg p-6">
                <p className="mb-4">ケース1件につき<strong>3〜4回以上の離着陸画像</strong>を含める（大規模ケース：50〜100mごとに1回）</p>
                
                <h4 className="font-semibold mb-3">各離着陸シーケンスの内容：</h4>
                <ol className="list-decimal list-inside space-y-3">
                  <li>
                    <strong>地上ショット：</strong>
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>手持ちスキャン軌跡と<strong>視野重複</strong>がある位置</li>
                      <li>ドローンは少し離れてもよいが、<strong>距離1.5倍以内</strong></li>
                    </ul>
                  </li>
                  <li>
                    <strong>上空ショット：</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>空撮FOVと位置が重複している必要あり</li>
                    </ul>
                  </li>
                  <li>
                    <strong>スムーズな視点遷移：</strong>
                    <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                      <li>カメラ角・位置がなめらかに繋がる</li>
                      <li>連続画像の<strong>重複率80%以上</strong></li>
                    </ul>
                  </li>
                </ol>
              </div>
            </section>

            {/* HD Enhancement */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-200 pb-4">HD Enhancement（高精細画像補完）</h2>

              <div className="bg-gray-100 rounded-lg p-6 mb-6">
                <p className="mb-4">小規模エリアの再構成精度を上げるために、<strong>高解像度画像列を追加</strong>できます。</p>
                <p>LCC Studio v1.8.0では、<strong>最大20〜500枚のJPG/PNG/JPEG画像</strong>に対応</p>
              </div>

              <h3 className="text-2xl font-semibold mb-4">画像要件</h3>
              
              <h4 className="text-lg font-semibold mb-3">一貫性のあるカメラ情報：</h4>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li><strong>同一カメラ・同一解像度・同じ焦点距離</strong></li>
                <li>NG：レンズ混合、焦点距離変更、画像のクロップ</li>
              </ul>

              <h4 className="text-lg font-semibold mb-3">最適FOV（視野角）：</h4>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>水平方向：約<strong>100°前後</strong></li>
                <li>スマホなら<strong>0.5x（広角）</strong>、一眼なら<strong>16mmフルサイズ</strong></li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4">避けるべき撮影対象</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border px-4 py-2 text-left">種類</th>
                      <th className="border px-4 py-2 text-left">例</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">単色エリア</td>
                      <td className="border px-4 py-2">白壁、すりガラス、空白の机など</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">パターン反復</td>
                      <td className="border px-4 py-2">芝生、レンガ、カーテン柄など</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">反射面</td>
                      <td className="border px-4 py-2">鏡、水面、ツヤのある壁</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">動的環境</td>
                      <td className="border px-4 py-2">木の枝、LEDパネルなど</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 最終補足 */}
            <section className="mb-12">
              <div className="bg-gray-100 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">最終補足</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>このガイドは LCC Studio v1.8.0 以降 を前提としています。</li>
                  <li>機器のファームウェア・アプリのバージョンは常に最新に保つよう推奨されます。</li>
                </ul>
              </div>
            </section>

            {/* CTAs */}
            <section className="mt-16 pt-8 border-t-2 border-gray-200">
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/scan-guide" className="block bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition-colors">
                  <h3 className="text-xl font-semibold mb-2">初心者向けガイド</h3>
                  <p className="text-gray-600">基本的なスキャン方法から学びたい方はこちら</p>
                </Link>
                
                <Link href="/tutorials" className="block bg-blue-50 rounded-lg p-6 hover:bg-blue-100 transition-colors">
                  <h3 className="text-xl font-semibold mb-2">チュートリアル動画</h3>
                  <p className="text-gray-600">実際の操作方法を動画で確認</p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  )
}