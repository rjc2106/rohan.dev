import { createRootRoute, Outlet, Link } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col max-w-5xl mx-auto px-6 font-sans">
      <Navbar />
      <main className="flex-grow py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
})

function Navbar() {
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

function Footer() {
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