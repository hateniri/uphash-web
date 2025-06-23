import { Metadata } from 'next'
import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

export const metadata: Metadata = {
  title: '業界別使用例 | 株式会社UPHASH',
  description: 'XGRIDSソリューションの業界別活用事例。地形測量、トンネル・インフラ、森林管理、建築BIM、映像制作、公共安全、エネルギー・鉱業など幅広い分野での3Dスキャニング活用をご紹介。',
}

const industryUseCases = [
  // 測量・地理空間（Surveying & Geospatial）
  {
    id: 'topographic-survey',
    title: '地形測量',
    category: '測量・地理空間',
    icon: '🗺️',
    overview: 'LiDAR技術とビジュアルデータ処理を融合させたXGRIDSの3D空間計測ソリューションは、高精度な地形デジタルマッピングを、従来困難だった環境下でも実現します。',
    scenarios: [
      {
        title: '飛行制限・高さ制限区域での測量',
        description: '軍事施設、空港周辺、橋の下、超高層都市エリアなど、ドローンが使用できない環境でも、安全かつ迅速に地形・構造物を測定可能'
      },
      {
        title: '複雑な地形・狭所空間の測量',
        description: '住宅密集地、細い路地、屋内外が混在する場所など、柔軟かつ小型な機材で、従来困難だった構造環境に対応'
      },
      {
        title: 'プライバシー配慮が求められるエリア',
        description: '住宅地、商業エリア等での迅速な測量。ドローンに代わる非侵入的な方法でプライバシー懸念を最小化'
      }
    ],
    challenges: [
      '作業効率の向上：従来の単点測量や複雑なネットワーク設定を不要にし、短時間で面的情報を取得可能',
      '環境障害への対応：高層ビルや植生による視界・信号遮断を受けにくく、都市部や山間部でも安定計測',
      'データの再利用性強化：写真とカラー点群が融合した3Dモデルにより、図面・断面・ARなど多用途で再活用可能'
    ],
    advantages: [
      '高効率：1人で運用可能なポータブルスキャナー、複雑地形でも従来比5～8倍の速さでデータ収集',
      '操作性の高さ：現場で即確認できるリアルタイム真色情報付き点群、視覚と一致する精度「見たままをそのまま記録」',
      '高速なデータ処理：複数マップの自動融合や並列処理に対応、AutoCAD連携も簡単（RCP出力対応）',
      '活用可能な3Dデータ：高テクスチャ再現のリッチな点群モデル、3D GIS／BIM／シミュレーション／ARなどに再利用可能'
    ],
    products: [
      { name: 'Lixel L シリーズ', description: '高精度3Dスキャナー（長距離レンジ、高密度点群、RTK対応）' },
      { name: 'Lixel K シリーズ', description: 'コンパクト3Dスキャナー（軽量・高速・コスト効率）' }
    ],
    software: [
      { name: 'LixelStudio', description: '点群処理・カラー化・メッシュ生成・断面抽出・AutoCAD連携に対応' }
    ],
    workflow: [
      '現場でのスキャン：スキャナー片手に歩行・旋回して現場全体をスキャン。必要に応じてRTKやGCPで絶対座標取得',
      'LixelStudioで処理：点群生成 → カラー化 → ノイズ除去、マップ融合／断面抽出／RCP出力 → AutoCADや他ツールへ連携',
      '成果物としての活用：地形断面図・等高線生成・体積計算、3Dモデルでの施主・関係者への説明／可視化プレゼンにも対応'
    ]
  },
  {
    id: 'tunnels-utility',
    title: 'トンネル・インフラ設備空間',
    category: '測量・地理空間',
    icon: '🚇',
    overview: 'XGRIDSのマルチセンサーフュージョン技術を用いた空間計測は、トンネルや地下インフラといった複雑・閉鎖的な環境においても、正確かつ統合的な3Dデータ取得を可能にし、施設のライフサイクル全体を通じた運用・保守を支援します。',
    scenarios: [
      {
        title: '新設・改修工事',
        description: '高精度マッピングにより、設計・施工の整合性検証を支援。現場の寸法や勾配、通行空間などを正確に把握でき、現場変更の手戻りを最小限に'
      },
      {
        title: '構造健全性モニタリング',
        description: '定期スキャンにより、亀裂・変形・ズレなどの異常を早期発見。予防保全型メンテナンスにより、ダウンタイムを減らし設備寿命を延伸'
      },
      {
        title: '災害対応・緊急点検',
        description: '災害発生後に迅速なスキャンを実施し、被害範囲の可視化と復旧判断の即時支援'
      },
      {
        title: 'アセットマネジメント・最適化運用',
        description: 'デジタルツインを活用し、保守履歴・空間最適化・リスク管理を可視化。運用効率を向上させつつ、ライフサイクルコストを削減'
      }
    ],
    challenges: [
      '時間と人手のかかる従来の現場測量（紙ベースや手作業）からの脱却',
      '最適な測定ポジションを確保しにくい環境での測量精度低下に対応',
      '分断された空間情報（図面・写真・測定値）が統合されない課題を解消',
      '再調査が必要になる「再利用性の低いデータ」や「古くなった情報」によるコスト増を回避'
    ],
    advantages: [
      '高効率：複雑環境でも単独オペレーターで5〜8倍高速にデータ取得、大規模エリアも1回のスキャンで記録',
      '操作性の高さ：リアルタイム真色情報付き点群による「見たまま計測」、マルチSLAMによる高精度な姿勢制御と色情報整合',
      '高速なデータ処理：複数地点データの自動マップ融合・同期処理、ワンクリックでAutoCAD連携用RCP出力／断面生成',
      '活用可能な3Dデータ：鮮明なテクスチャと精密な形状を兼ね備えた高品質3Dモデルを再利用可能、BIM／点検／空間最適化などへの統合が容易'
    ],
    products: [
      { name: 'Lixel L シリーズ', description: '長距離・高精度LiDARを搭載した業務用3Dスキャナー' },
      { name: 'Lixel K シリーズ', description: '軽量コンパクト設計で、狭所や屋内向けに最適' }
    ],
    software: [
      { name: 'LixelStudio', description: '点群処理・カラー化・断面抽出・AutoCAD連携対応' },
      { name: 'Lixel CyberColor', description: 'Gaussian Splat形式を活用した次世代3D表現技術' }
    ],
    workflow: [
      '現地スキャン（K1 or L2 Pro）：トンネル内・地下空間を歩行スキャン、必要に応じてGCPまたはRTKで地理参照',
      'LixelStudioで処理：点群生成 → カラー化 → 断面／メッシュ／マップ融合、RCP出力でAutoCAD・BIMツールへスムーズ連携',
      '活用：災害記録・維持管理計画・新設設計・デジタルツイン化、記録・共有・比較・可視化の全てを一元化'
    ]
  },
  {
    id: 'stockpile-volume',
    title: 'ストックパイル体積計算',
    category: '測量・地理空間',
    icon: '⛰️',
    overview: 'XGRIDSのLiDARスキャニングと自動処理技術を活用することで、鉱山・土木・物流・災害現場において多様な材料の高精度な体積計測を実現。安全性と効率性を両立しつつ、材料管理・コスト管理・在庫追跡を高度化します。',
    scenarios: [
      {
        title: '資源計画',
        description: '採掘現場・造成工事などでの土砂・資材の体積を正確に把握。見積・計画立案・工程管理の定量的な基準値を確保'
      },
      {
        title: '環境モニタリング',
        description: '廃棄物堆積場の定期体積監視により、汚染管理・浄化対応の判断材料を提供'
      },
      {
        title: '物流最適化',
        description: '倉庫内のバルク資材の体積把握による空間活用や運搬計画の最適化'
      },
      {
        title: '災害対応',
        description: '土石流・地すべり等発生後に体積変化を迅速把握。復旧計画・緊急対応のための重要基礎データを即時取得'
      }
    ],
    challenges: [
      '手作業中心の従来測量による作業負荷とカバー範囲の制限',
      '複雑地形や広範囲素材における3Dデータの測定精度不足',
      '複雑形状に対する煩雑な体積計算作業と人為的ミス',
      '測定中の安全リスクや判断遅延を招く長時間作業'
    ],
    advantages: [
      '高効率：ストックパイルへの非接触・高速スキャンにより、従来比5〜10倍の効率化。単独オペレーターで広範囲・高密度データを安全に取得可能',
      '操作の簡単さ：現場でリアルタイムに真色情報付き点群を視覚確認、Multi-SLAMによる高精度なカラー整合',
      '高速な体積処理：3ステップで体積計算を完了：点群読み込み → 範囲指定 → 自動レポート生成、複数時期の比較機能により、在庫変動や搬出記録の時系列把握が容易'
    ],
    products: [
      { name: 'Lixel L シリーズ', description: '長距離・高密度点群に強い。大規模ストックパイルに最適' },
      { name: 'Lixel K シリーズ', description: '軽量・携行性に優れ、狭所や中小規模堆積物の迅速スキャンに適応' }
    ],
    software: [
      { name: 'LixelStudio', description: '点群処理・カラー化・断面抽出・体積計算・比較レポート出力機能を搭載' }
    ],
    workflow: [
      '現場でのスキャン（L2 Pro / K1）：ストックパイル全体を歩行または周回スキャン、必要に応じてRTKやGCPで地理参照',
      'LixelStudioで処理：点群生成 → 範囲切り出し → 体積算出（自動）、複数日・複数地点の比較、CSV／PDFレポートとして出力',
      '活用例：工事進捗の出来形管理、資材残量の在庫更新、廃棄物量の監視、地主・発注者との数量確認エビデンスとして提出可能'
    ]
  },
  {
    id: 'urban-underground',
    title: '都市地下空間マネジメント',
    category: '測量・地理空間',
    icon: '🏙️',
    overview: 'XGRIDSは、地下パイプライン・防災設備・重要インフラ施設を対象に、高精度3Dデジタルツインを生成することで、都市インフラの可視化・維持管理・緊急対応の高度化を支援します。',
    scenarios: [
      {
        title: '地下配管管理',
        description: '上下水道・電力・ガスなどのネットワークを正確な3D点群で可視化。複雑な配管の維持管理・経路変更・設備更新を効率化'
      },
      {
        title: '地下施設の空間管理',
        description: '地下鉄駅・地下駐車場・商業ビル地下階などの施設状況をリアルタイムに把握。空間容量・構造状態・動線確保などを明確に管理可能'
      },
      {
        title: '防災対応の強化',
        description: '緊急時における避難計画の立案・避難経路の可視化・危険領域の抽出を支援。災害発生時も迅速な現場状況の再現・共有が可能'
      },
      {
        title: '資産マネジメントの最適化',
        description: 'インフラのライフサイクルを通じた保守履歴管理。稼働状況に応じた点検・修繕判断で無駄な工事コストとダウンタイムを削減'
      }
    ],
    challenges: [
      '手作業測量の非効率性（巻尺・トータルステーションなどの多人作業）',
      '照度・湿度・閉塞環境下での精度低下（従来機器の限界）',
      '複雑構造・死角の情報欠落による空間情報の断片化',
      '延長作業中の安全リスク（換気不良、有毒ガス、漏電、構造不安定等）',
      '運用中施設でのデータ取得遅延'
    ],
    advantages: [
      '高効率：1人運用で5～8倍の高速計測が可能、照明不要・狭所対応で、施設の停止なしに点群取得が可能',
      '操作性：リアルタイムカラー点群表示で現場状況を即確認、「見たまま記録できる」安心感とデータ信頼性',
      '高速処理：マップ融合・データ同期処理により断面や平面図も即座に出力、AutoCAD（RCP形式）出力対応で設計・設備台帳へ直接連携可能',
      '実用的な3D成果物：鮮明なテクスチャと精密形状を備えた高品質3Dモデル、設計／管理／VR可視化／点検ロボット連携など多用途に再利用可能'
    ],
    products: [
      { name: 'Lixel L2 Pro', description: '長距離×高精度×カラースキャン対応の上位機種' },
      { name: 'LixelKity K1', description: '軽量・狭所対応・初期導入に最適' }
    ],
    software: [
      { name: 'LixelStudio', description: '点群処理、断面生成、カラー化、RCP出力、体積計算' },
      { name: 'Lixel CyberColor', description: 'Gaussian Splat形式による次世代3D可視化と軽量化モデル生成' },
      { name: 'LCC for Revit', description: 'Revit向け3D点群プラグイン（BIM連携用）' }
    ],
    workflow: [
      '地下空間でのスキャン：スキャナー（K1/L2 Pro）で歩行または手持ちスキャン、必要に応じてRTK・GCP使用',
      'LixelStudioで処理：点群生成 → ノイズ除去 → カラー化 → 断面抽出／RCP出力',
      '活用：図面化／避難計画／デジタルツイン／設備管理台帳／自治体報告資料に展開'
    ]
  },
  {
    id: 'forestry-management',
    title: '森林管理',
    category: '測量・地理空間',
    icon: '🌲',
    overview: 'XGRIDSは、森林資源の定量化と健全性把握を目的に、高精度な3Dデジタル森林モデルを短時間で生成します。これにより、従来の目視・手計測に頼った現地調査を自動化・高精度化し、森林の維持管理・炭素計測・保全計画に革新をもたらします。',
    scenarios: [
      {
        title: '森林資源管理',
        description: '樹木の密度・高さ・体積を正確に計測し、デジタル森林台帳を構築。アナログな測量を精密な3Dモデルベースの調査手法に変換'
      },
      {
        title: '森林健康モニタリング',
        description: '病害虫の拡大、乾燥ストレス等の異常植生を早期検知。広域の変化を可視化し、個体・群落レベルでの対応判断を支援'
      },
      {
        title: '炭素隔離量の算定',
        description: 'バイオマス量・炭素貯蔵量を高精度に数値化。カーボンクレジット発行に必要な裏付けデータとして活用'
      },
      {
        title: '山火事リスクマッピング',
        description: '可燃物密度・傾斜・風通しなどの火災リスク要因を可視化。避難計画・防火林整備に役立つ基礎マップを構築'
      },
      {
        title: '生物多様性・保全計画',
        description: '生物多様性ホットスポットを高精度に特定し、人の立ち入りを最小限にした保護調査が可能。長期的な生息地モニタリングにも最適'
      }
    ],
    challenges: [
      '多人数・長時間を要する現地作業からの脱却（テープ計測・ポールによる目視記録など）',
      '急傾斜地や密林での手計測誤差・危険性を回避',
      '標本抽出に依存する不完全なデータ収集ではなく、全樹木・面全体の網羅的データ取得へ',
      '病害・盗伐・成長傾向の変化を後追いでしか把握できない従来調査から、リアルタイム型の監視へ転換'
    ],
    advantages: [
      '高効率：森林内でも1人でスキャン可能な可搬型LiDARシステム、従来比5〜8倍のスピードで、森林全体のデータ取得を完了',
      '操作性：リアルタイム点群＋カラー画像取得により、その場でスキャン精度を確認可能、Multi-SLAMにより、林床でも安定した姿勢推定とカラー整合が可能',
      '高速データ処理：マップ融合・自動木別分離により、樹木単位の属性マッピングを短時間で完了、樹高別・種別マップや断面図、断層地形モデルへの出力も容易',
      '活用可能な3Dデータ：点群から得られる豊富な樹木属性データ（位置、太さ、高さ、ボリューム）、研究／GIS統合／保全施策／炭素クレジット取引への応用が可能'
    ],
    products: [
      { name: 'Lixel L シリーズ', description: '長距離・高密度スキャン向け。広範囲林業調査に最適' },
      { name: 'Lixel K シリーズ', description: '軽量モデル。傾斜地・密林・運搬困難地での使用に最適' }
    ],
    software: [
      { name: 'LixelStudio', description: '点群処理・断面抽出・体積計算・レポート出力対応' },
      { name: 'Lixel CyberColor', description: '高密度なビジュアル3D表現と軽量配信用のフォーマット生成' }
    ],
    workflow: [
      '森林内スキャン：登山・徒歩移動しながらスキャン（K1/L2 Pro）、GNSSが不安定な林内でもMulti-SLAMが正確に軌跡を補正',
      'データ処理（LixelStudio）：点群生成 → カラー化 → 任意範囲抽出 → 樹木別分割・属性抽出、CSV・GeoJSON・RCPなどへエクスポート可',
      '分析・応用：炭素量分析／林業資源台帳／モニタリングツール連携、マップと実写の融合により、定量・定性的管理の両立'
    ]
  },

  // 建築・都市計画（AEC & Urban Planning）
  {
    id: 'facade-measurement',
    title: '外壁計測',
    category: '建築・都市計画',
    icon: '🏢',
    overview: 'XGRIDSのポータブル3Dスキャニング技術は、外壁（ファサード）を非接触かつ高効率でデジタル計測し、高精度な点群データとテクスチャ情報をもとに、寸法図・3Dモデル・断面図などの成果物を迅速に生成します。',
    scenarios: [
      {
        title: '建築図面化・リノベーション計画',
        description: '複雑な建築外壁の形状を正確な寸法付きモデルへ変換。改修設計・構造確認・図面化業務の精度とスピードを両立'
      },
      {
        title: '都市再開発プロジェクト',
        description: '再開発対象の街区・ブロック全体を短時間でデジタル化。計画立案・住民説明・景観検討などの共通基盤データを構築'
      },
      {
        title: '歴史的建造物の保存',
        description: '数百年単位の建築ディテールをセンチメートル精度で記録。劣化進行の比較・修復部位の特定に活用可能な3Dデータを取得'
      },
      {
        title: '災害被害評価',
        description: '地震・火災後に即時スキャンを実施し、損傷状態を正確に可視化。保険査定や構造安全確認のための高精度な記録資料として提供'
      }
    ],
    challenges: [
      '複数人・長時間を要する現場作業（巻尺・脚立・レーザー距離計）',
      '狭隘・高層・交通密集環境下での三脚機器展開の困難さ',
      '測定誤差の多い手作業ベースの図面化作業',
      '点数の少ないスケッチからの図面変換では得られなかった実寸・テクスチャ付きの精密データ'
    ],
    advantages: [
      '高効率：1人で持ち運べる軽量スキャナーによって、作業時間を最大1/5に短縮、通行人・車両がある環境でもスムーズに対応',
      '操作の簡便さ：リアルタイム表示される真色情報付き点群により「その場で確認・修正」が可能、高層部もポールやドローンを使わず計測可（最大視野：垂直270°）',
      '高速処理：点群の自動カラー化・マップ融合により、AutoCAD向けRCP出力までワンストップ処理、断面抽出・壁面展開も数分で出力可能',
      '実用性の高い3Dデータ：テクスチャ付きの高精細3Dモデルとして再利用可能、設計者・文化財保護者・保険会社など、多部署・多目的に展開できる成果物'
    ],
    products: [
      { name: 'Lixel L シリーズ', description: '外壁・建物全体の3Dスキャンに最適。高精度＋長距離' },
      { name: 'Lixel K シリーズ', description: '携行性に優れ、都市部・住宅地での運用に最適' }
    ],
    software: [
      { name: 'LixelStudio', description: '点群処理、カラー化、断面図生成、AutoCAD連携対応（RCP出力）' },
      { name: 'Lixel CyberColor', description: '高密度かつ軽量な3D表現を実現する次世代3DGS技術対応' }
    ],
    workflow: [
      '現地スキャン（K1 または L2 Pro）：外壁に沿って歩行スキャン、必要に応じてGCPまたはRTKによる座標取得',
      'LixelStudioで処理：点群生成 → カラー化 → 平面抽出 → AutoCAD連携データ出力、必要に応じてメッシュ化や3Dモデルエクスポートも対応可能',
      '成果物展開：修復図面、施工指示書、3Dアーカイブ、災害査定資料、意匠比較 など'
    ]
  },
  {
    id: 'real-estate-survey',
    title: '不動産測量',
    category: '建築・都市計画',
    icon: '🏠',
    overview: 'XGRIDSは、屋内外を一度のスキャンで統合的に計測し、3Dモデル・平面図・立面図・断面図を迅速かつ高精度に生成。従来の目測や再訪を前提とした非効率な業務を、デジタルツインベースの即時活用型測量に変革します。',
    scenarios: [
      {
        title: '不動産の計測業務',
        description: '1回のスキャンで寸法を正確に取得。取引時の再測定・面積トラブルを未然に回避'
      },
      {
        title: '売買契約・内覧支援',
        description: '現地でリアルな3Dモデルと寸法をその場で確認。信頼性の高いデータにより、成約までの時間を短縮'
      },
      {
        title: '物件管理・リノベーション計画',
        description: '構造情報をデジタル台帳化し、再訪不要の効率的プランニング。修繕・工事・設備入替なども精密寸法に基づき計画可能'
      },
      {
        title: '都市計画・建築確認対応',
        description: '敷地・建物形状の証拠ベース情報として行政提出。許認可取得や土地利用判断を加速・簡略化'
      },
      {
        title: '災害時の被害評価',
        description: '火災・地震後の損傷状況を数時間でデジタル記録。被害前後の比較による保険申請・修繕計画に活用'
      }
    ],
    challenges: [
      '複雑構造の手測量とCAD化に要する時間・労力',
      '手計測・写真ベースの誤差・抜けによる信頼性不足',
      '梁・階段裏・吹き抜け等、手作業では把握不能な部分の記録',
      '暗所・階層構造・入り組んだ間取りにおける測定困難'
    ],
    advantages: [
      '高効率：ポータブルスキャナーで複雑な物件でも約1/5の時間で計測完了、単独オペレーション対応で現場スタッフの負荷を大幅削減',
      '操作の簡便さ：リアルタイムでカラー点群を視認・記録、室内光環境に依存せず、暗所や狭所でも高精度記録',
      '高速な処理：スキャン後すぐにAutoCAD連携可能なRCPファイルを出力、平面図・立面図・断面・メッシュモデルをワンクリック生成',
      '実用性の高い3D成果物：実寸と質感を備えた3Dモデルにより、営業・設計・管理部門が共通活用、建物全体の空間把握／寸法抽出／修繕見積／法令対応に応用可能'
    ],
    products: [
      { name: 'Lixel L シリーズ', description: '建物全体を外観含め一括取得。中〜大規模施設向け' },
      { name: 'Lixel K シリーズ', description: '軽量設計で、一般住宅・屋内中心の不動産計測に最適' }
    ],
    software: [
      { name: 'LixelStudio', description: '点群生成、カラー化、断面抽出、RCP出力、平面展開図生成など' },
      { name: 'Lixel CyberColor', description: '鮮明な3Dビジュアル＋軽量ファイルによるデジタル双子構築支援' }
    ],
    workflow: [
      '現地スキャン：屋外・屋内を1回で連続スキャン、RTKまたはGCPを活用した座標取得も可能',
      'LixelStudioでの処理：点群処理 → カラー化 → 平面・立面抽出 → RCP・CSV出力、必要に応じて面積計算・メッシュ生成も対応可能',
      '成果物展開：売買資料・設計図・修繕計画・災害証明・不動産登記補助資料などに展開可能'
    ]
  },
  {
    id: 'reverse-bim',
    title: 'リバースBIMモデリング',
    category: '建築・都市計画',
    icon: '🏗️',
    overview: 'XGRIDSは、既存建築・構造物を3Dスキャンし、構造化されたBIMモデルへ自動変換することで、建設業界のDX（デジタルトランスフォーメーション）を加速します。3D Gaussian Splatting + Multi-SLAM + コンポーネント認識技術により、設計図面が存在しない施設でも高精度BIM化を実現します。',
    scenarios: [
      {
        title: '仮想トレーニング環境の構築',
        description: '工場、空港、鉄道駅など実環境をスキャン→BIM化→VRシミュレーションへ展開。訓練品質の向上、安全教育や熟練者技術継承にも貢献'
      },
      {
        title: 'AR／VR向け高精度位置参照',
        description: '屋内外の空間を実寸・高解像度で3Dモデル化し、ARナビゲーションやデジタル重畳表示の基準モデルとして活用可能'
      },
      {
        title: '施設管理',
        description: 'デジタルツイン化により構造・設備の変化をリアルタイム把握。メンテナンス通知や異常箇所の特定など、予防保全型の運用が可能'
      },
      {
        title: '歴史的建造物のBIM記録',
        description: '文化財・重要建築物のディテールを非接触でデジタル保存。修復プロジェクトや災害対応、保険用の永続的な3D記録として活用'
      }
    ],
    challenges: [
      '固定型レーザースキャナーによる設置・測定時間の長さと照明条件依存',
      '手測定や写真ベースの不正確な図面・記録',
      '設備室・天井裏・構造体内部などの測定が困難なエリアへの対応',
      '建物稼働中の計測による業務妨害リスクを最小限に'
    ],
    advantages: [
      '高効率：1人で運用可能なポータブルスキャナーにより、現地測量を最大5倍高速化、稼働中施設でもワークフローを止めずにデータ取得',
      '高品質な現実モデリング：Revit対応のBIMモデル生成に対応、点群からBIMまでの「ギャップ」を埋める統合的処理が可能',
      'インテリジェントなコンポーネント認識：点群をパラメトリックBIMコンポーネント（柱・梁・壁・配管）へ自動分類、構造・建築・MEP（機械・電気・配管）系統の自動検出',
      '強化されたBIM検証：実データとBIMモデルをリアルタイムで比較し、施工誤差や現況のずれを即時に検出・修正'
    ],
    products: [
      { name: 'Lixel L シリーズ', description: '高層建築・複雑構造向け。高密度点群取得に最適' },
      { name: 'Lixel K シリーズ', description: '携行性に優れ、室内空間・設備室・配管空間に最適' }
    ],
    software: [
      { name: 'Lixel CyberColor', description: 'Gaussian Splat形式に対応した次世代3D処理＆軽量化技術（点群＋画像＋構造を統合処理）' }
    ],
    workflow: [
      '現場スキャン（L2 Pro / K1）：建物外観および内部空間を連続的にスキャン、SLAMベースで座標補正しながら、隙間なくデータ取得',
      'LixelStudio / CyberColorで処理：点群生成 → カラー化 → Gaussian変換 → セグメント分解、BIM化・Revit連携・LCC for Revitを通じて要素ごとのBIMモデル化',
      '活用：リバース設計・アズビルド記録・施設管理・訓練シミュレーションなどに活用可能'
    ]
  },
  {
    id: 'bim-construction-progress',
    title: 'BIM施工進捗管理',
    category: '建築・都市計画',
    icon: '🏗️',
    overview: 'XGRIDSは、施工中の建築現場を3D Gaussianスキャンで可視化し、BIMモデルと重ね合わせて比較・記録することで、施工の「見える化」「証明可能な管理」「誤差の早期検出」を実現します。',
    scenarios: [
      {
        title: 'マイルストーンごとの進捗追跡',
        description: '計画段階〜実施工のクリティカルパス上の要素を定点管理。報告遅延を「日単位→時間単位」に短縮'
      },
      {
        title: '進捗の視覚化',
        description: '実際の施工状態をBIMと重ねて即座に比較可視化。現場に行かずとも進捗確認が可能になり、関係者との齟齬を防止'
      },
      {
        title: '施工精度の検証',
        description: '構造要素・配管・機器等の位置・寸法・設置状況をBIMと照合。主観的評価ではなく、定量データで施工精度を記録・判断'
      }
    ],
    challenges: [
      '現場監督の手書き進捗記録や写真管理の負担',
      '壁の中に隠れる設備・配線の撮影漏れによる後戻り',
      'オーナーやゼネコン間での完成度・支払いを巡るトラブル',
      '躯体ずれや構造精度エラーが後工程に波及するリスク',
      '天候・災害遅延時の証跡が残らないリスク'
    ],
    advantages: [
      '高効率：1人で施工現場全体を5～8倍の速さで記録可能、図面・日報作成に使える「そのまま使える記録データ」',
      '高精度な現況モデル化：LiDARとカメラによるカラー点群＋SLAM軌跡補正で Revit対応の正確な3Dモデルを生成',
      'BIM照合機能：点群 vs BIMモデルの差分をリアルタイムで比較、躯体・配管・梁・天井などの配置ずれを即検出 → デジタルツインを更新'
    ],
    products: [
      { name: 'Lixel L シリーズ', description: '高層建築・大規模施設の構造体トラッキングに最適' },
      { name: 'Lixel K シリーズ', description: '屋内・中小施設・設備空間の記録に最適。軽量・高速対応' }
    ],
    software: [
      { name: 'Lixel CyberColor', description: 'Gaussian Splat形式による次世代3Dモデル＋BIM整合機能搭載（Revit連携、点群とBIMの比較、差分検出）' }
    ],
    workflow: [
      '定期スキャン（L2 Pro または K1）：躯体完了時・MEP設置後・内装仕上げ前など、各工程で数分のスキャン',
      'Lixel CyberColorで処理：点群生成 → カラー化 → BIMモデルと重ね合わせ → 差分抽出、必要に応じてRevitへデータ同期（LCC for Revit対応）',
      '成果物展開：完成度確認資料、変更履歴台帳、追加請求根拠、出来形記録など、発注者・施工者・設計者間の透明性ある情報共有を実現'
    ]
  },

  // 映像・エンターテインメント（Film & Entertainment）
  {
    id: 'location-scouting',
    title: 'ロケーションスカウト＆プリビズ',
    category: '映像・エンターテインメント',
    icon: '🎬',
    overview: 'XGRIDSのリアルタイム3DスキャンとフォトリアルなGaussian Splatモデルにより、実在ロケーションをそのまま制作可能な3D資産へ変換。正確な寸法と色彩で、プリプロダクションから撮影・VFX・セット設計までを完全可視化します。',
    scenarios: [
      {
        title: 'ロケ地記録・共有',
        description: '複数回の技術ロケを不要化。一度のスキャンで全チームが閲覧可能なデジタルダブルを生成。寸法・注釈付きモデルにより、美術・照明・カメラ・監督の全セクションが共通理解を得られる'
      },
      {
        title: 'バーチャルカメラ計画',
        description: '現場に行かずにレンズ選定・カメラポジション検討・動線設計が可能。高価なスタッフ拘束を抑えつつ、ブロッキングや動きの精度が向上'
      },
      {
        title: 'セット設計・美術',
        description: '実寸データから現地にぴったり合う美術セット設計が可能。寸法誤差による現場での組立不可・当日修正コストを削減'
      },
      {
        title: 'ビジュアライゼーション統合',
        description: 'スキャンデータを直接Unreal EngineやUnityへインポートし、バーチャル背景とリアル空間を融合。信頼性あるプリビズ素材として監督やVFX部門がそのまま使用可能'
      }
    ],
    challenges: [
      '写真・図面にない空間情報（天井高・柱・間口など）の撮り忘れ',
      'リモートチームが現地状況を共有できないことによる段取りミス',
      'VFXチームへのロケセット情報の遅延・不足による撮り直し',
      'プリプロコスト（技術ロケ・下見）と撮影準備時間の圧迫'
    ],
    advantages: [
      '精密かつリアルな再現：センチメートル単位のLiDAR精度＋フォトリアルなGaussian Splat表現、実在空間をそのままバーチャル空間へ再現',
      '広範囲ロケ地の高速スキャン：倉庫サイズのサウンドステージから都市ロケまで1人で短時間スキャン可能、ビジュアル専用スキャンでは不可能な寸法精度・処理速度・屋外対応力',
      'バーチャルプロダクションへの直結：Lixel CyberColor SDKを使ったUnreal Engineへのダイレクトインポート、変換不要で撮影→CG→編集まで一貫したワークフローを構築'
    ],
    products: [
      { name: 'Lixel L シリーズ', description: '屋外・大規模ロケの高精度キャプチャに対応' },
      { name: 'Lixel K シリーズ', description: '軽量で、屋内スタジオや車内など小空間に最適' }
    ],
    software: [
      { name: 'Lixel CyberColor', description: 'Gaussian Splat形式による軽量・高品質な3Dモデル生成（Unreal Engine / Unity連携対応SDK付き）' }
    ],
    workflow: [
      'ロケ地スキャン（L2 Pro / K1）：現地を歩きながらスキャン、1回で建物・空間全体をキャプチャ、必要に応じて外部パノラマカメラと連携し色精度向上',
      'Lixel CyberColorで処理：点群生成 → Gaussianモデル化 → Unreal Engineへ直接インポート、カメラ設計・構図・照明プランなどの仮想プレビズ環境を即構築',
      '活用：絵コンテとの比較、監督との事前合意形成、美術チームとのレイアウト調整、撮影後のVFXや構成検証にもシームレス対応'
    ]
  },
  {
    id: 'ar-vr',
    title: 'AR/VR コンテンツ制作',
    category: '映像・エンターテインメント',
    icon: '🥽',
    overview: 'XGRIDSは、Multi-SLAMと3D Gaussian Splatting技術を組み合わせた高精度な空間再現により、AR／VR領域でのリアルタイム環境構築に最適な3Dデータを提供します。手作業の建模・テクスチャ作成なしで現実空間を没入型体験へ変換し、PicoやMeta Questシリーズへの最適化によって、あらゆる用途で実用的なXRコンテンツ制作が可能です。',
    features: [
      {
        title: 'データパイプライン',
        description: 'Lixel CyberColor (.lcc)形式で出力された3DシーンをそのままVR/ARアプリへ読み込み可能。数億点規模のGaussian Sceneでも滑らかにレンダリングし、圧倒的な臨場感を実現'
      },
      {
        title: 'マルチデバイスインタラクション',
        description: 'PicoやQuest対応のハンドトラッキングにより、手の動きを正確に反映。掴む・回す・移動する・奥行き操作といった複雑なジェスチャーも対応可能'
      },
      {
        title: 'ナビゲーションシステム',
        description: '手のひらUI + 文脈ホットキーによる直感操作。空間内の注目エリアを「ポイント・オブ・インタレスト」としてブックマーク可能'
      },
      {
        title: '没入型探索',
        description: '一人称視点で自由移動し、色調補正や移動速度、衝突判定も個別設定可能。ユーザーのVR耐性に応じて、自由度を調整した没入空間を提供'
      },
      {
        title: '柔軟な視点モード',
        description: '視点固定／自由回転モードの切替対応でVR酔いの軽減にも配慮。長時間のVRセッションでも快適に操作が可能なUX設計'
      },
      {
        title: 'コンテンツ管理',
        description: 'アクセス権を制御したシーン公開と共有に対応。バージョン管理やセキュリティ機能も完備し、IP保護に適した運用が可能'
      }
    ],
    challenges: [
      '静止パノラマでは得られない「空間内探索」による情報体験の拡張',
      '従来の手作業建模／UV展開／テクスチャ設計の作業負荷を削減',
      '視点や距離によって劣化するビジュアル品質問題を解消',
      'XR導入の初期障壁（機材依存、制作負荷、コスト）を低減'
    ],
    advantages: [
      'Pico 4 Ultra / Quest 3 対応：最新ハードウェアに最適化され、スムーズで高精度なVR操作・描画を実現、Gaussian Splatレンダリングによる超現実的な体験',
      '多言語対応：UI・操作ガイド・音声案内含む全コンテンツを多言語ローカライズ対応、グローバル展開・国際展示・教育用配信にも対応可能',
      'ネイティブファイル読み込み：VRデバイス上で.lccファイルを直接開けるため、変換不要・高速起動・軽量処理が可能、展示やプレゼン現場での即応性・安定性を確保'
    ],
    products: [
      { name: 'Lixel L シリーズ', description: '広域ロケ・建築・複雑構造の空間スキャンに最適' },
      { name: 'Lixel K シリーズ', description: '軽量で屋内・狭所・展示施設のキャプチャに適した機動力' }
    ],
    software: [
      { name: 'Lixel CyberColor', description: '次世代3DGS表現対応のシーン構築ツール。Unreal / Unity対応SDK付き' }
    ],
    workflow: [
      'スキャン（L2 Pro または K1）：展示空間、歴史建築、都市、教育施設など任意の環境を高速スキャン、RGB＋点群を融合したデータをLixel CyberColorに渡す',
      '処理（CyberColor）：Gaussian Splat化 → インタラクション設定 → VR/AR環境用エクスポート、Unreal Engineや専用ビューワーへシームレス連携',
      '利用：XR展示、産業研修、バーチャル観光、建築設計レビュー、災害体験など多分野展開、アプリ化やWebXR展開にも対応可能'
    ]
  },

  // 公共安全（Public Safety）
  {
    id: 'forensics',
    title: 'フォレンジック（事件・事故捜査）',
    category: '公共安全',
    icon: '🔍',
    overview: 'XGRIDSのレーザースキャニング＋3D Gaussian Splatting技術により、事件・事故現場の空間情報を短時間で3Dモデル化し、証拠保存・視覚的解析・法廷提示に最適なフォレンジックツールとして活用可能です。',
    scenarios: [
      {
        title: '犯罪現場記録',
        description: '血痕・銃弾・物体配置などをミリ単位で記録。容疑者の動線再現・法廷提示用のバーチャルウォークスルーを作成。注釈付き3Dモデルで、検証・研修・証言確認にも対応'
      },
      {
        title: '交通事故再現',
        description: '衝突位置、スリップ痕、路面傾斜を数分で記録し、交通遮断を最小限に。正確な寸法で事故前後の位置関係を再現し、責任判断の根拠資料に'
      },
      {
        title: '火災現場分析',
        description: '消火後の崩落や劣化が進む前に、現場全体をデジタル保存。延焼経路や火元の特定、焼損パターン解析を支援。遠隔地の専門家とリアルタイム共有・共同分析が可能'
      }
    ],
    challenges: [
      '手作業測定・スケッチによる作業時間と精度の限界',
      '複雑・損傷の激しい現場での記録の困難性',
      '見落としや主観誤差の混入による証拠不完全化',
      '再確認・再訪が困難な現場の確実な記録保存',
      '裁判・報告書・訓練用のビジュアルデータ不足'
    ],
    advantages: [
      '操作の簡便化：誰でも扱える直感的操作＋自動3Dモデリングで記録時間を短縮、1人運用対応で現場人員を最小限に',
      '高精度な空間計測：公安・保険・裁判所の要件を満たすセンチメートル級の精度、点群＋画像の同時取得で空間・視覚情報を完全記録',
      '現場文脈に沿った記録：3D空間上に注釈・写真・動画を位置付きで埋め込み可能、「いつ・どこに・何があるか」を空間ごと記録',
      '実写的な再構築：Gaussian Splatによるフォトリアルな現場モデル、人物・車両・物体の仮想配置も可能で、ウォークスルー映像・視点別再現も作成可能、法廷資料・報告映像・研修コンテンツとして展開可能'
    ],
    products: [
      { name: 'Lixel L シリーズ', description: '広範囲・屋外の複雑現場（交通事故・火災）に最適' },
      { name: 'Lixel K シリーズ', description: '室内・狭所・崩壊現場での機動力に優れる軽量モデル' }
    ],
    software: [
      { name: 'LixelStudio', description: '点群生成・注釈追加・断面／寸法計測・レポート出力対応' },
      { name: 'Lixel CyberColor', description: '高精度・高密度な3DGSモデル生成＋ビジュアル再構築＋VR活用対応' }
    ],
    workflow: [
      '現場到着後スキャン（L2 Pro / K1）：現場を数分で全周スキャンし非接触で記録、空間／視覚／位置情報を同時取得',
      'LixelStudio / CyberColorで処理：点群処理 → カラー化 → 注釈入力・写真紐付け → ウォークスルー生成、必要に応じて報告書・裁判用プレゼンデータ化',
      '活用：捜査分析、裁判資料、保険査定、警察・消防訓練教材、住民説明など'
    ]
  },

  // エネルギー・鉱業（Energy & Mining）
  {
    id: 'facility-digital-twin',
    title: '施設デジタルツイン',
    category: 'エネルギー・鉱業',
    icon: '🏭',
    overview: 'XGRIDSの地上・空中データ統合スキャンと高精度3D再構築エンジン（Multi-SLAM + Gaussian Splatting）により、施設内外を実寸・リアル・即時再現。構造・設備・空間利用の把握を可視化し、現場を訪れずに最適化・計画・保全判断を可能にする「行動可能な施設デジタルツイン」を提供します。',
    scenarios: [
      {
        title: '高精度デジタルツインの構築',
        description: '資産台帳・構内レイアウト・インフラ整備のための精密3Dモデルを生成。業界標準エンジン（Unreal、Unity、Revit等）に対応'
      },
      {
        title: '測定・空間分析',
        description: 'モデルから座標・寸法・面積・体積を即取得。スペース最適化や法規遵守チェック（例：避難動線・作業導線）に活用'
      },
      {
        title: '1:1バーチャルシミュレーション',
        description: '実寸スケールの空間モデル上で交通・避難・物流シミュレーションが可能。安全設計・工程設計・作業訓練まで対応'
      },
      {
        title: 'インタラクティブな施設ドキュメント',
        description: '3D空間上に写真・映像・説明テキストを埋め込み。運用・保守・新人研修・社内共有用のバーチャルマニュアルとして展開可能'
      }
    ],
    challenges: [
      '部署や外注先に分断された計測・図面・写真の統合の難しさ',
      '再訪・再計測のコスト／工数の増大',
      '2D図面や基本点群では伝えきれない視覚的・操作的制限',
      '設備拡張・動線変更・レイアウト再編などを見込みや過去資料だけで判断'
    ],
    advantages: [
      '完全な視覚コンテキスト：材料保管から作業導線・安全計画まで、リアルな施設全体像を1モデルで把握、屋内外連携・階層構造にも対応',
      '写実的レンダリング：反射面・ガラス・単色材質でもブレないMulti-SLAM補正＋3DGS合成、通常の写真測量では破綻する素材環境にも対応',
      '高速かつ自動化された再構築：ワンパス処理で即座に成果物化、手動編集なしでUnreal／Unity／WebXR等に展開可能な3Dアセットを生成',
      '自動化された業務連携：工場・病院・物流拠点などに特化した目的別スキャン＆認識アルゴリズムを搭載、現場時間と後処理時間を大幅に削減し、「現場に行かなくても管理できる状態」を実現'
    ],
    products: [
      { name: 'Lixel L シリーズ', description: '屋外／大規模施設／インフラ設備の長距離精密スキャンに対応' },
      { name: 'Lixel K シリーズ', description: '室内／天井裏／狭所などでの高速・軽量スキャンに最適' }
    ],
    software: [
      { name: 'LixelStudio', description: '点群処理・断面抽出・寸法測定・BIM連携・報告書出力' },
      { name: 'Lixel CyberColor', description: 'Gaussian Splat形式による軽量・高品質な3Dモデル生成（Unreal / Unity / Web対応SDK搭載）' }
    ],
    workflow: [
      'スキャン実施（K1 / L2 Pro）：現場を短時間で歩行スキャンし、地上／空撮データを統合',
      'データ処理（LixelStudio / CyberColor）：点群生成 → 3DGSモデル化 → マークアップ・寸法埋め込み → 輸出',
      '活用：設備レイアウト設計、修繕計画、維持管理、避難訓練、工場見学、遠隔施工管理、空間シェアリングなど'
    ]
  },
  {
    id: 'robot-drone-simulation',
    title: 'ロボット/ドローンシミュレーション',
    category: 'エネルギー・鉱業',
    icon: '🤖',
    overview: 'XGRIDSは、実世界の空間を数分でデジタルツイン化し、そのまま高精度なロボット／ドローン向けシミュレーション環境として活用できる革新的なプラットフォームです。視覚再現＋LiDAR深度情報＋構造整合を兼ね備えた3D Gaussian Splatモデルにより、現実と一致した空間での学習・検証・制御計画が可能になります。',
    scenarios: [
      {
        title: '視覚アルゴリズム訓練',
        description: 'ピクセル精度のグラウンドトゥルース付き3D環境で物体認識・セグメンテーション・SLAMの精度向上を支援'
      },
      {
        title: '資産のデジタル化',
        description: 'LCC処理中に自動オブジェクト認識＋空間ポジション抽出を実施。施設内の設備・装置の位置を自動マップ化し、点検・導線計画に活用'
      },
      {
        title: '自律計画の実装',
        description: '走行可能領域の抽出・点検ポイントの自動定義・経路最適化をサポート。人手を介さずロボット検査シナリオの構築が可能'
      },
      {
        title: '物理ベースシミュレーション',
        description: '衝突判定・センサー模擬・視界ブロッキング解析を正確に再現。運用前のミッション検証において現実環境と同等の信頼性を確保'
      }
    ],
    challenges: [
      '通常のシミュレータでは視覚とLiDARの同期表現が困難、現実との差が生じやすい',
      '現場再構築に必要なCAD／点群処理の作業負荷・時間コストが大きい',
      '人が使いづらい点群ベースUIによるヒューマンマシンギャップ',
      '仮想環境の更新頻度が低く、実際の設備変化と乖離が生じる'
    ],
    advantages: [
      '全視点のカバレッジ：ドローン×手持ちLiDARの統合により、空中・地上・屋内を同時記録、つなぎ目のない一体型モデルを生成可能（ステッチなし）',
      '写実的なレンダリング：ガラス・反射・単色床面にも強いLiDAR＋RGBのMulti-SLAM融合処理、従来のSfM／フォトグラメトリでは破綻しやすい素材に対応',
      '自動点検マップ生成：装置や構造物を認識して空間上に自動プロット、手動による座標入力不要で、即時に点検経路を計画可能',
      '衝突・遮蔽判定機能：空間上に自動グリッドを生成し、障害物との干渉／死角範囲を可視化、点検・清掃・搬送ロボットなどの動作検証を安全にシミュレーション'
    ],
    products: [
      { name: 'Lixel L シリーズ', description: '工場・倉庫・屋外点検ルートの広範囲記録に最適' },
      { name: 'Lixel K シリーズ', description: '狭所・設備密集エリア・構内施設内の詳細記録に適応' }
    ],
    software: [
      { name: 'LixelStudio', description: '点群生成・寸法抽出・構造分類・RCP出力など基本処理全般' },
      { name: 'Lixel CyberColor', description: '高密度・軽量な3DGS形式でのシーン出力＋自動認識・可視化アルゴリズム搭載（Unreal / Unity 連携 SDK対応）' }
    ],
    workflow: [
      '現地スキャン（ドローン＋L2 Pro or K1）：空撮と地上スキャンを同時実施し、屋内外を一体化して取得',
      '処理（Lixel CyberColor）：点群生成 → Gaussian化 → 自動マップ生成／障害物認識 → シミュレーション環境出力、Unity／ROS／Gazebo連携も可能（SDK提供）',
      '活用：研究開発：SLAM検証・異常検知AIの教師データ生成、業務検証：巡回ルート設計、清掃／点検ロボットの走行テスト、教育訓練：仮想工場での作業手順トレーニング'
    ]
  },
  {
    id: 'smart-mining',
    title: 'スマート鉱業',
    category: 'エネルギー・鉱業',
    icon: '⛏️',
    overview: 'XGRIDSは、地上・地下の鉱山エリアを高速かつ高精度に3Dスキャンし、リアルタイムでデジタルツイン化。採掘量の可視化から傾斜安定性分析、リスク予兆の検知、作業計画最適化まで、安全性・収益性・判断速度を向上させる鉱山運用の革新基盤を提供します。',
    scenarios: [
      {
        title: '坑道・掘削管理',
        description: '坑内の3D空間をセンチメートル単位でモデル化。掘削ルート最適化、衝突防止、正確な体積算出を実現'
      },
      {
        title: '鉱山安全管理',
        description: '岩盤の安定性・地盤変位をリアルタイムで監視。異常兆候を早期に検知し、事故リスクを最小化'
      },
      {
        title: '生産計画と最適配置',
        description: '採掘体積を数値ベースで算出し、過不足を排除。機材配置や進行ルートの精密シミュレーションが可能'
      },
      {
        title: '斜面安定性解析',
        description: '露天掘り斜面の微小な動きを追跡。崩落前に警告を出せる解析ツールとして活用'
      },
      {
        title: '堆積ダム監視',
        description: '貯泥ダム構造の健全性を常時観測し、致命的な変形兆候を事前に把握可能'
      }
    ],
    challenges: [
      '手作業の測量による時間・人員コストの削減',
      '粉塵・振動・狭所などによる精度劣化を克服（Multi-SLAMで補正）',
      '複雑地形・坑内・死角の多い環境でも一体型3Dモデルを生成',
      '高所・危険エリアへの人員立ち入りを最小化し、安全性を向上',
      '従来の静的測量では得られない動的変化のリアルタイム把握が可能'
    ],
    advantages: [
      '高効率：5～8倍速のデータ取得、広範囲・複雑地形も1名・1回のスキャンでカバー可能',
      '操作性：スキャナーを持って歩くだけでリアルタイムにカラー点群を生成、「見たままをデジタル化」できる視認性の高いデータ取得',
      '高速処理：地上／ドローン／坑道など複数データの自動同期とマップ融合、ワンクリックでAutoCAD連携（RCP出力）・断面図生成が可能',
      '実用的3Dデータ：実寸・実色の3Dモデルは地形管理、シミュレーション、BIM連携に再利用可能、保守計画・投資判断・災害対策にも即活用'
    ],
    products: [
      { name: 'Lixel L シリーズ', description: '露天鉱山や広域施設の長距離・高精度スキャンに最適' },
      { name: 'Lixel K シリーズ', description: '坑道内部・傾斜地・機械裏などの狭所対応スキャナーとして機動力を発揮' }
    ],
    software: [
      { name: 'LixelStudio', description: '点群生成・断面抽出・体積計算・AutoCAD連携・カラー化処理など' },
      { name: 'Lixel CyberColor', description: '高速な3DGSモデル生成・軽量化・可視化・Unreal/Unity出力対応・巡回計画に活用' }
    ],
    workflow: [
      '現場スキャン（L2 Pro / K1）：露天／坑内／施設周辺を歩行または車載・ドローンスキャン、RTKやGCPで絶対座標を取得可能',
      'データ処理（LixelStudio / CyberColor）：点群生成 → 自動カラー化 → 空間解析（体積・断面・変形）、RCP出力・断面図・レポート生成まで一括実行',
      '活用：採掘計画／点検スケジューリング／危険領域可視化／社内外報告書作成／災害シナリオ設計'
    ]
  },
  {
    id: 'water-resources',
    title: '水資源管理',
    category: 'エネルギー・鉱業',
    icon: '💧',
    overview: 'XGRIDSは、ダム・貯水池・堤防・水門・排水路などの水資源インフラを3Dスキャンし、実寸・経年追跡可能なデジタルツインとして記録。現場に立ち入らずに構造変形・浸食・ひび割れ・沈下などを可視化・計測でき、災害リスク予測や保守判断を高度化します。',
    scenarios: [
      {
        title: 'インフラ維持管理',
        description: 'ダムや堤体、調整池、護岸などをセンチメートル精度で3D記録。数ヶ月〜数年単位の変化トラッキングにより、早期補修判断が可能'
      },
      {
        title: '技術診断・評価',
        description: '水位・季節変動を踏まえた浸食進行・ひび割れ・変形の傾向可視化。断面比較・変化量測定・浸水予測など多角的な判断材料を提供'
      },
      {
        title: '災害対応',
        description: '洪水・地すべり・ダム損傷時に即時スキャンで被害範囲・体積・拠点位置を把握。救助資源の最適配置や封じ込め対策立案を迅速化'
      }
    ],
    challenges: [
      '危険構造物の目視点検に代わる非接触・高信頼の3D記録',
      '点検間隔中に進行した劣化を時系列比較で明確化',
      '作業員の立入困難区域での測量と情報取得を自動化',
      '写真・図面・報告書に分断されていた情報を一つの3Dモデルに統合',
      'インフラ情報の共有・継承・更新にかかる負担を軽減'
    ],
    advantages: [
      '高精度センシング：Lixel L2 Pro / K1で取得するセンチメートル級3Dモデル、港湾・堤体・法面のクラック・浸食・沈下を正確に視覚化・数値化、面積・体積計測も自動化',
      '予防的なリスク監視：危険地帯に人を立ち入らせずに定期記録が可能、経年変化を「記録→比較→判断」まで一貫して自動化',
      '完全な3D記録と共有：ダムや護岸表面の割れ目・染み出し・変形を記録した3Dアーカイブを構築、時期別のモデル差分で劣化進行の可視化が可能'
    ],
    products: [
      { name: 'Lixel L シリーズ', description: '長距離構造物（ダム・貯水池・水門・堤防等）向け高精度スキャン' },
      { name: 'Lixel K シリーズ', description: '狭所・構造裏面・橋脚・点検通路などへのアクセス性に優れる軽量モデル' }
    ],
    software: [
      { name: 'LixelStudio', description: '点群処理、断面抽出、寸法計測、時系列比較、レポート出力対応' },
      { name: 'Lixel CyberColor', description: '高密度3DGSモデル生成、ビジュアル解析、可視化・共有用エクスポート対応（Unreal / Unity / Web対応SDK搭載）' }
    ],
    workflow: [
      'スキャン実施（K1 / L2 Pro）：ダムや堤防の表面を安全圏からスキャン、必要に応じてRTKやGCPで絶対座標化',
      '処理（LixelStudio / CyberColor）：点群生成 → カラー化 → 変位・クラック抽出、モデル差分比較・断面解析・PDFレポート出力',
      '活用：年次点検・突発災害時の評価・補修工事計画・行政報告書・保険査定・住民説明など'
    ]
  }
]

