# Simon Wand Portfolio

Production-ready portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4

## Project structure

- `src/app`: app router pages, layout, global styles, SEO route files
- `src/components/site`: reusable portfolio sections (navbar, hero, about, skills, experience, projects, contact, footer)
- `src/components/ui`: small reusable UI primitives
- `src/data/portfolio.ts`: centralized content and links for easy editing
- `public/images`: static image assets

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm run start
```

## Content updates

Update text, links, social URLs, contact info, and project data in:

- `src/data/portfolio.ts`