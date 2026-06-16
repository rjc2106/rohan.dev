import { createRoute, Link } from '@tanstack/react-router'
import { Route as rootRoute } from './__root'

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

function Home() {
  return (
    <div className="space-y-32 animate-in fade-in duration-700">
      <section className="space-y-8 pt-10">
        <div className="flex items-center gap-2 font-mono text-xs text-accent">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(190,242,100,0.8)]"></span>
          Accepting remote opportunities for Q3/Q4 2026
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.1]">
          Rohan <br />
          <span className="text-accent">Chakraborty.</span>
        </h1>
        
        <div className="max-w-2xl space-y-4">
          <p className="text-xl md:text-2xl text-gray-300">
            AI & Backend Engineer — specializing in LLM-powered systems & resilient backend architecture.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            Based in Kolkata, India. I bridge the gap between experimental AI models and production-ready software solutions. Currently building RAG pipelines, agentic workflows, and asynchronous APIs.
          </p>
        </div>

        <div className="flex items-center gap-4 font-mono text-sm pt-4">
          <Link to="/work" className="bg-accent text-black px-6 py-3 font-bold hover:bg-white transition-colors">
            view work →
          </Link>
          <Link to="/contact" className="border border-white/20 px-6 py-3 hover:border-accent hover:text-accent transition-colors">
            get in touch
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-gray-500 pt-12 border-t border-white/5">
          <span className="text-accent">$ stack</span>
          <span className="hover:text-white transition-colors">Python</span>
          <span className="hover:text-white transition-colors">FastAPI</span>
          <span className="hover:text-white transition-colors">LangChain</span>
          <span className="hover:text-white transition-colors">Docker</span>
          <span className="hover:text-white transition-colors">React</span>
          <span className="hover:text-white transition-colors">Vector DBs</span>
        </div>
      </section>
    </div>
  )
}