import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

function About() {
  return (
    <div className="flex flex-col min-h-screen py-12 animate-fade-in">
      <div className="mb-16">
        <div className="text-[var(--accent-color)] font-mono text-sm mb-4">~/about</div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">About</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6 text-lg opacity-80 leading-relaxed">
            <p>
              I'm a Computer Science & Engineering student (2022-2026) at Swami Vivekananda University, specializing in AI and Machine Learning.
            </p>
            <p>
              I build AI-powered applications and backend systems using Python, FastAPI, and modern LLM frameworks — RAG pipelines, speech-to-text systems, and automation tools.
            </p>
            <p>
              I'm currently available for remote engagements where I can ship production-grade backend and AI infrastructure.
            </p>
          </div>
          
          <div className="space-y-6 font-mono text-sm">
            <div>
              <div className="text-[var(--accent-color)] mb-1">location</div>
              <div className="opacity-80">Kolkata, India</div>
            </div>
            <div>
              <div className="text-[var(--accent-color)] mb-1">status</div>
              <div className="opacity-80">Open to remote part-time & full-time roles</div>
            </div>
            <div>
              <div className="text-[var(--accent-color)] mb-2">resume</div>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block border border-white/20 px-4 py-2 hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-colors">
                download.pdf ↓
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <div className="text-[var(--accent-color)] font-mono text-sm mb-4">~/education</div>
        <h2 className="text-2xl font-bold tracking-tight mb-6">Education</h2>
        
        <div className="border border-white/10 bg-[#0a0a0a] p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-mono font-bold">B.Tech — Computer Science & Engineering (AI & ML)</h3>
            <span className="font-mono text-xs opacity-50">2022 - 2026</span>
          </div>
          <div className="opacity-70">Swami Vivekananda University</div>
        </div>
      </div>

      <div>
        <div className="text-[var(--accent-color)] font-mono text-sm mb-4">~/skills</div>
        <h2 className="text-2xl font-bold tracking-tight mb-6">Tech stack</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          <div className="bg-[var(--bg-color)] p-6">
            <div className="text-[var(--accent-color)] font-mono text-sm mb-4">languages</div>
            <div className="flex flex-wrap gap-2 font-mono text-xs opacity-80">
              <span className="border border-white/20 px-2 py-1">Python</span>
              <span className="border border-white/20 px-2 py-1">SQL</span>
              <span className="border border-white/20 px-2 py-1">Java</span>
            </div>
          </div>
          
          <div className="bg-[var(--bg-color)] p-6">
            <div className="text-[var(--accent-color)] font-mono text-sm mb-4">ai / ml</div>
            <div className="flex flex-wrap gap-2 font-mono text-xs opacity-80">
              <span className="border border-white/20 px-2 py-1">LLM Integration</span>
              <span className="border border-white/20 px-2 py-1">RAG</span>
              <span className="border border-white/20 px-2 py-1">Speech-to-Text</span>
              <span className="border border-white/20 px-2 py-1">LangChain</span>
              <span className="border border-white/20 px-2 py-1">OpenCV</span>
            </div>
          </div>
          
          <div className="bg-[var(--bg-color)] p-6">
            <div className="text-[var(--accent-color)] font-mono text-sm mb-4">data</div>
            <div className="flex flex-wrap gap-2 font-mono text-xs opacity-80">
              <span className="border border-white/20 px-2 py-1">NumPy</span>
              <span className="border border-white/20 px-2 py-1">Pandas</span>
              <span className="border border-white/20 px-2 py-1">Vector Search</span>
            </div>
          </div>
          
          <div className="bg-[var(--bg-color)] p-6">
            <div className="text-[var(--accent-color)] font-mono text-sm mb-4">tools</div>
            <div className="flex flex-wrap gap-2 font-mono text-xs opacity-80">
              <span className="border border-white/20 px-2 py-1">Git</span>
              <span className="border border-white/20 px-2 py-1">Docker</span>
              <span className="border border-white/20 px-2 py-1">Linux</span>
              <span className="border border-white/20 px-2 py-1">Jupyter</span>
              <span className="border border-white/20 px-2 py-1">VS Code</span>
            </div>
          </div>
          
          <div className="bg-[var(--bg-color)] p-6 md:col-span-2">
            <div className="text-[var(--accent-color)] font-mono text-sm mb-4">backend & foundations</div>
            <div className="flex flex-wrap gap-2 font-mono text-xs opacity-80">
              <span className="border border-white/20 px-2 py-1">FastAPI</span>
              <span className="border border-white/20 px-2 py-1">REST APIs</span>
              <span className="border border-white/20 px-2 py-1">System Automation</span>
              <span className="border border-white/20 px-2 py-1">Microservices</span>
              <span className="border border-white/20 px-2 py-1">Data Structures</span>
              <span className="border border-white/20 px-2 py-1">Algorithms</span>
              <span className="border border-white/20 px-2 py-1">OOP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}