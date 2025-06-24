import { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'LCC for Revit マニュアル (v1.0.9)',
  description: 'Lixel CyberColor (LCC) Studio と Revit を連携させ、AI を駆使したBIMモデリングを実現するための完全マニュアル',
  path: '/lcc-revit-manual',
  keywords: ['LCC for Revit', 'Revit マニュアル', 'BIMモデリング', 'AI BIM', 'Lixel Studio']
})

export default function LCCRevitManualPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6">
              <Link href="/products/revit-plugin" className="text-gray-400 hover:text-white inline-flex items-center transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                LCC for Revit製品ページに戻る
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              LCC for Revit マニュアル <span className="text-2xl font-normal">(v1.0.9)</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Lixel CyberColor (LCC) Studio と Revit を連携させ、AI を駆使したBIMモデリングを実現するための完全マニュアル
            </p>
            <div className="flex flex-wrap items-center gap-4 text-gray-400">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Version 1.0.9</span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                読了時間: 15分
              </span>
              <span>2025年5月9日更新</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-gray-50 py-8 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <nav className="flex flex-wrap gap-4 text-sm">
              <a href="#installation" className="text-gray-700 hover:text-blue-600 font-medium">インストール</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">機能概要</a>
              <a href="#import" className="text-gray-700 hover:text-blue-600 font-medium">LCCモデル取込</a>
              <a href="#modeling" className="text-gray-700 hover:text-blue-600 font-medium">Modeling Tools</a>
              <a href="#overlay" className="text-gray-700 hover:text-blue-600 font-medium">点群オーバーレイ</a>
              <a href="#filter" className="text-gray-700 hover:text-blue-600 font-medium">フィルター</a>
            </nav>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* インストール手順 */}
            <section id="installation" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-gray-200">インストール手順</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">システム要件</h3>
                <ul className="space-y-3">
                  <li><strong>OS:</strong> Windows 10/11（ProfessionalまたはHome）</li>
                  <li><strong>CPU:</strong> Intel i7 8700K または AMD R7 1700X 以上推奨</li>
                  <li><strong>GPU:</strong></li>
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>サーバー: NVIDIA V100 / A10 / A100</li>
                    <li>デスクトップ: 2080Ti / 3060 / 4080 / 3090 / 4090</li>
                    <li>ノートPC: 3080Ti / 4080Ti</li>
                  </ul>
                  <li><strong>メモリ:</strong> 64GB 以上</li>
                  <li><strong>対応Revitバージョン:</strong> 2025</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-4">インストール手順</h3>
              <ol className="list-decimal list-inside space-y-3">
                <li>exe形式のインストーラーを入手（販売代理店またはAutodesk公式マーケットプレイスから）</li>
                <li>ダブルクリックでインストール開始（自動インストール）</li>
                <li>Revitを起動し「The publisher of this add-in could not be verified」と表示されたら「Always Load」を選択</li>
              </ol>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-sm">📷 画像挿入ポイント: プラグインファイル配置と初回起動時のRevit画面</p>
              </div>
            </section>

            {/* 機能概要 */}
            <section id="features" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-gray-200">機能概要</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b">機能</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b">概要</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">LCC Model</td>
                      <td className="px-6 py-4 text-sm text-gray-700">LCCモデルの読み込み、管理、Revitへのインポート</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">Modeling Tools</td>
                      <td className="px-6 py-4 text-sm text-gray-700">レベル、壁、ドア、窓の作成（3つのモード：Draw / Canvas / One-click）</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">LCC Overlay</td>
                      <td className="px-6 py-4 text-sm text-gray-700">BIMモデル上に点群（Point Cloud）を重ねて表示し、比較や調整に活用</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">Sync</td>
                      <td className="px-6 py-4 text-sm text-gray-700">LCC ViewerとRevitのカメラ同期。ビュー切替も可能</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">Filter</td>
                      <td className="px-6 py-4 text-sm text-gray-700">BIMおよび点群レイヤーの表示・非表示切替。POIやコンポーネント制御も含む</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">Viewer Guide</td>
                      <td className="px-6 py-4 text-sm text-gray-700">LCC Viewer内での移動・回転・描画操作のナビゲーション（WASD/マウスなど）</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-sm">📷 画像挿入ポイント: 機能別メニューUI</p>
              </div>
            </section>

            {/* LCCモデルの取り込み */}
            <section id="import" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-gray-200">LCCモデルの取り込み</h2>
              
              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-4">Wizard（プロジェクト読み込み）</h3>
                <ol className="list-decimal list-inside space-y-3">
                  <li>Revitの上部タブ <code className="bg-gray-100 px-2 py-1 rounded">[LCC Model] → [Wizard]</code> を選択</li>
                  <li><code className="bg-gray-100 px-2 py-1 rounded">[+]</code>ボタンで <code className="bg-gray-100 px-2 py-1 rounded">.lcc</code> ファイルを読み込み（例：meta.lcc）</li>
                  <li>情報表示：ファイルパス、ポイント数、単位（Revitと一致）</li>
                  <li>ファイル一覧で <code className="bg-gray-100 px-2 py-1 rounded">[Remove] / [Reload]</code> が可能。読み込みステータスも表示</li>
                </ol>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                  <p className="text-sm">📷 画像挿入ポイント: Wizard画面とファイル選択UI</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Viewer（モデル表示）</h3>
                <ul className="list-disc list-inside space-y-3">
                  <li>読み込み後、自動でLCC Viewerがポップアップ</li>
                  <li>Viewer上部に「Connected」（緑色）が表示されていればRevitと連携済</li>
                  <li><code className="bg-gray-100 px-2 py-1 rounded">[Sync]</code>ボタンでRevit ⇄ LCCのモデル同期</li>
                  <li>操作ガイド：<code className="bg-gray-100 px-2 py-1 rounded">[W/A/S/D]</code> で移動、<code className="bg-gray-100 px-2 py-1 rounded">[Q/E]</code>で昇降、マウスで視点変更</li>
                </ul>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                  <p className="text-sm">📷 画像挿入ポイント: Viewer操作中のUIとナビゲーションガイド</p>
                </div>
              </div>
            </section>

            {/* Modeling Tools */}
            <section id="modeling" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-gray-200">Modeling Tools（AIを用いたBIM要素の作成）</h2>
              
              {/* レベル作成 */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-blue-600">レベル作成</h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 text-lg">Draw</h4>
                    <ol className="text-sm space-y-2 list-decimal list-inside">
                      <li><code>[Modeling Tools] → [Level]</code> を選択</li>
                      <li>「Top」や「Bottom」など名前をつけて天井/床をLCC Viewerでクリック</li>
                      <li>Revitに戻って <code>[Finish]</code> をクリック</li>
                    </ol>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 text-lg">Canvas</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Revitが編集モードでないことを確認</li>
                      <li>• <code>[Canvas]</code> をクリック → 複数視点からAI認識レベルを調整（ドラッグ）</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 text-lg">One-Click</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Smart Floor PlanがONの状態で自動レベル生成 → One ClickでRevitに反映</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                  <p className="text-sm">📷 画像挿入ポイント: レベル生成UIとCanvasでの編集操作</p>
                </div>
              </div>

              {/* 壁作成 */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-blue-600">壁作成</h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 text-lg">Draw</h4>
                    <ol className="text-sm space-y-2 list-decimal list-inside">
                      <li><code>[Wall]</code>を選択</li>
                      <li>Top/BottomレベルとWall Typeを指定</li>
                      <li>LCC上で線の折れ点をクリック → Revitで <code>[Finish]</code></li>
                    </ol>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 text-lg">Canvas</h4>
                    <ul className="text-sm space-y-2">
                      <li>• ノード追加/削除/移動（右クリックメニュー）</li>
                      <li>• 壁の簡略化や高さトリミング（スライス）も可能</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 text-lg">One-Click</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Smart Floor Planが壁を認識 → 一括生成</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                  <p className="text-sm">📷 画像挿入ポイント: 壁モデリングUIとCanvas編集例</p>
                </div>
              </div>

              {/* ドア・窓作成 */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-blue-600">ドア / 窓作成</h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 text-lg">Draw</h4>
                    <ul className="text-sm space-y-2">
                      <li>• <code>[Door]</code>または<code>[Window]</code>を選択し、タイプを選択</li>
                      <li>• LCC Viewerで下部中心点をクリック → Revitに戻って <code>[Finish]</code></li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 text-lg">Canvas</h4>
                    <ul className="text-sm space-y-2">
                      <li>• 境界の微調整（枠の調整、削除）</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 text-lg">One-Click</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Smart Floor Planがドアや窓を認識し、Revitに一括生成</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                  <p className="text-sm">📷 画像挿入ポイント: ドア/窓作成ポップアップと配置位置UI</p>
                </div>
              </div>
            </section>

            {/* 点群オーバーレイ */}
            <section id="overlay" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-gray-200">点群オーバーレイ（LCC Overlay）</h2>
              
              <h3 className="text-xl font-semibold mb-4">点群表示</h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="mb-4"><code className="bg-white px-2 py-1 rounded">[LCC Overlay]</code> タブ → <code className="bg-white px-2 py-1 rounded">[Point Cloud]</code> ドロップダウン</p>
                <ul className="space-y-3">
                  <li>
                    <strong className="text-blue-600">[Rectangle Selection]</strong>: 
                    <span className="text-gray-700 ml-2">領域をドラッグで選択し、該当する点群を表示</span>
                  </li>
                  <li>
                    <strong className="text-blue-600">[Surface Selection]</strong>: 
                    <span className="text-gray-700 ml-2">BIMモデルの表面をクリックしてその周囲の点群を表示</span>
                  </li>
                  <li>
                    <strong className="text-blue-600">[Points Around Component]</strong>: 
                    <span className="text-gray-700 ml-2">ドアや窓などコンポーネントの周辺にある点群を表示</span>
                  </li>
                  <li>
                    <strong className="text-red-600">[Refresh]</strong>: 
                    <span className="text-gray-700 ml-2">すべての点群表示をクリアして、モデルビューに戻す</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-sm">📷 画像挿入ポイント: 各種点群選択UIと結果表示画面</p>
              </div>
            </section>

            {/* フィルター制御 */}
            <section id="filter" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-gray-200">フィルター制御</h2>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="mb-4"><code className="bg-white px-2 py-1 rounded">[Filter]</code> メニューを開くと以下の操作が可能：</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>BIMモデルの構成要素の表示 / 非表示の切り替え</li>
                  <li>点群データのレイヤー表示 / 非表示切り替え</li>
                  <li>POI（ポイントオブインタレスト）のON/OFF制御</li>
                  <li>Viewerビューでの比較や整合性確認に役立つ</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-sm">📷 画像挿入ポイント: Filter操作UI全体図</p>
              </div>
            </section>

            {/* 補足事項 */}
            <section className="mt-16 pt-8 border-t-2 border-gray-200">
              <div className="bg-amber-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-amber-900">補足事項</h3>
                <ul className="space-y-2 text-amber-800">
                  <li>• 本マニュアルは <strong>LCC for Revit バージョン1.0.9</strong> に対応しています。</li>
                  <li>• 今後のアップデートにより、仕様やUIに変更がある場合があります。</li>
                </ul>
              </div>
            </section>

            {/* CTAs */}
            <section className="mt-12">
              <div className="grid md:grid-cols-3 gap-6">
                <Link 
                  href="/lcc-revit-guide" 
                  className="block bg-purple-600 text-white text-center rounded-lg p-6 hover:bg-purple-700 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">簡易ガイド</h3>
                  <p className="text-purple-100">初心者向けの基本操作</p>
                </Link>
                
                <Link 
                  href="/products/revit-plugin" 
                  className="block bg-blue-600 text-white text-center rounded-lg p-6 hover:bg-blue-700 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">製品詳細</h3>
                  <p className="text-blue-100">機能と価格を確認</p>
                </Link>
                
                <Link 
                  href="/contact" 
                  className="block bg-gray-800 text-white text-center rounded-lg p-6 hover:bg-gray-900 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">お問い合わせ</h3>
                  <p className="text-gray-300">導入のご相談</p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  )
}