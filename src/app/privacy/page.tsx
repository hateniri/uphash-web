import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | 株式会社UPHASH',
  description: '株式会社UPHASHのプライバシーポリシーです。お客様の個人情報の取り扱いについて説明しています。',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">プライバシーポリシー</h1>
        
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="text-lg mb-6">
            株式会社UPHASH（以下「当社」といいます）は、お客様の個人情報の重要性を認識し、
            以下のプライバシーポリシーに基づき、個人情報の保護に努めます。
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 個人情報の定義</h2>
            <p>
              個人情報とは、個人に関する情報であり、当該情報を構成する氏名、住所、電話番号、
              メールアドレス、その他の記述等により当該個人を識別できるものをいいます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 個人情報の収集</h2>
            <p>当社は、以下の場合に個人情報を収集することがあります：</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>お問い合わせフォームからのご連絡時</li>
              <li>製品・サービスのお申し込み時</li>
              <li>見積もり依頼時</li>
              <li>その他、お客様から直接個人情報をご提供いただく場合</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 個人情報の利用目的</h2>
            <p>当社は、収集した個人情報を以下の目的で利用します：</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>お客様からのお問い合わせへの対応</li>
              <li>製品・サービスの提供およびサポート</li>
              <li>見積もりの作成および送付</li>
              <li>当社製品・サービスに関する情報提供</li>
              <li>サービス向上のための統計的分析</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 個人情報の管理</h2>
            <p>
              当社は、お客様の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス、
              紛失、破損、改ざん、漏洩などを防止するため、必要かつ適切なセキュリティ対策を実施します。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 個人情報の第三者提供</h2>
            <p>
              当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません：
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>お客様の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要な場合</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要な場合</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookie（クッキー）の使用</h2>
            <p>
              当社のウェブサイトでは、より良いサービスを提供するためにCookieを使用することがあります。
              Cookieの使用により個人を特定することはありません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. SSL（Secure Sockets Layer）について</h2>
            <p>
              当社のウェブサイトでは、お客様の個人情報を保護するため、
              SSL暗号化通信を使用しています。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. 個人情報の開示・訂正・削除</h2>
            <p>
              お客様は、当社に対して自己の個人情報の開示、訂正、削除を求めることができます。
              ご請求の際は、本人確認をさせていただいた上で、速やかに対応いたします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. プライバシーポリシーの変更</h2>
            <p>
              当社は、必要に応じて本プライバシーポリシーを変更することがあります。
              変更後のプライバシーポリシーは、当社ウェブサイトに掲載した時点から効力を生じるものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. お問い合わせ</h2>
            <p>
              本プライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いいたします：
            </p>
            <div className="mt-4 bg-gray-50 p-6 rounded-lg">
              <p className="font-bold mb-2">株式会社UPHASH</p>
              <p>東京本社：〒105-6415 東京都港区虎ノ門１丁目１７−１</p>
              <p>Email: info@uphash.net</p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              制定日：2024年1月1日<br />
              最終改定日：2024年1月1日
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}