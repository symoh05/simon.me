'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import CustomCursor from '@/components/CustomCursor'

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const projects = [
    {
      id: 1,
      title: "Telefix.co.ke",
      category: "web",
      type: "Website",
      desc: "Solar & power services – booking, catalog, service management.",
      tech: ["PHP", "MySQL", "Bootstrap"],
      icon: "fas fa-solar-panel",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop",
      link: "/projects/telefix",
      year: "2024"
    },
    {
      id: 2,
      title: "aksagensetservices.co.ke",
      category: "web",
      type: "Website",
      desc: "Generator services & maintenance dashboard, client portal.",
      tech: ["Next.js", "Node.js", "PostgreSQL"],
      icon: "fas fa-tools",
      image: "https://images.unsplash.com/photo-1581092335871-4d4a5b3c2f9b?w=600&h=400&fit=crop",
      link: "/projects/aksagen",
      year: "2024"
    },
    {
      id: 3,
      title: "royals.co.ke",
      category: "web",
      type: "Website",
      desc: "Sneaker e‑commerce, cart, auth, Stripe integration.",
      tech: ["React", "Supabase", "Stripe"],
      icon: "fas fa-shoe-prints",
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7512?w=600&h=400&fit=crop",
      link: "/projects/royals",
      year: "2024"
    },
    {
      id: 4,
      title: "VerseFlow Bible",
      category: "mobile",
      type: "Mobile App",
      desc: "Cross-platform Bible app with verses, offline support.",
      tech: ["React Native", "Expo", "SQLite"],
      icon: "fas fa-bible",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
      link: "/projects/verseflow",
      year: "2024"
    },
    {
      id: 5,
      title: "InvoicePro",
      category: "mobile",
      type: "Mobile App",
      desc: "Invoicing app – PDF invoices, payment tracking.",
      tech: ["React Native", "Node.js", "MongoDB"],
      icon: "fas fa-file-invoice-dollar",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      link: "/projects/invoicepro",
      year: "2024"
    },
    {
      id: 6,
      title: "PesaTrack",
      category: "mobile",
      type: "Mobile App",
      desc: "Finance tracker – budget goals, analytics.",
      tech: ["Next.js", "IndexedDB", "Chart.js"],
      icon: "fas fa-chart-line",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      link: "/projects/pesatrack",
      year: "2024"
    }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.category === filter
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const categories = [
    { id: 'all', name: 'ALL', icon: 'fas fa-th-large' },
    { id: 'web', name: 'WEBSITES', icon: 'fas fa-globe' },
    { id: 'mobile', name: 'MOBILE APPS', icon: 'fas fa-mobile-alt' }
  ]

  return (
    <>
      <CustomCursor />
      
      <div className="cyber-bg"></div>
      <div className="grid-overlay"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <Navbar />
        
        <div className="py-8">
          {/* Hero Section with Watermark - Slightly reduced size */}
          <div className="relative text-center mb-8">
            {/* Thick translucent watermark - Slightly reduced */}
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
              style={{
                fontSize: 'clamp(60px, 12vw, 160px)',
                fontWeight: '900',
                color: 'rgba(255, 255, 255, 0.07)',
                letterSpacing: 'clamp(12px, 3vw, 18px)',
                fontFamily: "'Orbitron', monospace",
                whiteSpace: 'nowrap',
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            >
              WORK
            </div>
            
            <div className="relative z-10">
              <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                MY_<span className="text-gray-400">WORK</span>
              </h1>
              <div className="w-16 h-0.5 bg-white/30 mx-auto"></div>
              <p className="text-gray-400 mt-3 text-sm max-w-2xl mx-auto">
                Explore my portfolio of web and mobile projects
              </p>
            </div>
          </div>

          {/* Filter and Search Bar - Reduced */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-3 py-1 rounded-full font-['Orbitron'] text-xs transition-all duration-300 flex items-center gap-1.5 ${
                    filter === cat.id
                      ? 'bg-white text-black'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <i className={cat.icon}></i>
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="relative">
              <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-full py-1.5 pl-8 pr-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-all text-sm w-full md:w-48"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-all"
                >
                  <i className="fas fa-times text-xs"></i>
                </button>
              )}
            </div>
          </div>

          {/* Projects Grid - Reduced */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <i className="fas fa-search text-4xl text-gray-500 mb-3 block"></i>
              <p className="text-gray-400 text-sm">No projects found.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProjects.map((project) => (
                <Link key={project.id} href={project.link}>
                  <div className="group relative bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all"></div>
                      
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full text-[10px] text-white border border-white/20">
                        {project.type}
                      </div>
                    </div>
                    
                    <div className="relative p-4">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-1.5">
                          <i className={`${project.icon} text-white text-base`}></i>
                          <h3 className="font-['Orbitron'] font-bold text-white text-sm">
                            {project.title}
                          </h3>
                        </div>
                        <i className="fas fa-arrow-right text-gray-400 text-xs group-hover:text-white group-hover:translate-x-1 transition-all duration-300"></i>
                      </div>
                      <p className="text-gray-400 text-xs mb-2 line-clamp-2">
                        {project.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <span key={i} className="bg-white/10 px-1.5 py-0.5 rounded-full text-[10px] text-gray-300">
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="bg-white/10 px-1.5 py-0.5 rounded-full text-[10px] text-gray-300">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <i 
                      className={`${project.icon} absolute pointer-events-none`}
                      style={{
                        position: 'absolute',
                        bottom: '-20px',
                        right: '-20px',
                        fontSize: '5rem',
                        opacity: 0.06,
                        transform: 'rotate(-15deg)',
                        zIndex: 0
                      }}
                    ></i>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Stats Section - Reduced */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
              <i className="fas fa-code text-xl text-white mb-1 block"></i>
              <div className="text-xl font-bold text-white">{projects.length}</div>
              <div className="text-[10px] text-gray-400">Total Projects</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
              <i className="fas fa-globe text-xl text-white mb-1 block"></i>
              <div className="text-xl font-bold text-white">{projects.filter(p => p.category === 'web').length}</div>
              <div className="text-[10px] text-gray-400">Websites</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
              <i className="fas fa-mobile-alt text-xl text-white mb-1 block"></i>
              <div className="text-xl font-bold text-white">{projects.filter(p => p.category === 'mobile').length}</div>
              <div className="text-[10px] text-gray-400">Mobile Apps</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
              <i className="fas fa-calendar text-xl text-white mb-1 block"></i>
              <div className="text-xl font-bold text-white">2024-25</div>
              <div className="text-[10px] text-gray-400">Active</div>
            </div>
          </div>

          {/* Contact CTA - Reduced */}
          <div className="mt-10 text-center bg-gradient-to-r from-white/5 to-transparent rounded-xl p-5 border border-white/20">
            <i className="fas fa-rocket text-2xl text-white mb-2 block"></i>
            <h2 className="font-['Orbitron'] text-lg font-bold text-white mb-1">
              Have a Project in Mind?
            </h2>
            <p className="text-gray-400 text-xs mb-3 max-w-md mx-auto">
              Let's bring your ideas to life. Available for freelance work.
            </p>
            <Link href="/contact">
              <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded-lg border border-white/30 transition-all text-sm">
                Let's Talk →
              </button>
            </Link>
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