import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Javier Solana Huertas",
  initials: "JS",
  location: "Ciudad Real, Spain, CET",
  locationLink: "https://www.google.com/maps/place/Ciudad+Real",
  about:
    "Product-minded Software Engineer · Platform Engineering · Developer Experience · AI · Distributed Systems",
  summary:
    "Senior Software Engineer with 20+ years of experience building distributed systems, developer platforms, and developer tooling across mobility, healthcare, and gambling. Experience spans Platform Engineering, Developer Experience, cloud-native architectures, observability, event-driven systems, and AI-powered developer tooling, with a strong focus on improving how engineering teams build, deploy, and operate software.",
  avatarUrl: "https://avatars.githubusercontent.com/u/6834093?v=4",
  personalWebsiteUrl: "https://jsolana.github.io",
  contact: {
    email: "javiersolanahuertas@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jsolana",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/javier-solana-huertas/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Universidad de Castilla-La Mancha",
      degree:
        "Technical Engineering in Computer Systems (Software Engineering)",
      start: "2002",
      end: "2007",
    },
    {
      school: "Universidad de Castilla-La Mancha",
      degree: "Expert in Video Game Development — Grade: Outstanding (9/10)",
      start: "2012",
      end: "2013",
    },
    {
      school: "Cloud Native Computing Foundation",
      degree: "Certified Kubernetes Application Developer (CKAD)",
      start: "2020",
      end: "2020",
    },
    {
      school: "Universidad de Castilla-La Mancha",
      degree: "Master's in Artificial Intelligence",
      start: "2026",
      end: "Present",
    },
  ],
  work: [
    {
      company: "Cabify",
      link: "https://cabify.com",
      badges: [
        "Remote",
        "Go",
        "Kubernetes",
        "ArgoCD",
        "Platform Engineering",
        "Developer Experience",
        "AI",
      ],
      title: "Senior Software Engineer — Developer Experience (DevX)",
      start: "2024",
      end: null,
      description:
        "Leading the conceptualisation and evolution of the internal developer platform, automating and streamlining the full software development lifecycle — from local development to production.",
      highlights: [
        "Reduced deployment times by 100x through ArgoCD-based rollout optimisations",
        "Cut time-to-first-merge for new engineers by streamlining scaffolding, CI/CD, and onboarding tooling",
        "Established platform engineering standards and best practices adopted across 40+ engineering teams and 250+ engineers",
        "Built and contributed to internal tools based on AI agents, MCP, skills systems, and RAG-based architectures to enhance developer experience.",
      ],
    },
    {
      company: "Cabify",
      link: "https://cabify.com",
      badges: [
        "Remote",
        "Go",
        "Elixir",
        "Microservices",
        "Business",
      ],
      title: "Senior Software Engineer — Business",
      start: "2022",
      end: "2023",
      description:
        "Designed and delivered a new enterprise mobility solution for group and team transportation, extending the company's B2B portfolio.",
      highlights: [
        "Drove 10x growth in B2B business volume through the new group transportation product",
        "Collaborated cross-functionally with product, design, and operations to define service boundaries",
        "Improved system performance and reliability through event-driven design patterns",
      ],
    },
    {
      company: "R. Franco / Mediatech",
      link: "https://github.com/rfrancotechnologies",
      badges: [
        "On Site",
        ".NET / C#",
        "Event-Driven Microservices",
        "Observability",
      ],
      title: "Senior Software Engineer → Software Architect",
      start: "2017",
      end: "2022",
      description:
        "Shaped the technical direction of the IRIS gambling platform across .NET/C#, event-driven architecture, observability, CI/CD, and security.",
      highlights: [
        "Built and owned the observability stack: Grafana, Loki, Prometheus, Jaeger, and Elasticsearch on Docker",
        "Established CI/CD pipelines and test automation including OWASP and penetration testing",
        "Delivered performance and revenue improvements across core product lines",
        "Ensured compliance with gambling regulations across multiple markets",
        "Led integrations with third-party providers including sportsbooks and game suppliers",
      ],
    },
    {
      company: "Indra / Soluziona",
      link: "https://www.indracompany.com",
      badges: [
        "On Site",
        "Java",
        "Spring",
        "Angular",
        "Android",
        "HL7",
        "FHIR",
      ],
      title: "Software Developer → Senior Software Engineer → R&D Lead",
      start: "2006",
      end: "2017",
      description:
        "11 years delivering healthcare and public administration systems for regional governments and national health services, growing from developer to R&D lead.",
      highlights: [
        "Built and maintained IANUS, the Electronic Health Record integration platform for SERGAS (Galician Health Service)",
        "Led development of HCEMOV, a mobile healthcare solution for clinical mobility on Android using Spring Framework and Cordova",
        "Designed the MyMed health data platform with Angular, Spring Boot, and NoSQL, supporting highly interoperable healthcare models",
        "Implemented HL7, FHIR, DICOM, openEHR, and IHE integrations across multiple healthcare systems",
      ],
    },
  ],
  skills: [
     // Engineering & Architecture
    
    "Software Architecture",
    "Microservices",
    "Event-Driven Architecture",
    "Technical Leadership",
    "System Design",
    "Platform Engineering",
    "Product-minded",
    "Chaos Engineering",
    
    // AI & Developer Tooling

    "LLMs / AI Agents / RAG / MCP",
    "Machine Learning",
    "LangChain",
    "Vector Databases",
    "Ollama",
    
    // Languages
    
    "Go",
    "Rust",
    "Elixir",
    "Python",
    "TypeScript",
    "Bash",
    "Java / Spring Boot",
    ".NET / C#",
    "Langchain",
    "Security / OWASP",
    
    // Architecture & Messaging
    
    "Apache Kafka / CDC",
    "gRPC / REST / GraphQL / AsyncAPI",
    
    // Infrastructure & Cloud Native
    
    "Kubernetes / Helm",
    "ArgoCD / FluxCD",
    "Docker",
    "AWS",
    "CI/CD",
    "Backstage",
    
    // Observability
    
    "Grafana / Loki / Prometheus / Cortex",
    "OpenTelemetry",
    
    // Data
    
    "SQL / NoSQL",
    
  ],
  projects: [
    {
      title: "Genetix",
      techStack: ["Elixir", "Genetic Algorithms"],
      description:
        "Framework to run genetic algorithms in Elixir. Includes a vehicle route problem solver.",
      link: {
        label: "github.com/jsolana/genetix",
        href: "https://github.com/jsolana/genetix",
      },
    },
    {
      title: "Outbox",
      techStack: ["Elixir", "Transactional Outbox"],
      description:
        "Library providing the transactional outbox pattern for Elixir applications.",
      link: {
        label: "github.com/jsolana/outbox",
        href: "https://github.com/jsolana/outbox",
      },
    },
    {
      title: ".NET Observability & Event-Driven Libraries",
      techStack: [".NET / C#", "Kafka", "Observability", "Event-Driven"],
      description:
        "Open-source .NET libraries for event-driven architectures and observability: Kafka instrumentation, Zipkin tracing, resilient REST clients, and persistent retry patterns.",
      link: {
        label: "github.com/rfrancotechnologies",
        href: "https://github.com/rfrancotechnologies",
      },
    },
    {
      title: "AI Assistant for Backstage (RAG + TechDocs)",
      techStack: [
        "Python",
        "FastAPI",
        "LangChain",
        "OpenAI",
        "FAISS",
        "RAG",
        "Backstage"
      ],
      description:
        "AI-powered assistant for Backstage built using a Retrieval-Augmented Generation (RAG) architecture. It enables conversational querying over technical documentation (TechDocs) using embeddings, semantic search, and a FAISS vector database.",
      link: {
        label: "github.com/jsolana/backstage-ai-assistant",
        href: "https://github.com/jsolana/backstage-ai-assistant",
      },
    },
    {
      title: "Backstage CLI & MCP Server",

      techStack: [
      "Go",
      "CLI",
      "MCP",
      "Backstage"
      ],

      description:
      "A CLI and MCP server that gives developers and AI assistants fast, unified access to Backstage from the terminal or any MCP-compatible tool.",

      link: {
      label: "github.com/jsolana/backctl",
      href: "https://github.com/jsolana/backctl",
      },
    },

    {
      title: "n8n Node for Backstage",

      techStack: [
        "TypeScript",
        "n8n",
        "Backstage",
        "API",
        "Workflow Automation"
      ],

      description:
        "Custom n8n node for integrating Backstage (backctl) into automated workflows, enabling Backstage operations to be orchestrated directly from n8n.",

      link: {
        label: "github.com/jsolana/n8n-nodes-backstage",
        href: "https://github.com/jsolana/n8n-nodes-backstage",
      },
    },


    {
      title: "Reinforcement Learning Fundamentals",
      techStack: [
        "Python",
        "Gymnasium",
        "ALE-py",
        "NumPy",
        "Matplotlib",
        "PyTorch",
        "Reinforcement Learning"
      ],
      description:
        "Educational project focused on the fundamentals of Reinforcement Learning. It explores core concepts such as Markov Decision Processes (MDPs), policies, value functions, and Q-learning through classic environments like Blackjack and Pong.",
      link: {
        label: "github.com/jsolana/reinforcement-learning",
        href: "https://github.com/jsolana/reinforcement-learning",
      },
    },
    {
      title: "Point & Click Toolkit (pctk)",
      techStack: [
        "Go",
        "Game Development",
        "SCUMM-inspired",
        "Adventure Game Engine"
      ],
      description:
        "Work-in-progress toolkit for building Point & Click adventure games. Inspired by classic SCUMM-style engines, it provides foundational tools and systems to design and structure narrative-driven interactive environments.",
      link: {
        label: "github.com/retroverb/rvrt-win",
        href: "https://github.com/retroverb/rvrt-win",
      },
    },
  ],
} as const;
