"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Plus, ArrowUp } from "lucide-react";
import { WaveMark } from "./objects";
import { ProjectFolders } from "./projects";
import { AfterHours } from "./after-hours";
import { site, work, writing } from "@/data/portfolio";
import { withBasePath } from "@/lib/site-path";
import { LocalTime } from "./local-time";

export function PortfolioHome() {
  const [openWork, setOpenWork] = useState<string | null>(null);

  return (
    <main className="portfolio-home" id="top">
      <section className="intro" aria-labelledby="intro-heading">
        <div className="intro-topline">
          <div className="portrait-wrap"><Image src={withBasePath(site.avatar)} width={72} height={80} priority alt={site.name} className="portrait" /></div>
          <div className="location-note"><span className="location-dot" /> {site.location}<LocalTime /></div>
        </div>
        <h1 id="intro-heading">Hey, I’m {site.firstName}<span className="name-dot">.</span></h1>
        <p className="intro-lead">{site.tagline}<br className="desktop-break" /> Currently in the Founder’s office at <a href="https://osvi.ai" className="inline-company"><Image src={withBasePath("/logos/osvi-logo.jpg")} width={18} height={18} alt="" /> OSVI <ArrowUpRight size={14} aria-hidden /></a>.</p>
        <p className="intro-context">I’ve been coding since I was 12, mostly because I just loved computers. These days, I’m fascinated by LLMs and AI agents, especially everything it takes to make them work well. I’ve built products at startups, started one in college, and contributed to open source.</p>
        <p className="intro-context">I like working on the whole product, from the backend to the bits you click. Getting the small details right matters to me.</p>
        <div className="intro-links">
          {site.links.map(link => <a key={link.label} href={link.href} target={link.href.startsWith("https:") ? "_blank" : undefined} rel={link.href.startsWith("https:") ? "noreferrer" : undefined}>{link.label} <ArrowUpRight size={13} aria-hidden /></a>)}
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-heading">
        <div className="section-heading"><h2 id="work-heading">Work, so far</h2><span>where I’ve been building</span></div>
        <div className="work-list">
          {work.map(item => {
            const expanded = openWork === item.id;
            return <article className={`work-entry ${expanded ? "is-open" : ""}`} key={item.id}>
              <h3><button type="button" className="work-trigger" aria-expanded={expanded} aria-controls={`work-${item.id}`} onClick={() => setOpenWork(expanded ? null : item.id)}>
                <span className={`company-logo logo-${item.id}`}><Image src={withBasePath(item.logo)} width={27} height={27} alt="" /></span>
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
        <details className="story-note"><summary>How I got here <Plus size={13} aria-hidden /></summary><div>
          <p>I started coding at 12 because I loved computers. Years later, a friend and I emailed Sam Altman asking for GPT-3 access. We got it, and I’ve been hooked on LLMs ever since.</p>
          <p>Carbon Crunch got me thinking about starting a company. I built their early core product and watched how much the founders cared about the problem they were solving. I wanted to try that myself.</p>
          <p>I started Orydle in college. It didn’t work out, and moving to Bengaluru changed how I thought about startups. After that, I became a core contributor to Agent Orchestrator and joined OSVI. I still contribute to AO, even when it isn’t through code.</p>
          <p className="education-note">Computer & Communication Engineering<br />Manipal University Jaipur · 2022 - 2026</p>
        </div></details>
      </section>

      <ProjectFolders />
      <AfterHours />

      <section className="writing-section" aria-labelledby="writing-heading">
        <div className="section-heading"><h2 id="writing-heading">Once, I wrote</h2><Link href="/blogs">all writing <ArrowUpRight size={12} aria-hidden /></Link></div>
        {writing.slice(0, 1).map(post => <a key={post.href} className="writing-row" href={post.href} target="_blank" rel="noreferrer"><span>{post.homeTitle}</span><ArrowUpRight size={15} aria-hidden /></a>)}
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-heading"><div><h2 id="contact-heading">Say hello.</h2><p>If you’d like to work together, or just chat, I’d love to hear from you.</p><a className="contact-link" href={`mailto:${site.email}`}>Email me <ArrowUpRight size={15} aria-hidden /></a></div><WaveMark /></section>
      <footer className="site-footer"><span>{site.name} <span className="footer-separator">/</span> {site.handle}.dev</span><div><a href="#top" aria-label="Back to top"><ArrowUp size={14} aria-hidden /></a></div></footer>
    </main>
  );
}
