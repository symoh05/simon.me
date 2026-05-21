// app/page.tsx
'use client'

import CustomCursor from '@/components/CustomCursor'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Apps from '@/components/Apps'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <CustomCursor />
      
      {/* Cyber Background */}
      <div className="cyber-bg"></div>
      <div className="grid-overlay"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Apps />
        <Contact />
        
        {/* Footer - Updated to match your black/white theme */}
        <footer className="mt-16 pt-6 border-t border-white/20 text-center text-xs pb-8 text-gray-400">
          <i className="fas fa-shield-haltered text-white mr-2"></i>
          SIMON NGUGI — NAIROBI, KE — full-stack • mobile • cyber security enthusiast — open for innovation
        </footer>
      </div>
    </>
  )
}