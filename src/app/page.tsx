import Hero from '@/components/sections/Hero'
import ProductComparison from '@/components/sections/ProductComparison'
import BlogSlideshow from '@/components/sections/BlogSlideshow'
import SoftwareProducts from '@/components/sections/SoftwareProducts'
import ContactForm from '@/components/sections/ContactForm'
import StructuredData, { organizationSchema, websiteSchema, localBusinessSchema } from '@/components/StructuredData'

export default function Home() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={localBusinessSchema} />
      <main id="main-content">
      {/* ヒーローセクション */}
      <Hero />
      
      {/* 製品比較セクション */}
      <ProductComparison />

      {/* ソフトウェアセクション */}
      <SoftwareProducts />

      {/* ブログスライドショー */}
      <BlogSlideshow />

      {/* お問い合わせセクション */}
      <ContactForm />
    </main>
    </>
  )
}