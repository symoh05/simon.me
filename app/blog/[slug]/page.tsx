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
      slug: "why-your-business-needs-a-website",
      title: "Why Your Business Needs a Professional Website",
      excerpt: "Discover how a professional website can boost your business credibility, attract more customers, and increase sales.",
      content: `
        <p>In today's digital world, customers expect businesses to have an online presence. A professional website is no longer optional—it's essential.</p>
        
        <h2>Builds Trust and Credibility</h2>
        <p>Customers trust businesses with professional websites. A well-designed site shows you're legitimate and serious about your business.</p>
        
        <h2>Attracts More Customers</h2>
        <p>People search online for products and services every day. Without a website, potential customers may never find you.</p>
        
        <h2>Works 24/7</h2>
        <p>Unlike a physical store, your website works around the clock. Customers can learn about your business anytime, even at 3 AM.</p>
        
        <h2>Showcases Your Work</h2>
        <p>A portfolio or gallery lets potential clients see what you can do. This builds confidence before they even contact you.</p>
        
        <h2>Conclusion</h2>
        <p>Investing in a professional website is one of the best decisions for your business. Contact me to get started today!</p>
      `,
      category: "BUSINESS",
      readTime: "5 min",
      date: "May 25, 2025",
      author: "Simon Ngugi",
      authorRole: "Web & Mobile Developer",
      icon: "fas fa-chart-line",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
    },
    {
      id: 2,
      slug: "mobile-app-vs-website-whats-best",
      title: "Mobile App vs Website: What's Best for Your Business?",
      excerpt: "Confused about whether you need a mobile app or a website? This guide helps you choose based on your business goals.",
      content: `
        <p>Many business owners ask: "Should I get a mobile app or a website?" The answer depends on your specific needs.</p>
        
        <h2>Websites: Your Digital Storefront</h2>
        <p>Every business needs a website. It's like having a shop window that's open 24/7. Websites work on all devices and are easier to maintain.</p>
        
        <h2>Mobile Apps: For Engaged Customers</h2>
        <p>Apps are great for businesses with loyal customers who interact frequently. Examples include loyalty programs, booking systems, and online ordering.</p>
        
        <h2>What Most Businesses Need</h2>
        <p>Start with a professional website. Once you have regular customers, consider adding a mobile app for special features.</p>
        
        <h2>Let's Discuss Your Needs</h2>
        <p>Not sure which is right for you? Contact me for a free consultation.</p>
      `,
      category: "GUIDE",
      readTime: "6 min",
      date: "May 20, 2025",
      author: "Simon Ngugi",
      authorRole: "Web & Mobile Developer",
      icon: "fas fa-mobile-alt",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop"
    },
    {
      id: 3,
      slug: "how-much-does-a-website-cost",
      title: "How Much Does a Professional Website Cost?",
      excerpt: "A transparent breakdown of website costs for small businesses. No technical jargon—just honest pricing information.",
      content: `
        <p>One of the first questions business owners ask is: "How much will a website cost me?" Here's an honest breakdown.</p>
        
        <h2>What Affects Website Cost?</h2>
        <ul>
          <li><strong>Number of pages:</strong> A simple 5-page site costs less than a 20-page site.</li>
          <li><strong>Features needed:</strong> Contact forms, galleries, and booking systems add to the price.</li>
          <li><strong>E-commerce:</strong> Online stores require more work and cost more.</li>
          <li><strong>Custom design:</strong> Unique designs cost more than templates.</li>
        </ul>
        
        <h2>Typical Price Ranges</h2>
        <p>Basic website (5-10 pages): $500 - $1,500<br/>
        Business website with features: $1,500 - $3,500<br/>
        E-commerce online store: $2,500 - $5,000+</p>
        
        <h2>Ongoing Costs</h2>
        <p>Domain registration ($15/year), hosting ($100-300/year), and maintenance ($50-150/month).</p>
        
        <h2>Get a Custom Quote</h2>
        <p>Every business is unique. Contact me for a free, no-obligation quote tailored to your needs.</p>
      `,
      category: "PRICING",
      readTime: "7 min",
      date: "May 15, 2025",
      author: "Simon Ngugi",
      authorRole: "Web & Mobile Developer",
      icon: "fas fa-dollar-sign",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop"
    },
    {
      id: 4,
      slug: "how-to-choose-right-developer",
      title: "How to Choose the Right Developer for Your Project",
      excerpt: "A practical guide to finding and hiring the best web or app developer for your business.",
      content: `
        <p>Hiring a developer can feel overwhelming. Here's what to look for and what questions to ask.</p>
        
        <h2>Portfolio Matters</h2>
        <p>Look at their previous work. Does it look professional? Do the websites work well on phones? This shows their quality.</p>
        
        <h2>Communication is Key</h2>
        <p>Choose someone who explains things clearly without technical jargon. You should understand what you're paying for.</p>
        
        <h2>Questions to Ask</h2>
        <ul>
          <li>How many similar projects have you completed?</li>
          <li>Will my website work on phones and tablets?</li>
          <li>Do you provide ongoing support after launch?</li>
          <li>Can I see examples of your work?</li>
        </ul>
        
        <h2>Red Flags to Avoid</h2>
        <p>Very low prices (you get what you pay for), no portfolio to show, or promises that sound too good to be true.</p>
        
        <h2>Why Choose Me?</h2>
        <p>I've helped numerous businesses in Kenya and beyond build their online presence. Contact me to see my portfolio.</p>
      `,
      category: "ADVICE",
      readTime: "6 min",
      date: "May 10, 2025",
      author: "Simon Ngugi",
      authorRole: "Web & Mobile Developer",
      icon: "fas fa-handshake",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=600&fit=crop"
    },
    {
      id: 5,
      slug: "benefits-of-local-developer",
      title: "Why Hire a Local Developer in Nairobi?",
      excerpt: "The advantages of working with a developer who understands the Kenyan market and is available for face-to-face meetings.",
      content: `
        <p>As a Nairobi-based developer, I understand the unique needs of Kenyan businesses. Here's why local matters.</p>
        
        <h2>Understanding Local Payment Methods</h2>
        <p>I integrate M-PESA, local bank transfers, and payment methods that Kenyan customers trust and use daily.</p>
        
        <h2>Face-to-Face Meetings</h2>
        <p>Sometimes you need to sit down and explain your vision in person. Being local makes this possible.</p>
        
        <h2>Same Time Zone Support</h2>
        <p>When you need help, I'm available during your business hours—not halfway across the world.</p>
        
        <h2>Knowledge of Local Market</h2>
        <p>I understand what Kenyan customers expect from websites and apps, from design preferences to user behavior.</p>
        
        <h2>Support Local Economy</h2>
        <p>By hiring local, you're investing in Kenya's tech ecosystem and creating opportunities for local talent.</p>
      `,
      category: "LOCAL",
      readTime: "5 min",
      date: "May 5, 2025",
      author: "Simon Ngugi",
      authorRole: "Web & Mobile Developer",
      icon: "fas fa-map-marker-alt",
      image: "https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?w=1200&h=600&fit=crop"
    },
    {
      id: 6,
      slug: "how-long-to-build-website",
      title: "How Long Does It Take to Build a Website?",
      excerpt: "Realistic timelines for website and mobile app development. Know what to expect before you start.",
      content: `
        <p>Understanding project timelines helps you plan your business launch or marketing campaigns effectively.</p>
        
        <h2>Simple Business Website</h2>
        <p>A professional 5-10 page website typically takes 2-4 weeks from start to finish, including design, content setup, and testing.</p>
        
        <h2>Website with Special Features</h2>
        <p>If you need booking systems, payment integration, or custom functionality, expect 4-6 weeks.</p>
        
        <h2>E-commerce Online Store</h2>
        <p>An online store with products, cart, and payment takes 6-8 weeks to do properly.</p>
        
        <h2>Mobile Apps</h2>
        <p>A professional mobile app for both iPhone and Android typically takes 8-12 weeks.</p>
        
        <h2>What Affects Timeline?</h2>
        <p>How quickly you provide content (text, photos), how many revisions you need, and how complex your requirements are.</p>
        
        <h2>Ready to Start?</h2>
        <p>Contact me today for a timeline estimate based on your specific project needs.</p>
      `,
      category: "TIMELINE",
      readTime: "6 min",
      date: "April 28, 2025",
      author: "Simon Ngugi",
      authorRole: "Web & Mobile Developer",
      icon: "fas fa-clock",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=600&fit=crop"
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
              {post.category}
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
          
          {/* CTA Section at bottom of article */}
          <div className="mt-8 p-6 bg-gradient-to-r from-white/10 to-transparent rounded-xl border border-white/20 text-center">
            <i className="fas fa-envelope text-2xl text-white mb-2 block"></i>
            <h3 className="font-['Orbitron'] text-lg font-bold text-white mb-2">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Let's discuss your website or app needs. Get a free quote today.
            </p>
            <Link href="/contact">
              <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-lg border border-white/30 transition-all text-sm">
                Contact Me →
              </button>
            </Link>
          </div>
          
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