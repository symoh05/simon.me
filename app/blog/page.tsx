'use client'

import { useState } from 'react'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import Navbar from '@/components/Navbar'
import CustomCursor from '@/components/CustomCursor'

export default function BlogPage() {
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const articles = [
    {
      id: 1,
      title: "Building Modern Websites with Next.js 14",
      excerpt: "Learn how to leverage the power of Next.js 14 to build fast, SEO-friendly web applications with server components and streaming.",
      category: "tutorial",
      readTime: "8 min read",
      date: "May 15, 2025",
      icon: "fab fa-nextjs",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      slug: "building-modern-websites-nextjs"
    },
    {
      id: 2,
      title: "React Native vs Flutter: Which One to Choose?",
      excerpt: "A comprehensive comparison between React Native and Flutter for cross-platform mobile app development in 2025.",
      category: "comparison",
      readTime: "10 min read",
      date: "May 10, 2025",
      icon: "fab fa-react",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      slug: "react-native-vs-flutter"
    },
    {
      id: 3,
      title: "Mastering Tailwind CSS: Tips and Tricks",
      excerpt: "Advanced Tailwind CSS techniques to streamline your workflow and build beautiful interfaces faster.",
      category: "tutorial",
      readTime: "6 min read",
      date: "May 5, 2025",
      icon: "fab fa-css3-alt",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&h=400&fit=crop",
      slug: "mastering-tailwind-css"
    },
    {
      id: 4,
      title: "How I Built My First Mobile App",
      excerpt: "A personal journey of building and launching a cross-platform mobile app from scratch using React Native and Expo.",
      category: "case-study",
      readTime: "12 min read",
      date: "April 28, 2025",
      icon: "fas fa-mobile-alt",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      slug: "first-mobile-app-journey"
    },
    {
      id: 5,
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends in web development including AI integration, edge computing, and WebAssembly.",
      category: "insights",
      readTime: "7 min read",
      date: "April 20, 2025",
      icon: "fas fa-chart-line",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      slug: "future-of-web-development"
    },
    {
      id: 6,
      title: "Optimizing Database Queries in PostgreSQL",
      excerpt: "Best practices and techniques to optimize PostgreSQL queries for better performance in production.",
      category: "tutorial",
      readTime: "9 min read",
      date: "April 15, 2025",
      icon: "fas fa-database",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop",
      slug: "optimizing-postgresql-queries"
    }
  ]

  const categories = [
    { id: 'all', name: 'ALL', icon: 'fas fa-th-large' },
    { id: 'tutorial', name: 'TUTORIALS', icon: 'fas fa-graduation-cap' },
    { id: 'case-study', name: 'CASE STUDIES', icon: 'fas fa-briefcase' },
    { id: 'insights', name: 'INSIGHTS', icon: 'fas fa-lightbulb' },
    { id: 'comparison', name: 'COMPARISONS', icon: 'fas fa-balance-scale' }
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
        
        <div className="min-h-screen py-12">
          {/* Hero Section */}
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center mb-12">
              <h1 className="font-['Orbitron'] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                BLOG_<span className="text-gray-400">&_INSIGHTS</span>
              </h1>
              <div className="w-20 h-1 bg-white/30 mx-auto"></div>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                Thoughts, tutorials, and insights on web development and technology
              </p>
            </div>
          </AnimatedSection>

          {/* Filter and Search */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
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

              <div className="relative">
                <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
                <input
                  type="text"
                  placeholder="Search articles..."
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

          {/* Articles Grid */}
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <i className="fas fa-search text-6xl text-gray-500 mb-4 block"></i>
              <p className="text-gray-400">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <AnimatedSection key={article.id} direction="up" delay={index * 0.1}>
                  <Link href={`/blog/${article.slug}`}>
                    <div className="group relative bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer h-full">
                      {/* Image Section */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all"></div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white border border-white/20">
                          {article.category.toUpperCase()}
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="relative p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <i className={`${article.icon} text-white text-lg`}></i>
                          <span className="text-gray-400 text-xs">{article.date}</span>
                          <span className="text-gray-500 text-xs">•</span>
                          <span className="text-gray-400 text-xs">{article.readTime}</span>
                        </div>
                        
                        <h3 className="font-['Orbitron'] font-bold text-white text-lg mb-2 group-hover:text-gray-300 transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm line-clamp-3">
                          {article.excerpt}
                        </p>
                        
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-xs text-gray-500">Read more</span>
                          <i className="fas fa-arrow-right text-gray-400 text-sm group-hover:text-white group-hover:translate-x-1 transition-all duration-300"></i>
                        </div>
                      </div>
                      
                      {/* Translucent Background Icon */}
                      <i 
                        className={`${article.icon} absolute pointer-events-none transition-all duration-300`}
                        style={{
                          position: 'absolute',
                          bottom: '-25px',
                          right: '-25px',
                          fontSize: '6rem',
                          opacity: 0.06,
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
                <i className="fas fa-newspaper text-2xl text-white mb-2 block"></i>
                <div className="text-2xl font-bold text-white">{articles.length}</div>
                <div className="text-xs text-gray-400">Total Articles</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                <i className="fas fa-graduation-cap text-2xl text-white mb-2 block"></i>
                <div className="text-2xl font-bold text-white">{articles.filter(a => a.category === 'tutorial').length}</div>
                <div className="text-xs text-gray-400">Tutorials</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                <i className="fas fa-briefcase text-2xl text-white mb-2 block"></i>
                <div className="text-2xl font-bold text-white">{articles.filter(a => a.category === 'case-study').length}</div>
                <div className="text-xs text-gray-400">Case Studies</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                <i className="fas fa-lightbulb text-2xl text-white mb-2 block"></i>
                <div className="text-2xl font-bold text-white">{articles.filter(a => a.category === 'insights').length}</div>
                <div className="text-xs text-gray-400">Insights</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Newsletter Signup */}
          <AnimatedSection direction="up" delay={0.5}>
            <div className="mt-16 text-center bg-gradient-to-r from-white/5 to-transparent rounded-2xl p-8 border border-white/20">
              <i className="fas fa-envelope-open-text text-4xl text-white mb-4 block"></i>
              <h2 className="font-['Orbitron'] text-2xl font-bold text-white mb-3">
                Never Miss an Article
              </h2>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                Subscribe to get notified when I publish new tutorials and insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-all"
                />
                <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg border border-white/30 transition-all font-['Orbitron'] text-sm">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-xs mt-4">No spam. Unsubscribe anytime.</p>
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