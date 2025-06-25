import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getImagePath } from '@/lib/utils'
import ShareButtons from '@/components/blog/ShareButtons'
import StructuredData, { articleSchema, breadcrumbSchema } from '@/components/StructuredData'

// ブログ記事のデータ
const blogPosts = {
  'lixel-studio-3-3-1-release': {
    title: 'LixelStudio 3.3.1 & L2 Pro / K1 ファームウェア3.0 リリースのお知らせ',
    date: '2025-06-25',
    category: '製品発表',
    author: 'XGRIDS編集部',
    image: '/images/blog/lixel-studio-release/image_001.webp',
    originalUrl: 'https://xgrids.com/support/download?page=LixelStudio',
    content: `
      <p class="lead">最新バージョンの<strong>LixelStudio 3.3.1</strong>と、<strong>Lixel L2 Pro / K1用のファームウェア3.0</strong>が正式リリースされました。今回のアップデートでは、<strong>点群の品質向上</strong>と<strong>作業効率の大幅な改善</strong>が実現されています。</p>

      <img src="${getImagePath('/images/blog/lixel-studio-release/image_002.webp')}" alt="LixelStudioとファームウェア更新のイメージ" class="w-full rounded-lg my-8" />

      <h2>✅ ファイルサイズを最大5分の1に削減：スマートなデータ管理</h2>

      <h3>1. 最適化されたファイル圧縮（.xbin形式）</h3>
      <p>L2 ProおよびK1（Firmware 3.0以降）で収集したデータを、従来より<strong>4〜5倍の効率</strong>で保存・管理可能。</p>

      <h3>2. リモートスキャン制御</h3>
      <p>現場に行かずに<strong>スキャンの進捗確認・制御</strong>が可能。現場訪問を減らしつつ、プロジェクト全体の可視性が向上。</p>

      <img src="${getImagePath('/images/blog/lixel-studio-release/image_003.webp')}" alt="ファイル圧縮とリモート制御機能" class="w-full rounded-lg my-8" />

      <h2>🧠 点群品質と信頼性を強化</h2>

      <h3>1. PPK-SLAMの最適化</h3>
      <p>RTK信号が弱い<strong>トンネルや山間部</strong>でも高精度な後処理が可能に。</p>

      <h3>2. 高度なグローバル最適化</h3>
      <p>複雑な室内構造や大規模空間でも<strong>点群精度が向上</strong>。建築・内装業界にとって理想的なアップグレード。</p>

      <h3>3. ノイズフィルターの強化</h3>
      <p>壁や床などの重要構造を残しつつ、<strong>不要なノイズを除去</strong>。後処理作業の負担を大幅軽減。</p>

      <img src="${getImagePath('/images/blog/lixel-studio-release/image_004.webp')}" alt="点群品質の向上例" class="w-full rounded-lg my-8" />

      <h2>✏️ 新しい編集ツールを搭載</h2>

      <h3>1. 点群の軸合わせ</h3>
      <p>X, Y, Z軸に対する回転・整列が簡単に。建築設計の前段階としての整備が迅速に。</p>

      <h3>2. スライスツール</h3>
      <p>水平／垂直スライスで<strong>フロアプランや立面図、断面図</strong>の作成を瞬時に実行可能。</p>

      <img src="${getImagePath('/images/blog/lixel-studio-release/image_005.webp')}" alt="新しい編集ツールの使用例" class="w-full rounded-lg my-8" />

      <h2>📏 品質管理と効率を両立</h2>

      <h3>時間選択による処理対象の絞り込み</h3>
      <p>収集データの中から<strong>必要な時間帯のみを選択処理</strong>。無駄なデータ処理を回避し、計算リソースを節約。</p>

      <img src="${getImagePath('/images/blog/lixel-studio-release/image_006.webp')}" alt="時間選択機能のインターフェース" class="w-full rounded-lg my-8" />

      <h2>📥 ダウンロードはこちら</h2>

      <ul class="space-y-2 my-6">
        <li>👉 <a href="https://xgrids.com/support/download?page=LixelStudio" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">LixelStudio 3.3.1 ダウンロードページ</a></li>
        <li>👉 <a href="https://xgrids.com/support/download?page=L2Pro" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Lixel L2 Pro ファームウェア3.0</a></li>
        <li>👉 <a href="https://xgrids.com/support/download?page=K1" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Lixel K1 ファームウェア3.0</a></li>
      </ul>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
        <h3 class="text-lg font-semibold mb-2">関連記事もぜひご覧ください</h3>
        <ul class="space-y-2">
          <li>• <a href="/blog/3d-gaussian-splatting-webinar" class="text-blue-600 hover:underline">3D Gaussian Splattingウェビナー ハイライト</a></li>
          <li>• <a href="/blog/lcc-for-revit-announcement" class="text-blue-600 hover:underline">AI搭載 3DGS Scan-to-BIM Revitプラグイン 発表</a></li>
          <li>• <a href="/blog/mining-digital-twin" class="text-blue-600 hover:underline">100m地下の鉱山スキャン：高リスク環境でのデジタルツイン構築</a></li>
        </ul>
      </div>
    `
  },
  'underground-utility-corridor': {
    title: '都市の「ライフライン」を可視化：Lixel L2 Proが全長8kmの地下管路調査を支援',
    date: '2025-02-21',
    category: '導入事例',
    author: 'UP HASH Team',
    image: '/images/blog/optimized/underground-survey-main.webp',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=123',
    content: `
      <p class="lead">電力、通信、水道などのインフラを収容する「共同溝（ユーティリティ・コリドー）」は、都市機能を支えるまさに"ライフライン"です。こうした複雑な地下ネットワークは、正確な測量とマッピングが施工・保守の両面で不可欠です。</p>
      
      <p>中国・寧波市で完成した全長8kmの地下管路において、精密な竣工測量が求められました。地中15〜20メートルという深さと、狭小な空間により技術的なハードルは高く、XGRIDSのパートナー企業はLixel L2 Proハンドヘルド3Dスキャナーを導入。高精度なマッピングを可能にし、プロジェクトの検収作業をサポートしました。</p>

      <img src="${getImagePath('/images/blog/optimized/underground-survey-1.webm')}" alt="地下管路スキャン作業" class="w-full rounded-lg my-8" />

      <h2>01｜現場での課題</h2>
      
      <h3>■ 狭小かつ制限された空間</h3>
      <p>幅わずか1.3mの管路では、機材の設置や移動が困難。トータルステーションなどの従来機器は、位置取りのたびに移設が必要で、作業の大きな遅延要因となっていました。</p>
      
      <h3>■ 特徴に乏しい構造</h3>
      <p>長く、繰り返し構造の管路内では、SLAMによる自己位置推定が困難。特徴点が少ないために軌道がずれやすく、データの整合性も損なわれがちです。</p>
      
      <h3>■ 大規模空間の測量負荷</h3>
      <p>8kmに及ぶ距離を従来方式で測量するには、膨大な人員と時間が必要。また、長距離のSLAM走行では誤差の蓄積による精度低下も懸念されます。</p>

      <img src="${getImagePath('/images/blog/optimized/underground-survey-2.webm')}" alt="狭小空間でのスキャニング" class="w-full rounded-lg my-8" />

      <h2>02｜Lixel L2 Proによる解決アプローチ</h2>
      
      <h3>1. Lixel L2 Pro：リアルタイム3Dスキャンとモデリング</h3>
      <p>XGRIDSの主力製品であるLixel L2 Proは、独自の「Multi-SLAMアルゴリズム」により、地下管路のような特徴点の少ない環境でも安定した測位と高精度マッピングを実現します。</p>
      
      <h3>2. 絶対精度を担保する地上基準点の設置</h3>
      <p>正確な位置合わせのため、レーザー鉛直照射装置を用いて地下に<strong>75点の基準点（100m間隔）</strong>を設置。相対座標をトータルステーションで取得した絶対座標に変換することで、地図としての正確性を担保しました。</p>

      <img src="${getImagePath('/images/blog/optimized/underground-survey-3.webm')}" alt="基準点設置作業" class="w-full rounded-lg my-8" />
      
      <h3>3. セクション分割による段階的なスキャンと即時検証</h3>
      <p>管路を13のセクションに分割し、各セクションをLixel L2 Proで順にスキャン。カラー点群をリアルタイムで確認し、ズレや抜けのない状態で次工程へ進めました。</p>
      
      <h3>4. RCS形式での出力によりCADとのシームレスな連携</h3>
      <p>取得した点群データはLixelStudioで整合処理を行い、カラー点群として忠実な地下空間の再現を実現。さらにRCS形式に直接変換し、CADソフトへの取り込み・平面図作成をスムーズにしました。</p>

      <img src="${getImagePath('/images/blog/optimized/underground-survey-screenshot.webp')}" alt="LixelStudioでの点群処理" class="w-full rounded-lg my-8" />

      <h2>03｜Lixel L2 Proソリューションの特長</h2>
      
      <h3>■ 特徴の少ない環境でも安定した性能</h3>
      <p>LiDARとビジュアルセンサーの融合による「Multi-SLAM」で、人工的な特徴点を設けずとも自己位置を正確に推定。ズレのない高精度な成果物を確実に生成します。</p>
      
      <h3>■ 軽量・狭所最適設計</h3>
      <p>Lixel L2 Proは手持ち型で、機材設置の手間や再配置が不要。狭い管路内でも構造物全体をシームレスにスキャンでき、従来のトータルステーションでは困難だった場所でも活躍します。</p>
      
      <h3>■ ソフトウェアとの統合による効率化</h3>
      <p>リアルタイムの点群はその場でモバイルやPCから確認可能。LixelStudioによる後処理も効率化され、RCP形式での出力により、即CAD連携が可能です。</p>

      <img src="${getImagePath('/images/blog/optimized/underground-survey-4.webm')}" alt="点群データの可視化" class="w-full rounded-lg my-8" />

      <h2>04｜顧客からの評価</h2>
      
      <p>クライアントは、Lixel L2 Proの安定性と高精度に高い評価を寄せています。特に、特徴点の乏しい環境でも信頼できる測定結果を得られる点と、作業効率の向上が好評でした。最終的なデータセットはプロジェクト関係者にも受け入れられ、検収プロセスの迅速化に寄与しました。</p>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
        <h3 class="text-lg font-semibold mb-2">まとめ</h3>
        <p>Lixel L2 Proは、地下インフラ測量に革新をもたらすデバイスです。煩雑な機材設置を不要とし、CAD連携もスムーズな本製品は、従来の測量方法を刷新し、スピード・精度・効率を兼ね備えた新たなスタンダードとして注目を集めています。</p>
      </div>
    `
  },
  'mining-digital-twin': {
    title: '地下100メートルでのデジタルツイン：高精度3Dマッピングが鉱山作業を変革する',
    date: '2025-03-13',
    category: '導入事例',
    author: 'UP HASH Team',
    image: '/images/blog/optimized/mining-digital-twin-hero.webp',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=96',
    content: `
      <h2>光が届かず、人の立ち入りが困難な場所で</h2>
      
      <p>中国・広東省の石灰岩鉱山では、垂直100メートルを超える坑道や地下河川を含む危険な地下空間を正確に記録するという、極めて困難な課題に直面していました。</p>
      
      <p>その課題を解決したのが、XGRIDS製の「Lixel L2 Pro」。Multi-SLAM技術を搭載したこの3Dスキャナーは、従来比で80%の時間短縮を実現しながら、安全かつ高精度な3Dモデルを作成。このデジタルツインは現在、安全管理、体積解析、作業計画に活用され、鉱山業界における"不可能"を"日常"へと変えています。</p>

      <img src="${getImagePath('/images/blog/optimized/mining-site-overview.webp')}" alt="鉱山全体の概観" class="w-full rounded-lg my-8" />

      <h2>従来測量の限界</h2>
      
      <p>地下空間は、三次元的な記録において極めて困難な環境です。</p>
      
      <p>この現場では、Trimble SX10を使って100以上のスキャンステーションを設置しましたが、それでも下記の領域は十分に測量できませんでした：</p>
      
      <ul>
        <li>極端な垂直坑道（落差100m超）</li>
        <li>水の流れる地下河川や冠水区域</li>
        <li>複雑なトンネル構造</li>
        <li>人の立ち入りが困難な高リスク区域</li>
        <li>アクセス困難な閉鎖空間</li>
      </ul>
      
      <blockquote class="border-l-4 border-blue-500 pl-4 my-4 italic">
        <p>「従来手法では記録できない空間が多く、不完全なデータに基づいて運用判断を下すしかなかった」</p>
        <cite>—鉱山プランニングエンジニア</cite>
      </blockquote>

      <img src="${getImagePath('/images/blog/optimized/mining-point-cloud-1.webp')}" alt="従来手法での測量結果" class="w-full rounded-lg my-8" />

      <h2>地下環境におけるSLAM技術の課題</h2>
      
      <p>一般的なSLAM技術は以下のような環境では性能が落ちます：</p>
      
      <ul>
        <li>視覚特徴の乏しい石灰岩の壁面</li>
        <li>反射の強い濡れた地面や水面</li>
        <li>空気中の粉塵が光学センサーに干渉</li>
        <li>GPS信号が完全に遮断される空間</li>
      </ul>
      
      <p>そのため、鉱山業界では単なるSLAMではなく、進化型SLAMが必要とされていました。</p>

      <h2>XGRIDS Lixel L2 Pro：Multi-SLAMによる革新的アプローチ</h2>
      
      <h3>技術構成</h3>
      <ul>
        <li><strong>LiDAR（32ch／120m）</strong>：640,000点／秒、FOV：360°×270°</li>
        <li><strong>48MP デュアルカメラ</strong>：視覚SLAM対応</li>
        <li><strong>IMU搭載</strong>：GPS不要でも自己位置推定可能</li>
        <li><strong>リアルタイム処理</strong>：LixelGOアプリで即時確認</li>
        <li><strong>IP54耐久性</strong>：粉塵・水しぶき対策</li>
        <li><strong>反射面に対応した独自フィルタ搭載</strong></li>
      </ul>
      
      <p>重量はわずか1.98kg。手持ちでの長時間運用が可能です。</p>

      <img src="${getImagePath('/images/blog/optimized/mining-equipment-scan.webp')}" alt="Lixel L2 Proによるスキャン作業" class="w-full rounded-lg my-8" />

      <h2>スキャンの実施手順</h2>
      
      <h3>① 事前調査</h3>
      <p>安全計画を立案し、複数回のスキャンでターゲット反射マーカーを記録。</p>
      
      <h3>② 初期化</h3>
      <p>平坦面にて20秒間スキャナーを初期化。</p>
      
      <h3>③ 地下河川のスキャン</h3>
      <ul>
        <li>小型ボートに乗りながら連続スキャン</li>
        <li>天井・壁・水面すべてをリアルタイムで可視化</li>
        <li>手持ち操作で揺れる環境にも対応</li>
      </ul>

      <img src="${getImagePath('/images/blog/optimized/mining-scan-animation.webm')}" alt="地下河川のスキャン作業" class="w-full rounded-lg my-8" />
      
      <h3>④ 垂直坑道のスキャン</h3>
      <ul>
        <li>手持ちで安全距離からのスキャンを実施</li>
        <li>ドリフト補正のためスキャンルートにループを構成</li>
        <li>縦壁を完全にカバーするよう重ねて撮影</li>
      </ul>

      <img src="${getImagePath('/images/blog/optimized/mining-3d-model-1.webp')}" alt="垂直坑道の3Dモデル" class="w-full rounded-lg my-8" />

      <h2>データ処理と統合</h2>
      
      <h3>1. 精密な位置合わせ</h3>
      <p>Trimble RealWorksによる点群の座標変換により：</p>
      <ul>
        <li>地下河川での誤差：<strong>4.848mm</strong></li>
        <li>垂直坑道での誤差：<strong>4.823mm</strong></li>
      </ul>
      
      <h3>2. 点群統合</h3>
      <p>Lixel L2 ProとTrimble SX10のデータを完全統合。ずれは目視では確認不可能なレベルに。</p>

      <img src="${getImagePath('/images/blog/optimized/mining-point-cloud-2.webp')}" alt="統合された点群データ" class="w-full rounded-lg my-8" />

      <h2>メッシュ化と体積解析</h2>
      
      <p>GeoMagicで後処理を行い、Trimble RealWorksでメッシュ作成。<br>
      最終的な空間体積は<strong>114,548.34㎥</strong>と算出されました。</p>

      <img src="${getImagePath('/images/blog/optimized/mining-volumetric-analysis.webp')}" alt="体積解析結果" class="w-full rounded-lg my-8" />

      <h2>成果と定量的効果</h2>
      <ul>
        <li>登録精度：<strong>±4.8mm</strong></li>
        <li>測定不可だった空間の3Dモデル化に成功</li>
        <li>高リスク現場での安全事故ゼロ</li>
      </ul>

      <h2>定性的メリット</h2>
      <ul>
        <li>詳細なデジタルツインによるシミュレーションと計画立案</li>
        <li>避難経路や脆弱箇所の視覚化による安全性向上</li>
        <li>採掘計画とリソース活用の最適化</li>
        <li>将来のアーカイブ・記録としても有効</li>
      </ul>

      <img src="${getImagePath('/images/blog/optimized/mining-safety-zones.webp')}" alt="安全区域の可視化" class="w-full rounded-lg my-8" />

      <h2>ビジネスインパクト</h2>
      
      <h3>オペレーション効率</h3>
      <ul>
        <li>高品位鉱石への正確なアクセス</li>
        <li>機器の経路最適化</li>
        <li>メンテナンス予測の精度向上</li>
      </ul>
      
      <h3>安全管理</h3>
      <ul>
        <li>危険区域の把握と避難計画</li>
        <li>作業員教育への活用（VR環境可）</li>
      </ul>
      
      <h3>法令対応</h3>
      <ul>
        <li>環境報告／構造安定性確認</li>
        <li>文書提出用の信頼できる空間記録</li>
      </ul>

      <img src="${getImagePath('/images/blog/optimized/mining-dashboard-view.webp')}" alt="統合管理ダッシュボード" class="w-full rounded-lg my-8" />

      <h2>今後の展望：デジタルマインのエコシステムへ</h2>
      
      <p>Lixel L2 Proによって、以下の取り組みが可能に：</p>
      <ul>
        <li>採掘シミュレーションを行う予測型デジタルツイン</li>
        <li>実際の地形を使ったVRトレーニング環境の構築</li>
        <li>自律走行車のための高精度マッピング</li>
        <li>状況変化のモニタリングと異常検知によるリアルタイム管理</li>
      </ul>

      <img src="${getImagePath('/images/blog/optimized/mining-digital-twin-process.webp')}" alt="デジタルツインプロセス" class="w-full rounded-lg my-8" />

      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
        <h3 class="text-lg font-semibold mb-2">結論｜"地下"の限界を再定義する</h3>
        <p>今回の石灰岩鉱山プロジェクトは、XGRIDSのLixel L2 Proによる地下測量の革新を象徴しています。</p>
        <p class="mt-3">これまで人が入れなかった場所、記録不可能だった空間が、今や手軽に、しかも高精度に可視化できるようになりました。</p>
        <p class="mt-3">Lixel L2 Proは、鉱山に限らず、トンネル、土木、水力発電、地下インフラ全般において、新たなスタンダードとなる可能性を秘めています。</p>
      </div>
    `
  },
  '3d-gaussian-splatting-webinar': {
    title: '3D技術の未来を探る：「3D Gaussian Splatting」ウェビナーの注目ポイント10選',
    date: '2024-12-30',
    category: 'イベント',
    author: 'UP HASH Team',
    image: '/images/blog/optimized/3dgs-webinar-main.webp',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=68',
    content: `
      <h2>はじめに</h2>
      
      <p>2024年12月18日、3DISEのMicha Gula氏が主催するウェビナー「Gaussian splatting + SLAM ― 現実を捉える究極のツールとは？」が開催されました。登壇者には、リアリティキャプチャの専門家であるMindy Li（XGRIDS）、Tomas Barnas（Overhead4D）、Michael Rubloff（Radiance Fields）が参加し、急速に進化する3D技術の最前線について貴重な知見が共有されました。</p>

      <div class="bg-gray-100 rounded-lg p-6 my-8">
        <h3 class="text-lg font-semibold mb-3">こんな方におすすめのセッション</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li>最先端の3D技術に興味がある方</li>
          <li>3D Gaussian Splatting（3DGS）をわかりやすく学びたい方</li>
          <li>Unreal EngineやUnityでの応用に関心がある方</li>
          <li>建設・映画・都市計画など、リアルな事例から学びたい方</li>
        </ul>
      </div>

      <h2>ウェビナーで語られた10のハイライト</h2>

      <h3>1｜SLAM技術が"伝統"と"革新"をつなぐ架け橋に</h3>
      
      <img src="${getImagePath('/images/blog/optimized/3dgs-webinar-1.webp')}" alt="SLAM技術の説明" class="w-full rounded-lg my-6" />
      
      <p>XGRIDSのMindy氏は、SLAMがトータルステーションや航空LiDARといった従来技術と、3DGSのような次世代技術をつなぐ役割を担っていると説明。</p>
      
      <blockquote class="border-l-4 border-blue-500 pl-4 my-4 italic">
        <p>「固定型では対応しきれない現場で、SLAMのリアルタイム性能が真価を発揮します」</p>
      </blockquote>
      
      <p>建設、都市計画、環境モニタリングなど、多様な業界でSLAMが重要なインフラになりつつあります。</p>

      <h3>2｜Gaussian Splattingがもたらす圧倒的なビジュアル品質</h3>
      
      <p>Radiance FieldsのRubloff氏は、GSが映画や3Dビジュアライゼーションで「写真のような描写を軽量に実現できる」と解説。</p>
      
      <blockquote class="border-l-4 border-blue-500 pl-4 my-4 italic">
        <p>「特に映画制作のようにビジュアルの精度が命の分野で、GSは革新的です」</p>
      </blockquote>

      <h3>3｜LiDARは3DGSの精度を支える基盤</h3>
      
      <img src="${getImagePath('/images/blog/optimized/3dgs-webinar-2.webp')}" alt="LiDARと3DGSの連携" class="w-full rounded-lg my-6" />
      
      <p>Mindy氏は、LiDARのジオメトリ把握力が3DGSの正確な描画に欠かせないと強調。</p>
      
      <blockquote class="border-l-4 border-blue-500 pl-4 my-4 italic">
        <p>「とくに特徴点の少ない環境では、LiDARの正確さがGSの再現力を引き出します」</p>
      </blockquote>

      <h3>4｜映画・ゲームの制作ワークフローを一変</h3>
      
      <p>Overhead4DのTomas氏は、「従来は数週間かかっていた3Dアセットの生成が数日で完了する」と紹介。<br>
      LEDウォールやバーチャルプロダクションにおいて、3DGSは圧倒的な効率と品質を両立しています。</p>

      <h3>5｜リアルタイムなフィードバックで制作の試行錯誤が加速</h3>
      
      <img src="${getImagePath('/images/blog/optimized/3dgs-webinar-3.webp')}" alt="リアルタイムフィードバック" class="w-full rounded-lg my-6" />
      
      <blockquote class="border-l-4 border-blue-500 pl-4 my-4 italic">
        <p>「モデルをその場で微調整できることで、反復作業のサイクルが大きく短縮されます」</p>
      </blockquote>
      
      <p>とMindy氏。これはVRやARなど即時性が求められる分野において特に重要です。</p>

      <h3>6｜中小企業にも開かれた3D技術</h3>
      
      <p>Rubloff氏は「大企業だけのものではなくなった」と語り、SLAMと3DGSの組み合わせによって、建築・教育・小売などの分野でも小規模チームが高品質な成果を得られる時代が来ていると指摘しました。</p>

      <h3>7｜広範な都市空間も短時間でカバー</h3>
      
      <img src="${getImagePath('/images/blog/optimized/3dgs-webinar-4.webp')}" alt="都市スケールのスキャン" class="w-full rounded-lg my-6" />
      
      <p>Tomas氏は、都市スケールのスキャン事例を紹介し、</p>
      
      <blockquote class="border-l-4 border-blue-500 pl-4 my-4 italic">
        <p>「SLAM＋3DGSで大規模環境を迅速かつ高精度に取得できる」</p>
      </blockquote>
      
      <p>と述べました。都市開発、交通設計、災害対応などに不可欠な技術です。</p>

      <h3>8｜データ圧縮で"軽い"3Dモデルをグローバル共有</h3>
      
      <p>Mindy氏は「最大90%の圧縮率で、チーム間のデータ共有がスムーズになった」と述べ、遠隔地チームとの連携が大幅に向上した点を紹介しました。</p>

      <h3>9｜制作コストと時間の劇的な削減</h3>
      
      <p>Rubloff氏は、「アセット制作時間が半分以下になった事例もある」と語り、映画や不動産業界など、コストに敏感な分野での導入が加速していることを示しました。</p>

      <h3>10｜3D視覚技術が当たり前になる未来へ</h3>
      
      <img src="${getImagePath('/images/blog/optimized/3dgs-webinar-5.webp')}" alt="3D技術の未来" class="w-full rounded-lg my-6" />
      
      <p>最後にMicha氏はこう締めくくりました。</p>
      
      <blockquote class="border-l-4 border-blue-500 pl-4 my-4 italic">
        <p>「SLAMと3DGSの統合はまだ始まりに過ぎません。将来、3D視覚は2D画像のように当たり前になるでしょう」</p>
      </blockquote>
      
      <p>AI、ロボティクス、空間コンピューティングなど、多方面への応用が期待されています。</p>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
        <h3 class="text-lg font-semibold mb-2">おわりに</h3>
        <p>これは単なる派手な技術デモではありません。Mindy氏やXGRIDSを含むパネリストたちは、3DGSという先端技術を、現場で使える実用的なツールとして確立しつつあります。<br>
        今後も、3DGSとSLAMの進化が、3D技術の常識を塗り替えていくことは間違いないでしょう。</p>
      </div>
    `
  },
  'lcc-for-revit-announcement': {
    title: '業界初：XGRIDS、Autodesk DevCon Europe 2025にてRevit向けAI搭載「LCC for Revit」プラグインを発表',
    date: '2025-05-21',
    category: '製品発表',
    author: 'Xgrids Team',
    image: '/images/blog/optimized/lcc-for-revit.webp',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=120',
    content: `
      <p class="lead">〜BIMモデリングを70〜90%高速化、センチメートル単位の精度で現場からRevitにリアルタイム連携〜</p>
      
      <p><strong>アムステルダム（オランダ）— 2025年5月21日</strong></p>
      
      <p>XGRIDSは、Autodesk DevCon Europe 2025の会場にて、革新的なRevit用プラグイン「LCC for Revit」を正式発表しました。このプラグインは、SLAMベースの3D Gaussian Splatting技術をAutodesk Revitワークフローに直接統合するもので、BIMモデリングにおける作業効率を従来比で70〜90%向上させつつ、測量レベルの精度を保持します。</p>

      <h2>空間インテリジェンスとBIMの融合</h2>
      
      <p>建設業界ではAI技術の導入が急速に進んでおり、AutodeskによるAI強化投資（2023年のAutodesk AI発表など）からも、その生産性向上への期待の高さが伺えます。</p>
      
      <p>XGRIDSの「LCC for Revit」はこの流れに呼応し、実世界のスキャンデータとBIM設計プロセスを繋ぐ、実用的かつインテリジェントなソリューションです。</p>
      
      <blockquote>
        <p>「建設業界は、スキャン精度とBIM設計意図の両方を理解できるツールを必要としています。LCC for Revitは、まさにその融合をRevitという日常的なツールの中に持ち込むものです。」</p>
        <cite>— Sunny Liao（XGRIDS グローバルビジネスディレクター）</cite>
      </blockquote>

      <h2>技術革新による明確な成果</h2>
      
      <p>本プラグインの中核には、XGRIDS独自の「Lixel CyberColor（LCC）」技術が組み込まれており、LiDARとビジュアルデータを3D Gaussian Splattingにより統合。フォトリアルな視覚表現と構造的な精度を同時に実現するモデル生成を可能にします。</p>
      
      <h3>LCC for Revit の主な特長：</h3>
      <ul>
        <li><strong>リアル空間の再現性</strong>：XGRIDS製の空間カメラで取得した1回のスキャンから、視覚的忠実度と構造精度の両立する3Dモデルを自動生成。従来の手動測定工程を不要に。</li>
        <li><strong>Revitとのリアルタイム連携</strong>：LCCモデルとBIMモデルを即座に整合させ、現場の状況を正確に反映。設計のズレや手戻りを削減。</li>
        <li><strong>AIによる要素生成</strong>：壁、ドア、窓などの主要要素をワンクリックで生成し、構造意図を保ちつつモデリングを高速化。</li>
      </ul>

      <h2>実証されたパフォーマンス</h2>
      
      <p>各種建築プロジェクトにおける導入実験では、以下のような結果が報告されています：</p>
      <ul>
        <li>中規模屋内空間でのBIMモデリング時間が70〜90%短縮</li>
        <li>全体でセンチメートル単位の精度を安定して保持</li>
        <li>ビジュアル検証と視点同期による手戻りゼロ</li>
        <li>問題のリアルタイム検知とその場での修正が可能</li>
      </ul>
      
      <blockquote>
        <p>「LCC for Revitは空間を単にデジタル化するのではなく、"理解"します。AIは構造関係や階層も把握し、スキャンデータをインテリジェントなBIM要素に変換します。」</p>
        <cite>— Mindy Li（XGRIDS プロダクトマネージャー）</cite>
      </blockquote>

      <h2>今後の展望と市場への影響</h2>
      
      <p>LCC for Revitは、AutodeskとXGRIDSの共同開発により誕生し、BIMの"成果志向型"トレンドと完全に合致。カーボン削減や建設廃材の最小化といった新たなニーズに応えるための、構造化・文脈化されたデータ基盤を提供します。</p>
      
      <h3>提供開始について</h3>
      <ul>
        <li>2025年5月末より、Autodesk App Storeを通じて公開予定</li>
        <li>対応バージョン：Revit 2025以降</li>
        <li>XGRIDS製ワークフローとシームレスに統合可能</li>
      </ul>
      
      <p>DevCon Europeの会場では、スキャン〜BIM連携までの実演デモを通じて、その即時性と実用性が紹介されています。</p>

      <h2>空間インテリジェンスが変える設計の未来</h2>
      
      <p>LCC for Revitは、単なるワークフロー効率化を超え、設計プロセスの本質を変革する可能性を示しています。スキャン精度とパラメトリック設計の知性が共存する新時代の建築ワークフロー。その礎となるのが、このプラグインです。</p>
      
      <p>AI技術の浸透により、BIMは"描くもの"から"理解し導くもの"へと進化します。LCC for Revitは、スキャンデータが単なる参考情報ではなく、"設計の知性"として機能することを証明する実例です。</p>
    `
  },
  'lixel-go-1-1-9': {
    title: 'Lixel Go 1.1.9リリース - 3D空間データ取得がさらに簡単に',
    date: '2024-12-13',
    category: 'ソフトウェアアップデート',
    author: 'Xgrids Team',
    image: '/images/blog/optimized/lixel-go-119.webp',
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
    image: '/images/blog/optimized/vietnam-urbanization.webp',
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
    image: '/images/blog/optimized/construction-expo.webp',
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
    image: '/images/blog/optimized/lidar-innovation.webp',
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
  },
  'virtual-preproduction': {
    title: 'バーチャル・プリプロダクションの未来：XGRIDS × Global Objects',
    date: '2025-05-12',
    category: 'ケーススタディ',
    author: 'UP HASH Team',
    image: '/images/blog/optimized/virtual-preproduction-single.webp',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=109',
    content: `
      <p class="lead">映像制作におけるロケスキャンと3Dプリビズの革新。XGRIDSのLixelスキャナーとGlobal Objectsの事例を紹介します。</p>

      <p>映像制作の現場では、技術の進化により「バーチャル・プリプロダクション」の活用が加速しています。</p>
      
      <p><strong>Global Objects</strong> は、<strong>XGRIDSのLixelシリーズ</strong>を導入し、ガウシアンスプラッティングによるリアルなデジタルツインを構築。現場ロケのスキャンからUnreal Engineへの連携まで、従来のワークフローを根本から見直す革新的な方法を確立しました。</p>

      <h2>🎬 動画で見る：Global Objectsのワークフロー</h2>
      
      <div class="my-8">
        <iframe 
          width="100%" 
          style="aspect-ratio: 16/9;" 
          src="https://www.youtube.com/embed/jIvmm3noB_s" 
          title="Global Objects Virtual Production Workflow" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen
        ></iframe>
      </div>

      <h2>活用シーン</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div class="bg-gray-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-3">ロケーション記録</h3>
          <p>現地でのスキャンから詳細な3Dロケーションを作成。注釈や寸法も含め、チーム全体で共有可能。</p>
        </div>
        
        <div class="bg-gray-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-3">バーチャル・カメラプラン</h3>
          <p>現場に行く前にレンズ選びやカメラポジションを仮想空間で検証。</p>
        </div>
        
        <div class="bg-gray-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-3">セットデザイン計画</h3>
          <p>正確な寸法情報で、セットが現場にフィットしないトラブルを排除。</p>
        </div>
        
        <div class="bg-gray-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-3">Unreal/Unityとの連携</h3>
          <p>スキャンデータをそのままゲームエンジンに投入可能で、プリビズが高速に。</p>
        </div>
      </div>

      <h2>解決される課題</h2>
      
      <ul class="space-y-3 my-6">
        <li>✓ ロケ地情報の欠落を防ぎ、事前にあらゆる空間要素を把握。</li>
        <li>✓ 遠隔チームとの情報共有がスムーズになり、意思決定が迅速に。</li>
        <li>✓ VFXチームへの即時データ提供で、再撮やプレート撮影の手間を削減。</li>
        <li>✓ 技術スタッフの移動・拘束時間を削減し、ロケ準備のコストを圧縮。</li>
      </ul>

      <h2>XGRIDSの優位性</h2>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
        <h3 class="text-lg font-semibold mb-4">センチメートル精度</h3>
        <p class="mb-4">LiDARと3D Gaussian Splattingの組み合わせにより、高精度かつリアルな空間再現が可能。</p>
        
        <h3 class="text-lg font-semibold mb-4">広範囲のロケーション対応</h3>
        <p class="mb-4">都市部から大型ステージまで、スピードとカバレッジで視覚スキャンを凌駕。</p>
        
        <h3 class="text-lg font-semibold mb-4">Unreal Engine連携</h3>
        <p>CyberColor SDK経由での直接インポートにより、変換不要でシームレスなワークフローを実現。</p>
      </div>

      <hr class="my-12" />

      <p class="text-lg">映像制作の効率化・高品質化・脱炭素化へ。</p>
      <p class="text-lg font-semibold">XGRIDSとGlobal Objectsの連携は、ロケーションベースの映像制作を根本から変えています。</p>
    `
  },
  '3dgs-best-practices': {
    title: '3D Gaussian Splatting（3DGS）の実践活用とベストプラクティス',
    date: '2025-06-25',
    category: '技術解説',
    author: 'XGRIDS 編集部',
    image: '/images/blog/3dgs-best-practices/image_001.webp',
    originalUrl: 'https://xgrids.com',
    content: `
      <img src="${getImagePath('/images/blog/3dgs-best-practices/image_001.webp')}" alt="3DGS比較図" class="w-full rounded-lg my-8" />

      <h3>3DGSとは？</h3>

      <p>3D Gaussian Splatting（3DGS）は、最新の3Dビジュアライゼーション手法として注目されている技術です。従来のメッシュベースの3Dモデルとは異なり、点群と画像ベースの表現を融合させた非メッシュのアプローチにより、軽量でフォトリアリスティックな3D表現が可能になります。</p>

      <h2>技術比較と選定のベストプラクティス</h2>

      <img src="${getImagePath('/images/blog/3dgs-best-practices/image_002.webp')}" alt="技術比較図" class="w-full rounded-lg my-8" />

      <h3>📷 フォトグラメトリー／従来型3Dモデリング</h3>

      <ul class="list-disc pl-6 space-y-2 my-4">
        <li>正確な幾何形状を取得できるが、反射・低光量・複雑形状などには弱い</li>
        <li>処理と再構築に時間がかかる</li>
      </ul>

      <h3>🔍 NeRF（ニューラルラディアンスフィールド）</h3>

      <ul class="list-disc pl-6 space-y-2 my-4">
        <li>距離・空・反射を含む多様な情報を表現可能</li>
        <li>低照明や光変化に強い</li>
        <li>しかし幾何的な精度が低く、トレーニングに時間とリソースを要する</li>
      </ul>

      <h3>🟡 3D Gaussian Splatting（3DGS）</h3>

      <ul class="list-disc pl-6 space-y-2 my-4">
        <li>高品質な視覚表現と軽量性を両立</li>
        <li>ゲームエンジン（Unity/Unreal）や3Dツール（Blender、Cinema 4D）で使用可能</li>
        <li>ただしジオメトリ精度には限界があり、リアルタイム物理シミュレーションには不向き</li>
      </ul>

      <img src="${getImagePath('/images/blog/3dgs-best-practices/image_003.webp')}" alt="3DGSの特徴" class="w-full rounded-lg my-8" />

      <h2>3DGSの応用事例とベストプラクティス</h2>

      <h3>🎬 映画制作における3DGSの活用</h3>

      <div class="bg-gray-50 p-6 rounded-lg my-8">
        <p class="font-semibold mb-3">講演者：Kai Christmann（モーションデザイナー）</p>
        
        <ul class="space-y-4">
          <li>
            <strong>After Effectsでの背景置換</strong><br>
            グリーンスクリーン不要でフォトリアルな背景を合成可能
          </li>
          <li>
            <strong>カメラモーションとの統合</strong><br>
            Lixel K1で大規模環境をスキャン後に仮想カメラを合成し、自然な動きを実現
          </li>
          <li>
            <strong>ツール例</strong>
            <ul class="list-disc pl-6 mt-2">
              <li>CamTrack AR（iOSで仮想カメラトラッキング）</li>
              <li>Jetset（スマホでGSプレビュー可能）</li>
            </ul>
          </li>
        </ul>
      </div>

      <img src="${getImagePath('/images/blog/3dgs-best-practices/image_004.webp')}" alt="映画制作での活用例" class="w-full rounded-lg my-8" />

      <h3>🏞 バーチャルプロダクションでの3DGS活用</h3>

      <div class="bg-blue-50 p-6 rounded-lg my-8">
        <p class="font-semibold mb-3">講演者：Andrii Shramko（バーチャルプロダクションプロデューサー）</p>
        
        <ul class="space-y-4">
          <li>
            <strong>Unreal Engine連携</strong><br>
            背景シーンとしてXGRIDSスキャンを取り込み、役者の動線設計に活用
          </li>
          <li>
            <strong>環境効果の演出</strong><br>
            層ごとの深度調整で昼夜表現や照明効果を付加
          </li>
          <li>
            <strong>スキャナ比較</strong>
            <ul class="list-disc pl-6 mt-2">
              <li>XGRIDS：屋外や広域スキャンに最適</li>
              <li>GoPro多眼リグ：高密度小空間向け</li>
            </ul>
          </li>
        </ul>
      </div>

      <img src="${getImagePath('/images/blog/3dgs-best-practices/image_005.webp')}" alt="バーチャルプロダクション" class="w-full rounded-lg my-8" />

      <h3>🕹 ゲームエンジンを活用した文化財の保存と体験</h3>

      <div class="bg-green-50 p-6 rounded-lg my-8">
        <p class="font-semibold mb-3">講演者：Dr. Lukasz Mirocha（XRビジュアライゼーション研究者）</p>
        
        <h4 class="font-semibold mt-4 mb-2">プロジェクト①：ヘリテージマンションのデジタルツイン</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>Lixel K1で25分間のウォークスルースキャン</li>
          <li>UnityとXGRIDS 3DGSプラグインでアノテーション付きのインタラクティブ空間を構築</li>
        </ul>
        
        <h4 class="font-semibold mt-4 mb-2">プロジェクト②：戦前ワルシャワの街並み再現</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>夜間・低照度下でスマホ250枚撮影→3DGS再構成</li>
          <li>実在した街並みの雰囲気を忠実に再現した文化アーカイブをUnityで実現</li>
        </ul>
      </div>

      <img src="${getImagePath('/images/blog/3dgs-best-practices/image_006.webp')}" alt="文化財保存プロジェクト" class="w-full rounded-lg my-8" />

      <h2>3DGSワークフローのベストプラクティス</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 class="text-lg font-semibold mb-3 text-blue-600">撮影・スキャニング</h3>
          <ul class="space-y-2 text-sm">
            <li>• 均一な照明条件を確保</li>
            <li>• オーバーラップ率60-80%を維持</li>
            <li>• 反射面や透明素材は避ける</li>
          </ul>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 class="text-lg font-semibold mb-3 text-green-600">処理・最適化</h3>
          <ul class="space-y-2 text-sm">
            <li>• 点群密度の適切な調整</li>
            <li>• ガウシアンの数を用途に応じて制限</li>
            <li>• ビューポートに応じた LOD 設定</li>
          </ul>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 class="text-lg font-semibold mb-3 text-purple-600">インテグレーション</h3>
          <ul class="space-y-2 text-sm">
            <li>• ゲームエンジンのプラグイン活用</li>
            <li>• ライティング設定の調整</li>
            <li>• パフォーマンス最適化</li>
          </ul>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 class="text-lg font-semibold mb-3 text-orange-600">配信・公開</h3>
          <ul class="space-y-2 text-sm">
            <li>• 適切な圧縮形式の選択</li>
            <li>• プラットフォーム対応の確認</li>
            <li>• ストリーミング設定の最適化</li>
          </ul>
        </div>
      </div>

      <img src="${getImagePath('/images/blog/3dgs-best-practices/image_007.webp')}" alt="ワークフロー図" class="w-full rounded-lg my-8" />

      <h2>実装例：セッション風景と3D表示</h2>

      <img src="${getImagePath('/images/blog/3dgs-best-practices/image_008.webp')}" alt="セッション風景" class="w-full rounded-lg my-8" />

      <h2>まとめ：3DGSが開く新しいクリエイティブの地平</h2>

      <p>3D Gaussian Splattingは、従来の物理ベースレンダリングとは異なるアプローチで、次世代のリアルタイム視覚表現を可能にします。特に以下のような領域で大きな可能性を持っています：</p>

      <ul class="list-disc pl-6 space-y-2 my-6">
        <li>映像制作・VFX</li>
        <li>XR（AR/VR/MR）</li>
        <li>デジタルツイン</li>
        <li>Webホスト型コンテンツ</li>
        <li>文化保存・展示インターフェース</li>
      </ul>

      <img src="${getImagePath('/images/blog/3dgs-best-practices/image_009.webp')}" alt="3DGSの未来" class="w-full rounded-lg my-8" />

      <p>今後もXGRIDSでは、3DGSに関する実践的な事例や最新ワークフローを継続的に発信していきます。</p>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
        <h3 class="text-lg font-semibold mb-2">関連リンク</h3>
        <ul class="space-y-2">
          <li>📺 <a href="https://lcc-viewer.xgrids.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">LCC Viewerでモデルを見る</a></li>
          <li>📖 <a href="https://xgrids.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">オリジナル記事はこちら</a></li>
        </ul>
      </div>

      <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg my-8">
        <h3 class="text-xl font-bold mb-4">3DGSであなたのプロジェクトを次のレベルへ</h3>
        <p class="mb-4">XGRIDSのLixelスキャナーと3D Gaussian Splatting技術で、フォトリアリスティックな3D体験を実現しませんか？</p>
        <a href="/contact" class="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          お問い合わせはこちら
        </a>
      </div>
    `
  },
  'turkish-hybrid-lidar-workflow': {
    title: 'トルコ測量会社、ハンドヘルドと地上型LiDARを組み合わせた高速プロジェクト納品を実現',
    date: '2025-06-20',
    category: '導入事例',
    author: 'XGRIDS公式ブログ',
    image: '/images/blog/turkish-hybrid-workflow/image_000.webp',
    originalUrl: 'https://www.xgrids.com/blog/turkish-surveying-firm-combines-handheld-and-terrestrial-lidar',
    content: `
      <h2>概要</h2>

      <p>トルコの測量会社「Atlıhan Surveying Engineering」は、XGRIDSのLixel L2 ProハンドヘルドLiDARと地上型スキャナー（Leica RTC360）を組み合わせることで、3Dドキュメント作成の時間を「数日から数時間」へと大幅に短縮しました。</p>
      
      <p>7分で1,000㎡を記録し、2〜3cmの実用的な精度を維持するハイブリッドワークフローは、測量の効率・精度・コストのバランスを見直す一例です。</p>

      <img src="${getImagePath('/images/blog/turkish-hybrid-workflow/image_000.webp')}" alt="トルコの測量現場" class="w-full rounded-lg my-8" />

      <h2>技術比較：L2 Proと地上型スキャナー</h2>

      <div class="overflow-x-auto my-8">
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2 text-left">判断基準</th>
              <th class="border border-gray-300 px-4 py-2 text-left">地上型スキャナー</th>
              <th class="border border-gray-300 px-4 py-2 text-left">XGRIDS L2 Pro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-semibold">現場作業時間</td>
              <td class="border border-gray-300 px-4 py-2">数時間〜数日（専門知識が必要）</td>
              <td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">7分で1,000㎡（徒歩でスキャン）</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 px-4 py-2 font-semibold">測定精度</td>
              <td class="border border-gray-300 px-4 py-2">サブセンチ（mm単位）</td>
              <td class="border border-gray-300 px-4 py-2">2〜3cm（図面用途には十分）</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2 font-semibold">出力フォーマット</td>
              <td class="border border-gray-300 px-4 py-2">点群のみ</td>
              <td class="border border-gray-300 px-4 py-2 text-blue-600 font-semibold">点群 + フォトリアリスティック3D（LCC経由）</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 px-4 py-2 font-semibold">初期投資</td>
              <td class="border border-gray-300 px-4 py-2">高コスト</td>
              <td class="border border-gray-300 px-4 py-2 text-green-600 font-semibold">低コストで短期間回収</td>
            </tr>
          </tbody>
        </table>
      </div>

      <img src="${getImagePath('/images/blog/turkish-hybrid-workflow/image_001.webp')}" alt="技術比較図" class="w-full rounded-lg my-8" />

      <h2>ハイブリッドワークフローの実際</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
        <div class="bg-blue-50 rounded-lg p-6">
          <h3 class="text-lg font-bold mb-3 text-blue-800">1. Capture（取得）</h3>
          <p class="text-sm"><strong>L2 Pro</strong>: 現場全体を短時間でマクロスキャン</p>
          <p class="text-sm mt-2"><strong>RTC360</strong>: 高精度が求められる機器や構造物を固定スキャン</p>
        </div>

        <div class="bg-green-50 rounded-lg p-6">
          <h3 class="text-lg font-bold mb-3 text-green-800">2. Process（処理）</h3>
          <p class="text-sm"><strong>LixelStudio</strong>: SLAMデータをLAS/E57形式へ変換、地上型と同等時間で処理</p>
        </div>

        <div class="bg-yellow-50 rounded-lg p-6">
          <h3 class="text-lg font-bold mb-3 text-yellow-800">3. Integrate（統合）</h3>
          <p class="text-sm"><strong>Leica Cyclone Core</strong>: 平面・断面・立面を仕上げる</p>
        </div>

        <div class="bg-purple-50 rounded-lg p-6">
          <h3 class="text-lg font-bold mb-3 text-purple-800">4. Visualize（可視化）</h3>
          <p class="text-sm"><strong>LCC Studio Web Link</strong>: 3D Gaussian Splattingによるフォトリアルモデルでバーチャルツアー・空間把握を実現</p>
        </div>
      </div>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
        <p class="font-semibold mb-2">🔗 LCC Viewerでモデルを見る</p>
        <a href="https://lcc-viewer.xgrids.com" 
           target="_blank" 
           rel="noopener noreferrer"
           class="text-blue-600 hover:text-blue-800 underline">
          ハイブリッドワークフローの成果物を確認
        </a>
      </div>

      <img src="${getImagePath('/images/blog/turkish-hybrid-workflow/image_002.webp')}" alt="ワークフロー図" class="w-full rounded-lg my-8" />

      <h2>実証事例：歴史的駅舎の記録</h2>

      <div class="bg-gray-50 p-6 rounded-lg my-8">
        <ul class="space-y-2">
          <li><strong>面積</strong>: 1,000㎡</li>
          <li><strong>スキャン時間</strong>: 約7分（徒歩0.9m/s）</li>
          <li><strong>環境</strong>: 低照度・複雑な装飾</li>
          <li><strong>出力</strong>: 点群 + フォトリアル3Dモデル（LCC Studio使用）</li>
          <li><strong>評価</strong>: 幾何学的な破綻なし、高天井でも高品質データを保持</li>
        </ul>
      </div>

      <img src="${getImagePath('/images/blog/turkish-hybrid-workflow/image_003.webp')}" alt="歴史的駅舎のスキャン結果" class="w-full rounded-lg my-8" />

      <h2>応用事例：ケルケネス遺跡の学術スキャン</h2>

      <ul class="list-disc pl-6 space-y-2 my-4">
        <li>大規模屋外現場にてハイブリッドスキャンを実施</li>
        <li>地上型 vs L2 Proの品質比較を実施</li>
        <li>学術的にも高評価：「L2 Proの使いやすさと品質に感銘を受けた」</li>
      </ul>

      <h2>導入効果</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 class="text-lg font-semibold mb-3 text-blue-600">✅ 経済性の向上</h3>
          <ul class="space-y-2 text-sm">
            <li>• L2 Proは低価格かつROIが早い</li>
            <li>• これまで予算外だったプロジェクトが実現可能に</li>
          </ul>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 class="text-lg font-semibold mb-3 text-green-600">✅ 新たな市場開拓</h3>
          <ul class="space-y-2 text-sm">
            <li>• ホテル・工場・森林・橋梁など大規模構造物のスキャンが容易に</li>
          </ul>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 class="text-lg font-semibold mb-3 text-purple-600">✅ 顧客満足度</h3>
          <ul class="space-y-2 text-sm">
            <li>• プロの測量士：高品質SLAMとして好評価</li>
            <li>• 初心者：ミリ精度への期待に要調整（教育必要）</li>
          </ul>
        </div>
      </div>

      <img src="${getImagePath('/images/blog/turkish-hybrid-workflow/image_004.webp')}" alt="導入効果のグラフ" class="w-full rounded-lg my-8" />

      <h2>XGRIDSのLCC & 3D Gaussian Splatting技術</h2>

      <ul class="list-disc pl-6 space-y-2 my-4">
        <li>フォトリアル出力は従来点群より「圧倒的に優れる」</li>
        <li>自動処理に対応し、バーチャルツアーなど活用範囲も広い</li>
      </ul>

      <div class="bg-gray-50 p-6 rounded-lg my-8">
        <h3 class="text-lg font-semibold mb-3">必要スペック例</h3>
        <ul class="space-y-2">
          <li><strong>RAM</strong>: 128GB</li>
          <li><strong>GPU</strong>: RTX 4080</li>
          <li><strong>CPU</strong>: Intel Core i9</li>
          <li><strong>処理時間</strong>: 10分スキャン×5回で約24時間</li>
        </ul>
      </div>

      <h2>専門家の見解</h2>

      <blockquote class="border-l-4 border-blue-500 pl-6 my-8 italic">
        <p class="text-lg mb-4">「迅速なドキュメント化が必要な現場では、精密測量を完全に求めるのではなく、L2 Proによるスピードと精度のバランスが最適解です。」</p>
      </blockquote>

      <blockquote class="border-l-4 border-green-500 pl-6 my-8 italic">
        <p class="text-lg mb-4">「XGRIDS製品はSLAMの枠を超え、LCCや3DGSといった唯一無二の技術を備えています。」</p>
      </blockquote>

      <h2>関連記事もチェック！</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <a href="/blog/skender-construction-workflow" class="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
          <h3 class="font-semibold text-blue-600 mb-2">Skender社のバーチャル現場記録事例</h3>
          <p class="text-sm text-gray-600">建設現場のデジタル化で作業時間を最大97%削減</p>
        </a>

        <a href="/blog/mexico-digital-conservation" class="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
          <h3 class="font-semibold text-blue-600 mb-2">メキシコ密林の生態系デジタル保存プロジェクト</h3>
          <p class="text-sm text-gray-600">熱帯雨林を3Dツインで未来へ残す</p>
        </a>

        <a href="/blog/submarine-tunnel-revolution" class="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
          <h3 class="font-semibold text-blue-600 mb-2">世界最長の海底トンネル建設</h3>
          <p class="text-sm text-gray-600">海面下115.4mの極限環境での3Dスキャン革命</p>
        </a>
      </div>

      <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg my-8">
        <h3 class="text-xl font-bold mb-4">ハイブリッドワークフローで測量を革新</h3>
        <p class="mb-4">地上型スキャナーとLixel L2 Proの組み合わせで、効率と精度の最適なバランスを実現しませんか？</p>
        <a href="/contact" class="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          お問い合わせはこちら
        </a>
      </div>
    `
  },
  'slam-gaussian-splatting': {
    title: 'SLAM × Gaussian Splatting が切り拓く3Dインタラクティブ体験の未来',
    date: '2024-11-13',
    category: '技術トレンド',
    author: 'XGRIDS編集部',
    image: '/images/blog/slam-gaussian-splatting/image_001.webp',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=108',
    content: `
      <h2>SLAMとGaussian Splattingの融合が創る新しい3D体験</h2>
      
      <p>3D技術の最前線で、2つの革新的な技術が融合し、まったく新しい可能性を生み出しています。リアルタイムSLAM（Simultaneous Localization and Mapping）と3D Gaussian Splatting（3DGS）の組み合わせにより、これまで実現不可能だった高品質な3Dインタラクティブ体験が現実のものとなりつつあります。</p>

      <img src="${getImagePath('/images/blog/slam-gaussian-splatting/image_001.webp')}" alt="SLAM × Gaussian Splattingの概念図" class="w-full rounded-lg my-8" />

      <h2>Lixel CyberColor：高精度点群と自動統合</h2>
      
      <p>XGRIDSが開発した「Lixel CyberColor」は、SLAMと3DGSを統合した画期的なソフトウェアです。Multi-SLAMアルゴリズムにより取得した高精度な点群データとカメラ画像を自動的に統合し、フォトリアリスティックな3Dモデルを生成します。</p>
      
      <h3>主な特徴：</h3>
      <ul>
        <li><strong>リアルタイム処理：</strong>スキャンしながら3Dモデルが生成され、現場で即座に確認可能</li>
        <li><strong>高精度な位置合わせ：</strong>SLAMによる正確な軌道推定により、センチメートル単位の精度を実現</li>
        <li><strong>自動最適化：</strong>AIアルゴリズムが点群とGaussian Splattingの最適な統合を自動実行</li>
      </ul>

      <img src="${getImagePath('/images/blog/slam-gaussian-splatting/image_002.webp')}" alt="Lixel CyberColorのインターフェース" class="w-full rounded-lg my-8" />

      <h2>国際的なミートアップでの発表</h2>
      
      <p>2024年10月、サンフランシスコで開催された「3D Gaussian Splatting Meetup」において、XGRIDSのチームがSLAMと3DGSの統合技術について発表を行いました。参加者からは、特に以下の点について高い関心が寄せられました：</p>
      
      <blockquote class="border-l-4 border-blue-500 pl-6 my-6 italic">
        「SLAMによる正確な軌道推定とGaussian Splattingの高品質なレンダリングを組み合わせることで、建設現場のデジタルツイン作成や文化財のアーカイブなど、幅広い分野での活用が期待できる」
        <cite class="block mt-2 text-sm text-gray-600">- ミートアップ参加者のコメント</cite>
      </blockquote>

      <img src="${getImagePath('/images/blog/slam-gaussian-splatting/image_003.webp')}" alt="サンフランシスコでのミートアップの様子" class="w-full rounded-lg my-8" />

      <h2>実践的な活用事例</h2>
      
      <h3>1. 建設現場のリアルタイムモニタリング</h3>
      <p>Lixelハンドヘルドスキャナーで取得したSLAMデータを、その場でGaussian Splattingモデルに変換。プロジェクト関係者は、高品質な3Dビジュアライゼーションを通じて現場の状況を即座に把握できます。</p>
      
      <h3>2. 文化財のインタラクティブアーカイブ</h3>
      <p>歴史的建造物や美術品を高精度でスキャンし、Gaussian Splattingによりフォトリアリスティックな3Dモデルを作成。VR/ARデバイスでの鑑賞や、教育コンテンツとしての活用が進んでいます。</p>
      
      <h3>3. 映画制作におけるバーチャルプロダクション</h3>
      <p>ロケ地のスキャンデータをリアルタイムで3DGSモデルに変換し、撮影現場でのプレビズやポストプロダクションでの合成作業に活用。制作期間の大幅な短縮を実現しています。</p>

      <img src="${getImagePath('/images/blog/slam-gaussian-splatting/image_004.webp')}" alt="実践的な活用事例のイメージ" class="w-full rounded-lg my-8" />

      <h2>技術的な課題と今後の展望</h2>
      
      <p>SLAM × Gaussian Splattingの統合は大きな可能性を秘めていますが、いくつかの技術的課題も存在します：</p>
      
      <ul>
        <li><strong>処理負荷の最適化：</strong>高品質な3DGSモデルの生成には依然として高い計算能力が必要</li>
        <li><strong>データ容量の管理：</strong>大規模な空間をスキャンした場合のデータ管理とストリーミング技術の改善</li>
        <li><strong>エッジケースへの対応：</strong>反射面や透明な物体など、特殊な材質への対応強化</li>
      </ul>
      
      <p>XGRIDSでは、これらの課題に対して継続的な研究開発を進めており、より使いやすく、より高品質な3Dキャプチャソリューションの提供を目指しています。</p>

      <div class="bg-gray-100 p-6 rounded-lg my-8">
        <h3 class="text-xl font-bold mb-4">関連リンク</h3>
        <ul class="space-y-2">
          <li>• <a href="https://www.xgrids.com/lixel-cybercolor" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Lixel CyberColor製品ページ</a></li>
          <li>• <a href="https://www.xgrids.com/resources/3dgs-meetup-sf" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">3D Gaussian Splatting Meetup発表資料</a></li>
          <li>• <a href="https://arxiv.org/abs/2308.14737" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">3D Gaussian Splatting論文（arXiv）</a></li>
        </ul>
      </div>

      <p>SLAM × Gaussian Splattingの融合技術は、3Dキャプチャと可視化の未来を大きく変える可能性を秘めています。XGRIDSは、この革新的な技術をより多くの人々が活用できるよう、今後も開発を続けてまいります。</p>
    `
  },
  'lithium-mica-measurement-revolution': {
    title: 'リチウム雲母の山積測定に革命を──Lixel携帯型スキャンシステムの導入事例',
    date: '2024-12-27',
    category: '導入事例',
    author: 'XGRIDS編集部',
    image: '/images/blog/lithium-measurement/image_001.webp',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=105',
    content: `
      <h2>はじめに</h2>

      <p>新エネルギー分野の中核資源として注目されるリチウム。中でも「リチウム雲母」は重要な鉱物資源であり、その採掘・運用の精度は業界全体の効率を左右します。本記事では、中国のリチウム工場における<strong>Lixel携帯型スキャンシステム</strong>の導入事例を紹介します。これにより、リチウム雲母の山積測定がどのように効率化・高精度化されたのかを解説します。</p>

      <img src="${getImagePath('/images/blog/lithium-measurement/image_001.webp')}" alt="リチウム雲母の山積測定現場" class="w-full rounded-lg my-8" />

      <h2>クライアント概要</h2>

      <div class="bg-gray-50 p-6 rounded-lg my-8">
        <ul class="space-y-2">
          <li><strong>所在地</strong>：中国</li>
          <li><strong>業種</strong>：リチウム炭酸塩の製造工場</li>
          <li><strong>生産能力</strong>：年間20,000トンのバッテリーグレード・リチウム炭酸塩を製造</li>
          <li><strong>設備</strong>：鉱山採掘、選鉱、リチウム塩製造、リサイクルまでを統合</li>
        </ul>
      </div>

      <h2>従来の課題</h2>

      <p>従来の山積測定方法（トータルステーションやGPS/RTK）は、次のような問題を抱えていました：</p>

      <ul class="list-disc pl-6 space-y-2 my-4">
        <li>作業が<strong>手間と時間</strong>を要する</li>
        <li><strong>人為的誤差</strong>が生じやすい</li>
        <li>計算精度の制限により<strong>生産計画への影響大</strong></li>
      </ul>

      <h2>導入されたソリューション</h2>

      <h3>使用機材・技術</h3>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
        <ul class="space-y-2">
          <li>• <strong>Lixel 携帯型スキャンシステム</strong></li>
          <li>• <strong>LiDAR + パノラマカメラ + 高精度IMU</strong></li>
          <li>• <strong>リアルタイムモデリング</strong></li>
          <li>• <strong>TRW点群処理ソフトウェア</strong></li>
        </ul>
      </div>

      <img src="${getImagePath('/images/blog/lithium-measurement/image_002.webp')}" alt="Lixel L2 Proの使用風景" class="w-full rounded-lg my-8" />

      <h2>現場での運用手順</h2>

      <h3>① プランニング</h3>

      <p>スキャン範囲を確認し、<strong>山積体の全体をカバー</strong>するようなスキャンルートを事前に設計。</p>

      <img src="${getImagePath('/images/blog/lithium-measurement/image_003.webp')}" alt="スキャンルート設計図" class="w-full rounded-lg my-8" />

      <h3>② データ収集</h3>

      <ul class="list-disc pl-6 space-y-2 my-4">
        <li><strong>Lixel L1 / L2 Pro</strong>を使用（延長ロッド付き）</li>
        <li><strong>リアルタイムプレビュー</strong>により、現場で即座にスキャン範囲やノイズを確認</li>
        <li><strong>一人作業が可能</strong>で、スキャン中のシャドウノイズも軽減</li>
      </ul>

      <img src="${getImagePath('/images/blog/lithium-measurement/image_004.webp')}" alt="スキャン作業とリアルタイムプレビュー" class="w-full rounded-lg my-8" />

      <h3>③ ポストプロセッシング</h3>

      <ul class="list-disc pl-6 space-y-2 my-4">
        <li><strong>LixelStudio</strong>にて点群の整理と山積体のセグメント化</li>
        <li>自動で<strong>埋め戻し体積・掘削体積</strong>を計算し、レポートとして出力</li>
      </ul>

      <img src="${getImagePath('/images/blog/lithium-measurement/image_005.webp')}" alt="点群処理と体積計算画面" class="w-full rounded-lg my-8" />

      <h2>測定結果の詳細（Pile 1〜4）</h2>

      <p>以下の画像は、4つのリチウム雲母山に対してスキャンおよび解析した体積・面積データの概要を示しています。</p>

      <img src="${getImagePath('/images/blog/lithium-measurement/image_006.webp')}" alt="Pile 1〜4の測定データ" class="w-full rounded-lg my-8" />

      <h2>導入成果</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 class="text-lg font-semibold mb-3 text-blue-600">✔ 効率性</h3>
          <p>最長90分のスキャンで<strong>追加設置・校正なし</strong></p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 class="text-lg font-semibold mb-3 text-blue-600">✔ 精度</h3>
          <p><strong>センチメートル単位の精度</strong>により、測定誤差を大幅に低減</p>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 class="text-lg font-semibold mb-3 text-blue-600">✔ 操作性</h3>
          <p>一体型で<strong>直感的な操作</strong>、リアルタイムで確認しながらスムーズに進行</p>
        </div>
      </div>

      <img src="${getImagePath('/images/blog/lithium-measurement/image_007.webp')}" alt="体積レポート画面" class="w-full rounded-lg my-8" />

      <h2>顧客の声</h2>

      <blockquote class="border-l-4 border-blue-500 pl-6 my-8 italic">
        <p class="text-lg mb-4">「Lixelモバイルスキャニングシステムは、在庫測定の精度と効率性を劇的に改善してくれました。簡単で信頼性も高く、我々の業務の基盤を支える技術です」</p>
        <cite class="text-sm text-gray-600">—— プロジェクトマネージャー（リチウム工場）</cite>
      </blockquote>

      <h2>関連製品紹介</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div>
          <h3 class="text-lg font-semibold mb-3">📦 ハードウェア</h3>
          <ul class="space-y-1 text-gray-700">
            <li>• Lixel L2 Pro</li>
            <li>• LixelKit K1</li>
            <li>• Lixel L2-16 / L2-32</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-3">🖥 ソフトウェア</h3>
          <ul class="space-y-1 text-gray-700">
            <li>• LixelStudio</li>
            <li>• Lixel CyberColor</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-3">🔌 プラグイン</h3>
          <ul class="space-y-1 text-gray-700">
            <li>• LCC for Revit</li>
          </ul>
        </div>
      </div>

      <h2>関連業種</h2>

      <div class="flex flex-wrap gap-3 my-6">
        <span class="bg-gray-100 text-gray-700 px-4 py-2 rounded-full">エネルギー・鉱業</span>
        <span class="bg-gray-100 text-gray-700 px-4 py-2 rounded-full">測量・地理空間情報</span>
        <span class="bg-gray-100 text-gray-700 px-4 py-2 rounded-full">建築・都市設計</span>
        <span class="bg-gray-100 text-gray-700 px-4 py-2 rounded-full">公共安全</span>
      </div>

      <h2>モデルを確認する</h2>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
        <p class="font-semibold mb-2">LCC Viewerでモデルを見る</p>
        <a href="https://lcc-viewer.xgrids.com" 
           target="_blank" 
           rel="noopener noreferrer"
           class="text-blue-600 hover:text-blue-800 underline">
          リチウム雲母山積の3Dモデルを確認
        </a>
      </div>

      <img src="${getImagePath('/images/blog/lithium-measurement/image_008.webp')}" alt="LCC Viewer画面" class="w-full rounded-lg my-8" />

      <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg my-8">
        <h3 class="text-xl font-bold mb-4">リチウム資源管理の最適化を実現</h3>
        <p class="mb-4">Lixelスキャンシステムで、あなたの鉱山・工場の在庫管理を革新しませんか？</p>
        <a href="/contact" class="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          導入のご相談はこちら
        </a>
      </div>
    `
  },
  'skender-construction-workflow': {
    title: '仮想現場が変える建設業務：Skender社のフォトリアリスティックかつ測定可能な施工ドキュメント化ワークフロー',
    date: '2025-05-16',
    category: '導入事例',
    author: 'XGRIDS編集部',
    image: '/images/blog/skender-workflow/construction-site-measurements.webp',
    originalUrl: 'https://www.xgrids.com/newsdetails?id=86',
    content: `
      <h2>実装事例とLCC Viewerリンク付き紹介</h2>

      <img src="${getImagePath('/images/blog/skender-workflow/construction-site-measurements.webp')}" alt="建設現場の測定可能な3Dスキャン" class="w-full rounded-lg my-8" />

      <h3>🏢 オフィス改修プロジェクト</h3>

      <p>以前のテナントが退去した2フロアのオフィス空間を、新テナントの内装準備前に記録。</p>

      <ul class="list-disc pl-6 space-y-2 my-4">
        <li><strong>課題</strong>：複数人が数時間かけて撮影・メモを行う非効率な作業</li>
        <li><strong>解決策</strong>：K1スキャナーで1フロア12分、全体30分未満で完了</li>
        <li><strong>成果</strong>：全室・階段・ヨガルームを含む完全記録を共有可能に</li>
      </ul>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
        <p class="font-semibold mb-2">🔗 LCC Viewerでモデルを見る</p>
        <a href="https://lcc-viewer.xgrids.com/?data=https://da9i2vj1xvtoc.cloudfront.net/prdfr/user-pub/18923282/18923282522136624/1673/Vital+Proteins+L2.lcc" 
           target="_blank" 
           rel="noopener noreferrer"
           class="text-blue-600 hover:text-blue-800 underline break-all">
          Vital Proteinsオフィスの3Dモデル
        </a>
      </div>

      <h3>🏗️ Preconstruction Scan-to-BIM 記録</h3>

      <p>50,000 sq ft × 4階の大型商業ビルの内部空間を全記録。</p>

      <ul class="list-disc pl-6 space-y-2 my-4">
        <li><strong>課題</strong>：従来の三脚スキャンでは5日＋長時間の後処理が必要</li>
        <li><strong>解決策</strong>：K1で各フロア17分、総作業時間を数時間に短縮</li>
        <li><strong>成果</strong>：Revitで利用可能なBIMモデルに変換可能な品質</li>
      </ul>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
        <p class="font-semibold mb-2">🔗 LCC Viewerでモデルを見る</p>
        <a href="https://lcc-viewer.xgrids.com/?data=https://da9i2vj1xvtoc.cloudfront.net/prdfr/user-pub/18891609/18891609522644641/1794/meta.lcc" 
           target="_blank" 
           rel="noopener noreferrer"
           class="text-blue-600 hover:text-blue-800 underline break-all">
          Scan-to-BIMプロジェクトの3Dモデル
        </a>
      </div>

      <h3>🧱 テナント拡張プロジェクト</h3>

      <p>空室40,000 sq ftのエリアを1回のスキャンで記録し、全業者と即時共有。</p>

      <ul class="list-disc pl-6 space-y-2 my-4">
        <li><strong>課題</strong>：各社が別々に現場を記録し、情報の食い違いや漏れが発生</li>
        <li><strong>解決策</strong>：K1で短時間スキャン、LCC Viewerリンクを全社に提供</li>
        <li><strong>成果</strong>：見積もり精度と施工効率が大幅向上</li>
      </ul>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
        <p class="font-semibold mb-2">🔗 LCC Viewerでモデルを見る</p>
        <a href="https://lcc-viewer.xgrids.com/?data=https://da9i2vj1xvtoc.cloudfront.net/prdfr/user-pub/18923282/18923282511660680/1025" 
           target="_blank" 
           rel="noopener noreferrer"
           class="text-blue-600 hover:text-blue-800 underline break-all">
          テナント拡張エリアの3Dモデル
        </a>
      </div>

      <h3>🏗️ コンクリ打設前の新築記録</h3>

      <p>コンクリートで埋設される前のスリーブや配筋等をL2 Proで可視化。</p>

      <ul class="list-disc pl-6 space-y-2 my-4">
        <li><strong>課題</strong>：施工完了は深夜、打設は翌朝という限られた記録時間</li>
        <li><strong>解決策</strong>：11,000 sq ftを15分でスキャン</li>
        <li><strong>成果</strong>：今後の配線・点検作業に利用可能な精緻なアーカイブを作成</li>
      </ul>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
        <p class="font-semibold mb-2">🔗 LCC Viewerでモデルを見る</p>
        <a href="https://lcc-viewer.xgrids.com/pub/dbaxkd-jpmc-l1-deck" 
           target="_blank" 
           rel="noopener noreferrer"
           class="text-blue-600 hover:text-blue-800 underline break-all">
          打設前床下の3Dモデル
        </a>
      </div>

      <h3>🏥 病院天井裏スキャン</h3>

      <ul class="list-disc pl-6 space-y-2 my-4">
        <li><strong>課題</strong>：衛生制限により1枚ずつしか天井タイルを開けられない</li>
        <li><strong>解決策</strong>：L2 Proを使い開口部から上向きスキャンを実施</li>
        <li><strong>成果</strong>：構造材を精緻に記録し、補強設計の資料として活用</li>
      </ul>

      <h2>📊 数値で見るXGRIDSの効果</h2>

      <div class="overflow-x-auto my-8">
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2 text-left">項目</th>
              <th class="border border-gray-300 px-4 py-2 text-left">変化</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">スキャン時間</td>
              <td class="border border-gray-300 px-4 py-2">最大97%削減（8時間 → 17分）</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 px-4 py-2">処理スピード</td>
              <td class="border border-gray-300 px-4 py-2">データ取得から数時間で共有可能に</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">モデル精度</td>
              <td class="border border-gray-300 px-4 py-2">Revit対応、BIM用に即活用可能</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 px-4 py-2">情報共有</td>
              <td class="border border-gray-300 px-4 py-2">全関係者に同一モデルで一括提供可能</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>💡 教育と導入ステップ</h2>

      <ol class="list-decimal pl-6 space-y-2 my-6">
        <li><strong>PoC段階</strong>：K1・L2 Proの試験導入</li>
        <li><strong>基本導入</strong>：K1を標準装備に</li>
        <li><strong>専門用途</strong>：L2 Proは天井裏・設備用に利用</li>
        <li><strong>教育方法</strong>：Ben氏がプロジェクトごとの説明動画を制作・配信</li>
      </ol>

      <h2>🧠 導入の決め手</h2>

      <ul class="list-disc pl-6 space-y-2 my-6">
        <li>非技術者でも使いやすいフォトリアルなモデル表示</li>
        <li>点群＋画像による圧倒的な視認性と測定精度</li>
        <li>スピードと共有性を両立したワークフロー</li>
      </ul>

      <h2>💬 コメント</h2>

      <blockquote class="border-l-4 border-blue-500 pl-6 my-8 italic">
        <p class="text-lg mb-4">「この機能の多くは、1年前には存在していなかった。<br>建設の未来が今、目の前で動いている」</p>
        <cite class="text-sm text-gray-600">— Ben Stocker（Skender Construction）</cite>
      </blockquote>

      <h2>🔗 関連リンク</h2>

      <ul class="list-disc pl-6 space-y-2 my-6">
        <li><a href="https://www.xgrids.com/newsdetails?id=86" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">オリジナル英語記事</a></li>
        <li><a href="https://www.linkedin.com/in/bstocker/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">Ben Stocker氏のLinkedIn</a></li>
      </ul>

      <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg my-8">
        <h3 class="text-xl font-bold mb-4">XGRIDSで建設現場をデジタル化</h3>
        <p class="mb-4">Skender社のような革新的なワークフローを、あなたの現場でも実現できます。</p>
        <a href="/contact" class="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          お問い合わせはこちら
        </a>
      </div>
    `
  },
  'submarine-tunnel-revolution': {
    title: '世界最長の海底トンネル建設を支える3Dスキャン革命：Lixel L2 Proの挑戦',
    date: '2025-02-13',
    category: '導入事例',
    author: 'XGRIDS公式ブログチーム',
    image: '/images/blog/submarine-tunnel/underground-001.webp',
    originalUrl: 'https://www.xgrids.com/insights/breaking-depth-records-lixel-l2',
    content: `
      <h2>はじめに：海底115.4mの極限へ</h2>

      <p>中国・青島の<strong>膠州湾第二海底トンネル</strong>は、全長17.48km（うち海底掘削9.95km）を誇る、世界最長となる高速道路海底トンネルです。この巨大インフラの建設において、安全・正確・効率を両立するには、かつてないレベルの<strong>リアルタイム三次元データ取得技術</strong>が求められました。</p>

      <p>この課題に対し、<strong>XGRIDSのLixel L2 Pro</strong>が採用され、<strong>世界で最も深く使用されたハンドヘルドLiDARスキャナ</strong>として記録を打ち立てました。</p>

      <img src="${getImagePath('/images/blog/submarine-tunnel/underground-001.webp')}" alt="海底トンネル建設現場" class="w-full rounded-lg my-8" />

      <h2>プロジェクト概要</h2>

      <div class="bg-gray-50 p-6 rounded-lg my-8">
        <h3 class="text-lg font-semibold mb-4">クライアント</h3>
        <ul class="list-disc pl-6 space-y-1">
          <li>百歳建設（Baisui）</li>
          <li>西南交通大学</li>
          <li>西南鉄道研究院</li>
        </ul>

        <h3 class="text-lg font-semibold mt-6 mb-4">産業分野</h3>
        <p>トンネル建設／インフラ開発</p>

        <h3 class="text-lg font-semibold mt-6 mb-4">課題</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li>海面下115.4mの高水圧環境（最大1.1兆パスカル＝1㎡あたり車40台分の圧力）</li>
          <li>硬質花崗岩による掘削困難地形</li>
          <li>従来の測量手法では非効率：トータルステーションや据え置き型スキャナは頻繁な機材移動が必要</li>
        </ul>
      </div>

      <img src="${getImagePath('/images/blog/submarine-tunnel/underground-002.webp')}" alt="Lixel L2 Proによるスキャン作業" class="w-full rounded-lg my-8" />

      <h2>導入技術とワークフロー</h2>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
        <h3 class="text-lg font-semibold mb-4">使用機材：</h3>
        <ul class="space-y-2">
          <li>✔ Lixel L2 Pro ハンドヘルドスキャナ</li>
          <li>✔ オンデバイスのリアルタイム3Dモデリング</li>
          <li>✔ 2cm精度の点群取得（ポスト処理不要）</li>
        </ul>
      </div>

      <h3>実施プロセス：</h3>

      <div class="space-y-6 my-8">
        <div class="flex items-start space-x-4">
          <span class="text-2xl font-bold text-blue-600">1️⃣</span>
          <div>
            <h4 class="font-semibold mb-2">迅速なデータ取得</h4>
            <p>掘削現場にて複数地点をスピーディーにスキャンし、精密な3Dデータを即時取得。</p>
          </div>
        </div>

        <div class="flex items-start space-x-4">
          <span class="text-2xl font-bold text-blue-600">2️⃣</span>
          <div>
            <h4 class="font-semibold mb-2">現場でのリアルタイム評価</h4>
            <p>掘削の過不足を即座に確認・修正、過掘削リスクを低減。</p>
          </div>
        </div>

        <div class="flex items-start space-x-4">
          <span class="text-2xl font-bold text-blue-600">3️⃣</span>
          <div>
            <h4 class="font-semibold mb-2">シームレスなデータ統合</h4>
            <p>生成された点群はCAD用の断面図やベクターデータに変換され、次工程の計画に直結。</p>
          </div>
        </div>
      </div>

      <img src="${getImagePath('/images/blog/submarine-tunnel/underground-003.webp')}" alt="リアルタイム点群データの可視化" class="w-full rounded-lg my-8" />

      <h2>導入効果</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 class="text-lg font-semibold mb-3 text-blue-600">✅ 効率性と機動力の向上</h3>
          <ul class="space-y-2 text-sm">
            <li>• スキャナの移動・設置不要、ハンドヘルドで迅速に取得可能</li>
            <li>• 作業員1名で運用可能な省人化構成</li>
          </ul>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 class="text-lg font-semibold mb-3 text-blue-600">✅ データ可視化の即時化</h3>
          <ul class="space-y-2 text-sm">
            <li>• 点群をリアルタイムで表示、ポスト処理なしで即座に活用</li>
            <li>• 掘削計画の意思決定をスピードアップ</li>
          </ul>
        </div>

        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 class="text-lg font-semibold mb-3 text-blue-600">✅ コスト・工期削減</h3>
          <ul class="space-y-2 text-sm">
            <li>• ステーションの移設回数を削減し、内部コストを最小化</li>
            <li>• 人的リソース削減と同時に安全性向上</li>
          </ul>
        </div>
      </div>

      <img src="${getImagePath('/images/blog/submarine-tunnel/underground-004.webp')}" alt="トンネル内部の3Dマッピング" class="w-full rounded-lg my-8" />

      <h2>実績：ハンドヘルドLiDARの新記録</h2>

      <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg my-8">
        <div class="space-y-4">
          <p class="text-xl">📌 <strong>世界で最も深い海底トンネルにおけるLiDARスキャニング（115.4m）</strong></p>
          <p class="text-xl">📌 <strong>リアルタイム×2cm精度×省力化を同時に実現</strong></p>
        </div>
        <p class="mt-6">この事例は、Lixel L2 Proが<strong>従来の測量概念を塗り替える存在</strong>であることを示す象徴的な成功事例です。</p>
      </div>

      <img src="${getImagePath('/images/blog/submarine-tunnel/underground-005.webp')}" alt="作業員によるスキャニング" class="w-full rounded-lg my-8" />

      <h2>技術詳細：極限環境での性能</h2>

      <div class="overflow-x-auto my-8">
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2 text-left">環境条件</th>
              <th class="border border-gray-300 px-4 py-2 text-left">課題</th>
              <th class="border border-gray-300 px-4 py-2 text-left">Lixel L2 Proの対応</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">高湿度環境</td>
              <td class="border border-gray-300 px-4 py-2">機器の結露・故障リスク</td>
              <td class="border border-gray-300 px-4 py-2">IP54防塵防水設計で安定動作</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 px-4 py-2">狭小空間</td>
              <td class="border border-gray-300 px-4 py-2">大型機器の設置困難</td>
              <td class="border border-gray-300 px-4 py-2">ハンドヘルド設計で自在に移動</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">低照度環境</td>
              <td class="border border-gray-300 px-4 py-2">視覚的な特徴点不足</td>
              <td class="border border-gray-300 px-4 py-2">LiDARベースで照明不要</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 px-4 py-2">振動・粉塵</td>
              <td class="border border-gray-300 px-4 py-2">測定精度への影響</td>
              <td class="border border-gray-300 px-4 py-2">IMU補正で安定した軌跡推定</td>
            </tr>
          </tbody>
        </table>
      </div>

      <img src="${getImagePath('/images/blog/submarine-tunnel/underground-006.webp')}" alt="点群データの詳細" class="w-full rounded-lg my-8" />

      <h2>建設現場の声</h2>

      <blockquote class="border-l-4 border-blue-500 pl-6 my-8 italic">
        <p class="text-lg mb-4">「従来の測量方法では1日がかりだった作業が、Lixel L2 Proなら2時間で完了。しかも精度は向上している。これは現場の常識を変える技術だ。」</p>
        <cite class="text-sm text-gray-600">— 百歳建設 プロジェクトマネージャー</cite>
      </blockquote>

      <img src="${getImagePath('/images/blog/submarine-tunnel/underground-007.webp')}" alt="データ処理と解析" class="w-full rounded-lg my-8" />

      <h2>今後の展望：インフラ測量の新時代</h2>

      <p>膠州湾第二海底トンネルでの成功は、極限環境におけるLixel L2 Proの信頼性を証明しました。今後期待される応用分野：</p>

      <ul class="list-disc pl-6 space-y-2 my-6">
        <li>深海油田・ガス田の施設点検</li>
        <li>地下鉄・地下都市開発</li>
        <li>災害時の緊急測量（地震後のトンネル点検等）</li>
        <li>原子力施設等の高リスク環境での遠隔測量</li>
      </ul>

      <img src="${getImagePath('/images/blog/submarine-tunnel/underground-008.webp')}" alt="未来のインフラ測量" class="w-full rounded-lg my-8" />

      <h2>おわりに</h2>

      <p>大規模かつ高精度を求められる現代のインフラプロジェクトにおいて、「即時」「可搬」「高精度」な3Dスキャン技術は、現場のあり方そのものを変革しつつあります。</p>

      <p>XGRIDSのLixel L2 Proは、<strong>次世代のインフラ測量のスタンダード</strong>として、今後ますますその存在感を高めていくでしょう。</p>

      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
        <h3 class="text-lg font-semibold mb-2">関連リンク</h3>
        <ul class="space-y-2">
          <li>• <a href="/products/lixel-l2-pro" class="text-blue-600 hover:underline">Lixel L2 Pro製品詳細</a></li>
          <li>• <a href="/case-studies" class="text-blue-600 hover:underline">その他の導入事例</a></li>
          <li>• <a href="/contact" class="text-blue-600 hover:underline">お問い合わせ</a></li>
        </ul>
      </div>
    `
  },
  'mexico-digital-conservation': {
    title: 'メキシコの秘境を守るデジタル保存技術',
    date: '2025-05-12',
    category: 'ケーススタディ',
    author: 'XGRIDS / Carlos Bausa Martinez',
    image: '/images/blog/mexico-conservation/Arquiavis_Veracruz_Waterfall001.webp',
    originalUrl: 'https://www.arquiavis.com/digitizing-the-wild',
    content: `
      <p class="lead">消えゆく熱帯雨林を3Dツインで未来へ残す</p>

      <h2>🌳 時が忘れた森：ベラクルスの未踏熱帯林</h2>
      
      <p>地球上では毎年1,000万ヘクタールもの森林が姿を消しています。そんな中、メキシコ・ベラクルス州の秘境に広がる原生林は、手つかずの生物多様性を保つ最後の聖域のひとつです。</p>
      
      <p>この地には、いまだ文献に記録されていない動植物や、古来からの生態系の関係性、そして気候変動に耐えるカーボンストレージシステムが存在しています。</p>

      <img src="${getImagePath('/images/blog/mexico-conservation/Arquiavis_Veracruz_Waterfall002.webp')}" alt="ベラクルスの熱帯雨林" class="w-full rounded-lg my-8" />

      <h2>🧠 デジタルで「保存ボタン」を押すという選択</h2>
      
      <p>アマゾン上層の1ヘクタールには、約300種の樹木が存在すると言われています。こうした植物からは、現代の処方薬トップ150のうち74%が生まれました。</p>
      
      <p>しかしメキシコでは2001年から2023年の間に約489万ヘクタール（9.2%）もの樹木が失われ、ベラクルスも国内有数の森林消失ホットスポットとなっています。</p>

      <h2>🎥 現地の映像：ベラクルスの熱帯雨林デジタル保存プロジェクト</h2>

      <div class="relative aspect-video my-8">
        <iframe 
          src="https://www.youtube.com/embed/V0QfkIumpBM"
          title="メキシコ・ベラクルスの熱帯雨林デジタル保存プロジェクト"
          class="absolute inset-0 w-full h-full rounded-lg"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <h2>🌐 生きた「デジタルツイン」が世界を変える</h2>
      
      <p>XGRIDSの技術「Green Cubes」プロジェクトでは、森林を空中LiDARと地上センサーでスキャンし、センチメートル精度の3Dモデル＝"生きたアーカイブ"を生成します。</p>
      
      <p>これにより以下が可能となります：</p>
      
      <ul class="list-disc ml-6 my-4">
        <li>生態系の詳細な構造把握</li>
        <li>カーボン計測やアラート分析の基盤構築</li>
        <li>ストーリーテリングによる保護活動の促進</li>
      </ul>

      <img src="${getImagePath('/images/blog/mexico-conservation/Arquiavis_Veracruz_Waterfall003.webp')}" alt="3Dスキャンされた森林" class="w-full rounded-lg my-8" />

      <h2>🛠 技術詳細：ArquiaVisが取り組んだ現地収録</h2>
      
      <h3>使用機材</h3>
      
      <ul class="list-disc ml-6 my-4">
        <li><strong>カメラ</strong>：XGRIDS「Lixel K1」空間カメラ</li>
        <li><strong>処理技術</strong>：LCC + 3D Gaussian Splatting（3DGS）</li>
      </ul>
      
      <h3>特徴</h3>
      
      <ul class="list-disc ml-6 my-4">
        <li>機材重量：約1kg、バックパックで携行可能</li>
        <li>操作：ワンボタン、単独オペレーション</li>
        <li>ファイル形式：軽量・高精度の3Dデータ</li>
        <li>ソフトウェア：複数のスキャンを自動統合するMap Fusion搭載LCC</li>
      </ul>

      <img src="${getImagePath('/images/blog/mexico-conservation/Arquiavis_Veracruz_Waterfall004.webp')}" alt="現地スキャン中の様子" class="w-full rounded-lg my-8" />

      <h2>🧭 フィールドにおける課題とその克服</h2>
      
      <p>過酷な自然環境でのスキャンには、多くの工夫と対策が求められました。</p>
      
      <h3>📊 フィールド課題と技術解決の対応表</h3>

      <div class="overflow-x-auto my-8">
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">課題</th>
              <th class="border border-gray-300 px-4 py-2">解決策</th>
              <th class="border border-gray-300 px-4 py-2">成果</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 px-4 py-2">密集した植生</td>
              <td class="border border-gray-300 px-4 py-2">3DGS処理アルゴリズム</td>
              <td class="border border-gray-300 px-4 py-2">メッシュの複雑さを排し、正確な植生表現を実現</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 px-4 py-2">変化する照明条件</td>
              <td class="border border-gray-300 px-4 py-2">曇天時の撮影スケジューリング</td>
              <td class="border border-gray-300 px-4 py-2">均一で高品質なテクスチャ再現</td>
            </tr>
            <tr>
              <td class="border border-gray-300 px-4 py-2">遠隔地での作業</td>
              <td class="border border-gray-300 px-4 py-2">軽量かつ自律型の機材</td>
              <td class="border border-gray-300 px-4 py-2">困難な地形でも完全なデータ取得を実現</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="border border-gray-300 px-4 py-2">動的な自然要素</td>
              <td class="border border-gray-300 px-4 py-2">動きのある対象のキャプチャ機能</td>
              <td class="border border-gray-300 px-4 py-2">滝や水流を自然に再現した3D表現</td>
            </tr>
          </tbody>
        </table>
      </div>

      <img src="${getImagePath('/images/blog/mexico-conservation/Arquiavis_Veracruz_Waterfall005.webp')}" alt="滝のデジタルツイン" class="w-full rounded-lg my-8" />

      <h2>🔬 活用例：環境保全への応用</h2>
      
      <p>このデジタルツインは、以下のような幅広い分野での利用が期待されています：</p>
      
      <ul class="list-disc ml-6 my-4">
        <li>生態系の経年変化の科学的モニタリング</li>
        <li>開発圧力の高い先住民地域の保全記録</li>
        <li>教育現場での没入型自然体験</li>
        <li>保護団体によるビジュアルアピール</li>
      </ul>

      <img src="${getImagePath('/images/blog/mexico-conservation/Arquiavis_Veracruz_Waterfall006.webp')}" alt="デジタルツインを活用した教育" class="w-full rounded-lg my-8" />

      <h2>💡 プロジェクト実施への推奨事項</h2>
      
      <ol class="list-decimal ml-6 my-4">
        <li>生態系が脅かされている場所を優先的にスキャン</li>
        <li>専門家と提携して高品質な記録を実現</li>
        <li>天候と時間（朝・曇天・無風）を重視</li>
        <li>1回のスキャンは10分以内を目安に</li>
        <li>ハーネスなどで両手を使える装備推奨</li>
        <li>Unreal Engine等で再ライティング・編集推奨</li>
      </ol>

      <img src="${getImagePath('/images/blog/mexico-conservation/Arquiavis_Veracruz_Waterfall007.webp')}" alt="Unreal Engineで再構築された3D空間" class="w-full rounded-lg my-8" />

      <h2>🌍 ArquiaVisの世界的活動</h2>
      
      <p>ベラクルスのプロジェクトは、建築家・写真家Carlos Bausa Martinez氏が率いる<strong>ArquiaVis</strong>の取り組みの一端にすぎません。彼らは以下のようなグローバルなプロジェクトにも関わっています：</p>
      
      <ul class="list-disc ml-6 my-4">
        <li><strong>歴史保存</strong>：中世のスペイン要塞やロンドンの文化財</li>
        <li><strong>島の記録</strong>：地中海の海岸浸食に直面する島々</li>
        <li><strong>農村文化</strong>：クロアチアの石造小屋の保全</li>
        <li><strong>城塞デジタル化</strong>：ヨーロッパ各地の要塞建築</li>
      </ul>

      <h2>🔭 未来へ向けて：失われる前に記録するという選択</h2>
      
      <p>写真や統計だけでは伝えきれない「場の記憶」を、3Dツイン技術は未来へと継承してくれます。今回のようなプロジェクトが世界中で普及すれば、より多くの人々が自然を知り、守ることができるのです。</p>

      <img src="${getImagePath('/images/blog/mexico-conservation/Arquiavis_Veracruz_Waterfall008.webp')}" alt="デジタル保存技術の未来" class="w-full rounded-lg my-8" />
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

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://xgrids.uphash.net'
  const pageUrl = `${baseUrl}/blog/${resolvedParams.slug}`
  
  // Extract first paragraph text for description
  const descriptionMatch = post.content.match(/<p[^>]*>([^<]+)<\/p>/)
  const description = descriptionMatch 
    ? descriptionMatch[1].trim() 
    : post.content.substring(0, 160).replace(/<[^>]*>/g, '').trim()

  return {
    title: post.title,
    description: description,
    openGraph: {
      title: post.title,
      description: description,
      url: pageUrl,
      siteName: 'UP HASH',
      locale: 'ja_JP',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: `${baseUrl}${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: description,
      site: '@uphash',
      creator: '@uphash',
      images: [`${baseUrl}${post.image}`],
    },
    alternates: {
      canonical: pageUrl,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const post = blogPosts[resolvedParams.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <>
      <StructuredData 
        data={articleSchema({
          title: post.title,
          description: post.content.substring(0, 160).replace(/<[^>]*>/g, '').trim(),
          author: post.author,
          datePublished: post.date,
          image: post.image
        })}
      />
      <StructuredData 
        data={breadcrumbSchema([
          { name: 'ホーム', url: 'https://xgrids.uphash.net' },
          { name: 'ブログ', url: 'https://xgrids.uphash.net/blog' },
          { name: post.title, url: `https://xgrids.uphash.net/blog/${resolvedParams.slug}` }
        ])}
      />
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
                src={getImagePath(post.image)}
                alt={`${post.title}のメイン画像`}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>

            {/* Share Buttons */}
            <div className="mb-12 pb-8 border-b border-gray-200">
              <ShareButtons 
                url={`${process.env.NEXT_PUBLIC_BASE_URL || 'https://xgrids.uphash.net'}/blog/${resolvedParams.slug}`}
                title={post.title}
                description={post.content.substring(0, 160).replace(/<[^>]*>/g, '').trim()}
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

            {/* Share Buttons at Bottom */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 mb-6">この記事が役に立ちましたか？ぜひシェアしてください！</p>
              <div className="flex justify-center">
                <ShareButtons 
                  url={`${process.env.NEXT_PUBLIC_BASE_URL || 'https://xgrids.uphash.net'}/blog/${resolvedParams.slug}`}
                  title={post.title}
                  description={post.content.substring(0, 160).replace(/<[^>]*>/g, '').trim()}
                />
              </div>
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
                        alt={`${relatedPost.title}のサムネイル画像`}
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
    </>
  )
}