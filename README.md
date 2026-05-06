# Highstack Waitlist

Full-stack waitlist & job board built with `Qwik City`, `Supabase` and deployed on `Vercel Edge`.

🌐 **Live demo:** https://waitlisthighstack.vercel.app/

---

## 📑 Table of Contents

1. [Overview](#-overview)
2. [Features](#-features)
3. [Tech Stack](#-tech-stack)
4. [Project Structure](#-project-structure)
5. [Running Locally](#-running-locally)
6. [Deployment](#-deployment)
7. [Improvements over the Original Waitlist](#-improvements-over-the-original-waitlist)
8. [Challenges Faced](#-challenges-faced)
9. [Backlog](#-backlog)
10. [Author](#-author)

---

## 🎯 Overview

Production-ready full-stack application that captures user emails for a product
waitlist and powers a job board with PDF résumé uploads. It comes with a
protected admin dashboard for real-time business metrics and CSV export.

Built from scratch in ~1 week, end-to-end (setup → deploy).

---

## ✨ Features

### Public site

- 📧 Waitlist signup with native `HTML5` confirmation dialog (auto-close in 15s)
- 💼 Job board with 19 positions, instant search and filter-by-tag
- 🔗 Shareable deeplinks — filters live in the URL (`/jobs?q=engineer&tag=Engineering`)
- 📄 Job application form with PDF résumé upload (10 MB max)
- 🔒 Privacy Policy and custom 404 pages
- ♿ Accessibility-first (`prefers-reduced-motion`, semantic HTML, keyboard navigation)

### Admin dashboard (`/admin`)

- 🔐 Cookie-based authentication (HTTP-only, SHA-256 via Web Crypto API)
- 📊 Real-time KPIs: total signups, total applications, last 7 days
- 📋 Recent waitlist signups and recent applications tables
- 📥 One-click CSV export (all rows, Excel-compatible)
- 🚀 6 parallel database queries — no waterfalls, no loading states

---

## 🛠 Tech Stack

| Layer | Technology | Icon |
|---|---|---|
| Framework | [Qwik](https://qwik.dev/) + Qwik City | <img src="https://cdn.simpleicons.org/qwik" width="24" alt="Qwik" /> |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) (CSS-first, no config file) | <img src="https://cdn.simpleicons.org/tailwindcss" width="24" alt="Tailwind CSS" /> |
| Database & Storage | [Supabase](https://supabase.com/) (Postgres + Object Storage) | <img src="https://cdn.simpleicons.org/supabase" width="24" alt="Supabase" /> |
| Authentication | Cookie HTTP-only + SHA-256 (Web Crypto API) | 🔐 |
| Telemetry | [Vercel Analytics](https://vercel.com/analytics) + Speed Insights | <img src="https://cdn.simpleicons.org/vercel" width="24" alt="Vercel" /> |
| Icons | [`@qwikest/icons`](https://www.npmjs.com/package/@qwikest/icons) (Lucide) | <img src="https://cdn.simpleicons.org/lucide" width="24" alt="Lucide" /> |
| Hosting | [Vercel Edge Functions](https://vercel.com/docs/functions) | <img src="https://cdn.simpleicons.org/vercel" width="24" alt="Vercel" /> |
| Language | TypeScript | <img src="https://cdn.simpleicons.org/typescript" width="24" alt="TypeScript" /> |
| Build tool | Vite 7 | <img src="https://cdn.simpleicons.org/vite" width="24" alt="Vite" /> |

---

## 📁 Project Structure

```
├── adapters/
│   └── vercel-edge/         # Vercel Edge build adapter
├── public/                  # Static assets
└── src/
    ├── components/          # Reusable UI components
    ├── lib/                 # Supabase client, admin auth helpers
    ├── routes/
    │   ├── (admin)/         # Protected admin route group
    │   ├── jobs/            # Job board (list + [slug] detail)
    │   ├── privacy-policy/
    │   └── index.tsx        # Home (waitlist)
    ├── entry.ssr.tsx
    ├── entry.vercel-edge.tsx
    ├── global.css           # Tailwind 4 entry + @theme tokens
    └── root.tsx
```

---

## 🚀 Running Locally

### Prerequisites

- Node.js `^18.17` or `^20.3` or `>=21`
- npm (or pnpm/yarn)
- A [Supabase](https://supabase.com/) project (free tier is enough)

### Setup

1. **Clone the repo**
   ```shell
   git clone <repo-url> && cd waitlist
   ```

2. **Install dependencies**
   ```shell
   npm install
   ```

3. **Create `.env.local`** at the project root (use `.env.example` as reference):
   ```env
   SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ADMIN_PASSWORD=your-strong-password
   VERCEL_PROJECT_URL=https://vercel.com/your-username/your-project
   ```

4. **Set up Supabase:**
   - Create two tables: `waitlist_signups` and `job_applications`
   - Create a public Storage bucket named `resumes`

5. **Run the dev server**
   ```shell
   npm start
   ```
   The site will open at `http://localhost:5173`.

### Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start the dev server (SSR mode) with HMR |
| `npm run build` | Production build (client + server) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on `src/**/*.ts*` |
| `npm run fmt` | Format the codebase with Prettier |
| `npm run deploy` | Deploy to Vercel via the Vercel CLI |

---

## ☁️ Deployment

The project is deployed on **Vercel Edge Functions** (V8 isolates that run
geographically close to each user, with near-zero cold start).

### Required environment variables (set in Vercel dashboard)

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_PASSWORD`
- `VERCEL_PROJECT_URL`

### Deploy options

- **Git integration (recommended):** push to your repo connected to Vercel — every push triggers an automatic deploy.
- **CLI:**
  ```shell
  npm run deploy
  ```

The build command is `npm run build`, which runs both the client build (Vite) and the server build (Vercel Edge adapter).

---

## 🌟 Improvements over the Original Waitlist

- 🔗 Footer with company social links (LinkedIn)
- 📧 Email field standardized between home and job application form
- ✅ Visual confirmation after signup (native `<dialog>`)
- 🚫 Custom Not Found page (instead of the default 404)
- 💬 Clearer required-field validation messages

---

## 🧗 Challenges Faced

- 🎨 **Background gradient** — replicating the original purple radial took multiple `radial-gradient()` layers via a CSS custom property
- 🔤 **Premium fonts** in the original — substituted with **Inter** + **Geist** (free on Google Fonts, visually close)
- 📐 **Pixel-perfect styling** is hard — moved from the "Inspect" to the "Computed" tab in DevTools to extract exact values

---

## 🚧 Backlog

- Mobile validation across all 5 pages
- Final styling polish: Home, `/jobs`, `/jobs/[slug]`, Privacy Policy, Not Found
- Confirmation email after waitlist signup / job application

---

## 👤 Author

Built by **Klecianny Melo** — [GitHub](https://github.com/Kecbm) · [LinkedIn](https://www.linkedin.com/in/kleciannymelo/)
