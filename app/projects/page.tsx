'use client'

import { useState } from 'react'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
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
      desc: "Solar & power services company – booking, responsive catalog, service management.",
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
      desc: "Generator services & maintenance dashboard, client portal & industrial solutions.",
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
      desc: "Sneaker e‑commerce, cart, auth, and PWA ready with Stripe integration.",
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
      desc: "Cross-platform Bible app with daily verses, offline support, and study tools.",
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
      desc: "Professional invoicing app for freelancers & SMEs – generate PDF invoices, track payments.",
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
      desc: "Personal finance & expense tracker with budget goals, analytics, and export features.",
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
      
      {/* Cyber Background */}
      <div className="cyber-bg"></div>
      <div className="grid-overlay"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <Navbar />
        
        <div className="min-h-screen py-12">
          {/* Hero Section */}
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center mb-12">
              <h1 className="font-['Orbitron'] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                MY_<span className="text-gray-400">WORK</span>
              </h1>
              <div className="w-20 h-1 bg-white/30 mx-auto"></div>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                Explore my portfolio of web and mobile projects
              </p>
            </div>
          </AnimatedSection>

          {/* Filter and Search Bar */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
              {/* Filter Buttons */}
              <div className="flex gap-3 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setFilter(cat.id)}
                    className={`px-5 py-2 rounded-full font-['Orbitron'] text-sm transition-all duration-300 flex items-center gap-2 ${
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

              {/* Search Bar */}
              <div className="relative">
                <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-full py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-all w-full md:w-64"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-all"
                  >
                    <i className="fas fa-times text-sm"></i>
                  </button>
                )}
              </div>
            </div>
          </AnimatedSection>

          {/* Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <i className="fas fa-search text-6xl text-gray-500 mb-4 block"></i>
              <p className="text-gray-400">No projects found matching your search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <AnimatedSection key={project.id} direction="up" delay={index * 0.1}>
                  <Link href={project.link}>
                    <div className="group relative bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer h-full">
                      {/* Image Section */}
                      <div className="relative h-56 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all"></div>
                        
                        {/* Project Type Badge */}
                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white border border-white/20">
                          {project.type}
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="relative p-5">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <i className={`${project.icon} text-white text-lg`}></i>
                            <h3 className="font-['Orbitron'] font-bold text-white text-base">
                              {project.title}
                            </h3>
                          </div>
                          <i className="fas fa-arrow-right text-gray-400 text-sm group-hover:text-white group-hover:translate-x-1 transition-all duration-300"></i>
                        </div>
                        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                          {project.desc}
                        </p>
                        
                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {project.tech.slice(0, 3).map((tech, i) => (
                            <span key={i} className="bg-white/10 px-2 py-1 rounded-full text-xs text-gray-300">
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="bg-white/10 px-2 py-1 rounded-full text-xs text-gray-300">
                              +{project.tech.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Translucent Background Icon */}
                      <i 
                        className={`${project.icon} absolute pointer-events-none transition-all duration-300`}
                        style={{
                          position: 'absolute',
                          bottom: '-25px',
                          right: '-25px',
                          fontSize: '6rem',
                          opacity: 0.08,
                          transform: 'rotate(-15deg) scale(1)',
                          zIndex: 0
                        }}
                      ></i>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}

          {/* Stats Section */}
          <AnimatedSection direction="up" delay={0.4}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                <i className="fas fa-code text-2xl text-white mb-2 block"></i>
                <div className="text-2xl font-bold text-white">{projects.length}</div>
                <div className="text-xs text-gray-400">Total Projects</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                <i className="fas fa-globe text-2xl text-white mb-2 block"></i>
                <div className="text-2xl font-bold text-white">{projects.filter(p => p.category === 'web').length}</div>
                <div className="text-xs text-gray-400">Websites</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                <i className="fas fa-mobile-alt text-2xl text-white mb-2 block"></i>
                <div className="text-2xl font-bold text-white">{projects.filter(p => p.category === 'mobile').length}</div>
                <div className="text-xs text-gray-400">Mobile Apps</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                <i className="fas fa-calendar text-2xl text-white mb-2 block"></i>
                <div className="text-2xl font-bold text-white">2024-25</div>
                <div className="text-xs text-gray-400">Active Years</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact CTA */}
          <AnimatedSection direction="up" delay={0.5}>
            <div className="mt-16 text-center bg-gradient-to-r from-white/5 to-transparent rounded-2xl p-8 border border-white/20">
              <i className="fas fa-rocket text-4xl text-white mb-4 block"></i>
              <h2 className="font-['Orbitron'] text-2xl font-bold text-white mb-3">
                Have a Project in Mind?
              </h2>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                Let's bring your ideas to life. I'm available for freelance work.
              </p>
              <Link href="/contact">
                <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg border border-white/30 transition-all">
                  Let's Talk →
                </button>
              </Link>
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