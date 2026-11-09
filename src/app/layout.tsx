import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { VerticalCadBorders } from "@/components/CadBorders";

export const metadata: Metadata = {
  title: "Rigu | Full Stack Developer & Web Engineer Portfolio",
  description:
    "Full Stack Developer specializing in React, Next.js, TypeScript & Node.js. Building scalable web apps with clean UI and great user experience.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "TypeScript", "Node.js", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-content antialiased selection:bg-brand/20 selection:text-brand">
        {/* CAD Blueprint Vertical Guideline Borders */}
        <VerticalCadBorders />

        <Navbar />

        <main className="mx-auto w-full max-w-[720px] px-4 sm:px-6 relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
