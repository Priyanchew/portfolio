"use client";

import { useState } from "react";
import { ArrowUpRight, Minus, Plus } from "lucide-react";

export const osviProjects = [
  { name: "Chat Agents", description: "Shipped new features, scaled to heavy usage, and optimized performance as the platform grew." },
  { name: "Conductor / AI Agent Builder", description: "Built the AI-driven experience for creating and configuring agents." },
  { name: "Agent Evals & simulations", description: "Built tools to evaluate agents and simulate conversations before putting them to work." },
  { name: "Tool libraries & MCP integrations", description: "Expanded what agents can do through reusable tools and MCP integrations." },
  { name: "Account & user lifecycle", description: "Handled the account and user lifecycle across the platform." },
  { name: "Reliability & performance", description: "Worked across the product to make it more reliable and efficient." },
];

const projectFolders = [
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

export function ProjectFolders() {
  const [selected, setSelected] = useState<string | null>(null);
  const current = projectFolders.find(folder => folder.id === selected);

  return <section className="projects-section" id="projects" aria-labelledby="projects-heading">
    <div className="section-heading"><h2 id="projects-heading">And the side projects?</h2><span>funny you should ask</span></div>
    <p className="projects-intro">I went all-in on Orydle, then OSVI.<br /><span>The side projects became the main quest.</span></p>
    <div className="project-folders">
      {projectFolders.map(folder => <button type="button" key={folder.id} className={`project-folder folder-${folder.id} ${selected === folder.id ? "folder-open" : ""}`} aria-expanded={selected === folder.id} aria-controls={`project-panel-${folder.id}`} onClick={() => setSelected(selected === folder.id ? null : folder.id)}>
        <span className="folder-back" aria-hidden="true" />
        <span className="folder-sheet sheet-back" aria-hidden="true"><span /><span /><span /></span>
        <span className="folder-sheet sheet-front" aria-hidden="true"><span /><span /><span /></span>
        <span className="folder-cover"><span className="folder-label"><span className="folder-name">{folder.name}<span className="folder-punctuation">/</span></span><span className="folder-subtitle">{folder.subtitle}</span></span><span className="folder-action">{selected === folder.id ? <Minus size={14} aria-hidden /> : <Plus size={14} aria-hidden />}</span></span>
        <span className="folder-status"><span className="folder-status-dot" />{folder.status}</span>
      </button>)}
    </div>
    {projectFolders.map(folder => <div id={`project-panel-${folder.id}`} className="project-panel" key={folder.id} hidden={selected !== folder.id}>
      <div className="project-panel-heading"><h3>{folder.name}<span>/ inside the work</span></h3><button type="button" aria-label={`Close ${folder.name} projects`} onClick={() => { setSelected(null); document.querySelector<HTMLButtonElement>(`.folder-${folder.id}`)?.focus(); }}><Minus size={15} aria-hidden /></button></div>
      <p className="project-panel-intro">{folder.description}</p>
      <ol className="project-index">
        {folder.items.map((project, i) => <li key={project.name}><span className="project-number">{String(i + 1).padStart(2, "0")}</span><div><h4>{project.name}</h4><p>{project.description}</p></div></li>)}
      </ol>
      <div className="project-panel-footer"><p>{folder.footnote}</p>{folder.href && <a href={folder.href} target="_blank" rel="noreferrer">Explore OSVI <ArrowUpRight size={13} aria-hidden /></a>}</div>
    </div>)}
    {!current && <p className="folder-hint">open a folder. there’s a lot in there.</p>}
    <p className="projects-postscript">I still build on the side. Finding the time to finish things to my own standards is another story. Until they make it here, <a href="https://github.com/priyanchew?tab=repositories" target="_blank" rel="noreferrer">wander through my GitHub <ArrowUpRight size={12} aria-hidden /></a> for experiments, including the ones from college.</p>
  </section>;
}
