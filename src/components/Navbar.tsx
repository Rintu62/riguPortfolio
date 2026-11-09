"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Projects", href: "/projects" },
    { label: "Shenanigans", href: "/Shenanigans" },
    { label: "Blogs", href: "/blogs" },
    { label: "GuestBook", href: "/guestbook" },
    { label: "Resume", href: "/resume" },
  ];

  return (
    <header className="sticky top-0 z-[100] border-b border-dashed border-neutral-300 dark:border-[#272727] bg-background/80 backdrop-blur-md transition-colors">
      {/* 2 Cross Joints on the navbar border */}
      <span
        aria-hidden="true"
        className="cad-joint hidden sm:block bottom-0"
        style={{ left: "calc(50% - 360px)" }}
      />
      <span
        aria-hidden="true"
        className="cad-joint hidden sm:block bottom-0"
        style={{ left: "calc(50% + 360px)" }}
      />

      <nav className="mx-auto flex w-full max-w-[720px] items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          
               
       <Link
          href="/"
          className="relative flex size-11 items-center justify-center overflow-hidden rounded-xl border border-neutral-300 dark:border-[#333] bg-surface-raised transition-transform duration-150 hover:scale-95"
>
          <Image
            src="/image.png"
            alt="Rintu Gurujyot"
            fill
            className="object-cover"
            priority
          />
          </Link>

          <div className="hidden md:flex items-center gap-5 text-sm font-medium text-content-muted">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-content hover:underline transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-chunky flex md:hidden size-9 items-center justify-center rounded-lg border text-content-muted hover:text-content"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-dashed border-neutral-300 dark:border-[#272727] bg-surface px-6 py-4 animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-3 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-surface-raised text-content transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
