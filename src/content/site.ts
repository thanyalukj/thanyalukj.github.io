export interface SiteLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;          // Eyebrow on homepage, brand in nav
  fullName: string;      // For footer / SEO
  url: string;           // Production origin, no trailing slash
  headline: string;      // Homepage h1
  bio: string;           // 1-2 sentence homepage bio
  now: string;           // 1-2 sentences for the "Now" block
  about: string[];       // /about page paragraphs
  links: SiteLink[];     // Homepage + footer link row (in display order)
}

export const site: SiteConfig = {
  name: "Thanyaluk J.",
  fullName: "Thanyaluk Jirachaipitak",
  url: "https://thanyalukj.com",
  headline: "Senior software engineer building thoughtful products.",
  bio: "Bangkok-based. Currently focused on healthcare software and developer tooling.",
  now: "Building a GDM monitoring system. Learning Rust on weekends.",
  about: [
    "I'm a senior software engineer based in Bangkok. I work on healthcare software and developer tooling — small teams, real users, code that has to keep working when no one's watching.",
    "I care about clear interfaces, honest documentation, and software that respects the time of the people using it.",
    "Outside of work I'm usually reading, walking, or tinkering with a side project that I'll probably never finish.",
  ],
  links: [
    { label: "GitHub",   href: "https://github.com/thanyalukj" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/thanyalukj" },
    { label: "Email",    href: "mailto:thanyalukj@gmail.com" },
    { label: "Writing →", href: "/writing" },
  ],
};
