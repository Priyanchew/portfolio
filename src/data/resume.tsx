import type { ReactNode } from "react";
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileTextIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";

export const DATA = {
  name: "Priyanshu Choudhary",
  initials: "PC",
  url: "https://priyanchew.dev",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  description:
    "Final-year engineering student building AI agents and developer tooling. Founder at Orydle AI, working on Krum — a multi-agent orchestrator and control plane.",
  summary:
    "I'm a self-taught builder focused on AI agents, multi-agent orchestration, and developer tooling. Currently building Krum, a control plane sitting above GitHub, CI/CD, cloud infra, and coding agents, at Orydle AI. On the side, I'm shipping OSS in the agents space and contributing to the [agent-orchestrator](https://github.com/ComposioHQ/agent-orchestrator) repo by ComposioHQ. Final year of B.Tech in Computer & Communication Engineering at Manipal University Jaipur — skipped placements to go all-in on the agents stack.",
  avatarUrl: "/priyanshu.jpg",
  skills: [
    { name: "Python", icon: Python },
    { name: "TypeScript", icon: Typescript },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "LangGraph", icon: undefined },
    { name: "LangChain", icon: undefined },
    { name: "FastAPI", icon: undefined },
    { name: "Docker", icon: Docker },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Java", icon: Java },
    { name: "AWS", icon: undefined },
    { name: "Composio", icon: undefined },
    { name: "MCP", icon: undefined },
    { name: "RAG", icon: undefined },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blogs", icon: NotebookIcon, label: "Blogs" },
    { href: "/docs", icon: FileTextIcon, label: "Docs" },
  ],
  contact: {
    email: "priyanshu6beta@gmail.com",
    tel: "+91 95580 32199",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/priyanchew",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/priyanshu-choudhary9211",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/priyanchew",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:priyanshu6beta@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Osvi AI",
      href: "https://osvi.ai",
      badges: [],
      location: "Remote",
      title: "SDE Intern",
      logoUrl: "/logos/osvi-logo.jpg",
      start: "2026",
      end: "Present",
      description:
        "Working on Osvi AI, a voice-agent platform for automating inbound and outbound calls across healthcare, BFSI, and e-commerce. Building on the multi-agent call orchestration stack: multilingual conversation flows, CRM and calendar integrations, intelligent agent transfer, and bulk-calling campaigns at enterprise scale.",
    },
    {
      company: "Orydle AI",
      badges: [],
      location: "Remote",
      title: "Founder & Engineer",
      logoUrl: "/logos/orydle-brandmark.png",
      start: "Aug 2025",
      end: "Present",
      description:
        "Building Krum, a multi-agent orchestrator and control plane sitting above GitHub, CI/CD, cloud infra, and coding agents. Designed swarm coordination patterns — delegation, recovery, and context sharing across agent clusters. Architecting for concurrent agent tasks, multi-tenant teams, and multiple tool integrations across the agent stack. Built an LLM-powered architecture tool with diagram-to-code generation, Git versioning, diff visualization, and real-time collaborative system design.",
    },
    {
      company: "Agent Orchestrator",
      href: "https://github.com/ComposioHQ/agent-orchestrator",
      badges: ["Open Source"],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/logos/agent-orchestrator.svg",
      start: "2026",
      end: "Present",
      description:
        "Contributing to ComposioHQ's agent-orchestrator, an open-source orchestration layer for parallel AI coding agents. Work spans Windows platform support, terminal/session reliability, local integration flows, validation harnesses, and issue-driven product fixes across the AO CLI, dashboard, and runtime stack.",
    },
    {
      company: "Carbon Crunch",
      href: "https://www.linkedin.com/company/carbon-crunch",
      badges: [],
      location: "Noida, India",
      title: "Software Developer Intern",
      logoUrl: "/logos/carbon-crunch.png",
      start: "Jul 2024",
      end: "Jan 2025",
      description:
        "Spearheaded development of an AI-driven BRSR automation pipeline (using NLP and web scraping) that reduced report generation time by 70% and cut costs by 80%. Designed an interactive tool for multi-company BRSR comparison and year-over-year analysis, improving reporting accuracy by 30% and accelerating decision-making.",
    },
  ],
  education: [
    {
      school: "Manipal University, Jaipur",
      href: "https://jaipur.manipal.edu",
      degree: "B.Tech in Computer & Communication Engineering",
      logoUrl: "https://www.google.com/s2/favicons?domain=jaipur.manipal.edu&sz=128",
      start: "2022",
      end: "2026",
    },
    {
      school: "Vagad Pace Global School, Mumbai",
      href: "https://vagadglobalschool.com",
      degree: "Higher Secondary Education",
      logoUrl: "https://vagadglobalschool.com/img/logo.png",
      start: "2020",
      end: "2022",
    },
  ],
  blogs: [
    {
      title: "OpenShell: Why NVIDIA is building Linux for the age of AI agents",
      href: "https://medium.com/@priyanchew/openshell-why-nvidia-is-building-linux-for-the-age-of-ai-agents-29c4939ab47e",
      source: "Medium",
      publishedAt: "Mar 21, 2026",
      readTime: "10 min read",
      summary:
        "A security and governance take on NVIDIA OpenShell, OpenClaw, and why autonomous agent fleets need enforcement outside the agent process.",
    },
  ] as const,
  projects: [] as ReadonlyArray<{
    title: string;
    href?: string;
    description: string;
    dates: string;
    technologies: readonly string[];
    image?: string;
    video?: string;
    links?: readonly {
      icon: ReactNode;
      type: string;
      href: string;
    }[];
  }>,
  hackathons: [] as ReadonlyArray<{
    title: string;
    dates: string;
    location?: string;
    description?: string;
    image?: string;
    links?: readonly {
      icon: ReactNode;
      title: string;
      href: string;
    }[];
  }>,
} as const;
