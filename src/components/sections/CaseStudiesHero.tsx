import { getImagePath } from '@/lib/utils'

export default function CaseStudiesHero() {
  return (
    <section className="relative bg-brand-black py-20 md:py-28 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern-dark bg-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              導入事例
            </h1>
            <p className="text-xl md:text-2xl text-brand-silver-300 max-w-3xl mx-auto">
              建設・測量・インフラ・製造業など、様々な分野でXGRIDSが活用されています
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://cdn-bukbb1.xgrids.cloud/ep/dc/officialWebsite/industry/pc/img/industry_banner_3.jpg"
              alt="XGRIDS導入事例 - 様々な業界での活用シーン"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a 
              href="#industries" 
              className="inline-flex items-center px-8 py-4 bg-brand-blue-600 text-white font-semibold text-lg rounded-xl hover:bg-brand-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              業界別の活用事例を見る
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}