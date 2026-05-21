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
    alert('GitHub profile: https://github.com/simon-ngugi-dev (demos & repos coming soon)')
  }

  return (
    <section id="contact" className="py-12">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Terminal with Header + Code + Connect Now */}
        <div className="bg-black rounded-2xl overflow-hidden border border-white/20">
          {/* Terminal Header with dots */}
          <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-2 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            <span className="text-xs text-gray-400 ml-2">simon@cyberforge:~/portfolio</span>
          </div>
          
          {/* Code Content with CUSTOM COLORS */}
          <div className="p-5 font-mono text-sm space-y-1">
            <p><span style={{color: '#ff69b4'}}>const</span> <span style={{color: '#ffffff'}}>developer</span> = {`{`}</p>
            <p className="ml-4"><span style={{color: '#ff69b4'}}>name</span>: <span style={{color: '#98c379'}}>"Simon Ngugi"</span>,</p>
            <p className="ml-4"><span style={{color: '#ff69b4'}}>role</span>: <span style={{color: '#98c379'}}>"BSc IT Student"</span>,</p>
            <p className="ml-4"><span style={{color: '#ff69b4'}}>location</span>: <span style={{color: '#98c379'}}>"Nairobi, Kenya"</span>,</p>
            <p className="ml-4"><span style={{color: '#ff69b4'}}>phone</span>: <span style={{color: '#98c379'}}>"+254 773 743248"</span>,</p>
            <p className="ml-4"><span style={{color: '#ff69b4'}}>email</span>: <span style={{color: '#98c379'}}>"sngugi175@gmail.com"</span>,</p>
            <p className="ml-4"><span style={{color: '#ff69b4'}}>stack</span>: [<span style={{color: '#98c379'}}>"Next.js"</span>, <span style={{color: '#98c379'}}>"React Native"</span>, <span style={{color: '#98c379'}}>"PHP"</span>, <span style={{color: '#98c379'}}>"Python"</span>],</p>
            <p className="ml-4"><span style={{color: '#ff69b4'}}>projects</span>: <span style={{color: '#56b6c2'}}>25</span>,</p>
            <p className="ml-4"><span style={{color: '#ff69b4'}}>apps</span>: <span style={{color: '#56b6c2'}}>6</span>,</p>
            <p className="ml-4"><span style={{color: '#ff69b4'}}>status</span>: <span style={{color: '#98c379'}}>"open for work"</span></p>
            <p>{`}`}</p>
            <p className="mt-3"><span style={{color: '#ff69b4'}}>await</span> <span style={{color: '#ffffff'}}>developer</span>.<span style={{color: '#e5c07b'}}>connect</span>()</p>
            <p className="text-white blink mt-2">$ ./connect --now <span className="animate-pulse">█</span></p>
          </div>
        </div>

        {/* Social Links - White icons only */}
        <div className="space-y-3">
          <button onClick={handleWhatsApp} className="w-full bg-white/5 border border-white/30 rounded-full p-3 flex items-center gap-3 hover:bg-white/10 hover:translate-x-1 transition-all">
            <i className="fab fa-whatsapp text-2xl text-white w-8"></i>
            <span className="text-gray-300">+254 773743248 (WhatsApp)</span>
            <i className="fas fa-comment-dots text-white ml-auto"></i>
          </button>
          <button onClick={handleCall} className="w-full bg-white/5 border border-white/30 rounded-full p-3 flex items-center gap-3 hover:bg-white/10 hover:translate-x-1 transition-all">
            <i className="fas fa-phone-alt text-2xl text-white w-8"></i>
            <span className="text-gray-300">0768924330 (Call)</span>
            <i className="fas fa-phone-volume text-white ml-auto"></i>
          </button>
          <button onClick={handleEmail} className="w-full bg-white/5 border border-white/30 rounded-full p-3 flex items-center gap-3 hover:bg-white/10 hover:translate-x-1 transition-all">
            <i className="fas fa-envelope text-2xl text-white w-8"></i>
            <span className="text-gray-300">sngugi175@gmail.com</span>
            <i className="fas fa-copy text-white ml-auto"></i>
          </button>
          <button onClick={handleGithub} className="w-full bg-white/5 border border-white/30 rounded-full p-3 flex items-center gap-3 hover:bg-white/10 hover:translate-x-1 transition-all">
            <i className="fab fa-github text-2xl text-white w-8"></i>
            <span className="text-gray-300">/simon-ngugi-dev</span>
            <i className="fas fa-external-link-alt text-white ml-auto"></i>
          </button>
        </div>
      </div>
    </section>
  )
}