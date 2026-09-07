"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { projectFolders, site } from "@/data/portfolio";

export function ProjectFolders({ revealStart = 0 }: { revealStart?: number }) {
  const [selected, setSelected] = useState<string | null>(null);
  const current = projectFolders.find(folder => folder.id === selected);
  const reducedMotion = useReducedMotion() ?? false;
  const reveal = (delay: number) => ({
    initial: reducedMotion ? false : { opacity: 0, filter: "blur(2px)", y: 3 },
    animate: { opacity: 1, filter: "blur(0px)", y: 0 },
    transition: { delay, duration: .34, ease: [0.2, 0, 0, 1] as const },
  });

  return <section className="projects-section" id="projects" aria-labelledby="projects-heading">
    <motion.div className="section-heading" {...reveal(revealStart)}><h2 id="projects-heading">The side projects</h2><span>the ones waiting their turn</span></motion.div>
    <motion.p className="projects-intro" {...reveal(revealStart + .03)}>I went all-in on Orydle, then OSVI.<br /><span>My side projects are still waiting for their turn.</span></motion.p>
    <div className="project-folders">
      {projectFolders.map((folder, index) => <motion.button type="button" key={folder.id} className={`project-folder folder-${folder.id} ${selected === folder.id ? "folder-open" : ""}`} aria-expanded={selected === folder.id} aria-controls={`project-panel-${folder.id}`} onClick={() => setSelected(selected === folder.id ? null : folder.id)} {...reveal(revealStart + .06 + index * .03)}>
        <span className="folder-back" aria-hidden="true" />
        <span className="folder-sheet sheet-back" aria-hidden="true"><span /><span /><span /></span>
        <span className="folder-sheet sheet-front" aria-hidden="true"><span /><span /><span /></span>
        <span className="folder-cover"><span className="folder-label"><span className="folder-name">{folder.name}<span className="folder-punctuation">/</span></span><span className="folder-subtitle">{folder.subtitle}</span></span><span className="folder-action">{selected === folder.id ? <Minus size={14} aria-hidden /> : <Plus size={14} aria-hidden />}</span></span>
        <span className="folder-status"><span className="folder-status-dot" />{folder.status}</span>
      </motion.button>)}
    </div>
    <AnimatePresence initial={false} mode="wait">
      {current && <motion.div id={`project-panel-${current.id}`} className="project-panel-motion" key={current.id} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ type: "spring", duration: .3, bounce: 0 }}>
        <div className="project-panel">
          <div className="project-panel-heading"><h3>{current.name}<span>/ what I worked on</span></h3><button type="button" aria-label={`Close ${current.name} projects`} onClick={() => { setSelected(null); document.querySelector<HTMLButtonElement>(`.folder-${current.id}`)?.focus(); }}><Minus size={15} aria-hidden /></button></div>
          <p className="project-panel-intro">{current.description}</p>
          <ol className="project-index">
            {current.items.map((project, i) => <li key={project.name}><span className="project-number">{String(i + 1).padStart(2, "0")}</span><div><h4>{project.name}</h4><p>{project.description}</p></div></li>)}
          </ol>
          <div className="project-panel-footer"><p>{current.footnote}</p>{current.href && <a href={current.href} target="_blank" rel="noreferrer">Explore OSVI <ArrowUpRight size={13} aria-hidden /></a>}</div>
        </div>
      </motion.div>}
    </AnimatePresence>
    {!current && <motion.p className="folder-hint" {...reveal(revealStart + .12)}>open a folder to see what I worked on.</motion.p>}
    <motion.p className="projects-postscript" {...reveal(revealStart + .15)}>I still build on the side. I just haven’t had time to bring those projects to a point I’m happy showing here. My <a href={site.repositoriesUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12} aria-hidden /></a> has older college projects and experiments.</motion.p>
  </section>;
}
