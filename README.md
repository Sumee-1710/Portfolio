# Sumeet Powar — Personal Portfolio

Professional portfolio website for Sumeet Powar — AI/ML, Data Analytics, and Python Developer.

Built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Lucide React**.

---

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Framework  | Next.js 16 (App Router)             |
| Language   | TypeScript                          |
| Styling    | Tailwind CSS v4 + CSS custom props  |
| Icons      | Lucide React                        |
| Fonts      | Inter (Google Fonts)                |
| Deployment | Vercel (recommended)                |

---

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles, CSS variables, animations
│   ├── layout.tsx        # Root layout + metadata + font
│   └── page.tsx          # Main page — assembles all sections
├── components/
│   ├── Navbar.tsx        # Sticky navbar with active-section highlighting
│   ├── Hero.tsx          # Hero with typewriter effect and stats
│   ├── About.tsx         # About + quick info card
│   ├── Skills.tsx        # Categorised skill tags
│   ├── Experience.tsx    # Work experience with bullet points
│   ├── Projects.tsx      # Project cards with expandable detail view
│   ├── Education.tsx     # Education cards
│   ├── Certifications.tsx# Certification cards
│   ├── Achievements.tsx  # Achievements / awards
│   └── Contact.tsx       # Contact links + footer
├── hooks/
│   └── useIntersectionObserver.ts  # Scroll-reveal hook
├── lib/
│   └── data.ts           # All portfolio content (single source of truth)
└── public/
    └── Sumeet-Powar-Resume.pdf     # ← Place your resume PDF here
```

---

## Local Development

### Prerequisites

- Node.js 18+
- npm 9+

### Install dependencies

```bash
npm install
```

### Start dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Adding Your Resume PDF

1. Export your resume as a PDF.
2. Rename it to `Sumeet-Powar-Resume.pdf`.
3. Place it in the `public/` folder.
4. The "Download Resume" button will work automatically.

---

## Updating Content

All portfolio content lives in **`lib/data.ts`**.

To update:
- **Personal info** → edit the `personal` object
- **Skills** → edit the `skills` array
- **Experience** → edit the `experience` array
- **Projects** → edit the `projects` array
- **Education** → edit the `education` array
- **Certifications** → edit the `certifications` array
- **Achievements** → edit the `achievements` array

---

## Updating Links

In `lib/data.ts`, update:

```ts
export const personal = {
  github:   "https://github.com/Sumee-1710",
  linkedin: "https://www.linkedin.com/in/sumeetpowar17/",  // ← verified URL
  ...
};
```

---

## Build for Production

```bash
npm run build
npm run start
```

---

## Deploy to Vercel (Recommended)

1. Push the project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel auto-detects Next.js — click **Deploy**.
4. Done. Your portfolio is live.

---

## Lint

```bash
npm run lint
```

---

## Notes

- All content is sourced from the resume and verified GitHub repositories only.
- No fake statistics, fake testimonials, or invented experience.
- The portfolio is fully responsive (mobile, tablet, desktop).
- Sections animate in on scroll using `IntersectionObserver`.
