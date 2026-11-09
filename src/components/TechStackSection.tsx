"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";

export function TechStackSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="mt-12 px-2">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-content-muted">
          Expertise
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-content">
          Tech Stack & Tools
        </h2>
      </div>

      <div className="flex flex-wrap justify-center sm:justify-start gap-3">
        {portfolioData.techStack.map((tech, idx) => (
          <div
            key={idx}
            className="group relative"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {/* Tooltip Card on Hover */}
            {hoveredIdx === idx && (
              <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-30 whitespace-nowrap rounded-lg border border-border-strong bg-surface-float px-3 py-1.5 text-center shadow-lg animate-in fade-in zoom-in-95 duration-150">
                <p className="text-xs font-bold text-content">{tech.name}</p>
                <p className="text-[10px] font-medium text-content-muted">{tech.category}</p>
                {/* Arrow */}
                <div className="absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rotate-45 border-r border-b border-border-strong bg-surface-float" />
              </div>
            )}

            {/* Icon Box */}
            <div className="flex size-12 cursor-pointer items-center justify-center rounded-xl border border-border-line bg-surface-raised transition-transform duration-150 hover:scale-105 hover:border-border-strong hover:bg-surface-float">
              {/* Image icon */}
              <div className="relative size-6">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
