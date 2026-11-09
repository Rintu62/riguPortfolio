"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Github, Linkedin, Calendar, Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  const [friendTooltip, setFriendTooltip] = useState<string | null>(null);

  return (
    <footer className="mt-16 border-t border-dashed border-border-line pt-12 pb-24 px-2">
      <div className="flex flex-col items-center text-center">
        {/* Book a Call Cal.com Button with Expanding Hover Effect */}
        <a
          href={portfolioData.calLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-chunky group relative mb-10 inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold shadow-sm transition-all"
        >
          <div className="flex size-6 items-center justify-center rounded-full bg-amber-500 text-white font-bold text-xs">
            {portfolioData.name.charAt(0)}
          </div>
          <div className="flex max-w-0 items-center overflow-hidden opacity-0 transition-all duration-200 group-hover:max-w-xs group-hover:opacity-100">
            <span className="text-xs text-content-muted mx-1">+</span>
            <span className="rounded-full bg-brand/20 px-1.5 py-0.5 text-[10px] font-bold text-brand">
              You
            </span>
          </div>
          <span>Book a call</span>
        </a>

        {/* Headline & Contact */}
        <div className="flex w-full flex-col sm:flex-row items-center justify-between gap-6 pb-10 border-b border-dashed border-border-line/60">
          <div className="text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-content to-content-secondary bg-clip-text text-transparent">
              Let&apos;s build something amazing.
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-content-muted">
              Open to freelance projects, contracts, and collaborations.
            </p>
            <a
              href={`mailto:${portfolioData.email}`}
              className="mt-3 inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-brand hover:underline"
            >
              <Mail className="size-3.5" />
              {portfolioData.email}
            </a>
          </div>

          {/* Social Buttons */}
          <div className="flex items-center gap">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="btn-chunky flex size-10 items-center justify-center rounded-xl border text-content-muted hover:text-content"
              aria-label="GitHub Profile"
            >
              <Github className="size-4.3" />
            </a>
            <a
              href="www.linkedin.com/in/rintu-kumar875780a2a8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-chunky flex size-10 items-center justify-center rounded-xl border text-content-muted hover:text-content"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="size-4.5" />
            </a>
            <a
              href={`rigu:${portfolioData.email}`}
              className="btn-chunky flex size-10 items-center justify-center rounded-xl border text-content-muted hover:text-content"
              aria-label="Email Me"
            >
              <Mail className="size-4.5" />
            </a>
          </div>
        </div>

        {/* Cool Friends Row */}
        <div className="w-full pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-[11px] text-content-subtle font-mono">
              some cool friends i am lucky to know
            </p>
            <div className="mt-2 flex items-center justify-center sm:justify-start gap-2">
              {portfolioData.friends.map((friend, idx) => (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setFriendTooltip(friend.name)}
                  onMouseLeave={() => setFriendTooltip(null)}
                >
                  {friendTooltip === friend.name && (
                    <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 rounded-md border border-border-strong bg-surface-float px-2 py-0.5 text-[10px] font-medium text-content shadow">
                      {friend.name}
                    </div>
                  )}
                  <a
                    href={friend.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block size-7 overflow-hidden rounded-md border border-border-line hover:border-brand transition-colors"
                  >
                    <div className="relative size-full bg-surface-raised flex items-center justify-center text-[10px] font-bold text-content-muted">
                      {friend.name.charAt(0).toUpperCase()}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-content-subtle font-mono">
            © {new Date().getFullYear()} Crafted with{" "}
            <Heart className="inline size-3 text-red-500 fill-red-500" /> by{" "}
            <span className="font-semibold text-content">{portfolioData.name}</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
