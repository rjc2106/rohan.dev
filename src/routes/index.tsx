import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

function Home() {
  return (
    <div className="flex flex-col justify-center min-h-[70vh] animate-fade-in">
      <div className="flex items-center gap-3 mb-6 font-mono text-sm opacity-80">
        <span className="w-2 h-2 rounded-full bg-[var(--accent-color)] animate-pulse"></span>
        <span className="text-[var(--accent-color)]">Open to remote roles</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
        Rohan <br />
        <span className="text-[var(--accent-color)]">Chakraborty.</span>
      </h1>
      
      <p className="text-xl md:text-2xl font-mono opacity-90 max-w-2xl mb-6">
        AI & Backend Engineer — building LLM-powered systems & resilient backend architectures.
      </p>
      
      <p className="text-base opacity-70 max-w-xl mb-12 leading-relaxed">
        Specializing in scalable RAG pipelines, agentic workflows, and asynchronous FastAPI services. Bridging experimental AI with production-ready software.
      </p>
      
      <div className="flex flex-wrap gap-4 font-mono text-sm">
        <a href="/work" className="bg-[var(--accent-color)] text-black px-6 py-3 font-bold hover:bg-white transition-colors">
          view work →
        </a>
        <a href="/contact" className="border border-white/20 px-6 py-3 hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-colors">
          get in touch
        </a>
      </div>
    </div>
  );
}