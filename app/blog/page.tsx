'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import CustomCursor from '@/components/CustomCursor'

export default function BlogPage() {
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const articles = [
    {
      id: 1,
      title: "Why Your Business Needs a Professional Website",
      excerpt: "Discover how a professional website can boost your business credibility, attract more customers, and increase sales.",
      category: "business",
      readTime: "5 min",
      date: "May 25, 2025",
      icon: "fas fa-chart-line",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      slug: "why-your-business-needs-a-website"
    },
    {
      id: 2,
      title: "Mobile App vs Website: What's Best for Your Business?",
      excerpt: "Confused about whether you need a mobile app or a website? This guide helps you choose based on your business goals.",
      category: "guide",
      readTime: "6 min",
      date: "May 20, 2025",
      icon: "fas fa-mobile-alt",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      slug: "mobile-app-vs-website-whats-best"
    },
    {
      id: 3,
      title: "How Much Does a Professional Website Cost?",
      excerpt: "A transparent breakdown of website costs for small businesses. No technical jargon—just honest pricing information.",
      category: "pricing",
      readTime: "7 min",
      date: "May 15, 2025",
      icon: "fas fa-dollar-sign",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      slug: "how-much-does-a-website-cost"
    },
    {
      id: 4,
      title: "How to Choose the Right Developer for Your Project",
      excerpt: "A practical guide to finding and hiring the best web or app developer for your business.",
      category: "advice",
      readTime: "6 min",
      date: "May 10, 2025",
      icon: "fas fa-handshake",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
      slug: "how-to-choose-right-developer"
    },
    {
      id: 5,
      title: "Why Hire a Local Developer in Nairobi?",
      excerpt: "The advantages of working with a developer who understands the Kenyan market and is available for face-to-face meetings.",
      category: "local",
      readTime: "5 min",
      date: "May 5, 2025",
      icon: "fas fa-map-marker-alt",
      image: "https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?w=600&h=400&fit=crop",
      slug: "benefits-of-local-developer"
    },
    {
      id: 6,
      title: "How Long Does It Take to Build a Website?",
      excerpt: "Realistic timelines for website and mobile app development. Know what to expect before you start.",
      category: "timeline",
      readTime: "6 min",
      date: "April 28, 2025",
      icon: "fas fa-clock",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
      slug: "how-long-to-build-website"
    }
  ]

  const categories = [
    { id: 'all', name: 'ALL', icon: 'fas fa-th-large' },
    { id: 'business', name: 'BUSINESS', icon: 'fas fa-chart-line' },
    { id: 'guide', name: 'GUIDES', icon: 'fas fa-book' },
    { id: 'pricing', name: 'PRICING', icon: 'fas fa-tag' },
    { id: 'advice', name: 'ADVICE', icon: 'fas fa-lightbulb' },
    { id: 'local', name: 'LOCAL', icon: 'fas fa-map-marker-alt' },
    { id: 'timeline', name: 'TIMELINE', icon: 'fas fa-clock' }
  ]

  const filteredArticles = articles.filter(article => {
    const matchesFilter = filter === 'all' || article.category === filter
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <>
      <CustomCursor />
      
      <div className="cyber-bg"></div>
      <div className="grid-overlay"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <Navbar />
        
        <div className="py-8">
          {/* Hero Section with Watermark */}
          <div className="relative text-center mb-8">
            {/* Thick translucent watermark */}
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
              BLOG
            </div>
            
            <div className="relative z-10">
              <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                BLOG<span className="text-gray-400">_&_INSIGHTS</span>
              </h1>
              <div className="w-16 h-0.5 bg-white/30 mx-auto"></div>
              <p className="text-gray-400 mt-3 text-sm max-w-2xl mx-auto">
                Practical advice for business owners on websites, apps, and digital growth
              </p>
            </div>
          </div>

          {/* Filter and Search - Reduced */}
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

          {/* Articles Grid - Reduced */}
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <i className="fas fa-search text-4xl text-gray-500 mb-3 block"></i>
              <p className="text-gray-400 text-sm">No articles found.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredArticles.map((article) => (
                <Link key={article.id} href={`/blog/${article.slug}`}>
                  <div className="group relative bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer h-full">
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all"></div>
                      
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full text-[10px] text-white border border-white/20">
                        {article.category.toUpperCase()}
                      </div>
                    </div>
                    
                    <div className="relative p-4">
                      <div className="flex items-center gap-1.5 mb-2">
                        <i className={`${article.icon} text-white text-sm`}></i>
                        <span className="text-gray-400 text-[10px]">{article.date}</span>
                        <span className="text-gray-500 text-[10px]">•</span>
                        <span className="text-gray-400 text-[10px]">{article.readTime}</span>
                      </div>
                      
                      <h3 className="font-['Orbitron'] font-bold text-white text-sm mb-1.5 group-hover:text-gray-300 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-400 text-xs line-clamp-2">
                        {article.excerpt}
                      </p>
                      
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-[10px] text-gray-500">Read more</span>
                        <i className="fas fa-arrow-right text-gray-400 text-xs group-hover:text-white group-hover:translate-x-1 transition-all duration-300"></i>
                      </div>
                    </div>
                    
                    <i 
                      className={`${article.icon} absolute pointer-events-none`}
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
              <i className="fas fa-newspaper text-xl text-white mb-1 block"></i>
              <div className="text-xl font-bold text-white">{articles.length}</div>
              <div className="text-[10px] text-gray-400">Articles</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
              <i className="fas fa-chart-line text-xl text-white mb-1 block"></i>
              <div className="text-xl font-bold text-white">{articles.filter(a => a.category === 'business').length}</div>
              <div className="text-[10px] text-gray-400">Business</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
              <i className="fas fa-book text-xl text-white mb-1 block"></i>
              <div className="text-xl font-bold text-white">{articles.filter(a => a.category === 'guide').length}</div>
              <div className="text-[10px] text-gray-400">Guides</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
              <i className="fas fa-tag text-xl text-white mb-1 block"></i>
              <div className="text-xl font-bold text-white">{articles.filter(a => a.category === 'pricing').length}</div>
              <div className="text-[10px] text-gray-400">Pricing</div>
            </div>
          </div>

          {/* Newsletter Signup - Reduced */}
          <div className="mt-10 text-center bg-gradient-to-r from-white/5 to-transparent rounded-xl p-5 border border-white/20">
            <i className="fas fa-envelope-open-text text-2xl text-white mb-2 block"></i>
            <h2 className="font-['Orbitron'] text-lg font-bold text-white mb-1">
              Get Business Tips
            </h2>
            <p className="text-gray-400 text-xs mb-3 max-w-md mx-auto">
              Subscribe for practical advice on growing your business online.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-all text-sm"
              />
              <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded-lg border border-white/30 transition-all font-['Orbitron'] text-xs">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-[10px] mt-2">No spam. Unsubscribe anytime.</p>
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