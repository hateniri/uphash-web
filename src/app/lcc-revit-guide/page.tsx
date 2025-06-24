import { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'LCC for Revit 簡易ガイド',
  description: '初学者向けにLixel StudioとRevit連携の基本操作とAIモデリング機能を説明した実用ガイド',
  path: '/lcc-revit-guide',
  keywords: ['LCC for Revit', 'Revit プラグイン', 'BIM', '3Dモデリング', 'Lixel Studio']
})

export default function LCCRevitGuidePage() {
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
              LCC for Revit 簡易ガイド
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              初学者向けにLixel StudioとRevit連携の基本操作とAIモデリング機能を説明した実用ガイド
            </p>
            <div className="flex flex-wrap items-center gap-4 text-gray-400">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">LCC180 + Revit 2025</span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                読了時間: 10分
              </span>
              <span>2025年5月作成</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* インストール手順 */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-gray-200">インストール手順</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">推奨環境</h3>
                <ul className="space-y-2">
                  <li><strong>対応スキャナー:</strong> Lixel L2 Pro / Kitty K1</li>
                  <li><strong>ソフトウェア:</strong> Lixel Studio（点群処理）、Revit 2025</li>
                  <li className="mt-4"><strong>ハードウェア目安:</strong></li>
                  <ul className="ml-6 mt-2 space-y-1">
                    <li>GPU: NVIDIA RTX 3070 以上</li>
                    <li>RAM: 64GB以上</li>
                  </ul>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-4">手順</h3>
              <ol className="list-decimal list-inside space-y-3">
                <li><code>.exe</code>ファイルをダウンロード（販売代理店経由）</li>
                <li>ダブルクリックして自動インストール</li>
                <li>Revit 起動時「Load Plugin」の確認が出たら「Load」を選択</li>
              </ol>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-sm">📷 画像挿入ポイント: インストーラー実行画面</p>
              </div>
            </section>

            {/* モデル読み込みとViewer操作 */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-gray-200">モデル読み込みとViewer操作</h2>
              
              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-4">Wizard</h3>
                <ol className="list-decimal list-inside space-y-3">
                  <li>Revit上部メニュー <code>[LCC Model] → [Wizard]</code> をクリック</li>
                  <li><code>[+]</code>ボタンで <code>meta.lcc</code> ファイルを読み込み</li>
                  <li>ファイル情報（単位、名前、ポイント数）が表示され、<code>[Remove]/[Reload]</code>も可能</li>
                </ol>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                  <p className="text-sm">📷 画像挿入ポイント: Wizard UIと読み込み完了画面</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">LCC Viewer</h3>
                <ul className="list-disc list-inside space-y-3">
                  <li>モデル読み込み後、自動で表示</li>
                  <li>上部バーに「Connected」表示でRevitと同期済み</li>
                  <li><code>[Sync]</code>ボタンでRevit/BIMモデルを相互反映</li>
                  <li>操作ガイド：<code>[W/A/S/D]</code>移動、<code>[Q/E]</code>上下、マウスで回転/ズーム</li>
                </ul>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                  <p className="text-sm">📷 画像挿入ポイント: Viewer内ガイド表示とナビゲーション例</p>
                </div>
              </div>
            </section>

            {/* BIM要素の作成 */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-gray-200">BIM要素の作成（Modeling Tools）</h2>
              
              {/* レベル */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-blue-600">レベル</h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Draw</h4>
                    <ul className="text-sm space-y-2">
                      <li>• <code>[Modeling Tools] → [Level]</code></li>
                      <li>• <code>[Ceiling]</code> と <code>[Floor]</code> を入力して、LCC Viewer上でポイント選択 → <code>[Finish]</code></li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Canvas</h4>
                    <ul className="text-sm space-y-2">
                      <li>• 編集モード外で <code>[Canvas]</code> を選択</li>
                      <li>• 複数視点から高さを微調整可能（ドラッグ）</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3">One-Click</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Smart Floor Plan がONの状態で、One Click により自動生成</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                  <p className="text-sm">📷 画像挿入ポイント: レベル設定UIと選択ポイントの例</p>
                </div>
              </div>

              {/* 壁 */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-blue-600">壁</h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Draw</h4>
                    <ul className="text-sm space-y-2">
                      <li>• <code>[Wall]</code> を開き、上下レベルとWall Typeを選択</li>
                      <li>• LCC上で折れ点をクリックし、Revitに戻って <code>[Finish]</code></li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Canvas</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Node編集やセクション切断（斜め天井等）を含む調整が可能</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3">One-Click</h4>
                    <ul className="text-sm space-y-2">
                      <li>• 壁もSmart Floor Planで一括生成</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                  <p className="text-sm">📷 画像挿入ポイント: 壁作成ウィンドウとCanvas調整例</p>
                </div>
              </div>

              {/* ドア・窓 */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-blue-600">ドア・窓</h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Draw</h4>
                    <ul className="text-sm space-y-2">
                      <li>• <code>[Door] / [Window]</code> を選択し、タイプを指定</li>
                      <li>• LCC上で下端中心点をクリック → <code>[Finish]</code></li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Canvas</h4>
                    <ul className="text-sm space-y-2">
                      <li>• 境界やサイズの微調整</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-3">One-Click</h4>
                    <ul className="text-sm space-y-2">
                      <li>• ドア・窓も自動で正しい位置に生成される</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                  <p className="text-sm">📷 画像挿入ポイント: ドア・窓モデリングUIと結果反映画面</p>
                </div>
              </div>
            </section>

            {/* LCC Overlay */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-gray-200">LCC Overlay（点群重ね表示）</h2>
              
              <h3 className="text-xl font-semibold mb-4">選択モード</h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="mb-4"><code>[LCC Overlay]</code> タブ → <code>[Point Cloud]</code> メニュー</p>
                <ul className="space-y-2">
                  <li><code>[Rectangle Selection]</code>: 範囲指定</li>
                  <li><code>[Surface Selection]</code>: モデル表面から</li>
                  <li><code>[Points Around Component]</code>: ドア/窓周辺から</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600"><code>[Refresh]</code> ボタンで選択解除</p>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <p className="text-sm">📷 画像挿入ポイント: 各種選択方法と結果の表示例</p>
              </div>
            </section>

            {/* フィルター制御 */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-gray-200">フィルター制御</h2>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="mb-4">Viewer左側の <code>[Filter]</code> メニューから：</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>BIMの構成要素</li>
                  <li>点群セクション</li>
                  <li>POI（インタレストポイント）</li>
                </ul>
                <p className="mt-4">の表示・非表示を切り替え可能</p>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-sm">📷 画像挿入ポイント: フィルターUIとチェック操作</p>
              </div>
            </section>

            {/* ご案内 */}
            <section className="mt-16 pt-8 border-t-2 border-gray-200">
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">ご案内</h3>
                <ul className="space-y-2">
                  <li>• 本ガイドはLCC180・Revit 2025対応</li>
                  <li>• 詳細な技術仕様は<Link href="/products/revit-plugin" className="text-blue-600 hover:text-blue-700">製品ページ</Link>をご覧ください</li>
                  <li>• ご不明な点は<Link href="/contact" className="text-blue-600 hover:text-blue-700">お問い合わせ</Link>よりご連絡ください</li>
                </ul>
              </div>
            </section>

            {/* CTAs */}
            <section className="mt-12">
              <div className="grid md:grid-cols-2 gap-6">
                <Link 
                  href="/products/revit-plugin" 
                  className="block bg-blue-600 text-white text-center rounded-lg p-6 hover:bg-blue-700 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">製品詳細を見る</h3>
                  <p className="text-blue-100">LCC for Revitの全機能と価格</p>
                </Link>
                
                <Link 
                  href="/contact" 
                  className="block bg-gray-800 text-white text-center rounded-lg p-6 hover:bg-gray-900 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">お問い合わせ</h3>
                  <p className="text-gray-300">導入のご相談・デモのご依頼</p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  )
}