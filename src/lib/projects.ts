export interface Project {
  slug: string;
  title: string;
  category: "Web" | "Mobile" | "AI" | "Cloud";
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  longDescription: string;
  challenge: string;
  solution: string;
  architecture: string[]; // Steps of architecture
}

export const PROJECTS: Project[] = [
  {
    slug: "ai-support-agent",
    title: "AI Support Agent",
    category: "AI",
    description: "An autonomous AI agent integrated into a React web app to handle customer queries using LLMs.",
    tech: ["Next.js", "OpenAI", "Tailwind", "Supabase"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=500",
    liveUrl: "#",
    githubUrl: "#",
    longDescription: "A comprehensive AI-driven support agent designed to reduce support ticket volume. It automatically reads client documentation, performs search queries against database resources, and addresses user concerns in real-time.",
    challenge: "Handling unstructured user queries while preventing LLM hallucinations and keeping API costs low.",
    solution: "Implemented Retrieval-Augmented Generation (RAG) using Supabase pgvector to source matching context blocks, combined with prompt structuring to strictly limit model outputs to verified data.",
    architecture: [
      "User submits support query in chat UI",
      "Query converted into embeddings and compared against pgvector documents",
      "Relevant context injected into LLM prompt template",
      "Response synthesized and returned to client in real-time"
    ]
  },
  {
    slug: "e-commerce-mobile-app",
    title: "E-Commerce Mobile App",
    category: "Mobile",
    description: "A full-featured mobile shopping experience with real-time inventory and seamless payments.",
    tech: ["Flutter", "Firebase", "Stripe", "Dart"],
    image: "https://images.unsplash.com/photo-1512921207806-8b5dc47d5705?auto=format&fit=crop&q=80&w=800&h=500",
    liveUrl: "#",
    githubUrl: "#",
    longDescription: "A modern cross-platform shopping application built from scratch to support dynamic inventory management, user checkout pipelines, and complex localized payment processing.",
    challenge: "Synchronizing cart contents and checkout states between mobile clients and database when network connections drop.",
    solution: "Utilized Firestore's offline-first capabilities to sync transaction updates dynamically when network state switches.",
    architecture: [
      "Mobile client reads Firestore collection with local cache fallback",
      "Stripe payment session initialized via Firebase Cloud Functions",
      "Real-time checkout validation and receipt emailing",
      "Database updates push notification to warehouse managers"
    ]
  },
  {
    slug: "saas-dashboard",
    title: "SaaS Dashboard",
    category: "Web",
    description: "A high-performance analytics dashboard for SaaS businesses, featuring complex data visualizations.",
    tech: ["Vue.js", "Node.js", "PostgreSQL", "Chart.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500",
    liveUrl: "#",
    githubUrl: "#",
    longDescription: "A business performance visualization toolkit that aggregates financial data, subscription logs, and website analytics into responsive graphs and reporting dashboards.",
    challenge: "Aggregating millions of tracking logs and rendering charts on-the-fly without overloading database query processes.",
    solution: "Used Redis database caching for common query routines and created database indices to optimize SQL joins.",
    architecture: [
      "SaaS clients capture tracking telemetry",
      "Backend microservices process logs and cache analytics in Redis",
      "Frontend fetches REST API payload and updates reactive charts dynamically",
      "Report generation system compiles static PDF reviews overnight"
    ]
  }
];
