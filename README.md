# Simon Wand Portfolio

Production-ready portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4

## Features

- Locale-based routing (`/de`, `/en`) with browser-language redirect middleware
- Full bilingual UI content (German + English)
- Light/Dark mode toggle with system default + persisted preference
- Functional contact form backend via Resend (`/api/contact`)
- Responsive section-based portfolio layout
- SEO basics: locale metadata, alternates, sitemap, robots, JSON-LD

## Project structure

- `src/app/[locale]`: locale page + locale metadata layout
- `src/app`: root layout, global styles, robots/sitemap
- `src/components/site`: reusable portfolio sections and header controls
- `src/components/providers`: theme provider
- `src/components/ui`: small reusable UI primitives
- `src/data/portfolio.ts`: centralized typed i18n content
- `src/lib/i18n.ts`: locale helpers/types
- `middleware.ts`: root redirect + locale cookie behavior

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Contact form setup (Resend)

1. Copy `.env.example` to `.env.local`.
2. Set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL`.
3. Use a verified domain email in production for `CONTACT_FROM_EMAIL`.

## Production

```bash
npm run build
npm run start
```

## Content updates

Update text, labels, SEO copy, and section data in:

- `src/data/portfolio.ts`

## Profile photo

The hero photo path is set in `src/data/portfolio.ts` (`person.profileImage`).
