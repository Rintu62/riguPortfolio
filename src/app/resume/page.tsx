"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download, Mail, Github, Globe, GraduationCap, Briefcase, Award, Printer, FileText, Eye, Maximize2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { Footer } from "@/components/Footer";

export default function ResumePage() {
  const [viewMode, setViewMode] = useState<"document" | "pdf">("document");

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-8">
      {/* Top Navigation & Action Buttons */}
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/"
          className="btn-chunky inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-semibold text-content-muted hover:text-content"
        >
          <ArrowLeft className="size-3.5" />
          Back to Home
        </Link>

        <div className="flex items-center gap-2">
          {/* Open in Full Size in Chrome / New Tab */}
          <a
            href={portfolioData.resumeUrl || "/images/resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-chunky inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold text-content-muted hover:text-content cursor-pointer transition-colors"
            title="Open Full Size in Chrome native viewer"
          >
            <Maximize2 className="size-3.5" />
            <span>Full Size</span>
          </a>

          {/* Print Button */}
          <button
            onClick={handlePrint}
            className="btn-chunky inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold text-content-muted hover:text-content cursor-pointer transition-colors"
            title="Print or Save as PDF"
          >
            <Printer className="size-3.5" />
            <span>Print</span>
          </button>

          {/* Download PDF Button */}
          <a
            href={portfolioData.resumeUrl || "/images/resume.pdf"}
            download={`${portfolioData.name.replace(/\s+/g, "_")}_Resume.pdf`}
            className="btn-chunky-primary inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-bold cursor-pointer transition-colors"
            title="Download original Resume PDF"
          >
            <Download className="size-3.5" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* View Switcher Tabs */}
      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={() => setViewMode("document")}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
            viewMode === "document"
              ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-sm"
              : "border border-neutral-300 dark:border-neutral-800 text-content-muted hover:text-content"
          }`}
        >
          <FileText className="size-3.5" />
          Document View
        </button>

        <button
          onClick={() => setViewMode("pdf")}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
            viewMode === "pdf"
              ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-sm"
              : "border border-neutral-300 dark:border-neutral-800 text-content-muted hover:text-content"
          }`}
        >
          <Eye className="size-3.5" />
          PDF Preview
        </button>
      </div>

      {/* PDF Embedded View */}
      {viewMode === "pdf" && (
        <div className="w-full h-[88vh] rounded-3xl overflow-hidden border border-border-line bg-surface-subtle shadow-sm mb-10">
          <iframe
            src={`${portfolioData.resumeUrl || "/images/resume.pdf"}#toolbar=1&navpanes=0&view=FitH&zoom=page-width`}
            className="w-full h-full rounded-3xl"
            title="Resume PDF"
          />
        </div>
      )}

      {/* Formatted Resume Document Wrapper */}
      {viewMode === "document" && (
        <div className="rounded-3xl border border-border-line bg-surface-subtle p-6 sm:p-10 shadow-sm space-y-10">
          {/* Header */}
          <div className="border-b border-dashed border-border-line pb-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-content">
              {portfolioData.name}
            </h1>
            <p className="text-base text-brand font-medium mt-1">
              {portfolioData.role}
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-content-secondary">
              <span className="flex items-center gap-1.5">
                <Mail className="size-3.5 text-content-muted" />
                {portfolioData.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="size-3.5 text-content-muted" />
                https://rigu.spaceX
              </span>
              <span className="flex items-center gap-1.5">
                <Github className="size-3.5 text-content-muted" />
                github.com/rintu62
              </span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-content-muted mb-3 flex items-center gap-2">
              <Award className="size-4 text-brand" />
              Professional Summary
            </h2>
            <p className="text-sm text-content leading-relaxed">
              Full Stack Web Developer and open source engineer with extensive experience in React,
              Next.js, TypeScript, and Rust. Passionate about building distributed, high-performance,
              and aesthetically polished web applications. Proven track record contributing to Bitcoin
              open-source ecosystems and developer tools.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-content-muted mb-4 flex items-center gap-2">
              <Briefcase className="size-4 text-brand" />
              Experience
            </h2>
            <div className="space-y-6">
              {portfolioData.experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-5 border-l-2 border-border-line">
                  <span className="absolute -left-[5px] top-1.5 size-2 rounded-full bg-brand" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="font-bold text-base text-content">{exp.role}</h3>
                    <span className="text-xs text-content-muted font-mono">{exp.period}</span>
                  </div>
                  <p className="text-xs font-semibold text-content-secondary mt-0.5">
                    {exp.company} • {exp.location}
                  </p>
                  <p className="text-xs sm:text-sm text-content mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-content-muted list-disc pl-4">
                    {exp.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-content-muted mb-3 flex items-center gap-2">
              <GraduationCap className="size-4 text-brand" />
              Education
            </h2>
            <div className="relative pl-5 border-l-2 border-border-line">
              <span className="absolute -left-[5px] top-1.5 size-2 rounded-full bg-brand" />
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="font-bold text-base text-content">
                  Bachelor of Technology in Computer Science
                </h3>
                <span className="text-xs text-content-muted font-mono">2023 – 2027</span>
              </div>
              <p className="text-xs font-semibold text-content-secondary mt-0.5">
                Amity University
              </p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-content-muted mb-3">
              Core Competencies
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Express.js",
                "Tailwind CSS",
                "Rust",
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "Docker",
                "Linux",
                "Git & GitHub Actions",
                "REST APIs",
                "WebSockets",
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="rounded-lg border border-border-line bg-surface px-3 py-1 text-xs font-medium text-content"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
