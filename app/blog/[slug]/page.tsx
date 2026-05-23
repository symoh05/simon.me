'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import CustomCursor from '@/components/CustomCursor'

export default function BlogPostPage() {
  const { slug } = useParams()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const articles = [
    {
      id: 1,
      slug: "building-modern-websites-nextjs",
      title: "Building Modern Websites with Next.js 14",
      excerpt: "Learn how to leverage the power of Next.js 14 to build fast, SEO-friendly web applications.",
      content: `
        <p>Next.js 14 has revolutionized the way we build web applications. With its server components, streaming, and improved performance, it's never been easier to create fast, SEO-friendly websites.</p>
        
        <h2>Why Next.js?</h2>
        <p>Next.js provides a fantastic developer experience with features like:</p>
        <ul>
          <li>Server-side rendering (SSR) for better SEO</li>
          <li>Static site generation (SSG) for blazing fast pages</li>
          <li>API routes for backend functionality</li>
          <li>Built-in image optimization</li>
        </ul>
        
        <h2>Getting Started</h2>
        <p>To start a new Next.js project, simply run:</p>
        <pre><code>npx create-next-app@latest my-app</code></pre>
        
        <p>This sets up everything you need with TypeScript and Tailwind CSS support.</p>
      `,
      category: "tutorial",
      readTime: "8 min",
      date: "May 15, 2025",
      author: "Simon Ngugi",
      authorRole: "Full-Stack Developer",
      icon: "fab fa-nextjs",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop"
    },
    {
      id: 2,
      slug: "react-native-vs-flutter",
      title: "React Native vs Flutter: Which One to Choose?",
      excerpt: "A comprehensive comparison between React Native and Flutter for cross-platform mobile app development.",
      content: `
        <p>Choosing between React Native and Flutter can be challenging. Both are excellent frameworks for cross-platform mobile development, but they have different strengths.</p>
        
        <h2>React Native</h2>
        <p>React Native uses JavaScript and React, making it perfect for web developers transitioning to mobile. It has a large ecosystem and mature community.</p>
        
        <h2>Flutter</h2>
        <p>Flutter uses Dart and offers beautiful pre-built widgets. It provides excellent performance and a consistent UI across platforms.</p>
        
        <h2>My Verdict</h2>
        <p>For JavaScript developers, React Native is the natural choice. For those seeking pixel-perfect designs, Flutter might be better.</p>
      `,
      category: "comparison",
      readTime: "10 min",
      date: "May 10, 2025",
      author: "Simon Ngugi",
      authorRole: "Full-Stack Developer",
      icon: "fab fa-react",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop"
    },
    {
      id: 3,
      slug: "mastering-tailwind-css",
      title: "Mastering Tailwind CSS: Tips and Tricks",
      excerpt: "Advanced Tailwind CSS techniques to streamline your workflow and build beautiful interfaces faster.",
      content: `
        <p>Tailwind CSS has changed how we write styles. Instead of writing custom CSS, you compose utility classes to build unique designs.</p>
        
        <h2>Pro Tips</h2>
        <ul>
          <li>Use the group class for parent-child hover effects</li>
          <li>Leverage arbitrary values for custom spacing</li>
          <li>Create reusable components with @apply</li>
        </ul>
        
        <h2>Performance Optimization</h2>
        <p>Tailwind automatically purges unused styles in production, ensuring your CSS is as small as possible.</p>
      `,
      category: "tutorial",
      readTime: "6 min",
      date: "May 5, 2025",
      author: "Simon Ngugi",
      authorRole: "Full-Stack Developer",
      icon: "fab fa-css3-alt",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=1200&h=600&fit=crop"
    },
    {
      id: 4,
      slug: "first-mobile-app-journey",
      title: "How I Built My First Mobile App",
      excerpt: "A personal journey of building and launching a cross-platform mobile app from scratch.",
      content: `
        <p>Building my first mobile app was a challenging but rewarding experience. Here's what I learned along the way.</p>
        
        <h2>The Idea</h2>
        <p>I wanted to create a Bible app that works offline and provides daily verses. The goal was to make scripture accessible anytime, anywhere.</p>
        
        <h2>Development Process</h2>
        <p>Using React Native and Expo, I was able to build for both iOS and Android simultaneously. The development took about 3 months.</p>
        
        <h2>Key Takeaways</h2>
        <ul>
          <li>Plan your data structure early</li>
          <li>Test on real devices frequently</li>
          <li>Don't underestimate app store submission time</li>
        </ul>
      `,
      category: "case-study",
      readTime: "12 min",
      date: "April 28, 2025",
      author: "Simon Ngugi",
      authorRole: "Full-Stack Developer",
      icon: "fas fa-mobile-alt",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop"
    },
    {
      id: 5,
      slug: "future-of-web-development",
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends in web development including AI integration and edge computing.",
      content: `
        <p>Web development is evolving rapidly. Here are the trends I believe will shape the future.</p>
        
        <h2>AI Integration</h2>
        <p>AI tools are becoming essential for development, from code generation to testing and deployment.</p>
        
        <h2>Edge Computing</h2>
        <p>Edge computing brings computation closer to users, reducing latency and improving performance.</p>
        
        <h2>WebAssembly</h2>
        <p>WASM allows running high-performance code in the browser, opening new possibilities for web applications.</p>
      `,
      category: "insights",
      readTime: "7 min",
      date: "April 20, 2025",
      author: "Simon Ngugi",
      authorRole: "Full-Stack Developer",
      icon: "fas fa-chart-line",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop"
    },
    {
      id: 6,
      slug: "optimizing-postgresql-queries",
      title: "Optimizing Database Queries in PostgreSQL",
      excerpt: "Best practices to optimize PostgreSQL queries for better performance in production.",
      content: `
        <p>Database performance is critical for application speed. Here are my top tips for PostgreSQL optimization.</p>
        
        <h2>Use Indexes Wisely</h2>
        <p>Indexes speed up read operations but slow down writes. Add indexes on columns used in WHERE clauses.</p>
        
        <h2>Avoid SELECT *</h2>
        <p>Only request the columns you need. This reduces data transfer and improves query performance.</p>
        
        <h2>Analyze Query Plans</h2>
        <p>Use EXPLAIN ANALYZE to understand how your queries execute and identify bottlenecks.</p>
      `,
      category: "tutorial",
      readTime: "9 min",
      date: "April 15, 2025",
      author: "Simon Ngugi",
      authorRole: "Full-Stack Developer",
      icon: "fas fa-database",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&h=600&fit=crop"
    }
  ]

  useEffect(() => {
    if (slug) {
      const foundPost = articles.find(article => article.slug === slug)
      setPost(foundPost || null)
      setLoading(false)
    }
  }, [slug])

  if (loading) {
    return (
      <>
        <CustomCursor />
        <div className="cyber-bg"></div>
        <div className="grid-overlay"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <Navbar />
          <div className="min-h-screen flex items-center justify-center py-20">
            <div className="text-center">
              <i className="fas fa-spinner fa-spin text-3xl text-white"></i>
              <p className="text-gray-400 mt-4">Loading article...</p>
            </div>
          </div>
        </div>
      </>
    )
  }

  if (!post) {
    return (
      <>
        <CustomCursor />
        <div className="cyber-bg"></div>
        <div className="grid-overlay"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <Navbar />
          <div className="min-h-screen flex items-center justify-center py-20">
            <div className="text-center">
              <i className="fas fa-search text-5xl text-gray-500 mb-4 block"></i>
              <h1 className="text-2xl font-bold text-white mb-2">Article Not Found</h1>
              <p className="text-gray-400 mb-6">The article you're looking for doesn't exist.</p>
              <Link href="/blog">
                <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg border border-white/30 transition-all">
                  Back to Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <CustomCursor />
      
      <div className="cyber-bg"></div>
      <div className="grid-overlay"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <Navbar />
        
        <div className="py-8">
          {/* Hero Image - Dark gradient visible on all screens */}
          <div className="relative rounded-xl overflow-hidden mb-8 h-64 md:h-96">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlay - visible on mobile and desktop */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white border border-white/20">
              {post.category.toUpperCase()}
            </div>
          </div>
          
          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            
            <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            
            {/* Author Info */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/20">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <i className={`${post.icon} text-white text-lg`}></i>
              </div>
              <div>
                <p className="text-white font-medium text-sm">{post.author}</p>
                <p className="text-gray-400 text-xs">{post.authorRole}</p>
              </div>
            </div>
          </div>
          
          {/* Article Content */}
          <div 
            className="prose prose-invert prose-lg max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Back to Blog Button */}
          <div className="text-center pt-8 border-t border-white/20">
            <Link href="/blog">
              <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg border border-white/30 transition-all inline-flex items-center gap-2">
                <i className="fas fa-arrow-left text-sm"></i>
                Back to Blog
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