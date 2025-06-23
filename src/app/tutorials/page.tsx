import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'チュートリアル - 操作ガイド・使い方動画 | UP HASH',
  description: 'Lixelシリーズの操作方法、活用事例、テクニックを動画で分かりやすく解説。初心者から上級者まで役立つチュートリアル集。',
}

const tutorialCategories = [
  {
    id: 'lixel-l2-pro',
    title: 'Lixel L2 Pro',
    icon: '🔧',
    tutorials: [
      {
        id: 'l2-pro-unboxing',
        title: '開封とクイックスタート',
        description: '製品開封から初回起動までの手順',
        duration: '10分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/l2-pro-unboxing.jpg',
        videoUrl: '#'
      },
      {
        id: 'l2-pro-initialization',
        title: '初期化',
        description: 'デバイスの初期設定とキャリブレーション',
        duration: '15分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/l2-pro-init.jpg',
        videoUrl: '#'
      },
      {
        id: 'l2-pro-standard-scan',
        title: '標準スキャン操作',
        description: '基本的なスキャン手順と操作方法',
        duration: '20分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/l2-pro-scan.jpg',
        videoUrl: '#'
      },
      {
        id: 'l2-pro-extension-pole',
        title: '延長ポールでのスキャン',
        description: '高所や届きにくい場所のスキャン方法',
        duration: '15分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/l2-pro-pole.jpg',
        videoUrl: '#'
      },
      {
        id: 'l2-pro-harness',
        title: 'ハーネスシステム',
        description: 'ハーネスを使用したハンズフリースキャン',
        duration: '12分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/l2-pro-harness.jpg',
        videoUrl: '#'
      },
      {
        id: 'l2-pro-cybercolor-guide',
        title: 'スキャンガイド（CyberColor）',
        description: 'CyberColor用の最適なスキャン方法',
        duration: '18分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/l2-pro-cybercolor.jpg',
        videoUrl: '#'
      }
    ]
  },
  {
    id: 'lixel-k1',
    title: 'Lixel K1',
    icon: '🎯',
    tutorials: [
      {
        id: 'k1-unboxing',
        title: '開封',
        description: '製品内容の確認と初期セットアップ',
        duration: '8分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/k1-unboxing.jpg',
        videoUrl: '#'
      },
      {
        id: 'k1-initialization',
        title: '初期化',
        description: 'K1の初期設定とキャリブレーション',
        duration: '12分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/k1-init.jpg',
        videoUrl: '#'
      },
      {
        id: 'k1-standard-scan',
        title: '標準スキャン操作',
        description: 'ハンドヘルドスキャンの基本操作',
        duration: '15分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/k1-scan.jpg',
        videoUrl: '#'
      },
      {
        id: 'k1-cybercolor-guide',
        title: 'スキャンガイド（CyberColor）',
        description: 'K1でのCyberColor最適化スキャン',
        duration: '15分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/k1-cybercolor.jpg',
        videoUrl: '#'
      }
    ]
  },
  {
    id: 'lixel-studio',
    title: 'Lixel Studio',
    icon: '💻',
    tutorials: [
      {
        id: 'studio-installation',
        title: 'インストールとアクティベーション',
        description: 'ソフトウェアのインストールとライセンス認証',
        duration: '10分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/studio-install.jpg',
        videoUrl: '#'
      },
      {
        id: 'studio-data-import',
        title: 'データの読み込みと表示',
        description: 'スキャンデータのインポートと基本表示',
        duration: '12分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/studio-import.jpg',
        videoUrl: '#'
      },
      {
        id: 'studio-interface',
        title: 'インターフェース',
        description: 'UI概要と各ツールの説明',
        duration: '15分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/studio-interface.jpg',
        videoUrl: '#'
      },
      {
        id: 'studio-processing',
        title: 'プロジェクト処理',
        description: '点群データの処理とエクスポート',
        duration: '20分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/studio-processing.jpg',
        videoUrl: '#'
      },
      {
        id: 'studio-panorama-mesh',
        title: 'パノラマとメッシュ合成',
        description: 'パノラマ画像とメッシュの生成',
        duration: '18分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/studio-panorama.jpg',
        videoUrl: '#'
      },
      {
        id: 'studio-map-fusion',
        title: 'マップフュージョン',
        description: '複数スキャンデータの統合',
        duration: '25分',
        difficulty: '上級',
        thumbnail: '/images/tutorials/studio-fusion.jpg',
        videoUrl: '#'
      },
      {
        id: 'studio-volume',
        title: '体積計算',
        description: '3Dデータからの体積測定',
        duration: '15分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/studio-volume.jpg',
        videoUrl: '#'
      },
      {
        id: 'studio-control-points',
        title: 'コントロールポイント変換',
        description: '座標系の変換と位置合わせ',
        duration: '20分',
        difficulty: '上級',
        thumbnail: '/images/tutorials/studio-control.jpg',
        videoUrl: '#'
      },
      {
        id: 'studio-cybercolor-guide',
        title: 'スキャンガイド（CyberColor）',
        description: 'CyberColor用データの準備',
        duration: '15分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/studio-cybercolor.jpg',
        videoUrl: '#'
      }
    ]
  },
  {
    id: 'lixel-cybercolor',
    title: 'Lixel CyberColor Studio',
    icon: '🎨',
    tutorials: [
      {
        id: 'lcc-quickstart',
        title: 'クイックスタート',
        description: 'LCC Studioの基本操作',
        duration: '10分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lcc-quickstart.jpg',
        videoUrl: '#'
      },
      {
        id: 'lcc-scan-guide',
        title: 'スキャンガイド',
        description: '最適なスキャン方法とテクニック',
        duration: '15分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lcc-scan.jpg',
        videoUrl: '#'
      },
      {
        id: 'lcc-map-fusion',
        title: 'マップフュージョン',
        description: '空地統合機能の活用',
        duration: '20分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/lcc-fusion.jpg',
        videoUrl: '#'
      },
      {
        id: 'lcc-avatar',
        title: 'アバター表示',
        description: 'アバターモードの設定と活用',
        duration: '8分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lcc-avatar.jpg',
        videoUrl: '#'
      },
      {
        id: 'lcc-ply-import',
        title: 'PLY読み込み',
        description: 'PLYファイルのインポートと変換',
        duration: '10分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lcc-ply.jpg',
        videoUrl: '#'
      },
      {
        id: 'lcc-measurement',
        title: '計測',
        description: '距離・面積・体積の測定',
        duration: '12分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/lcc-measure.jpg',
        videoUrl: '#'
      },
      {
        id: 'lcc-notes',
        title: 'ノート追加',
        description: '注釈とメモの追加方法',
        duration: '8分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lcc-notes.jpg',
        videoUrl: '#'
      },
      {
        id: 'lcc-pivot',
        title: 'ピボットモード',
        description: 'ピボット機能の使い方',
        duration: '10分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/lcc-pivot.jpg',
        videoUrl: '#'
      },
      {
        id: 'lcc-publish',
        title: '公開',
        description: 'プロジェクトの共有と公開',
        duration: '15分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/lcc-publish.jpg',
        videoUrl: '#'
      },
      {
        id: 'lcc-alignment',
        title: '位置合わせ',
        description: '座標系の調整と位置合わせ',
        duration: '18分',
        difficulty: '上級',
        thumbnail: '/images/tutorials/lcc-align.jpg',
        videoUrl: '#'
      },
      {
        id: 'lcc-settings',
        title: '設定',
        description: '詳細設定とカスタマイズ',
        duration: '10分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lcc-settings.jpg',
        videoUrl: '#'
      },
      {
        id: 'lcc-space-portal',
        title: 'スペースポータル',
        description: 'スペースポータル機能の活用',
        duration: '12分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/lcc-portal.jpg',
        videoUrl: '#'
      },
      {
        id: 'lcc-point-cloud',
        title: '点群表示切り替え',
        description: '表示モードとレンダリング設定',
        duration: '10分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lcc-pointcloud.jpg',
        videoUrl: '#'
      }
    ]
  },
  {
    id: 'lcc-viewer',
    title: 'LCC Viewer',
    icon: '👁️',
    tutorials: [
      {
        id: 'viewer-avatar',
        title: 'アバター表示',
        description: 'ビューアでのアバターモード',
        duration: '5分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/viewer-avatar.jpg',
        videoUrl: '#'
      },
      {
        id: 'viewer-ply',
        title: 'PLY読み込み',
        description: 'PLYファイルの表示',
        duration: '8分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/viewer-ply.jpg',
        videoUrl: '#'
      },
      {
        id: 'viewer-measurement',
        title: '計測',
        description: 'ビューアでの測定機能',
        duration: '10分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/viewer-measure.jpg',
        videoUrl: '#'
      },
      {
        id: 'viewer-notes',
        title: 'ノート追加',
        description: 'コメントと注釈の追加',
        duration: '6分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/viewer-notes.jpg',
        videoUrl: '#'
      },
      {
        id: 'viewer-pivot',
        title: 'ピボットモード',
        description: 'ビューアでのピボット操作',
        duration: '8分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/viewer-pivot.jpg',
        videoUrl: '#'
      },
      {
        id: 'viewer-alignment',
        title: '位置合わせ',
        description: 'ビューアでの位置調整',
        duration: '10分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/viewer-align.jpg',
        videoUrl: '#'
      },
      {
        id: 'viewer-settings',
        title: '設定',
        description: 'ビューア設定のカスタマイズ',
        duration: '5分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/viewer-settings.jpg',
        videoUrl: '#'
      },
      {
        id: 'viewer-portal',
        title: 'スペースポータル',
        description: 'ポータル機能の使い方',
        duration: '8分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/viewer-portal.jpg',
        videoUrl: '#'
      },
      {
        id: 'viewer-pointcloud',
        title: '点群表示切り替え',
        description: '表示モードの切り替え',
        duration: '6分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/viewer-pointcloud.jpg',
        videoUrl: '#'
      }
    ]
  },
  {
    id: 'lcc-revit',
    title: 'LCC for Revit',
    icon: '🏗️',
    tutorials: [
      {
        id: 'revit-plugin',
        title: 'Revit用LCCプラグインチュートリアル',
        description: 'RevitでのLCCデータ活用完全ガイド',
        duration: '30分',
        difficulty: '上級',
        thumbnail: '/images/tutorials/revit-plugin.jpg',
        videoUrl: '#'
      }
    ]
  },
  {
    id: 'lixel-go',
    title: 'Lixel GO',
    icon: '📱',
    tutorials: [
      {
        id: 'go-activation-scan',
        title: 'デバイスのアクティベーションとスキャン',
        description: 'Lixel GOアプリの初期設定とスキャン操作',
        duration: '15分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/go-activation.jpg',
        videoUrl: '#'
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
              Lixelシリーズの使い方を動画で分かりやすく解説。
              製品別・機能別に整理されたチュートリアルで効率的に学習できます。
            </p>
          </div>
        </div>
      </section>

      {/* Tutorial Categories */}
      {tutorialCategories.map((category, categoryIndex) => (
        <section
          key={category.id}
          className={`py-16 md:py-24 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <span className="text-4xl">{category.icon}</span>
                {category.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.tutorials.map((tutorial) => (
                <div
                  key={tutorial.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-gray-900/80 backdrop-blur-sm rounded-full p-6 hover:bg-gray-900/90 transition-colors cursor-pointer">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {tutorial.duration}
                    </div>
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded text-sm text-white ${
                      tutorial.difficulty === '初級' ? 'bg-green-600' :
                      tutorial.difficulty === '中級' ? 'bg-yellow-600' : 'bg-red-600'
                    }`}>
                      {tutorial.difficulty}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
                    <p className="text-gray-600">{tutorial.description}</p>
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