import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LIXEL L2 Pro ドローンマウント取付チュートリアル | Uphash',
  description: 'LIXEL L2 ProをDJI Matrice 300/350 RTKに安全かつ確実に搭載する方法をステップ・バイ・ステップで解説。SkyPort V2対応。',
  keywords: 'LIXEL L2 Pro, ドローン, DJI Matrice, SkyPort, LiDAR, マウント, チュートリアル'
}

export default function DroneMountTutorial() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-brand-black text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-grid-pattern-dark bg-grid opacity-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/support"
              className="inline-flex items-center text-brand-silver-300 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              サポートページに戻る
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              📘 LIXEL L2 Pro ドローンマウント取付チュートリアル
            </h1>
            <p className="text-xl text-brand-silver-300">
              SkyPort対応 | 更新日：2025年6月30日
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {/* YouTube Video Embed */}
            <div className="mb-12">
              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/p3MkH_5M6n0"
                  title="LIXEL L2 Pro ドローンマウント取付チュートリアル"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Purpose */}
            <div className="mb-12 p-6 bg-blue-50 rounded-xl border-2 border-blue-100">
              <h2 className="text-2xl font-bold mb-4 text-brand-black flex items-center">
                <span className="text-3xl mr-3">✅</span>
                チュートリアルの目的
              </h2>
              <p className="text-brand-silver-700 mb-0">
                このチュートリアルでは、LIXEL L2 Pro を DJI Matrice 300 RTK / 350 RTK に安全かつ確実に搭載する方法をステップ・バイ・ステップで解説します。2025年から対応となった DJI SkyPort 接続方式を中心に紹介しています。
              </p>
            </div>

            {/* Equipment Table */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-brand-black flex items-center">
                <span className="text-3xl mr-3">🧰</span>
                使用機材
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-2 border-brand-silver-200">
                  <thead className="bg-brand-silver-100">
                    <tr>
                      <th className="text-left p-4 font-bold text-brand-black border-b-2 border-brand-silver-200">名称</th>
                      <th className="text-left p-4 font-bold text-brand-black border-b-2 border-brand-silver-200">用途</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-brand-silver-200">
                      <td className="p-4">LIXEL L2 Pro</td>
                      <td className="p-4">LiDARスキャナ本体</td>
                    </tr>
                    <tr className="border-b border-brand-silver-200">
                      <td className="p-4">DJI Matrice 300 RTK / 350 RTK</td>
                      <td className="p-4">ドローン本体（SkyPort搭載）</td>
                    </tr>
                    <tr className="border-b border-brand-silver-200">
                      <td className="p-4">SkyPortマウント（V2）</td>
                      <td className="p-4">本体とドローンの接続コネクタ</td>
                    </tr>
                    <tr className="border-b border-brand-silver-200">
                      <td className="p-4">UHS-3対応SDカード</td>
                      <td className="p-4">スキャンデータ保存用</td>
                    </tr>
                    <tr>
                      <td className="p-4">LIXEL Go アプリ</td>
                      <td className="p-4">設定・スキャン制御</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Step 1 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-brand-black flex items-center">
                <span className="text-3xl mr-3">🛠</span>
                手順①：SkyPortマウントの確認
              </h2>
              <p className="text-brand-silver-700 mb-4">
                DJI Matriceシリーズには、機体底部に <strong className="text-brand-black">SkyPort V2 インターフェース</strong> が標準搭載されています。取り付け前に以下を確認してください：
              </p>
              <ul className="list-disc pl-6 space-y-2 text-brand-silver-700">
                <li>SkyPortコネクタ周辺が清潔か</li>
                <li>接点に傷・異物がないか</li>
                <li>取り付け予定位置（中央または前方）に余裕があるか</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-brand-black flex items-center">
                <span className="text-3xl mr-3">🔩</span>
                手順②：L2 Pro の取り付け
              </h2>
              <ol className="list-decimal pl-6 space-y-3 text-brand-silver-700">
                <li>L2 Pro を SkyPort マウントに対して <strong className="text-brand-black">垂直に押し込み、時計回りに軽く回転</strong></li>
                <li>「カチッ」と音がしてロックされれば取り付け完了</li>
                <li>機体の電源をONにすると、L2 Proも自動で起動します</li>
                <li>青色LEDが点灯していれば正常接続状態です</li>
              </ol>
              <div className="mt-4 p-4 bg-amber-50 rounded-lg border-2 border-amber-200">
                <p className="text-amber-800 font-bold mb-0">
                  ⚠️ 工具不要。無理な力をかけずに、バヨネット式で確実に固定してください。
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-brand-black flex items-center">
                <span className="text-3xl mr-3">📱</span>
                手順③：LIXEL Go アプリで接続確認
              </h2>
              <ol className="list-decimal pl-6 space-y-3 text-brand-silver-700">
                <li>スマートフォン／タブレットで「LIXEL Go」を起動</li>
                <li>L2 Proが自動認識されるのを確認（数秒以内）</li>
                <li>「ドローンモード」を選択し、DJI機体と座標系を一致させる</li>
                <li>スキャン準備完了（RTKが有効なら青ランプが点灯）</li>
              </ol>
            </div>

            {/* Flight Settings */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-brand-black flex items-center">
                <span className="text-3xl mr-3">✈️</span>
                飛行とスキャンの推奨設定
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-2 border-brand-silver-200">
                  <thead className="bg-brand-silver-100">
                    <tr>
                      <th className="text-left p-4 font-bold text-brand-black border-b-2 border-brand-silver-200">項目</th>
                      <th className="text-left p-4 font-bold text-brand-black border-b-2 border-brand-silver-200">推奨値</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-brand-silver-200">
                      <td className="p-4">飛行高度</td>
                      <td className="p-4">30〜50m</td>
                    </tr>
                    <tr className="border-b border-brand-silver-200">
                      <td className="p-4">飛行速度</td>
                      <td className="p-4">3〜5 m/s</td>
                    </tr>
                    <tr>
                      <td className="p-4">ルート間隔</td>
                      <td className="p-4">40〜60m</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-brand-silver-700 mt-4">
                <li>スキャン中はアプリ上でリアルタイムでログ状態を確認可能</li>
                <li>スキャン完了後は、「停止」→ L2 Pro → 機体の順に電源OFF</li>
              </ul>
            </div>

            {/* Data Processing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-brand-black flex items-center">
                <span className="text-3xl mr-3">💾</span>
                スキャンデータの取り出しと処理
              </h2>
              <ol className="list-decimal pl-6 space-y-3 text-brand-silver-700">
                <li>SDカードを取り出してPCへコピー</li>
                <li>Lixel Studio（Windowsソフト）を起動</li>
                <li>「プロジェクト処理」→ 「ドローンモード」選択</li>
                <li>自動処理が始まり、数分で点群データを生成可能（.las / .ply など）</li>
              </ol>
            </div>

            {/* SkyPort Info */}
            <div className="mb-12 p-6 bg-blue-50 rounded-xl border-2 border-blue-100">
              <h2 className="text-2xl font-bold mb-4 text-brand-black flex items-center">
                <span className="text-3xl mr-3">💡</span>
                補足：SkyPortって何？
              </h2>
              <p className="text-brand-silver-700 mb-4">
                SkyPortは、DJIが産業用ドローン向けに開発した統合接続規格で、以下の利点があります：
              </p>
              <ul className="list-disc pl-6 space-y-2 text-brand-silver-700">
                <li>電源供給・通信・物理固定が一体型</li>
                <li>工具なしで着脱が可能</li>
                <li>耐水・耐振動・高信頼性</li>
              </ul>
              <p className="text-brand-silver-700 mt-4 mb-0">
                これにより、従来のようなケーブル配線や外部電源は不要となり、現場での運用効率が大幅に向上します。
              </p>
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-brand-black flex items-center">
                <span className="text-3xl mr-3">🧠</span>
                よくある質問（FAQ）
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-2 border-brand-silver-200">
                  <thead className="bg-brand-silver-100">
                    <tr>
                      <th className="text-left p-4 font-bold text-brand-black border-b-2 border-brand-silver-200">質問</th>
                      <th className="text-left p-4 font-bold text-brand-black border-b-2 border-brand-silver-200">回答</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-brand-silver-200">
                      <td className="p-4">SkyPortは必須ですか？</td>
                      <td className="p-4">L2 Proの最新モデルではSkyPort推奨です。従来のType-C接続は非推奨化中。</td>
                    </tr>
                    <tr className="border-b border-brand-silver-200">
                      <td className="p-4">L2 ProのLEDが点灯しません</td>
                      <td className="p-4">SkyPort接点の確認と、機体の電源ONを確認してください。</td>
                    </tr>
                    <tr>
                      <td className="p-4">スキャンデータが保存されない</td>
                      <td className="p-4">SDカードのフォーマット・容量・スピードクラスを確認してください（UHS-3以上）。</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Completion Message */}
            <div className="mt-16 p-6 bg-green-50 rounded-xl border-2 border-green-200">
              <p className="text-green-800 font-bold text-lg mb-0">
                これで、LIXEL L2 Pro のドローン搭載作業は完了です。次は、PPK-SLAMを用いた高精度スキャンのセットアップ手順をご覧ください。
              </p>
            </div>

            {/* Navigation */}
            <div className="mt-12 flex justify-between items-center">
              <Link
                href="/support"
                className="inline-flex items-center text-brand-silver-600 hover:text-brand-black transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                サポートページ
              </Link>
              
              <Link
                href="/manuals/ppk-slam"
                className="inline-flex items-center px-6 py-3 bg-brand-orange-500 text-white font-bold rounded-lg hover:bg-brand-orange-600 transition-colors"
              >
                PPK-SLAMガイドを見る
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}