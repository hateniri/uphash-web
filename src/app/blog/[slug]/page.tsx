import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// ブログ記事のデータ
const blogPosts = {
  'lixel-l1-centimeter-accuracy': {
    title: 'Lixel L1ハンドヘルドスキャナー：センチメートル級精度を実現する革新的技術',
    date: '2024-12-20',
    category: '製品技術',
    author: 'Xgrids Team',
    image: '/images/blog/lixel-l1-accuracy.jpg',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=114',
    content: `
      <p>3D空間データの取得は、建設、測量、文化財保護、都市計画など、様々な分野で重要性を増しています。XGRIDSが開発したLixel L1ハンドヘルドスキャナーは、プロフェッショナルグレードの精度と使いやすさを両立させた革新的な製品です。</p>

      <h2>Lixel L1の主要技術仕様</h2>
      
      <h3>高精度スキャニング性能</h3>
      <p>Lixel L1は以下の優れた技術仕様を持っています：</p>
      <ul>
        <li><strong>相対精度</strong>: ±1.2cm</li>
        <li><strong>再現性</strong>: ≤2cm</li>
        <li><strong>スキャン速度</strong>: 毎秒320,000点</li>
        <li><strong>動作時間</strong>: 1.5時間（46.8Whバッテリー）</li>
        <li><strong>ストレージ容量</strong>: 1TB</li>
        <li><strong>カメラ数</strong>: 4台</li>
        <li><strong>消費電力</strong>: 30W</li>
      </ul>
      <p>これらの仕様により、Lixel L1は複雑な環境でも高精度な3Dデータを効率的に取得することができます。</p>

      <h2>革新的な技術特徴</h2>

      <h3>1. リアルタイムSLAM技術</h3>
      <p>Lixel L1は最先端のSLAM（Simultaneous Localization and Mapping）技術を搭載しています。これにより、GPSが利用できない屋内環境でも正確な位置推定と地図作成が可能です。</p>

      <h3>2. マルチセンサー融合</h3>
      <p>4台のカメラとLiDARセンサーを統合することで、より豊富な空間情報を取得できます。この技術により、単なる点群データだけでなく、色情報を含む高品質な3Dモデルの生成が可能になります。</p>

      <h3>3. 高速データ処理</h3>
      <p>毎秒32万点という高速スキャン性能により、大規模な空間でも短時間でデータ取得が完了します。これは従来の静的スキャナーと比較して、作業効率を大幅に向上させます。</p>

      <h2>実際の活用事例</h2>

      <h3>建設現場での進捗管理</h3>
      <p>建設プロジェクトでは、Lixel L1を使用して定期的に現場をスキャンし、設計図面との比較を行います。±1.2cmの精度により、施工誤差を早期に発見し、修正コストを削減できます。</p>

      <h3>文化財のデジタルアーカイブ</h3>
      <p>歴史的建造物や文化財の3Dデータ化において、Lixel L1の高精度スキャニングは貴重な記録を残すことができます。特に、アクセスが困難な場所でもハンドヘルド型の利点を活かして詳細なデータ取得が可能です。</p>

      <h3>工場・倉庫の最適化</h3>
      <p>製造業や物流業界では、Lixel L1を使用して既存施設の正確な3Dモデルを作成し、レイアウトの最適化や設備更新の計画に活用しています。</p>

      <h2>競合製品との比較</h2>
      <p>Lixel L1の±1.2cmという相対精度は、同クラスのハンドヘルドスキャナーの中でもトップレベルです。また、1.5時間という長時間動作と1TBの大容量ストレージにより、大規模プロジェクトでも途中でバッテリー交換やデータ転送の必要がありません。</p>

      <h2>導入のメリット</h2>
      <ol>
        <li><strong>作業時間の短縮</strong>: 従来の測量方法と比較して、データ取得時間を最大80%削減</li>
        <li><strong>人的エラーの削減</strong>: 自動化されたスキャニングプロセスにより、測定ミスを最小化</li>
        <li><strong>安全性の向上</strong>: 危険な場所への立ち入りを最小限に抑えながらデータ取得が可能</li>
        <li><strong>ROIの向上</strong>: 初期投資は高額ですが、作業効率の向上により短期間で投資回収が可能</li>
      </ol>

      <h2>今後の展望</h2>
      <p>XGRIDSは継続的にLixel L1のソフトウェアアップデートを提供しており、AIを活用した自動物体認識機能や、クラウドベースのデータ処理サービスなど、新機能の追加が予定されています。</p>

      <p>また、5G通信技術との統合により、リアルタイムでのデータ転送と遠隔協業が可能になることで、さらなる活用シーンの拡大が期待されています。</p>

      <h2>まとめ</h2>
      <p>Lixel L1ハンドヘルドスキャナーは、センチメートル級の精度と優れた操作性を兼ね備えた、プロフェッショナル向けの3Dスキャニングソリューションです。建設、測量、文化財保護など、様々な分野での活用が進んでおり、デジタルトランスフォーメーションを推進する重要なツールとなっています。</p>

      <p>高精度な3D空間データの取得をお考えの方は、ぜひLixel L1の導入をご検討ください。詳細な仕様や価格については、お気軽にお問い合わせください。</p>
    `
  },
  'lixel-go-1-1-9': {
    title: 'Lixel Go 1.1.9リリース - 3D空間データ取得がさらに簡単に',
    date: '2024-12-13',
    category: 'ソフトウェアアップデート',
    author: 'Xgrids Team',
    image: '/images/blog/lixel-go-119.jpg',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=114',
    content: `
      <p>Lixel Goの最新バージョン1.1.9がリリースされました。このアップデートにより、フィールドでの3D空間データ取得がより効率的で使いやすくなりました。</p>

      <h2>主な新機能と改善点</h2>
      
      <h3>1. ユーザーインターフェースの改善</h3>
      <p>スキャン開始から完了までのワークフローを見直し、より直感的な操作が可能になりました。新しいクイックアクセスメニューにより、頻繁に使用する機能への素早いアクセスが実現しています。</p>

      <h3>2. リアルタイムプレビューの強化</h3>
      <p>スキャン中のリアルタイムプレビューがさらに高速化され、点群データの品質を即座に確認できるようになりました。これにより、撮り直しの必要性を現場で判断でき、作業効率が大幅に向上します。</p>

      <h3>3. バッテリー管理の最適化</h3>
      <p>電力消費を最適化し、前バージョンと比較して約15%長い動作時間を実現しました。長時間のフィールドワークでも安心して使用できます。</p>

      <h3>4. データ同期の高速化</h3>
      <p>スキャナーとモバイルデバイス間のデータ転送速度が向上し、大容量の点群データも迅速に同期できるようになりました。</p>

      <h2>互換性について</h2>
      <p>Lixel Go 1.1.9は以下のデバイスに対応しています：</p>
      <ul>
        <li>Lixel L2 Pro（全モデル）</li>
        <li>Lixel K1</li>
        <li>Android 12以降</li>
        <li>iOS 15以降</li>
      </ul>

      <h2>アップデート方法</h2>
      <p>Google PlayストアまたはApp Storeから最新版をダウンロードしてください。既存のユーザーは自動アップデート通知を受け取ることができます。</p>

      <p>このアップデートは、ユーザーからのフィードバックを基に開発されました。今後も継続的な改善を行い、より使いやすい製品を提供してまいります。</p>
    `
  },
  'vietnam-urbanization': {
    title: 'ベトナムにおける急速な都市化とスマートシティ開発',
    date: '2024-10-18',
    category: '市場動向',
    author: 'Xgrids Team',
    image: '/images/blog/vietnam-urbanization.jpg',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=96',
    content: `
      <p>ベトナムは東南アジアで最も急速に都市化が進む国の一つです。2045年までに都市化率は57%に達すると予測されており、この変化は建設業界と都市計画に大きな影響を与えています。</p>

      <h2>ベトナムの都市化の現状</h2>
      <p>現在、ベトナムの都市人口は約3,800万人で、全人口の約39%を占めています。主要都市であるホーチミン市とハノイには、それぞれ900万人以上が居住しており、急速な人口増加により、インフラ整備が急務となっています。</p>

      <h3>都市開発の課題</h3>
      <ul>
        <li><strong>インフラの老朽化</strong>：既存の都市インフラは急速な人口増加に対応できていません</li>
        <li><strong>交通渋滞</strong>：都市部での深刻な交通問題が経済活動に影響を与えています</li>
        <li><strong>環境問題</strong>：大気汚染と水質汚染が市民の健康を脅かしています</li>
        <li><strong>住宅不足</strong>：手頃な価格の住宅供給が需要に追いついていません</li>
      </ul>

      <h2>スマートシティ・ソリューション</h2>
      <p>これらの課題に対応するため、ベトナム政府は2030年までに全国で少なくとも3つのスマートシティを建設する計画を発表しました。</p>

      <h3>3D都市モデリングの活用</h3>
      <p>Xgridsの3Dスキャニング技術は、以下の分野でスマートシティ開発に貢献しています：</p>
      
      <ul>
        <li><strong>都市計画</strong>：高精度な3D都市モデルにより、より効果的な都市設計が可能に</li>
        <li><strong>インフラ管理</strong>：既存インフラの3Dデジタルツインを作成し、保守管理を効率化</li>
        <li><strong>災害対策</strong>：洪水シミュレーションや避難経路計画に3Dデータを活用</li>
        <li><strong>建設プロジェクト管理</strong>：BIM統合により、建設プロジェクトの効率を向上</li>
      </ul>

      <h2>成功事例：ホーチミン市のスマート交通システム</h2>
      <p>ホーチミン市では、3D都市モデルを活用したスマート交通管理システムを導入しました。LiDARセンサーとAI分析により、リアルタイムで交通流を最適化し、渋滞を15%削減することに成功しています。</p>

      <h2>今後の展望</h2>
      <p>ベトナムの都市化は今後も加速すると予想されます。持続可能な都市開発のためには、最新のデジタル技術の活用が不可欠です。Xgridsは、3Dスキャニング技術とスマートシティソリューションを通じて、ベトナムの都市化の課題解決に貢献していきます。</p>
    `
  },
  'construction-tech-expo': {
    title: '建設技術博覧会2024 - デジタル建設の未来を展示',
    date: '2024-09-05',
    category: 'イベント',
    author: 'Xgrids Team',
    image: '/images/blog/construction-expo.jpg',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=74',
    content: `
      <p>2024年9月5日から7日まで開催された建設技術博覧会2024において、Xgridsは最新の3Dスキャニング技術とBIM統合ソリューションを発表し、大きな注目を集めました。</p>

      <h2>展示ハイライト</h2>

      <h3>1. Lixel L2 Pro 32/300の実演デモ</h3>
      <p>会場では、最新モデルLixel L2 Pro 32/300を使用した大規模施設のリアルタイムスキャンデモを実施しました。300メートルの長距離スキャン能力と、1秒間に64万点の高速データ取得により、来場者から高い評価を受けました。</p>

      <h3>2. AI駆動の点群処理技術</h3>
      <p>新しいAIアルゴリズムにより、スキャンと同時に不要なオブジェクト（人や車両など）を自動除去し、クリーンな建築データのみを抽出する技術を披露しました。これにより、後処理時間を80%削減できることを実証しました。</p>

      <h3>3. BIM統合ワークフロー</h3>
      <p>スキャンデータから自動的にBIMモデルを生成する革新的なワークフローを紹介しました。RevitやAutoCADとのシームレスな連携により、設計から施工までの全プロセスを効率化します。</p>

      <h2>業界の反響</h2>
      <p>3日間の展示期間中、1,500名以上の建設業界関係者が当社ブースを訪問しました。特に以下の点で高い関心が寄せられました：</p>

      <ul>
        <li><strong>施工精度の向上</strong>：ミリメートル単位の精度により、施工ミスを大幅に削減</li>
        <li><strong>工期短縮</strong>：従来の測量方法と比較して、作業時間を75%短縮</li>
        <li><strong>安全性の向上</strong>：危険な場所での測量作業を最小限に抑制</li>
        <li><strong>コスト削減</strong>：再作業の削減により、プロジェクトコストを20%削減</li>
      </ul>

      <h2>パートナーシップの発表</h2>
      <p>博覧会では、大手建設会社3社との戦略的パートナーシップを発表しました。これらの企業は、今後のプロジェクトでXgridsの技術を標準採用することを決定しています。</p>

      <h2>技術セミナーの開催</h2>
      <p>展示と並行して、「デジタル建設の未来」と題した技術セミナーを開催しました。200名を超える参加者に対し、以下のトピックについて講演を行いました：</p>

      <ul>
        <li>3Dスキャニング技術の最新動向</li>
        <li>建設DXの成功事例</li>
        <li>ROI最大化のための導入戦略</li>
        <li>将来の技術ロードマップ</li>
      </ul>

      <h2>今後の展開</h2>
      <p>建設技術博覧会での成功を受け、Xgridsは今後も革新的な技術開発を続けていきます。2025年には、さらに高性能な新製品の発表を予定しており、建設業界のデジタル変革をリードしていく所存です。</p>
    `
  },
  'lidar-mapping-innovation': {
    title: 'LiDARマッピング技術の革新 - 精度と効率の新基準',
    date: '2024-08-22',
    category: '技術解説',
    author: 'Xgrids Team',
    image: '/images/blog/lidar-innovation.jpg',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=68',
    content: `
      <p>LiDAR（Light Detection and Ranging）技術は、過去10年間で劇的な進化を遂げました。最新のLiDAR技術により、従来の5倍の速度で高精度な3Dマッピングが可能になり、建設、測量、都市計画など幅広い分野での活用が進んでいます。</p>

      <h2>LiDAR技術の進化</h2>

      <h3>第1世代：静的スキャニング（2000年代）</h3>
      <p>初期のLiDARシステムは、固定された位置から周囲をスキャンする静的な装置でした。高精度でしたが、複数の位置からスキャンを行い、後でデータを統合する必要があり、非常に時間がかかりました。</p>

      <h3>第2世代：モバイルマッピング（2010年代）</h3>
      <p>車両や航空機に搭載されたLiDARシステムが登場し、移動しながらのスキャンが可能になりました。しかし、高価で大型の機器が必要でした。</p>

      <h3>第3世代：ハンドヘルドSLAM（2020年代）</h3>
      <p>SLAM（Simultaneous Localization and Mapping）技術とLiDARの融合により、手持ちサイズのスキャナーでリアルタイム3Dマッピングが実現しました。</p>

      <h2>最新技術の特徴</h2>

      <h3>1. マルチセンサーフュージョン</h3>
      <p>LiDAR、カメラ、IMU（慣性計測装置）のデータを統合し、より正確で詳細な3Dモデルを生成します。各センサーの長所を組み合わせることで、従来の単一センサーシステムの限界を克服しています。</p>

      <h3>2. AI駆動の点群処理</h3>
      <p>機械学習アルゴリズムにより、点群データから自動的に：</p>
      <ul>
        <li>オブジェクトの分類（建物、樹木、道路など）</li>
        <li>ノイズの除去</li>
        <li>欠損データの補間</li>
        <li>エッジの検出と強調</li>
      </ul>

      <h3>3. リアルタイムカラーマッピング</h3>
      <p>高解像度カメラとLiDARの同期により、スキャンと同時に真色の3Dモデルを生成。後処理でのカラーマッピングが不要になりました。</p>

      <h2>応用分野の拡大</h2>

      <h3>建設・土木分野</h3>
      <ul>
        <li><strong>進捗管理</strong>：日々の工事進捗を3Dで記録し、計画との差異を可視化</li>
        <li><strong>品質管理</strong>：施工精度をミリメートル単位で検証</li>
        <li><strong>安全管理</strong>：危険箇所の事前把握と対策立案</li>
      </ul>

      <h3>都市計画・インフラ管理</h3>
      <ul>
        <li><strong>デジタルツイン</strong>：都市全体の3Dモデルを作成し、シミュレーションに活用</li>
        <li><strong>災害対策</strong>：洪水や地震のリスク評価</li>
        <li><strong>資産管理</strong>：インフラの経年変化を追跡</li>
      </ul>

      <h3>文化財保存</h3>
      <ul>
        <li><strong>デジタルアーカイブ</strong>：歴史的建造物の詳細な3D記録</li>
        <li><strong>修復支援</strong>：損傷箇所の正確な把握と修復計画</li>
        <li><strong>バーチャル展示</strong>：オンラインでの文化財公開</li>
      </ul>

      <h2>技術的ブレークスルー</h2>

      <h3>処理速度の革命的向上</h3>
      <p>最新のGPU並列処理技術により、1億点の点群データを数分で処理可能に。従来は数時間かかっていた処理が、現場でリアルタイムに完了します。</p>

      <h3>精度の飛躍的向上</h3>
      <p>新しいレーザー技術と高精度IMUの組み合わせにより、相対精度±1cm、絶対精度±3cmを実現。建設現場での実用レベルを完全にクリアしています。</p>

      <h2>今後の展望</h2>
      <p>LiDAR技術は今後も進化を続けます。次世代技術として注目されているのは：</p>
      <ul>
        <li><strong>量子LiDAR</strong>：量子技術を活用した超高精度センシング</li>
        <li><strong>5G/6G統合</strong>：高速通信によるクラウド処理の実現</li>
        <li><strong>自律型スキャニング</strong>：ドローンやロボットによる完全自動化</li>
      </ul>

      <p>Xgridsは、これらの最新技術を積極的に取り入れ、お客様により価値の高いソリューションを提供していきます。</p>
    `
  }
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const post = blogPosts[resolvedParams.slug as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: 'ブログ記事が見つかりません',
    }
  }

  return {
    title: `${post.title} | UP HASH`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const post = blogPosts[resolvedParams.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link
                href="/blog"
                className="text-gray-400 hover:text-white inline-flex items-center transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                ブログに戻る
              </Link>
            </div>
            <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-300 space-x-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {post.author}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>

            {/* Article Body */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Original Article Link */}
            <div className="mt-12 p-6 bg-gray-50 rounded-xl">
              <p className="text-gray-600 mb-2">この記事はXgrids社のブログ記事を日本語に翻訳したものです。</p>
              <a
                href={post.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
              >
                原文を読む（英語）
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">関連記事</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(blogPosts)
              .filter(([slug]) => slug !== resolvedParams.slug)
              .slice(0, 2)
              .map(([slug, relatedPost]) => (
                <article key={slug} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <Link href={`/blog/${slug}`}>
                    <div className="relative aspect-video bg-gray-200">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <span className="text-blue-600 text-sm font-medium">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 mb-3">
                      <Link href={`/blog/${slug}`} className="hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <time className="text-gray-500 text-sm">
                      {new Date(relatedPost.date).toLocaleDateString('ja-JP', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}