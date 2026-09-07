// Shared identity, links, work history, projects, and writing used across the site.
export const site = {
  name: "Priyanshu Choudhary",
  firstName: "Priyanshu",
  handle: "priyanchew",
  url: "https://priyanchew.dev",
  title: "Priyanshu Choudhary — Engineer & builder",
  description: "Engineer building AI products, agent systems, and developer tools. Currently in the Founder’s office at OSVI, a core contributor to Agent Orchestrator, and previously founder of Orydle AI.",
  tagline: "I build AI agents and the products around them.",
  location: "Bengaluru, India",
  avatar: "/priyanshu.jpg",
  email: "priyanshu6beta@gmail.com",
  repositoriesUrl: "https://github.com/priyanchew?tab=repositories",
  links: [
    { label: "X", href: "https://x.com/priyanchew" },
    { label: "GitHub", href: "https://github.com/priyanchew" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/priyanshu-choudhary9211" },
    { label: "Email", href: "mailto:priyanshu6beta@gmail.com" },
  ],
} as const;

export const work = [
  {
    id: "osvi", name: "OSVI", role: "Founder’s office", period: "May 2026 — Present", logo: "/logos/osvi-logo.jpg",
    line: "Founder’s office. Chat agents, builder, evals.",
    paragraphs: ["I build across OSVI’s product in the Founder’s office. So far, that includes Chat Agents—shipping features, scaling to heavy usage, and optimizing performance—along with Conductor / AI Agent Builder, Agent Evals, and simulations.", "I’ve also worked on tool libraries and MCP integrations, account and user lifecycle handling, and reliability and performance across the platform.", "And I’m not done yet."],
    tags: "Chat Agents / Conductor / Evals / MCP", url: "https://osvi.ai", link: "Explore OSVI",
  },
  {
    id: "ao", name: "Agent Orchestrator", role: "Core contributor · Open source", period: "Mar 2026 — Present", logo: "/logos/agent-orchestrator.svg",
    line: "Core contributor. Parallel coding agents.",
    paragraphs: ["I became a core contributor to Agent Orchestrator, an open-source system for running coding agents in parallel.", "I worked across Windows support, terminal and session reliability, local integrations, and validation harnesses, with product fixes spanning the CLI, dashboard, and runtime.", "I’m still involved today, contributing beyond code."],
    tags: "Developer tools / Agent orchestration / Reliability", url: "https://aoagents.dev/", link: "Explore Agent Orchestrator",
  },
  {
    id: "orydle", name: "Orydle AI", role: "Founder & engineer", period: "Aug 2025 — Apr 2026", logo: "/logos/orydle-brandmark.png",
    line: "My first startup. Built while I was in college.",
    paragraphs: ["I started Orydle once the things I wanted to build became possible. I built Krum: a control plane for coding agents, GitHub, CI/CD, and cloud infrastructure, with work on delegation, recovery, and shared context.", "The startup didn’t work out. Moving from college to Bengaluru changed how I thought about startups. I kept building, first through open source, then at OSVI."],
    tags: "Zero to one / Multi-agent systems / Product ownership",
  },
  {
    id: "carbon", name: "Carbon Crunch", role: "Software developer intern", period: "Jul 2024 — Jan 2025", logo: "/logos/carbon-crunch.png",
    line: "Built the early core product. Found my direction.",
    paragraphs: ["Carbon Crunch is where entrepreneurship first caught my attention. I built the early core product, working on BRSR reporting automation and sustainability data analysis from July 2024 to January 2025.", "That included an AI-driven reporting pipeline using NLP and web scraping, plus tools to compare companies and track changes year over year. Seeing the founders lead, handle the hard parts, and care so deeply about one problem made me want to build something of my own."],
    tags: "Early product engineering / BRSR automation / Data tools", url: "https://www.carboncrunch.in/", link: "Explore Carbon Crunch",
  },
];

export const osviProjects = [
  { name: "Chat Agents", description: "Shipped new features, scaled to heavy usage, and optimized performance as the platform grew." },
  { name: "Conductor / AI Agent Builder", description: "Built the AI-driven experience for creating and configuring agents." },
  { name: "Agent Evals & simulations", description: "Built tools to evaluate agents and simulate conversations before putting them to work." },
  { name: "Tool libraries & MCP integrations", description: "Expanded what agents can do through reusable tools and MCP integrations." },
  { name: "Account & user lifecycle", description: "Handled the account and user lifecycle across the platform." },
  { name: "Reliability & performance", description: "Worked across the product to make it more reliable and efficient." },
];

export const projectFolders = [
  {
    id: "orydle", name: "Orydle", subtitle: "the startup chapter", status: "archived", description: "I went all-in on my own startup while I was in college. The company didn’t work out. Here’s what I built inside it.",
    items: [
      { name: "Krum", description: "A control plane for coding agents, GitHub, CI/CD, and cloud infrastructure—with delegation, recovery, and shared context." },
      { name: "Collaborative system design", description: "An LLM-powered architecture tool with diagram-to-code generation, Git versioning, visual diffs, and real-time collaboration." },
    ],
    footnote: "The startup ended. The urge to build didn’t.",
  },
  {
    id: "osvi", name: "OSVI", subtitle: "the current rabbit hole", status: "in progress", description: "Founder’s office. Building across the product, from new agent capabilities to the systems that keep them running.",
    items: osviProjects, footnote: "And I’m not done yet.", href: "https://osvi.ai",
  },
];

export const writing = [
    {
      title: "OpenShell: Why NVIDIA is building Linux for the age of AI agents",
      homeTitle: "Why NVIDIA is building Linux for the age of AI agents",
      href: "https://medium.com/@priyanchew/openshell-why-nvidia-is-building-linux-for-the-age-of-ai-agents-29c4939ab47e",
      source: "Medium",
      publishedAt: "Mar 21, 2026",
      readTime: "10 min read",
      summary:
        "A security and governance take on NVIDIA OpenShell, OpenClaw, and why autonomous agent fleets need enforcement outside the agent process.",
    },
  ] as const;
