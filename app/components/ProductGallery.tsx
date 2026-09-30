"use client";

import { useState } from "react";

export default function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);

  if (images.length === 0) {
    return (
      <div className="bg-[#1a1a2e] rounded-xl aspect-[4/5] flex items-center justify-center text-gray-400 text-sm">
        No image
      </div>
    );
  }

  const current = images[Math.min(active, images.length - 1)];
  const go = (dir: number) =>
    setActive((i) => (i + dir + images.length) % images.length);

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative bg-[#1a1a2e] rounded-xl overflow-hidden aspect-[4/5] flex items-center justify-center">
        <img
          alt={`${name} — image ${active + 1} of ${images.length}`}
          src={current}
          className="w-full h-full object-contain p-6"
        />
        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-900 text-xl font-bold flex items-center justify-center shadow transition"
            >
              &#8249;
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-gray-900 text-xl font-bold flex items-center justify-center shadow transition"
            >
              &#8250;
            </button>
            <span className="absolute bottom-3 right-3 text-xs font-semibold text-white bg-black/50 px-2 py-1 rounded">
              {active + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
          {images.map((src, i) => (
            <button
              type="button"
              key={`${src}-${i}`}
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              className={`bg-[#1a1a2e] rounded-lg overflow-hidden aspect-square flex items-center justify-center border-2 transition-all ${
                i === active
                  ? "border-green-500"
                  : "border-transparent hover:border-green-300"
              }`}
            >
              <img
                alt={`${name} thumbnail ${i + 1}`}
                src={src}
                className="w-full h-full object-contain p-2"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
