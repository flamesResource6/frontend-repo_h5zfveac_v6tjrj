import { useState, useEffect } from 'react'
import { Menu, Phone, Car, MapPin } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${scrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2 text-white">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-gray-200 to-gray-500 flex items-center justify-center shadow-lg">
            <Car className="h-5 w-5 text-gray-900" />
          </div>
          <div className="leading-tight">
            <p className="text-sm uppercase tracking-widest text-gray-300">Vaughan • Ontario</p>
            <p className="text-lg font-semibold">Precision Auto Brokerage</p>
          </div>
        </a>

        <div className="hidden md:flex items-center space-x-8 text-gray-200">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="https://maps.app.goo.gl/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-300 hover:text-white">
            <MapPin className="h-4 w-4" /> Toronto • GTA
          </a>
          <a href="tel:+14165550123" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-colors">
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black/90 border-t border-white/10 px-4 py-4 space-y-3 text-gray-200">
          <a href="#services" className="block" onClick={() => setOpen(false)}>Services</a>
          <a href="#process" className="block" onClick={() => setOpen(false)}>Process</a>
          <a href="#contact" className="block" onClick={() => setOpen(false)}>Contact</a>
          <a href="tel:+14165550123" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-colors">
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      )}
    </header>
  )
}
