// app/page.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import CustomCursor from '@/components/CustomCursor'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Apps from '@/components/Apps'
import Contact from '@/components/Contact'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'

export default function Home() {
  // Stats counter animation
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    apps: 0,
    coffee: 0
  })
  const [hasAnimated, setHasAnimated] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  // Testimonial carousel for mobile
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const testimonials = [
    { name: "John Mwangi", role: "CEO, Tech Solutions", text: "Simon delivered an outstanding website that exceeded our expectations. Professional and timely!", icon: "fas fa-user" },
    { name: "Sarah Kamau", role: "Founder, Royal Sneakers", text: "The e-commerce platform he built for us is amazing. Sales have increased significantly!", icon: "fas fa-user" },
    { name: "David Ochieng", role: "Project Manager", text: "Great communication and technical skills. Would definitely work with him again.", icon: "fas fa-user" }
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          
          // Animate counters
          const targets = { projects: 20, clients: 10, apps: 6, coffee: 100 }
          const duration = 2000
          const interval = 20
          const steps = duration / interval
          
          let step = 0
          const timer = setInterval(() => {
            step++
            setCounts({
              projects: Math.min(targets.projects, Math.floor((step / steps) * targets.projects)),
              clients: Math.min(targets.clients, Math.floor((step / steps) * targets.clients)),
              apps: Math.min(targets.apps, Math.floor((step / steps) * targets.apps)),
              coffee: Math.min(targets.coffee, Math.floor((step / steps) * targets.coffee))
            })
            if (step >= steps) clearInterval(timer)
          }, interval)
        }
      },
      { threshold: 0.5 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  // Auto slide testimonials on mobile
  useEffect(() => {
    if (!isMobile) return
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isMobile, testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <>
      <CustomCursor />
      
      <div className="cyber-bg"></div>
      <div className="grid-overlay"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Apps />
        
        {/* Stats Counter Section */}
        <AnimatedSection direction="up" delay={0.2}>
          <div ref={statsRef} className="py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all">
                <i className="fas fa-code text-3xl text-white mb-3 block"></i>
                <div className="text-3xl md:text-4xl font-bold text-white">{counts.projects}+</div>
                <p className="text-gray-400 text-sm mt-1">Projects Completed</p>
              </div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all">
                <i className="fas fa-users text-3xl text-white mb-3 block"></i>
                <div className="text-3xl md:text-4xl font-bold text-white">{counts.clients}+</div>
                <p className="text-gray-400 text-sm mt-1">Happy Clients</p>
              </div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all">
                <i className="fas fa-mobile-alt text-3xl text-white mb-3 block"></i>
                <div className="text-3xl md:text-4xl font-bold text-white">{counts.apps}+</div>
                <p className="text-gray-400 text-sm mt-1">Mobile Apps</p>
              </div>
              <div className="text-center bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all">
                <i className="fas fa-coffee text-3xl text-white mb-3 block"></i>
                <div className="text-3xl md:text-4xl font-bold text-white">{counts.coffee}+</div>
                <p className="text-gray-400 text-sm mt-1">Coffee Cups</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonials Section - Carousel on mobile, Grid on desktop */}
        <AnimatedSection direction="up" delay={0.3}>
          <div className="py-16">
            <h2 className="font-['Orbitron'] text-3xl font-bold text-white mb-8 text-center">
              WHAT_<span className="text-gray-400">CLIENTS_SAY</span>
            </h2>
            
            {/* Desktop View (Grid) */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="relative bg-white/5 rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all overflow-hidden">
                  <i className="fas fa-quote-left text-gray-500 text-2xl mb-4 block relative z-10"></i>
                  <p className="text-gray-300 text-sm mb-4 relative z-10">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <i className={`${testimonial.icon} text-white`}></i>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                      <p className="text-gray-500 text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                  {/* Translucent quote icon at bottom */}
                  <i className="fas fa-quote-right absolute pointer-events-none"
                    style={{
                      position: 'absolute',
                      bottom: '-15px',
                      right: '-15px',
                      fontSize: '5rem',
                      opacity: 0.06,
                      transform: 'rotate(-10deg)',
                      zIndex: 0
                    }}
                  ></i>
                </div>
              ))}
            </div>

            {/* Mobile View (Carousel) */}
            <div className="md:hidden relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, i) => (
                    <div key={i} className="w-full flex-shrink-0 px-2">
                      <div className="relative bg-white/5 rounded-xl p-6 border border-white/20 overflow-hidden">
                        <i className="fas fa-quote-left text-gray-500 text-2xl mb-4 block relative z-10"></i>
                        <p className="text-gray-300 text-sm mb-4 relative z-10">"{testimonial.text}"</p>
                        <div className="flex items-center gap-3 relative z-10">
                          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                            <i className={`${testimonial.icon} text-white`}></i>
                          </div>
                          <div>
                            <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                            <p className="text-gray-500 text-xs">{testimonial.role}</p>
                          </div>
                        </div>
                        {/* Translucent quote icon at bottom */}
                        <i className="fas fa-quote-right absolute pointer-events-none"
                          style={{
                            position: 'absolute',
                            bottom: '-15px',
                            right: '-15px',
                            fontSize: '5rem',
                            opacity: 0.06,
                            transform: 'rotate(-10deg)',
                            zIndex: 0
                          }}
                        ></i>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Carousel Navigation Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`transition-all duration-300 ${
                      currentTestimonial === i 
                        ? 'w-8 h-2 bg-white rounded-full' 
                        : 'w-2 h-2 bg-white/30 rounded-full hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              {/* Carousel Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white/20 transition-all"
              >
                <i className="fas fa-chevron-left text-white text-sm"></i>
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white/20 transition-all"
              >
                <i className="fas fa-chevron-right text-white text-sm"></i>
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection direction="up" delay={0.4}>
          <div className="py-16">
            <div className="text-center bg-gradient-to-r from-white/5 to-transparent rounded-2xl p-8 border border-white/20">
              <i className="fas fa-rocket text-4xl text-white mb-4 block"></i>
              <h2 className="font-['Orbitron'] text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                Let's work together to bring your ideas to life. Get a free quote today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg border border-white/30 transition-all flex items-center gap-2">
                    Hire Me
                    <i className="fas fa-arrow-right text-sm"></i>
                  </button>
                </Link>
                <Link href="/projects">
                  <button className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-lg border border-white/20 transition-all flex items-center gap-2">
                    View Work
                    <i className="fas fa-folder-open text-sm"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <Contact />
        
        {/* Footer */}
        <footer className="mt-16 pt-6 border-t border-white/20 text-center text-xs pb-8 text-gray-400">
          <i className="fas fa-shield-haltered text-white mr-2"></i>
          SIMON NGUGI — NAIROBI, KE — full-stack • mobile • cyber security enthusiast — open for innovation
        </footer>
      </div>
    </>
  )
}