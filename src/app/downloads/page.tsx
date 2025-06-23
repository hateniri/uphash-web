import { Metadata } from 'next'
import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'ダウンロード - マニュアル・ソフトウェア | UP HASH',
  description: 'Lixelシリーズのマニュアル、ソフトウェア、技術資料のダウンロードページ。最新版のソフトウェアとドキュメントをご提供。',
}

const downloads = {
  manuals: [
    {
      name: 'Lixel L2 Pro ユーザーマニュアル',
      description: 'L2 Proシリーズの基本操作、セットアップガイド',
      version: 'v2.5',
      size: '45 MB',
      format: 'PDF',
      link: '#'
    },
    {
      name: 'Lixel K1 ユーザーマニュアル',
      description: 'K1の操作方法、メンテナンスガイド',
      version: 'v1.8',
      size: '32 MB',
      format: 'PDF',
      link: '#'
    },
    {
      name: 'RTKセットアップガイド',
      description: 'RTK機能の設定と最適化',
      version: 'v1.2',
      size: '12 MB',
      format: 'PDF',
      link: '#'
    },
    {
      name: 'クイックスタートガイド',
      description: '初めてお使いの方向けの簡易ガイド',
      version: 'v3.0',
      size: '8 MB',
      format: 'PDF',
      link: '#'
    }
  ],
  software: [
    {
      name: 'Lixel Studio',
      description: '点群処理・編集ソフトウェア',
      version: 'v4.2.1',
      size: '1.2 GB',
      platforms: ['Windows', 'macOS'],
      requirements: {
        cpu: 'Intel Core i7以上 / AMD Ryzen 7以上',
        ram: '16GB以上（32GB推奨）',
        gpu: 'NVIDIA GTX 1060以上（RTX 3060推奨）',
        storage: '500GB以上のSSD空き容量',
        os: 'Windows 10/11 (64bit) / macOS 12以降'
      },
      link: 'https://app-download.xgrids.com/'
    },
    {
      name: 'Lixel Cyber Color Studio',
      description: '3D再構築ソフトウェア',
      version: 'v3.5.0',
      size: '980 MB',
      platforms: ['Windows', 'macOS'],
      requirements: {
        cpu: 'Intel Core i9以上 / AMD Ryzen 9以上',
        ram: '32GB以上（64GB推奨）',
        gpu: 'NVIDIA RTX 3070以上（RTX 4080推奨）',
        storage: '1TB以上のSSD空き容量',
        os: 'Windows 10/11 (64bit) / macOS 12以降'
      },
      link: 'https://app-download.xgrids.com/'
    },
    {
      name: 'LCC Viewer',
      description: 'LCCモデル閲覧用無料ビューア',
      version: 'v2.1.0',
      size: '150 MB',
      platforms: ['Windows', 'macOS', 'Web'],
      requirements: {
        cpu: 'Intel Core i5以上 / AMD Ryzen 5以上',
        ram: '8GB以上',
        gpu: '専用GPU推奨（統合GPUでも動作可）',
        storage: '10GB以上の空き容量',
        os: 'Windows 10/11 / macOS 11以降 / Chrome/Edge/Safari最新版'
      },
      link: 'https://lcc-viewer.xgrids.com/'
    },
    {
      name: 'Lixel GO',
      description: 'モバイルコントロールアプリ',
      version: 'v5.8.3',
      size: '120 MB',
      platforms: ['iOS', 'Android'],
      requirements: {
        ios: 'iOS 14.0以降、iPhone 8以降',
        android: 'Android 9.0以降、3GB RAM以上',
        storage: '500MB以上の空き容量',
        network: 'Wi-Fi接続必須（5GHz推奨）'
      },
      link: '#'
    }
  ],
  plugins: [
    {
      name: 'Lixel Revit プラグイン',
      description: 'Autodesk Revit用点群インポートプラグイン',
      version: 'v2.3',
      size: '85 MB',
      platforms: ['Windows'],
      compatibility: 'Revit 2020-2024',
      link: '#'
    },
    {
      name: 'AutoCAD点群プラグイン',
      description: 'AutoCAD用高速点群表示プラグイン',
      version: 'v1.8',
      size: '45 MB',
      platforms: ['Windows'],
      compatibility: 'AutoCAD 2019-2024',
      link: '#'
    },
    {
      name: 'Unreal Engine統合キット',
      description: 'UE5用LCCモデルインポーター',
      version: 'v1.2',
      size: '120 MB',
      platforms: ['Windows', 'macOS'],
      compatibility: 'Unreal Engine 5.0以降',
      link: '#'
    },
    {
      name: 'Unity LCCローダー',
      description: 'Unity用LCCファイル読み込みパッケージ',
      version: 'v1.5',
      size: '65 MB',
      platforms: ['Windows', 'macOS'],
      compatibility: 'Unity 2021.3 LTS以降',
      link: '#'
    }
  ]
}

export default function DownloadsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ダウンロード
            </h1>
            <p className="text-xl text-gray-300">
              最新のソフトウェア、マニュアル、技術資料をダウンロード
            </p>
          </div>
        </div>
      </section>

      {/* Manuals Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">日本語マニュアル・技術資料</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloads.manuals.map((manual, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{manual.name}</h3>
                    <p className="text-gray-600 mb-3">{manual.description}</p>
                    <div className="flex items-center text-sm text-gray-500 gap-4">
                      <span>Version {manual.version}</span>
                      <span>{manual.size}</span>
                      <span>{manual.format}</span>
                    </div>
                  </div>
                  <a
                    href={manual.link}
                    className="ml-4 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Support Section */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            技術サポートが必要ですか？
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            製品の設定やトラブルシューティングについて、
            専門スタッフがサポートいたします
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              サポートに問い合わせる
            </Link>
            <a
              href="https://developer.xgrids.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              開発者ドキュメント
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}