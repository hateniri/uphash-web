# Formspree セットアップガイド

## 1. Formspreeアカウント作成
1. https://formspree.io にアクセス
2. 無料アカウントを作成（月50件まで無料）

## 2. フォームを作成
1. ダッシュボードで「New Form」をクリック
2. フォーム名を入力（例：UP HASH Contact Form）
3. 作成されたフォームIDをコピー（例：`xyzabc123`）

## 3. コードを更新
`src/components/sections/ContactForm.tsx`の38行目を更新：

```typescript
// 変更前
const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID'

// 変更後（実際のIDに置き換える）
const FORMSPREE_URL = 'https://formspree.io/f/xyzabc123'
```

## 4. Slack通知の設定（推奨）

### Slackとの連携手順：
1. Formspreeダッシュボードでフォームを選択
2. 「Integrations」タブをクリック
3. 「Slack」を選択
4. 「Connect to Slack」をクリック
5. 通知を送りたいチャンネルを選択
6. 「Save Integration」で完了

### 通知内容のカスタマイズ：
- メッセージフォーマットを編集可能
- 特定のフィールドだけ通知することも可能
- メンション（@channel, @here）も設定可能

### その他の便利な設定：
- **自動返信メール**: お客様に自動で確認メールを送信
- **スパム対策**: reCAPTCHA v3を無料で設定可能
- **Webhook**: 独自のAPIに転送も可能

## メリット
- 環境変数不要
- サーバー設定不要
- 静的サイトのまま使える
- 無料プランで月50件まで対応

## 注意点
- フォームIDは公開されるため、スパム対策としてreCAPTCHAの設定を推奨
- 本番環境では有料プランの検討も必要（月50件以上の場合）