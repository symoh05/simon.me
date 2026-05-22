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
    <section id="contact" className="py-8">
      {/* Section Header - Compact */}
      <div className="sticky top-[70px] z-40 -mx-4 px-4 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8">
        <div className="bg-black/80 backdrop-blur-md rounded-lg border border-white/30 py-1.5 md:py-2 px-3 md:px-4 flex items-center justify-between gap-2 md:gap-4 flex-nowrap shadow-lg max-w-7xl mx-auto">
          <div className="flex items-center gap-2 md:gap-3 flex-nowrap">
            <i className="fas fa-address-card text-lg md:text-xl lg:text-2xl text-white"></i>
            <span className="font-['Orbitron'] text-xs md:text-base lg:text-xl whitespace-nowrap">//_CONTACT</span>
          </div>
          <div className="hidden sm:block text-[10px] text-gray-400 whitespace-nowrap">
            get in touch ↓
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Contact Form - Compact */}
          <div className="bg-black/50 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <h3 className="font-['Orbitron'] text-base font-bold text-white mb-3">Send a Message</h3>
            <form>
              <div className="mb-3">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-1.5 text-white placeholder-gray-400 focus:outline-none focus:border-white/50 text-sm"
                />
              </div>
              <div className="mb-3">
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-1.5 text-white placeholder-gray-400 focus:outline-none focus:border-white/50 text-sm"
                />
              </div>
              <div className="mb-3">
                <textarea 
                  rows={3}
                  placeholder="Your Message"
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-3 py-1.5 text-white placeholder-gray-400 focus:outline-none focus:border-white/50 resize-none text-sm"
                ></textarea>
              </div>
              <button className="w-full bg-white/10 hover:bg-white/20 text-white py-1.5 rounded-lg border border-white/30 transition-all text-sm">
                Send Message →
              </button>
            </form>
          </div>

          {/* Contact Info - Compact */}
          <div className="space-y-3">
            <div className="bg-black/50 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <h3 className="font-['Orbitron'] text-base font-bold text-white mb-3">Contact Info</h3>
              <div className="space-y-2">
                <button onClick={handleWhatsApp} className="w-full flex items-center gap-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                  <i className="fab fa-whatsapp text-white text-base"></i>
                  <span className="text-gray-300 text-sm">+254 773743248</span>
                </button>
                <button onClick={handleCall} className="w-full flex items-center gap-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                  <i className="fas fa-phone-alt text-white text-base"></i>
                  <span className="text-gray-300 text-sm">0768924330</span>
                </button>
                <button onClick={handleEmail} className="w-full flex items-center gap-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                  <i className="fas fa-envelope text-white text-base"></i>
                  <span className="text-gray-300 text-sm">sngugi175@gmail.com</span>
                </button>
                <button onClick={handleGithub} className="w-full flex items-center gap-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                  <i className="fab fa-github text-white text-base"></i>
                  <span className="text-gray-300 text-sm">/simon-ngugi-dev</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}