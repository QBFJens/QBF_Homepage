# QBITFLOW Homepage — Next.js/Vercel

A Vercel-ready Next.js landing page based on the supplied QBITFLOW briefing. Text and image assets are extracted into `public/briefing`.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

Import this repository/folder in Vercel. The default Next.js build command is:

```bash
npm run build
```

## Notes

- Quote buttons use `info@qbitflow.com`. Change the `email` constant in `app/page.tsx` if a different address should be used.
- Placeholder routes `/imprint` and `/data-protection` are linked in the footer and should be implemented or replaced with the existing legal URLs.
- The page uses the App Router (`app/`) and Tailwind CSS.
