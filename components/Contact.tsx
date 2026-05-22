'use client'

export default function Contact() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/254773743248', '_blank')
  }

  const handleCall = () => {
    window.location.href = 'tel:+254768924330'
  }

  const handleEmail = () => {
    navigator.clipboard.writeText('sngugi175@gmail.com')
    alert('Email copied: sngugi175@gmail.com')
  }

  const handleGithub = () => {
    alert('GitHub profile: https://github.com/simon-ngugi-dev')
  }

  return (
    <section id="contact" className="py-12">
      {/* Section Header */}
      <div className="sticky top-[70px] z-40 -mx-4 px-4 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8">
        <div className="bg-black/80 backdrop-blur-md rounded-xl border border-white/30 py-2 md:py-3 px-3 md:px-4 flex items-center justify-between gap-2 md:gap-4 flex-nowrap shadow-lg max-w-7xl mx-auto">
          <div className="flex items-center gap-2 md:gap-3 flex-nowrap">
            <i className="fas fa-address-card text-xl md:text-2xl lg:text-3xl text-white"></i>
            <span className="font-['Orbitron'] text-sm md:text-lg lg:text-2xl whitespace-nowrap">//_CONTACT</span>
          </div>
          <div className="hidden sm:block text-xs text-gray-400 whitespace-nowrap">
            get in touch ↓
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Form */}
          <div className="bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="font-['Orbitron'] text-xl font-bold text-white mb-4">Send a Message</h3>
            <form>
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-white/50"
                />
              </div>
              <div className="mb-4">
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-white/50"
                />
              </div>
              <div className="mb-4">
                <textarea 
                  rows={4}
                  placeholder="Your Message"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-white/50 resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg border border-white/30 transition-all">
                Send Message →
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="font-['Orbitron'] text-xl font-bold text-white mb-4">Contact Info</h3>
              <div className="space-y-3">
                <button onClick={handleWhatsApp} className="w-full flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                  <i className="fab fa-whatsapp text-white text-xl"></i>
                  <span className="text-gray-300">+254 773743248</span>
                </button>
                <button onClick={handleCall} className="w-full flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                  <i className="fas fa-phone-alt text-white text-xl"></i>
                  <span className="text-gray-300">0768924330</span>
                </button>
                <button onClick={handleEmail} className="w-full flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                  <i className="fas fa-envelope text-white text-xl"></i>
                  <span className="text-gray-300">sngugi175@gmail.com</span>
                </button>
                <button onClick={handleGithub} className="w-full flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                  <i className="fab fa-github text-white text-xl"></i>
                  <span className="text-gray-300">/simon-ngugi-dev</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}