"use client";

import { useState } from "react";

export default function CleanGallery({ photos }: { photos: string[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      {/* CONSISTENT HEIGHT REAL-ESTATE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {photos.map((src) => (
          <div
            key={src}
            className="w-full h-[260px] sm:h-[280px] lg:h-[300px] overflow-hidden rounded-xl shadow cursor-zoom-in"
            onClick={() => setOpen(src)}
          >
            <img
              src={src}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center cursor-zoom-out z-[9999]"
        >
          <img
            src={open}
            className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
