'use client'

import { useState } from 'react'

export default function Apps() {
  const [touchedIndex, setTouchedIndex] = useState<number | null>(null)

  const apps = [
    {
      title: "VerseFlow",
      domain: " Bible",
      desc: "Cross-platform Bible app with daily verses, offline support.",
      tech: ["React Native", "Expo", "SQLite"],
      icon: "fas fa-bible",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
      slug: "verseflow"
    },
    {
      title: "InvoicePro",
      domain: "",
      desc: "Professional invoicing app – PDF invoices, payment tracking.",
      tech: ["React Native", "Node.js", "MongoDB"],
      icon: "fas fa-file-invoice-dollar",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      slug: "invoicepro"
    },
    {
      title: "PesaTrack",
      domain: "",
      desc: "Personal finance tracker – budget goals, analytics.",
      tech: ["Next.js", "IndexedDB", "Chart.js"],
      icon: "fas fa-chart-line",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      slug: "pesatrack"
    },
  ]

  const handleTap = (index: number, slug: string) => {
    setTouchedIndex(index)
    setTimeout(() => {
      setTouchedIndex(null)
      window.location.href = `/projects/${slug}`
    }, 300)
  }

  return (
    <section id="apps" className="py-8 scroll-mt-20">
      {/* Sticky Header - Matching projects header style */}
      <div className="sticky top-[70px] z-40 -mx-4 px-4 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8">
        <div className="bg-black/80 backdrop-blur-md rounded-xl border border-white/30 py-2 md:py-3 px-4 md:px-6 flex items-center justify-between shadow-lg max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <i className="fas fa-mobile-alt text-xl md:text-2xl text-white"></i>
            <span className="font-['Orbitron'] text-sm md:text-lg font-bold text-white">
              NATIVE_<span className="text-gray-400">APPS</span>
            </span>
          </div>
          <div className="hidden sm:block text-xs text-gray-400">
            scroll ↓
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {apps.map((app, index) => (
            <div 
              key={index}
              onClick={() => handleTap(index, app.slug)}
              onMouseEnter={() => setTouchedIndex(index)}
              onMouseLeave={() => setTouchedIndex(null)}
              className="relative bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 transition-all duration-300 cursor-pointer group"
              style={{
                transform: touchedIndex === index ? 'translateY(-2px)' : 'translateY(0)',
                borderColor: touchedIndex === index ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.2)'
              }}
            >
              {/* Image section */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={app.image} 
                  alt={app.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  style={{
                    transform: touchedIndex === index ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-black/30"></div>
                
                {/* Tech badges */}
                <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1.5">
                  {app.tech.map((tech, i) => (
                    <span key={i} className="bg-black/70 backdrop-blur-sm px-1.5 py-0.5 rounded-full text-[10px] text-white border border-white/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Content section */}
              <div className="relative p-4">
                <div className="flex items-center justify-between gap-2 mb-1">
                  {/* Title with Orbitron font - all white */}
                  <h3 className="font-['Orbitron'] font-bold text-white text-sm md:text-base">
                    {app.title}<span className="text-gray-500">{app.domain}</span>
                  </h3>
                  <i className="fas fa-clock text-gray-400 text-[10px] md:text-xs group-hover:text-white transition-all duration-300"></i>
                </div>
                <p className="text-gray-400 text-[10px] md:text-xs line-clamp-2">
                  {app.desc}
                </p>
              </div>
              
              {/* Large translucent background icon */}
              <i 
                className={`${app.icon} absolute pointer-events-none transition-all duration-300`}
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-20px',
                  fontSize: '5rem',
                  opacity: touchedIndex === index ? 0.3 : 0.12,
                  transform: touchedIndex === index ? 'rotate(-30deg) scale(1.5)' : 'rotate(-15deg) scale(1)',
                  transition: 'all 0.3s ease',
                  zIndex: 0
                }}
              ></i>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 bg-white/5 rounded-xl p-4 border border-white/20">
        <div className="flex items-center gap-3 flex-wrap">
          <i className="fas fa-rocket text-xl text-white"></i>
          <span className="text-[10px] md:text-xs"><strong>More apps:</strong> Built custom PWAs for businesses, delivery trackers, admin dashboards.</span>
        </div>
      </div>
    </section>
  )
}