import { Metadata } from 'next'
import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Lixel Go - フィールドで使えるLiDAR操作アプリ | UP HASH',
  description: 'スキャンも確認も、スマホひとつ。Lixel Go は、Lixelデバイス専用のモバイルアプリです。現場でのリアルタイム操作・プレビュー・状態管理をスマートに。',
}

export default function LixelGoPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 to-teal-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-green-500 text-white rounded-full">
                  Mobile App
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Lixel Go
              </h1>
              <p className="text-xl mb-4">
                フィールドで使えるLiDAR操作アプリ
              </p>
              <p className="text-2xl font-bold mb-8 text-green-200">
                スキャンも確認も、スマホひとつ。
              </p>
              <p className="text-lg mb-8 text-gray-200">
                Lixel Go は、Lixelデバイス専用のモバイルアプリです。現場でのリアルタイム操作・プレビュー・状態管理をスマートに。
              </p>
              <div className="flex gap-4">
                <Link
                  href="#download"
                  className="inline-flex items-center px-6 py-3 bg-white text-green-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  アプリをダウンロード
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-green-900 transition-colors"
                >
                  お問い合わせ
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] bg-gray-800/20 rounded-xl overflow-hidden backdrop-blur-sm">
              <img 
                src={getImagePath('/images/lixel_go_app.jpg')} 
                alt="Lixel Go App"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">主な機能</h2>
          <div className="space-y-16 max-w-6xl mx-auto">
            {/* スキャナー制御 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  🔧 スキャナー制御
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">•</span>
                    <span>撮影の開始／停止、モード切替、パラメータ調整をスマホから操作</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">•</span>
                    <span>ケーブル不要、Wi-Fi接続で快適制御</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                <p className="text-gray-500">スキャナー制御画面</p>
              </div>
            </div>

            {/* リアルタイムプレビュー */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                <p className="text-gray-500">プレビューUI例</p>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  🖥️ リアルタイムプレビュー
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">•</span>
                    <span>撮影中の映像や点群データをその場で確認</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">•</span>
                    <span>撮り直しや死角の把握も即時対応</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* デバイスモニタリング */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  📊 デバイスモニタリング
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">•</span>
                    <span>バッテリー残量、温度、保存容量などをリアルタイム表示</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">•</span>
                    <span>撮影中の異常もすぐ検知</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                <p className="text-gray-500">ステータスモニター画面</p>
              </div>
            </div>

            {/* アクティベーション補助 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                <p className="text-gray-500">SNコード画面</p>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  🔐 アクティベーション補助
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">•</span>
                    <span>Lixel Studio用の<strong>完全なSNコード表示</strong>に対応</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-0.5">•</span>
                    <span>初期設定・ライセンス申請時に必須</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">ダウンロード</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Android版 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0668L4.841 5.4134a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    📱 Android版 V1.1.9
                  </h3>
                  <p className="text-gray-600 mb-4">
                    101MB
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Google Playで入手
                  </Link>
                </div>
              </div>
            </div>

            {/* iOS版 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    📱 iOS版 V1.1.9
                  </h3>
                  <p className="text-gray-600 mb-4">
                    120.5MB
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    App Storeで入手
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Release Notes */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">リリースノート（V1.1.9）</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">安定性向上と既知の不具合を修正</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">•</span>
                  <span className="text-gray-700">最新ファームウェアへの互換性アップデート</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  📄 リリースノート全文はこちら →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Scenes */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">利用シーン</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-green-500 to-teal-600">
                    <th className="px-6 py-4 text-left text-white font-semibold">シチュエーション</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">活用内容</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">フィールド撮影</td>
                    <td className="px-6 py-4 text-gray-700">プレビューしながら構図確認・再撮影可能</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">セットアップ</td>
                    <td className="px-6 py-4 text-gray-700">Wi-Fi接続後すぐにデバイス制御可能</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">ライセンス申請</td>
                    <td className="px-6 py-4 text-gray-700">Lixel Studio向けにSNコードを即時取得</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">複数台管理</td>
                    <td className="px-6 py-4 text-gray-700">同時に複数スキャナーの状況をスマホで確認</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8 bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              <p className="text-gray-500">現場利用風景</p>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">動作環境</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-green-500 to-teal-600">
                    <th className="px-6 py-4 text-left text-white font-semibold">プラットフォーム</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">推奨スペック</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-white transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">Android</td>
                    <td className="px-6 py-4 text-gray-700">Android 12以上、Snapdragon 765G / Dimensity 8000-MAX以上</td>
                  </tr>
                  <tr className="hover:bg-white transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">iOS</td>
                    <td className="px-6 py-4 text-gray-700">iPhone 12以降</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">よくある質問（FAQ）</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="font-semibold mb-2">Q. Lixel Go はどのデバイスに対応していますか？</h4>
              <p className="text-gray-700">A. Lixel L2、K1、L2 Proに対応しています。</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="font-semibold mb-2">Q. USB接続は必要ですか？</h4>
              <p className="text-gray-700">A. いいえ。すべてWi-Fi経由で通信します。</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="font-semibold mb-2">Q. スマホが1台あればすべて完結しますか？</h4>
              <p className="text-gray-700">A. はい。撮影操作、プレビュー、SN確認までスマホ1台で完結します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            スキャン現場を、もっとスマートに。
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            📲 今すぐ Lixel Go をインストールして、フィールドワークをアップグレード！
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0668L4.841 5.4134a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"/>
              </svg>
              Google Play
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}