export interface NewsPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  category: 'product' | 'company' | 'event' | 'tech'
  image?: string
}

export const newsPosts: NewsPost[] = [
  {
    slug: 'lixel-l2-pro-launch',
    title: 'XGRIDS Lixel L2 Pro シリーズ 日本市場での取り扱い開始',
    date: '2024-12-15',
    excerpt: 'ゼロ後処理時代のプロフェッショナル3Dレーザースキャナー、Lixel L2 Proシリーズの日本国内での販売を開始しました。',
    category: 'product',
    content: `
# XGRIDS Lixel L2 Pro シリーズ 日本市場での取り扱い開始

UP HASHは、XGRIDS社の最新3Dレーザースキャナー「Lixel L2 Pro」シリーズの日本国内での正規販売を開始しました。

## 製品ラインナップ

- **L2 Pro 16/120**: エントリーレベルモデル（16チャンネル、120m測定範囲）
- **L2 Pro 32/120**: スタンダードモデル（32チャンネル、120m測定範囲）
- **L2 Pro 32/300**: 長距離対応モデル（32チャンネル、300m測定範囲）

## 主な特徴

### リアルタイム処理
従来の3Dスキャナーとは異なり、L2 Proは後処理を必要としません。スキャンと同時に高品質な点群データを生成し、作業効率を大幅に向上させます。

### 高精度測位
RTK統合により、絶対精度3cmを実現。測量グレードの精度で、建設現場や地形測量に最適です。

### AI技術の活用
動的オブジェクト除去機能により、人や車両などの移動体を自動的に除去し、クリーンな3Dデータを生成します。

お問い合わせは[こちら](/contact)から。
    `
  },
  {
    slug: 'lixel-cyber-color-update',
    title: 'Lixel Cyber Color Studio v3.5 リリース - ガウシアンスプラッティング技術を搭載',
    date: '2024-12-10',
    excerpt: '革新的な3D再構築ソフトウェアの最新版がリリース。処理速度が従来比40%向上しました。',
    category: 'tech',
    content: `
# Lixel Cyber Color Studio v3.5 リリース

XGRIDS社は、3D再構築ソフトウェア「Lixel Cyber Color Studio」の最新バージョン3.5をリリースしました。

## 新機能

### ガウシアンスプラッティング技術
最新のAI技術を活用し、フォトリアリスティックな3Dモデルを高速生成。10分のスキャンデータを2時間以内に完成させます。

### データ圧縮の改善
新しい圧縮アルゴリズムにより、ファイルサイズを従来比90%削減。大規模プロジェクトでも効率的なデータ管理が可能になりました。

### マルチプラットフォーム対応
- PC（Windows、macOS）
- モバイル（iOS、Android）
- Unity、Unreal Engine
- WebGL、VRヘッドセット

詳細は[ダウンロードページ](/downloads)をご覧ください。
    `
  },
  {
    slug: 'up-hash-founded',
    title: 'UP HASH設立 - 空間スキャニングと3Dコンテンツ作成の新時代へ',
    date: '2024-11-01',
    excerpt: '東京を拠点に、XGRIDS製品の日本市場展開を開始。プロフェッショナル向け3Dスキャニングソリューションを提供します。',
    category: 'company',
    content: `
# UP HASH設立のお知らせ

この度、私たちUP HASHは、空間スキャニングと3Dコンテンツ作成の革新的ソリューションを日本市場に提供するため、東京に設立されました。

## ミッション

「空間をスキャンし、コンテンツに変える」をミッションに、最先端の3Dスキャニング技術を通じて、建築、建設、測量、文化財保存など、様々な分野でのデジタルトランスフォーメーションを支援します。

## XGRIDS社との提携

中国の革新的な3Dスキャナーメーカー、XGRIDS社の正規代理店として、以下の製品を取り扱います：

- Lixel L2 Proシリーズ
- Lixel K1
- Lixel Cyber Color Studio
- Lixel Studio

## 今後の展開

日本市場のニーズに合わせたサポート体制を構築し、デモンストレーション、技術サポート、トレーニングなど、包括的なサービスを提供してまいります。

お問い合わせは[こちら](/contact)から。
    `
  },
  {
    slug: 'webinar-3d-scanning-basics',
    title: '無料ウェビナー開催：プロが教える3Dスキャニングの基礎と活用法',
    date: '2024-12-20',
    excerpt: '1月15日開催。3Dスキャニング技術の基礎から実践的な活用方法まで、専門家が分かりやすく解説します。',
    category: 'event',
    content: `
# 無料ウェビナー：プロが教える3Dスキャニングの基礎と活用法

## 開催概要

- **日時**: 2025年1月15日（水）14:00-15:30
- **形式**: オンライン（Zoom）
- **参加費**: 無料
- **定員**: 100名

## プログラム

### 第1部：3Dスキャニング技術の基礎（30分）
- LiDAR技術の仕組み
- 点群データとは
- スキャナーの種類と選び方

### 第2部：XGRIDS製品の特徴と活用事例（30分）
- Lixel L2 Proシリーズの技術解説
- 建設・測量での活用事例
- リアルタイム処理のメリット

### 第3部：質疑応答（30分）
参加者からのご質問にお答えします。

## 参加特典

- 製品カタログPDF
- 特別割引クーポン（初回購入時10%OFF）

お申し込みは[こちら](/contact)から。
    `
  }
]

export function getNewsPost(slug: string): NewsPost | undefined {
  return newsPosts.find(post => post.slug === slug)
}

export function getLatestNews(limit: number = 3): NewsPost[] {
  return newsPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}