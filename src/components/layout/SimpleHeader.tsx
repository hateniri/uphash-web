'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigationStructure } from '@/lib/navigation-structure'
import { getImagePath } from '@/lib/utils'

export default function SimpleHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setOpenSubmenu(null)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-brand-silver-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src={getImagePath('/images/uphash_logo.png')} 
                alt="UP HASH会社ロゴ" 
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationStructure.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href || '#'}
                  className={`text-brand-silver-700 hover:text-brand-black font-medium transition-colors px-3 py-2 ${
                    pathname === item.href ? 'text-brand-black' : ''
                  }`}
                >
                  {item.label}
                </Link>
                
                {/* Desktop Dropdown */}
                {item.children && (
                  <div className="absolute left-0 mt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                          <div className="text-sm font-medium text-gray-900">
                            {child.label}
                          </div>
                          {child.description && (
                            <div className="text-xs text-gray-600 mt-0.5">
                              {child.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Contact Button */}
            <Link
              href="/contact"
              className="ml-4 inline-flex items-center px-4 py-2 bg-brand-blue-600 text-white text-sm font-medium rounded-lg hover:bg-brand-blue-700 transition-colors border border-brand-blue-600"
            >
              お問い合わせ
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            aria-expanded={isMobileMenuOpen}
            aria-label="メニュー"
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {navigationStructure.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href || '#'}
                    className={`flex-1 px-3 py-2 rounded-lg text-base font-medium ${
                      pathname === item.href
                        ? 'text-gray-900 bg-gray-100'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => {
                      if (!item.children) {
                        closeMobileMenu()
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                  
                  {item.children && (
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="p-2 rounded-lg hover:bg-gray-100"
                      aria-expanded={openSubmenu === item.label}
                      aria-label={`${item.label}のサブメニューを${openSubmenu === item.label ? '閉じる' : '開く'}`}
                    >
                      <svg 
                        className={`h-5 w-5 text-gray-500 transition-transform ${
                          openSubmenu === item.label ? 'rotate-180' : ''
                        }`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                  )}
                </div>
                
                {/* Mobile Submenu */}
                {item.children && openSubmenu === item.label && (
                  <div className="mt-2 ml-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-3 py-2 rounded-lg hover:bg-gray-50"
                        onClick={closeMobileMenu}
                      >
                        <div className="text-sm font-medium text-gray-700">
                          {child.label}
                        </div>
                        {child.description && (
                          <div className="text-xs text-gray-500 mt-0.5">
                            {child.description}
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile Contact Button */}
            <Link
              href="/contact"
              className="block w-full mt-4 px-4 py-2 bg-gray-900 text-white text-center text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
              onClick={closeMobileMenu}
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}