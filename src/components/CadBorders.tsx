"use client";

import React from "react";

export function VerticalCadBorders() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 z-[40] hidden overflow-hidden sm:block left-1/2 -translate-x-1/2 w-[720px] max-w-full"
    >
      <div className="h-full w-full border-x border-dashed border-neutral-300 dark:border-[#272727]" />
    </div>
  );
}

export function SectionDivider() {
  return (
    <div className="relative w-full h-10 border-y border-dashed border-neutral-300 dark:border-[#272727] my-8 overflow-visible">
      {/* 4 corner cross joints */}
      <span
        aria-hidden="true"
        className="cad-joint hidden sm:block top-0"
        style={{ left: "calc(50% - 360px)" }}
      />
      <span
        aria-hidden="true"
        className="cad-joint hidden sm:block top-0"
        style={{ left: "calc(50% + 360px)" }}
      />
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
    </div>
  );
}
