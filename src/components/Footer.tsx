export default function Footer() {
  return (
    <footer className="py-8 mt-16 border-t border-white/10 text-xs font-mono flex items-center justify-between opacity-60">
      <span>© 2026 Rohan Chakraborty · Kolkata, IN</span>
      <div className="flex gap-6">
        <a href="https://github.com/rjc2106" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)] transition-colors">
          github
        </a>
        <a href="https://www.linkedin.com/in/rohan-chakraborty-246920313" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-color)] transition-colors">
          linkedin
        </a>
        <a href="mailto:contact.rjc21@gmail.com" className="hover:text-[var(--accent-color)] transition-colors">
          email
        </a>
      </div>
    </footer>
  );
}