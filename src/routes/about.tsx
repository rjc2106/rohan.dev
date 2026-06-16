import { createRoute } from '@tanstack/react-router'
import { Route as rootRoute } from './__root'

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

function About() {
  return (
    <div className="space-y-24 animate-in fade-in duration-700">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6">
          <span className="font-mono text-accent text-sm">~/about</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight pb-4">About</h1>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>I am an AI & Backend Engineer specializing in LLM-powered systems and resilient backend architecture.</p>
            <p>My focus is on bridging the gap between experimental AI models and production-ready software. I architect scalable RAG pipelines, develop agentic workflows using LangChain, and build robust, asynchronous APIs using FastAPI.</p>
            <p>I am currently open to remote engagements where I can help teams ship high-performance AI features and resilient backend services.</p>
          </div>
        </div>
        
        <div className="space-y-8 pt-12 md:pt-20 border-l border-white/5 pl-8">
          <div>
            <h3 className="font-mono text-accent text-xs mb-2">location</h3>
            <p className="text-sm">Kolkata, India</p>
          </div>
          <div>
            <h3 className="font-mono text-accent text-xs mb-2">status</h3>
            <p className="text-sm text-gray-400">Open to remote opportunities for Q3/Q4 2026</p>
          </div>
          <div>
            <h3 className="font-mono text-accent text-xs mb-2">email</h3>
            <a href="mailto:contact.rjc21@gmail.com" className="text-sm text-accent hover:underline">contact.rjc21@gmail.com</a>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <span className="font-mono text-accent text-sm">~/skills</span>
        <h2 className="text-3xl font-bold">Tech Stack</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          <div className="bg-[#0a0a0a] p-8 space-y-4">
            <h3 className="font-mono text-accent text-xs">Languages</h3>
            <div className="flex flex-wrap gap-2">
              <span className="border border-white/10 px-3 py-1 text-sm font-mono text-gray-300">Python</span>
              <span className="border border-white/10 px-3 py-1 text-sm font-mono text-gray-300">TypeScript</span>
              <span className="border border-white/10 px-3 py-1 text-sm font-mono text-gray-300">SQL</span>
              <span className="border border-white/10 px-3 py-1 text-sm font-mono text-gray-300">Java</span>
            </div>
          </div>
          
          <div className="bg-[#0a0a0a] p-8 space-y-4">
            <h3 className="font-mono text-accent text-xs">AI & Data</h3>
            <div className="flex flex-wrap gap-2">
              <span className="border border-white/10 px-3 py-1 text-sm font-mono text-gray-300">LLM Integration</span>
              <span className="border border-white/10 px-3 py-1 text-sm font-mono text-gray-300">RAG</span>
              <span className="border border-white/10 px-3 py-1 text-sm font-mono text-gray-300">LangChain</span>
              <span className="border border-white/10 px-3 py-1 text-sm font-mono text-gray-300">Vector DBs</span>
              <span className="border border-white/10 px-3 py-1 text-sm font-mono text-gray-300">NumPy</span>
            </div>
          </div>

          <div className="bg-[#0a0a0a] p-8 space-y-4">
            <h3 className="font-mono text-accent text-xs">Backend & Architecture</h3>
            <div className="flex flex-wrap gap-2">
              <span className="border border-white/10 px-3 py-1 text-sm font-mono text-gray-300">FastAPI</span>
              <span className="border border-white/10 px-3 py-1 text-sm font-mono text-gray-300">REST APIs</span>
              <span className="border border-white/10 px-3 py-1 text-sm font-mono text-gray-300">Microservices</span>
            </div>
          </div>

          <div className="bg-[#0a0a0a] p-8 space-y-4">
            <h3 className="font-mono text-accent text-xs">Infrastructure & Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="border border-white/10 px-3 py-1 text-sm font-mono text-gray-300">Docker</span>
              <span className="border border-white/10 px-3 py-1 text-sm font-mono text-gray-300">Linux</span>
              <span className="border border-white/10 px-3 py-1 text-sm font-mono text-gray-300">uv</span>
              <span className="border border-white/10 px-3 py-1 text-sm font-mono text-gray-300">React</span>
              <span className="border border-white/10 px-3 py-1 text-sm font-mono text-gray-300">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-white/5">
        <span className="font-mono text-accent text-sm">~/education</span>
        <h2 className="text-3xl font-bold">Education</h2>
        <div className="border border-white/10 bg-[#0d0d0d] p-8 max-w-2xl hover:border-accent/30 transition-colors">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-mono text-lg text-gray-200">B.Tech — Computer Science & Engineering (AI & ML)</h3>
            <span className="font-mono text-xs text-gray-500">2022 - 2026</span>
          </div>
          <p className="text-gray-400">Swami Vivekananda University</p>
        </div>
      </section>
    </div>
  )
}