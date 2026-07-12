"use client";

import { useCallback } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: { detectsOn: "canvas" as const, events: { resize: true } },
    particles: {
      color: { value: ["#0ea5e9", "#7c3aed", "#22d3ee"] },
      links: { enable: false },
      move: { enable: true, outModes: { default: "bounce" as const }, random: true, speed: 0.4 },
      number: { density: { enable: true, area: 800 }, value: 45 },
      opacity: { value: 0.6, random: true },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } }
    }
  };

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles id="tsparticles" options={particlesOptions} />
    </ParticlesProvider>
  );
}
