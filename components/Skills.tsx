'use client'

import AnimatedSection from './AnimatedSection'

export default function Skills() {
  const skills = [
    { name: "React/Next.js", desc: "⚡ Fullstack", icon: "fab fa-react" },
    { name: "Node.js / PHP", desc: "⚡ Backend", icon: "fab fa-node-js" },
    { name: "Python / AI", desc: "⚡ Learning", icon: "fab fa-python" },
    { name: "React Native/Expo", desc: "⚡ iOS/Android", icon: "fab fa-react" },
    { name: "PostgreSQL / MySQL", desc: "⚡ Supabase", icon: "fas fa-database" },
    { name: "Three.js / WebGL", desc: "⚡ 3D Experiences", icon: "fab fa-js" },
    { name: "Cyber Security", desc: "⚡ In progress", icon: "fas fa-shield-alt" },
    { name: "PWA / Expo", desc: "⚡ Offline-ready", icon: "fab fa-chrome" },
  ]

  return (
    <section id="skills" className="py-12 scroll-mt-20 relative">
      {/* Simple watermark */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 text-8xl font-black text-white/5 font-['Orbitron'] pointer-events-none select-none z-0 hidden lg:block">
        TECH
      </div>

      {/* Sticky Header */}
      <div className="sticky top-[70px] z-40 -mx-4 px-4 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8">
        <div className="bg-black/80 backdrop-blur-md rounded-xl border border-white/30 py-2 md:py-3 px-3 md:px-4 flex items-center justify-between gap-2 md:gap-4 flex-nowrap shadow-lg max-w-7xl mx-auto">
          <div className="flex items-center gap-2 md:gap-3 flex-nowrap">
            <i className="fas fa-microchip text-xl md:text-2xl lg:text-3xl text-white"></i>
            <span className="font-['Orbitron'] text-sm md:text-lg lg:text-2xl whitespace-nowrap">//_TECH_WEAPONS</span>
            <i className="fas fa-cog fa-spin text-white text-base md:text-xl"></i>
          </div>
          <div className="hidden sm:block text-xs text-gray-400 whitespace-nowrap">
            scroll ↓
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="skill-card relative bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/20 overflow-hidden cursor-pointer h-full">
                {/* Main icon */}
                <i className={`${skill.icon} skill-main-icon text-3xl text-white mb-2 block transition-all duration-300`}></i>
                <h4 className="skill-title font-['Orbitron'] font-bold text-gray-400 text-base mb-1">{skill.name}</h4>
                <span className="skill-desc text-xs text-gray-500 block">{skill.desc}</span>
                
                {/* Large background icon */}
                <i 
                  className={`${skill.icon} skill-bg-icon absolute pointer-events-none`}
                  style={{
                    position: 'absolute',
                    bottom: '-20px',
                    right: '-20px',
                    fontSize: '5rem'
                  }}
                ></i>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}