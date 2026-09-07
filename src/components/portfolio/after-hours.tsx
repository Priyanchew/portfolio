"use client";

import { motion, useReducedMotion } from "motion/react";

export function AfterHours({ revealStart = 0 }: { revealStart?: number }) {
  const reducedMotion = useReducedMotion() ?? false;
  const reveal = (delay: number) => ({
    initial: reducedMotion ? false : { opacity: 0, filter: "blur(2px)", y: 3 },
    animate: { opacity: 1, filter: "blur(0px)", y: 0 },
    transition: { delay, duration: .34, ease: [0.2, 0, 0, 1] as const },
  });

  return <section className="elsewhere-section" id="elsewhere" aria-labelledby="elsewhere-heading">
    <motion.div className="section-heading" {...reveal(revealStart)}><h2 id="elsewhere-heading">Off the clock</h2><span>usually with good company</span></motion.div>
    <motion.div className="after-hours-copy" {...reveal(revealStart + .03)}>
      <p>I like a good party. I like hosting one even more.</p>
      <p>Usually up for a concert, a game, or a beer with friends.</p>
    </motion.div>
    <motion.div className="music-strip" aria-label="On repeat: Fred again." {...reveal(revealStart + .06)}>
      <div className="music-strip-hole" aria-hidden="true" />
      <div className="music-strip-label"><span className="music-eyebrow">ON REPEAT</span><span className="music-artist">fred again..</span></div>
      <div className="music-wave" aria-hidden="true">{[10, 19, 29, 16, 37, 24, 14, 33, 23, 40, 16, 28, 12, 22, 32, 18, 10, 25].map((height, index) => <span key={index} style={{ height }} />)}</div>
    </motion.div>
    <motion.p className="music-caption" {...reveal(revealStart + .09)}>I remember the drop. The lyrics, not so much.</motion.p>
    <motion.div className="personal-notes" {...reveal(revealStart + .12)}>
      <p>I can talk One Piece, F1, or Minecraft for hours. I grew up in Daman, by the sea. I usually lean towards the mountains, but a beach trip works just as well with the right company. Japan is the trip I really want to make next.</p>
    </motion.div>
  </section>;
}
