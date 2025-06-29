'use client'

import React from 'react'

interface ShareButtonsProps {
  url: string
  title: string
  description?: string
}

export default function ShareButtons({ url, title, description }: ShareButtonsProps) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description || '')

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    line: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`
  }

  const handleShare = (platform: keyof typeof shareLinks) => {
    const shareUrl = shareLinks[platform]
    if (platform === 'email') {
      window.location.href = shareUrl
    } else {
      window.open(shareUrl, '_blank', 'width=600,height=400')
    }
  }

  const buttonClass = "flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 hover:scale-110"

  return (
    <div className="flex items-center space-x-3">
      <span className="text-gray-600 font-medium">シェア:</span>
      
      {/* Twitter/X */}
      <button
        onClick={() => handleShare('twitter')}
        className={`${buttonClass} bg-black text-white hover:bg-gray-800`}
        aria-label="Xでシェア"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </button>

      {/* Facebook */}
      <button
        onClick={() => handleShare('facebook')}
        className={`${buttonClass} bg-[#1877F2] text-white hover:bg-[#166FE5]`}
        aria-label="Facebookでシェア"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </button>

      {/* LinkedIn */}
      <button
        onClick={() => handleShare('linkedin')}
        className={`${buttonClass} bg-[#0A66C2] text-white hover:bg-[#004182]`}
        aria-label="LinkedInでシェア"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </button>

      {/* LINE */}
      <button
        onClick={() => handleShare('line')}
        className={`${buttonClass} bg-[#00B900] text-white hover:bg-[#00A000]`}
        aria-label="LINEでシェア"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992zm-18.988-2.595c.129 0 .234.105.234.234v4.153h2.287c.129 0 .233.105.233.234v.842c0 .129-.104.234-.233.234h-3.363c-.063 0-.119-.025-.161-.065l-.001-.001-.002-.002-.001-.001-.003-.003c-.04-.042-.065-.099-.065-.161v-5.235c0-.129.105-.234.234-.234h.841zm14.992 0c.129 0 .234.105.234.234v.842c0 .129-.105.234-.234.234h-2.287v.883h2.287c.129 0 .234.105.234.234v.842c0 .129-.105.234-.234.234h-2.287v.883h2.287c.129 0 .234.105.234.234v.842c0 .129-.105.234-.234.234h-3.363c-.063 0-.12-.025-.162-.065l-.003-.004-.003-.003c-.04-.042-.065-.099-.065-.161v-5.235c0-.062.025-.119.065-.161.042-.04.099-.065.161-.065h3.363zm-10.443.001c.129 0 .234.104.234.233v5.236c0 .128-.105.233-.234.233h-.842c-.129 0-.234-.105-.234-.233v-5.236c0-.129.105-.233.234-.233h.842zm2.127 0h.008l.012.001.013.001.013.003.012.003.007.003.005.002.009.004.008.005.007.004.005.004.005.003.008.006.013.011.002.003.005.005.010.011.009.013.002.002.005.008.004.007v.001l.003.006.007.014.001.005.002.006.002.007.001.009v.008l2.606 3.933V7.942c0-.129.105-.234.234-.234h.841c.13 0 .234.105.234.234v5.235c0 .062-.025.119-.065.161l-.004.004c-.042.04-.099.065-.16.065h-.825l-.005-.001-.022-.002-.018-.004-.015-.006-.016-.006-.021-.013-.01-.007-.013-.011-.003-.002-.005-.005-.003-.003-.011-.013-.006-.009-2.609-3.936v3.781c0 .129-.105.234-.234.234h-.841c-.129 0-.234-.105-.234-.234v-5.235c0-.062.025-.119.065-.161.042-.04.099-.065.161-.065h.842z"/>
        </svg>
      </button>

      {/* Email */}
      <button
        onClick={() => handleShare('email')}
        className={`${buttonClass} bg-gray-600 text-white hover:bg-gray-700`}
        aria-label="メールでシェア"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </button>
    </div>
  )
}