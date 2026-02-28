import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export const BackgroundParticles = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "bubble" },
                    },
                    modes: {
                        bubble: { distance: 200, size: 6, duration: 2, opacity: 0.8 },
                    },
                },
                particles: {
                    color: { value: "#f43f5e" }, // Color de tus partículas (Rose)
                    links: { enable: false },
                    move: {
                        enable: true,
                        speed: 0.5,
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: { default: "out" },
                    },
                    number: { density: { enable: true, area: 800 }, value: 40 },
                    opacity: { value: 0.2 },
                    shape: { type: "circle" },
                    size: { value: { min: 1, max: 3 } },
                },
                detectRetina: true,
            }}
            style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
        />
    );
};