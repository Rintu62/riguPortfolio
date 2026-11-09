"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Send, MessageSquareHeart, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";

interface GuestEntry {
  id: string;
  name: string;
  message: string;
  date: string;
}

export default function GuestbookPage() {
  const [entries, setEntries] = useState<GuestEntry[]>([
    {
      id: "1",
      name: "Siddharth",
      message: "The CAD dashed border aesthetic is insane! Love the micro-interactions 🔥",
      date: "Oct 28, 2026",
    },
    {
      id: "2",
      name: "Elena Rostova",
      message: "Super clean portfolio. The Command palette and confetti avatar are top tier.",
      date: "Oct 22, 2026",
    },
    {
      id: "3",
      name: "Devon M.",
      message: "Great work on daemonDoc! Bookmarked your portfolio.",
      date: "Oct 15, 2026",
    },
  ]);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("guestbook_entries");
    if (saved) {
      try {
        setEntries(JSON.parse(saved));
      } catch (_) {}
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newEntry: GuestEntry = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      date: "Just now",
    };

    const updated = [newEntry, ...entries];
    setEntries(updated);
    localStorage.setItem("guestbook_entries", JSON.stringify(updated));
    setName("");
    setMessage("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
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
          GuestBook
          <MessageSquareHeart className="size-7 text-amber-500" />
        </h1>
        <p className="mt-2 text-sm text-content-secondary leading-relaxed">
          Leave a message, say hello, or share feedback on the projects!
        </p>
      </div>

      {/* Sign Form */}
      <div className="rounded-2xl border border-border-line bg-surface-subtle p-5 sm:p-6 mb-10 shadow-sm">
        <h2 className="text-base font-bold text-content mb-3">Sign the Guestbook</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Your name or handle..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-xl border border-border-line bg-surface px-4 py-2 text-sm text-content placeholder:text-content-muted focus:outline-none focus:border-border-strong"
          />
          <textarea
            placeholder="Your friendly message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={3}
            className="w-full rounded-xl border border-border-line bg-surface px-4 py-2 text-sm text-content placeholder:text-content-muted focus:outline-none focus:border-border-strong resize-none"
          />
          <div className="flex items-center justify-between">
            {submitted && (
              <span className="flex items-center gap-1.5 text-xs text-emerald-500 font-medium">
                <CheckCircle2 className="size-3.5" />
                Message posted!
              </span>
            )}
            <button
              type="submit"
              className="btn-chunky-primary ml-auto flex items-center gap-2 rounded-xl px-5 py-2 text-xs font-bold cursor-pointer"
            >
              <Send className="size-3.5" />
              Sign
            </button>
          </div>
        </form>
      </div>

      {/* Guest Entries Feed */}
      <div className="space-y-4">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="rounded-2xl border border-border-line bg-surface-subtle p-4 sm:p-5"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-bold text-sm text-content">{entry.name}</span>
              <span className="text-[11px] font-mono text-content-subtle">{entry.date}</span>
            </div>
            <p className="text-sm text-content-secondary leading-relaxed">
              {entry.message}
            </p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
