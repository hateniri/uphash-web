'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigationStructure } from '@/lib/navigation-structure'

export default function AppleStyleNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeMobilePanel, setActiveMobilePanel] = useState<string | null>(null)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveMobilePanel(null)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 100)
  }

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 100)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center">
        <ul className="flex items-center">
          {navigationStructure.map((item, index) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              {item.children ? (
                <button
                  className={`px-5 py-2 text-sm text-gray-700 hover:text-gray-900 transition-opacity ${
                    activeDropdown && activeDropdown !== item.label ? 'opacity-60' : ''
                  }`}
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === item.label}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  href={item.href || '#'}
                  className={`px-5 py-2 text-sm text-gray-700 hover:text-gray-900 transition-opacity ${
                    pathname === item.href ? 'text-gray-900' : ''
                  } ${activeDropdown && activeDropdown !== item.label ? 'opacity-60' : ''}`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Mega Menu */}
      {activeDropdown && (
        <div
          className="fixed left-0 right-0 top-16 bg-white/95 backdrop-blur-xl shadow-lg border-t border-gray-200 z-50"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">
              {navigationStructure
                .find(item => item.label === activeDropdown)
                ?.children?.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="group block"
                  >
                    <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                      {child.label}
                    </h3>
                    {child.description && (
                      <p className="text-xs text-gray-600 group-hover:text-gray-700 transition-colors">
                        {child.description}
                      </p>
                    )}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation Button */}
      <button
        className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="メニュー"
        aria-expanded={isMobileMenuOpen}
      >
        <div className="w-6 h-5 relative flex flex-col justify-between">
          <span className={`block h-0.5 w-full bg-gray-700 transition-all duration-300 ${
            isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`} />
          <span className={`block h-0.5 w-full bg-gray-700 transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-0' : ''
          }`} />
          <span className={`block h-0.5 w-full bg-gray-700 transition-all duration-300 ${
            isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`} />
        </div>
      </button>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 lg:hidden ${
        isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}>
        <div 
          className={`fixed inset-0 bg-black/20 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        <div className={`fixed inset-x-0 top-0 bg-white h-full overflow-hidden transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-gray-200">
            <Link 
              href="/" 
              className="flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <img 
                src="/images/uphash_logo.png" 
                alt="UP HASH会社ロゴ" 
                className="h-8 w-auto"
              />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="閉じる"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="relative h-[calc(100%-4rem)] overflow-hidden">
            {/* Main Menu */}
            <div className={`absolute inset-0 overflow-y-auto transition-transform duration-300 ${
              activeMobilePanel ? '-translate-x-full' : 'translate-x-0'
            }`}>
              <ul className="py-4">
                {navigationStructure.map((item) => (
                  <li key={item.label} className="border-b border-gray-100">
                    {item.children ? (
                      <button
                        onClick={() => setActiveMobilePanel(item.label)}
                        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-[17px] text-gray-900">{item.label}</span>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ) : (
                      <Link
                        href={item.href || '#'}
                        className="block px-6 py-4 text-[17px] text-gray-900 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              
              {/* Mobile CTA */}
              <div className="px-6 py-4 mt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  お問い合わせ
                </Link>
              </div>
            </div>

            {/* Sub Menu Panels */}
            {navigationStructure.map((item) => (
              item.children && (
                <div
                  key={item.label}
                  className={`absolute inset-0 bg-white overflow-y-auto transition-transform duration-300 ${
                    activeMobilePanel === item.label ? 'translate-x-0' : 'translate-x-full'
                  }`}
                >
                  <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
                    <button
                      onClick={() => setActiveMobilePanel(null)}
                      className="flex items-center gap-2 px-6 py-4 w-full text-left hover:bg-gray-50 transition-colors"
                    >
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      <span className="text-[17px] font-medium text-gray-900">{item.label}</span>
                    </button>
                  </div>
                  
                  <ul className="py-4">
                    {item.href && (
                      <li className="border-b border-gray-100">
                        <Link
                          href={item.href}
                          className="block px-6 py-4 text-[17px] text-gray-900 hover:bg-gray-50 transition-colors"
                          onClick={() => {
                            setIsMobileMenuOpen(false)
                            setActiveMobilePanel(null)
                          }}
                        >
                          すべての{item.label}
                        </Link>
                      </li>
                    )}
                    {item.children.map((child) => (
                      <li key={child.label} className="border-b border-gray-100">
                        <Link
                          href={child.href}
                          className="block px-6 py-4 hover:bg-gray-50 transition-colors"
                          onClick={() => {
                            setIsMobileMenuOpen(false)
                            setActiveMobilePanel(null)
                          }}
                        >
                          <div className="text-[17px] text-gray-900 mb-1">{child.label}</div>
                          {child.description && (
                            <div className="text-sm text-gray-600">{child.description}</div>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </>
  )
}