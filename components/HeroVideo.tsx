"use client";

import { useEffect, useState } from "react";

export default function HeroVideo() {
  const [hidePoster, setHidePoster] = useState(false);

  useEffect(() => {
    // Poster stays visible for 1 second
    const t = setTimeout(() => setHidePoster(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full md:mx-8 md:h-[70vh] h-[60vh] md:rounded-md overflow-hidden shadow-xl">
      {/* Gray fade overlay */}
      <div className="absolute inset-0 z-[999] bg-gray-800 fade-overlay"></div>

      {/* REAL poster div ABOVE the video */}
      <div
        className={`absolute inset-0 bg-cover bg-center z-[3] transition-opacity duration-700 ${
          hidePoster ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: "url(/images/landingpage-poster.webp)" }}
      />

      {/* VIDEO underneath poster */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-[1]"
      >
        <source src="/videos/landingpage-video.mp4" type="video/mp4" />
      </video>

      {/* TEXT */}
      <div className="absolute inset-0 z-[4] flex flex-col items-center justify-center text-center px-4">
        <p className="text-white/80 tracking-[0.25em] text-[10px] md:text-xl mb-3 font-light">
          STOCKHOLM | BOSTADSFOTO & VIDEO
        </p>

        <h1 className="text-white text-2xl md:text-[5rem] font-light leading-tight">
          JONAS SÖDERHOLM
        </h1>

        <a
          href="#gallery"
          className="text-white/90 italic text-sm md:text-lg mt-6 hover:text-white transition"
        >
          Se mer →
        </a>
      </div>
    </section>
  );
}
