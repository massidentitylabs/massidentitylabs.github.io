import Link from "next/link";

export function SiteHeader({ active }: { active: "watch" | "studio" | "markets" | "assets" | "channels" | "shop" }) {
  const links = [["watch", "/", "Watch"], ["studio", "/studio", "Studio"], ["markets", "/markets", "Markets"], ["assets", "/assets", "Assets"], ["channels", "/channels", "Channels"], ["shop", "/shop", "Shop"]] as const;
  return (
    <header className="site-header">
      <Link href="/" className="brand"><span className="brand-mark">×</span><b>MASS IDENTITY</b><span>/ SIM-TO-REAL NETWORK</span></Link>
      <nav>{links.map(([key, href, label]) => <Link className={active === key ? "active" : ""} href={href} key={key}>{label}</Link>)}</nav>
      <div className="header-actions"><span className="cloud-state"><i /> STUDIO CONCEPT</span><span className="avatar">CG</span></div>
    </header>
  );
}
