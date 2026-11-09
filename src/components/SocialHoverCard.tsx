"use client";

import React, { useState } from "react";
import Image from "next/image";

interface SocialHoverCardProps {
  name: string;
  url: string;
  image: string;
  children: React.ReactNode;
}

export function SocialHoverCard({ name, url, image, children }: SocialHoverCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Floating Preview Card on Hover */}
      <div
        className={`pointer-events-none absolute bottom-9 left-1/2 -translate-x-1/2 z-50 transition-all duration-200 ease-out hidden md:block ${
          hovered ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95"
        }`}
      >
        <div className="w-[160px] overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-[#1c1a1a] shadow-xl p-1.5">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="160px"
              unoptimized
            />
          </div>
          <p className="mt-1 text-center text-[11px] font-semibold text-neutral-900 dark:text-neutral-100">{name}</p>
        </div>
      </div>

      {/* Social Icon Link - Visible in both Light and Dark mode */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        className="flex size-7 items-center justify-center rounded-md text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-200/70 dark:hover:bg-white/10 transition-colors"
      >
        {children}
      </a>
    </div>
  );
}
