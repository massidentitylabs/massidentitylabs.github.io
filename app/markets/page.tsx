import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";

const markets = [
  { n: "01", title: "Techwear", image: "/media/techwear-white.webp", digital: "Avatar looks, wearable twins, game skins, cinematic collections", real: "Garments, EEG/XR shells, accessories, future prosthetic forms", entry: "Start with a personal fit prototype" },
  { n: "02", title: "Automotive", image: "/media/mobility-interior.webp", digital: "Driving simulations, quests, configurators, music and product films", real: "Interior restyling, surface kits, trim studies, installer briefs", entry: "Start with one cabin or surface study" },
  { n: "03", title: "Future Home", image: "/media/spatial-bonsai.webp", digital: "VR walkthroughs, cinematic rooms, interactive product placement", real: "Printable décor, furniture concepts, resin studies, contractor scopes", entry: "Start with one room and one hero object" },
  { n: "04", title: "Interactive Worlds", image: "/media/mobility-crystal.webp", digital: "Shows, language classes, vocal films, games, quests, virtual stores", real: "Every approved object can open a production or licensing route", entry: "Start with a five-minute playable episode" },
];

export default function Markets() {
  return <main><SiteHeader active="markets" />
    <section className="markets-hero"><p className="kicker">ONE CREATION ENGINE / FOUR COMMERCIAL ENTRIES</p><h1>Make the world.<br /><em>Then live in it.</em></h1><p>MASS IDENTITY does not force creators to choose between media, software, and physical products. One versioned project can move through all three—with evidence and ownership preserved.</p><div className="hero-actions"><Link href="/studio" className="button primary">Start as Customer 0</Link><Link href="/shop" className="button ghost">Explore Digital + Real</Link></div></section>
    <section className="market-stack">{markets.map((market) => <article className="market-row" key={market.title}><div className="market-image"><img src={market.image} alt="" /><span>{market.n}</span></div><div className="market-copy"><p className="kicker">MARKET {market.n}</p><h2>{market.title}</h2><div className="dual-life"><div><b>DIGITAL LIFE</b><p>{market.digital}</p></div><div><b>REAL LIFE</b><p>{market.real}</p></div></div><p className="entry-line">LOW-RISK ENTRY · {market.entry}</p><Link href="/studio" className="text-link">Open a private Studio room ↗</Link></div></article>)}</section>
    <section className="flagship-band"><div><p className="kicker">FLAGSHIP CONCEPT / N1</p><h2>A personal performance system—not a maker kit.</h2><p>N1 takes the modular spirit of open BCI platforms and turns it into a consumer-friendly creation path: guided fit, protected sensing core, configurable shell, XR scene, personal prototype, and a path to a creator collection.</p></div><div className="flagship-levels"><article><b>SHELL</b><span>Design the visible system</span></article><article><b>CREATOR</b><span>Build, film, test, publish</span></article><article><b>LAB</b><span>Validate, extend, license</span></article></div></section>
  </main>;
}
