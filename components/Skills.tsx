'use client'

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
    <section id="skills" className="py-8 scroll-mt-20 relative">
      {/* Simple watermark */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 text-7xl font-black text-white/5 font-['Orbitron'] pointer-events-none select-none z-0 hidden lg:block">
        TECH
      </div>

      {/* Sticky Header - Matching projects/apps header style */}
      <div className="sticky top-[70px] z-40 -mx-4 px-4 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8">
        <div className="bg-black/80 backdrop-blur-md rounded-xl border border-white/30 py-2 md:py-3 px-4 md:px-6 flex items-center justify-between shadow-lg max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <i className="fas fa-microchip text-xl md:text-2xl text-white"></i>
            <span className="font-['Orbitron'] text-sm md:text-lg font-bold text-white">
              TECH_<span className="text-gray-400">WEAPONS</span>
            </span>
          </div>
          <div className="hidden sm:block text-xs text-gray-400">
            scroll ↓
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card relative bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/20 overflow-hidden cursor-pointer h-full">
              {/* Main icon */}
              <i className={`${skill.icon} skill-main-icon text-2xl text-white mb-2 block transition-all duration-300`}></i>
              <h4 className="skill-title font-['Orbitron'] font-bold text-gray-300 text-sm mb-1">{skill.name}</h4>
              <span className="skill-desc text-[10px] text-gray-500 block">{skill.desc}</span>
              
              {/* Large background icon */}
              <i 
                className={`${skill.icon} skill-bg-icon absolute pointer-events-none`}
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '-15px',
                  fontSize: '4rem'
                }}
              ></i>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}