const categories = [
  { 
    name: '測量・地理空間',
    value: '測量・地理空間',
    icon: '🗺️',
    description: '高精度な地形測量から都市インフラまで、あらゆる空間データを効率的に取得',
    useCases: ['地形測量', 'トンネル・インフラ設備空間', 'ストックパイル体積計算', '都市地下空間マネジメント', '森林管理']
  },
  { 
    name: '建築・都市計画',
    value: '建築・都市計画',
    icon: '🏗️',
    description: '既存建築の記録から施工管理まで、建設業界のDXを支援',
    useCases: ['外壁計測', '不動産測量', 'リバースBIMモデリング', 'BIM施工進捗管理']
  },
  { 
    name: '映像・エンターテインメント',
    value: '映像・エンターテインメント',
    icon: '🎬',
    description: '映画制作からVRコンテンツまで、リアルな3D空間を活用',
    useCases: ['ロケーションスカウト＆プリビズ', 'AR/VR コンテンツ制作']
  },
  { 
    name: '公共安全',
    value: '公共安全',
    icon: '🚨',
    description: '事件・事故現場の正確な記録と分析を支援',
    useCases: ['フォレンジック（事件・事故捜査）']
  },
  { 
    name: 'エネルギー・鉱業',
    value: 'エネルギー・鉱業',
    icon: '⚡',
    description: '大規模施設のデジタルツイン化から資源管理まで幅広く対応',
    useCases: ['施設デジタルツイン', 'ロボット/ドローンシミュレーション', 'スマート鉱業', '水資源管理']
  }
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-gray-800/20 mix-blend-multiply" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              業界別使用例
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              XGRIDSソリューションが様々な業界でどのように活用され、
              ビジネスの課題を解決しているかをご紹介します
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">80%</div>
                <div className="text-sm text-gray-400">作業時間削減</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">5-8倍</div>
                <div className="text-sm text-gray-400">効率向上</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">±1cm</div>
                <div className="text-sm text-gray-400">測定精度</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-gray-400">稼働可能</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {categories.map((category) => (
              <div key={category.value} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{category.icon}</span>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {category.useCases.map((useCase) => (
                    <li key={useCase} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases by Category */}
      {categories.map((category) => (
        <section key={category.value} className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">{category.icon}</span>
                <h2 className="text-3xl md:text-4xl font-bold">{category.name}</h2>
              </div>
              <p className="text-gray-600">{category.description}</p>
            </div>
            <div className="space-y-12">
              {industryUseCases
                .filter(useCase => useCase.category === category.value)
                .map((useCase) => (
                  <article
                    key={useCase.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                  >
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                          <p className="text-gray-600">{useCase.overview}</p>
                        </div>
                        {useCase.icon && (
                          <span className="text-4xl ml-4">{useCase.icon}</span>
                        )}
                      </div>

                      {/* Application Scenarios */}
                      {useCase.scenarios && (
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold mb-4">主な適用シナリオ</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {useCase.scenarios.map((scenario, index) => (
                              <div key={index} className="bg-gray-50 rounded-lg p-4">
                                <h5 className="font-medium mb-2">{scenario.title}</h5>
                                <p className="text-sm text-gray-600">{scenario.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Features (for AR/VR) */}
                      {useCase.features && (
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold mb-4">コア機能</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {useCase.features.map((feature, index) => (
                              <div key={index} className="bg-blue-50 rounded-lg p-4">
                                <h5 className="font-medium text-blue-900 mb-2">{feature.title}</h5>
                                <p className="text-sm text-blue-700">{feature.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Challenges & Advantages */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        {useCase.challenges && (
                          <div>
                            <h4 className="text-lg font-semibold mb-4">解決する課題</h4>
                            <ul className="space-y-2">
                              {useCase.challenges.map((challenge, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-red-500 mt-1 mr-2">✗</span>
                                  <span className="text-sm text-gray-600">{challenge}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {useCase.advantages && (
                          <div>
                            <h4 className="text-lg font-semibold mb-4">XGRIDSの優位性</h4>
                            <ul className="space-y-2">
                              {useCase.advantages.map((advantage, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="text-green-500 mt-1 mr-2">✓</span>
                                  <span className="text-sm text-gray-600">{advantage}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Products & Software */}
                      <div className="border-t pt-6">
                        <h4 className="text-lg font-semibold mb-4">導入機材・ソフトウェア</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {useCase.products && (
                            <div>
                              <h5 className="font-medium mb-3">ハードウェア</h5>
                              <div className="space-y-2">
                                {useCase.products.map((product, index) => (
                                  <div key={index} className="bg-gray-50 rounded p-3">
                                    <div className="font-medium text-sm">{product.name}</div>
                                    <div className="text-xs text-gray-600">{product.description}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          {useCase.software && (
                            <div>
                              <h5 className="font-medium mb-3">ソフトウェア</h5>
                              <div className="space-y-2">
                                {useCase.software.map((software, index) => (
                                  <div key={index} className="bg-gray-50 rounded p-3">
                                    <div className="font-medium text-sm">{software.name}</div>
                                    <div className="text-xs text-gray-600">{software.description}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Workflow */}
                      {useCase.workflow && (
                        <div className="border-t pt-6 mt-6">
                          <h4 className="text-lg font-semibold mb-4">推奨ワークフロー</h4>
                          <ol className="space-y-3">
                            {useCase.workflow.map((step, index) => (
                              <li key={index} className="flex">
                                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                                  {index + 1}
                                </span>
                                <span className="text-sm text-gray-600">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            あなたのビジネスでも同じ成果を
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            XGRIDSソリューションがどのようにお客様の課題を解決できるか、
            詳しくご説明いたします
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              導入相談を申し込む
            </Link>
            <Link
              href="/downloads"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              資料をダウンロード
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}