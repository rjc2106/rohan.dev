export interface Project {
  id: string
  category: string
  title: string
  desc: string
  points: string[]
  tags: string[]
}

export const projects: Project[] = [
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
