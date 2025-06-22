import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import ProductShowcase from '@/components/sections/ProductShowcase'
import ContactForm from '@/components/sections/ContactForm'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <ProductShowcase />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}