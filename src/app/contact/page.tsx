import { Metadata } from 'next'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'お問い合わせ | 株式会社UPHASH',
  description: 'XGRIDS製品に関するお問い合わせ、デモ依頼、技術相談など、お気軽にご連絡ください。',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Grid Pattern Background */}
      <section className="relative overflow-hidden bg-gray-900 text-white py-20 md:py-32">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          />
        </div>

        {/* Floating UP HASH Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 opacity-5">
            <div className="text-[200px] font-bold transform -rotate-12">⟨⟩</div>
          </div>
          <div className="absolute -bottom-20 -right-20 opacity-5">
            <div className="text-[300px] font-bold transform rotate-12">⟨⟩</div>
          </div>
          <div className="absolute top-1/3 right-1/4 opacity-5">
            <div className="text-[100px] font-bold transform rotate-45">UP</div>
          </div>
          <div className="absolute bottom-1/3 left-1/4 opacity-5">
            <div className="text-[100px] font-bold transform -rotate-45">HASH</div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <span className="text-sm font-medium px-3 py-1 bg-white/20 rounded">CONTACT</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              お問い合わせ
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              XGRIDS製品に関するご質問、デモのご依頼、価格のお見積もりなど、
              お気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Company Info Section */}
      <section className="py-16 bg-gray-50 relative">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(#000 1px, transparent 1px),
                linear-gradient(90deg, #000 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="h-px w-12 bg-gray-300"></div>
                <span className="mx-4 text-sm font-medium text-gray-500 tracking-wider">COMPANY INFO</span>
                <div className="h-px w-12 bg-gray-300"></div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">会社情報</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Tokyo Office */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="absolute -top-6 -right-6 text-8xl font-bold text-gray-50 group-hover:text-gray-100 transition-colors">⟨⟩</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 relative z-10">東京本社</h3>
                <div className="space-y-3 text-gray-600 relative z-10">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p>〒105-6415</p>
                      <p>東京都港区虎ノ門１丁目１７−１</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p>お問い合わせフォームをご利用ください</p>
                  </div>
                </div>
              </div>

              {/* Fukuoka Office */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="absolute -top-6 -right-6 text-8xl font-bold text-gray-50 group-hover:text-gray-100 transition-colors">⟨⟩</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 relative z-10">福岡支社</h3>
                <div className="space-y-3 text-gray-600 relative z-10">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p>〒810-0001</p>
                      <p>福岡県福岡市中央区天神１丁目１１−１</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p>お問い合わせフォームをご利用ください</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8 bg-white rounded-xl p-8 shadow-lg border border-gray-100 relative overflow-hidden">
              <div className="absolute -top-10 -left-10 text-[150px] font-bold text-gray-50">UP</div>
              <div className="absolute -bottom-10 -right-10 text-[150px] font-bold text-gray-50">HASH</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 relative z-10">営業時間</h3>
              <div className="space-y-2 text-gray-600 relative z-10">
                <p>平日: 9:00 - 18:00</p>
                <p>土日祝日: 休業</p>
                <p className="text-sm text-gray-500 mt-2">
                  ※お問い合わせへの回答は営業時間内に順次対応させていただきます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}