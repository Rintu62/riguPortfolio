import { NextResponse } from "next/server";

export const revalidate = 1800; // Cache for 30 minutes, re-fetches latest commits automatically

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || "Rintu62";

  try {
    // 1. Direct fetch from GitHub's official public user contributions page
    const ghRes = await fetch(`https://github.com/users/${username}/contributions`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml",
      },
      next: { revalidate: 1800 },
    });

    if (ghRes.ok) {
      const html = await ghRes.text();

      // Extract total contributions (e.g. "215 contributions in the last year")
      const totalMatch = html.match(/([\d,]+)\s+contributions\s+in\s+the\s+(?:last\s+year|\d{4})/i);
      const total = totalMatch ? parseInt(totalMatch[1].replace(/,/g, ""), 10) : 215;

      // Extract all calendar days (<td data-date="..." data-level="...">)
      const contributions: { date: string; level: number; count: number }[] = [];
      const tdRegex = /<td\b([^>]*)>/gi;
      let match;
      while ((match = tdRegex.exec(html)) !== null) {
        const attrs = match[1];
        const dateMatch = attrs.match(/data-date="([^"]+)"/);
        const levelMatch = attrs.match(/data-level="([^"]+)"/);
        if (dateMatch) {
          const level = levelMatch ? parseInt(levelMatch[1], 10) : 0;
          contributions.push({
            date: dateMatch[1],
            level,
            count: level === 0 ? 0 : level === 1 ? 1 : level === 2 ? 3 : level === 3 ? 6 : 10,
          });
        }
      }

      if (contributions.length > 50) {
        return NextResponse.json({
          total: { lastYear: total },
          contributions,
          source: "github.com",
        });
      }
    }
  } catch (err) {
    console.warn("Direct GitHub HTML fetch error, trying fallback API...", err);
  }

  // 2. Secondary fallback API
  try {
    const apiRes = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      {
        headers: { "User-Agent": "Portfolio-App" },
        next: { revalidate: 1800 },
      }
    );

    if (apiRes.ok) {
      const data = await apiRes.json();
      if (data && Array.isArray(data.contributions) && data.contributions.length > 0) {
        return NextResponse.json(data);
      }
    }
  } catch (err) {
    console.warn("Secondary API error...", err);
  }

  // 3. If both network calls are unavailable, return fallback flag
  return NextResponse.json({
    fallback: true,
    total: { lastYear: 215 },
    contributions: [],
  });
}
