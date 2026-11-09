"use client";

import React, { useState } from "react";
import { ChevronDown, Briefcase, Github, Coins } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function ExperienceSection() {
  const [openIds, setOpenIds] = useState<string[]>(["experience-summer-of-bitcoin"]);

  const toggleItem = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "bitcoin":
        return <Coins className="size-5 text-amber-500" />;
      case "github":
        return <Github className="size-5 text-content" />;
      default:
        return <Briefcase className="size-5 text-blue-500" />;
    }
  };

  return (
    <section className="mt-12 px-2">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-content-muted">
          Career Path
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-content">
          Experience & Impact
        </h2>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border-line bg-surface-subtle divide-y divide-border-line shadow-sm">
        {portfolioData.experiences.map((exp) => {
          const isOpen = openIds.includes(exp.id);

          return (
            <div key={exp.id} className="transition-colors">
              <button
                type="button"
                onClick={() => toggleItem(exp.id)}
                className="flex w-full cursor-pointer items-center gap-4 p-5 text-left hover:bg-surface-raised transition-colors"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border-line bg-surface-raised">
                  {getIcon(exp.iconType)}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-content leading-snug">
                    {exp.company}
                  </h3>
                  <p className="text-xs sm:text-sm text-content-muted mt-0.5">
                    {exp.role}
                  </p>
                  <div className="mt-1.5 flex items-center gap-2 sm:hidden text-[11px] text-content-subtle">
                    <span className="uppercase font-mono">{exp.location}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="hidden sm:flex flex-col items-end text-right">
                  <span className="text-xs text-content-secondary font-medium">
                    {exp.period}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-content-subtle mt-0.5">
                    {exp.location}
                  </span>
                </div>

                <div
                  className={`text-content-muted transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="size-4.5" />
                </div>
              </button>

              {/* Expandable Details */}
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-sm text-content-secondary animate-in fade-in-50 duration-150">
                  <p className="mb-3 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-1.5 pl-4 list-disc text-xs sm:text-sm text-content-muted">
                    {exp.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
