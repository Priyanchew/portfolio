"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Plus, ArrowUp } from "lucide-react";
import { WaveMark } from "./objects";
import { ProjectFolders } from "./projects";
import { AfterHours } from "./after-hours";
import { site, work, writing } from "@/data/portfolio";

export function PortfolioHome() {
  const [openWork, setOpenWork] = useState<string | null>(null);

  return (
    <main className="portfolio-home" id="top">
      <section className="intro" aria-labelledby="intro-heading">
        <div className="intro-topline">
          <div className="portrait-wrap"><Image src={site.avatar} width={72} height={80} priority alt={site.name} className="portrait" /></div>
          <div className="location-note"><span className="location-dot" /> {site.location}</div>
        </div>
        <h1 id="intro-heading">Hey, I’m {site.firstName}<span className="name-dot">.</span></h1>
        <p className="intro-lead">{site.tagline}<br className="desktop-break" /> Currently in the Founder’s office at <a href="https://osvi.ai" className="inline-company"><Image src="/logos/osvi-logo.jpg" width={18} height={18} alt="" /> OSVI <ArrowUpRight size={14} aria-hidden /></a>.</p>
        <p className="intro-context">I’ve been coding since I was 12. A love of computers grew into a fascination with LLMs, AI agents, and the systems around them. That curiosity has taken me through an early startup product, a startup of my own, and open source.</p>
        <p className="intro-context">These days, I care about taking an idea all the way to something useful—from the system underneath to the details you interact with.</p>
        <div className="intro-links">
          {site.links.map(link => <a key={link.label} href={link.href} target={link.href.startsWith("https:") ? "_blank" : undefined} rel={link.href.startsWith("https:") ? "noreferrer" : undefined}>{link.label} <ArrowUpRight size={13} aria-hidden /></a>)}
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
        {writing.slice(0, 1).map(post => <a key={post.href} className="writing-row" href={post.href} target="_blank" rel="noreferrer"><span>{post.homeTitle}</span><ArrowUpRight size={15} aria-hidden /></a>)}
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-heading"><div><h2 id="contact-heading">Let’s build something worth caring about.</h2><p>Interesting problems, good teams, or just a hello.</p><a className="contact-link" href={`mailto:${site.email}`}>Get in touch <ArrowUpRight size={15} aria-hidden /></a></div><WaveMark /></section>
      <footer className="site-footer"><span>{site.name} <span className="footer-separator">/</span> still building.</span><div><a href="#top" aria-label="Back to top"><ArrowUp size={14} aria-hidden /></a></div></footer>
    </main>
  );
}
