import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";

const markets = [
  { id: "techwear", label: "Techwear", image: "/media/kinetic-shoe.webp", digital: "Twin / game-ready look", real: "Wearable / fit prototype", price: "Twins from $48" },
  { id: "automotive", label: "Automotive", image: "/media/mobility-interior.webp", digital: "Drive scene / configurator", real: "Restyling / installer brief", price: "Studies from $950" },
  { id: "home", label: "Future Home", image: "/media/spatial-bonsai.webp", digital: "VR room / film set", real: "Décor / contractor package", price: "Commissions from $1,800" },
  { id: "worlds", label: "Interactive Worlds", image: "/media/mobility-crystal.webp", digital: "Quest / show / music film", real: "Shoppable object routes", price: "World kits from $120" },
];

export default function Shop() {
  return <main><SiteHeader active="shop" />
    <section className="commerce-hero">
      <div className="commerce-copy"><p className="kicker">MASS IDENTITY MARKET / DIGITAL + REAL</p><h1>One design.<br /><em>Two lives.</em></h1><p>Enter through a digital twin, a playable world, or a personal prototype. Keep the design for yourself—or prove it, publish it, sell a collection, and license the system.</p><div className="hero-actions"><Link href="#markets" className="button primary">Shop by market ↓</Link><Link href="#n1" className="button ghost">Start with N1</Link></div></div>
      <div className="commerce-visual"><img src="/media/mobility-crystal.webp" alt="Simulated automotive surface concept" /><div className="visual-caption"><span>CURRENT WORLD / NIGHT DRIVE 06</span><b>Simulation approved</b><small>3 shoppable objects · 1 physical route</small></div></div>
    </section>

    <section className="transaction-strip" aria-label="Ways to transact"><div><b>DIGITAL TWIN</b><span>Own, fork, use in scenes</span></div><div><b>PERSONAL PROTOTYPE</b><span>Customer 0 test route</span></div><div><b>MADE TO ORDER</b><span>Creator or partner fulfilled</span></div><div><b>LICENSE / RIGHTS</b><span>Build a commercial collection</span></div></section>

    <section className="commerce-model"><div><p className="kicker">THE COMMERCE MODEL</p><h2>Digital is the experience.<br />Real is the proof.</h2></div><div className="commerce-lanes"><article><span>01 / DIGITAL</span><h3>Watch, play, wear, drive, inhabit.</h3><p>Twins can live in films, classes, avatar wardrobes, games, quests, VR rooms, and interactive stores. Optional collectible editions can add provenance or community access without replacing the actual product rights.</p></article><article><span>02 / REAL</span><h3>Order, test, install, manufacture.</h3><p>Move an approved design into a personal prototype, made-to-order product, installer or contractor package, limited collection, or brand license.</p></article></div></section>

    <section className="market-shop" id="markets"><div className="section-head"><div><p className="kicker">SHOP BY MARKET</p><h2>Choose the world you want to enter.</h2></div><span className="status-safe">MATURITY + RIGHTS + SAFETY SHOWN ON EVERY LISTING</span></div><nav className="market-tabs" aria-label="Market categories">{markets.map(m => <a href={`#${m.id}`} key={m.id}>{m.label}</a>)}</nav><div className="market-product-grid">{markets.map(m => <article className="market-product" id={m.id} key={m.id}><div className="market-product-image"><img src={m.image} alt="" /><span>{m.label}</span></div><div className="market-product-copy"><div><p className="card-meta">DIGITAL</p><b>{m.digital}</b></div><div><p className="card-meta">REAL</p><b>{m.real}</b></div><div className="price-row"><strong>{m.price}</strong><button aria-label={`Explore ${m.label}`}>Explore ↗</button></div></div></article>)}</div></section>

    <section className="n1-band" id="n1"><div className="n1-image"><img src="/media/soft-armor.webp" alt="N1 wearable shell concept" /><span>FLAGSHIP / N1</span></div><div className="n1-copy"><p className="kicker">CUSTOMER 0 / EXECUTIVE BUILDER SYSTEM</p><h2>Build it for yourself first.</h2><p>N1 is a consumer-friendly, guided evolution of the open BCI spirit: a protected EEG reference core, creator-editable fit and shell system, XR integration, personal cinematic test, and a route from one prototype to a collection.</p><div className="n1-levels"><article><b>SHELL</b><span>Personal style + fit</span><strong>From $340</strong></article><article><b>CREATOR</b><span>Studio + film + prototype</span><strong>Apply for founding run</strong></article><article><b>LAB</b><span>Research extension + validation</span><strong>Partner program</strong></article></div><Link href="/studio" className="button primary">Enter the Customer 0 room</Link><small>Non-medical positioning. Research and higher-risk functions remain behind specialist validation gates.</small></div></section>

    <section className="license-band"><div><p className="kicker">FROM SELF-USE TO COMMERCIAL RIGHTS</p><h2>Keep it private.<br />Or turn proof into a brand.</h2></div><div><p>Your first order is not inventory speculation; it is personal evidence. When the object and story work, MASS IDENTITY can package the twin, build record, media, demand signal, and rights for a drop, a creator brand, or a licensing conversation.</p><button className="button ghost">Open licensing desk</button></div></section>
  </main>;
}
