"use client";

import React from "react";
import { Quote } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function QuoteSection() {
  return (
    <section className="relative my-12 px-2">
      <div className="relative overflow-hidden rounded-2xl border border-border-line bg-surface-subtle p-6 sm:p-8 shadow-sm">
        {/* Background Watermark Icon */}
        <Quote className="absolute -top-3 -left-3 size-20 text-content-subtle/10 -rotate-12 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <blockquote className="text-base sm:text-lg font-mono italic text-content leading-relaxed max-w-xl">
            &ldquo;{portfolioData.quote.text}&rdquo;
          </blockquote>
          <p className="mt-3 text-xs sm:text-sm font-mono text-content-muted">
            ~ {portfolioData.quote.author}
          </p>
        </div>
      </div>
    </section>
  );
}
