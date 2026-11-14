import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import "./channels.css";

const channels = [
  { image: "/media/soft-armor.webp", code: "TECHWEAR / CUSTOMER 0", title: "NeuroFrame Lab", creator: "AO / PERFORMANCE BUILDER", offer: "Private builds · wearable films · personal prototypes", members: "1.8K following" },
  { image: "/media/techwear-white.webp", code: "EDUCATION / INTERACTIVE SHOW", title: "Future English", creator: "MAYA K. / LANGUAGE DIRECTOR", offer: "Cinematic lessons · songs · avatar rehearsals · collections", members: "240 learners" },
  { image: "/media/mobility-interior.webp", code: "AUTOMOTIVE / PLAYABLE FILM", title: "Night Cabin Garage", creator: "LX / RESTYLING STUDIO", offer: "Driving quests · music films · shoppable interior kits", members: "3.4K following" },
  { image: "/media/spatial-bonsai.webp", code: "HOME / SIM-TO-REAL", title: "Living Matter", creator: "NARA / SPACE ARTIST", offer: "VR stories · décor editions · contractor handoff", members: "970 following" },
];

export default function Channels() {
  return <main><SiteHeader active="channels" />
    <section className="channel-hero"><div><p className="kicker">CREATOR-OWNED SHOWS / WORLDS / LABS / STORES</p><h1>Build the world.<br />Play the story.<br /><em>Ship the object.</em></h1><p>A channel can be a show, class, music film, quest, virtual store, build diary, or service demonstration. The same creator identity owns the audience, assets, prototypes, and commercial rights.</p></div><div className="channel-stat"><span>LIVE NOW</span><b>07</b><p>Private avatar rooms and public shows across all four markets.</p></div></section>
    <section className="channel-grid">{channels.map((channel) => <article className="channel-card" key={channel.title}><div className="channel-image"><img src={channel.image} alt="" /><button>＋ FOLLOW</button></div><div className="channel-copy"><p className="card-meta">{channel.code}</p><h2>{channel.title}</h2><b>{channel.creator}</b><p>{channel.offer}</p><div><span>{channel.members}</span><Link href="/">Open channel ↗</Link></div></div></article>)}</section>
    <section className="teach-band"><div><p className="kicker">CHANNEL FORMAT / FUTURE ENGLISH</p><h2>Teach through<br />worlds people<br />remember.</h2></div><div><p>A tutor directs a future-culture episode. Students watch, pause, sing or speak, interview an AI or human creator, and co-design a shoppable variation. The class becomes both education and creator-owned media.</p><div className="class-flow"><span>WATCH</span><span>PERFORM</span><span>CO-DESIGN</span><span>PUBLISH</span></div><button className="button primary">Preview a lesson room</button></div></section>
  </main>;
}
