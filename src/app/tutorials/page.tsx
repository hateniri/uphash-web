'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

const tutorialCategories = [
  {
    id: 'lixel-l2-pro',
    title: 'Lixel L2 Pro',
    icon: '/images/logos/l2-pro-logo.png',
    tutorials: [
      {
        id: 'l2-pro-unboxing',
        title: '開封とクイックスタート',
        description: '製品開封から初回起動までの手順',
        duration: '10分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lixell2pro/001_Unboxing&Quick Start.jpg',
        videoUrl: '#'
      },
      {
        id: 'l2-pro-initialization',
        title: '初期化',
        description: 'デバイスの初期設定とキャリブレーション',
        duration: '15分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lixell2pro/002_Initialization.jpg',
        videoUrl: '#'
      },
      {
        id: 'l2-pro-standard-scan',
        title: '標準スキャン操作',
        description: '基本的なスキャン手順と操作方法',
        duration: '20分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lixell2pro/003_Standard operation.jpg',
        videoUrl: '#'
      },
      {
        id: 'l2-pro-extension-pole',
        title: '延長ポールでのスキャン',
        description: '高所や届きにくい場所のスキャン方法',
        duration: '15分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/lixell2pro/004_Scanning_With_Extension_Pole.jpg',
        videoUrl: '#'
      },
      {
        id: 'l2-pro-harness',
        title: 'ハーネスシステム',
        description: 'ハーネスを使用したハンズフリースキャン',
        duration: '12分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/lixell2pro/005_The_harness_system.jpg',
        videoUrl: '#'
      },
      {
        id: 'l2-pro-cybercolor-guide',
        title: 'スキャンガイド（CyberColor）',
        description: 'CyberColor用の最適なスキャン方法',
        duration: '18分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/lixell2pro/006_LCC Scanning Guide.jpg',
        videoUrl: '#'
      }
    ]
  },
  {
    id: 'lixel-k1',
    title: 'Lixel K1',
    icon: '/images/logos/k1-logo.png',
    tutorials: [
      {
        id: 'k1-unboxing',
        title: '開封',
        description: '製品内容の確認と初期セットアップ',
        duration: '8分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lixelk1/001_K1 Unboxing.jpg',
        videoUrl: '#'
      },
      {
        id: 'k1-initialization',
        title: '初期化',
        description: 'K1の初期設定とキャリブレーション',
        duration: '12分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lixelk1/002_Initialization.jpg',
        videoUrl: '#'
      },
      {
        id: 'k1-standard-scan',
        title: '標準スキャン操作',
        description: 'ハンドヘルドスキャンの基本操作',
        duration: '15分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lixelk1/003_Standard operation.jpg',
        videoUrl: '#'
      },
      {
        id: 'k1-cybercolor-guide',
        title: 'スキャンガイド（CyberColor）',
        description: 'K1でのCyberColor最適化スキャン',
        duration: '15分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/lixelk1/004_Scanning Guide.jpg',
        videoUrl: '#'
      }
    ]
  },
  {
    id: 'lixel-studio',
    title: 'Lixel Studio',
    icon: '/images/logos/lixel-studio-logo.png',
    tutorials: [
      {
        id: 'studio-installation',
        title: '001｜インストールとアクティベーション',
        description: 'ソフトウェアのインストールとライセンス認証',
        duration: '約3分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lixelstudio/001_Installation and activation.jpg',
        videoUrl: 'https://youtu.be/0JNvQC1UTCI'
      },
      {
        id: 'studio-data-import',
        title: '002｜データの読み込みと表示',
        description: 'スキャンデータのインポートと基本表示',
        duration: '約4分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lixelstudio/002_Loading and viewing data.jpg',
        videoUrl: 'https://youtu.be/NXZMmZ08rhg'
      },
      {
        id: 'studio-interface',
        title: '003｜インターフェースの紹介',
        description: 'UI概要と各ツールの説明',
        duration: '約2分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lixelstudio/003_ interface.jpg',
        videoUrl: 'https://youtu.be/k_6wz1cpgCQ'
      },
      {
        id: 'studio-processing',
        title: '004｜プロジェクトの処理手順',
        description: '点群データの処理とエクスポート',
        duration: '約8分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/lixelstudio/004_project_processing.jpg',
        videoUrl: 'https://youtu.be/ZBTMlYi_qH0'
      },
      {
        id: 'studio-panorama-mesh',
        title: '005｜パノラマ合成とメッシュ作成',
        description: 'パノラマ画像とメッシュの生成',
        duration: '約3分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/lixelstudio/005_panoramic_overlaya_nd_mesh.jpg',
        videoUrl: 'https://youtu.be/iLzexzgUsWU'
      },
      {
        id: 'studio-map-fusion',
        title: '006｜マップ融合（Map Fusion）',
        description: '複数スキャンデータの統合',
        duration: '約4分',
        difficulty: '上級',
        thumbnail: '/images/tutorials/lixelstudio/006_map_fusion.jpg',
        videoUrl: 'https://youtu.be/3MbKMzOfX9I'
      },
      {
        id: 'studio-volume',
        title: '007｜体積計算（Volume Calculation）',
        description: '3Dデータからの体積測定',
        duration: '約3分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/lixelstudio/007_volume calculation.jpg',
        videoUrl: 'https://youtu.be/MpuAvjcr8sY'
      },
      {
        id: 'studio-volume-alt',
        title: '008｜体積計算（別手法）',
        description: '別アプローチでの体積測定',
        duration: '約2分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/lixelstudio/008_Colume Calculation.jpg',
        videoUrl: 'https://youtu.be/YWctpF2MJjs'
      },
      {
        id: 'studio-control-points',
        title: '009｜コントロールポイント変換',
        description: '座標系の変換と位置合わせ',
        duration: '約3分',
        difficulty: '上級',
        thumbnail: '/images/tutorials/lixelstudio/009_Control Point Transformation.jpg',
        videoUrl: 'https://youtu.be/A6NL6KXXO_Q'
      }
    ]
  },
  {
    id: 'lixel-cybercolor',
    title: 'Lixel CyberColor Studio',
    icon: '/images/logos/lcc-studio-logo.png',
    tutorials: [
      {
        id: 'lcc-quickstart',
        title: 'クイックスタート',
        description: 'LCC Studioの基本操作',
        duration: '10分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lixelcybercolor/001_LCC quick start.jpg',
        videoUrl: '#'
      },
      {
        id: 'lcc-scan-guide',
        title: 'スキャンガイド',
        description: '最適なスキャン方法とテクニック',
        duration: '15分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lixelcybercolor/Scanning Guide.jpg',
        videoUrl: '#'
      },
      {
        id: 'lcc-map-fusion',
        title: 'マップフュージョン',
        description: '空地統合機能の活用',
        duration: '20分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/lixelcybercolor/002_LCC map fusion.jpg',
        videoUrl: '#'
      },
      {
        id: 'lcc-avatar',
        title: 'アバター表示',
        description: 'アバターモードの設定と活用',
        duration: '8分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lixelcybercolor/lcc studio_avatar.jpg',
        videoUrl: '#'
      },
      {
        id: 'lcc-ply-import',
        title: 'PLY読み込み',
        description: 'PLYファイルのインポートと変換',
        duration: '10分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lixelcybercolor/lcc studio_input ply.jpg',
        videoUrl: '#'
      },
      {
        id: 'lcc-measurement',
        title: '計測',
        description: '距離・面積・体積の測定',
        duration: '12分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/lixelcybercolor/lcc studio_measure.jpg',
        videoUrl: '#'
      },
      {
        id: 'lcc-notes',
        title: 'ノート追加',
        description: '注釈とメモの追加方法',
        duration: '8分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lixelcybercolor/lcc studio_notes.jpg',
        videoUrl: '#'
      },
      {
        id: 'lcc-pivot',
        title: 'ピボットモード',
        description: 'ピボット機能の使い方',
        duration: '10分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/lixelcybercolor/lcc studio_pivot mode.jpg',
        videoUrl: '#'
      },
      {
        id: 'lcc-publish',
        title: '公開',
        description: 'プロジェクトの共有と公開',
        duration: '15分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/lixelcybercolor/lcc studio_publish.jpg',
        videoUrl: '#'
      },
      {
        id: 'lcc-alignment',
        title: '位置合わせ',
        description: '座標系の調整と位置合わせ',
        duration: '18分',
        difficulty: '上級',
        thumbnail: '/images/tutorials/lixelcybercolor/lcc studio_relocate.jpg',
        videoUrl: '#'
      },
      {
        id: 'lcc-settings',
        title: '設定',
        description: '詳細設定とカスタマイズ',
        duration: '10分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lixelcybercolor/lcc studio_setting.jpg',
        videoUrl: '#'
      },
      {
        id: 'lcc-space-portal',
        title: 'スペースポータル',
        description: 'スペースポータル機能の活用',
        duration: '12分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/lixelcybercolor/lcc studio_space porta.jpg',
        videoUrl: '#'
      },
      {
        id: 'lcc-point-cloud',
        title: '点群表示切り替え',
        description: '表示モードとレンダリング設定',
        duration: '10分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lixelcybercolor/lcc studio_switch to point cloud.jpg',
        videoUrl: '#'
      }
    ]
  },
  {
    id: 'lcc-viewer',
    title: 'LCC Viewer',
    icon: '/images/logos/lcc-viewer-logo.png',
    tutorials: [
      {
        id: 'viewer-avatar',
        title: 'アバター表示',
        description: 'ビューアでのアバターモード',
        duration: '5分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lccviewer/lcc viewer_avatar.jpg',
        videoUrl: '#'
      },
      {
        id: 'viewer-ply',
        title: 'PLY読み込み',
        description: 'PLYファイルの表示',
        duration: '8分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lccviewer/lcc viewer_input ply.jpg',
        videoUrl: '#'
      },
      {
        id: 'viewer-measurement',
        title: '計測',
        description: 'ビューアでの測定機能',
        duration: '10分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lccviewer/lcc viewer_measure.jpg',
        videoUrl: '#'
      },
      {
        id: 'viewer-notes',
        title: 'ノート追加',
        description: 'コメントと注釈の追加',
        duration: '6分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lccviewer/lcc viewer_notes.jpg',
        videoUrl: '#'
      },
      {
        id: 'viewer-pivot',
        title: 'ピボットモード',
        description: 'ビューアでのピボット操作',
        duration: '8分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lccviewer/lcc viewer_pivot mode.jpg',
        videoUrl: '#'
      },
      {
        id: 'viewer-alignment',
        title: '位置合わせ',
        description: 'ビューアでの位置調整',
        duration: '10分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/lccviewer/lcc viewer_relocate.jpg',
        videoUrl: '#'
      },
      {
        id: 'viewer-settings',
        title: '設定',
        description: 'ビューア設定のカスタマイズ',
        duration: '5分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lccviewer/lcc viewer_setting.jpg',
        videoUrl: '#'
      },
      {
        id: 'viewer-portal',
        title: 'スペースポータル',
        description: 'ポータル機能の使い方',
        duration: '8分',
        difficulty: '中級',
        thumbnail: '/images/tutorials/lccviewer/lcc viewer_space portal.jpg',
        videoUrl: '#'
      },
      {
        id: 'viewer-pointcloud',
        title: '点群表示切り替え',
        description: '表示モードの切り替え',
        duration: '6分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lccviewer/lcc viewer_switch to point cloud.jpg',
        videoUrl: '#'
      }
    ]
  },
  {
    id: 'lcc-revit',
    title: 'LCC for Revit',
    icon: '/images/logos/revit-logo.png',
    tutorials: [
      {
        id: 'revit-plugin',
        title: 'Revit用LCCプラグインチュートリアル',
        description: 'RevitでのLCCデータ活用完全ガイド',
        duration: '30分',
        difficulty: '上級',
        thumbnail: '/images/tutorials/revit/lcc for revit tutorial.jpg',
        videoUrl: '#'
      }
    ]
  },
  {
    id: 'lixel-go',
    title: 'Lixel GO',
    icon: '/images/logos/lixel-go-logo.png',
    tutorials: [
      {
        id: 'go-activation-scan',
        title: 'デバイスのアクティベーションとスキャン',
        description: 'Lixel GOアプリの初期設定とスキャン操作',
        duration: '15分',
        difficulty: '初級',
        thumbnail: '/images/tutorials/lixelgo/001_Device activation and scanning.jpg',
        videoUrl: '#'
      }
    ]
  }
]

