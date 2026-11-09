"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, ArrowUpRight, Search } from "lucide-react";
import { Footer } from "@/components/Footer";

const sampleBlogs = [
  {
    id: "building-zero-trust-sync-in-rust",
    title: "Building Zero-Trust Encrypted Secrets Sync in Rust & Nostr",
    date: "May 8, 2026",
    readTime: "9 min read",
    excerpt:
      "A deep dive into end-to-end cryptographic secret sharing across devices without relying on central storage servers.",
    tags: ["Rust", "Security", "Cryptography", "Nostr"],
  },
  {
    id: "optimizing-nextjs-web-performance",
    title: "Architecting Ultra-Fast React Apps with Next.js 15",
    date: "Dec 28, 2025",
    readTime: "8 min read",
    excerpt:
      "How partial prerendering, smart asset prefetching, and minimal client JavaScript yield a flawless 100 Lighthouse score.",
    tags: ["Next.js", "React", "Performance"],
  },
  {
    id: "bitcoin-cashu-ecash-mechanics",
    title: "Understanding Cashu: Chaumian Ecash on Bitcoin",
    date: "Nov 10, 2025",
    readTime: "10 min read",
    excerpt:
      "An engineering breakdown of blinded signatures, lightning mints, and instant private micro-transactions.",
    tags: ["Bitcoin", "Cashu", "Web3"],
  },
];

export default function BlogsPage() {
  const [search, setSearch] = useState("");

  const filtered = sampleBlogs.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      b.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

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
          Blogs
        </h1>
        <p className="mt-2 text-sm text-content-secondary leading-relaxed">
          Thoughts, technical deep dives, and architectural lessons learned from building software.
        </p>
      </div>

      <div className="relative mb-8 max-w-md">
        <Search className="size-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-content-muted" />
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-border-line bg-surface-subtle pl-9 pr-3 py-2 text-xs text-content placeholder:text-content-muted focus:outline-none focus:border-border-strong"
        />
      </div>

      <div className="space-y-4">
        {filtered.map((blog) => (
          <article
            key={blog.id}
            className="group rounded-2xl border border-border-line bg-surface-subtle p-5 sm:p-6 hover:border-border-strong hover:bg-surface-raised transition-all"
          >
            <div className="flex items-center gap-3 text-xs text-content-muted mb-2">
              <span>{blog.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="size-3" />
                {blog.readTime}
              </span>
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-content group-hover:text-brand transition-colors flex items-center justify-between">
              <span>{blog.title}</span>
              <ArrowUpRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
            </h2>

            <p className="mt-2 text-sm text-content-secondary leading-relaxed">
              {blog.excerpt}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border-line bg-surface px-2 py-0.5 text-[10px] font-semibold text-content-subtle"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <Footer />
    </div>
  );
}
