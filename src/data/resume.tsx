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
  // TODO: replace with your custom domain once DNS is live
  url: "https://priyanchew.dev",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  description:
    "Final-year engineering student building AI agents and developer tooling. Founder at Orydle AI, working on Krum — a multi-agent orchestrator and control plane.",
  summary:
    "I'm a self-taught builder focused on AI agents, multi-agent orchestration, and developer tooling. Currently building [Krum](#) — a control plane sitting above GitHub, CI/CD, cloud infra, and coding agents — at [Orydle AI](#). On the side, I'm shipping OSS in the agents space and contributing to the [agent-orchestrator](https://github.com/ComposioHQ/agent-orchestrator) repo by ComposioHQ. Final year of B.Tech in Computer & Communication Engineering at Manipal University Jaipur — skipped placements to go all-in on the agents stack.",
  avatarUrl: "/me.png",
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
        // TODO: replace with your GitHub profile URL
        url: "https://github.com/priyanshu-choudhary9211",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/priyanshu-choudhary9211",
        icon: Icons.linkedin,
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
      logoUrl: "",
      start: "2026",
      end: "Present",
      description:
        "Working on Osvi AI — voice agents that automate inbound and outbound calls across Healthcare, BFSI, and E-commerce. Building on the multi-agent call orchestration stack: multi-lingual conversation flows (Hindi / English / regional), CRM and calendar integrations, intelligent agent transfer, and bulk-calling campaigns at enterprise scale. (TODO: replace with the specific things you've shipped.)",
    },
    {
      company: "Orydle AI",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Founder & Engineer",
      logoUrl: "",
      start: "Aug 2025",
      end: "Present",
      description:
        "Building Krum, a multi-agent orchestrator and control plane sitting above GitHub, CI/CD, cloud infra, and coding agents. Designed swarm coordination patterns — delegation, recovery, and context sharing across agent clusters. Architecting for concurrent agent tasks, multi-tenant teams, and multiple tool integrations across the agent stack. Built an LLM-powered architecture tool with diagram-to-code generation, Git versioning, diff visualization, and real-time collaborative system design.",
    },
    {
      company: "Carbon Crunch",
      href: "#",
      badges: [],
      location: "Noida, India",
      title: "Software Developer Intern",
      logoUrl: "",
      start: "Jul 2024",
      end: "Jan 2025",
      description:
        "Spearheaded development of an AI-driven BRSR automation pipeline (using NLP and web scraping) that reduced report generation time by 70% and cut costs by 80%. Designed an interactive tool for multi-company BRSR comparison and year-over-year analysis, improving reporting accuracy by 30% and accelerating decision-making.",
    },
    {
      company: "Sanskriti Bench",
      href: "#",
      badges: [],
      location: "Open Source",
      title: "Language Manager",
      logoUrl: "",
      start: "Jun 2024",
      end: "Dec 2024",
      description:
        "Led a team of 8 researchers to collect a cultural fine-tuning dataset in collaboration with senior researchers and linguists, contributing to a state-of-the-art Indian culture benchmark for AI. Fine-tuned and evaluated multiple large language models on a 5,000-question dataset, benchmarking performance against various Indic models.",
    },
  ],
  education: [
    {
      school: "Manipal University, Jaipur",
      href: "https://jaipur.manipal.edu",
      degree: "B.Tech in Computer & Communication Engineering — CGPA 8.65",
      logoUrl: "",
      start: "2022",
      end: "2026",
    },
    {
      school: "Vagad Pace Global School, Mumbai",
      href: "#",
      degree: "Higher Secondary Education — 82%",
      logoUrl: "",
      start: "2020",
      end: "2022",
    },
  ],
  // TODO: add projects when ready
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
  // TODO: keep section structure; fill hackathons later if any
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
