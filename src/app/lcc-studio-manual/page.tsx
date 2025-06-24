import { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Lixel CyberColor Studio ユーザーマニュアル v1.8.0',
  description: 'SLAMベースのスキャンデータをフォトリアリスティックな3D Gaussian Splattingモデルへ変換するPC向けソフトウェアの完全マニュアル',
  path: '/lcc-studio-manual',
  keywords: ['Lixel CyberColor Studio', 'LCC Studio', '3D Gaussian Splatting', '3DGS', 'ユーザーマニュアル']
})

export default function LCCStudioManualPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6">
              <Link href="/products/lixel-studio" className="text-gray-400 hover:text-white inline-flex items-center transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Lixel Studio製品ページに戻る
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Lixel CyberColor Studio ユーザーマニュアル <span className="text-2xl font-normal">v1.8.0</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              SLAMベースのスキャンデータをフォトリアリスティックな3D Gaussian Splattingモデルへ変換するPC向けソフトウェアの完全マニュアル
            </p>
            <div className="flex flex-wrap items-center gap-4 text-gray-400">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Version 1.8.0</span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                読了時間: 20分
              </span>
              <span>2025年5月9日リリース</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-gray-50 py-8 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <nav className="flex flex-wrap gap-4 text-sm">
              <a href="#overview" className="text-gray-700 hover:text-blue-600 font-medium">概要</a>
              <a href="#installation" className="text-gray-700 hover:text-blue-600 font-medium">インストール</a>
              <a href="#interface" className="text-gray-700 hover:text-blue-600 font-medium">インターフェース</a>
              <a href="#generation" className="text-gray-700 hover:text-blue-600 font-medium">モデル生成</a>
              <a href="#viewer" className="text-gray-700 hover:text-blue-600 font-medium">ビューワー</a>
              <a href="#editor" className="text-gray-700 hover:text-blue-600 font-medium">エディタ</a>
              <a href="#flythrough" className="text-gray-700 hover:text-blue-600 font-medium">フライスルー</a>
              <a href="#jumpspace" className="text-gray-700 hover:text-blue-600 font-medium">ジャンプスペース</a>
            </nav>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* 概要 */}
            <section id="overview" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-gray-200">概要</h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Lixel CyberColor Studio (以下 LCC Studio) は、SLAMベースのスキャンデータをフォトリアリスティックな 
                3D Gaussian Splatting (3DGS) モデルへと変換するPC向けソフトウェアです。
                自動再構築・高精度表示・Web共有機能を備え、点群やフォトグラメトリに代わる高効率なワークフローを提供します。
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">主な特長</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>SLAM対応:</strong> 屋内外で高精度スキャン</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>LiDAR統合:</strong> 構造測定に対応</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>3DGS処理:</strong> 高速・軽量・高品質</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>マルチ形式出力:</strong> .ply / .lcc</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>オンライン公開:</strong> リンク共有可</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>編集機能:</strong> 測定、注釈、クリッピング対応</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">バージョン情報</h3>
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b border-blue-200">
                        <td className="py-2 font-medium">ソフトウェア名</td>
                        <td className="py-2">Lixel CyberColor Studio</td>
                      </tr>
                      <tr className="border-b border-blue-200">
                        <td className="py-2 font-medium">バージョン</td>
                        <td className="py-2">v1.8.0</td>
                      </tr>
                      <tr className="border-b border-blue-200">
                        <td className="py-2 font-medium">リリース日</td>
                        <td className="py-2">2025年5月9日</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">対応OS</td>
                        <td className="py-2">Windows 10 / 11</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">新機能 (v1.8.0)</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>HD Enhancement:</strong> DSLR/スマホ画像でテクスチャ向上</li>
                    <li>• <strong>空間認識:</strong> 壁・ドア・窓の自動抽出</li>
                    <li>• <strong>空中-地上マップ融合:</strong> ドローン画像との合成</li>
                    <li>• <strong>デジタルアバター強化:</strong> クリック経路探索対応</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* インストールとログイン */}
            <section id="installation" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-gray-200">インストールとログイン</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">ダウンロード</h3>
                <p className="mb-4">
                  <a href="https://xgrids.com/download" className="text-blue-600 hover:text-blue-700 underline">
                    https://xgrids.com/download
                  </a> より .exe ファイルを入手してください
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">推奨環境</h3>
                <table className="w-full">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="text-left px-4 py-2">項目</th>
                      <th className="text-left px-4 py-2">推奨構成</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 font-medium">CPU</td>
                      <td className="px-4 py-3">Intel i7 8700K以上 / AMD R7以上</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium">GPU</td>
                      <td className="px-4 py-3">RTX 3070以上 (推奨: 4090)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">メモリ</td>
                      <td className="px-4 py-3">最低64GB (融合系は128GB推奨)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium">ストレージ</td>
                      <td className="px-4 py-3">SSD推奨 (十分な空き容量が必要)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">登録とログイン手順</h3>
                <ol className="list-decimal list-inside space-y-3">
                  <li>ソフト起動後、「登録」ボタンをクリック</li>
                  <li>ユーザー情報を入力しアカウント作成</li>
                  <li>「ログイン」からメールアドレス + パスワード または 確認コードでログイン</li>
                </ol>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-sm">📷 画像挿入ポイント: ログイン画面UI</p>
              </div>
            </section>

            {/* ソフトウェアインターフェース */}
            <section id="interface" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-gray-200">ソフトウェアインターフェース</h2>
              
              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-4">モデル管理画面</h3>
                <p className="mb-4">LCC Studioでは、ユーザーがアップロードしたLCCモデルを以下の3カテゴリで分類・管理できます：</p>
                <ul className="space-y-2 ml-6">
                  <li>• <strong>My Captures:</strong> 自分が作成したプロジェクトの一覧</li>
                  <li>• <strong>Portal:</strong> ポータル機能により接続されたプロジェクト群</li>
                  <li>• <strong>Featured Captures:</strong> チームが選定した注目コンテンツ</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                  <p className="text-sm">📷 画像挿入ポイント: モデル管理画面の全体UI</p>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4">データステータス分類</h3>
                <table className="w-full border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-4 py-2 border-b">ステータス</th>
                      <th className="text-left px-4 py-2 border-b">内容</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3 font-medium border-b">処理待ち</td>
                      <td className="px-4 py-3 border-b">処理準備中・失敗・一時停止中のプロジェクト</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium border-b">モデル生成済み</td>
                      <td className="px-4 py-3 border-b">成功した3DGSモデル。エディタで編集可能</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">最近閲覧したもの</td>
                      <td className="px-4 py-3">最新バージョンでは表示履歴も自動保存（.lcc / .ply別）</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">プロジェクト操作</h3>
                <p className="mb-4">各プロジェクトは右上のメニュー（…）から以下の操作が可能です：</p>
                <ul className="space-y-2 ml-6">
                  <li>• <strong>処理系：</strong>一時停止、削除、ログアップロード</li>
                  <li>• <strong>生成済み：</strong>公開、エクスポート、レポート、ログアップロード</li>
                  <li>• <strong>公開済み：</strong>公開管理、リンク生成、削除 など</li>
                </ul>
              </div>
            </section>

            {/* モデル生成プロセス */}
            <section id="generation" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-gray-200">モデル生成プロセス</h2>
              
              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">1. データ取得</h3>
                <p className="mb-4">LixelシリーズのスキャナーでSLAMベースの収集を行います。</p>
                <ul className="space-y-2 ml-6">
                  <li>• RTK座標付き収集が可能（CSCS2000, WGS84対応）</li>
                  <li>• クオリティ保持のため、取得ガイドライン（PDF）に準拠してください</li>
                </ul>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">2. 単一モデル生成</h3>
                <ol className="list-decimal list-inside space-y-3">
                  <li>データアップロード（Lixelスキャナー / パノラマ動画）</li>
                  <li>プロジェクト名入力とパラメータ設定
                    <ul className="ml-8 mt-2 space-y-1">
                      <li>• 処理精度（高速 / 標準 / 高品質）</li>
                      <li>• VRAM上限</li>
                      <li>• ループクロージャー、PPR比率、プラットフォーム移植性など</li>
                    </ul>
                  </li>
                </ol>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                  <p className="text-sm">📷 画像挿入ポイント: パラメータ設定画面</p>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">3. マップ融合</h3>
                <p className="mb-4">複数セグメントのデータを統合し、大規模な空間モデルを作成します。</p>
                <ul className="space-y-2 ml-6">
                  <li>• 最大10データの融合が可能</li>
                  <li>• オーバーラップ要件、RTK / 制御点接続に準拠</li>
                </ul>
              </div>

              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">4. 空中-地上マップ融合</h3>
                <p className="mb-4">ドローン画像 + 地上スキャンを融合して構造と全体を統合したモデルを構築。</p>
                <ul className="space-y-2 ml-6">
                  <li>• 画像重複率80%以上</li>
                  <li>• 焦点距離統一・強RTK信号を維持</li>
                  <li>• 離着陸データも取得</li>
                </ul>
              </div>

              <div className="bg-amber-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-amber-900">処理開始と注意点</h3>
                
                <h4 className="font-semibold mb-2">処理の開始手順</h4>
                <ol className="list-decimal list-inside space-y-2 mb-4">
                  <li>プロジェクト作成後、「開始」ボタンをクリック</li>
                  <li>データがロードされると「マイ生成」リストに追加される</li>
                  <li>特定のプロジェクトを選び「再構築開始」→「OK」で処理を実行</li>
                </ol>

                <h4 className="font-semibold mb-2">注意事項</h4>
                <ul className="space-y-2 text-amber-800">
                  <li>• 再構築中はLCC Studioを終了しないこと</li>
                  <li>• ディスク容量はプロジェクトサイズの少なくとも2倍を確保</li>
                  <li>• 他の高負荷タスクは避け、GPUリソースを確保すること</li>
                  <li>• 処理失敗時はログアップロード機能で開発元に報告可能</li>
                </ul>
              </div>
            </section>

            {/* モデルビューワー */}
            <section id="viewer" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-gray-200">モデルビューワー</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">表示方法</h3>
                <ul className="space-y-2">
                  <li>• 「マイキャプチャ」や「最近閲覧したもの」から対象シーンを選択</li>
                  <li>• 「表示」ボタンを押してビューワーを起動</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold mb-3">操作モード</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>第一人称視点：</strong>WASDキーで移動、視線操作も可能</li>
                    <li>• <strong>ピボットモード：</strong>モデルを中心に回転・確認</li>
                    <li>• <strong>アバター視点：</strong>アバターを任意地点に移動させて視点確認</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold mb-3">測定</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>距離：</strong>2点間をクリックして自動計測</li>
                    <li>• <strong>面積：</strong>3点以上を選択して平面領域を測定</li>
                    <li>• <strong>Pro測定：</strong>座標の dx/dy/dz オフセットを確認可能</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold mb-3">注釈表示</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 写真・リンク・テキストを含むノートが表示される</li>
                    <li>• ノート一覧から任意ノートへジャンプ可能</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold mb-3">環境設定</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• レンダリング品質（パフォーマンス／クオリティ）</li>
                    <li>• グラフィックスAPI選択</li>
                    <li>• 衝突検出や空設定など</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-sm">📷 画像挿入ポイント: ビューワー操作画面と測定機能</p>
              </div>
            </section>

            {/* エディタ機能 */}
            <section id="editor" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-gray-200">エディタ機能</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">編集対象</h3>
                <ul className="space-y-2">
                  <li>• .lcc または .ply 形式のエクスポート済モデル</li>
                  <li>• 自動保存に対応（クリッピングを除く）</li>
                  <li>• 「名前を付けて保存」で別名保存が可能</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold mb-3">測定と注釈</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• ビューワーと同様に距離・面積測定に対応</li>
                    <li>• ノートは任意の位置に追加可能</li>
                    <li>• ノートは右側の一覧で管理・編集・削除可能</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold mb-3">クリッピング</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• ボックスを描画して内部／外部の除去を指定</li>
                    <li>• Y軸回転や高さ調整にも対応</li>
                    <li>• 「適用」で反映、「リセット」で再指定可能</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mt-6">
                <h4 className="font-semibold mb-3">スタートポイントの設定</h4>
                <ul className="space-y-2 text-sm">
                  <li>• 一人称視点で現在地点を「スタート地点」に登録可</li>
                  <li>• 「スタート地点に戻る」機能で再確認も可能</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-sm">📷 画像挿入ポイント: エディタ画面とクリッピング操作</p>
              </div>
            </section>

            {/* 空間フライスルー */}
            <section id="flythrough" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-gray-200">空間フライスルー（動画出力）</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">概要</h3>
                <ul className="space-y-2">
                  <li>• カメラ移動と視点を時間軸で記録し、.mp4として出力可能</li>
                  <li>• タイムライン上にキーフレームを追加してアニメーションを構成</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">操作手順</h3>
                <ol className="list-decimal list-inside space-y-3">
                  <li>ビューワー上部メニューから「空間フライスルー」を選択</li>
                  <li>再生・停止・フレーム編集などを行う</li>
                  <li>「ビデオ出力」で .mp4 を生成（1920x1080固定）</li>
                </ol>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-sm">📷 画像挿入ポイント: フライスルー編集画面とタイムライン</p>
              </div>
            </section>

            {/* ジャンプスペース */}
            <section id="jumpspace" className="mb-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-gray-200">ジャンプスペース</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">概要</h3>
                <p className="mb-4">複数のLCCシーンをポータルで相互接続し、シームレスな体験を提供</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">作成手順</h3>
                <ol className="list-decimal list-inside space-y-3">
                  <li>「新しいジャンプスペースを作成」ボタンをクリック</li>
                  <li>初期空間（メインモデル）と保存先を指定</li>
                  <li>最大10モデルまで関連付け可能</li>
                </ol>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">ポータル設定</h3>
                <ul className="space-y-2">
                  <li>• スペース内に「離陸ポイント」を設定</li>
                  <li>• 遷移先のシーンに「着陸ポイント」を設定</li>
                  <li>• 複数のスペース間で自由にジャンプ可能</li>
                </ul>
              </div>

              <div className="bg-amber-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-amber-900">注意点</h3>
                <ul className="space-y-2 text-amber-800">
                  <li>• 各スペースは.lcc形式で、要件に合った構成が必要</li>
                  <li>• ポータル設定ファイル（transition.lct）は自動で保存される</li>
                  <li>• 現時点でジャンプスペースのWeb公開には非対応</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <p className="text-sm">📷 画像挿入ポイント: ジャンプスペース設定画面</p>
              </div>
            </section>

            {/* まとめ */}
            <section className="mt-16 pt-8 border-t-2 border-gray-200">
              <div className="bg-gray-100 rounded-lg p-6">
                <p className="text-center text-gray-700 mb-4">
                  このマニュアルは以上です。
                </p>
                <p className="text-center text-sm text-gray-600">
                  ご希望があれば、特定セクションの分割掲載、Webページ化、PDF出力、英訳対応なども承ります。
                </p>
              </div>
            </section>

            {/* CTAs */}
            <section className="mt-12">
              <div className="grid md:grid-cols-3 gap-6">
                <Link 
                  href="/downloads" 
                  className="block bg-blue-600 text-white text-center rounded-lg p-6 hover:bg-blue-700 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">ダウンロード</h3>
                  <p className="text-blue-100">最新版を入手</p>
                </Link>
                
                <Link 
                  href="/products/lixel-studio" 
                  className="block bg-purple-600 text-white text-center rounded-lg p-6 hover:bg-purple-700 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">製品詳細</h3>
                  <p className="text-purple-100">機能と価格を確認</p>
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