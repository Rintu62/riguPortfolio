"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Search, Star } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { Footer } from "@/components/Footer";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");

  const filtered = portfolioData.projects.filter((p) => {
    return (
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    );
  });

  const renderIcon = (type: string) => {
    switch (type) {
      case "":
        return <div className="flex size-9 items-center justify-center rounded-xl bg-amber-400 font-bold text-black text-xs">HZ</div>;
      case "switch":
        return (
          <div className="flex size-9 items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-800 p-1 border border-neutral-300 dark:border-neutral-700/60">
            <div className="flex items-center w-full h-4 rounded-full bg-emerald-500/30 p-0.5">
              <span className="size-3 rounded-full bg-emerald-400" />
              <span className="size-3 rounded-full bg-rose-500 ml-auto" />
            </div>
          </div>
        );
      case "terminal":
        return (
          <div className="flex size-9 items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 p-1.5">
            <div className="space-y-1 w-full">
              <div className="h-0.5 w-full bg-orange-400 rounded" />
              <div className="h-0.5 w-3/4 bg-neutral-500 dark:bg-white/70 rounded" />
            </div>
          </div>
        );
      case "infinity":
        return <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-900/50 text-emerald-600 dark:text-emerald-400 text-lg font-bold">∞</div>;
      case "waveform":
        return (
          <div className="flex size-9 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-950/70 border border-blue-300 dark:border-blue-900/50 p-2">
            <div className="flex items-center gap-[2px] h-4">
              <span className="w-0.5 h-2 bg-blue-500 dark:bg-blue-400 rounded-full" />
              <span className="w-0.5 h-4 bg-blue-500 dark:bg-blue-400 rounded-full" />
              <span className="w-0.5 h-3 bg-blue-500 dark:bg-blue-400 rounded-full" />
            </div>
          </div>
        );
      case "atom":
      default:
        return (
          <div className="flex size-9 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-900/50 text-amber-600 dark:text-amber-400 font-bold text-xs">
            ⚛
          </div>
        );
    }
  };

  return (
    <div className="py-8">
      <Link
        href="/"
        className="btn-chunky inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-semibold text-content-muted hover:text-content mb-6"
      >
        <ArrowLeft className="size-3.5" />
        Back to Home
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-content">
          Projects
        </h1>
        <p className="mt-2 text-sm text-content-secondary leading-relaxed">
          Open source repositories, developer tools, and scalable applications I&apos;ve engineered.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8 max-w-sm">
        <Search className="size-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-content-muted" />
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-border-line bg-surface-subtle pl-9 pr-3 py-2 text-xs text-content placeholder:text-content-muted focus:outline-none focus:border-border-strong"
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((proj, idx) => (
          <a
            key={idx}
            href={proj.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121212]/90 p-5 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-[#181818] transition-all duration-200 shadow-sm dark:shadow-none"
          >
            <div className="flex items-center justify-between mb-4">
              {renderIcon(proj.iconType)}

              <div className="flex items-center gap-1 text-content-muted group-hover:text-content text-xs font-mono transition-colors">
                {proj.stars && (
                  <span className="flex items-center gap-1 text-amber-400 font-medium">
                    <Star className="size-3 fill-amber-400 text-amber-400" />
                    {proj.stars}
                  </span>
                )}
                <ArrowUpRight className="size-4 opacity-70 group-hover:opacity-100 transition-opacity ml-1" />
              </div>
            </div>

            <div>
              <h2 className="text-base font-bold text-content group-hover:text-amber-400 transition-colors">
                {proj.title}
              </h2>
              <p className="mt-1 text-xs text-content-secondary line-clamp-2 leading-relaxed">
                {proj.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      <Footer />
    </div>
  );
}
