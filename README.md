# cv

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/)

Personal CV web app with a minimalist, print-friendly layout. Deployed on Vercel.

> Based on [BartoszJarocki/cv](https://github.com/BartoszJarocki/cv) — all credit for the original design and implementation goes to [Bartosz Jarocki](https://jarocki.me).

## getting started

```bash
git clone https://github.com/jsolana/cv.git
cd cv
pnpm install
pnpm dev
# open http://localhost:3000
```

## customization

All resume content lives in a single file:

```typescript
// src/data/resume-data.ts
export const RESUME_DATA = {
  name: "Your Name",
  initials: "YN",
  location: "Your City, Country",
  about: "Brief description",
  summary: "Professional summary",
  avatarUrl: "https://...",
  contact: { email: "", tel: "", social: [] },
  education: [],
  work: [],
  skills: [],
  projects: [],
}
```

Styling uses Tailwind CSS — customize colors in `tailwind.config.js` and global styles in `src/app/globals.css`.

## project structure

```
src/
├── app/                # next.js app router
│   ├── components/     # page-level components
│   │   ├── education.tsx
│   │   ├── header.tsx
│   │   ├── projects.tsx
│   │   ├── skills.tsx
│   │   ├── summary.tsx
│   │   └── work-experience.tsx
│   ├── layout.tsx      # root layout with metadata
│   └── page.tsx        # main resume page
├── components/         # shared components
│   ├── icons/          # social icon components
│   └── ui/             # shadcn/ui components
├── data/
│   └── resume-data.ts  # ← edit this file to customize
└── lib/
    ├── structured-data.ts
    ├── types.ts
    └── utils.ts
```

## scripts

```bash
pnpm dev          # start development server
pnpm build        # build for production
pnpm start        # start production server
pnpm lint         # run biome linting checks
pnpm lint:fix     # run biome linting with auto-fix
pnpm format       # check code formatting with biome
pnpm format:fix   # format code with biome
pnpm check        # run both linting and formatting checks
pnpm check:fix    # run both linting and formatting with auto-fix
```

## license

MIT
