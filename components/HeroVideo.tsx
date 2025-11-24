export default function HeroVideo() {
  return (
    <section className="relative w-full md:mx-8 md:h-[70vh] h-[60vh] md:rounded-md overflow-hidden shadow-xl">
      {/* Fade overlay on top of everything */}
      <div className="absolute inset-0 bg-gray-800 z-[999] fade-overlay"></div>

      {/* POSTER (visible immediately) */}
      <div
        className="absolute inset-0 z-[1] bg-cover bg-center"
        style={{ backgroundImage: "url(/images/landingpage-poster.webp)" }}
      />

      {/* VIDEO (start hidden, fade in after poster) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-[2] fade-video"
      >
        <source src="/videos/landingpage-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-[3]" />

      {/* Text */}
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
