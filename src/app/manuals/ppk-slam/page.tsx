import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LIXEL L2 Pro PPK-SLAMデータ取得・処理ガイド | Uphash',
  description: 'LIXEL L2 Proを用いたPPK-SLAMの運用方法を解説。通信圏外やRTK不安定環境でも数cm精度の点群生成が可能。',
  keywords: 'LIXEL L2 Pro, PPK, SLAM, GNSS, 点群処理, Lixel Studio, 高精度測位'
}

export default function PPKSLAMGuide() {
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
              📘 LIXEL L2 Pro における PPK-SLAM データ取得および処理ガイド
            </h1>
            <p className="text-xl text-brand-silver-300">
              更新日：2025年6月30日
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
                  src="https://www.youtube.com/embed/GrKgImWNysE"
                  title="LIXEL L2 Pro PPK-SLAMデータ取得・処理ガイド"
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
                ガイドの目的
              </h2>
              <p className="text-brand-silver-700 mb-0">
                このガイドでは、LIXEL L2 Pro を用いた PPK-SLAM の運用方法を解説します。PPK（事後補正）方式を用いることで、通信圏外やRTKが不安定な現場でも、数cm精度の点群生成が可能です。
              </p>
            </div>

            {/* Equipment Table */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-brand-black flex items-center">
                <span className="text-3xl mr-3">📦</span>
                使用機材一覧
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-2 border-brand-silver-200">
                  <thead className="bg-brand-silver-100">
                    <tr>
                      <th className="text-left p-4 font-bold text-brand-black border-b-2 border-brand-silver-200">機材</th>
                      <th className="text-left p-4 font-bold text-brand-black border-b-2 border-brand-silver-200">用途</th>
                      <th className="text-left p-4 font-bold text-brand-black border-b-2 border-brand-silver-200">備考・例</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-brand-silver-200">
                      <td className="p-4">LIXEL L2 Pro</td>
                      <td className="p-4">SLAM記録装置</td>
                      <td className="p-4">PPK対応ファーム必要</td>
                    </tr>
                    <tr className="border-b border-brand-silver-200">
                      <td className="p-4">GNSSベースステーション</td>
                      <td className="p-4">位置ログ記録</td>
                      <td className="p-4">Reach RS2 / RS+ / Trimble など</td>
                    </tr>
                    <tr className="border-b border-brand-silver-200">
                      <td className="p-4">GNSSアンテナ</td>
                      <td className="p-4">ログ精度確保</td>
                      <td className="p-4">デュアル周波対応推奨</td>
                    </tr>
                    <tr className="border-b border-brand-silver-200">
                      <td className="p-4">GNSSコントローラー</td>
                      <td className="p-4">静止ログ開始・制御</td>
                      <td className="p-4">アンテナ高の入力が必要</td>
                    </tr>
                    <tr className="border-b border-brand-silver-200">
                      <td className="p-4">三脚・ピン</td>
                      <td className="p-4">GNSSアンテナの安定設置</td>
                      <td className="p-4">既知点設置を推奨</td>
                    </tr>
                    <tr>
                      <td className="p-4">Windows PC</td>
                      <td className="p-4">点群処理</td>
                      <td className="p-4">Lixel Studio 3.3.1.1 必須</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Step 1 - GNSS Setup */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-brand-black flex items-center">
                <span className="text-3xl mr-3">🛰</span>
                GNSSベースステーションの設置手順
              </h2>
              <ol className="list-decimal pl-6 space-y-3 text-brand-silver-700">
                <li>現場から半径5km以内、かつ空が開けた場所を選定</li>
                <li>可能であれば既知座標点（GCP）に設置</li>
                <li>三脚で垂直に安定設置し、アンテナ高を正確に記録</li>
                <li>GNSS受信機を「静止（STATIC）」モードに設定</li>
                <li>ログ設定：1Hz、RINEX 3.0以上対応</li>
                <li>スキャン開始5分前にはログ記録を開始</li>
              </ol>
            </div>

            {/* Step 2 - L2 Pro Setup */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-brand-black flex items-center">
                <span className="text-3xl mr-3">🤖</span>
                LIXEL L2 Pro の準備とPPKモード設定
              </h2>
              <ol className="list-decimal pl-6 space-y-3 text-brand-silver-700">
                <li>屋外で電源ON → LIXEL Go アプリで接続</li>
                <li>「XGRIDS PPK モード」を選択（自動で再起動）</li>
                <li>再接続後、「スキャン開始」</li>
                <li>青LEDランプが点灯していることを確認（GNSS動作中）</li>
                <li>予定ルートに沿って歩行・車両などでスキャン</li>
              </ol>
            </div>

            {/* Step 3 - Scan End */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-brand-black flex items-center">
                <span className="text-3xl mr-3">📴</span>
                スキャン終了とログ保存
              </h2>
              <ol className="list-decimal pl-6 space-y-3 text-brand-silver-700">
                <li>スキャン完了後、L2 Pro の電源を先にOFF</li>
                <li>GNSSベース局はさらに5分以上ログを続けてからシャットダウン</li>
                <li>RINEXログとL2 ProデータをPCに転送</li>
              </ol>
            </div>

            {/* Step 4 - Processing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-brand-black flex items-center">
                <span className="text-3xl mr-3">💻</span>
                Lixel Studio によるPPK処理（ver. 3.3.1.1〜）
              </h2>
              <ol className="list-decimal pl-6 space-y-3 text-brand-silver-700">
                <li>Lixel Studioを起動し「プロジェクト処理」を選択</li>
                <li>L2 Proデータをインポート</li>
                <li>RINEXログ（.obs, .nav など）を指定</li>
                <li>自動的に同期処理が始まり、補正SLAMが生成される</li>
                <li>点群データをLAS, PLY, PCDなどでエクスポート可能</li>
              </ol>
            </div>

            {/* Terminology */}
            <div className="mb-12 p-6 bg-purple-50 rounded-xl border-2 border-purple-100">
              <h2 className="text-2xl font-bold mb-6 text-brand-black flex items-center">
                <span className="text-3xl mr-3">💡</span>
                用語解説
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-2 border-purple-200">
                  <thead className="bg-purple-100">
                    <tr>
                      <th className="text-left p-4 font-bold text-brand-black border-b-2 border-purple-200">用語</th>
                      <th className="text-left p-4 font-bold text-brand-black border-b-2 border-purple-200">意味</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-purple-200">
                      <td className="p-4 font-bold">PPK（Post-Processed Kinematic）</td>
                      <td className="p-4">GNSSログを事後的に処理して精度補正する方式。RTKと異なり通信不要。</td>
                    </tr>
                    <tr className="border-b border-purple-200">
                      <td className="p-4 font-bold">SLAM</td>
                      <td className="p-4">自己位置を推定しながら同時にマップを作成する手法。GNSSが遮られる環境でも有効。</td>
                    </tr>
                    <tr className="border-b border-purple-200">
                      <td className="p-4 font-bold">RINEX</td>
                      <td className="p-4">GNSSログの標準交換フォーマット。複数メーカー間での互換性あり。</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold">GCP（Ground Control Point）</td>
                      <td className="p-4">精度検証・補正のための地上基準点。なくても処理可能だが、あると信頼性UP。</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Success Points */}
            <div className="mb-12 p-6 bg-green-50 rounded-xl border-2 border-green-100">
              <h2 className="text-2xl font-bold mb-4 text-brand-black flex items-center">
                <span className="text-3xl mr-3">✅</span>
                成功させるポイント
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-brand-silver-700">
                <li>GNSSログは <strong className="text-brand-black">スキャン開始5分前／終了5分後</strong> を確実に記録</li>
                <li>アンテナ高（機械高＋測量ポール）を正確にメモ</li>
                <li>GNSSとSLAMの時計を正しく同期させる</li>
                <li>L2 Proは必ず最新ファームに更新</li>
              </ul>
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
                      <td className="p-4">GNSS機器は何が使える？</td>
                      <td className="p-4">Reach RS2 / RS+ / Trimble R12 など、RINEX出力対応の測量機器すべて。</td>
                    </tr>
                    <tr className="border-b border-brand-silver-200">
                      <td className="p-4">Lixel Studioだけで完結する？</td>
                      <td className="p-4">可能です。3.3.1.1以降でPPK処理が統合されました。</td>
                    </tr>
                    <tr>
                      <td className="p-4">GCPは不要？</td>
                      <td className="p-4">任意です。相対精度で十分な用途では不要ですが、絶対精度が求められる場合は併用推奨。</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Completion Message */}
            <div className="mt-16 p-6 bg-green-50 rounded-xl border-2 border-green-200">
              <p className="text-green-800 font-bold text-lg mb-0">
                これで、LIXEL L2 Pro における PPK-SLAM 運用の基本が完了です。次のステップでは、RTKとの比較や誤差評価、活用事例などの応用編を参考にしてください。
              </p>
            </div>

            {/* Navigation */}
            <div className="mt-12 flex justify-between items-center">
              <Link
                href="/manuals/drone-mount"
                className="inline-flex items-center text-brand-silver-600 hover:text-brand-black transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                ドローンマウントチュートリアル
              </Link>
              
              <Link
                href="/support"
                className="inline-flex items-center px-6 py-3 bg-brand-orange-500 text-white font-bold rounded-lg hover:bg-brand-orange-600 transition-colors"
              >
                サポートページを見る
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}