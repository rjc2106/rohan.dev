import React from 'react'

const FooterComponent = () => {
  return (
    <footer className="py-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between font-mono text-xs text-muted">
      <p>© 2026 Rohan Chakraborty • Kolkata, IN</p>
      <div className="flex gap-6 mt-4 md:mt-0">
        <a href="https://github.com/rjc2106" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">github</a>
        <a href="https://linkedin.com/in/rohan-chakraborty-246920313" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">linkedin</a>
        <a href="mailto:contact.rjc21@gmail.com" className="hover:text-accent transition-colors">email</a>
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterComponent)
