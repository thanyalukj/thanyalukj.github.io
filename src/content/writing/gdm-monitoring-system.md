---
title: "GDM Healthcare System, How I put it together."
description: "Putting together a website and LINE chatbot for GDM Monitoring System"
pubDate: 2026-05-05
draft: false
---

I've been developing a healthcare system for Gestational Diabetes Mellitus (GDM) patients. The system uses LINE (Thailand's dominant messaging platform, with ~95% penetration) as the primary patient interface, supported by a web dashboard for clinical staff and doctors. The goal is to improve daily glucose monitoring compliance, enable real-time clinical alerts, and reduce gaps in care between clinic visits.

## Tech stack

I started off by asking Claude to build a modern web app with a database, hosted on GitHub and deployed via GitHub's CI. After a few iterations, I settled on:

- **Next.js**: patient web views and the staff dashboard share one codebase, and Vercel integration is effortless.
- **Postgres on [Neon](https://neon.tech) (free tier)**: serverless Postgres with database branching, so each preview deployment can get its own fresh DB. The free tier is generous enough for a PoC.
- **[Vercel](https://vercel.com) (free tier)**: zero-config deploys from GitHub, a preview URL on every PR, and the free tier comfortably covers PoC traffic.
- **[LINE Messaging API](https://developers.line.biz/console/) + webhook (free tier)**: setting up the official account, the chatbot, and the webhook in the LINE Developers Console costs nothing at our usage level, and LINE is already where Thai patients live, so there's no app to install.

## Design

I started with Claude doing the design, but [Lovable](https://lovable.dev) does a noticeably better job. It's purpose-built for web design, and the output is more polished out of the box. My workflow now: get Claude to translate features into prompts, then hand them to Lovable. If you have a lot of screens, the Pro tier is worth it so you can iterate across all of them.

## Project management

I began with a markdown file in the repo, but with this many features and ideas, tracking got messy. A friend recommended [Linear](https://linear.app) and I'm so glad I found it. The killer part: Linear has an MCP connector for Claude, so I can tell Claude to pick up a ticket and update it automatically as the work progresses.

## Graphics

Graphics is the one thing AI still can't quite do for me. So I asked a friend to produce them in [Canva](https://www.canva.com).

## Total cost

Building a PoC like this is pretty cheap these days. The only paid items are Lovable and Claude. Everything else (Neon, Vercel, and even LINE's chatbot and webhook) starts on a free tier and only needs upgrading when you scale toward production.