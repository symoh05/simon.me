'use client'

import Navbar from '@/components/Navbar'
import CustomCursor from '@/components/CustomCursor'

export default function AboutPage() {
  return (
    <>
      <CustomCursor />
      
      {/* Cyber Background */}
      <div className="cyber-bg"></div>
      <div className="grid-overlay"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <Navbar />
        
        <div className="py-8">
          {/* Hero Section with Watermark */}
          <div className="relative text-center mb-8">
            {/* Thick translucent watermark */}
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
              style={{
                fontSize: 'clamp(60px, 12vw, 140px)',
                fontWeight: '900',
                color: 'rgba(255, 255, 255, 0.07)',
                letterSpacing: '15px',
                fontFamily: "'Orbitron', monospace",
                whiteSpace: 'nowrap',
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            >
              ABOUT
            </div>
            
            <div className="relative z-10">
              <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                ABOUT_<span className="text-gray-400">ME</span>
              </h1>
              <div className="w-16 h-0.5 bg-white/30 mx-auto"></div>
              <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm">
                Get to know me, my journey, and what drives me
              </p>
            </div>
          </div>

          {/* Bio Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Who Am I */}
            <div className="relative bg-black/50 backdrop-blur-md rounded-xl p-4 border border-white/20 overflow-hidden h-full">
              <i className="fas fa-user-astronaut absolute pointer-events-none"
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '-15px',
                  fontSize: '5rem',
                  opacity: 0.1,
                  transform: 'rotate(-15deg)',
                  zIndex: 0
                }}
              ></i>
              <div className="relative z-10">
                <i className="fas fa-user-astronaut text-2xl text-white mb-2 block"></i>
                <h2 className="font-['Orbitron'] text-xl font-bold text-white mb-2">Who Am I?</h2>
                <p className="text-gray-300 text-sm mb-2 leading-relaxed">
                  I'm Simon Ngugi, a BSc IT student and full-stack developer based in Nairobi, Kenya. 
                  I craft beautiful and functional digital solutions.
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  I specialize in building responsive web applications and cross-platform mobile apps.
                </p>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="relative bg-black/50 backdrop-blur-md rounded-xl p-4 border border-white/20 overflow-hidden h-full">
              <i className="fas fa-code absolute pointer-events-none"
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '-15px',
                  fontSize: '5rem',
                  opacity: 0.1,
                  transform: 'rotate(-15deg)',
                  zIndex: 0
                }}
              ></i>
              <div className="relative z-10">
                <i className="fas fa-code text-2xl text-white mb-2 block"></i>
                <h2 className="font-['Orbitron'] text-xl font-bold text-white mb-2">Quick Facts</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-map-marker-alt text-white text-sm w-5"></i>
                    <span className="text-gray-300 text-sm">Nairobi, Kenya</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-graduation-cap text-white text-sm w-5"></i>
                    <span className="text-gray-300 text-sm">BSc Information Technology</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-laptop-code text-white text-sm w-5"></i>
                    <span className="text-gray-300 text-sm">2+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-rocket text-white text-sm w-5"></i>
                    <span className="text-gray-300 text-sm">20+ Projects Completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-heart text-white text-sm w-5"></i>
                    <span className="text-gray-300 text-sm">Available for Freelance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className="mb-12">
            <h2 className="font-['Orbitron'] text-2xl font-bold text-white mb-5 text-center">
              MY_<span className="text-gray-400">EXPERTISE</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "fab fa-react", name: "Frontend", skills: "React, Next.js, Tailwind", iconBg: "fab fa-react" },
                { icon: "fab fa-node-js", name: "Backend", skills: "Node.js, PHP, Python", iconBg: "fab fa-node-js" },
                { icon: "fas fa-mobile-alt", name: "Mobile", skills: "React Native, Expo", iconBg: "fas fa-mobile-alt" },
                { icon: "fas fa-database", name: "Database", skills: "PostgreSQL, MySQL", iconBg: "fas fa-database" }
              ].map((skill, i) => (
                <div key={i} className="relative bg-white/5 rounded-xl p-4 text-center border border-white/20 hover:border-white/40 transition-all overflow-hidden">
                  <i className={`${skill.icon} text-2xl text-white mb-2 block relative z-10`}></i>
                  <h3 className="font-['Orbitron'] text-base font-bold text-white mb-1 relative z-10">{skill.name}</h3>
                  <p className="text-gray-400 text-xs relative z-10">{skill.skills}</p>
                  <i className={`${skill.iconBg} absolute pointer-events-none`}
                    style={{
                      position: 'absolute',
                      bottom: '-20px',
                      right: '-20px',
                      fontSize: '4rem',
                      opacity: 0.08,
                      transform: 'rotate(-15deg)',
                      zIndex: 0
                    }}
                  ></i>
                </div>
              ))}
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="mb-12">
            <h2 className="font-['Orbitron'] text-2xl font-bold text-white mb-5 text-center">
              JOURNEY_<span className="text-gray-400">SO_FAR</span>
            </h2>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/20"></div>
              {[
                { year: "2023", title: "Started Coding", desc: "Began with HTML, CSS, JavaScript", side: "left" },
                { year: "2024", title: "First Freelance Project", desc: "Built first commercial website", side: "right" },
                { year: "2024", title: "React Native Expert", desc: "Launched first cross-platform app", side: "left" },
                { year: "2025", title: "Full-Stack Developer", desc: "Mastered Next.js & cloud deployment", side: "right" }
              ].map((item, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center mb-5 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`w-full md:w-1/2 ${item.side === 'right' ? 'md:pl-10' : 'md:pr-10'}`}>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/20 ml-7 md:ml-0">
                      <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-white rounded-full -translate-x-1/2 mt-1"></div>
                      <span className="text-xs text-gray-400">{item.year}</span>
                      <h3 className="font-['Orbitron'] text-base font-bold text-white mt-1">{item.title}</h3>
                      <p className="text-gray-300 text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="mb-12">
            <h2 className="font-['Orbitron'] text-2xl font-bold text-white mb-5 text-center">
              TOOLS_<span className="text-gray-400">&_TECH</span>
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {["VS Code", "Git", "GitHub", "Figma", "Postman", "Vercel", "Supabase", "MongoDB", "Docker", "AWS"].map((tool, i) => (
                <div key={i} className="bg-white/5 rounded-lg p-2 text-center border border-white/10 hover:border-white/30 transition-all">
                  <span className="text-gray-300 text-xs">{tool}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-white/5 to-transparent rounded-xl p-5 border border-white/20">
            <i className="fas fa-envelope text-2xl text-white mb-2 block"></i>
            <h2 className="font-['Orbitron'] text-xl font-bold text-white mb-2">Let's Work Together</h2>
            <p className="text-gray-400 text-sm mb-4 max-w-md mx-auto">
              Have a project in mind? I'd love to hear about it.
            </p>
            <a href="/contact">
              <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg border border-white/30 transition-all text-sm">
                Get In Touch →
              </button>
            </a>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-10 pt-4 border-t border-white/20 text-center text-xs pb-6 text-gray-400">
          <i className="fas fa-shield-haltered text-white mr-2"></i>
          SIMON NGUGI — NAIROBI, KE — full-stack • mobile • cyber security enthusiast
        </footer>
      </div>
    </>
  )
}