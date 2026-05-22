'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import CustomCursor from '@/components/CustomCursor'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1500)
  }

  const contactMethods = [
    { icon: "fas fa-envelope", title: "Email", value: "sngugi175@gmail.com", action: "mailto:sngugi175@gmail.com" },
    { icon: "fab fa-whatsapp", title: "WhatsApp", value: "+254 773 743 248", action: "https://wa.me/254773743248" },
    { icon: "fas fa-phone-alt", title: "Phone", value: "+254 768 924 330", action: "tel:+254768924330" },
    { icon: "fab fa-github", title: "GitHub", value: "/simon-ngugi-dev", action: "https://github.com/simon-ngugi-dev" },
    { icon: "fab fa-linkedin", title: "LinkedIn", value: "Simon Ngugi", action: "https://linkedin.com/in/simon-ngugi" }
  ]

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
                fontSize: 'clamp(60px, 12vw, 140px)',
                fontWeight: '900',
                color: 'rgba(255, 255, 255, 0.07)',
                letterSpacing: '15px',
                fontFamily: "'Orbitron', monospace",
                whiteSpace: 'nowrap',
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            >
              CONTACT
            </div>
            
            <div className="relative z-10">
              <h1 className="font-['Orbitron'] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                GET_<span className="text-gray-400">IN_TOUCH</span>
              </h1>
              <div className="w-16 h-0.5 bg-white/30 mx-auto"></div>
              <p className="text-gray-400 mt-3 text-sm max-w-2xl mx-auto">
                Have a project? Let's collaborate and bring your ideas to life
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Contact Form - Reduced */}
            <div className="relative bg-black/50 backdrop-blur-md rounded-xl p-5 border border-white/20 overflow-hidden">
              <i className="fas fa-paper-plane absolute pointer-events-none"
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '-15px',
                  fontSize: '5rem',
                  opacity: 0.06,
                  transform: 'rotate(-15deg)',
                  zIndex: 0
                }}
              ></i>
              
              <div className="relative z-10">
                <h2 className="font-['Orbitron'] text-xl font-bold text-white mb-4">
                  SEND_<span className="text-gray-400">A_MESSAGE</span>
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-gray-400 text-xs mb-1 font-['Orbitron']">YOUR NAME</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-all text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-400 text-xs mb-1 font-['Orbitron']">EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-all text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-400 text-xs mb-1 font-['Orbitron']">SUBJECT</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-all text-sm"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-400 text-xs mb-1 font-['Orbitron']">MESSAGE</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-all resize-none text-sm"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2 rounded-lg font-['Orbitron'] font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm ${
                      isSubmitting
                        ? 'bg-gray-500 cursor-not-allowed'
                        : 'bg-white text-black hover:bg-gray-200'
                    }`}
                  >
                    {isSubmitting ? (
                      <><i className="fas fa-spinner fa-spin"></i> SENDING...</>
                    ) : (
                      <>SEND <i className="fas fa-arrow-right text-xs"></i></>
                    )}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-2 text-center text-green-400 text-xs">
                      <i className="fas fa-check-circle mr-1"></i> Message sent! I'll get back soon.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Info - Reduced */}
            <div className="space-y-4">
              {/* Contact Methods */}
              <div className="bg-black/50 backdrop-blur-md rounded-xl p-5 border border-white/20">
                <h2 className="font-['Orbitron'] text-xl font-bold text-white mb-4">
                  CONTACT_<span className="text-gray-400">INFO</span>
                </h2>
                
                <div className="space-y-3">
                  {contactMethods.slice(0, 3).map((method, i) => (
                    <a
                      key={i}
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : '_self'}
                      rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center gap-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-all">
                        <i className={`${method.icon} text-white text-sm`}></i>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-400 text-[10px]">{method.title}</p>
                        <p className="text-white text-xs">{method.value}</p>
                      </div>
                      <i className="fas fa-arrow-right text-gray-400 text-xs group-hover:text-white group-hover:translate-x-1 transition-all"></i>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-black/50 backdrop-blur-md rounded-xl p-5 border border-white/20">
                <h2 className="font-['Orbitron'] text-xl font-bold text-white mb-4">
                  FIND_<span className="text-gray-400">ME_ONLINE</span>
                </h2>
                
                <div className="grid grid-cols-2 gap-2">
                  {contactMethods.slice(3).map((method, i) => (
                    <a
                      key={i}
                      href={method.action}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all group"
                    >
                      <i className={`${method.icon} text-white text-sm`}></i>
                      <span className="text-gray-300 text-xs group-hover:text-white transition-colors">
                        {method.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-black/50 backdrop-blur-md rounded-xl p-5 border border-white/20">
                <div className="flex items-center gap-2 mb-3">
                  <i className="fas fa-clock text-white text-xl"></i>
                  <h2 className="font-['Orbitron'] text-xl font-bold text-white">AVAILABILITY</h2>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs font-semibold">Available for freelance work</span>
                </div>
                <p className="text-gray-400 text-xs">Response: Within 24 hours</p>
                <p className="text-gray-400 text-xs mt-1">Timezone: EAT (UTC+3) - Nairobi</p>
              </div>

              {/* Quick Note */}
              <div className="bg-gradient-to-r from-white/5 to-transparent rounded-xl p-3 border border-white/20 text-center">
                <i className="fas fa-bolt text-white text-lg mb-1 block"></i>
                <p className="text-gray-400 text-[10px]">I respond within a few hours.</p>
              </div>
            </div>
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