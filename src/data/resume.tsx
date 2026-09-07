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
    "Engineer building AI products, agent systems, and developer tools. Currently in the Founder’s office at OSVI, a core contributor to Agent Orchestrator, and previously founder of Orydle AI.",
  summary:
    "I build AI products in the Founder’s office at OSVI. My path started with building Carbon Crunch's early core product, which drew me into entrepreneurship. I went on to start Orydle AI in college, became a core contributor to Agent Orchestrator, and now work on agents and product features at OSVI. I grew up in Daman and am based in Bengaluru.",
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
      title: "Founder’s office",
      logoUrl: "/logos/osvi-logo.jpg",
      start: "May 2026",
      end: "Present",
      description:
        "Building across OSVI’s product in the Founder’s office. Shipped Chat Agent features, scaled to heavy usage, and optimized performance. Built Conductor / AI Agent Builder, Agent Evals and simulations, tool libraries and MCP integrations, account and user lifecycle handling, and general reliability and performance improvements. And I’m not done yet.",
    },
    {
      company: "Orydle AI",
      badges: [],
      location: "Remote",
      title: "Founder & Engineer",
      logoUrl: "/logos/orydle-brandmark.png",
      start: "Aug 2025",
      end: "Apr 2026",
      description:
        "Started Orydle AI in college and built Krum, a multi-agent orchestrator and control plane spanning GitHub, CI/CD, cloud infrastructure, and coding agents. Worked on delegation, recovery, context sharing, and collaborative system design. The startup did not work out; moving to Bengaluru changed how I thought about entrepreneurship.",
    },
    {
      company: "Agent Orchestrator",
      href: "https://aoagents.dev",
      badges: ["Open Source"],
      location: "Remote",
      title: "Core Contributor",
      logoUrl: "/logos/agent-orchestrator.svg",
      start: "Mar 2026",
      end: "Present",
      description:
        "Became a core contributor to Agent Orchestrator, an open-source orchestration layer for parallel AI coding agents. Work spanned Windows platform support, terminal and session reliability, local integration flows, validation harnesses, and product fixes across the CLI, dashboard, and runtime. Still involved today, contributing beyond code.",
    },
    {
      company: "Carbon Crunch",
      href: "https://www.carboncrunch.in/",
      badges: [],
      location: "Noida, India",
      title: "Software Developer Intern",
      logoUrl: "/logos/carbon-crunch.png",
      start: "Jul 2024",
      end: "Jan 2025",
      description:
        "Built the early core product at Carbon Crunch, working on AI-driven BRSR reporting automation using NLP and web scraping, along with multi-company comparison and year-over-year analysis. This was the experience that first drew me into entrepreneurship.",
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
