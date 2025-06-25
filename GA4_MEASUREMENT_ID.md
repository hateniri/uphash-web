# Google Analytics 4 測定ID

あなたのGA4測定IDは: **G-8J02GC5Q4D**

この測定IDは既にコードに実装されています。

## GitHub Actionsの設定

GitHub Actionsで毎日のレポートを有効にするには、以下のシークレットを設定してください：

1. GitHubリポジトリの Settings > Secrets and variables > Actions に移動
2. 以下のシークレットを追加：

- `GA_MEASUREMENT_ID`: G-8J02GC5Q4D
- `GA_PROPERTY_ID`: Google AnalyticsのプロパティID（数字のみ、例: 123456789）
- `GOOGLE_ANALYTICS_CREDENTIALS`: サービスアカウントのJSON（下記参照）
- `SLACK_WEBHOOK_URL`: SlackのWebhook URL

## プロパティIDの確認方法

1. [Google Analytics](https://analytics.google.com/)にログイン
2. 管理（歯車アイコン）をクリック
3. プロパティ設定を開く
4. プロパティIDをコピー（数字のみ）

## サービスアカウントの設定

1. [Google Cloud Console](https://console.cloud.google.com/)でプロジェクトを作成
2. APIs & Services > Enable APIs and Servicesで「Google Analytics Data API」を有効化
3. Credentials > Create Credentials > Service Accountで新規作成
4. キーを作成（JSON形式）してダウンロード
5. Google Analyticsの管理画面でプロパティのアクセス管理に移動
6. サービスアカウントのメールアドレスに「閲覧者」権限を付与

## Slack Webhookの設定

1. [Slack App Directory](https://api.slack.com/apps)でIncoming Webhooksアプリを追加
2. 報告を受け取るチャンネルを選択
3. Webhook URLをコピー

これで毎日午前9時（日本時間）にアナリティクスレポートがSlackに送信されます。