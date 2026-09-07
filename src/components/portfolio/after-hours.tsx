export function AfterHours() {
  return <section className="elsewhere-section" id="elsewhere" aria-labelledby="elsewhere-heading">
    <div className="section-heading"><h2 id="elsewhere-heading">Off the clock</h2><span>usually with good company</span></div>
    <div className="after-hours-copy">
      <p>I like a good party. I like hosting one even more.</p>
      <p>Usually up for a concert, a game, a trip to the mountains, or a beer with friends.</p>
    </div>
    <div className="music-strip" aria-label="On repeat: Fred again. Lyrics optional.">
      <div className="music-strip-hole" aria-hidden="true" />
      <div className="music-strip-label"><span className="music-eyebrow">ON REPEAT</span><span className="music-artist">fred again..</span></div>
      <div className="music-wave" aria-hidden="true">{[10, 19, 29, 16, 37, 24, 14, 33, 23, 40, 16, 28, 12, 22, 32, 18, 10, 25].map((height, index) => <span key={index} style={{ height }} />)}</div>
      <span className="music-stamp">lyrics<br /><span>optional</span></span>
    </div>
    <p className="music-caption">I remember the drop. The lyrics, not so much.</p>
    <div className="personal-notes">
      <p>I can talk One Piece, F1, or Minecraft for a while. I’m just as happy on a badminton court or a go-kart track. I grew up by the sea in Daman, and love getting away to the mountains.</p>
    </div>
  </section>;
}
