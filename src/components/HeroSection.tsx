"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import confetti from "canvas-confetti";
import { portfolioData } from "@/data/portfolioData";
import { SocialHoverCard } from "./SocialHoverCard";
import { SpotifyCard } from "./SpotifyCard";
import {
  XIcon,
  LinkedinIcon,
  InstagramIcon,
  PinterestIcon,
  CatGithubIcon,
  SiGithub,
  MailOutlineIcon,
} from "./SocialIcons";
import {
  FileText,
  Send,
  Code2,
  Clock,
} from "lucide-react";

interface HeroSectionProps {
  onOpenCommandMenu: () => void;
}

export function HeroSection({ onOpenCommandMenu }: HeroSectionProps) {
  const [avatarClicked, setAvatarClicked] = useState(false);
  const [bannerError, setBannerError] = useState(false);
  const [showStatusTooltip, setShowStatusTooltip] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  // Check if heroBannerImage is a video or Pinterest embed
  const isVideoBanner = useMemo(() => {
    const src = portfolioData.heroBannerImage?.toLowerCase() || "";
    return src.endsWith(".mp4") || src.endsWith(".webm") || src.includes(".mp4?") || src.includes(".webm?");
  }, []);

  const pinterestEmbedUrl = useMemo(() => {
    const src = portfolioData.heroBannerImage || "";
    if (src.includes("assets.pinterest.com") || src.includes("pinterest.com")) {
      const match = src.match(/src=["']([^"']+)["']/);
      return match ? match[1] : src;
    }
    return "";
  }, []);

  // Monitor online / active presence (Green when active/online, Red when offline/away)
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    const handleVisibility = () => {
      if (document.hidden) {
        setIsOnline(false);
      } else {
        setIsOnline(navigator.onLine);
      }
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    document.addEventListener("visibilitychange", handleVisibility);

    setIsOnline(navigator.onLine && !document.hidden);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  const handleAvatarClick = () => {
    setAvatarClicked((prev) => !prev);
    confetti({
      particleCount: 55,
      spread: 70,
      origin: { y: 0.35 },
    });
  };

  const getSocialIcon = (type: string) => {
    switch (type) {
      case "x":
        return <XIcon className="size-3.5 sm:size-4" />;
      case "linkedin":
        return <LinkedinIcon className="size-3.5 sm:size-4" />;
      case "instagram":
        return <InstagramIcon className="size-3.5 sm:size-4" />;
      case "pinterest":
        return <PinterestIcon className="size-3.5 sm:size-4" />;
      case "github":
        return <CatGithubIcon className="size-4 sm:size-4.5" />;
      case "email":
      default:
        return <MailOutlineIcon className="size-3.5 sm:size-4" />;
    }
  };

  return (
    <section className="relative w-full">
      {/* Ambient Pixel / Custom Video / Pinterest / Image Banner */}
      <div className="relative mt-8 mb-6 h-60 sm:h-68 w-full overflow-hidden rounded-[2rem] border border-border-line bg-surface-subtle shadow-sm">
        {portfolioData.heroBannerImage && !bannerError ? (
          isVideoBanner ? (
            <video
              src={portfolioData.heroBannerImage}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              onError={() => setBannerError(true)}
            />
          ) : pinterestEmbedUrl ? (
            <div className="relative w-full h-full overflow-hidden">
              <iframe
                src={pinterestEmbedUrl}
                className="w-full h-[150%] -mt-[15%] border-0 pointer-events-none scale-110 object-cover"
                scrolling="no"
                title="Pinterest Background Animation"
                onError={() => setBannerError(true)}
              />
            </div>
          ) : (
            <Image
              src={portfolioData.heroBannerImage}
              alt="Hero Banner"
              fill
              className="object-cover"
              priority
              unoptimized
              onError={() => setBannerError(true)}
            />
          )
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-tr from-neutral-200/50 via-amber-100/30 to-neutral-100/40 dark:from-neutral-900/40 dark:via-amber-950/20 dark:to-neutral-950/40" />
            <div
              className="absolute inset-0 opacity-80"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 30%, rgba(245, 158, 11, 0.15), transparent 70%), linear-gradient(to right, rgba(120,120,120,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,120,120,0.06) 1px, transparent 1px)",
                backgroundSize: "100% 100%, 20px 20px, 20px 20px",
              }}
            />
          </>
        )}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
      </div>

      {/* Avatar Container with "psst, click me!" on the LEFT */}
      <div className="relative z-10 -mt-20 sm:-mt-22 px-2 flex items-center">
        <div className="relative inline-block">
          {/* Handwritten note placed on the LEFT (Clickable) */}
          <div
            onClick={handleAvatarClick}
            className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-[108%] sm:right-[115%] flex items-center whitespace-nowrap text-content-muted select-none group/note"
          >
            <span
              className={`text-sm sm:text-base font-handwriting transition-all duration-300 ${
                avatarClicked
                  ? "text-amber-500 dark:text-amber-400 font-bold scale-105"
                  : "text-neutral-500 dark:text-content-muted group-hover/note:text-amber-500"
              }`}
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              {avatarClicked ? "you found me! 🎉" : "psst, click me!"}
            </span>
            {/* Arrow curving towards avatar on the right */}
            <svg
              width="26"
              height="16"
              viewBox="0 0 30 18"
              fill="none"
              className="text-neutral-400 dark:text-content-muted ml-1 rotate-6 transition-transform group-hover/note:translate-x-0.5"
            >
              <path
                d="M2 12 C8 12, 16 10, 24 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M19 2 L25 5 L21 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Avatar circle (Swaps between 1st Anime and 2nd Real Photo smoothly) */}
          <div
            onClick={handleAvatarClick}
            className="group relative size-20 sm:size-24 cursor-pointer rounded-full border-3 border-background bg-surface-raised shadow-lg overflow-hidden transition-transform duration-200 active:scale-95 select-none"
            title={avatarClicked ? "Click to see anime avatar!" : "Click me to reveal photo!"}
          >
            {/* 1st Image: Anime Character (Visible initially, hides on click) */}
            <Image
              src={portfolioData.avatarAnimeImage || portfolioData.avatarImage}
              alt="Anime Character"
              fill
              className={`object-cover transition-all duration-500 ${
                avatarClicked
                  ? "opacity-0 scale-75 rotate-12 pointer-events-none"
                  : "opacity-100 scale-100 rotate-0"
              }`}
              sizes="96px"
              unoptimized
            />

            {/* 2nd Image: Real Photo (Hidden initially, appears on click) */}
            <Image
              src={portfolioData.avatarRealImage || portfolioData.avatarImage}
              alt={portfolioData.name}
              fill
              className={`object-cover transition-all duration-500 ${
                avatarClicked
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-125 -rotate-12 pointer-events-none"
              }`}
              sizes="96px"
              unoptimized
            />
          </div>

          {/* Status Dot: GREEN when online/open, RED when offline/away */}
          <div
            onMouseEnter={() => setShowStatusTooltip(true)}
            onMouseLeave={() => setShowStatusTooltip(false)}
            className="absolute bottom-0.5 right-0.5 z-20 flex size-5 cursor-pointer items-center justify-center rounded-full border-2 border-background bg-neutral-900 shadow"
          >
            <span
              className={`size-2.5 rounded-full transition-colors duration-300 ${
                isOnline
                  ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.7)]"
                  : "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.7)]"
              }`}
            />

            {/* Status Tooltip on hover */}
            {showStatusTooltip && (
              <div className="absolute left-7 bottom-0 z-30 w-max rounded-xl border border-border-line bg-surface-float p-3 shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className={`size-2 rounded-full ${
                      isOnline ? "bg-emerald-500" : "bg-rose-500"
                    }`}
                  />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-content-muted">
                    {isOnline ? "Online Now" : "Offline"}
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-dashed border-border-line bg-surface-raised px-2 py-1 text-xs text-content">
                  <Clock className="size-3 text-content-muted" />
                  <span className="font-bold">{portfolioData.status.codedToday}</span>
                  <span className="text-[10px] text-content-subtle">coded today</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Intro Title */}
      <div className="mt-4 px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-content leading-snug">
          Hi, I&apos;m{" "}
          <span className="relative inline-block text-content">
            {portfolioData.name}
            {/* Signature Yellow Wavy Underline SVG under Name */}
            <svg
              viewBox="0 0 100 14"
              className="absolute -bottom-1.5 left-0 w-full overflow-visible text-[#F59E0B]"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0,4 C15,1 30,7 48,3.5 C65,6.5 82,2 99,4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2,6.5 C18,3.5 35,8 52,4.5 C68,7.5 84,3.5 98,5.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.8"
              />
            </svg>
          </span>
          <span className="block text-content-secondary mt-1 font-semibold text-lg sm:text-xl md:text-2xl">
            {portfolioData.tagline}
          </span>
        </h1>

        {/* Bio with Tech Chips */}
        <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-content-secondary">
          I build modern, interactive web applications using{" "}
          <span className="chip inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-xs font-semibold">
            <span className="size-2 rounded-full bg-blue-500" /> TypeScript
          </span>
          ,{" "}
          <span className="chip inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-xs font-semibold">
            <span className="size-2 rounded-full bg-cyan-400" /> React
          </span>
          ,{" "}
          <span className="chip inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-xs font-semibold">
            <span className="size-2 rounded-full bg-neutral-900 dark:bg-white" /> Next.js
          </span>
          ,{" "}
          <span className="chip inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-xs font-semibold">
            <span className="size-2 rounded-full bg-green-500" /> Node.js
          </span>
          , and{" "}
          <span className="chip inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-xs font-semibold">
            <span className="size-2 rounded-full bg-emerald-600" /> MongoDB
          </span>
          , with a strong emphasis on clean UI,{" "}
          <span className="font-semibold text-content">Performance</span>, and{" "}
          <span className="font-semibold text-content">User Experience</span>.
        </p>

        {/* Action Buttons - Perfectly styled for both Light & Dark Mode */}
        <div className="mt-5 flex flex-wrap items-center gap-2.5">
          <Link
            href="/resume"
            className="flex items-center gap-1.5 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 px-3.5 py-1.5 text-xs font-semibold shadow-sm hover:opacity-90 transition-all"
          >
            <FileText className="size-3.5" />
            Resume / CV
          </Link>
          <a
            href={`mailto:${portfolioData.email}`}
            className="flex items-center gap-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-100 px-3.5 py-1.5 text-xs font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shadow-sm"
          >
            <Send className="size-3.5 text-neutral-600 dark:text-neutral-300" />
            Get in touch
          </a>
        </div>

        {/* Social Icons Row */}
        <div className="mt-5 flex items-center justify-between border-t border-dashed border-border-line pt-3.5">
          <div className="flex items-center gap-1 sm:gap-1.5">
            {portfolioData.socials.map((s, idx) => (
              <SocialHoverCard
                key={idx}
                name={s.name}
                url={s.url}
                image={s.previewImage}
              >
                {getSocialIcon(s.iconType)}
              </SocialHoverCard>
            ))}
          </div>

          {/* Capsule Ctrl K Button (Visible in Light and Dark Mode) */}
          <button
            onClick={onOpenCommandMenu}
            aria-label="Open command palette"
            className="flex items-center justify-center rounded-lg border border-neutral-300 dark:border-neutral-800 bg-neutral-100 dark:bg-[#141414] px-2.5 py-1 text-[11px] font-mono text-neutral-700 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors cursor-pointer shadow-sm"
          >
            <span>Ctrl K</span>
          </button>
        </div>

        {/* Spotify Real-Time Player Card */}
        <SpotifyCard />

        {/* Current Focus Card */}
        <div className="mt-3.5 flex items-center justify-between rounded-2xl border border-border-line bg-surface-subtle p-3.5 sm:p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="size-2 rounded-full bg-emerald-500 block" />
              <span className="size-2 rounded-full bg-emerald-500 absolute inset-0 animate-ping opacity-75" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-content-muted">
                Current Focus
              </p>
              <p className="text-xs sm:text-sm font-medium text-content">
                {portfolioData.currentFocus.title}
              </p>
            </div>
          </div>
          <Code2 className="size-4 text-content-muted" />
        </div>
      </div>
    </section>
  );
}
