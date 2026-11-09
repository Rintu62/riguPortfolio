"use client";

import React, { useState } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { ArrowLeft, Sparkles, RefreshCw, Zap } from "lucide-react";
import { Footer } from "@/components/Footer";

export default function ShenanigansPage() {
  const [clickCount, setClickCount] = useState(0);
  const [reactionState, setReactionState] = useState<"idle" | "waiting" | "ready" | "done">("idle");
  const [startTime, setStartTime] = useState(0);
  const [score, setScore] = useState<number | null>(null);

  const handleConfettiBlast = () => {
    setClickCount((c) => c + 1);
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  const startReactionTest = () => {
    setReactionState("waiting");
    setScore(null);
    const delay = Math.floor(Math.random() * 2000) + 1500;
    setTimeout(() => {
      setReactionState("ready");
      setStartTime(Date.now());
    }, delay);
  };

  const handleReactionClick = () => {
    if (reactionState === "waiting") {
      setReactionState("idle");
      alert("Too early! Wait for green.");
    } else if (reactionState === "ready") {
      const elapsed = Date.now() - startTime;
      setScore(elapsed);
      setReactionState("done");
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
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-content flex items-center gap-3">
          Shenanigans
          <Sparkles className="size-7 text-amber-500 animate-spin-slow" />
        </h1>
        <p className="mt-2 text-sm text-content-secondary leading-relaxed">
          Random micro-experiments, mini widgets, and playful code doodles.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Experiment 1: Confetti Cannon */}
        <div className="rounded-2xl border border-border-line bg-surface-subtle p-6 flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-base text-content">Confetti Cannon</h2>
            <p className="text-xs text-content-muted mt-1">
              Click to burst dopamine particles across the viewport.
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-xs font-mono text-content-subtle">
              Fired: {clickCount} times
            </span>
            <button
              onClick={handleConfettiBlast}
              className="btn-chunky-primary flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold cursor-pointer"
            >
              <Sparkles className="size-3.5" />
              Pop Confetti!
            </button>
          </div>
        </div>

        {/* Experiment 2: Reflex Benchmark */}
        <div className="rounded-2xl border border-border-line bg-surface-subtle p-6 flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-base text-content">Reflex Benchmark</h2>
            <p className="text-xs text-content-muted mt-1">
              Test your neuro-reaction latency in milliseconds.
            </p>
          </div>

          <div className="mt-6">
            {reactionState === "idle" && (
              <button
                onClick={startReactionTest}
                className="btn-chunky w-full flex items-center justify-center gap-2 rounded-xl border py-2.5 text-xs font-bold"
              >
                <Zap className="size-3.5 text-amber-500" />
                Start Test
              </button>
            )}

            {reactionState === "waiting" && (
              <div
                onClick={handleReactionClick}
                className="w-full cursor-pointer rounded-xl bg-amber-500/20 border border-amber-500/40 p-3 text-center text-xs font-bold text-amber-400"
              >
                Wait for green... (click now = DQ)
              </div>
            )}

            {reactionState === "ready" && (
              <div
                onClick={handleReactionClick}
                className="w-full cursor-pointer rounded-xl bg-emerald-500 text-neutral-950 p-3 text-center text-xs font-bold animate-pulse"
              >
                CLICK NOW! ⚡
              </div>
            )}

            {reactionState === "done" && (
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-emerald-500">
                  {score} ms!
                </span>
                <button
                  onClick={startReactionTest}
                  className="btn-chunky flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium"
                >
                  <RefreshCw className="size-3" />
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
