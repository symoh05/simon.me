'use client'

import AnimatedSection from '@/components/AnimatedSection'
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
        
        <div className="min-h-screen py-12">
          {/* Hero Section */}
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center mb-16">
              <h1 className="font-['Orbitron'] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                ABOUT_<span className="text-gray-400">ME</span>
              </h1>
              <div className="w-20 h-1 bg-white/30 mx-auto"></div>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                Get to know me, my journey, and what drives me to create exceptional digital experiences
              </p>
            </div>
          </AnimatedSection>

          {/* Bio Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="relative bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-white/20 overflow-hidden h-full">
                <i className="fas fa-user-astronaut absolute pointer-events-none transition-all duration-300"
                  style={{
                    position: 'absolute',
                    bottom: '-20px',
                    right: '-20px',
                    fontSize: '7rem',
                    opacity: 0.12,
                    transform: 'rotate(-15deg) scale(1)',
                    zIndex: 0
                  }}
                ></i>
                <div className="relative z-10">
                  <i className="fas fa-user-astronaut text-4xl text-white mb-4 block"></i>
                  <h2 className="font-['Orbitron'] text-2xl font-bold text-white mb-4">Who Am I?</h2>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    I'm Simon Ngugi, a passionate BSc IT student and full-stack developer based in Nairobi, Kenya. 
                    With a keen eye for detail and a love for modern web technologies, I craft digital solutions 
                    that are both beautiful and functional.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    My journey into tech started with curiosity about how websites work, which quickly evolved 
                    into a full-blown passion for creating them. Today, I specialize in building responsive web 
                    applications and cross-platform mobile apps that solve real-world problems.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="relative bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-white/20 overflow-hidden h-full">
                <i className="fas fa-code absolute pointer-events-none transition-all duration-300"
                  style={{
                    position: 'absolute',
                    bottom: '-20px',
                    right: '-20px',
                    fontSize: '7rem',
                    opacity: 0.12,
                    transform: 'rotate(-15deg) scale(1)',
                    zIndex: 0
                  }}
                ></i>
                <div className="relative z-10">
                  <i className="fas fa-code text-4xl text-white mb-4 block"></i>
                  <h2 className="font-['Orbitron'] text-2xl font-bold text-white mb-4">Quick Facts</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <i className="fas fa-map-marker-alt text-white w-6"></i>
                      <span className="text-gray-300">Nairobi, Kenya</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="fas fa-graduation-cap text-white w-6"></i>
                      <span className="text-gray-300">BSc Information Technology</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="fas fa-laptop-code text-white w-6"></i>
                      <span className="text-gray-300">2+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="fas fa-rocket text-white w-6"></i>
                      <span className="text-gray-300">20+ Projects Completed</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="fas fa-heart text-white w-6"></i>
                      <span className="text-gray-300">Available for Freelance</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Skills & Expertise */}
          <AnimatedSection direction="up" delay={0.4}>
            <div className="mb-20">
              <h2 className="font-['Orbitron'] text-3xl font-bold text-white mb-8 text-center">
                MY_<span className="text-gray-400">EXPERTISE</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: "fab fa-react", name: "Frontend", skills: "React, Next.js, Tailwind", iconBg: "fab fa-react" },
                  { icon: "fab fa-node-js", name: "Backend", skills: "Node.js, PHP, Python", iconBg: "fab fa-node-js" },
                  { icon: "fas fa-mobile-alt", name: "Mobile", skills: "React Native, Expo", iconBg: "fas fa-mobile-alt" },
                  { icon: "fas fa-database", name: "Database", skills: "PostgreSQL, MySQL, Supabase", iconBg: "fas fa-database" }
                ].map((skill, i) => (
                  <div key={i} className="relative bg-white/5 rounded-xl p-6 text-center border border-white/20 hover:border-white/40 transition-all overflow-hidden">
                    <i className={`${skill.icon} text-4xl text-white mb-3 block relative z-10`}></i>
                    <h3 className="font-['Orbitron'] text-lg font-bold text-white mb-2 relative z-10">{skill.name}</h3>
                    <p className="text-gray-400 text-sm relative z-10">{skill.skills}</p>
                    <i className={`${skill.iconBg} absolute pointer-events-none transition-all duration-300`}
                      style={{
                        position: 'absolute',
                        bottom: '-25px',
                        right: '-25px',
                        fontSize: '6rem',
                        opacity: 0.1,
                        transform: 'rotate(-15deg) scale(1)',
                        zIndex: 0
                      }}
                    ></i>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Experience Timeline - Starting from 2023 */}
          <AnimatedSection direction="up" delay={0.5}>
            <div className="mb-20">
              <h2 className="font-['Orbitron'] text-3xl font-bold text-white mb-8 text-center">
                JOURNEY_<span className="text-gray-400">SO_FAR</span>
              </h2>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/20"></div>
                
                {/* Timeline items - Updated years */}
                {[
                  { year: "2023", title: "Started Coding", desc: "Began my journey with HTML, CSS, and JavaScript", side: "left" },
                  { year: "2024", title: "First Freelance Project", desc: "Built my first commercial website for a local business", side: "right" },
                  { year: "2024", title: "React Native Expert", desc: "Launched first cross-platform mobile app", side: "left" },
                  { year: "2025", title: "Full-Stack Developer", desc: "Mastered Next.js and cloud deployment", side: "right" }
                ].map((item, i) => (
                  <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center mb-8 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`w-full md:w-1/2 ${item.side === 'right' ? 'md:pl-12' : 'md:pr-12'}`}>
                      <div className="bg-white/5 rounded-xl p-5 border border-white/20 ml-8 md:ml-0">
                        <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 mt-2"></div>
                        <span className="text-sm text-gray-400">{item.year}</span>
                        <h3 className="font-['Orbitron'] text-xl font-bold text-white mt-1">{item.title}</h3>
                        <p className="text-gray-300 mt-2">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Tools & Technologies */}
          <AnimatedSection direction="up" delay={0.6}>
            <div className="mb-20">
              <h2 className="font-['Orbitron'] text-3xl font-bold text-white mb-8 text-center">
                TOOLS_<span className="text-gray-400">&_TECH</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  "VS Code", "Git", "GitHub", "Figma", "Postman", "Vercel",
                  "Netlify", "Supabase", "MongoDB", "Firebase", "Docker", "AWS"
                ].map((tool, i) => (
                  <div key={i} className="bg-white/5 rounded-lg p-3 text-center border border-white/10 hover:border-white/30 transition-all">
                    <span className="text-gray-300 text-sm">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Call to Action */}
          <AnimatedSection direction="up" delay={0.7}>
            <div className="text-center bg-gradient-to-r from-white/5 to-transparent rounded-2xl p-8 border border-white/20">
              <i className="fas fa-envelope text-4xl text-white mb-4 block"></i>
              <h2 className="font-['Orbitron'] text-2xl font-bold text-white mb-3">
                Let's Work Together
              </h2>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                Have a project in mind? I'd love to hear about it.
              </p>
              <a href="/contact">
                <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg border border-white/30 transition-all">
                  Get In Touch →
                </button>
              </a>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Footer */}
        <footer className="mt-16 pt-6 border-t border-white/20 text-center text-xs pb-8 text-gray-400">
          <i className="fas fa-shield-haltered text-white mr-2"></i>
          SIMON NGUGI — NAIROBI, KE — full-stack • mobile • cyber security enthusiast — open for innovation
        </footer>
      </div>
    </>
  )
}