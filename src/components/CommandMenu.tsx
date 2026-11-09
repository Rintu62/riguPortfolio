"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  FolderGit2,
  FileText,
  BookOpen,
  MessageSquare,
  Sparkles,
  Sun,
  Copy,
  Check,
  Github,
  Mail,
  X,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // trigger toggle from parent
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      title: "View Projects",
      subtitle: "Explore selected engineering works",
      icon: <FolderGit2 className="size-4" />,
      perform: () => {
        router.push("/projects");
        onClose();
      },
    },
    {
      title: "Read Blogs",
      subtitle: "Articles on web, rust & engineering",
      icon: <BookOpen className="size-4" />,
      perform: () => {
        router.push("/blogs");
        onClose();
      },
    },
    {
      title: "GuestBook",
      subtitle: "Leave a message or sign the book",
      icon: <MessageSquare className="size-4" />,
      perform: () => {
        router.push("/guestbook");
        onClose();
      },
    },
    {
      title: "Shenanigans",
      subtitle: "Experiments & playful widgets",
      icon: <Sparkles className="size-4" />,
      perform: () => {
        router.push("/Shenanigans");
        onClose();
      },
    },
    {
      title: "View Resume",
      subtitle: "Professional background & experience",
      icon: <FileText className="size-4" />,
      perform: () => {
        router.push("/resume");
        onClose();
      },
    },
    {
      title: "Copy Email Address",
      subtitle: portfolioData.email,
      icon: copied ? <Check className="size-4 text-emerald-500" /> : <Copy className="size-4" />,
      perform: () => {
        navigator.clipboard.writeText(portfolioData.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
    {
      title: "Visit GitHub Profile",
      subtitle: "@kaihere14",
      icon: <Github className="size-4" />,
      perform: () => {
        window.open("https://github.com/kaihere14", "_blank");
        onClose();
      },
    },
  ];

  const filtered = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase()) ||
    act.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center pt-24 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-line-strong bg-surface-raised shadow-2xl animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border-line">
          <Search className="size-4.5 text-content-muted" />
          <input
            type="text"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-content placeholder:text-content-muted focus:outline-none"
          />
          <button
            onClick={onClose}
            className="text-content-muted hover:text-content p-1 rounded-md"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <p className="p-4 text-center text-xs text-content-muted">No commands found.</p>
          ) : (
            filtered.map((item, idx) => (
              <button
                key={idx}
                onClick={item.perform}
                className="w-full flex items-center justify-between p-2.5 rounded-xl text-left hover:bg-surface text-content transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-surface-subtle group-hover:bg-surface-raised border border-border-line text-content-muted group-hover:text-content transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-content-muted">{item.subtitle}</p>
                  </div>
                </div>
              </button>
            ))
          )}
        </div>

        <div className="flex items-center justify-between px-4 py-2 border-t border-border-line bg-surface text-[11px] text-content-subtle">
          <span>Navigation Palette</span>
          <div className="flex gap-2">
            <span>Esc to close</span>
            <span>↵ to select</span>
          </div>
        </div>
      </div>
    </div>
  );
}
