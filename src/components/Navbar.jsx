import { useState } from 'react'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import { Logo } from './ui.jsx'

const links = [
  { label: 'Product', menu: true },
  { label: 'Solutions', menu: true },
  { label: 'Institutional', menu: true },
  { label: 'Blog' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="nav__inner">
        <div className="nav__left">
          <Logo />
          <span className="nav__divider" aria-hidden="true" />
          <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Main">
            {links.map((l) => (
              <a key={l.label} href="#" className="nav__link">
                {l.label}
                {l.menu && <ChevronDown size={13} strokeWidth={2.2} />}
              </a>
            ))}
            <div className="nav__mobile-actions">
              <a href="#" className="pill-outline">Meet Our AI</a>
              <a href="#" className="quick-call">Quick Call <ChevronRight size={14} /></a>
            </div>
          </nav>
        </div>
        <div className="nav__right">
          <a href="#" className="pill-outline nav__ai">
            Meet Our AI
            <span className="nav__badge">Demo</span>
          </a>
          <a href="#" className="quick-call">
            Quick Call <ChevronRight size={14} strokeWidth={2} />
          </a>
        </div>
        <button className="nav__toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}
