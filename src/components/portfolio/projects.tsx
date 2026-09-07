"use client";

import { useState } from "react";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { projectFolders, site } from "@/data/portfolio";

export function ProjectFolders() {
  const [selected, setSelected] = useState<string | null>(null);
  const current = projectFolders.find(folder => folder.id === selected);

  return <section className="projects-section" id="projects" aria-labelledby="projects-heading">
    <div className="section-heading"><h2 id="projects-heading">And the side projects?</h2><span>funny you should ask</span></div>
    <p className="projects-intro">I went all-in on Orydle, then OSVI.<br /><span>My side projects are still waiting for their turn.</span></p>
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
      <div className="project-panel-heading"><h3>{folder.name}<span>/ what I worked on</span></h3><button type="button" aria-label={`Close ${folder.name} projects`} onClick={() => { setSelected(null); document.querySelector<HTMLButtonElement>(`.folder-${folder.id}`)?.focus(); }}><Minus size={15} aria-hidden /></button></div>
      <p className="project-panel-intro">{folder.description}</p>
      <ol className="project-index">
        {folder.items.map((project, i) => <li key={project.name}><span className="project-number">{String(i + 1).padStart(2, "0")}</span><div><h4>{project.name}</h4><p>{project.description}</p></div></li>)}
      </ol>
      <div className="project-panel-footer"><p>{folder.footnote}</p>{folder.href && <a href={folder.href} target="_blank" rel="noreferrer">Explore OSVI <ArrowUpRight size={13} aria-hidden /></a>}</div>
    </div>)}
    {!current && <p className="folder-hint">open a folder to see what I worked on.</p>}
    <p className="projects-postscript">I do still build on the side. I just haven’t had the time to get those projects to a point I’m happy showing here. There are experiments and older college projects on <a href={site.repositoriesUrl} target="_blank" rel="noreferrer">my GitHub <ArrowUpRight size={12} aria-hidden /></a> if you’re curious.</p>
  </section>;
}
