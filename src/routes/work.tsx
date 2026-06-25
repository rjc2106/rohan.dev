import { createRoute } from '@tanstack/react-router'
import { Route as rootRoute } from './__root'
import { projects } from '../data/projects'

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/work',
  component: Work,
})

function Work() {
  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      <div className="space-y-4">
        <span className="font-mono text-accent text-sm">~/work</span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Selected work</h1>
        <p className="text-gray-400">A look at the AI and backend systems I've built recently. Source on <a href="https://github.com/rjc2106" target="_blank" rel="noreferrer" className="text-accent hover:underline">GitHub</a>.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border border-white/10 bg-[#0d0d0d] p-8 hover:border-accent/50 group transition-colors flex flex-col">
            <div className="flex justify-between items-center font-mono text-xs text-gray-500 mb-6">
              <span><span className="text-accent">{project.id}</span> / {project.category}</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{project.title}</h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">{project.desc}</p>
            <ul className="space-y-3 mb-8 flex-grow">
              {project.points.map((point, idx) => (
                <li key={idx} className="text-sm text-gray-400 flex gap-2">
                  <span className="text-accent mt-0.5">→</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 font-mono text-[10px]">
              {project.tags.map(tag => (
                <span key={tag} className="border border-white/10 px-2 py-1 text-gray-500 group-hover:border-accent/30 transition-colors">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
