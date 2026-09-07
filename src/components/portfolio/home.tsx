"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Plus, ArrowUp } from "lucide-react";
import { WaveMark } from "./objects";
import { ProjectFolders } from "./projects";
import { AfterHours } from "./after-hours";

const work = [
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

export function PortfolioHome() {
  const [openWork, setOpenWork] = useState<string | null>(null);

  return (
    <main className="portfolio-home" id="top">
      <section className="intro" aria-labelledby="intro-heading">
        <div className="intro-topline">
          <div className="portrait-wrap"><Image src="/priyanshu.jpg" width={72} height={80} priority alt="Priyanshu Choudhary" className="portrait" /></div>
          <div className="location-note"><span className="location-dot" /> Bengaluru, India</div>
        </div>
        <h1 id="intro-heading">Hey, I’m Priyanshu<span className="name-dot">.</span></h1>
        <p className="intro-lead">I build AI agents and the products around them.<br className="desktop-break" /> Currently in the Founder’s office at <a href="https://osvi.ai" className="inline-company"><Image src="/logos/osvi-logo.jpg" width={18} height={18} alt="" /> OSVI <ArrowUpRight size={14} aria-hidden /></a>.</p>
        <p className="intro-context">I’ve been coding since I was 12. A love of computers grew into a fascination with LLMs, AI agents, and the systems around them. That curiosity has taken me through an early startup product, a startup of my own, and open source.</p>
        <p className="intro-context">These days, I care about taking an idea all the way to something useful—from the system underneath to the details you interact with.</p>
        <div className="intro-links">
          <a href="https://x.com/priyanchew" target="_blank" rel="noreferrer">X <ArrowUpRight size={13} aria-hidden /></a>
          <a href="https://github.com/priyanchew" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} aria-hidden /></a>
          <a href="https://www.linkedin.com/in/priyanshu-choudhary9211" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} aria-hidden /></a>
          <a href="mailto:priyanshu6beta@gmail.com">Email <ArrowUpRight size={13} aria-hidden /></a>
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-heading">
        <div className="section-heading"><h2 id="work-heading">Work, so far</h2><span>the things I’ve put my energy into</span></div>
        <div className="work-list">
          {work.map(item => {
            const expanded = openWork === item.id;
            return <article className={`work-entry ${expanded ? "is-open" : ""}`} key={item.id}>
              <h3><button type="button" className="work-trigger" aria-expanded={expanded} aria-controls={`work-${item.id}`} onClick={() => setOpenWork(expanded ? null : item.id)}>
                <span className={`company-logo logo-${item.id}`}><Image src={item.logo} width={27} height={27} alt="" /></span>
                <span className="work-summary"><span className="work-name">{item.name}</span><span className="work-line">{item.line}</span></span>
                <span className="work-meta"><span className="work-date">{item.period}</span><Plus size={14} className="work-plus" aria-hidden /></span>
              </button></h3>
              <div id={`work-${item.id}`} className="work-detail" hidden={!expanded}>
                <p className="detail-role">{item.role}</p>
                {item.paragraphs.map(p => <p key={p}>{p}</p>)}
                <p className="work-tags">{item.tags}</p>
                {item.url && <a className="detail-link" href={item.url} target="_blank" rel="noreferrer">{item.link} <ArrowUpRight size={13} aria-hidden /></a>}
              </div>
            </article>;
          })}
        </div>
        <details className="story-note"><summary>The slightly longer story <Plus size={13} aria-hidden /></summary><div>
          <p>I started coding at 12 because I loved computers. Years later, a friend and I emailed Sam Altman asking for GPT-3 access. That curiosity pulled me into LLMs, and eventually AI agents.</p>
          <p>Building Carbon Crunch’s early core product got me interested in entrepreneurship. Watching the founders lead and care deeply about a specific problem stayed with me. I started Orydle while I was in college, then moved to Bengaluru. The startup didn’t work out, and my view of startups changed.</p>
          <p>That led me to open source with Agent Orchestrator, where I became a core contributor, and then to OSVI. Most of my work has happened inside those products. That’s where I’ve put my energy.</p>
          <p className="education-note">Computer & Communication Engineering<br />Manipal University Jaipur · 2022–2026</p>
        </div></details>
      </section>

      <ProjectFolders />
      <AfterHours />

      <section className="writing-section" aria-labelledby="writing-heading">
        <div className="section-heading"><h2 id="writing-heading">Once, I wrote</h2><Link href="/blogs">all writing <ArrowUpRight size={12} aria-hidden /></Link></div>
        <a className="writing-row" href="https://medium.com/@priyanchew/openshell-why-nvidia-is-building-linux-for-the-age-of-ai-agents-29c4939ab47e" target="_blank" rel="noreferrer"><span>Why NVIDIA is building Linux for the age of AI agents</span><ArrowUpRight size={15} aria-hidden /></a>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-heading"><div><h2 id="contact-heading">Let’s build something worth caring about.</h2><p>Interesting problems, good teams, or just a hello.</p><a className="contact-link" href="mailto:priyanshu6beta@gmail.com">Get in touch <ArrowUpRight size={15} aria-hidden /></a></div><WaveMark /></section>
      <footer className="site-footer"><span>Priyanshu Choudhary <span className="footer-separator">/</span> still building.</span><div><a href="#top" aria-label="Back to top"><ArrowUp size={14} aria-hidden /></a></div></footer>
    </main>
  );
}
