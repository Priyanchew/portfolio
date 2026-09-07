"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Plus, ArrowUp } from "lucide-react";
import { WaveMark } from "./objects";
import { ProjectFolders } from "./projects";
import { AfterHours } from "./after-hours";
import { site, work, writing } from "@/data/portfolio";
import { withBasePath } from "@/lib/site-path";
import { LocalTime } from "./local-time";

const introVariants = {
  hidden: { opacity: 0, filter: "blur(2px)", y: 3 },
  visible: (delay: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { delay, duration: .36, ease: [0.2, 0, 0, 1] as const },
  }),
};

const sectionReveal = (delay: number, reducedMotion: boolean) => ({
  initial: reducedMotion ? false : { opacity: 0, filter: "blur(2px)", y: 3 },
  animate: { opacity: 1, filter: "blur(0px)", y: 0 },
  transition: { delay, duration: .34, ease: [0.2, 0, 0, 1] as const },
});

export function PortfolioHome() {
  const [openWork, setOpenWork] = useState<string | null>(null);
  const [storyOpen, setStoryOpen] = useState(false);
  const reducedMotion = useReducedMotion() ?? false;
  const introMotion = (delay: number) => ({
    variants: introVariants,
    custom: delay,
    initial: reducedMotion ? false : "hidden",
    animate: "visible",
  });

  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, []);

  return (
    <main className="portfolio-home" id="top">
      <section className="intro" aria-labelledby="intro-heading">
        <motion.div className="intro-topline" {...introMotion(0)}>
          <div className="portrait-wrap"><Image src={withBasePath(site.avatar)} width={72} height={80} priority alt={site.name} className="portrait" /></div>
          <div className="location-note">{site.location}<LocalTime /></div>
        </motion.div>
        <motion.h1 id="intro-heading" {...introMotion(.03)}>Hey, I’m {site.firstName}<span className="name-dot">.</span></motion.h1>
        <motion.p className="intro-lead" {...introMotion(.06)}>{site.tagline}<br className="desktop-break" /> Currently in the Founder’s office at <a href="https://osvi.ai" className="inline-company"><Image src={withBasePath("/logos/osvi-logo.jpg")} width={18} height={18} alt="" /> Osvi AI <ArrowUpRight size={14} aria-hidden /></a>.</motion.p>
        <motion.p className="intro-context" {...introMotion(.09)}>I’ve been coding since I was 12, mostly because I just loved computers. These days, I’m fascinated by LLMs and AI agents, especially everything it takes to make them work well. I’ve built products at startups, started one in college, and contributed to open source.</motion.p>
        <motion.p className="intro-context" {...introMotion(.12)}>I like working on the whole product, from the backend to the bits you click. Getting the small details right matters to me.</motion.p>
        <motion.div className="intro-links" {...introMotion(.15)}>
          {site.links.map(link => <a key={link.label} href={link.href} target={link.href.startsWith("https:") ? "_blank" : undefined} rel={link.href.startsWith("https:") ? "noreferrer" : undefined}>{link.label} <ArrowUpRight size={13} aria-hidden /></a>)}
        </motion.div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-heading">
        <motion.div className="section-heading" {...sectionReveal(.2, reducedMotion)}><h2 id="work-heading">Work, so far</h2><span>where I’ve been building</span></motion.div>
        <div className="work-list">
          {work.map((item, index) => {
            const expanded = openWork === item.id;
            return <motion.article className={`work-entry ${expanded ? "is-open" : ""}`} key={item.id} {...sectionReveal(.23 + index * .03, reducedMotion)}>
              <h3><button type="button" className="work-trigger" aria-expanded={expanded} aria-controls={`work-${item.id}`} onClick={() => setOpenWork(expanded ? null : item.id)}>
                <span className={`company-logo logo-${item.id}`}><Image src={withBasePath(item.logo)} width={27} height={27} alt="" /></span>
                <span className="work-summary"><span className="work-name">{item.name}</span><span className="work-line">{item.line}</span></span>
                <span className="work-meta"><span className="work-date">{item.period}</span></span>
              </button></h3>
              <AnimatePresence initial={false}>
                {expanded && <motion.div id={`work-${item.id}`} className="work-detail-motion" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ type: "spring", duration: .3, bounce: 0 }}>
                  <div className="work-detail">
                    <p className="detail-role">{item.role}</p>
                    {item.paragraphs.map(p => <p key={p}>{p}</p>)}
                    <p className="work-tags">{item.tags}</p>
                    {item.url && <a className="detail-link" href={item.url} target="_blank" rel="noreferrer">{item.link} <ArrowUpRight size={13} aria-hidden /></a>}
                  </div>
                </motion.div>}
              </AnimatePresence>
            </motion.article>;
          })}
        </div>
        <motion.div className="story-note" {...sectionReveal(.35, reducedMotion)}>
          <button type="button" className="story-toggle" aria-expanded={storyOpen} onClick={() => setStoryOpen(!storyOpen)}>How I got here <Plus size={15} aria-hidden /></button>
          <AnimatePresence initial={false}>
            {storyOpen && <motion.div className="story-note-content-motion" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ type: "spring", duration: .3, bounce: 0 }}>
              <div className="story-note-content">
                <p>I started coding at 12 because I loved computers. Years later, a friend and I emailed Sam Altman asking for GPT-3 access. We got it, and I’ve been hooked on LLMs ever since.</p>
                <p>Carbon Crunch got me thinking about starting a company. I built their early core product and watched how much the founders cared about the problem they were solving. I wanted to try that myself.</p>
                <p>I started Orydle in college. It didn’t work out, and moving to Bengaluru changed how I thought about startups. After that, I became a core contributor to Agent Orchestrator and joined Osvi. I still contribute to AO, even when it isn’t through code.</p>
                <p className="education-note">Computer & Communication Engineering<br />Manipal University Jaipur · 2022 - 2026</p>
              </div>
            </motion.div>}
          </AnimatePresence>
        </motion.div>
      </section>

      <ProjectFolders revealStart={.4} />
      <AfterHours revealStart={.57} />

      <section className="writing-section" aria-labelledby="writing-heading">
        <motion.div className="section-heading" {...sectionReveal(.75, reducedMotion)}><h2 id="writing-heading">Once, I wrote</h2><Link href="/blogs">all writing <ArrowUpRight size={12} aria-hidden /></Link></motion.div>
        {writing.slice(0, 1).map(post => <motion.a key={post.href} className="writing-row" href={post.href} target="_blank" rel="noreferrer" {...sectionReveal(.78, reducedMotion)}><span>{post.homeTitle}</span><ArrowUpRight size={15} aria-hidden /></motion.a>)}
      </section>

      <motion.section className="contact-section" id="contact" aria-labelledby="contact-heading" {...sectionReveal(.82, reducedMotion)}><div><h2 id="contact-heading">Say hello.</h2><p>If you’d like to work together, or just chat, I’d love to hear from you.</p><a className="contact-link" href={`mailto:${site.email}`}>Email me <ArrowUpRight size={15} aria-hidden /></a></div><WaveMark /></motion.section>
      <motion.footer className="site-footer" {...sectionReveal(.85, reducedMotion)}><span>{site.name} <span className="footer-separator">/</span> {site.handle}.dev</span><div><a href="#top" aria-label="Back to top"><ArrowUp size={14} aria-hidden /></a></div></motion.footer>
    </main>
  );
}
