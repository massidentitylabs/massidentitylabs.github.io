"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

type Scene = "signal" | "wearable" | "runway";
type SignalMode = "Baseline" | "Focus" | "Motion";
type TranscriptEntry = { speaker: "user" | "agent"; text: string };
type BrowserRecognition = {
  lang: string;
  onresult: ((event: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
  start: () => void;
  abort: () => void;
};

const scenes = {
  signal: { title: "Signal Twin", image: "/media/neuro-rig.webp", alt: "EEG headwear in right-facing profile" },
  wearable: { title: "Wearable Fit", image: "/media/soft-armor.webp", alt: "Graphite wearable soft armor and an EEG headpiece" },
  runway: { title: "Living Fashion", image: "/media/living-fashion.webp", alt: "Metallic couture in a blue-lit runway atrium" },
};

const traces: Record<SignalMode, number[]> = {
  Baseline: [22, 32, 24, 36, 42, 27, 34, 16, 24, 41, 35, 26, 39, 31, 46, 28, 35, 20, 25, 38, 30, 24, 38, 19],
  Focus: [18, 45, 63, 29, 13, 36, 70, 52, 19, 23, 58, 64, 29, 15, 45, 69, 53, 23, 20, 52, 67, 39, 18, 30],
  Motion: [18, 31, 72, 17, 53, 27, 15, 59, 45, 26, 66, 18, 17, 34, 80, 24, 12, 61, 30, 25, 40, 71, 29, 45],
};

const suggestedPrompts = ["Show the signal twin", "Simulate focus", "Simulate motion", "Open wearable fit", "Open runway scene"];

export function VoiceWorkspace() {
  const [scene, setScene] = useState<Scene>("signal");
  const [signal, setSignal] = useState<SignalMode>("Baseline");
  const [prompt, setPrompt] = useState("");
  const [listening, setListening] = useState(false);
  const [voiceReply, setVoiceReply] = useState(false);
  const [microphoneStatus, setMicrophoneStatus] = useState("");
  const [transcript, setTranscript] = useState<TranscriptEntry[]>([
    { speaker: "agent", text: "I’m Omni. Ask me to open the wearable or runway scene, or compare a simulated focus or motion trace." },
  ]);
  const recognitionRef = useRef<BrowserRecognition | null>(null);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("scene") === "runway") {
      setScene("runway");
    }
    return () => recognitionRef.current?.abort();
  }, []);

  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [transcript]);

  function runCommand(value: string) {
    const text = value.trim();
    if (!text) return;

    let reply = "Try asking for the signal twin, baseline, focus, motion, wearable fit, or the runway scene.";
    if (/\b(runway|fashion|couture)\b/i.test(text)) {
      setScene("runway");
      reply = "The Living Fashion scene is open. Inspect the wearable silhouette under cyan runway light.";
    } else if (/\b(fit|wearable|shell)\b/i.test(text)) {
      setScene("wearable");
      reply = "Wearable Fit is open. The modeled shell is highlighted alongside the EEG core and XR bridge.";
    } else if (/\b(motion|artifact|movement)\b/i.test(text)) {
      setScene("signal");
      setSignal("Motion");
      reply = "Motion mode is on. The sample includes spikes that illustrate how movement can interfere with a simulated signal.";
    } else if (/\b(focus|attention)\b/i.test(text)) {
      setScene("signal");
      setSignal("Focus");
      reply = "The synthetic focus waveform is on screen. Use it to compare how the twin responds to a more rhythmic input.";
    } else if (/\b(signal|baseline|eeg|twin)\b/i.test(text)) {
      setScene("signal");
      setSignal("Baseline");
      reply = "The Signal Twin is open with the simulated baseline waveform.";
    }

    setTranscript((entries) => [...entries.slice(-11), { speaker: "user", text }, { speaker: "agent", text: reply }]);
    setPrompt("");
    if (voiceReply && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(reply));
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    runCommand(prompt);
  }

  function toggleMicrophone() {
    if (listening) {
      recognitionRef.current?.abort();
      return;
    }

    const speechWindow = window as Window & {
      SpeechRecognition?: new () => BrowserRecognition;
      webkitSpeechRecognition?: new () => BrowserRecognition;
    };
    const Recognition = speechWindow.SpeechRecognition ?? speechWindow.webkitSpeechRecognition;
    if (!Recognition) {
      setMicrophoneStatus("Speech recognition is unavailable in this browser. Type a command or choose a preset.");
      return;
    }

    const recognition = new Recognition();
    recognitionRef.current = recognition;
    recognition.lang = "en-US";
    recognition.onresult = (event) => {
      const detected = event.results[0]?.[0]?.transcript;
      if (detected) {
        setMicrophoneStatus("Voice command received.");
        runCommand(detected);
      }
    };
    recognition.onend = () => {
      setListening(false);
      setMicrophoneStatus((status) => status === "Listening…" ? "Ready for another command." : status);
      recognitionRef.current = null;
    };
    recognition.onerror = () => setMicrophoneStatus("The microphone didn’t capture a command. Try typing or choose a preset.");
    try {
      recognition.start();
      setListening(true);
      setMicrophoneStatus("Listening…");
    } catch {
      setListening(false);
      setMicrophoneStatus("The microphone couldn’t start. Type a command or choose a preset.");
    }
  }

  return (
    <>
      <section className="studio-mode-strip" aria-label="Studio scenes">
        {(Object.entries(scenes) as [Scene, (typeof scenes)[Scene]][]).map(([key, option]) => (
          <button key={key} type="button" aria-pressed={scene === key} onClick={() => setScene(key)}>{option.title}</button>
        ))}
      </section>
      <section className="studio-shell" id="omni">
        <div className="stage-panel">
          <div className="panel-bar"><span>SPATIAL TWIN / {scenes[scene].title.toUpperCase()}</span><span>CONCEPT VIEWPORT</span></div>
          <div className={`stage-view scene-${scene}`}>
            <img src={scenes[scene].image} alt={scenes[scene].alt} />
            <div className="scan-lines" />
            {scene === "wearable" && <>
              <div className="annotation a1"><b>EEG CORE</b><span>reference geometry</span></div>
              <div className="annotation a2"><b>OUTER SHELL</b><span>editable surface</span></div>
              <div className="annotation a3"><b>XR BRIDGE</b><span>fit study</span></div>
            </>}
            {scene === "runway" && <div className="annotation a2"><b>LIVING FASHION</b><span>material and silhouette study</span></div>}
          </div>
          <div className="signal-panel">
            <div><b>SIMULATED EEG</b><span>{signal} waveform</span></div>
            <div className="signal-trace" aria-hidden="true">
              {traces[signal].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
            </div>
            <div className="signal-modes" aria-label="Simulated signal preset">
              {(Object.keys(traces) as SignalMode[]).map((mode) => (
                <button key={mode} type="button" aria-pressed={signal === mode} onClick={() => setSignal(mode)}>{mode}</button>
              ))}
            </div>
          </div>
        </div>
        <aside className="omni-panel">
          <div className="omni-head"><div className="omni-orb" /><div><b>OMNI / VOICE AGENT</b><span>Browser voice and preset scene commands</span></div></div>
          <div className="chat-log" role="log" aria-label="Omni transcript" ref={logRef}>
            {transcript.map((entry, index) => <div key={index} className={`message ${entry.speaker}`}>{entry.text}</div>)}
          </div>
          <div className="evidence-card">
            <span>SESSION INPUTS</span>
            <div><b>Biological feed</b><em>SIMULATED EEG</em></div>
            <div><b>Agent tools</b><em>SCENE + SIGNAL</em></div>
            <div><b>Active scene</b><em>{scenes[scene].title}</em></div>
          </div>
          <div className="omni-presets" aria-label="Sample commands">
            {suggestedPrompts.map((example) => <button key={example} type="button" onClick={() => runCommand(example)}>{example}</button>)}
          </div>
          <form className="prompt-box" onSubmit={submit}>
            <input aria-label="Command for Omni" placeholder="Type a command…" maxLength={200} value={prompt} onChange={(event) => setPrompt(event.target.value)} />
            <button aria-label="Send to Omni" disabled={!prompt.trim()}>↑</button>
          </form>
          <div className="omni-voice-controls">
            <button type="button" onClick={toggleMicrophone} aria-pressed={listening}>{listening ? "Stop listening" : "Use microphone"}</button>
            <label><input type="checkbox" checked={voiceReply} onChange={(event) => setVoiceReply(event.target.checked)} /> Speak replies</label>
          </div>
          {microphoneStatus && <p className="voice-status" role="status">{microphoneStatus}</p>}
        </aside>
      </section>
    </>
  );
}
