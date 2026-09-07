// Shared identity, links, work history, projects, and writing used across the site.
export const site = {
  name: "Priyanshu Choudhary",
  firstName: "Priyanshu",
  handle: "priyanchew",
  url: "https://priyanchew.dev",
  title: "Priyanshu Choudhary | Engineer & builder",
  description: "I build AI agents and developer tools. Currently in the Founder’s office at OSVI. Core contributor to Agent Orchestrator. Previously started Orydle AI.",
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
    id: "osvi", name: "OSVI", role: "Founder’s office", period: "May 2026 to Present", logo: "/logos/osvi-logo.jpg",
    line: "Founder’s office. Chat agents, builder, evals.",
    paragraphs: ["In the Founder’s office at OSVI, I’ve been building Chat Agents, Conductor (our AI Agent Builder), and Agent Evals and simulations.", "For Chat Agents, I’ve added features, helped it handle a lot more usage, and worked on making it faster. I’ve also worked on tool libraries, MCP integrations, account and user lifecycle handling, and reliability across the product.", "Not done yet."],
    tags: "Chat Agents / Conductor / Evals / MCP", url: "https://osvi.ai", link: "Explore OSVI",
  },
  {
    id: "ao", name: "Agent Orchestrator", role: "Core contributor · Open source", period: "Mar 2026 to Present", logo: "/logos/agent-orchestrator.svg",
    line: "Core contributor. Parallel coding agents.",
    paragraphs: ["I became a core contributor to Agent Orchestrator, which lets you run coding agents in parallel.", "I helped get it running on Windows and worked on terminal and session reliability, local integrations, and validation tools. That meant fixing things in the CLI, dashboard, and runtime.", "I still contribute, though these days it’s mostly outside the code."],
    tags: "Developer tools / Agent orchestration / Reliability", url: "https://aoagents.dev/", link: "Explore Agent Orchestrator",
  },
  {
    id: "orydle", name: "Orydle AI", role: "Founder & engineer", period: "Aug 2025 to Apr 2026", logo: "/logos/orydle-brandmark.png",
    line: "My first startup. Built while I was in college.",
    paragraphs: ["I started Orydle in college when LLMs made the ideas I had feel doable. I built Krum to coordinate coding agents with GitHub, CI/CD, and cloud infrastructure. A lot of the work was figuring out how to split up tasks, recover from failures, and keep agents working with the same context.", "The startup didn’t work out. Moving from college to Bengaluru changed how I thought about startups. After Orydle, I got involved in open source and joined OSVI."],
    tags: "AI agents / Developer tools / Product development",
  },
  {
    id: "carbon", name: "Carbon Crunch", role: "Software developer intern", period: "Jul 2024 to Jan 2025", logo: "/logos/carbon-crunch.png",
    line: "Built the early core product. Sustainability reporting.",
    paragraphs: ["I built the early core product at Carbon Crunch: tools for BRSR reporting and analysing sustainability data.", "I used NLP and web scraping to automate parts of the reporting process, and built tools to compare companies and track changes from year to year.", "Working with the founders got me interested in entrepreneurship. I saw how they ran the company and how much they cared about the problem. It made me want to try building something of my own."],
    tags: "Early product engineering / BRSR automation / Data tools", url: "https://www.carboncrunch.in/", link: "Explore Carbon Crunch",
  },
];

export const osviProjects = [
  { name: "Chat Agents", description: "Added features, scaled up to handle more usage, and made things faster as the product grew." },
  { name: "Conductor / AI Agent Builder", description: "Built the tools people use to create and configure agents with AI." },
  { name: "Agent Evals & simulations", description: "Built ways to test agents with simulated conversations before they talk to real users." },
  { name: "Tool libraries & MCP integrations", description: "Added reusable tools and MCP integrations so agents can work with other services." },
  { name: "Account & user lifecycle", description: "Worked on how the product handles accounts and users throughout their time on it." },
  { name: "Reliability & performance", description: "Fixed things that broke or slowed down across the product." },
];

export const projectFolders = [
  {
    id: "orydle", name: "Orydle", subtitle: "my startup", status: "archived", description: "Orydle took up most of my time in college. These are the two things I built there.",
    items: [
      { name: "Krum", description: "Coordinated coding agents with GitHub, CI/CD, and cloud infrastructure. Handled task delegation, recovery from failures, and shared context." },
      { name: "Collaborative system design", description: "A tool for designing systems together with LLMs. It could turn diagrams into code, track changes with Git, and show what changed visually." },
    ],
    footnote: "Orydle didn’t work out, but I learned a lot building it.",
  },
  {
    id: "osvi", name: "OSVI", subtitle: "what I’m building now", status: "in progress", description: "I work in the Founder’s office. Here’s some of what I’ve built and worked on so far.",
    items: osviProjects, footnote: "Not done yet.", href: "https://osvi.ai",
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
        "My take on NVIDIA OpenShell, OpenClaw, and why the rules for what an agent can do need to live outside the agent itself.",
    },
  ] as const;
