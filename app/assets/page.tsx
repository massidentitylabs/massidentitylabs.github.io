import { SiteHeader } from "../components/SiteHeader";

const assets = [
  { image: "/media/soft-armor.webp", title: "N1 Soft Armor Shell", type: "WEARABLE / SHELL", state: "FIT TESTED", rev: "v0.8", color: "cyan" },
  { image: "/media/kinetic-shoe.webp", title: "Kinetic Sole Array", type: "TECHWEAR / FOOT", state: "FABRICATED", rev: "v1.3", color: "lime" },
  { image: "/media/mobility-bike.webp", title: "Black Frame Surface Kit", type: "MOBILITY / BODY", state: "SIMULATED", rev: "v0.6", color: "amber" },
  { image: "/media/mobility-interior.webp", title: "Night Cabin System", type: "MOBILITY / INTERIOR", state: "CONCEPT", rev: "v0.3", color: "violet" },
  { image: "/media/spatial-bonsai.webp", title: "Gravity Garden Rig", type: "SPATIAL / INSTALL", state: "ENGINEER REVIEW", rev: "v0.9", color: "lime" },
  { image: "/media/techwear-white.webp", title: "Primary Outer 02", type: "TECHWEAR / GARMENT", state: "SIMULATED", rev: "v0.5", color: "cyan" },
];

export default function Assets() {
  return <main><SiteHeader active="assets" />
    <section className="library-hero"><p className="kicker">VERSIONED / EVIDENCE-BACKED / LICENSED</p><h1>Asset Library</h1><p>The shared layer between shows, simulations, games, and physical production: twins, printable parts, materials, behaviors, build records, ownership, and validation evidence.</p><div className="search-box">⌕ Search techwear, vehicles, rooms, scenes, creators… <kbd>⌘ K</kbd></div></section>
    <section className="asset-layout"><aside className="filter-panel"><p className="kicker">FILTER</p>{["Market", "Life", "Maturity", "Production", "Compatibility", "Rights", "Safety boundary"].map((f, i) => <div className="filter-group" key={f}><b>{f}</b><span>{["All four markets", "Digital + Real", "Fit tested", "Printable / partner", "Game engine / XR", "Own / license / edition", "Creator-editable"][i]}</span><span>＋</span></div>)}</aside>
    <div><div className="asset-topline"><b>128 ASSETS</b><span>Sort: recently validated ↓</span></div><div className="asset-grid">{assets.map(a => <article className="asset-card" key={a.title}><div className="asset-image"><img src={a.image} alt="" /><span className={`signal-chip ${a.color}`}>{a.state}</span><span className="asset-rev">{a.rev}</span></div><p className="card-meta">{a.type}</p><h3>{a.title}</h3><div className="asset-formats"><span>GLB</span><span>USD</span><span>STEP</span><span>BOM</span></div><div className="asset-foot"><span>Evidence 7/9</span><button aria-label={`Open ${a.title}`}>↗</button></div></article>)}</div></div></section>
  </main>;
}
