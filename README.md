
---

## 🚀 Quick Start

1. Open this folder in your terminal or VS Code:
   ```bash
   cd "D:\portfolio design rintu"
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## 🎨 Key Features & Components

* **CAD / Blueprint Grid:** Vertical dashed guidelines running through the page and section dividers with 4-corner cross joints.
* **Theme Switching:** Dark / Light mode toggle button that persists in `localStorage`.
* **Avatar Easter Egg:** Clickable avatar with confetti blast (`canvas-confetti`) and "psst, click me!" handwritten note.
* **Live Status Badge:** Active pulsing indicator and coding time counter tooltip.
* **Command Palette (`Ctrl+K` / `⌘K`):** Keyboard shortcut popup for fast navigation across all pages and actions.
* **Interactive Tech Stack:** Grid with category tooltips on hover (Language, UI Library, Database, etc.).
* **Experience Accordion:** Expandable work history cards with impact bullet points.
* **Featured Projects:** 2-column cards with angled shiny ribbon badges, hover animations, tech tags, and live/repo links.
* **GitHub Activity Heatmap:** 52-week green squares contribution chart with month headers and PR tabs (Merged, Open, Closed).
* **Cal.com Integration:** Expanding "+ You Book a call" button.
* **Full Multi-Page Support:**
  * `/` - Interactive home dashboard
  * `/projects` - Filterable project gallery with live search
  * `/blogs` - Technical writing articles
  * `/guestbook` - Interactive guestbook with persistent local storage
  * `/resume` - Printable resume / CV
  * `/Shenanigans` - Mini playground experiments & reaction time test

---

## ✏️ How to Customize Your Details

All data is centrally configured in **`src/data/portfolioData.ts`**!
You can edit:
- `name`: Your name (e.g. "Rintu")
- `role` & `tagline`: Your designation
- `email`: Your contact email
- `currentFocus`: What you are currently building
- `socials`: Links to your GitHub, LinkedIn, X, etc.
- `techStack`: Your skills and icons
- `projects`: Add, edit, or remove project cards
- `experiences`: Your work history
