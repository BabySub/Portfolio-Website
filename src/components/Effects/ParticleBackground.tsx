// ParticleBackground.tsx
import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import type { Engine, ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { useTheme } from "next-themes";

const ParticleBackground = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []); // SSR-safe

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const options: ISourceOptions = isDark
    ? {
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "attract" }, // stars attracted to cursor
            resize: true,
          },
          modes: {
            attract: { distance: 150, duration: 0.4, factor: 0.8 },
          },
        },
        particles: {
          number: { value: 140, density: { enable: true, area: 1200 } }, // increased stars
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.8,
            random: { enable: true, minimumValue: 0.2 },
            animation: { enable: true, speed: 1, minimumValue: 0.2, sync: false },
          },
          size: {
            value: { min: 0.7, max: 1.6 },
            random: true,
            animation: { enable: true, speed: 2, minimumValue: 0.5, sync: false },
          },
          move: {
            enable: true,
            speed: 0.05,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
          twinkle: {
            particles: { enable: true, color: { value: "#ffffff" }, frequency: 0.05, opacity: 1 },
          },
          links: { enable: false },
          wobble: { enable: true, distance: 1, speed: 0.3 },
        },
        detectRetina: true,
      }
    : {
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" }, resize: true },
          modes: { grab: { distance: 120, links: { opacity: 0.2 } } },
        },
        particles: {
          number: { value: 60, density: { enable: true, area: 900 } },
          color: { value: "#000000" },
          shape: { type: "circle" },
          links: {
            color: "#000000",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1.2,
          },
          move: { enable: true, speed: 1, random: true, outModes: { default: "bounce" } },
          opacity: { value: 0.5 },
          size: { value: { min: 2, max: 4 } },
        },
        detectRetina: true,
      };

  return (
    <Particles
      key={resolvedTheme}
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={options}
    />
  );
};

export default ParticleBackground;
