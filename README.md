# Muhammad Bilal — Portfolio

Generative AI Engineer portfolio for [bilalgilani.me](https://bilalgilani.me), built with the Next.js App Router, React, TypeScript, and custom CSS.

## What is included

- Deep navy visual system with cyan, violet, and warm gradient accents
- Responsive, accessible desktop and mobile navigation
- Typed portfolio content in `content/site.ts`
- Home, projects, about, experience, skills, and contact pages
- Generative AI learning track covering LLM APIs, LangChain, Hugging Face, vector databases, Pinecone, ChromaDB, Llama 2, and Gemini Pro
- Bundled technology logos with reduced-motion-safe animation
- Portrait-led About page with GitHub, LinkedIn, and copyable email
- LaunchMind AI and Vivid Horizon case studies
- Permanent redirects from `/work` to `/projects` and `/learning` to `/skills`
- Page metadata, Open Graph image, JSON-LD, sitemap, robots, manifest, and custom 404
- Direct email, phone, LinkedIn, GitHub, and CV links
- Supplied CV at `/Muhammad-Bilal-CV.pdf`

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
npm run lint
npm run type-check
npm run build
```

Run all three checks with:

```bash
npm run check
```

## Production

```bash
npm run build
npm run start
```

The current production surface is the Next.js application under `app/`. Historical Vue and Express source remains in `src/` and `server/` for reference, but it is not imported, bundled, or required by the portfolio runtime.
