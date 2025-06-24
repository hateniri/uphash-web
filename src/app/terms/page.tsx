import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: '利用規約',
  description: '株式会社UPHASHのウェブサイト利用規約です。',
  path: '/terms',
  keywords: ['利用規約', 'サービス利用条件'],
  noindex: true
})

export default function TermsPage() {
  return (
    <main className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">利用規約</h1>
        
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="text-lg mb-6">
            本利用規約（以下「本規約」といいます）は、株式会社UPHASH（以下「当社」といいます）が
            提供するウェブサイトおよびサービス（以下「本サービス」といいます）の利用条件を定めるものです。
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">第1条（適用）</h2>
            <p>
              本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">第2条（利用登録）</h2>
            <p>
              登録希望者が当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、
              利用登録が完了するものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">第3条（禁止事項）</h2>
            <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません：</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
              <li>当社のサービスの運営を妨害するおそれのある行為</li>
              <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
              <li>他のユーザーに成りすます行為</li>
              <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
              <li>その他、当社が不適切と判断する行為</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">第4条（知的財産権）</h2>
            <p>
              本サービスおよび本サービスに関連する一切の情報についての著作権およびその他の知的財産権は
              すべて当社または当社にその利用を許諾した権利者に帰属し、ユーザーは無断で複製、譲渡、
              貸与、翻訳、改変、転載、公衆送信（送信可能化を含みます）、伝送、配布、出版、営業使用等を
              してはならないものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">第5条（本サービスの提供の停止等）</h2>
            <p>
              当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく
              本サービスの全部または一部の提供を停止または中断することができるものとします：
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
              <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
              <li>コンピュータまたは通信回線等が事故により停止した場合</li>
              <li>その他、当社が本サービスの提供が困難と判断した場合</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">第6条（免責事項）</h2>
            <p>
              当社の債務不履行責任は、当社の故意または重過失によらない場合には免責されるものとします。
              また、当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において
              生じた取引、連絡または紛争等について一切責任を負いません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">第7条（サービス内容の変更等）</h2>
            <p>
              当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの
              提供を中止することができるものとし、これによってユーザーに生じた損害について
              一切の責任を負いません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">第8条（利用規約の変更）</h2>
            <p>
              当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を
              変更することができるものとします。変更後の本規約は、当社ウェブサイトに掲載した
              ときから効力を生じるものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">第9条（通知または連絡）</h2>
            <p>
              ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">第10条（準拠法・裁判管轄）</h2>
            <p>
              本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、
              当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">お問い合わせ</h2>
            <p>
              本規約に関するお問い合わせは、以下の連絡先までお願いいたします：
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