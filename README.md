# Cynergy Attorneys website: drop-in source

Copy `src/`, `public/logo.png` and `.env.example` into your Next.js project (App Router, Tailwind CSS v4, TypeScript, `@/*` alias for `src/*`).
Replace your existing `src/app/layout.tsx` and `globals.css`.

    npm i zod lucide-react

Edit firm details in `src/config/firm.ts` and sample content in `src/content/data.ts`. Anything in [brackets] is a placeholder.

Forms need `RESEND_API_KEY`, `MAIL_FROM`, `MAIL_TO` (see `.env.example`). Until set, both forms say plainly that nothing was sent.
Calendar integration: implement `SchedulingProvider` in `src/lib/booking.ts`.

Verify: `npm run lint && npx tsc --noEmit && npm run build`
