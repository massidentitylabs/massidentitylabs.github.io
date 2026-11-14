import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { VoiceWorkspace } from "./VoiceWorkspace";

export default function Studio() {
  return (
    <main>
      <SiteHeader active="studio" />
      <section className="workspace-title">
        <div>
          <p className="kicker">MASS IDENTITY / CONVERGENCE</p>
          <h1>Creator Studio</h1>
          <p className="workspace-subtitle">Explore how a voice agent can act on your intent and a simulated biological signal in the same spatial workspace.</p>
        </div>
        <div className="workspace-actions">
          <span className="room-live"><i /> INTERACTIVE DEMO</span>
          <Link href="#omni" className="button primary">Try Omni ↓</Link>
        </div>
      </section>
      <VoiceWorkspace />
      <section className="studio-bottom">
        <div>
          <p className="kicker">STUDIO WORKFLOW</p>
          <div className="participant-row" aria-label="Human, biological signal, and Omni">
            <span title="Human">HU</span><span title="Simulated EEG">EEG</span><span title="Omni voice agent">AI</span>
          </div>
        </div>
        <div className="next-gate">
          <p className="kicker">FROM SIMULATION TO PROTOTYPE</p>
          <b>Inspect the wearable and its reference geometry.</b>
          <span>Compare the headwear, soft armor, and other studies in the twin library.</span>
          <Link href="/assets">Open the asset library →</Link>
        </div>
      </section>
    </main>
  );
}
