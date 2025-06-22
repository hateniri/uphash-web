import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'チュートリアル - 操作ガイド・使い方動画 | UP HASH',
  description: 'Lixelシリーズの操作方法、活用事例、テクニックを動画で分かりやすく解説。初心者から上級者まで役立つチュートリアル集。',
}

const tutorials = [
  {
    category: '基本操作',
    videos: [
      {
        title: 'Lixel L2 Pro 初期設定ガイド',
        description: '開封から初回起動まで、L2 Proの基本セットアップを解説',
        videoId: 'dQw4w9WgXcQ', // YouTube video ID placeholder
        duration: '10:24'
      },
      {
        title: 'Lixel GO アプリの使い方',
        description: 'モバイルアプリでスキャナーを操作する方法',
        videoId: 'dQw4w9WgXcQ',
        duration: '8:15'
      },
      {
        title: 'RTKの設定と接続方法',
        description: 'RTKモジュールの接続と高精度測位の設定',
        videoId: 'dQw4w9WgXcQ',
        duration: '12:30'
      }
    ]
  },
  {
    category: 'スキャニング技術',
    videos: [
      {
        title: '効率的なスキャンパスの計画',
        description: '大規模エリアを効率よくスキャンするテクニック',
        videoId: 'dQw4w9WgXcQ',
        duration: '15:20'
      },
      {
        title: '困難な環境でのスキャニング',
        description: '暗所、反射面、狭所でのスキャンのコツ',
        videoId: 'dQw4w9WgXcQ',
        duration: '18:45'
      },
      {
        title: 'ループクロージャーの最適化',
        description: 'SLAMアルゴリズムを最大限に活用する方法',
        videoId: 'dQw4w9WgXcQ',
        duration: '11:10'
      }
    ]
  },
  {
    category: 'データ処理',
    videos: [
      {
        title: 'Lixel Studioの基本操作',
        description: '点群データの表示、編集、エクスポート',
        videoId: 'dQw4w9WgXcQ',
        duration: '20:30'
      },
      {
        title: 'Lixel Cyber Colorでの3D再構築',
        description: 'スキャンデータから高品質3Dモデルを作成',
        videoId: 'dQw4w9WgXcQ',
        duration: '25:15'
      },
      {
        title: '測量データの後処理ワークフロー',
        description: 'CADやBIMへのデータ変換プロセス',
        videoId: 'dQw4w9WgXcQ',
        duration: '16:40'
      }
    ]
  },
  {
    category: '活用事例',
    videos: [
      {
        title: '建設現場での進捗管理',
        description: '定期的なスキャンによる工事進捗の可視化',
        videoId: 'dQw4w9WgXcQ',
        duration: '22:00'
      },
      {
        title: '文化財のデジタルアーカイブ',
        description: '遺跡や美術品の高精度3D記録',
        videoId: 'dQw4w9WgXcQ',
        duration: '19:30'
      },
      {
        title: '不動産バーチャルツアーの作成',
        description: '物件の3Dスキャンからバーチャルツアーまで',
        videoId: 'dQw4w9WgXcQ',
        duration: '14:20'
      }
    ]
  }
]

export default function TutorialsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              チュートリアル
            </h1>
            <p className="text-xl text-gray-600">
              Lixelシリーズの使い方を動画で分かりやすく解説
            </p>
          </div>
        </div>
      </section>

      {/* Tutorial Categories */}
      {tutorials.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-16 md:py-24 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.videos.map((video, videoIndex) => (
                <div
                  key={videoIndex}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* YouTube Embed Placeholder */}
                  <div className="relative aspect-video bg-gray-200">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                    <p className="text-gray-600 mb-3">{video.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{video.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Resource Section */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            さらに詳しく学ぶ
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            PDFマニュアルやサンプルデータもご用意しています
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/downloads"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              ダウンロードページへ
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              トレーニングを申し込む
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}