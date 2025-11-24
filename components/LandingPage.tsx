// "use client";

// import { useState, useEffect, useRef } from "react";
// import CleanGallery from "./CleanGallery";
// import Link from "next/link";
// import HeroVideo from "./HeroVideo";

// export default function LandingPage() {
//   const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");

//   const photosTabRef = useRef<HTMLButtonElement | null>(null);
//   const videosTabRef = useRef<HTMLButtonElement | null>(null);
//   const underlineRef = useRef<HTMLDivElement | null>(null);

//   const photos = [
//     "/images/livingroom-02.webp",
//     "/images/livingroom-01.webp",
//     "/images/kitchen-01.webp",
//     "/images/kitchen-02.webp",
//     "/images/kitchen-03.webp",
//     "/images/bedroom-02.webp",
//     "/images/bathroom-02.webp",
//     "/images/bathroom-04.webp",
//     "/images/exterior-02.webp",
//     "/images/exterior-03.webp",
//     "/images/stairs-01.webp",
//     "/images/livingroom-03.webp",
//     "/images/decor-01.webp",
//     "/images/bedroom-03.webp",
//     "/images/exterior-01.webp",
//     "/images/decor-02.webp",
//     "/images/bathroom-01.webp",
//     "/images/kitchen-04.webp",
//     "/images/bedroom-01.webp",
//     "/images/bathroom-03.webp",
//     "/images/decor-03.webp",

//     // "/images/decor-03.webp",
//   ];

//   useEffect(() => {
//     const underline = underlineRef.current;
//     const el =
//       activeTab === "photos" ? photosTabRef.current : videosTabRef.current;

//     if (underline && el) {
//       underline.style.width = `${el.offsetWidth}px`;
//       underline.style.transform = `translateX(${el.offsetLeft}px)`;
//     }
//   }, [activeTab]);

//   return (
//     <main className="w-full min-h-screen bg-slate-200">
//       {/* HERO SSR VIDEO */}
//       <div className="w-full flex justify-center md:px-3">
//         <HeroVideo />
//       </div>

//       {/* TABS */}
//       <div className="mt-6 md:mt-12 flex justify-center" id="gallery">
//         <div className="relative flex gap-12">
//           <button
//             ref={photosTabRef}
//             onClick={() => setActiveTab("photos")}
//             className={`pb-3 text-sm md:text-xl tracking-wide transition font-light ${
//               activeTab === "photos"
//                 ? "text-black"
//                 : "text-gray-500 hover:text-black"
//             }`}
//           >
//             FOTON
//           </button>

//           <button
//             ref={videosTabRef}
//             onClick={() => setActiveTab("videos")}
//             className={`pb-3 text-sm md:text-xl tracking-wide transition font-light ${
//               activeTab === "videos"
//                 ? "text-black"
//                 : "text-gray-500 hover:text-black"
//             }`}
//           >
//             VIDEO
//           </button>

//           <div
//             ref={underlineRef}
//             className="absolute bottom-0 h-[2px] bg-black transition-all duration-300"
//             style={{ width: 0, transform: "translateX(0)" }}
//           />
//         </div>
//       </div>

//       {/* CONTENT */}
//       <section className="mt-6 md:mt-12 px-4 mb-20 flex justify-center">
//         {activeTab === "photos" && <CleanGallery photos={photos} />}

//         {activeTab === "videos" && (
//           <div className="flex gap-10 mt-6 w-full max-w-[1800px] mx-auto">
//             <div className="flex-1 aspect-video">
//               <iframe
//                 className="w-full h-full rounded-xl shadow-xl"
//                 src="https://www.youtube.com/embed/uZl9_LOgqlc"
//                 allow="autoplay; encrypted-media"
//                 allowFullScreen
//               />
//             </div>

//             <div className="flex-1 aspect-video">
//               <iframe
//                 className="w-full h-full rounded-xl shadow-xl"
//                 src="https://www.youtube.com/embed/vhjLKrC8HGE"
//                 allow="autoplay; encrypted-media"
//                 allowFullScreen
//               />
//             </div>
//           </div>
//         )}
//       </section>
//     </main>
//   );
// }

import HeroVideo from "@/components/HeroVideo";
import LandingTabs from "./LandingTabs";

export default function Page() {
  return (
    <main className="w-full min-h-screen bg-slate-200">
      <div className="w-full flex justify-center md:px-3">
        <HeroVideo />
      </div>

      <LandingTabs />
    </main>
  );
}
