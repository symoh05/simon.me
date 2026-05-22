'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

 const navLinks = [
  { name: '[HOME]', href: '/' },
  { name: '[ABOUT]', href: '/about' },
  { name: '[SERVICES]', href: '/services' },
  { name: '[PROJECTS]', href: '/projects' },
  { name: '[BLOG]', href: '/blog' },
  { name: '[CONTACT]', href: '/contact' },
]

  return (
    <>
      {/* Top Bar */}
      <div className="flex justify-between items-center py-4 px-0 border-b border-white/30 mb-6">
        {/* Hamburger Menu Button - Mobile ONLY */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden text-xl bg-white/10 border border-white rounded-lg px-3 py-1.5 hover:bg-white/20 transition-all z-50 ${mobileMenuOpen ? 'bg-white/20' : ''}`}
          aria-label="Menu"
        >
          {mobileMenuOpen ? (
            <i className="fas fa-times text-white"></i>
          ) : (
            <i className="fas fa-bars text-white"></i>
          )}
        </button>

        {/* Desktop Navigation Links - Hidden on mobile */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors font-['Orbitron'] text-sm tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#"
            className="text-gray-300 hover:text-white transition-colors font-['Orbitron'] text-sm tracking-wide"
          >
            <i className="fab fa-github mr-1"></i> REPOS
          </Link>
        </div>

        {/* Logo - Centered on mobile, right-aligned on desktop */}
        <div className="font-['Orbitron'] font-extrabold text-xl md:text-2xl tracking-wide text-white md:ml-auto">
          SIMON<span className="text-sm text-gray-400">_CODEZ</span>
        </div>

        {/* Spacer for mobile balance */}
        <div className="w-8 md:hidden"></div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && isMobile && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-4 right-4 bg-black/95 backdrop-blur-xl border border-white rounded-2xl p-6 z-50 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-gray-300 hover:text-white border-b border-dashed border-transparent hover:border-white transition-all font-['Orbitron'] text-base"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-gray-300 hover:text-white transition-all font-['Orbitron'] text-base"
            >
              <i className="fab fa-github mr-2"></i> REPOS
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}