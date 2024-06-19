"use client";
import Image from "next/image";
import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
const MainHomePage = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <div className="w-[100vw] h-[100vh] bg-[#000]">
            <Particles
                id="tsparticles"
                className="w-full h-full"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 500,
                                duration: 0.8,
                            },
                        },
                    },
                    particles: {
                        number: {
                            value: 8,
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        color: {
                            value: "#ffffff",
                        },
                        shape: {
                            type: "image",
                            image: [
                                {
                                    src: "./atom.png", // Adjust the path according to your public directory
                                    height: 20,
                                    width: 20,
                                },
                                {
                                    src: "./atom.png",
                                    height: 20,
                                    width: 20,
                                },
                                {
                                    src: "./atom.png",
                                    height: 20,
                                    width: 20,
                                },
                            ],
                        },
                        opacity: {
                            value: 0.5,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false,
                            },
                        },
                        size: {
                            value: 30,
                            random: false,
                            anim: {
                                enable: true,
                                speed: 4,
                                size_min: 10,
                                sync: false,
                            },
                        },
                        move: {
                            enable: true,
                            speed: 1,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200,
                            },
                        },
                    },
                    detectRetina: true,
                }}
            />

        </div>
    );
};

export default MainHomePage;
