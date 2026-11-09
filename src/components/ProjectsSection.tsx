"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function ProjectsSection() {
  const renderProjectIcon = (type: string) => {
    switch (type) {
      case "hz":
        return (
          <div className="flex size-9 items-center justify-center rounded-xl bg-amber-400 font-bold text-black text-xs shadow-sm">
            HZ
          </div>
        );
      case "switch":
        return (
          <div className="flex size-9 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800 p-1 border border-neutral-300 dark:border-neutral-700/60 shadow-sm">
            <div className="flex items-center w-full h-4 rounded-full bg-emerald-500/30 p-0.5">
              <span className="size-3 rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-sm" />
              <span className="size-3 rounded-full bg-rose-500 ml-auto shadow-sm" />
            </div>
          </div>
        );
      case "terminal":
        return (
          <div className="flex size-9 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-1.5 shadow-sm">
            <div className="space-y-1 w-full">
              <div className="h-0.5 w-full bg-orange-500 rounded" />
              <div className="h-0.5 w-3/4 bg-neutral-700 dark:bg-white/70 rounded" />
              <div className="h-0.5 w-1/2 bg-neutral-400 dark:bg-white/40 rounded" />
            </div>
          </div>
        );
      case "infinity":
        return (
          <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-900/50 text-emerald-600 dark:text-emerald-400 text-lg font-bold shadow-sm">
            ∞
          </div>
        );
      case "waveform":
        return (
          <div className="flex size-9 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-900/50 p-2 shadow-sm">
            <div className="flex items-center gap-[2px] h-4">
              <span className="w-0.5 h-2 bg-blue-500 dark:bg-blue-400 rounded-full" />
              <span className="w-0.5 h-4 bg-blue-500 dark:bg-blue-400 rounded-full" />
              <span className="w-0.5 h-3 bg-blue-500 dark:bg-blue-400 rounded-full" />
              <span className="w-0.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full" />
            </div>
          </div>
        );
      case "atom":
      default:
        return (
          <div className="flex size-9 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900/50 text-amber-600 dark:text-amber-400 shadow-sm">
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
              <circle cx="12" cy="12" r="3" />
              <path d="M4 12h3M17 12h3M12 4v3M12 17v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        );
    }
  };

  return (
    <section className="mt-12 px-2">
      {/* Header: "projects / 09" on left, "All projects ->" on right */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-xs sm:text-sm font-mono text-neutral-500 dark:text-content-muted">
          projects / <span className="text-neutral-900 dark:text-content font-bold">{portfolioData.projectsCount}</span>
        </p>

        <Link
          href="/projects"
          className="group flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-500 dark:text-content-muted hover:text-black dark:hover:text-content transition-colors"
        >
          All projects
          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* Grid of Projects: White in Light Mode, Dark in Dark Mode */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {portfolioData.projects.map((proj, idx) => (
          <a
            key={idx}
            href={proj.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-[#121212]/90 p-5 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-[#181818] transition-all duration-200 shadow-sm"
          >
            {/* Top row: Icon on left, Star + Arrow on right */}
            <div className="flex items-center justify-between mb-4">
              {renderProjectIcon(proj.iconType)}

              <div className="flex items-center gap-1 text-neutral-500 dark:text-content-muted group-hover:text-neutral-900 dark:group-hover:text-content text-xs font-mono transition-colors">
                {proj.stars && (
                  <span className="flex items-center gap-1 text-amber-500 dark:text-amber-400 font-medium">
                    <Star className="size-3 fill-amber-500 dark:fill-amber-400 text-amber-500 dark:text-amber-400" />
                    {proj.stars}
                  </span>
                )}
                <ArrowUpRight className="size-4 opacity-70 group-hover:opacity-100 transition-opacity ml-1" />
              </div>
            </div>

            {/* Bottom info: Title & One-liner description */}
            <div>
              <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-content group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
                {proj.title}
              </h3>
              <p className="mt-1 text-xs text-neutral-600 dark:text-content-secondary line-clamp-2 leading-relaxed">
                {proj.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
