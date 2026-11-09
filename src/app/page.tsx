"use client";

import React, { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { GithubActivity } from "@/components/GithubActivity";
import { QuoteSection } from "@/components/QuoteSection";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/CadBorders";
import { CommandMenu } from "@/components/CommandMenu";

export default function Home() {
  const [commandMenuOpen, setCommandMenuOpen] = useState(false);

  return (
    <div className="py-2">
      <HeroSection onOpenCommandMenu={() => setCommandMenuOpen(true)} />

      <SectionDivider />

      <TechStackSection />

      <SectionDivider />

      <ExperienceSection />

      <SectionDivider />

      <ProjectsSection />

      <SectionDivider />

      <GithubActivity />

      <SectionDivider />

      <QuoteSection />

      <Footer />

      <CommandMenu
        isOpen={commandMenuOpen}
        onClose={() => setCommandMenuOpen(false)}
      />
    </div>
  );
}
