'use client'

import AnimatedSection from './AnimatedSection'

export default function Hero() {
  return (
    <section id="home" className="relative py-8 overflow-hidden">
      {/* Circle Background */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
        style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #444444 0%, #1a1a1a 50%, transparent 80%)',
          opacity: 0.8
        }}
      ></div>
      
      <div className="mb-8">
        {/* Status Badges */}
        <AnimatedSection delay={0}>
          <div className="inline-flex flex-wrap items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/30 mb-8">
            <div className="text-xs md:text-sm whitespace-nowrap">
              <i className="fas fa-map-marker-alt text-white mr-1"></i> NAIROBI, KE
            </div>
            <div className="w-px h-4 bg-white/30"></div>
            <div className="text-xs md:text-sm whitespace-nowrap">
              <i className="fas fa-laptop-code text-white mr-1"></i> FULL-STACK
            </div>
            <div className="w-px h-4 bg-white/30"></div>
            <div className="text-xs md:text-sm whitespace-nowrap">
              <i className="fas fa-mobile-alt text-white mr-1"></i> APP DEV
            </div>
          </div>
        </AnimatedSection>
        
        {/* Name */}
        <AnimatedSection delay={0.2}>
          <h1 className="font-['Orbitron'] text-4xl md:text-6xl font-extrabold text-white glitch">
            SIMON NGUGI
          </h1>
        </AnimatedSection>
        
        {/* Description */}
        <AnimatedSection delay={0.4}>
          <div className="my-4 text-gray-300 border-l-4 border-white pl-4">
            <i className="fas fa-chevron-circle-right text-white mr-2"></i> 
            BSc IT Student // Full-Stack Architect & Mobile Pioneer<br />
            Nairobi, Kenya | Websites, PWAs, React Native apps, and immersive digital ecosystems.
          </div>
        </AnimatedSection>
        
        {/* Stats Badges */}
        <AnimatedSection delay={0.6}>
          <div className="flex gap-3 flex-wrap mt-4">
            <div className="bg-white/5 px-4 py-2 rounded-full border border-white/30 text-sm whitespace-nowrap">
              <i className="fas fa-code text-white mr-2"></i> 25+ PROJECTS
            </div>
            <div className="bg-white/5 px-4 py-2 rounded-full border border-white/30 text-sm whitespace-nowrap">
              <i className="fas fa-rocket text-white mr-2"></i> 6 NATIVE APPS
            </div>
            <div className="bg-white/5 px-4 py-2 rounded-full border border-white/30 text-sm whitespace-nowrap">
              <i className="fas fa-shield-haltered text-white mr-2"></i> CYBER // AI LEARNER
            </div>
            <div className="bg-white/5 px-4 py-2 rounded-full border border-white/30 text-sm whitespace-nowrap">
              <i className="fas fa-database text-white mr-2"></i> PSQL/SUPABASE
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}