import { createRoute } from '@tanstack/react-router'
import { Route as rootRoute } from './__root'

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/work',
  component: Work,
})

const projects = [
  {
    id: "01",
    category: "Document Processing API",
    title: "Multi-Modal Intelligent Document API",
    desc: "Architected an asynchronous FastAPI backend for document-to-markdown conversion, extracting structured data from complex PDFs, images, and office documents using Docling.",
    points: [
      "Optimized for deployment using Docker and uv dependency management to ensure environment parity and scalable performance across cloud infrastructure.",
      "Integrated a modular pipeline design enabling seamless integration of diverse Vision-Language Models (VLMs) for advanced document analysis."
    ],
    tags: ["PYTHON", "FASTAPI", "DOCKER", "DOCLING"]
  },
  {
    id: "02",
    category: "Agentic Fitness Architect",
    title: "ApexCoach AI",
    desc: "Engineered a custom agent workflow using LangChain to manage long-term memory, allowing the AI to recall past progress, injury recovery, and aesthetic goals over multi-month training cycles.",
    points: [
      "Integrated a multi-modal analysis engine parsing raw workout log data and nutritional intake to identify plateaus and provide actionable recommendations.",
      "Deployed a secure, scalable architecture utilizing Docker to facilitate real-time interaction and automated generation of progress reports."
    ],
    tags: ["PYTHON", "LANGCHAIN", "DOCKER", "AI AGENTS"]
  },
  {
    id: "03",
    category: "RAG System",
    title: "AI Customer Support Chatbot",
    desc: "Designed a modular backend architecture for swappable LLMs and vector stores to power a highly accurate Retrieval-Augmented Generation pipeline.",
    points: [
      "Built robust backend APIs for continuous document ingestion, data chunking, and low-latency query processing.",
      "Implemented advanced vector search protocols to optimize document retrieval and minimize LLM hallucination rates."
    ],
    tags: ["PYTHON", "FASTAPI", "VECTOR DB", "LLMs"]
  },
  {
    id: "04",
    category: "Automation System",
    title: "AI Meeting Notes & Task Automation",
    desc: "Engineered an automated data pipeline utilizing speech-to-text transcription to convert raw meeting audio into structured, searchable text.",
    points: [
      "Developed extraction protocols using LLM APIs to autonomously isolate key decisions, summarize context, and assign actionable items from conversational data."
    ],
    tags: ["PYTHON", "SPEECH-TO-TEXT", "LLM APIs"]
  },
  {
    id: "05",
    category: "Frontend Infrastructure",
    title: "High-Performance Developer Portfolio",
    desc: "Built a custom, client-side routed web application using React, TanStack Router, and Vite for optimal performance and SEO.",
    points: [
      "Designed a scalable, token-based design system using Tailwind CSS, implementing native dark mode functionality and highly responsive grid architectures."
    ],
    tags: ["REACT", "TYPESCRIPT", "TAILWIND CSS", "VITE"]
  }
]

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
          <div key={project.id} className="border border-white/10 bg-[#0d0d0d] p-8 hover:border-accent/50 group-hover:shadow-[0_0_15px_rgba(190,242,100,0.1)] transition-all flex flex-col group">
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