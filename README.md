# Wisdom EFC Website

Static Next.js and Tailwind CSS website for Wisdom Economical Feasibility Consultancy.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
```

The static export is generated in `out/`.

## Content Editing

Most visible website content is in:

```text
src/content/siteContent.ts
```

Edit phone, email, WhatsApp link, services, FAQ, packages, SEO text and image placeholder labels there.

## Deployment

Deploy to Vercel by importing this folder as a Next.js project. Use the default build command:

```bash
npm run build
```

No backend, database, Firebase, Google Cloud, AI API or paid API is required.
