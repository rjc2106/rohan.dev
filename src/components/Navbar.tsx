import { Link } from '@tanstack/react-router'
import React from 'react'

const NavbarComponent = () => {
  return (
    <nav className="flex items-center justify-between py-10 border-b border-white/5">
      <Link to="/" className="font-mono text-accent font-bold text-sm tracking-tight">
        ~/rohan.dev
      </Link>
      <div className="flex gap-6 font-mono text-xs text-muted">
        <Link to="/" className="hover:text-accent transition-colors [&.active]:text-accent">home</Link>
        <Link to="/work" className="hover:text-accent transition-colors [&.active]:text-accent">work</Link>
        <Link to="/about" className="hover:text-accent transition-colors [&.active]:text-accent">about</Link>
        <Link to="/contact" className="hover:text-accent transition-colors [&.active]:text-accent">contact</Link>
      </div>
    </nav>
  )
}

export const Navbar = React.memo(NavbarComponent)
