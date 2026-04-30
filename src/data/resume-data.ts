import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Javier Solana",
  initials: "JS",
  location: "Ciudad Real, Spain, CET",
  locationLink: "https://www.google.com/maps/place/Ciudad+Real",
  about:
    "20+ years building distributed systems, developer platforms, and high-stakes products across mobility, healthcare, and gambling.",
  summary:
    "I believe great software starts with great engineering foundations. Over 20 years I've gone from building healthcare and gambling systems to designing the platforms that let other engineers do their best work. Currently at Cabify, I focus on reducing friction across the entire development lifecycle — from the first commit to production — for 200+ engineers across 30+ teams.",
  avatarUrl: "https://avatars.githubusercontent.com/u/6834093?v=4",
  personalWebsiteUrl: "https://jsolana.github.io",
  contact: {
    email: "javiersolanahuertas@gmail.com",
    tel: "+34678574560",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/jsolana",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/javier-solana-huertas-1156a99a/",
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
        "DevX",
      ],
      title: "Senior Software Engineer — Developer Experience (DevX)",
      start: "2024",
      end: null,
      description:
        "Leading the conceptualisation and evolution of the internal developer platform, automating and streamlining the full software development lifecycle — from local development to production.",
      highlights: [
        "Reduced deployment times by 100x through ArgoCD-based rollout optimisations",
        "Cut time-to-first-merge for new engineers by streamlining scaffolding, CI/CD, and onboarding tooling",
        "Established platform engineering standards and best practices adopted across 30+ engineering teams and 200+ engineers",
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
    // Current focus
    "Platform Engineering",
    "LLMs / AI Agents / MCP / Skills / ML",
    "Chaos Engineering",
    // Languages
    "Go",
    "Rust",
    "Elixir",
    "Python",
    "TypeScript",
    "Bash",
    "Java / Spring Boot",
    ".NET / C#",
    "Security / OWASP",
    // Architecture & Messaging
    "Microservices",
    "Event-Driven Architecture",
    "Apache Kafka / CDC",
    "gRPC / REST / GraphQL / AsyncAPI",
    // Infrastructure & Cloud Native
    "Kubernetes / Helm",
    "ArgoCD / FluxCD",
    "Docker",
    "CI/CD",
    "Backstage",
    // Observability
    "Grafana / Loki / Prometheus / Cortex",
    "OpenTelemetry",
    // Data
    "SQL / NoSQL",
    "Vector Databases",
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
  ],
} as const;
