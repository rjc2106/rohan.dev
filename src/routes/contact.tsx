import { createRoute } from '@tanstack/react-router'
import { Route as rootRoute } from './__root'

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
})

function Contact() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 max-w-2xl">
      <div className="space-y-4">
        <span className="font-mono text-accent text-sm">~/contact</span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get in touch</h1>
        <p className="text-gray-400">Let's connect and explore how I can help with your next project.</p>
      </div>

      <div className="space-y-6">
        <div className="border border-white/10 bg-[#0d0d0d] p-8 hover:border-accent/30 transition-colors">
          <h3 className="font-mono text-accent text-sm mb-2">Email</h3>
          <a href="mailto:contact.rjc21@gmail.com" className="text-lg hover:text-accent transition-colors">
            contact.rjc21@gmail.com
          </a>
        </div>

        <div className="border border-white/10 bg-[#0d0d0d] p-8 hover:border-accent/30 transition-colors">
          <h3 className="font-mono text-accent text-sm mb-2">GitHub</h3>
          <a href="https://github.com/rjc2106" target="_blank" rel="noreferrer" className="text-lg hover:text-accent transition-colors">
            github.com/rjc2106
          </a>
        </div>

        <div className="border border-white/10 bg-[#0d0d0d] p-8 hover:border-accent/30 transition-colors">
          <h3 className="font-mono text-accent text-sm mb-2">LinkedIn</h3>
          <a href="https://linkedin.com/in/rohan-chakraborty-246920313" target="_blank" rel="noreferrer" className="text-lg hover:text-accent transition-colors">
            linkedin.com/in/rohan-chakraborty-246920313
          </a>
        </div>
      </div>
    </div>
  )
}
