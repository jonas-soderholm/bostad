"use client";

import { useState } from "react";

export default function HeroVideo() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="relative w-full md:mx-8 md:h-[70vh] h-[60vh] md:rounded-md overflow-hidden shadow-xl">
      {/* POSTER stays until video draws first frame */}
      {!videoReady && (
        <img
          src="/images/landingpage-poster.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* VIDEO underneath — same z-layer */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setVideoReady(true)}
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/landingpage-poster.webp"
      >
        <source src="/videos/landingpage-video.webm" type="video/webm" />
        <source src="/videos/landingpage-video.mp4" type="video/mp4" />
      </video>

      {/* TEXT — above everything */}
      <div className="absolute inset-0 z-[10] flex flex-col items-center justify-center text-center px-4">
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
