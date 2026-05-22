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
        <div ref={statsRef} className="py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="text-center bg-white/5 rounded-lg p-3 border border-white/10 hover:border-white/30 transition-all">
              <i className="fas fa-code text-xl text-white mb-1 block"></i>
              <div className="text-xl font-bold text-white">{counts.projects}+</div>
              <p className="text-gray-400 text-[10px] mt-0.5">Projects</p>
            </div>
            <div className="text-center bg-white/5 rounded-lg p-3 border border-white/10 hover:border-white/30 transition-all">
              <i className="fas fa-users text-xl text-white mb-1 block"></i>
              <div className="text-xl font-bold text-white">{counts.clients}+</div>
              <p className="text-gray-400 text-[10px] mt-0.5">Clients</p>
            </div>
            <div className="text-center bg-white/5 rounded-lg p-3 border border-white/10 hover:border-white/30 transition-all">
              <i className="fas fa-mobile-alt text-xl text-white mb-1 block"></i>
              <div className="text-xl font-bold text-white">{counts.apps}+</div>
              <p className="text-gray-400 text-[10px] mt-0.5">Mobile Apps</p>
            </div>
            <div className="text-center bg-white/5 rounded-lg p-3 border border-white/10 hover:border-white/30 transition-all">
              <i className="fas fa-coffee text-xl text-white mb-1 block"></i>
              <div className="text-xl font-bold text-white">{counts.coffee}+</div>
              <p className="text-gray-400 text-[10px] mt-0.5">Coffee</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-8 overflow-hidden">
          <h2 className="font-['Orbitron'] text-xl font-bold text-white mb-4 text-center">
            WHAT_<span className="text-gray-400">CLIENTS_SAY</span>
          </h2>
          
          {/* Desktop View - Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="relative bg-white/5 rounded-lg p-4 border border-white/20 hover:border-white/40 transition-all overflow-hidden">
                <i className="fas fa-quote-left text-gray-500 text-lg mb-2 block"></i>
                <p className="text-gray-300 text-xs mb-3 line-clamp-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                    <i className={`${testimonial.icon} text-white text-xs`}></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[11px]">{testimonial.name}</h4>
                    <p className="text-gray-500 text-[10px]">{testimonial.role}</p>
                  </div>
                </div>
                <i className="fas fa-quote-right absolute pointer-events-none"
                  style={{
                    position: 'absolute',
                    bottom: '-10px',
                    right: '-10px',
                    fontSize: '3rem',
                    opacity: 0.05,
                    transform: 'rotate(-10deg)',
                    zIndex: 0
                  }}
                ></i>
              </div>
            ))}
          </div>

          {/* Mobile View - Carousel */}
          <div className="md:hidden relative px-2">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-2">
                    <div className="relative bg-white/5 rounded-lg p-4 border border-white/20 overflow-hidden">
                      <i className="fas fa-quote-left text-gray-500 text-lg mb-2 block"></i>
                      <p className="text-gray-300 text-xs mb-3">"{testimonial.text}"</p>
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                          <i className={`${testimonial.icon} text-white text-xs`}></i>
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-[11px]">{testimonial.name}</h4>
                          <p className="text-gray-500 text-[10px]">{testimonial.role}</p>
                        </div>
                      </div>
                      <i className="fas fa-quote-right absolute pointer-events-none"
                        style={{
                          position: 'absolute',
                          bottom: '-10px',
                          right: '-10px',
                          fontSize: '3rem',
                          opacity: 0.05,
                          transform: 'rotate(-10deg)',
                          zIndex: 0
                        }}
                      ></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center gap-1.5 mt-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`transition-all duration-300 ${
                    currentTestimonial === i 
                      ? 'w-5 h-1 bg-white rounded-full' 
                      : 'w-1.5 h-1 bg-white/30 rounded-full'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 rounded-full w-6 h-6 flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <i className="fas fa-chevron-left text-white text-[10px]"></i>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 rounded-full w-6 h-6 flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <i className="fas fa-chevron-right text-white text-[10px]"></i>
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-8">
          <div className="text-center bg-gradient-to-r from-white/5 to-transparent rounded-lg p-4 border border-white/20">
            <i className="fas fa-rocket text-xl text-white mb-2 block"></i>
            <h2 className="font-['Orbitron'] text-base font-bold text-white mb-1">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-400 text-xs mb-3 max-w-md mx-auto">
              Let's work together to bring your ideas to life.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link href="/contact">
                <button className="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-lg border border-white/30 transition-all text-xs flex items-center gap-1">
                  Hire Me
                  <i className="fas fa-arrow-right text-[10px]"></i>
                </button>
              </Link>
              <Link href="/projects">
                <button className="bg-white/5 hover:bg-white/10 text-white px-3 py-1 rounded-lg border border-white/20 transition-all text-xs flex items-center gap-1">
                  View Work
                  <i className="fas fa-folder-open text-[10px]"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        <Contact />
        
        {/* Footer */}
        <footer className="mt-8 pt-4 border-t border-white/20 text-center text-[10px] pb-5 text-gray-400">
          <i className="fas fa-shield-haltered text-white mr-1"></i>
          SIMON NGUGI — NAIROBI, KE — full-stack • mobile • cyber security enthusiast
        </footer>
      </div>
    </>
  )
}