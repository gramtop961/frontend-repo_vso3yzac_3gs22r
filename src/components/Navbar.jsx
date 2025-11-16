import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Why Thrive', href: '#why' },
    { label: 'How It Works', href: '#process' },
    { label: 'Package', href: '#pricing' },
    { label: 'Eternal Echo', href: '#echo' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2 text-white">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500 grid place-items-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold">Thrive Legal Services</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#book" className="inline-flex items-center rounded-md bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors">
              Book Consultation
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60"> 
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-white/90">
                {item.label}
              </a>
            ))}
            <a href="#book" onClick={() => setOpen(false)} className="block text-white/90">
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
