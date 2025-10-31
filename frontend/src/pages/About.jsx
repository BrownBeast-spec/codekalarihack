"use client";
import { useEffect, useState } from "react";
import MagicBento from "@/components/ui/MagicBento";

const LAUNCH_TS = new Date("2026-01-10T09:00:00+05:30").getTime();

function LaunchCountdown({ targetTs = LAUNCH_TS }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, targetTs - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetTs]);

  const boxStyle = {
    minWidth: 72,
    padding: "10px 12px",
    borderRadius: 12,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    textAlign: "center"
  };

  const numStyle = {
    fontSize: 28,
    fontWeight: 800,
    letterSpacing: 1,
    color: "#fff",
  };

  const labelStyle = {
    fontSize: 12,
    color: "rgba(255,255,255,0.7)",
    marginTop: 4
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "6px 12px",
          borderRadius: 9999,
          background: "linear-gradient(135deg, rgba(132,0,255,0.2), rgba(0,0,0,0.6))",
          border: "1px solid rgba(132,0,255,0.35)",
          color: "#fff",
          fontSize: 13,
          letterSpacing: 1,
          textTransform: "uppercase"
        }}
      >
        Launching in
      </div>
      <div style={{ display: "flex", alignItems: "stretch", gap: 10 }}>
        <div style={boxStyle}>
          <div style={numStyle}>{String(timeLeft.days).padStart(2, "0")}</div>
          <div style={labelStyle}>Days</div>
        </div>
        <div style={boxStyle}>
          <div style={numStyle}>{String(timeLeft.hours).padStart(2, "0")}</div>
          <div style={labelStyle}>Hours</div>
        </div>
        <div style={boxStyle}>
          <div style={numStyle}>{String(timeLeft.minutes).padStart(2, "0")}</div>
          <div style={labelStyle}>Minutes</div>
        </div>
        <div style={boxStyle}>
          <div style={numStyle}>{String(timeLeft.seconds).padStart(2, "0")}</div>
          <div style={labelStyle}>Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const cards = [
    { color: "#060010", label: "Event", title: "Code Kalari", description: "A weekend of creation and community." },
    { color: "#060010", label: "Type", title: "Hackathon", description: "Build, learn, and ship fast." },
    { color: "#060010", label: "Presented by", title: "IIIT Kottayam", description: "In collaboration with MLH." },
    { color: "#060010", label: "Partner", title: "MLH", description: "Major League Hacking." },
    { color: "#060010", label: "When", title: "Coming soon", description: "Dates announced on our socials." },
    { color: "#060010", label: "Where", title: "On-campus", description: "Details TBA." }
  ];

  return (
    <section style={{ backgroundColor: "#000", color: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1rem" }}>
        <div style={{ marginBottom: "1.25rem" }}>
          <LaunchCountdown />
        </div>
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <h1 style={{ fontSize: "2.25rem", lineHeight: 1.2, margin: 0 }}>Code Kalari Hackathon</h1>
          <p style={{ opacity: 0.8, marginTop: "0.5rem" }}>Presented by IIIT Kottayam and MLH</p>
        </div>
        <MagicBento cards={cards} />
      </div>
    </section>
  );
}
