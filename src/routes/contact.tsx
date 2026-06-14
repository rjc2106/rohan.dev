import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
});

function Contact() {
  return (
    <div className="flex flex-col min-h-screen py-12 animate-fade-in">
      <div className="mb-16 max-w-2xl">
        <div className="text-[var(--accent-color)] font-mono text-sm mb-4">~/contact</div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Let's <span className="text-[var(--accent-color)]">talk.</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl mb-4 opacity-90">Open to remote part-time & full-time roles.</h2>
        <p className="text-lg opacity-70 leading-relaxed">
          Drop a message about your project, role, or anything you'd like to build together. I usually respond within a day.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-0 border border-white/10 bg-white/5 max-w-3xl">
        {/* Email */}
        <a href="mailto:contact.rjc21@gmail.com" className="group flex justify-between items-center p-6 border-b border-white/10 hover:bg-white/10 transition-colors">
          <div>
            <div className="text-[var(--accent-color)] font-mono text-xs mb-2">email</div>
            <div className="text-xl md:text-2xl font-mono tracking-tight group-hover:text-[var(--accent-color)] transition-colors">contact.rjc21@gmail.com</div>
          </div>
          <div className="text-white/30 group-hover:text-[var(--accent-color)] transition-colors">→</div>
        </a>

        {/* GitHub */}
        <a href="https://github.com/rjc2106" target="_blank" rel="noopener noreferrer" className="group flex justify-between items-center p-6 border-b border-white/10 hover:bg-white/10 transition-colors">
          <div>
            <div className="text-[var(--accent-color)] font-mono text-xs mb-2">github</div>
            <div className="text-xl md:text-2xl font-mono tracking-tight group-hover:text-[var(--accent-color)] transition-colors">github.com/rjc2106</div>
          </div>
          <div className="text-white/30 group-hover:text-[var(--accent-color)] transition-colors">→</div>
        </a>

        {/* LinkedIn */}
        {/* Notice the border-b is removed here since it's now the last item */}
        <a href="https://www.linkedin.com/in/rohan-chakraborty-246920313" target="_blank" rel="noopener noreferrer" className="group flex justify-between items-center p-6 hover:bg-white/10 transition-colors">
          <div>
            <div className="text-[var(--accent-color)] font-mono text-xs mb-2">linkedin</div>
            <div className="text-xl md:text-2xl font-mono tracking-tight group-hover:text-[var(--accent-color)] transition-colors">/in/rohan-chakraborty-246920313</div>
          </div>
          <div className="text-white/30 group-hover:text-[var(--accent-color)] transition-colors">→</div>
        </a>
      </div>

      <div className="mt-16 border border-white/10 bg-[#0a0a0a] p-8 max-w-xl">
         <div className="text-[var(--accent-color)] font-mono text-sm mb-4">~/resume</div>
         <h3 className="text-2xl font-bold mb-4">Prefer the short version?</h3>
         <p className="opacity-70 mb-8">Grab my one-page resume.</p>
         <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-[var(--accent-color)] text-black px-6 py-3 font-bold hover:bg-white transition-colors">
           download resume ↓
         </a>
      </div>
    </div>
  );
}