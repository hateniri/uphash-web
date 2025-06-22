'use client'

import { useState, useEffect } from 'react'

interface PasswordProtectionProps {
  children: React.ReactNode
}

export default function PasswordProtection({ children }: PasswordProtectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  
  // パスワード（環境変数から取得、デフォルト値設定）
  const CORRECT_PASSWORD = process.env.NEXT_PUBLIC_SITE_PASSWORD || 'uphash2025'
  
  useEffect(() => {
    // セッションストレージから認証状態を確認
    const auth = sessionStorage.getItem('uphash-auth')
    if (auth === 'true') {
      setIsAuthenticated(true)
    }
  }, [])
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true)
      sessionStorage.setItem('uphash-auth', 'true')
      setError(false)
    } else {
      setError(true)
    }
  }
  
  if (isAuthenticated) {
    return <>{children}</>
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">UP HASH</h1>
            <p className="text-gray-600">このサイトはパスワードで保護されています</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                パスワード
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="パスワードを入力してください"
                required
              />
            </div>
            
            {error && (
              <p className="text-sm text-red-600">
                パスワードが正しくありません
              </p>
            )}
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              アクセス
            </button>
          </form>
          
          <p className="text-xs text-gray-500 text-center mt-6">
            アクセス権限についてのお問い合わせは info@uphash.net まで
          </p>
        </div>
      </div>
    </div>
  )
}