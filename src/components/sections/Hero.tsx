import Link from 'next/link'
import { getImagePath } from '@/lib/utils'

export default function Hero() {
  return (
    <section className="relative">
      {/* First section with video background */}
      <div className="relative min-h-screen">
        {/* Background video section */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={getImagePath('/videos/BG.mp4')} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
                空間コンピューティングソリューション
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-16 max-w-4xl mx-auto">
                XGRIDSのMulti-SLAM + マルチセンサーフュージョンシステムで、産業領域における3Dモデリングを次の次元へ。
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}