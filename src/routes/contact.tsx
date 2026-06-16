import { createRoute } from '@tanstack/react-router'
import { Route as rootRoute } from './__root'

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
})


function Contact() {
  return (
    <div className="max-w-3xl space-y-16 animate-in fade-in duration-700">
      <div className="space-y-6">
        <span className="font-mono text-accent text-sm">~/contact</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Let's <span className="text-accent">talk.</span>
        </h1>
        <p className="text-xl text-gray-300">Open to remote part-time & full-time roles.</p>
        <p className="text-gray-400 leading-relaxed">Drop a message about your project, backend scaling needs, or anything you'd like to build together. I usually respond within a day.</p>
      </div>

      <div className="flex flex-col border-t border-white/10">
        <a href="mailto:contact.rjc21@gmail.com" className="group flex flex-col sm:flex-row justify-between sm:items-center py-8 border-b border-white/10 hover:border-accent transition-all hover:pl-4">
          <span className="font-mono text-accent text-xs mb-2 sm:mb-0">email</span>
          <div className="flex items-center gap-4">
            <span className="font-mono text-lg group-hover:text-white transition-colors">contact.rjc21@gmail.com</span>
            <span className="text-gray-600 group-hover:text-accent transition-colors">→</span>
          </div>
        </a>
        
        <a href="https://github.com/rjc2106" target="_blank" rel="noreferrer" className="group flex flex-col sm:flex-row justify-between sm:items-center py-8 border-b border-white/10 hover:border-accent transition-all hover:pl-4">
          <span className="font-mono text-accent text-xs mb-2 sm:mb-0">github</span>
          <div className="flex items-center gap-4">
            <span className="font-mono text-lg group-hover:text-white transition-colors">github.com/rjc2106</span>
            <span className="text-gray-600 group-hover:text-accent transition-colors">→</span>
          </div>
        </a>

        <a href="https://linkedin.com/in/rohan-chakraborty-246920313" target="_blank" rel="noreferrer" className="group flex flex-col sm:flex-row justify-between sm:items-center py-8 border-b border-white/10 hover:border-accent transition-all hover:pl-4">
          <span className="font-mono text-accent text-xs mb-2 sm:mb-0">linkedin</span>
          <div className="flex items-center gap-4">
            <span className="font-mono text-lg group-hover:text-white transition-colors">/in/rohan-chakraborty</span>
            <span className="text-gray-600 group-hover:text-accent transition-colors">→</span>
          </div>
        </a>
      </div>
    </div>
  )
}