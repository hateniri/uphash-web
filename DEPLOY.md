# デプロイ方法

このプロジェクトは複数の方法でデプロイできます。

## 1. GitHub Pages（静的サイト）

### セットアップ
1. GitHubリポジトリの設定で Pages を有効化
2. Source を "GitHub Actions" に設定

### デプロイ
```bash
# mainブランチにプッシュすると自動デプロイ
git add .
git commit -m "Update site"
git push origin main
```

## 2. Vercel（推奨）

### 初期セットアップ
```bash
# Vercel CLIをインストール
npm i -g vercel

# プロジェクトをVercelにリンク
vercel
```

### デプロイ
```bash
# プロダクション環境にデプロイ
npm run deploy:vercel

# または
vercel --prod
```

### 自動デプロイ
GitHubリポジトリをVercelに接続すると、mainブランチへのプッシュで自動デプロイされます。

## 3. ローカルビルド

### 静的ファイルの生成
```bash
npm run build:static
```

生成されたファイルは `out/` ディレクトリに出力されます。

### ローカルでのプレビュー
```bash
npx serve out
```

## 環境変数

本番環境では以下の環境変数を設定してください：

- `NEXT_PUBLIC_BASE_URL`: サイトのベースURL（例：https://uphash.net）

## 注意事項

- GitHub Pagesを使用する場合、動的なAPI機能は使用できません
- Vercelを使用する場合、すべてのNext.js機能が利用可能です
- カスタムドメインを使用する場合は、各プラットフォームのドキュメントを参照してください