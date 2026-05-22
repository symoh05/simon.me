'use client'

import { useState } from 'react'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import Navbar from '@/components/Navbar'
import CustomCursor from '@/components/CustomCursor'

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('web')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const services = {
    web: {
      title: "Web Development",
      icon: "fas fa-globe",
      description: "Modern, responsive, and high-performance websites tailored to your brand.",
      features: [
        "Custom website design & development",
        "Responsive & mobile-first approach",
        "SEO optimized architecture",
        "Fast loading & performance optimized",
        "CMS integration (WordPress, Sanity, etc.)",
        "E-commerce solutions",
        "Website maintenance & support"
      ],
      price: "Starting from $500",
      timeline: "2-4 weeks"
    },
    mobile: {
      title: "Mobile App Development",
      icon: "fas fa-mobile-alt",
      description: "Cross-platform mobile apps that work seamlessly on iOS and Android.",
      features: [
        "React Native / Expo development",
        "iOS & Android compatible",
        "Offline-first architecture",
        "Push notifications",
        "App store deployment",
        "API integration",
        "Ongoing maintenance"
      ],
      price: "Starting from $1500",
      timeline: "4-8 weeks"
    },
    consulting: {
      title: "Tech Consulting",
      icon: "fas fa-chalkboard-user",
      description: "Expert advice to help you make better technical decisions.",
      features: [
        "Technology stack recommendations",
        "Code review & optimization",
        "Performance auditing",
        "Security assessment",
        "Architecture planning",
        "Team training",
        "Technical due diligence"
      ],
      price: "Starting from $100/hour",
      timeline: "Flexible"
    },
    maintenance: {
      title: "Maintenance & Support",
      icon: "fas fa-headset",
      description: "Keep your digital products running smoothly with ongoing support.",
      features: [
        "24/7 monitoring & alerts",
        "Bug fixes & patches",
        "Security updates",
        "Performance optimization",
        "Regular backups",
        "Uptime guarantee (99.9%)",
        "Emergency support"
      ],
      price: "Starting from $200/month",
      timeline: "Ongoing"
    }
  }

  const process = [
    { step: "01", title: "Discovery", desc: "We discuss your goals, requirements, and timeline.", icon: "fas fa-comments" },
    { step: "02", title: "Planning", desc: "I create a detailed plan and architecture for your project.", icon: "fas fa-clipboard-list" },
    { step: "03", title: "Design", desc: "Modern, responsive designs tailored to your brand.", icon: "fas fa-pen-ruler" },
    { step: "04", title: "Development", desc: "Clean, maintainable code with regular updates.", icon: "fas fa-code" },
    { step: "05", title: "Testing", desc: "Rigorous testing across all devices and browsers.", icon: "fas fa-bug" },
    { step: "06", title: "Launch", desc: "Deployment to production with ongoing support.", icon: "fas fa-rocket" }
  ]

  const faqs = [
    { q: "How long does a typical project take?", a: "Website projects typically take 2-4 weeks, while mobile apps take 4-8 weeks depending on complexity." },
    { q: "Do you offer post-launch support?", a: "Yes! I offer maintenance packages and hourly support for ongoing needs." },
    { q: "What's your payment structure?", a: "I require 50% upfront, 25% at milestone, and 25% upon completion for most projects." },
    { q: "Do you work with existing code?", a: "Absolutely! I can take over existing projects and provide maintenance or improvements." },
    { q: "What technologies do you use?", a: "Next.js, React Native, Node.js, PHP, Python, PostgreSQL, and modern cloud platforms." },
    { q: "Can you sign an NDA?", a: "Yes, I'm happy to sign NDAs to protect your confidential information and ideas." }
  ]

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
                MY_<span className="text-gray-400">SERVICES</span>
              </h1>
              <div className="w-20 h-1 bg-white/30 mx-auto"></div>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                What I offer to help bring your digital ideas to life
              </p>
            </div>
          </AnimatedSection>

          {/* Service Tabs */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                { id: 'web', name: 'Web Development', icon: 'fas fa-globe' },
                { id: 'mobile', name: 'Mobile Apps', icon: 'fas fa-mobile-alt' },
                { id: 'consulting', name: 'Consulting', icon: 'fas fa-chalkboard-user' },
                { id: 'maintenance', name: 'Maintenance', icon: 'fas fa-headset' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 rounded-full font-['Orbitron'] text-sm transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-white text-black'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <i className={tab.icon}></i>
                  {tab.name}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Service Details */}
          <AnimatedSection direction="up" delay={0.3}>
            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              <div className="relative bg-black/50 backdrop-blur-md rounded-2xl p-8 border border-white/20 overflow-hidden">
                <i className={`${services[activeTab as keyof typeof services].icon} absolute pointer-events-none`}
                  style={{
                    position: 'absolute',
                    bottom: '-20px',
                    right: '-20px',
                    fontSize: '8rem',
                    opacity: 0.06,
                    transform: 'rotate(-15deg)',
                    zIndex: 0
                  }}
                ></i>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <i className={`${services[activeTab as keyof typeof services].icon} text-4xl text-white`}></i>
                    <h2 className="font-['Orbitron'] text-3xl font-bold text-white">
                      {services[activeTab as keyof typeof services].title}
                    </h2>
                  </div>
                  <p className="text-gray-300 text-lg mb-6">
                    {services[activeTab as keyof typeof services].description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {services[activeTab as keyof typeof services].features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <i className="fas fa-check-circle text-green-500 text-sm"></i>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-white/20">
                    <div>
                      <p className="text-gray-400 text-xs">PRICE</p>
                      <p className="text-white font-bold">{services[activeTab as keyof typeof services].price}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">TIMELINE</p>
                      <p className="text-white font-bold">{services[activeTab as keyof typeof services].timeline}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-transparent rounded-2xl p-8 border border-white/20">
                <i className="fas fa-handshake text-4xl text-white mb-4 block"></i>
                <h3 className="font-['Orbitron'] text-2xl font-bold text-white mb-3">
                  Ready to Start?
                </h3>
                <p className="text-gray-400 mb-6">
                  Let's discuss your project and how I can help bring your vision to life.
                </p>
                <Link href="/contact">
                  <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg border border-white/30 transition-all flex items-center gap-2">
                    Get a Free Quote
                    <i className="fas fa-arrow-right text-sm"></i>
                  </button>
                </Link>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-gray-500 text-xs">Or reach out directly:</p>
                  <p className="text-white text-sm mt-1">
                    <i className="fas fa-envelope mr-2"></i> sngugi175@gmail.com
                  </p>
                  <p className="text-white text-sm mt-1">
                    <i className="fab fa-whatsapp mr-2"></i> +254 773 743 248
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Process Section */}
          <AnimatedSection direction="up" delay={0.4}>
            <div className="mb-20">
              <h2 className="font-['Orbitron'] text-3xl font-bold text-white mb-8 text-center">
                HOW_<span className="text-gray-400">I_WORK</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {process.map((item, i) => (
                  <div key={i} className="relative bg-white/5 rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all group">
                    <div className="absolute top-4 right-4 text-6xl font-bold text-white/5 font-['Orbitron']">
                      {item.step}
                    </div>
                    <i className={`${item.icon} text-3xl text-white mb-3 block relative z-10`}></i>
                    <h3 className="font-['Orbitron'] text-xl font-bold text-white mb-2 relative z-10">{item.title}</h3>
                    <p className="text-gray-400 text-sm relative z-10">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* FAQ Section - 2 Columns, 3 Rows with Dropdown */}
          <AnimatedSection direction="up" delay={0.5}>
            <div className="mb-20">
              <h2 className="font-['Orbitron'] text-3xl font-bold text-white mb-8 text-center">
                FAQ_<span className="text-gray-400">QUESTIONS</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-white/5 rounded-xl border border-white/20 overflow-hidden">
                    <button
                      onClick={() => toggleFaq(i)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <i className="fas fa-question-circle text-gray-400 text-lg"></i>
                        <h3 className="font-['Orbitron'] font-bold text-white text-sm md:text-base">
                          {faq.q}
                        </h3>
                      </div>
                      <i className={`fas fa-chevron-down text-gray-400 transition-transform duration-300 flex-shrink-0 ml-2 ${openFaq === i ? 'rotate-180' : ''}`}></i>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                      <div className="px-5 pb-3">
                        <div className="flex items-start gap-3">
                          <i className="fas fa-arrow-right text-gray-500 text-xs mt-1"></i>
                          <p className="text-gray-400 text-xs md:text-sm">{faq.a}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Portfolio Showcase */}
          <AnimatedSection direction="up" delay={0.6}>
            <div className="text-center bg-gradient-to-r from-white/5 to-transparent rounded-2xl p-8 border border-white/20">
              <i className="fas fa-folder-open text-4xl text-white mb-4 block"></i>
              <h2 className="font-['Orbitron'] text-2xl font-bold text-white mb-3">
                See My Work
              </h2>
              <p className="text-gray-400 mb-6 max-w-md mx-auto">
                Check out some of the projects I've delivered for happy clients.
              </p>
              <Link href="/projects">
                <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg border border-white/30 transition-all flex items-center gap-2 mx-auto">
                  View Portfolio
                  <i className="fas fa-arrow-right text-sm"></i>
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