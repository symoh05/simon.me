'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'
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
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1500)
  }

  const contactMethods = [
    { icon: "fas fa-envelope", title: "Email", value: "sngugi175@gmail.com", action: "mailto:sngugi175@gmail.com", iconBg: "fas fa-envelope" },
    { icon: "fab fa-whatsapp", title: "WhatsApp", value: "+254 773 743 248", action: "https://wa.me/254773743248", iconBg: "fab fa-whatsapp" },
    { icon: "fas fa-phone-alt", title: "Phone", value: "+254 768 924 330", action: "tel:+254768924330", iconBg: "fas fa-phone-alt" },
    { icon: "fab fa-github", title: "GitHub", value: "/simon-ngugi-dev", action: "https://github.com/simon-ngugi-dev", iconBg: "fab fa-github" },
    { icon: "fab fa-linkedin", title: "LinkedIn", value: "Simon Ngugi", action: "https://linkedin.com/in/simon-ngugi", iconBg: "fab fa-linkedin" }
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
                GET_<span className="text-gray-400">IN_TOUCH</span>
              </h1>
              <div className="w-20 h-1 bg-white/30 mx-auto"></div>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                Have a project in mind? Let's collaborate and bring your ideas to life
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection direction="left" delay={0.2}>
              <div className="relative bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-white/20 overflow-hidden">
                {/* Translucent Icon */}
                <i className="fas fa-paper-plane absolute pointer-events-none"
                  style={{
                    position: 'absolute',
                    bottom: '-20px',
                    right: '-20px',
                    fontSize: '7rem',
                    opacity: 0.08,
                    transform: 'rotate(-15deg)',
                    zIndex: 0
                  }}
                ></i>
                
                <div className="relative z-10">
                  <h2 className="font-['Orbitron'] text-2xl font-bold text-white mb-6">
                    SEND_<span className="text-gray-400">A_MESSAGE</span>
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-gray-300 text-sm mb-2 font-['Orbitron']">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-sm mb-2 font-['Orbitron']">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-sm mb-2 font-['Orbitron']">
                        SUBJECT
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-all"
                        placeholder="Project Inquiry"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-sm mb-2 font-['Orbitron']">
                        MESSAGE
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-all resize-none"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 rounded-lg font-['Orbitron'] font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                        isSubmitting
                          ? 'bg-gray-500 cursor-not-allowed'
                          : 'bg-white text-black hover:bg-gray-200'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin"></i>
                          SENDING...
                        </>
                      ) : (
                        <>
                          SEND MESSAGE
                          <i className="fas fa-arrow-right text-sm"></i>
                        </>
                      )}
                    </button>
                    
                    {submitStatus === 'success' && (
                      <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 text-center text-green-400 text-sm">
                        <i className="fas fa-check-circle mr-2"></i>
                        Message sent successfully! I'll get back to you soon.
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-center text-red-400 text-sm">
                        <i className="fas fa-exclamation-circle mr-2"></i>
                        Something went wrong. Please try again.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Info & Social Links */}
            <AnimatedSection direction="right" delay={0.3}>
              <div className="space-y-6">
                {/* Contact Methods */}
                <div className="relative bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-white/20 overflow-hidden">
                  {/* Translucent Icon */}
                  <i className="fas fa-address-card absolute pointer-events-none"
                    style={{
                      position: 'absolute',
                      bottom: '-20px',
                      right: '-20px',
                      fontSize: '7rem',
                      opacity: 0.08,
                      transform: 'rotate(-15deg)',
                      zIndex: 0
                    }}
                  ></i>
                  
                  <div className="relative z-10">
                    <h2 className="font-['Orbitron'] text-2xl font-bold text-white mb-6">
                      CONTACT_<span className="text-gray-400">INFO</span>
                    </h2>
                    
                    <div className="space-y-4">
                      {contactMethods.slice(0, 3).map((method, i) => (
                        <a
                          key={i}
                          href={method.action}
                          target={method.action.startsWith('http') ? '_blank' : '_self'}
                          rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="relative flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all group overflow-hidden"
                        >
                          {/* Small translucent icon inside each item */}
                          <i className={`${method.iconBg} absolute pointer-events-none`}
                            style={{
                              position: 'absolute',
                              bottom: '-10px',
                              right: '-10px',
                              fontSize: '3rem',
                              opacity: 0.05,
                              transform: 'rotate(-10deg)',
                              zIndex: 0
                            }}
                          ></i>
                          <div className="relative z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-all">
                            <i className={`${method.icon} text-white text-lg`}></i>
                          </div>
                          <div className="relative z-10 flex-1">
                            <p className="text-gray-400 text-xs">{method.title}</p>
                            <p className="text-white text-sm">{method.value}</p>
                          </div>
                          <i className="fas fa-arrow-right text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all relative z-10"></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="relative bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-white/20 overflow-hidden">
                  {/* Translucent Icon */}
                  <i className="fas fa-share-alt absolute pointer-events-none"
                    style={{
                      position: 'absolute',
                      bottom: '-20px',
                      right: '-20px',
                      fontSize: '7rem',
                      opacity: 0.08,
                      transform: 'rotate(-15deg)',
                      zIndex: 0
                    }}
                  ></i>
                  
                  <div className="relative z-10">
                    <h2 className="font-['Orbitron'] text-2xl font-bold text-white mb-6">
                      FIND_<span className="text-gray-400">ME_ONLINE</span>
                    </h2>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {contactMethods.slice(3).map((method, i) => (
                        <a
                          key={i}
                          href={method.action}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all group overflow-hidden"
                        >
                          {/* Small translucent icon inside each social button */}
                          <i className={`${method.iconBg} absolute pointer-events-none`}
                            style={{
                              position: 'absolute',
                              bottom: '-8px',
                              right: '-8px',
                              fontSize: '2.5rem',
                              opacity: 0.06,
                              transform: 'rotate(-10deg)',
                              zIndex: 0
                            }}
                          ></i>
                          <i className={`${method.icon} text-white text-lg relative z-10`}></i>
                          <span className="text-gray-300 text-sm group-hover:text-white transition-colors relative z-10">
                            {method.title}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="relative bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-white/20 overflow-hidden">
                  {/* Translucent Icon */}
                  <i className="fas fa-calendar-check absolute pointer-events-none"
                    style={{
                      position: 'absolute',
                      bottom: '-20px',
                      right: '-20px',
                      fontSize: '7rem',
                      opacity: 0.08,
                      transform: 'rotate(-15deg)',
                      zIndex: 0
                    }}
                  ></i>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <i className="fas fa-clock text-white text-2xl"></i>
                      <h2 className="font-['Orbitron'] text-2xl font-bold text-white">
                        AVAILABILITY
                      </h2>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm font-semibold">Available for freelance work</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Response time: Within 24 hours
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      Timezone: EAT (UTC+3) - Nairobi, Kenya
                    </p>
                  </div>
                </div>

                {/* Quick Response Note */}
                <div className="bg-gradient-to-r from-white/5 to-transparent rounded-2xl p-4 border border-white/20 text-center">
                  <i className="fas fa-bolt text-white text-xl mb-2 block"></i>
                  <p className="text-gray-400 text-xs">
                    I typically respond within a few hours. Looking forward to hearing from you!
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
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