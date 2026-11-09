export const portfolioData = {
  // =========================================================================
  // 1. PERSONAL INFORMATION (EDIT HERE)
  // =========================================================================
  name: "Rintu", // <-- Change your display name here (e.g. "Rintu")
  fullName: "Rintu Kumar",
  role: "Full Stack web developer",
  tagline: "A Full Stack web developer.",
  shortBio: "I build modern, interactive web applications with a strong emphasis on clean UI, Performance, and User Experience.",
  email: "rintu6287@gmail.com",
  
  // =========================================================================
  // 3 IMAGES CONFIGURATION (YAHAN APNI 3 IMAGES SET KAREIN):
  // Folder: D:\portfolio design rintu\public\images\
  // =========================================================================

  // 1st IMAGE (Circle - Anime Character jo page load/refresh par shuru me dikhta hai):
  avatarAnimeImage: "/images/anime.jpg", // <-- ya "/image.png" ya koi bhi anime image path

  // 2nd IMAGE (Circle - Aapki real photo jo 'psst, click me!' click karne par reveal hogi):
  avatarRealImage: "/images/rintu.png",   // <-- ya "/public.png" ya aapki photo

  // 3rd IMAGE / VIDEO / GIF BANNER (Rectangle - Upar ka background banner):
  // Option 1: "/images/background.mp4" (Smooth fast offline video looping)
  // Option 2: "https://assets.pinterest.com/ext/embed.html?id=1149543873659648052" (Pinterest embed)
  heroBannerImage: "/images/background.mp4",

  // RESUME PDF FILE:
  resumeUrl: "/images/resume.pdf",

  // Backward-compatibility:
  avatarImage: "/images/avatar-anime.svg",

  currentFocus: {
    title: "REA: Reverse Engineer Anything",
    subtitle: "Open Source Contributor",
    icon: "https://assets.softr-files.com/applications/5abf9a13-d06f-44d6-b50c-187328a34a81/assets/c44fe3ae-957b-45e6-b30f-37986cc291f3.png",
  },

  status: {
    online: true,
    codedToday: "9h 33m",
  },

  // =========================================================================
  // 2. SOCIAL LINKS (EDIT HERE)
  // =========================================================================
  socials: [
    {
      name: "X",
      handle: "@rintu6287@gmail.com",
      url: "https://x.com/",
      iconType: "x",
      previewImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80",
    },
    {
      name: "LinkedIn",
      handle: "Rintu",
      url: "www.linkedin.com/in/rintu-kumar-30791a2a8",
      iconType: "linkedin",
      previewImage: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&q=80",
    },
    {
      name: "Instagram",
      handle: "@_rigu",
      url: "www.linkedin.com/in/rintu-kumar-30791a2a8",
      iconType: "instagram",
      previewImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&q=80",
    },
    {
      name: "Pinterest",
      handle: "rigu",
      url: "https",
      iconType: "pinterest",
      previewImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&q=80",
    },
    {
      name: "GitHub",
      handle: "Rintu62",
      url: "",
      iconType: "github",
      previewImage: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=500&q=80",
    },
    {
      name: "Email",
      handle: "rintu6287@gmail.com",
      url: "rigu:rintu6287gmail.com",
      iconType: "email",
      previewImage: "https://images.unsplash.com/photo-1557683316-973673baf926?w=500&q=80",
    },
  ],

  // =========================================================================
  // 3. PROJECTS SECTION (EDIT HERE)
  // =========================================================================
  projectsCount: "07",
  projects: [
    {
      title: "Aries",
      description: "Your personal AI assistant to automate tasks, answer questions..",
      stars: "2,413",
      iconType: "R",
      url: "",
    },
    {
      title: "Pkey",
      description: "A secure web vault for accessing your essential files and contacts anytime, anywhere.",
      stars: "1,940",
      iconType: "eye-off",
      url: "",
    },
    {
      title: "Gyotaku",
      description: "Search every screenshot you've ever taken by the text inside it.",
      stars: "377",
      iconType: "terminal",
      url: "",
    },
    {
      title: "Ghostchat",
      description: "Chat anonymously, stay private, and connect freely — No identity.",
      stars: "",
      iconType: "infinity",
      url: "",
    },
    {
      title: "Contwme",
      description: "Hey! Here's where you can find me across the internet. Let's connect!",
      stars: "",
      iconType: "waveform",
      url: "",
    },
    {
      title: "Photon",
      description: "A nanosecond-scale NASDAQ ITCH 5.0 feed handler and matching engine in C++20, with...",
      stars: "",
      iconType: "atom",
      url: "",
    },
  ],

  // =========================================================================
  // 4. GITHUB ACTIVITY (EDIT HERE)
  // =========================================================================
  githubUsername: "Rintu62", // <-- Put your GitHub username here
  githubActivity: {
    year: "2026",
    contributions: "215",
  },

  // =========================================================================
  // 5. TECH STACK & TOOLS
  // =========================================================================
  techStack: [
    { name: "C++", category: "Language", icon: "https://skillicons.dev/icons?i=cpp" },
    { name: "C", category: "Language", icon: "https://skillicons.dev/icons?i=c" },
    { name: "Python", category: "Language", icon: "https://skillicons.dev/icons?i=python" },
    { name: "JavaScript", category: "Language", icon: "https://skillicons.dev/icons?i=js" },
    { name: "TypeScript", category: "Language", icon: "https://skillicons.dev/icons?i=ts" },
    { name: "Java", category: "Language", icon: "https://skillicons.dev/icons?i=java" },
    // { name: "Rust", category: "Language", icon: "https://skillicons.dev/icons?i=rust" },
    { name: "React", category: "UI Library", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Next.js", category: "Framework", icon: "https://skillicons.dev/icons?i=next" },
    { name: "Tailwind", category: "Styling", icon: "https://skillicons.dev/icons?i=tailwind" },
    // { name: "Framer Motion", category: "Animations", icon: "https://cdn.simpleicons.org/framer/white" },
    // { name: "GSAP", category: "Animations", icon: "https://cdn.simpleicons.org/greensock/white" },
    { name: "Node.js", category: "Runtime", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Express.js", category: "Backend", icon: "https://skillicons.dev/icons?i=express" },
    // { name: "Bun", category: "Runtime", icon: "https://skillicons.dev/icons?i=bun" },
    { name: "Socket.io", category: "Real-time", icon: "https://cdn.simpleicons.org/socketdotio/white" },
    { name: "MongoDB", category: "Database", icon: "https://skillicons.dev/icons?i=mongodb" },
    { name: "PostgreSQL", category: "Database", icon: "https://skillicons.dev/icons?i=postgres" },
    { name: "Redis", category: "Caching", icon: "https://skillicons.dev/icons?i=redis" },
    // { name: "Drizzle ORM", category: "ORM", icon: "https://cdn.simpleicons.org/drizzle/white" },
    { name: "Docker", category: "Containerization", icon: "https://skillicons.dev/icons?i=docker" },
    // { name: "Nginx", category: "Web Server", icon: "https://skillicons.dev/icons?i=nginx" },
    { name: "Linux", category: "Fedora / Arch", icon: "https://skillicons.dev/icons?i=linux" },
    { name: "Git", category: "Version Control", icon: "https://skillicons.dev/icons?i=git" },
    { name: "GitHub Actions", category: "CI/CD", icon: "https://skillicons.dev/icons?i=githubactions" },
    { name: "Vercel", category: "Deployment", icon: "https://skillicons.dev/icons?i=vercel" },
    // { name: "Postman", category: "API Testing", icon: "https://skillicons.dev/icons?i=postman" },
  ],

  // =========================================================================
  // 6. WORK EXPERIENCES
  // =========================================================================
  experiences: [
    {
      id: "experience-summer",
      role: "Open Source Contributor (TypeScript / -------)",
      company: "REA: Reverse Engineer Anything — morluto",
      period: "May 2026 – Aug 2026",
      location: "Remote",
      iconType: "bitcoin",
      description: "Contributing to decentralized e-commerce and Bitcoin payment integrations using Cashu, Nostr, and TypeScript.",
      points: [
        "Implemented Cashu ecash token payment flows and wallet synchronization.",
        "Refactored state management reducing unnecessary re-renders by 35%.",
        "Collaborated with international open source maintainers.",
      ],
    },
    {
      id: "experience-open-source",
      role: "Contributor",
      company: "Open Source Ecosystem",
      period: "2025 – Present",
      location: "Remote",
      iconType: "github",
      description: "Active contributor across web performance, developer tooling, and modern UI libraries.",
      points: [
        "Submitted bug fixes and documentation enhancements to trending GitHub repositories.",
        "Developed custom CLI tools for developer productivity.",
      ],
    },
    {
      id: "experience-freelance",
      role: "Full-Stack Developer",
      company: "Freelance / Contracting",
      period: "2025 – Present",
      location: "Remote",
      iconType: "briefcase",
      description: "Crafting end-to-end web apps, SaaS dashboards, and landing pages for clients worldwide.",
      points: [
        "Delivered performant Next.js applications with 98+ Lighthouse scores.",
        "Engineered scalable REST & GraphQL APIs with Node.js and PostgreSQL.",
      ],
    },
  ],

  friends: [
    { name: "rishu", url: "", image: "" },
    { name: "ridham", url: "", image: "" },
    { name: "shubham", url: "", image: "" },
  ],

  quote: {
    text: "If you never want to be criticized, don't do anything new.",
    author: "Jeff Bezos",
  },
  calLink: "https://cal.com",
};
