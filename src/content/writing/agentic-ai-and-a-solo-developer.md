---
title: "Agentic AI and A Solo Developer"
description: "On planning, plugins, and the non-coding skills you need when you're building real software with AI."
pubDate: 2026-04-28
draft: false
---

Back in February I started using AI a bit more, and I'd been looking for a side project — something to learn from and fill my evenings, other than Netflix. Thank God my friend in Thailand messaged me around the same time, asking if I knew anyone who could build a small app to track patients' glucose levels.

It started as a little app, but the more we talked, the more ideas came up, and pretty quickly I thought *this is too big for me on my own*. I handed it off to someone else first. Then I sat with it for a while, started hearing about Claude, and thought — maybe I could wing it with AI. So I asked around, talked to a few people who'd been using AI for a while, and decided to take it on.

## What I learned from building software with AI

### Plan First

A wise friend told me his rule for working with AI: **Planning**, **Planning**, and **Planning**.

When you ask AI to do something, it will start. And if it pauses, it will keep asking whether you want it to start. The answer, for the first while, is *no*.

Think it through before you let AI produce any code — especially on a big project with many features. Have your requirements ready. Sketch the feature set. Break the work into phases. Discuss it with AI a lot, *before* any code gets written.

Or use a plugin that gives the AI a workflow to follow, instead of letting it run with too little information. A couple I've come across:

- [gsd-build/get-shit-done](https://github.com/gsd-build/get-shit-done) — a light-weight, powerful meta-prompting, context engineering, and spec-driven development system.
- [obra/superpowers](https://github.com/obra/superpowers) — a complete software development methodology for your coding agents, built on a set of composable skills and the initial instructions that make sure the agent uses them.

I personally use the `superpowers` plugin because it fits me well. I know a friend who encourages his team to use `gsd`.

### Using Skills

For engineering, I rely on the superpowers plugin. But as a solo developer I need more than engineering skills — I need to cover the whole software life cycle, the parts that aren't just writing code. Three skills I lean on:

- **Product Owner.** This is the skill I reach for when I'm about to start something new. It pushes me to answer the basics before I write any code — who actually needs the feature, what problem it solves, what the minimum useful version looks like, and what the obvious edge cases are. It writes user stories with `Given / When / Then` acceptance criteria, so I've got something concrete and testable to point at later instead of a vague "make X work." Without it, I tend to over-build; with it, I ship the smallest thing that's actually useful and iterate from there.

- **Project Manager.** Once I know what I'm building, this one helps me sequence the work. It enforces dependencies-first (database schema → API routes → types → i18n keys, before any UI), groups tasks into focused 1–2 week sprints with a clear theme, and tracks progress across the project's phases. The biggest thing it does for me is keep scope honest — distinguishing "must have" from "wouldn't it be nice if…" so I don't burn a weekend on optional polish while a critical path is half-built.

- **UX/UI Designer.** This is the skill I use most when I'm laying out a screen. It first asks who the screen is for (a patient on a phone and a clinician at a desk need very different things), then produces an ASCII wireframe so I can argue about layout *before* any code is written. It bakes in healthcare-specific UX rules — never use color alone to signal risk, pair icons with text labels, large touch targets on mobile, no hover-only interactions — and points me at the right design-system components to use, which makes the handoff to implementation almost trivial.

---

> Genesis 16:13 (NIV) She gave this name to the LORD who spoke to her: "You are the God who sees me," for she said, "I have now seen the One who sees me."

Thank you, God, for you see in me thoroughly, you know what I need and provided me this project to work on.
