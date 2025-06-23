'use client'

import { useState } from 'react'
import { PRODUCTS } from '@/lib/constants'

interface FormData {
  name: string
  company: string
  email: string
  phone: string
  products: string[]
  message: string
  preferredContact: 'email' | 'online-call'
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    products: [],
    message: '',
    preferredContact: 'email'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')
    
    try {
      // FormspreeのエンドポイントURL
      // https://formspree.io でアカウント作成後、フォームIDを取得して置き換えてください
      const FORMSPREE_URL = 'https://formspree.io/f/mjkravbp'
      
      console.log('送信データ:', formData)
      
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          products: formData.products.join(', '), // 配列を文字列に変換
          message: formData.message,
          preferredContact: formData.preferredContact === 'email' ? 'メールでの詳細資料送付' : 'オンラインミーティング',
          _subject: `見積もり依頼: ${formData.products.join(', ')}`, // メールの件名
        }),
      })

      console.log('レスポンスステータス:', response.status)
      
      if (response.ok) {
        setSubmitMessage('お問い合わせを受け付けました。担当者より2営業日以内にご連絡させていただきます。')
        // フォームをリセット
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          products: [],
          message: '',
          preferredContact: 'email'
        })
      } else {
        const errorText = await response.text()
        console.error('エラーレスポンス:', errorText)
        setSubmitMessage('エラーが発生しました。しばらくしてから再度お試しください。')
      }
    } catch (error) {
      console.error('送信エラー:', error)
      setSubmitMessage('ネットワークエラーが発生しました。しばらくしてから再度お試しください。')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleProductToggle = (productId: string) => {
    setFormData(prev => ({
      ...prev,
      products: prev.products.includes(productId)
        ? prev.products.filter(id => id !== productId)
        : [...prev.products, productId]
    }))
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              見積もり依頼・お問い合わせ
            </h2>
            <p className="text-lg text-gray-600">
              プロフェッショナル向け3Dスキャナーの詳細な見積もりをご提供いたします
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  会社名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ご希望の商談方法
              </label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contact"
                    value="email"
                    checked={formData.preferredContact === 'email'}
                    onChange={(e) => setFormData({...formData, preferredContact: e.target.value as FormData['preferredContact']})}
                    className="mr-2"
                  />
                  メールでの詳細資料送付
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contact"
                    value="online-call"
                    checked={formData.preferredContact === 'online-call'}
                    onChange={(e) => setFormData({...formData, preferredContact: e.target.value as FormData['preferredContact']})}
                    className="mr-2"
                  />
                  オンラインミーティング
                </label>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ご興味のある製品（複数選択可）
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {PRODUCTS.map((product) => (
                  <label key={product.id} className="flex items-start cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.products.includes(product.name)}
                      onChange={() => handleProductToggle(product.name)}
                      className="mt-1 mr-3"
                    />
                    <div>
                      <div className="font-medium text-gray-900">{product.name}</div>
                      <div className="text-sm text-gray-600">{product.category}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="ご利用予定の用途、必要な機能、その他ご要望などをお聞かせください"
              />
            </div>

            {submitMessage && (
              <div className={`mt-4 p-4 rounded-lg ${
                submitMessage.includes('エラー') 
                  ? 'bg-red-50 text-red-700' 
                  : 'bg-green-50 text-green-700'
              }`}>
                {submitMessage}
              </div>
            )}

            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400"
              >
                {isSubmitting ? '送信中...' : '見積もり・ミーティングを依頼する'}
              </button>
            </div>

            <p className="mt-4 text-sm text-gray-600 text-center">
              営業時間: 平日 9:00-18:00（土日祝日を除く）
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}