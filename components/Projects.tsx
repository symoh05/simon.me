'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Projects() {
  const [touchedIndex, setTouchedIndex] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      slug: "telefix",
      title: "Telefix",
      domain: ".co.ke",
      desc: "Solar & power services – booking, catalog, service management.",
      tech: ["PHP", "MySQL", "Bootstrap"],
      icon: "fas fa-solar-panel",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop",
      link: "https://telefix.co.ke"
    },
    {
      id: 2,
      slug: "aksagen",
      title: "aksagensetservices",
      domain: ".co.ke",
      desc: "Generator services & maintenance dashboard, client portal.",
      tech: ["Next.js", "Node.js", "PostgreSQL"],
      icon: "fas fa-tools",
      image: "https://images.unsplash.com/photo-1581092335871-4d4a5b3c2f9b?w=600&h=400&fit=crop",
      link: "https://aksagensetservices.co.ke"
    },
    {
      id: 3,
      slug: "royals",
      title: "royals",
      domain: ".co.ke",
      desc: "Sneaker e‑commerce, cart, auth, Stripe integration.",
      tech: ["React", "Supabase", "Stripe"],
      icon: "fas fa-shoe-prints",
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7512?w=600&h=400&fit=crop",
      link: "https://royals.co.ke"
    },
  ]

  const handleTap = (index: number, slug: string) => {
    setTouchedIndex(index)
    setTimeout(() => {
      setTouchedIndex(null)
      // Navigate to project detail page instead of opening URL
      window.location.href = `/projects/${slug}`
    }, 300)
  }

  return (
    <section id="projects" className="py-8 scroll-mt-20">
      {/* Sticky Header - White and grey pattern */}
      <div className="sticky top-[70px] z-40 -mx-4 px-4 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8">
        <div className="bg-black/80 backdrop-blur-md rounded-xl border border-white/30 py-2 md:py-3 px-4 md:px-6 flex items-center justify-between shadow-lg max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <i className="fas fa-globe text-xl md:text-2xl text-white"></i>
            <span className="font-['Orbitron'] text-sm md:text-lg font-bold text-white">
              LIVE_<span className="text-gray-400">WEBSITES</span>
            </span>
          </div>
          <div className="hidden sm:block text-xs text-gray-400">
            scroll ↓
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div 
              key={index}
              onClick={() => handleTap(index, project.slug)}
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
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  style={{
                    transform: touchedIndex === index ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-black/30"></div>
                
                {/* Tech badges */}
                <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1.5">
                  {project.tech.map((tech, i) => (
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
                    {project.title}<span className="text-gray-500">{project.domain}</span>
                  </h3>
                  <i className="fas fa-external-link-alt text-gray-400 text-[10px] md:text-xs group-hover:text-white group-hover:translate-x-1 transition-all duration-300"></i>
                </div>
                <p className="text-gray-400 text-[10px] md:text-xs line-clamp-2">
                  {project.desc}
                </p>
              </div>
              
              {/* Large translucent background icon */}
              <i 
                className={`${project.icon} absolute pointer-events-none transition-all duration-300`}
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
    </section>
  )
}