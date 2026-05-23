'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import CustomCursor from '@/components/CustomCursor'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)

  const projects = [
    {
      id: 1,
      slug: "telefix",
      title: "Telefix.co.ke",
      category: "web",
      type: "Website",
      desc: "Solar & power services company – booking, responsive catalog, service management.",
      fullDescription: `
        <p>Telefix is a comprehensive solar and power services company based in Kenya. They needed a modern website that showcases their services, allows customers to book appointments, and manages service requests efficiently.</p>
        
        <h2>The Challenge</h2>
        <p>The client needed a platform that could handle service bookings, display their catalog of solar products, and provide an easy way for customers to request quotes. The website had to be responsive, fast, and easy to maintain.</p>
        
        <h2>The Solution</h2>
        <p>I built a custom PHP website with MySQL database backend. The site features a responsive Bootstrap frontend, online booking system, service catalog, and an admin dashboard for managing requests.</p>
        
        <h2>Key Features</h2>
        <ul>
          <li>Online booking system</li>
          <li>Service catalog with pricing</li>
          <li>Customer quote requests</li>
          <li>Admin dashboard</li>
          <li>Mobile-responsive design</li>
          <li>Contact form with email notifications</li>
        </ul>
        
        <h2>Results</h2>
        <p>The website has helped Telefix increase their online presence and streamline their booking process. Customers can now easily find services and request quotes online.</p>
      `,
      tech: ["PHP", "MySQL", "Bootstrap"],
      icon: "fas fa-solar-panel",
      mainImage: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=500&fit=crop"
      ],
      link: "https://telefix.co.ke",
      year: "2024"
    },
    {
      id: 2,
      slug: "aksagen",
      title: "aksagensetservices.co.ke",
      category: "web",
      type: "Website",
      desc: "Generator services & maintenance dashboard, client portal & industrial solutions.",
      fullDescription: `
        <p>Aksagen Generator Services provides industrial generator maintenance and repair services across Kenya.</p>
        
        <h2>The Challenge</h2>
        <p>The client needed a platform to manage their generator service requests, track maintenance schedules, and provide clients with a portal to view service history.</p>
        
        <h2>The Solution</h2>
        <p>I developed a Next.js application with Node.js backend and PostgreSQL database. The system includes a client portal, service dashboard, and automated scheduling.</p>
        
        <h2>Key Features</h2>
        <ul>
          <li>Client portal for service tracking</li>
          <li>Maintenance scheduling system</li>
          <li>Service history records</li>
          <li>Automated reminders</li>
          <li>Industrial solutions catalog</li>
        </ul>
        
        <h2>Results</h2>
        <p>The platform has streamlined their operations and improved client communication. Service requests are now handled efficiently.</p>
      `,
      tech: ["Next.js", "Node.js", "PostgreSQL"],
      icon: "fas fa-tools",
      mainImage: "https://images.unsplash.com/photo-1581092335871-4d4a5b3c2f9b?w=1200&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1581092335871-4d4a5b3c2f9b?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&h=500&fit=crop"
      ],
      link: "https://aksagensetservices.co.ke",
      year: "2024"
    },
    {
      id: 3,
      slug: "royals",
      title: "royals.co.ke",
      category: "web",
      type: "Website",
      desc: "Sneaker e‑commerce, cart, auth, and PWA ready with Stripe integration.",
      fullDescription: `
        <p>Royals is an e-commerce platform specializing in premium sneakers and streetwear.</p>
        
        <h2>The Challenge</h2>
        <p>The client needed a fully functional e-commerce website with cart functionality, user authentication, and payment processing.</p>
        
        <h2>The Solution</h2>
        <p>I built a React-based e-commerce platform with Supabase backend and Stripe payment integration. The site is PWA-ready for mobile users.</p>
        
        <h2>Key Features</h2>
        <ul>
          <li>Shopping cart system</li>
          <li>User authentication</li>
          <li>Stripe payment integration</li>
          <li>Product catalog</li>
          <li>Order tracking</li>
          <li>PWA support for offline access</li>
        </ul>
        
        <h2>Results</h2>
        <p>The e-commerce platform has enabled Royals to sell products online, with secure payments and smooth user experience.</p>
      `,
      tech: ["React", "Supabase", "Stripe"],
      icon: "fas fa-shoe-prints",
      mainImage: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7512?w=1200&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7512?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=500&fit=crop"
      ],
      link: "https://royals.co.ke",
      year: "2024"
    },
    {
      id: 4,
      slug: "verseflow",
      title: "VerseFlow Bible",
      category: "mobile",
      type: "Mobile App",
      desc: "Cross-platform Bible app with daily verses, offline support, and study tools.",
      fullDescription: `
        <p>VerseFlow Bible is a cross-platform mobile app for daily Bible reading and study.</p>
        
        <h2>The Challenge</h2>
        <p>Users wanted a Bible app that works offline, provides daily verses, and offers study tools without requiring constant internet connection.</p>
        
        <h2>The Solution</h2>
        <p>I developed a React Native app with Expo and SQLite for offline storage. The app includes daily verses, reading plans, and study tools.</p>
        
        <h2>Key Features</h2>
        <ul>
          <li>Offline Bible reading</li>
          <li>Daily verse notifications</li>
          <li>Reading plans</li>
          <li>Highlighting and notes</li>
          <li>Search functionality</li>
          <li>Cross-platform (iOS & Android)</li>
        </ul>
        
        <h2>Results</h2>
        <p>The app has been downloaded by users across Kenya and beyond, helping them engage with scripture daily.</p>
      `,
      tech: ["React Native", "Expo", "SQLite"],
      icon: "fas fa-bible",
      mainImage: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1200&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=500&fit=crop"
      ],
      link: "#",
      year: "2024"
    },
    {
      id: 5,
      slug: "invoicepro",
      title: "InvoicePro",
      category: "mobile",
      type: "Mobile App",
      desc: "Professional invoicing app for freelancers & SMEs – generate PDF invoices, track payments.",
      fullDescription: `
        <p>InvoicePro helps freelancers and small businesses create and manage professional invoices.</p>
        
        <h2>The Challenge</h2>
        <p>Small business owners needed an easy way to create invoices, track payments, and manage clients on the go.</p>
        
        <h2>The Solution</h2>
        <p>I built a React Native app with Node.js backend and MongoDB database. The app generates PDF invoices and tracks payment status.</p>
        
        <h2>Key Features</h2>
        <ul>
          <li>PDF invoice generation</li>
          <li>Client management</li>
          <li>Payment tracking</li>
          <li>Expense tracking</li>
          <li>Business reports</li>
          <li>Multi-currency support</li>
        </ul>
        
        <h2>Results</h2>
        <p>Business owners can now create and send professional invoices from anywhere, improving their cash flow management.</p>
      `,
      tech: ["React Native", "Node.js", "MongoDB"],
      icon: "fas fa-file-invoice-dollar",
      mainImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop"
      ],
      link: "#",
      year: "2024"
    },
    {
      id: 6,
      slug: "pesatrack",
      title: "PesaTrack",
      category: "mobile",
      type: "Mobile App",
      desc: "Personal finance & expense tracker with budget goals, analytics, and export features.",
      fullDescription: `
        <p>PesaTrack helps users track their expenses, set budget goals, and analyze spending patterns.</p>
        
        <h2>The Challenge</h2>
        <p>Users needed a simple, intuitive way to track daily expenses and manage their personal finances.</p>
        
        <h2>The Solution</h2>
        <p>I built a Next.js PWA with IndexedDB for offline storage and Chart.js for analytics visualization.</p>
        
        <h2>Key Features</h2>
        <ul>
          <li>Expense tracking</li>
          <li>Budget goal setting</li>
          <li>Spending analytics</li>
          <li>Category insights</li>
          <li>Data export (CSV/PDF)</li>
          <li>Offline support (PWA)</li>
        </ul>
        
        <h2>Results</h2>
        <p>Users can now easily track their spending and make informed financial decisions based on analytics.</p>
      `,
      tech: ["Next.js", "IndexedDB", "Chart.js"],
      icon: "fas fa-chart-line",
      mainImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
      ],
      link: "#",
      year: "2024"
    }
  ]

  useEffect(() => {
    if (slug) {
      const foundProject = projects.find(project => project.slug === slug)
      setProject(foundProject || null)
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
              <p className="text-gray-400 mt-4">Loading project...</p>
            </div>
          </div>
        </div>
      </>
    )
  }

  if (!project) {
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
              <h1 className="text-2xl font-bold text-white mb-2">Project Not Found</h1>
              <p className="text-gray-400 mb-6">The project you're looking for doesn't exist.</p>
              <Link href="/projects">
                <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg border border-white/30 transition-all">
                  Back to Projects
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
          {/* Main Image */}
          <div className="relative rounded-xl overflow-hidden mb-6 h-64 md:h-96">
            <img 
              src={project.gallery[selectedImage]} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            
            {/* Type Badge */}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white border border-white/20">
              {project.type}
            </div>
          </div>
          
          {/* Gallery Thumbnails */}
          <div className="grid grid-cols-4 gap-2 mb-8">
            {project.gallery.map((img: string, i: number) => (
              <div 
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === i ? 'border-white' : 'border-white/20 hover:border-white/50'
                }`}
              >
                <img 
                  src={img} 
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full h-20 object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Project Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <i className={`${project.icon} text-2xl text-white`}></i>
              <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {project.title}
              </h1>
            </div>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech: string, i: number) => (
                <span key={i} className="bg-white/10 px-3 py-1 rounded-full text-xs text-gray-300 border border-white/20">
                  {tech}
                </span>
              ))}
            </div>
            
            <p className="text-gray-400 text-lg mb-4">
              {project.desc}
            </p>
          </div>
          
          {/* Project Content */}
          <div 
            className="prose prose-invert prose-lg max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: project.fullDescription }}
          />
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-8 border-t border-white/20">
            {project.link && project.link !== '#' && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg border border-white/30 transition-all inline-flex items-center gap-2">
                  <i className="fas fa-external-link-alt text-sm"></i>
                  Visit Site
                </button>
              </a>
            )}
            <Link href="/projects">
              <button className="bg-white/5 hover:bg-white/10 text-white px-6 py-2 rounded-lg border border-white/20 transition-all inline-flex items-center gap-2">
                <i className="fas fa-arrow-left text-sm"></i>
                Back to Projects
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