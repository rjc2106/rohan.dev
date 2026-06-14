import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/work',
  component: Work,
});

function Work() {
  return (
    <div className="flex flex-col min-h-screen py-12 animate-fade-in">
      <div className="mb-16">
        <div className="text-[var(--accent-color)] font-mono text-sm mb-4">~/work</div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Selected work</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* P1 */}
        <div className="border border-white/10 bg-[#0a0a0a] p-6 flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Multi-Modal Intelligent Document Processing API</h2>
          <div className="opacity-70 text-sm mb-8 flex-grow space-y-3">
            <p>→ Architected an asynchronous FastAPI backend for document-to-markdown conversion, extracting structured data from complex PDFs, images, and office documents using Docling.</p>
            <p>→ Optimized for deployment using Docker and uv dependency management to ensure environment parity and scalable performance.</p>
            <p>→ Integrated a modular pipeline enabling seamless Vision-Language Model (VLM) integration for advanced document analysis.</p>
          </div>
        </div>

        {/* P2 */}
        <div className="border border-white/10 bg-[#0a0a0a] p-6 flex flex-col">
          <h2 className="text-2xl font-bold mb-4">ApexCoach AI (Agentic Fitness Architect)</h2>
          <div className="opacity-70 text-sm mb-8 flex-grow space-y-3">
            <p>→ Engineered a custom agent workflow using LangChain to manage long-term memory, enabling the AI to recall user progress and aesthetic goals over multi-month training cycles.</p>
            <p>→ Integrated a multi-modal analysis engine parsing raw workout logs to provide evidence-based, data-driven recommendations.</p>
          </div>
        </div>

        {/* P3 */}
        <div className="border border-white/10 bg-[#0a0a0a] p-6 flex flex-col">
          <h2 className="text-2xl font-bold mb-4">AI Customer Support Chatbot (RAG)</h2>
          <div className="opacity-70 text-sm mb-8 flex-grow space-y-3">
            <p>→ Designed a modular backend for swappable LLMs and vector stores to power a highly accurate RAG pipeline.</p>
            <p>→ Built robust APIs for continuous document ingestion and low-latency query processing.</p>
            <p>→ Implemented vector search protocols to optimize retrieval accuracy and minimize LLM hallucination.</p>
          </div>
        </div>

        {/* P4 */}
        <div className="border border-white/10 bg-[#0a0a0a] p-6 flex flex-col">
          <h2 className="text-2xl font-bold mb-4">AI Meeting Notes & Task Automation</h2>
          <div className="opacity-70 text-sm mb-8 flex-grow space-y-3">
            <p>→ Engineered an automated data pipeline utilizing speech-to-text transcription for meeting audio.</p>
            <p>→ Developed extraction protocols using LLM APIs to autonomously isolate key decisions and generate actionable summaries.</p>
          </div>
        </div>

        {/* P5 */}
        <div className="border border-[var(--accent-color)]/30 bg-[#0a0a0a] p-6 flex flex-col">
          <h2 className="text-2xl font-bold text-[var(--accent-color)] mb-4">High-Performance Portfolio (hellorohan.xyz)</h2>
          <div className="opacity-70 text-sm mb-8 flex-grow space-y-3">
            <p>→ Engineered a custom, client-side routed web application using React, TanStack Router, and Vite, prioritizing SEO performance and low-latency interaction.</p>
            <p>→ Designed a token-based design system using Tailwind CSS, implementing native dark-mode functionality and fully responsive grid architectures.</p>
            <p>→ Architected for maintainability, enabling rapid updates to project showcases while ensuring consistent UI/UX across all device form factors.</p>
          </div>
        </div>
      </div>
    </div>
  );
}