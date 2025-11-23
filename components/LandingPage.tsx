"use client";

import { useState, useEffect, useRef } from "react";
import CleanGallery from "./CleanGallery";
import Link from "next/link";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");

  const photosTabRef = useRef<HTMLButtonElement | null>(null);
  const videosTabRef = useRef<HTMLButtonElement | null>(null);
  const underlineRef = useRef<HTMLDivElement | null>(null);

  const photos = [
    "/images/livingroom-02.webp",
    "/images/livingroom-01.webp",
    "/images/kitchen-01.webp",
    "/images/kitchen-02.webp",
    "/images/kitchen-03.webp",
    "/images/bedroom-02.webp",
    "/images/bathroom-02.webp",
    "/images/bathroom-04.webp",
    "/images/exterior-02.webp",
    "/images/exterior-03.webp",
    "/images/stairs-01.webp",
    "/images/livingroom-03.webp",
    "/images/decor-01.webp",
    "/images/bedroom-03.webp",
    "/images/exterior-01.webp",
    "/images/decor-02.webp",
    "/images/bathroom-01.webp",
    "/images/kitchen-04.webp",
    "/images/bedroom-01.webp",
    "/images/bathroom-03.webp",
    "/images/decor-03.webp",
  ];

  useEffect(() => {
    const underline = underlineRef.current;
    const el =
      activeTab === "photos" ? photosTabRef.current : videosTabRef.current;

    if (underline && el) {
      underline.style.width = `${el.offsetWidth}px`;
      underline.style.transform = `translateX(${el.offsetLeft}px)`;
    }
  }, [activeTab]);

  return (
    <main className="w-full min-h-screen bg-slate-200">
      {/* HERO */}
      <div className="w-full flex justify-center mt-6 px-3">
        <section className="relative w-full mx-8 h-[70vh] rounded-xl overflow-hidden shadow-xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/landingpage-video.webm" type="video/webm" />
            <source src="/videos/landingpage-video.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <p className="text-white/80 tracking-[0.25em] text-xl mb-3 font-light">
              STOCKHOLM | BOSTADSFOTO & VIDEO
            </p>

            <h1 className="text-white text-[5rem] font-light leading-tight">
              JONAS SÖDERHOLM
            </h1>

            <Link
              href="#gallery"
              className="text-white/90 italic text-lg mt-6 hover:text-white transition"
            >
              Se mer →
            </Link>
          </div>
        </section>
      </div>

      {/* TABS */}
      <div className="mt-12 flex justify-center" id="gallery">
        <div className="relative flex gap-12">
          <button
            ref={photosTabRef}
            onClick={() => setActiveTab("photos")}
            className={`pb-3 text-xl tracking-wide transition font-light ${
              activeTab === "photos"
                ? "text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            FOTON
          </button>

          <button
            ref={videosTabRef}
            onClick={() => setActiveTab("videos")}
            className={`pb-3 text-xl tracking-wide transition font-light ${
              activeTab === "videos"
                ? "text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            VIDEO
          </button>

          <div
            ref={underlineRef}
            className="absolute bottom-0 h-[2px] bg-black transition-all duration-300"
            style={{ width: 0, transform: "translateX(0)" }}
          />
        </div>
      </div>

      {/* CONTENT */}
      <section className="mt-12 px-4 mb-20 flex justify-center">
        {activeTab === "photos" && <CleanGallery photos={photos} />}

        {activeTab === "videos" && (
          <div className="flex gap-10 mt-6 w-full max-w-[1800px] mx-auto">
            <div className="flex-1 aspect-video">
              <iframe
                className="w-full h-full rounded-xl shadow-xl"
                src="https://www.youtube.com/embed/uZl9_LOgqlc"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>

            <div className="flex-1 aspect-video">
              <iframe
                className="w-full h-full rounded-xl shadow-xl"
                src="https://www.youtube.com/embed/vhjLKrC8HGE"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
