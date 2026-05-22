'use client'

import { useState } from 'react'
import Link from 'next/link'
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
        "CMS integration",
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
        "Uptime guarantee",
        "Emergency support"
      ],
      price: "Starting from $200/month",
      timeline: "Ongoing"
    }
  }

  const process = [
    { step: "01", title: "Discovery", desc: "Discuss goals & timeline", icon: "fas fa-comments" },
    { step: "02", title: "Planning", desc: "Create detailed plan", icon: "fas fa-clipboard-list" },
    { step: "03", title: "Design", desc: "Modern responsive designs", icon: "fas fa-pen-ruler" },
    { step: "04", title: "Development", desc: "Clean maintainable code", icon: "fas fa-code" },
    { step: "05", title: "Testing", desc: "Rigorous testing", icon: "fas fa-bug" },
    { step: "06", title: "Launch", desc: "Deploy & support", icon: "fas fa-rocket" }
  ]

  const faqs = [
    { q: "How long does a typical project take?", a: "Websites: 2-4 weeks, Mobile apps: 4-8 weeks." },
    { q: "Do you offer post-launch support?", a: "Yes! Maintenance packages and hourly support available." },
    { q: "What's your payment structure?", a: "50% upfront, 25% milestone, 25% upon completion." },
    { q: "Do you work with existing code?", a: "Absolutely! I can take over existing projects." },
    { q: "What technologies do you use?", a: "Next.js, React Native, Node.js, PHP, Python, PostgreSQL." },
    { q: "Can you sign an NDA?", a: "Yes, happy to sign NDAs for your protection." }
  ]

  return (
    <>
      <CustomCursor />
      
      <div className="cyber-bg"></div>
      <div className="grid-overlay"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 overflow-x-hidden">
        <Navbar />
        
        <div className="py-8">
          {/* Hero Section with Watermark - Fixed width overflow */}
          <div className="relative text-center mb-8 overflow-hidden">
            {/* Thick translucent watermark - Smaller on mobile */}
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
              style={{
                fontSize: 'clamp(40px, 10vw, 140px)',
                fontWeight: '900',
                color: 'rgba(255, 255, 255, 0.07)',
                letterSpacing: 'clamp(5px, 2vw, 15px)',
                fontFamily: "'Orbitron', monospace",
                whiteSpace: 'nowrap',
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            >
              SERVICES
            </div>
            
            <div className="relative z-10">
              <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                MY_<span className="text-gray-400">SERVICES</span>
              </h1>
              <div className="w-16 h-0.5 bg-white/30 mx-auto"></div>
              <p className="text-gray-400 mt-3 text-sm max-w-2xl mx-auto">
                What I offer to help bring your digital ideas to life
              </p>
            </div>
          </div>

          {/* Service Tabs - Reduced */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { id: 'web', name: 'Web Dev', icon: 'fas fa-globe' },
              { id: 'mobile', name: 'Mobile', icon: 'fas fa-mobile-alt' },
              { id: 'consulting', name: 'Consulting', icon: 'fas fa-chalkboard-user' },
              { id: 'maintenance', name: 'Support', icon: 'fas fa-headset' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-1.5 rounded-full font-['Orbitron'] text-xs transition-all duration-300 flex items-center gap-1.5 ${
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

          {/* Service Details - Reduced */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            <div className="relative bg-black/50 backdrop-blur-md rounded-xl p-5 border border-white/20 overflow-hidden">
              <i className={`${services[activeTab as keyof typeof services].icon} absolute pointer-events-none`}
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '-15px',
                  fontSize: '6rem',
                  opacity: 0.06,
                  transform: 'rotate(-15deg)',
                  zIndex: 0
                }}
              ></i>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <i className={`${services[activeTab as keyof typeof services].icon} text-2xl text-white`}></i>
                  <h2 className="font-['Orbitron'] text-xl font-bold text-white">
                    {services[activeTab as keyof typeof services].title}
                  </h2>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  {services[activeTab as keyof typeof services].description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {services[activeTab as keyof typeof services].features.slice(0, 5).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <i className="fas fa-check-circle text-green-500 text-xs"></i>
                      <span className="text-gray-300 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3 pt-3 border-t border-white/20">
                  <div>
                    <p className="text-gray-400 text-xs">PRICE</p>
                    <p className="text-white font-bold text-sm">{services[activeTab as keyof typeof services].price}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">TIMELINE</p>
                    <p className="text-white font-bold text-sm">{services[activeTab as keyof typeof services].timeline}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-transparent rounded-xl p-5 border border-white/20">
              <i className="fas fa-handshake text-2xl text-white mb-2 block"></i>
              <h3 className="font-['Orbitron'] text-lg font-bold text-white mb-2">
                Ready to Start?
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Let's discuss your project and bring your vision to life.
              </p>
              <Link href="/contact">
                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded-lg border border-white/30 transition-all text-sm flex items-center gap-2">
                  Get a Free Quote
                  <i className="fas fa-arrow-right text-xs"></i>
                </button>
              </Link>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-gray-500 text-xs">Or reach out:</p>
                <p className="text-white text-xs mt-1">
                  <i className="fas fa-envelope mr-1"></i> sngugi175@gmail.com
                </p>
                <p className="text-white text-xs mt-1">
                  <i className="fab fa-whatsapp mr-1"></i> +254 773 743 248
                </p>
              </div>
            </div>
          </div>

          {/* Process Section - Reduced */}
          <div className="mb-12">
            <h2 className="font-['Orbitron'] text-xl font-bold text-white mb-5 text-center">
              HOW_<span className="text-gray-400">I_WORK</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-3">
              {process.map((item, i) => (
                <div key={i} className="relative bg-white/5 rounded-lg p-3 border border-white/20 hover:border-white/40 transition-all">
                  <div className="absolute top-2 right-2 text-3xl font-bold text-white/5 font-['Orbitron']">
                    {item.step}
                  </div>
                  <i className={`${item.icon} text-xl text-white mb-1 block`}></i>
                  <h3 className="font-['Orbitron'] text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section - Reduced */}
          <div className="mb-12">
            <h2 className="font-['Orbitron'] text-xl font-bold text-white mb-5 text-center">
              FAQ_<span className="text-gray-400">QUESTIONS</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white/5 rounded-lg border border-white/20 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between p-3 text-left hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <i className="fas fa-question-circle text-gray-400 text-xs"></i>
                      <h3 className="font-['Orbitron'] font-bold text-white text-xs">
                        {faq.q}
                      </h3>
                    </div>
                    <i className={`fas fa-chevron-down text-gray-400 text-xs transition-transform duration-300 flex-shrink-0 ml-2 ${openFaq === i ? 'rotate-180' : ''}`}></i>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-24 pb-3' : 'max-h-0'}`}>
                    <div className="px-3 pb-2">
                      <div className="flex items-start gap-2">
                        <i className="fas fa-arrow-right text-gray-500 text-[10px] mt-0.5"></i>
                        <p className="text-gray-400 text-xs">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio Showcase - Reduced */}
          <div className="text-center bg-gradient-to-r from-white/5 to-transparent rounded-xl p-4 border border-white/20">
            <i className="fas fa-folder-open text-2xl text-white mb-2 block"></i>
            <h2 className="font-['Orbitron'] text-lg font-bold text-white mb-1">
              See My Work
            </h2>
            <p className="text-gray-400 text-xs mb-3 max-w-md mx-auto">
              Check out projects I've delivered for happy clients.
            </p>
            <Link href="/projects">
              <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded-lg border border-white/30 transition-all text-xs flex items-center gap-2 mx-auto">
                View Portfolio
                <i className="fas fa-arrow-right text-xs"></i>
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