export default function TutorialsPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  
  // YouTubeのvideo IDを抽出する関数
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&\n?#]+)/)
    return match ? match[1] : null
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${getImagePath('/images/banner.png')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15
          }}
        />
        <div className="relative z-10 bg-gradient-to-br from-purple-50/90 to-white/90 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                チュートリアル
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Lixelシリーズの使い方を動画で分かりやすく解説。
                製品別・機能別に整理されたチュートリアルで効率的に学習できます。
                <br />
                <span className="text-lg">
                  弊社のAI技術により、英語の動画を日本語に翻訳して随時アップロード予定です。
                </span>
              </p>
            </div>
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
              <h2 className="text-3xl font-bold flex items-center gap-4">
                <img 
                  src={getImagePath(category.icon)} 
                  alt={category.title}
                  className="w-12 h-12 object-contain"
                />
                {category.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.tutorials.map((tutorial) => {
                const videoId = getYouTubeId(tutorial.videoUrl)
                return (
                  <div
                    key={tutorial.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                    onClick={() => setSelectedVideo(tutorial.videoUrl)}
                  >
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video bg-gray-200">
                      <img
                        src={getImagePath(tutorial.thumbnail)}
                        alt={tutorial.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // YouTubeのサムネイルにフォールバック
                          if (videoId) {
                            e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
                            e.currentTarget.onerror = () => {
                              e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                            }
                          }
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-gray-900/80 backdrop-blur-sm rounded-full p-6 hover:bg-gray-900/90 transition-colors">
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
                )
              })}
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

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 bg-gray-900/70 hover:bg-gray-900 text-white rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeId(selectedVideo)}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  )
}