"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Play, Pause } from "lucide-react";

interface SongData {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumArt: string;
  songUrl: string;
  statusLabel: string;
}

export function SpotifyCard() {
  const [song, setSong] = useState<SongData>({
    isPlaying: true,
    title: "444",
    artist: "Lithe",
    albumArt: "https://i.scdn.co/image/ab67616d0000b2738a8a718f0bd75ca88b985b8e",
    songUrl: "https://open.spotify.com",
    statusLabel: "LAST PLAYED",
  });
  const [audioActive, setAudioActive] = useState(true);

  useEffect(() => {
    // Poll the Spotify API endpoint every 15 seconds for live status
    const fetchSpotify = async () => {
      try {
        const res = await fetch("/api/spotify");
        if (res.ok) {
          const data = await res.json();
          if (data && data.title) {
            setSong(data);
          }
        }
      } catch (_) {}
    };

    fetchSpotify();
    const interval = setInterval(fetchSpotify, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 flex items-center justify-between rounded-2xl border border-border-line bg-surface-subtle p-3.5 sm:p-4 shadow-sm transition-colors hover:border-border-strong">
      {/* Left: Album cover + Track Info */}
      <div className="flex items-center gap-3.5 min-w-0">
        <a
          href={song.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative size-12 shrink-0 overflow-hidden rounded-xl border border-border-line shadow-sm hover:opacity-90 transition-opacity"
        >
          <Image
            src={song.albumArt}
            alt={song.title}
            fill
            className="object-cover"
            sizes="48px"
            unoptimized
          />
        </a>

        <div className="min-w-0">
          <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase text-content-muted">
            {/* Spotify Brand Icon */}
            <svg
              className="size-3 text-[#1DB954]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.49 17.305c-.215.352-.676.463-1.028.248-2.817-1.722-6.363-2.111-10.54-1.157-.403.092-.806-.16-.898-.563-.092-.403.16-.806.563-.898 4.568-1.044 8.487-.6 11.655 1.342.352.215.463.676.248 1.028zm1.464-3.256c-.27.44-.848.578-1.288.308-3.225-1.982-8.142-2.556-11.956-1.398-.496.15-1.024-.132-1.174-.628-.15-.496.132-1.024.628-1.174 4.364-1.325 9.774-.687 13.482 1.594.44.27.578.848.308 1.298zm.126-3.39c-3.868-2.296-10.25-2.508-13.943-1.387-.594.18-1.222-.154-1.402-.748-.18-.594.154-1.222.748-1.402 4.244-1.288 11.288-1.042 15.727 1.593.535.318.709 1.01.391 1.545-.318.534-1.01.708-1.521.4z" />
            </svg>
            <span className={song.isPlaying ? "text-[#1DB954]" : "text-content-muted"}>
              {song.statusLabel}
            </span>
          </div>

          <a
            href={song.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-bold text-content truncate hover:underline"
          >
            {song.title}
          </a>

          <p className="text-xs text-content-muted truncate">
            by: {song.artist}
          </p>
        </div>
      </div>

      {/* Right: Audio Visualizer + Play/Pause Action */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Dotted circular visualizer widget matching screenshot 2 */}
        <div className="relative flex size-11 items-center justify-center rounded-full border border-dashed border-border-strong bg-surface p-2 shadow-inner">
          <div className="flex items-end gap-[2px] h-5">
            <span
              className={`w-[2.5px] rounded-full bg-content transition-all ${
                audioActive ? "animate-[bounce_0.8s_ease-in-out_infinite] h-4" : "h-1"
              }`}
            />
            <span
              className={`w-[2.5px] rounded-full bg-content transition-all ${
                audioActive ? "animate-[bounce_1.1s_ease-in-out_infinite] h-5" : "h-2"
              }`}
              style={{ animationDelay: "0.2s" }}
            />
            <span
              className={`w-[2.5px] rounded-full bg-content transition-all ${
                audioActive ? "animate-[bounce_0.9s_ease-in-out_infinite] h-3" : "h-1.5"
              }`}
              style={{ animationDelay: "0.4s" }}
            />
            <span
              className={`w-[2.5px] rounded-full bg-content transition-all ${
                audioActive ? "animate-[bounce_1.2s_ease-in-out_infinite] h-4" : "h-2"
              }`}
              style={{ animationDelay: "0.1s" }}
            />
          </div>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={() => setAudioActive(!audioActive)}
          aria-label={audioActive ? "Pause audio animation" : "Play audio animation"}
          className="btn-chunky flex size-8 items-center justify-center rounded-lg border text-content-muted hover:text-content cursor-pointer transition-colors"
        >
          {audioActive ? (
            <Pause className="size-3.5 fill-current" />
          ) : (
            <Play className="size-3.5 fill-current ml-0.5" />
          )}
        </button>
      </div>
    </div>
  );
}
