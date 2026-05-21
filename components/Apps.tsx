'use client'

import { useState } from 'react'

export default function Apps() {
  const [touchedIndex, setTouchedIndex] = useState<number | null>(null)

  const apps = [
    {
      title: "VerseFlow Bible",
      desc: "Cross-platform Bible app with daily verses, offline support, and study tools.",
      tech: ["React Native", "Expo", "SQLite"],
      icon: "fas fa-bible",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop"
    },
    {
      title: "InvoicePro",
      desc: "Professional invoicing app for freelancers & SMEs – generate PDF invoices, track payments.",
      tech: ["React Native", "Node.js", "MongoDB"],
      icon: "fas fa-file-invoice-dollar",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
    },
    {
      title: "PesaTrack",
      desc: "Personal finance & expense tracker with budget goals, analytics, and export features.",
      tech: ["Next.js", "IndexedDB", "Chart.js"],
      icon: "fas fa-chart-line",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
    },
  ]

  const handleTap = (index: number) => {
    setTouchedIndex(index)
    setTimeout(() => setTouchedIndex(null), 300)
  }

  return (
    <section id="apps" className="py-12 scroll-mt-20">
      {/* Sticky Header - Responsive text sizes */}
      <div className="sticky top-[70px] z-40 -mx-4 px-4 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8">
        <div className="bg-black/80 backdrop-blur-md rounded-xl border border-white/30 py-2 md:py-3 px-3 md:px-4 flex items-center justify-between gap-2 md:gap-4 flex-nowrap shadow-lg max-w-7xl mx-auto">
          <div className="flex items-center gap-2 md:gap-3 flex-nowrap overflow-x-auto hide-scrollbar">
            <i className="fas fa-mobile-alt text-xl md:text-2xl lg:text-3xl text-white"></i>
            <span className="font-['Orbitron'] text-sm md:text-lg lg:text-2xl whitespace-nowrap">//_NATIVE_APPS_&_PWA</span>
            <i className="fas fa-code-branch text-white text-base md:text-xl"></i>
          </div>
          <div className="hidden sm:block text-xs text-gray-400 whitespace-nowrap">
            scroll ↓
          </div>
        </div>
      </div>

      {/* Added margin-top to create space between header and cards */}
      <div className="mt-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <div 
              key={index} 
              onClick={() => handleTap(index)}
              onMouseEnter={() => setTouchedIndex(index)}
              onMouseLeave={() => setTouchedIndex(null)}
              className="relative bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 transition-all duration-300 cursor-pointer group"
              style={{
                transform: touchedIndex === index ? 'translateY(-4px)' : 'translateY(0)',
                borderColor: touchedIndex === index ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.2)'
              }}
            >
              {/* Image section */}
              <div className="relative h-48 overflow-hidden">
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
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                  {app.tech.map((tech, i) => (
                    <span key={i} className="bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white border border-white/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Content section */}
              <div className="relative p-5">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-base md:text-xl font-bold text-white">
                    {app.title}
                  </h3>
                  <i className="fas fa-clock text-gray-400 text-xs md:text-sm group-hover:text-white transition-all duration-300"></i>
                </div>
                <p className="text-gray-400 text-xs md:text-sm line-clamp-2">
                  {app.desc}
                </p>
              </div>
              
              {/* Large translucent background icon */}
              <i 
                className={`${app.icon} absolute pointer-events-none transition-all duration-300`}
                style={{
                  position: 'absolute',
                  bottom: '-25px',
                  right: '-25px',
                  fontSize: '7rem',
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

      <div className="mt-8 bg-white/5 rounded-2xl p-5 border border-white/20">
        <div className="flex items-center gap-4 flex-wrap">
          <i className="fas fa-rocket text-3xl text-white"></i>
          <span className="text-sm md:text-base"><strong>More apps:</strong> Also built custom PWAs for local businesses, delivery trackers, and admin dashboards. Always expanding the arsenal.</span>
        </div>
      </div>
    </section>
  )
}