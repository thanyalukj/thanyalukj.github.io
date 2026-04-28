export interface SiteLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string; // Eyebrow on homepage, brand in nav
  fullName: string; // For footer / SEO
  url: string; // Production origin, no trailing slash
  headline: string; // Homepage h1
  bio: string; // 1-2 sentence homepage bio
  now: string; // 1-2 sentences for the "Now" block
  about: string[]; // /about page paragraphs
  links: SiteLink[]; // Homepage + footer link row (in display order)
}

export const site: SiteConfig = {
  name: "Thanyaluk J.",
  fullName: "Thanyaluk Jirapech-umpai",
  url: "https://thanyalukj.com",
  headline: "Senior software engineer building thoughtful products.",
  bio: "Edinburgh-based senior mobile engineer at FanDuel.",
  now: "Building shared mobile libraries used across FanDuel's apps — code that works the same way everywhere it's used.",
  about: [
    "I'm a senior mobile engineer based in Edinburgh, Scotland. I'm originally from Thailand and moved here in 2008; before that I taught computer science at Chiang Mai University for a few years, with a master's in informatics from the University of Edinburgh somewhere in between.",
    "Since September 2024 I've been at FanDuel, working on shared mobile libraries — the kind of foundational code that powers multiple apps and has to work the same way everywhere it's used. It's a return: I was at FanDuel earlier in my career too, leading the growth team's mobile work between 2015 and 2018.",
    "In between I spent four years at Unity on the Analytics SDK for Made With Unity projects — full-stack with React and Java — including a couple of years leading that team as Engineering Manager before I stepped back into a hands-on role, which is where I'm happiest. Before that: Hello Relish (mobile and Clojure backends), and earlier still, iOS apps for high-street retailers at Kotikan and NN4M.",
    "The through-line is small teams, real users, and code that has to keep working when no one's watching. I care about clear interfaces, honest documentation, test-driven development, and software that respects the time of the people using it. Outside of work: gym, movies, travel, photography, and the occasional unfinished tune on the ukulele.",
  ],
  links: [
    { label: "GitHub", href: "https://github.com/thanyalukj" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/thanyalukj" },
    { label: "Email", href: "mailto:thanyalukj@gmail.com" },
    { label: "Writing →", href: "/writing" },
  ],
};
