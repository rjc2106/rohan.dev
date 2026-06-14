export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-8">
      <a href="/" className="font-mono text-[var(--accent-color)] font-bold text-lg tracking-tight">
        ~/rohan.dev
      </a>
      <div className="flex gap-6 font-mono text-sm opacity-80">
        <a href="/" className="hover:text-[var(--accent-color)] transition-colors">home</a>
        <a href="/work" className="hover:text-[var(--accent-color)] transition-colors">work</a>
        <a href="/about" className="hover:text-[var(--accent-color)] transition-colors">about</a>
        <a href="/contact" className="hover:text-[var(--accent-color)] transition-colors">contact</a>
      </div>
    </nav>
  );
}