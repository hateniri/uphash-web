import Script from 'next/script'

interface StructuredDataProps {
  data: any
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
      }}
    />
  )
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "株式会社UPHASH",
  "alternateName": "UP HASH",
  "url": "https://xgrids.uphash.net",
  "logo": "https://xgrids.uphash.net/images/uphash_logo.png",
  "description": "XGRIDS Field Scannerで点群データをリアルタイムで表示。空間スキャニングと3Dコンテンツ作成の革新的ソリューション。",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "虎ノ門１丁目１７−１",
    "addressLocality": "港区",
    "addressRegion": "東京都",
    "postalCode": "105-6415",
    "addressCountry": "JP"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "info@uphash.net",
    "contactType": "Customer Service",
    "availableLanguage": ["Japanese", "English"]
  },
  "sameAs": [
    "https://x.com/UpHashNet",
    "https://www.youtube.com/@UPHASHNET",
    "https://github.com/UpHash-Network",
    "https://www.linkedin.com/in/shotaimai/"
  ]
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://xgrids.uphash.net",
  "name": "UP HASH",
  "description": "XGRIDS Field Scannerで点群データをリアルタイムで表示。空間スキャニングと3Dコンテンツ作成の革新的ソリューション。",
  "publisher": {
    "@id": "https://xgrids.uphash.net/#organization"
  },
  "inLanguage": "ja-JP"
}

export const productSchema = (product: {
  name: string
  description: string
  image: string
  price?: string
  brand?: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": `https://xgrids.uphash.net${product.image}`,
  "brand": {
    "@type": "Brand",
    "name": product.brand || "XGRIDS"
  },
  ...(product.price && {
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "JPY",
      "availability": "https://schema.org/InStock"
    }
  })
})

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
})

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
})

export const articleSchema = (article: {
  title: string
  description: string
  author: string
  datePublished: string
  image?: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "datePublished": article.datePublished,
  "publisher": {
    "@type": "Organization",
    "name": "UP HASH",
    "logo": {
      "@type": "ImageObject",
      "url": "https://xgrids.uphash.net/images/uphash_logo.png"
    }
  },
  ...(article.image && {
    "image": `https://xgrids.uphash.net${article.image}`
  })
})