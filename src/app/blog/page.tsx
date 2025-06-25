import { Metadata } from 'next'
import Link from 'next/link'
import { getImagePath } from '@/lib/utils'
import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'ブログ - 最新技術情報',
  description: 'Xgrids社の最新技術情報、製品アップデート、業界トレンドを日本語でお届けします。',
  path: '/blog',
  keywords: ['ブログ', '技術情報', '製品アップデート', '業界トレンド', '3Dスキャニング']
})

const blogPosts = [
  {
    id: 'lixel-studio-3-3-1-release',
    title: 'LixelStudio 3.3.1 & L2 Pro / K1 ファームウェア3.0 リリースのお知らせ',
    date: '2025-06-25',
    category: '製品発表',
    excerpt: '最新バージョンのLixelStudio 3.3.1と、Lixel L2 Pro / K1用のファームウェア3.0が正式リリースされました。点群の品質向上と作業効率の大幅な改善が実現されています。',
    image: '/images/blog/lixel-studio-release/image_001.webp',
    originalUrl: 'https://xgrids.com/support/download?page=LixelStudio'
  },
  {
    id: '3dgs-best-practices',
    title: '3D Gaussian Splatting（3DGS）の実践活用とベストプラクティス',
    date: '2025-06-25',
    category: '技術解説',
    excerpt: '最新の3Dビジュアライゼーション手法3DGSの技術比較、映画制作・バーチャルプロダクション・文化財保存での活用事例、実装のベストプラクティスを専門家の知見と共に徹底解説。',
    image: '/images/blog/3dgs-best-practices/image_001.webp',
    originalUrl: 'https://xgrids.com'
  },
  {
    id: 'turkish-hybrid-lidar-workflow',
    title: 'トルコ測量会社、ハンドヘルドと地上型LiDARを組み合わせた高速プロジェクト納品を実現',
    date: '2025-06-20',
    category: '導入事例',
    excerpt: 'Atlıhan Surveying Engineering社がLixel L2 ProとLeica RTC360を組み合わせたハイブリッドワークフローで、3Dドキュメント作成時間を数日から数時間へ短縮。7分で1,000㎡を記録し、実用的な2〜3cm精度を実現。',
    image: '/images/blog/turkish-hybrid-workflow/image_000.webp',
    originalUrl: 'https://www.xgrids.com/blog/turkish-surveying-firm-combines-handheld-and-terrestrial-lidar'
  },
  {
    id: 'lcc-for-revit-announcement',
    title: '業界初：XGRIDS、Autodesk DevCon Europe 2025にてRevit向けAI搭載「LCC for Revit」プラグインを発表',
    date: '2025-05-21',
    category: '製品発表',
    excerpt: 'BIMモデリングを70〜90%高速化、センチメートル単位の精度で現場からRevitにリアルタイム連携。SLAMベースの3D Gaussian Splatting技術をAutodesk Revitワークフローに直接統合。',
    image: '/images/blog/optimized/lcc-for-revit.webp',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=120'
  },
  {
    id: 'skender-construction-workflow',
    title: '仮想現場が変える建設業務：Skender社のフォトリアリスティックかつ測定可能な施工ドキュメント化ワークフロー',
    date: '2025-05-16',
    category: '導入事例',
    excerpt: '建設現場のデジタル化で作業時間を最大97%削減。Skender社がXGRIDSのK1・L2 Proを活用し、リアルタイムで共有可能な3Dモデルによる革新的なワークフローを確立。',
    image: '/images/blog/skender-workflow/construction-site-measurements.webp',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=86'
  },
  {
    id: 'virtual-preproduction',
    title: 'バーチャル・プリプロダクションの未来：XGRIDS × Global Objects',
    date: '2025-05-12',
    category: 'ケーススタディ',
    excerpt: '映像制作におけるロケスキャンと3Dプリビズの革新。XGRIDSのLixelスキャナーとGlobal Objectsの事例を紹介します。',
    image: '/images/blog/optimized/virtual-preproduction-single.webp',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=109'
  },
  {
    id: 'mining-digital-twin',
    title: '地下100メートルでのデジタルツイン：高精度3Dマッピングが鉱山作業を変革する',
    date: '2025-03-13',
    category: '導入事例',
    excerpt: '中国・広東省の石灰岩鉱山で、Lixel L2 ProのMulti-SLAM技術により垂直100m超の坑道や地下河川を含む危険地帯の完全な3Dデジタルツインを実現。測量時間80%短縮と±4.8mmの高精度を達成。',
    image: '/images/blog/optimized/mining-digital-twin-hero.webp',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=96'
  },
  {
    id: 'underground-utility-corridor',
    title: '都市の「ライフライン」を可視化：Lixel L2 Proが全長8kmの地下管路調査を支援',
    date: '2025-02-21',
    category: '導入事例',
    excerpt: '中国・寧波市の全長8km地下管路において、Lixel L2 Proによる高精度3Dマッピングを実施。狭小空間での効率的な測量と、CADへのシームレスな連携を実現しました。',
    image: '/images/blog/optimized/underground-survey-main.webp',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=123'
  },
  {
    id: 'submarine-tunnel-revolution',
    title: '世界最長の海底トンネル建設を支える3Dスキャン革命：Lixel L2 Proの挑戦',
    date: '2025-02-13',
    category: '導入事例',
    excerpt: '海面下115.4mの極限環境で世界記録を樹立。中国・青島の膠州湾第二海底トンネルにおいて、Lixel L2 Proがリアルタイム×2cm精度×省力化を同時に実現し、インフラ測量の新時代を切り開きました。',
    image: '/images/blog/submarine-tunnel/underground-001.webp',
    originalUrl: 'https://www.xgrids.com/insights/breaking-depth-records-lixel-l2'
  },
  {
    id: 'mexico-digital-conservation',
    title: 'メキシコの秘境を守るデジタル保存技術',
    date: '2025-05-12',
    category: 'ケーススタディ',
    excerpt: 'メキシコ・ベラクルス州の熱帯雨林における滝群を、Lixel K1スキャナーで高精度3Dデータ化。ArquiaVisとの協業により、環境保全と文化継承を実現する革新的なアプローチを紹介します。',
    image: '/images/blog/mexico-conservation/Arquiavis_Veracruz_Waterfall001.webp',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=110'
  },
  {
    id: '3d-gaussian-splatting-webinar',
    title: '3D技術の未来を探る：「3D Gaussian Splatting」ウェビナーの注目ポイント10選',
    date: '2024-12-30',
    category: 'イベント',
    excerpt: 'XGRIDSのMindy Li氏らが登壇した3DGSとSLAM技術に関するウェビナーから、映画制作、都市計画、建設業界における革新的な活用事例と最新トレンドを紹介します。',
    image: '/images/blog/optimized/3dgs-webinar-main.webp',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=68'
  },
  {
    id: 'slam-gaussian-splatting',
    title: 'SLAM × Gaussian Splatting が切り拓く3Dインタラクティブ体験の未来',
    date: '2024-11-13',
    category: '技術トレンド',
    excerpt: 'リアルタイムSLAMと3D Gaussian Splattingの融合により、高品質な3Dインタラクティブ体験が現実に。Lixel CyberColorの革新的技術と実践的活用事例を紹介。',
    image: '/images/blog/slam-gaussian-splatting/image_001.webp',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=108'
  },
  {
    id: 'lithium-mica-measurement-revolution',
    title: 'リチウム雲母の山積測定に革命を──Lixel携帯型スキャンシステムの導入事例',
    date: '2024-12-27',
    category: '導入事例',
    excerpt: '中国のリチウム工場でLixelスキャンシステムを導入し、山積測定の効率化と高精度化を実現。最長90分のスキャンでセンチメートル単位の精度を達成し、生産計画の最適化に貢献。',
    image: '/images/blog/lithium-measurement/image_001.webp',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=105'
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ブログ
            </h1>
            <p className="text-xl text-gray-300">
              Xgrids社の最新技術情報、製品アップデート、業界トレンドを日本語でお届けします
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="relative aspect-video bg-gray-200">
                    <img
                      src={getImagePath(post.image)}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                    <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                    >
                      続きを読む
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <a
                      href={post.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 text-sm"
                    >
                      原文を見る
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}