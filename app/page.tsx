"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "./components/SiteHeader";

const episodes = [
  {
    image: "/media/soft-armor.webp",
    category: "Neurotech",
    code: "NEUROTECH / 001",
    title: "The Human–Machine Layer",
    description: "Follow a simulated EEG signal from a wearable interface into an Omni-directed XR scene.",
    meta: "CONCEPT REEL · EEG / XR",
    tone: "cyan",
  },
  {
    image: "/media/mobility-bike.webp",
    category: "Automotive",
    code: "AUTOMOTIVE / 006",
    title: "Black Frame Study",
    description: "An automotive surface language is tested at full scale before fabrication.",
    meta: "12:08 · 11 assets · simulation",
    tone: "amber",
  },
  {
    image: "/media/spatial-bonsai.webp",
    category: "Home",
    code: "HOME / 003",
    title: "Gravity Garden",
    description: "A suspended biophilic interior object travels from impossible film to buildable installation.",
    meta: "09:51 · 5 assets · contractor brief",
    tone: "lime",
  },
];

const collections = [
  { title: "Techwear", count: "70 twins + parts", image: "/media/techwear-white.webp" },
  { title: "Automotive", count: "19 vehicle studies", image: "/media/mobility-crystal.webp" },
  { title: "Future Home", count: "16 spatial systems", image: "/media/spatial-bonsai.webp" },
  { title: "Playable Worlds", count: "31 scenes + quests", image: "/media/mobility-interior.webp" },
];

export default function Home() {
  const [filter, setFilter] = useState("All");
  const visibleEpisodes = episodes.filter((episode) => filter === "All" || episode.category === filter);

  return (
    <main>
      <SiteHeader active="watch" />

      <section className="hero-shell">
        <img className="hero-image" src="/media/neuro-rig.webp" alt="Experimental neurotech headwear concept" />
        <div className="hero-scrim" />
        <div className="hero-grid" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" /> MASS IDENTITY NEUROTECH STUDIO</div>
          <h1>HUMAN SIGNAL.<br />SYNTHETIC<br /><em>INTELLIGENCE.</em></h1>
          <p>Explore how biological signals and voice agents can guide the same digital twin. Speak to Omni, inspect a simulated EEG feed, and see the scene respond.</p>
          <div className="hero-actions">
            <Link href="/studio#omni" className="button primary">Try the voice studio</Link>
            <Link href="#episodes" className="button ghost">Explore the work ↓</Link>
          </div>
        </div>
        <div className="hero-rail">
          <span>01 SIGNAL</span><span>02 VOICE INTENT</span><span>03 DIGITAL TWIN</span><span>04 SCENE</span>
        </div>
        <div className="hero-status">
          <b>FLAGSHIP / N1</b>
          <span>Wearable EEG concept · XR digital twin</span>
          <span className="status-safe">SIMULATED SIGNALS</span>
        </div>
      </section>

      <section className="content-section" id="episodes">
        <div className="section-head">
          <div>
            <p className="kicker">LIVE DESIGN STORIES</p>
            <h2>See how the prototypes take shape.</h2>
          </div>
          <div className="filter-row" aria-label="Content filters">
            {["All", "Neurotech", "Automotive", "Home"].map((option) => (
              <button key={option} className={`filter ${filter === option ? "active" : ""}`}
                aria-pressed={filter === option} onClick={() => setFilter(option)}>{option}</button>
            ))}
          </div>
        </div>
        <div className="episode-grid">
          {visibleEpisodes.map((episode) => (
            <article className="episode-card" key={episode.title}>
              <div className="media-frame"><img src={episode.image} alt="" /><span className={`signal-chip ${episode.tone}`}>{episode.code}</span></div>
              <p className="card-meta">{episode.meta}</p>
              <h3>{episode.title}</h3>
              <p>{episode.description}</p>
              <Link href="/assets">Open evidence + assets →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="fashion-feature" aria-labelledby="fashion-heading">
        <img src="/media/living-fashion.webp" alt="Model in sculpted metallic couture walking through a blue-lit atrium" loading="lazy" />
        <div className="fashion-feature-copy">
          <p className="kicker">FROM LIVING FASHION STUDIO</p>
          <h2 id="fashion-heading">Signal &amp; Silhouette</h2>
          <p>A fashion study in reflective fabric, sculpted techwear, and the way a wearable interface changes a silhouette.</p>
          <Link href="/studio?scene=runway#omni" className="button ghost">Try the runway scene ↗</Link>
        </div>
      </section>

      <section className="loop-section">
        <div><p className="kicker">ONE ENGINE / MULTIPLE MARKETS</p><h2>Voice to world.<br />World to product.</h2></div>
        <div className="loop-grid">
          {["01 IMAGINE", "02 SIMULATE", "03 VALIDATE", "04 MAKE", "05 SHOW", "06 SELL / LICENSE"].map((step, index) => <div className="loop-step" key={step}><b>{step}</b><span>{["Talk to Omni","Open the spatial twin","Check fit, risk, cost","Route to a fabricator","Publish the episode","Launch a drop or deal"][index]}</span></div>)}
        </div>
      </section>

      <section className="market-intro">
        <div className="market-intro-copy"><p className="kicker">DIGITAL + REAL</p><h2>Four markets.<br />One creation system.</h2><p>A cinematic scene can be a show, a playable quest, a storefront, and the validation environment for the object eventually shipped to its creator.</p><Link href="/markets" className="button ghost">Explore the market map ↗</Link></div>
        <div className="market-intro-grid">
          <article><span>01</span><b>TECHWEAR</b><p>Fashion, EEG/XR shells, future prosthetic forms, accessories.</p></article>
          <article><span>02</span><b>AUTOMOTIVE</b><p>Restyling concepts, interiors, exterior studies, driving films.</p></article>
          <article><span>03</span><b>FUTURE HOME</b><p>VR interiors, printable décor, contractor-ready commissions.</p></article>
          <article><span>04</span><b>INTERACTIVE WORLDS</b><p>Shows, lessons, music films, quests and shoppable games.</p></article>
        </div>
      </section>

      <section className="content-section">
        <div className="section-head"><div><p className="kicker">OPEN MARKETS</p><h2>Enter through what you want to build.</h2></div><Link href="/assets" className="text-link">Browse reusable assets ↗</Link></div>
        <div className="collection-grid">
          {collections.map((collection) => <Link href="/assets" className="collection-card" key={collection.title}><img src={collection.image} alt="" /><div><h3>{collection.title}</h3><span>{collection.count}</span></div></Link>)}
        </div>
      </section>

      <section className="cta-band">
        <p className="kicker">CREATOR ACCESS / FOUNDING RUN</p>
        <h2>Build privately first.<br />Publish when it works.</h2>
        <p>Designed for future-tech executives, entrepreneurs, and high-performance builders who want an AI team, avatar-based production, and a complete path from personal prototype to commercial collection.</p>
        <div className="hero-actions"><Link href="/studio" className="button primary">Enter Studio</Link><Link href="/shop" className="button ghost">Explore the first drop</Link></div>
      </section>
      <footer><span>MASS IDENTITY / SIM-TO-REAL NETWORK</span><span>VOICE → SIM → REAL → MARKET</span><span>© 2026</span></footer>
    </main>
  );
}
